# core/vision/ai/backends/snpe_backend.py

from .backend_base import BackendBase
import numpy as np

class SNPEBackend(BackendBase):
    """
    SNPE-Backend als Remote-Client:
    - Die eigentliche Inferenz läuft auf einem Qualcomm-Gerät (Android/XR)
    - Dieses Backend nimmt nur die Ergebnisse entgegen.
    """

    def __init__(self):
        super().__init__()
        self.last_result = None

    def load(self, model_path):
        """
        Auf der Python-Seite gibt es kein lokales SNPE-Modell.
        Das Modell läuft auf dem Remote-Gerät.
        """
        self.model_loaded = True

    def infer(self, input_tensor: np.ndarray):
        """
        Hier wird NICHT lokal inferiert.
        Stattdessen wird das letzte vom SNPE-Client gemeldete Ergebnis zurückgegeben.
        """
        if not self.model_loaded:
            raise RuntimeError("SNPE remote backend not initialized.")

        if self.last_result is None:
            # Noch keine Daten vom Gerät
            return []

        return self.last_result

    # Diese Methode wird vom WebSocket-/REST-Handler aufgerufen,
    # wenn das Smartphone/XR-Gerät neue Ergebnisse sendet.
    def update_remote_result(self, result):
        """
        result: bereits dekodierte Detections/Masken/Keypoints vom SNPE-Client
        """
        self.last_result = result
