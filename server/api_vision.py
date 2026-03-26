from fastapi import APIRouter
from config.vision_config import VISION_CONFIG

router = APIRouter()

ALLOWED_BACKENDS = {"onnx", "tensorrt", "openvino", "snpe"}

@router.post("/vision/backend")
async def set_backend(data: dict):
    backend = data.get("backend", "onnx")

    if backend not in ALLOWED_BACKENDS:
        return {"status": "error", "message": f"Unknown backend: {backend}"}

    VISION_CONFIG["backend"] = backend
    return {"status": "ok", "backend": backend}
