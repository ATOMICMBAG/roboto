# core/vision/ai/base_model.py

class BaseModel:
    def __init__(self, model_path, backend="onnx"):
        self.model_path = model_path
        self.backend = backend
        self.model = None

    def load(self):
        """Backend-spezifisches Laden."""
        raise NotImplementedError

    def infer(self, frame):
        """Inference auf einem Frame."""
        raise NotImplementedError
