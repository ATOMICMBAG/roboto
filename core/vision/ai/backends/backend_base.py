# core/vision/ai/backends/backend_base.py

class BackendBase:
    """
    Gemeinsame Basis-Klasse für alle Vision-Backends.
    Jede Engine (TensorRT, OpenVINO, SNPE, ONNX) erbt hiervon.
    """

    def __init__(self):
        self.model_loaded = False

    def load(self, model_path):
        """
        Lädt das Modell / Engine / IR / DLC.
        Muss in jedem Backend überschrieben werden.
        """
        raise NotImplementedError("load() muss im Backend implementiert werden.")

    def infer(self, input_tensor):
        """
        Führt eine Inferenz durch.
        input_tensor: numpy array (NCHW)
        Muss in jedem Backend überschrieben werden.
        """
        raise NotImplementedError("infer() muss im Backend implementiert werden.")

    # Optional: Geräteauswahl (CPU/GPU/NPU)
    def set_device(self, device_name):
        """
        Optional: Gerät auswählen (CPU, GPU, NPU, DSP, etc.)
        """
        self.device = device_name

    # Optional: Preprocessing-Hook
    def preprocess(self, frame):
        """
        Optional: Preprocessing im Backend (z.B. TensorRT-optimiert)
        """
        return frame

    # Optional: Postprocessing-Hook
    def postprocess(self, outputs):
        """
        Optional: Postprocessing im Backend (z.B. YOLO-Decode)
        """
        return outputs

    # Optional: Async-Inference
    async def infer_async(self, input_tensor):
        """
        Optional: Asynchrone Inferenz (z.B. OpenVINO async)
        """
        return self.infer(input_tensor)
