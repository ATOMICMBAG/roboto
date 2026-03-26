from core.vision.node import VisionNode
from core.vision.node_manager import nodes

node = VisionNode("jetson01", "Jetson Node", remote=False)
nodes.add_node(node)

node.service.run()
