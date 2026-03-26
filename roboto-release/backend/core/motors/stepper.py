# core/motors/stepper.py

class StepperMotor:
    def __init__(self, hardware, id, steps_per_mm=80):
        self.hw = hardware
        self.id = id
        self.steps_per_mm = steps_per_mm

    def move_to(self, pos_mm, speed=40, accel=200):
        cmd = f"STEPPER_MOVE_TO {self.id} {pos_mm} {speed} {accel}"
        return self.hw.send(cmd)

    def move_by(self, delta_mm, speed=40, accel=200):
        cmd = f"STEPPER_MOVE_BY {self.id} {delta_mm} {speed} {accel}"
        return self.hw.send(cmd)

    def home(self, direction=-1, speed=10):
        cmd = f"STEPPER_HOME {self.id} {direction} {speed}"
        return self.hw.send(cmd)

    def get_position(self):
        return self.hw.send(f"STEPPER_GET_POS {self.id}")
