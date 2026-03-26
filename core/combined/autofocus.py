# core/combined/autofocus.py

import time

class AutoFocus:
    def __init__(self, camera, focus_axis, steps=20, step_size=0.1):
        self.camera = camera
        self.focus_axis = focus_axis
        self.steps = steps
        self.step_size = step_size

    def run(self):
        best_focus = -1
        best_pos = None

        start_pos = float(self.focus_axis.get_position())

        for i in range(self.steps):
            pos = start_pos + (i - self.steps/2) * self.step_size
            self.focus_axis.move_to(pos)
            time.sleep(0.05)

            metric = self.camera.get_focus_metric()

            if metric > best_focus:
                best_focus = metric
                best_pos = pos

        self.focus_axis.move_to(best_pos)
        return best_pos, best_focus
