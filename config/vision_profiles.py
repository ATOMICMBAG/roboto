VISION_PROFILES = {
    "jetson": {
        "name": "NVIDIA Jetson",
        "backend": "tensorrt",
        "model_type": "yolo",
        "model_path": "models/yolo.engine"
    },

    "intel": {
        "name": "Intel CPU/iGPU",
        "backend": "openvino",
        "model_type": "yolo",
        "model_path": "models/yolo.xml"
    },

    "desktop": {
        "name": "Desktop/Laptop",
        "backend": "onnx",
        "model_type": "yolo",
        "model_path": "models/yolo.onnx"
    },

    "mobile": {
        "name": "Mobile Vision Node",
        "backend": "snpe",
        "model_type": "yolo",
        "model_path": None
    }
}
