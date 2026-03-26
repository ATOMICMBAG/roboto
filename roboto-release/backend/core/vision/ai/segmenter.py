import cv2
import numpy as np

class Segmenter:
    def __init__(self, backend="onnx", model_path=None):
        self.backend = None
        self.disabled_reason = None

        try:
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

            self.backend.load(model_path)
        except Exception as e:
            self.backend = None
            self.disabled_reason = str(e)

    def preprocess(self, frame):
        img = cv2.resize(frame, (640, 640))
        img = img[:, :, ::-1]
        img = img.transpose(2, 0, 1)[None].astype(np.float32) / 255.0
        return img

    def postprocess(self, outputs):
        mask = outputs[0][0]  # [1, H, W]
        mask = (mask > 0.5).astype(np.uint8)
        return mask

    def infer(self, frame):
        if self.backend is None:
            return []

        img = self.preprocess(frame)
        raw = self.backend.infer(img)
        return self.postprocess(raw)
