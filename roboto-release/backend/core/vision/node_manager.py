# core/vision/node_manager.py
import time
from core.vision.node import VisionNode

class VisionNodeManager:
    def __init__(self):
        self.nodes = {}
        self.active_node = None

    def check_health(self):
        now = time.time()

        for node in self.nodes.values():
            age = now - node.last_heartbeat

            if age < 1.0:
                node.status = "healthy"
            elif age < 3.0:
                node.status = "degraded"
            else:
                node.status = "offline"

    def add_node(self, node: VisionNode):
        if node.node_id not in self.nodes:
            self.nodes[node.node_id] = node
            if self.active_node is None:
                self.active_node = node.node_id
        else:
            # Node existiert bereits → Reconnect
            existing = self.nodes[node.node_id]
            existing.status = "healthy"
            existing.last_heartbeat = time.time()

    def set_active(self, node_id):
        if node_id in self.nodes:
            self.active_node = node_id

    def get_active_node(self):
        return self.nodes.get(self.active_node)

    def get_all_nodes(self):
        return [
            {
                "id": n.node_id,
                "name": n.name,
                "remote": n.remote,
                "active": (n.node_id == self.active_node),
                "status": n.status
            }
            for n in self.nodes.values()
        ]


# globaler Shared-Manager für API-Module
nodes = VisionNodeManager()
