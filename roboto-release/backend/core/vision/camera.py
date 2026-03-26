# core/vision/camera.py

import cv2

class CameraSensor:
    def __init__(self, index=0):
        self.index = index
        self.cap = None

    def start_stream(self):
        self.cap = cv2.VideoCapture(self.index)

    def stop_stream(self):
        if self.cap:
            self.cap.release()

    def get_frame(self):
        if not self.cap:
            self.start_stream()
        ret, frame = self.cap.read()
        return frame if ret else None

    def snapshot(self):
        frame = self.get_frame()
        return frame

    def get_focus_metric(self):
        frame = self.get_frame()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        return cv2.Laplacian(gray, cv2.CV_64F).var()
