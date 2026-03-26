# core/combined/ai_autofocus.py

import numpy as np
from core.vision.ai.segmenter import Segmenter

class AIAutoFocus:
    def __init__(self, camera, focus_axis, model_path):
        self.camera = camera
        self.focus_axis = focus_axis
        self.model = Segmenter(model_path)
        self.model.load()

    def run(self, sweep_range=(-1, 1), steps=20):
        best_score = -1
        best_pos = None

        start_pos = float(self.focus_axis.get_position())

        for i in range(steps):
            offset = sweep_range[0] + (i / (steps - 1)) * (sweep_range[1] - sweep_range[0])
            pos = start_pos + offset
            self.focus_axis.move_to(pos)

            frame = self.camera.get_frame()
            mask = self.model.infer(frame)

            score = np.mean(mask)  # KI-Schärfewert

            if score > best_score:
                best_score = score
                best_pos = pos

        self.focus_axis.move_to(best_pos)
        return best_pos, best_score
