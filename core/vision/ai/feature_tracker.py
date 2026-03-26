# core/vision/ai/feature_tracker.py

import cv2

class FeatureTracker:
    def __init__(self):
        self.prev_gray = None
        self.prev_pts = None

    def track(self, frame):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        if self.prev_gray is None:
            self.prev_gray = gray
            self.prev_pts = cv2.goodFeaturesToTrack(gray, 200, 0.01, 10)
            return None

        pts, status, err = cv2.calcOpticalFlowPyrLK(
            self.prev_gray, gray, self.prev_pts, None
        )

        self.prev_gray = gray
        self.prev_pts = pts
        return pts
