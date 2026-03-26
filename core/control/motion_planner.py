# core/control/motion_planner.py

import numpy as np

class MotionPlanner:
    def __init__(self, steps=100):
        self.steps = steps

    def s_curve(self, start, end):
        t = np.linspace(0, 1, self.steps)
        t = t * t * (3 - 2 * t)
        return start + (end - start) * t
