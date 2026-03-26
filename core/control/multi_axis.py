# core/control/multi_axis.py

import time

class StepperGroup:
    def __init__(self, motors):
        """
        motors = {
            "X": StepperMotor(...),
            "Y": StepperMotor(...),
            "Z": StepperMotor(...)
        }
        """
        self.motors = motors

    def move_to(self, positions, speed=40, accel=200):
        """
        positions = {"X": 10, "Y": 20}
        """
        for axis, pos in positions.items():
            self.motors[axis].move_to(pos, speed, accel)

    def move_by(self, deltas, speed=40, accel=200):
        for axis, delta in deltas.items():
            self.motors[axis].move_by(delta, speed, accel)

    def is_busy(self):
        return any(m.is_busy() for m in self.motors.values())

    def wait(self):
        while self.is_busy():
            time.sleep(0.01)


class ServoGroup:
    def __init__(self, servos):
        """
        servos = {
            "pan": ServoMotor(...),
            "tilt": ServoMotor(...)
        }
        """
        self.servos = servos

    def move_to(self, positions):
        for axis, angle in positions.items():
            self.servos[axis].move_to(angle)

    def smooth_move(self, positions, duration_ms=1000):
        for axis, angle in positions.items():
            self.servos[axis].smooth_move(angle, duration_ms)
