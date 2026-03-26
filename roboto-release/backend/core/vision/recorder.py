# core/vision/recorder.py

import os
import json
import cv2
import numpy as np
from datetime import datetime

class VisionRecorder:
    """
    Speichert Frames + Ergebnisse + Metadaten.
    """

    def __init__(self, base_dir="recordings"):
        self.base_dir = base_dir
        os.makedirs(base_dir, exist_ok=True)
        self.active = False
        self.session_dir = None
        self.frame_id = 0

    def start(self):
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.session_dir = os.path.join(self.base_dir, timestamp)
        os.makedirs(self.session_dir, exist_ok=True)
        self.active = True
        self.frame_id = 0

    def stop(self):
        self.active = False

    def _to_json_safe(self, value):
        if isinstance(value, np.ndarray):
            return value.tolist()
        if isinstance(value, dict):
            return {k: self._to_json_safe(v) for k, v in value.items()}
        if isinstance(value, list):
            return [self._to_json_safe(v) for v in value]
        return value

    def record(self, frame, results, model):
        if not self.active:
            return

        # Frame speichern
        frame_path = os.path.join(self.session_dir, f"{self.frame_id:06d}.jpg")
        cv2.imwrite(frame_path, frame)

        # Ergebnisse speichern
        meta = {
            "frame_id": self.frame_id,
            "model": model,
            "results": self._to_json_safe(results)
        }

        json_path = os.path.join(self.session_dir, f"{self.frame_id:06d}.json")
        with open(json_path, "w") as f:
            json.dump(meta, f, indent=2)

        self.frame_id += 1
