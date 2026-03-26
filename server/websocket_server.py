# roboto/server/websocket_server.py

import json
import os

import cv2
import numpy as np
from fastapi import APIRouter, FastAPI, WebSocket, WebSocketDisconnect

from core.combined.analyzers import focus_metric
from core.combined.duet_raster import DuetRasterScan
from core.combined.mobile_controller import MobileMotionController
from core.combined.raster_heatmap import RasterHeatmap
from core.control.axis_loader import AxisLoader
from core.hardware.arduino_serial import ArduinoSerial
from core.hardware.duet3d import Duet3D
from core.sensors.current import CurrentSensor
from core.vision.camera import CameraSensor
from core.vision.node_manager import nodes

router = APIRouter()
app = FastAPI()  # optional standalone
app.include_router(router)


def _default_serial_port():
    if os.name == "nt":
        return "COM3"
    return "/dev/ttyUSB0"


def _to_json_safe(value):
    if isinstance(value, np.ndarray):
        return value.tolist()
    if isinstance(value, dict):
        return {k: _to_json_safe(v) for k, v in value.items()}
    if isinstance(value, list):
        return [_to_json_safe(v) for v in value]
    return value


def _find_spot(frame):
    if frame is None:
        return None

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)
    m = cv2.moments(thresh)
    if m["m00"] == 0:
        return None
    x = int(m["m10"] / m["m00"])
    y = int(m["m01"] / m["m00"])
    return x, y


hw = None
stepper_group = None
controller = None
controller_enabled = False
motion_state = {"pitch": 0, "roll": 0, "yaw": 0}

try:
    hw = ArduinoSerial(_default_serial_port())
    hw.connect()
    axis_loader = AxisLoader(hardware=hw)
    stepper_group, _ = axis_loader.load()
    controller = MobileMotionController(stepper_group, sensitivity=0.05)
except Exception:
    hw = None
    stepper_group = None
    controller = None

current_sensor = CurrentSensor(hw, pin=0, scale=1.0)
camera = CameraSensor(0)


@router.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    global controller_enabled

    await ws.accept()

    try:
        while True:
            msg = await ws.receive_text()
            data = json.loads(msg)
            response = await handle_message(data)
            if response is not None:
                await ws.send_json(response)
    except WebSocketDisconnect:
        pass
    except Exception as e:
        await ws.send_json({"type": "error", "message": str(e)})
    finally:
        controller_enabled = False


async def handle_message(data: dict):
    global controller_enabled, motion_state

    t = data.get("type")

    if t == "motion":
        motion_state["pitch"] = data.get("pitch", 0)
        motion_state["roll"] = data.get("roll", 0)
        motion_state["yaw"] = data.get("yaw", 0)

        if controller_enabled and controller:
            controller.update(motion_state["pitch"], motion_state["roll"])

        return {"type": "ack", "cmd": "motion"}

    if t == "motion_enable":
        if controller is None:
            return {"type": "error", "message": "Motion controller unavailable"}
        controller_enabled = True
        return {"type": "ack", "cmd": "motion_enable"}

    if t == "motion_disable":
        controller_enabled = False
        return {"type": "ack", "cmd": "motion_disable"}

    if t == "servo_move":
        if hw is None:
            return {"type": "error", "message": "Hardware unavailable"}
        angle = data.get("angle", 0)
        return {"type": "ack", "cmd": "servo_move", "result": hw.send(f"SERVO_MOVE 1 {angle}")}

    if t == "stepper_move":
        if hw is None:
            return {"type": "error", "message": "Hardware unavailable"}
        pos = data.get("pos", 0)
        return {
            "type": "ack",
            "cmd": "stepper_move",
            "result": hw.send(f"STEPPER_MOVE_TO 1 {pos} 40 200"),
        }

    if t == "get_current":
        val = current_sensor.get_current()
        return {"type": "current", "value": val}

    if t == "duet_move":
        host = data.get("host", "http://duet3d.local")
        duet = Duet3D(host)
        duet.move_to(x=data.get("x"), y=data.get("y"), z=data.get("z"))
        return {"type": "ack", "cmd": "duet_move"}

    if t == "vision_focus":
        frame = camera.get_frame()
        metric = focus_metric(frame) if frame is not None else 0
        return {"type": "focus", "value": metric}

    if t == "vision_spot":
        spot = _find_spot(camera.get_frame())
        if not spot:
            return {"type": "spot", "x": None, "y": None}
        x, y = spot
        return {"type": "spot", "x": x, "y": y}

    if t == "raster_start":
        x_range = data.get("x_range", [0, 10])
        y_range = data.get("y_range", [0, 10])
        step = data.get("step", 1)

        duet = Duet3D(data.get("host", "http://duet3d.local"))
        heatmap = RasterHeatmap(x_range, y_range, step)
        scan = DuetRasterScan(duet, camera, x_range, y_range, step, analyzer=focus_metric)
        result = scan.run(heatmap)
        return {"type": "raster_done", "map": result.get_map().tolist()}

    if t in {"vision_yolo", "vision_mask", "vision_pose"}:
        node = nodes.get_active_node()
        if node is None:
            return {"type": "error", "message": "No active node"}

        payload = node.get_result() or {}
        results = _to_json_safe(payload.get("results"))

        if t == "vision_yolo":
            if isinstance(results, dict):
                return {
                    "type": "yolo_boxes",
                    "boxes": _to_json_safe(results.get("boxes", [])),
                }
            return {"type": "yolo_boxes", "boxes": []}

        if t == "vision_mask":
            return {"type": "segmentation_mask", "mask": results}

        return {"type": "pose_keypoints", "points": results}

    return {"type": "warn", "message": f"Unknown command: {t}"}
