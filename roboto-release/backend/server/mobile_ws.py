# roboto/server/mobile_ws.py

import json
import time
from fastapi import APIRouter, FastAPI, WebSocket, WebSocketDisconnect

from core.vision.node_manager import nodes
from core.vision.node import VisionNode

router = APIRouter()
app = FastAPI()  # optional standalone
app.include_router(router)

mobile_clients = set()

@router.websocket("/mobile")
async def mobile_endpoint(ws: WebSocket):
    await ws.accept()
    mobile_clients.add(ws)

    try:
        while True:
            msg = await ws.receive_text()
            data = json.loads(msg)
            await handle_mobile_data(data)
    except WebSocketDisconnect:
        mobile_clients.remove(ws)
    except Exception:
        mobile_clients.discard(ws)


async def handle_mobile_data(data):
    node_id = data.get("node_id") or "mobile-unknown"
    msg_type = data.get("type")

    node = nodes.nodes.get(node_id)

    if not node:
        node = VisionNode(node_id=node_id, name=f"Mobile Node {node_id}", remote=True)
        nodes.add_node(node)

    # Heartbeat aktualisieren
    node.last_heartbeat = time.time()
    node.status = "healthy"

    if msg_type == "vision":
        node.update_remote(data.get("results"))
        return

    if msg_type == "gyro":
        pass

    if msg_type == "gps":
        pass

    if msg_type == "frame":
        pass
