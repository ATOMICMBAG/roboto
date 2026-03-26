# core/control/axis_loader.py

import json
from core.motors.stepper import StepperMotor
from core.motors.servo import ServoMotor
from core.control.multi_axis import StepperGroup, ServoGroup
from core.hardware.duet3d import Duet3D

class AxisLoader:
    def __init__(self, hardware=None, duet_host=None, config_path="core/config/axes.json"):
        self.hardware = hardware
        self.config_path = config_path
        self.duet = Duet3D(duet_host) if duet_host else None

    def load(self):
        with open(self.config_path) as f:
            cfg = json.load(f)

        # Stepper
        steppers = {}
        for name, params in cfg.get("steppers", {}).items():
            steppers[name] = StepperMotor(
                hardware=self.hardware,
                id=params["id"],
                steps_per_mm=params.get("steps_per_mm", 80)
            )

        # Servo
        servos = {}
        for name, params in cfg.get("servos", {}).items():
            servos[name] = ServoMotor(
                hardware=self.hardware,
                id=params["id"],
                min_angle=params.get("min", 0),
                max_angle=params.get("max", 180)
            )

        return StepperGroup(steppers), ServoGroup(servos)
    
    def load_duet_axes(self):
        if not self.duet:
            return None

        return {
            "X": lambda pos: self.duet.move_to(x=pos),
            "Y": lambda pos: self.duet.move_to(y=pos),
            "Z": lambda pos: self.duet.move_to(z=pos)
        }
