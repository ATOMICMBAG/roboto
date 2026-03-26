# core/combined/mobile_controller.py

class MobileMotionController:
    def __init__(self, axis_group, sensitivity=0.1):
        self.group = axis_group
        self.sensitivity = sensitivity

    def update(self, pitch, roll):
        dx = roll * self.sensitivity
        dy = pitch * self.sensitivity

        self.group.move_by({
            "X": dx,
            "Y": dy
        })
