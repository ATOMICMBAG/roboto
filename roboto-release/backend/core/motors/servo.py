# core/motors/servo.py

class ServoMotor:
    def __init__(self, hardware, id, min_angle=0, max_angle=180):
        self.hw = hardware
        self.id = id
        self.min_angle = min_angle
        self.max_angle = max_angle

    def move_to(self, angle):
        angle = max(self.min_angle, min(self.max_angle, angle))
        cmd = f"SERVO_MOVE {self.id} {angle}"
        return self.hw.send(cmd)

    def smooth_move(self, angle, duration_ms=1000):
        angle = max(self.min_angle, min(self.max_angle, angle))
        cmd = f"SERVO_SMOOTH {self.id} {angle} {duration_ms}"
        return self.hw.send(cmd)

    def get_position(self):
        return self.hw.send(f"SERVO_GET_POS {self.id}")
