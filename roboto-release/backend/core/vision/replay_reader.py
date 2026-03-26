# core/vision/replay_reader.py

import os
import json
import cv2
import base64

class ReplayReader:
    """
    Liest gespeicherte Vision-Recordings.
    """

    def __init__(self, session_dir):
        self.session_dir = session_dir
        self.frames = sorted([
            f for f in os.listdir(session_dir)
            if f.endswith(".jpg")
        ])
        self.index = 0

    def get_frame_count(self):
        return len(self.frames)

    def get_next(self):
        if self.index >= len(self.frames):
            return None

        frame_file = self.frames[self.index]
        json_file = frame_file.replace(".jpg", ".json")

        frame_path = os.path.join(self.session_dir, frame_file)
        json_path = os.path.join(self.session_dir, json_file)

        frame = cv2.imread(frame_path)

        with open(json_path, "r") as f:
            meta = json.load(f)

        frame_b64 = None
        if frame is not None:
            ok, jpeg = cv2.imencode(".jpg", frame)
            if ok:
                frame_b64 = base64.b64encode(jpeg.tobytes()).decode("utf-8")

        self.index += 1

        return {
            "frame": frame_b64,
            "results": meta["results"],
            "model": meta["model"],
            "frame_id": meta["frame_id"]
        }

    def reset(self):
        self.index = 0
