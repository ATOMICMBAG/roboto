# core/vision/pipeline.py

import time
from config.vision_config import VISION_CONFIG
from .ai.object_detector import ObjectDetector
from .ai.segmenter import Segmenter
from .ai.pose_estimator import PoseEstimator

class VisionPipeline:
    """
    Zentrale Vision-Pipeline:
    - Modell auswählen
    - Backend auswählen
    - Frame verarbeiten
    - Ergebnisse zurückgeben
    """

    def __init__(self):
        self.model_type = VISION_CONFIG["model_type"]
        self.backend = VISION_CONFIG["backend"]
        self.model_path = VISION_CONFIG["model_path"]
        self.last_latency = 0.0
        self.model = None

        self.load_model()

    def _build_model(self):
        backend = VISION_CONFIG.get("backend", self.backend)
        model_path = VISION_CONFIG.get("model_path", self.model_path)

        self.backend = backend
        self.model_path = model_path

        # Modell auswählen
        if self.model_type == "yolo":
            return ObjectDetector(
                model_type="yolo",
                backend=backend,
                model_path=model_path
            )

        if self.model_type == "segmenter":
            return Segmenter(
                backend=backend,
                model_path=model_path
            )

        if self.model_type == "pose":
            return PoseEstimator(
                backend=backend,
                model_path=model_path
            )

        raise ValueError(f"Unbekanntes Modell: {self.model_type}")

    def process_frame(self, frame):
        """
        Nimmt ein BGR-Frame (OpenCV) und gibt Modell-Ergebnisse zurück.
        """
        start = time.time()

        if self.model is None:
            self.load_model()

        if hasattr(self.model, "infer"):
            result = self.model.infer(frame)
        else:
            result = self.model.run(frame)

        end = time.time()
        self.last_latency = (end - start) * 1000  # ms

        return result
    
    def set_model(self, model_type):
        self.model_type = model_type
        VISION_CONFIG["model_type"] = model_type
        self.load_model()

    def load_model(self):
        self.model = self._build_model()


