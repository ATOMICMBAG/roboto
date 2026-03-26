# core/vision/ai/object_detector.py

import cv2
import numpy as np

from config.vision_config import VISION_CONFIG


class ObjectDetector:
    """
    Universeller Object Detector:
    - Modell-Auswahl (YOLO, NanoDet, etc.)
    - Backend-Auswahl (ONNX, TensorRT, OpenVINO, SNPE)
    """

    def __init__(self, backend=None, model_path=None, model_type=None):
        backend = backend or VISION_CONFIG["backend"]
        model_path = model_path or VISION_CONFIG["model_path"]
        model_type = model_type or VISION_CONFIG["model_type"]

        self.model_type = model_type
        self.backend = None
        self.disabled_reason = None

        try:
            # Backend auswählen
            if backend == "tensorrt":
                from .backends.tensorrt_backend import TensorRTBackend

                self.backend = TensorRTBackend()
            elif backend == "openvino":
                from .backends.openvino_backend import OpenVINOBackend

                self.backend = OpenVINOBackend()
            elif backend == "snpe":
                from .backends.snpe_backend import SNPEBackend

                self.backend = SNPEBackend()
            else:
                from .backends.onnx_backend import OnnxBackend

                self.backend = OnnxBackend()

            # Modell laden
            self.backend.load(model_path)
        except Exception as e:
            self.backend = None
            self.disabled_reason = str(e)


    # -------------------------
    # Preprocessing
    # -------------------------
    def preprocess(self, frame):
        img = cv2.resize(frame, (640, 640))
        img = img[:, :, ::-1]  # BGR → RGB
        img = img.transpose(2, 0, 1)[None].astype(np.float32) / 255.0
        return img


    # -------------------------
    # Postprocessing
    # -------------------------
    def postprocess(self, outputs):
        if self.model_type == "yolo":
            return self._postprocess_yolo(outputs)
        else:
            return outputs


    def _postprocess_yolo(self, outputs):
        preds = outputs[0]  # [1, N, 85] oder ähnlich

        # Beispiel: YOLOv8 Format
        boxes = preds[..., :4]
        scores = preds[..., 4]
        class_probs = preds[..., 5:]

        # Filter
        mask = scores > 0.25
        boxes = boxes[mask]
        scores = scores[mask]
        class_probs = class_probs[mask]

        classes = np.argmax(class_probs, axis=1)

        return {
            "boxes": boxes,
            "scores": scores,
            "classes": classes
        }


    # -------------------------
    # Inference
    # -------------------------
    def infer(self, frame):
        if self.backend is None:
            return {"boxes": [], "scores": [], "classes": []}

        img = self.preprocess(frame)
        raw = self.backend.infer(img)
        return self.postprocess(raw)




