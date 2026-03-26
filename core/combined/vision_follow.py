# core/combined/vision_follow.py

import cv2

class VisionFollow:
    def __init__(self, camera, stepper_group, kp=0.05):
        self.camera = camera
        self.group = stepper_group
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

        error_x = x - cx
        error_y = y - cy

        self.group.move_by({
            "X": -error_x * self.kp,
            "Y": -error_y * self.kp
        })
