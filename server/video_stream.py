import base64
import os

import cv2
import numpy as np
from fastapi import APIRouter, FastAPI, Response, WebSocket

from config.vision_config import VISION_CONFIG, VISION_PROFILES
from core.vision.node import VisionNode
from core.vision.node_manager import nodes
from core.vision.replay_service import ReplayService
from server.api_vision import router as api_vision_router
from server.mobile_ws import router as mobile_ws_router
from server.websocket_server import router as websocket_router

app = FastAPI()
router = APIRouter()
replay = ReplayService()

app.include_router(api_vision_router, prefix="/api")
app.include_router(mobile_ws_router, prefix="/api")
app.include_router(websocket_router, prefix="/api")

camera = cv2.VideoCapture(0)

if not nodes.nodes:
    nodes.add_node(VisionNode("local0", "Laptop Kamera", camera_index=0))
    nodes.add_node(VisionNode("local1", "USB Kamera", camera_index=1))
    nodes.add_node(VisionNode("mobile1", "Android Vision Node", remote=True))


def _to_json_safe(value):
    if isinstance(value, np.ndarray):
        return value.tolist()
    if isinstance(value, dict):
        return {k: _to_json_safe(v) for k, v in value.items()}
    if isinstance(value, list):
        return [_to_json_safe(v) for v in value]
    return value


def _encode_frame(frame):
    if frame is None:
        return None

    if isinstance(frame, str):
        return frame

    if isinstance(frame, np.ndarray):
        ok, jpeg = cv2.imencode(".jpg", frame)
        if not ok:
            return None
        return base64.b64encode(jpeg.tobytes()).decode("utf-8")

    return None


def _serialize_vision_payload(payload):
    if payload is None:
        return {"status": "no_frame"}

    result = dict(payload)
    result["frame"] = _encode_frame(payload.get("frame"))
    result["results"] = _to_json_safe(payload.get("results"))
    return result


@app.get("/video")
def video_feed():
    def generate():
        while True:
            if not camera.isOpened():
                camera.open(0)

            ret, frame = camera.read()
            if not ret:
                continue

            ok, jpeg = cv2.imencode(".jpg", frame)
            if not ok:
                continue

            frame_bytes = jpeg.tobytes()

            yield (
                b"--frame\r\n"
                b"Content-Type: image/jpeg\r\n\r\n"
                + frame_bytes
                + b"\r\n"
            )

    return Response(generate(), media_type="multipart/x-mixed-replace; boundary=frame")


@router.get("/vision/frame")
async def get_frame():
    node = nodes.get_active_node()
    if node is None:
        return {"status": "no_node"}

    return _serialize_vision_payload(node.get_result())


@router.post("/vision/profile")
async def set_profile(data: dict):
    profile = data.get("profile")

    if profile not in VISION_PROFILES:
        return {"status": "error", "message": "Unknown profile"}

    VISION_CONFIG.update(VISION_PROFILES[profile])
    VISION_CONFIG["active_profile"] = profile
    return {"status": "ok", "profile": profile}


@router.get("/vision/nodes")
async def get_nodes():
    nodes.check_health()
    return nodes.get_all_nodes()


@router.get("/vision/nodes/status")
async def node_status():
    nodes.check_health()
    return nodes.get_all_nodes()


@router.post("/vision/nodes/select")
async def select_node(data: dict):
    node_id = data.get("node_id")
    if node_id not in nodes.nodes:
        return {"status": "error", "message": f"Unknown node: {node_id}"}

    nodes.set_active(node_id)
    return {"status": "ok", "node_id": node_id}


@router.websocket("/vision/snpe")
async def snpe_socket(ws: WebSocket):
    await ws.accept()
    while True:
        data = await ws.receive_json()
        node_id = data.get("node_id")
        results = data.get("results")

        if not node_id:
            continue

        node = nodes.nodes.get(node_id)
        if not node:
            node = VisionNode(node_id=node_id, name=f"Remote Node {node_id}", remote=True)
            nodes.add_node(node)

        node.update_remote(results)


@router.post("/vision/record/start")
async def start_recording():
    node = nodes.get_active_node()
    if not node or node.remote or not node.service:
        return {"status": "error", "message": "No local active vision node"}

    node.service.recorder.start()
    return {"status": "recording_started"}


@router.post("/vision/record/stop")
async def stop_recording():
    node = nodes.get_active_node()
    if not node or node.remote or not node.service:
        return {"status": "error", "message": "No local active vision node"}

    node.service.recorder.stop()
    return {"status": "recording_stopped"}


@router.get("/vision/recordings")
async def get_recordings():
    base = "recordings"
    if not os.path.isdir(base):
        return []

    sessions = [d for d in os.listdir(base) if os.path.isdir(os.path.join(base, d))]
    return sorted(sessions, reverse=True)


@router.post("/vision/replay/load")
async def load_replay(data: dict):
    session = data.get("session")
    if not session:
        return {"status": "error", "message": "Missing session"}

    session_path = os.path.join("recordings", session)
    if not os.path.isdir(session_path):
        return {"status": "error", "message": f"Unknown session: {session}"}

    replay.load_session(session_path)
    return {"status": "replay_loaded"}


@router.post("/vision/replay/stop")
async def stop_replay():
    replay.stop()
    return {"status": "replay_stopped"}


@router.get("/vision/replay/frame")
async def replay_frame():
    payload = replay.get_next()
    if payload is None:
        return {"status": "no_frame"}
    return _serialize_vision_payload(payload)


@router.post("/vision/model")
async def set_model(data: dict):
    model = data.get("model")
    if model not in {"yolo", "segmenter", "pose"}:
        return {"status": "error", "message": f"Unknown model: {model}"}

    node = nodes.get_active_node()
    if not node or node.remote or not node.service:
        return {"status": "error", "message": "No local active vision node"}

    node.service.pipeline.set_model(model)
    return {"status": "ok", "model": model}


@app.on_event("shutdown")
async def shutdown_event():
    if camera.isOpened():
        camera.release()


# Lokale /api/vision/* Routen erst nach Definitionen registrieren
# (include_router kopiert nur den aktuellen Stand des Routers)
app.include_router(router, prefix="/api")
