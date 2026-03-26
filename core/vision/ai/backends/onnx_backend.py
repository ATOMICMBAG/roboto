# core/vision/ai/backends/onnx_backend.py

import onnxruntime as ort
import numpy as np
from .backend_base import BackendBase


class OnnxBackend(BackendBase):
    """
    Standard-Backend für ONNX Runtime.
    Läuft auf CPU, GPU (CUDA), DirectML, OpenVINO-EP, TensorRT-EP.
    """

    def __init__(self, device="cpu"):
        super().__init__()
        self.device = device
        self.session = None

    def load(self, model_path):
        """
        Lädt das ONNX-Modell und initialisiert die Session.
        """
        providers = ["CPUExecutionProvider"]

        if self.device == "cuda":
            providers = ["CUDAExecutionProvider", "CPUExecutionProvider"]

        if self.device == "directml":
            providers = ["DmlExecutionProvider", "CPUExecutionProvider"]

        # OpenVINO Execution Provider (optional)
        if self.device == "openvino":
            providers = ["OpenVINOExecutionProvider", "CPUExecutionProvider"]

        # TensorRT Execution Provider (optional)
        if self.device == "tensorrt":
            providers = ["TensorrtExecutionProvider", "CUDAExecutionProvider", "CPUExecutionProvider"]

        self.session = ort.InferenceSession(model_path, providers=providers)
        self.input_name = self.session.get_inputs()[0].name
        self.model_loaded = True

    def infer(self, input_tensor: np.ndarray):
        """
        Führt eine Inferenz durch.
        input_tensor: numpy array (NCHW)
        """
        if not self.model_loaded:
            raise RuntimeError("ONNX model not loaded.")

        outputs = self.session.run(None, {self.input_name: input_tensor})
        return outputs
