from config.vision_profiles import VISION_PROFILES as PROFILE_MAP
from core.vision.hardware_detect import detect_hardware

# Standardprofil automatisch wählen
auto_profile = detect_hardware()

if auto_profile not in PROFILE_MAP:
    auto_profile = "desktop"

VISION_CONFIG = {
    "model_type": "yolo",
    "backend": "onnx",        # oder "tensorrt", "openvino", "snpe"
    "model_path": "models/yolo.onnx",
    "active_profile": auto_profile,
    **PROFILE_MAP[auto_profile]
}

VISION_PROFILES = PROFILE_MAP
