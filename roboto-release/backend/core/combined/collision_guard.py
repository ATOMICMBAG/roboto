# core/combined/collision_guard.py

class CollisionGuard:
    def __init__(self, stepper, current_sensor, threshold=0.8):
        self.stepper = stepper
        self.current_sensor = current_sensor
        self.threshold = threshold

    def safe_move_to(self, pos_mm, speed=40, accel=200):
        self.stepper.move_to(pos_mm, speed, accel)

        while self.stepper.is_busy():
            load = self.current_sensor.get_load()
            if load > self.threshold:
                self.stepper.stop()
                return False
        return True
