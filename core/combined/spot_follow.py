# core/combined/spot_follow.py

import cv2

class SpotFollow:
    def __init__(self, camera, motor_x, motor_y, kp=0.1):
        self.camera = camera
        self.motor_x = motor_x
        self.motor_y = motor_y
        self.kp = kp

    def run_step(self):
        frame = self.camera.get_frame()
        if frame is None:
            return

        h, w = frame.shape[:2]
        cx, cy = w // 2, h // 2

        # Spot finden
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)
        M = cv2.moments(thresh)

        if M["m00"] == 0:
            return

        x = int(M["m10"] / M["m00"])
        y = int(M["m01"] / M["m00"])

        # Fehler berechnen
        error_x = x - cx
        error_y = y - cy

        # Motoren korrigieren
        self.motor_x.move_by(-error_x * self.kp)
        self.motor_y.move_by(-error_y * self.kp)
