# core/vision/node.py
import time
from core.vision.vision_service import VisionService

class VisionNode:
    """
    Repräsentiert einen Vision-Knoten:
    - Lokale Kamera
    - Remote-Kamera
    - SNPE-Client
    """

    def __init__(self, node_id, name, camera_index=0, remote=False):
        self.node_id = node_id
        self.name = name
        self.remote = remote

        self.last_remote_result = None
        self.last_heartbeat = time.time()
        self.status = "unknown"  # healthy, degraded, offline

        if not remote:
            self.service = VisionService(camera_index)
        else:
            self.service = None

    def update_remote(self, data):
        self.last_remote_result = data
        self.last_heartbeat = time.time()

    def get_result(self):
        if self.remote:
            return self.last_remote_result
        return self.service.get_vision_result()
