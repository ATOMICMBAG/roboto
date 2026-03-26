# core/vision/ai/backends/openvino_backend.py

from openvino.runtime import Core
import numpy as np
from .backend_base import BackendBase


class OpenVINOBackend(BackendBase):
    """
    OpenVINO Backend für Intel CPU / iGPU / VPU.
    Lädt ein IR-Modell (.xml + .bin) und führt Inference aus.
    """

    def __init__(self, device="CPU"):
        super().__init__()
        self.device = device
        self.compiled_model = None
        self.input_name = None


    # ---------------------------------------------------------
    # Modell laden
    # ---------------------------------------------------------
    def load(self, xml_path):
        ie = Core()

        # Modell laden (XML + BIN)
        model = ie.read_model(model=xml_path)

        # Kompilieren für CPU / GPU / MYRIAD
        self.compiled_model = ie.compile_model(model=model, device_name=self.device)

        # Input-Namen merken
        self.input_name = model.inputs[0].get_any_name()

        self.model_loaded = True


    # ---------------------------------------------------------
    # Inference
    # ---------------------------------------------------------
    def infer(self, input_tensor: np.ndarray):
        if not self.model_loaded:
            raise RuntimeError("OpenVINO model not loaded.")

        # Inference ausführen
        result = self.compiled_model([input_tensor])

        # Output extrahieren
        outputs = []
        for out in self.compiled_model.outputs:
            outputs.append(result[out])

        return outputs
