# core/vision/vision_service.py
import time
from core.vision.camera import CameraSensor
from core.vision.pipeline import VisionPipeline
from core.vision.recorder import VisionRecorder

class VisionService:
    """
    Verbindet Kamera + VisionPipeline.
    Wird vom Webserver oder UI-Loop verwendet.
    """

    def __init__(self, camera_index=0):
        self.camera = CameraSensor(camera_index)
        self.pipeline = VisionPipeline()
        self.recorder = VisionRecorder()
        self.last_frame_time = time.time()
        self.fps = 0

    def get_vision_result(self):
        frame = self.camera.get_frame()
        now = time.time()
        dt = max(now - self.last_frame_time, 1e-6)
        self.fps = 1.0 / dt
        self.last_frame_time = now
        if frame is None:
            return None

        results = self.pipeline.process_frame(frame)

        # Recorder speichern lassen
        self.recorder.record(frame, results, self.pipeline.model_type)

        return {
            "frame": frame,
            "results": results,
            "model": self.pipeline.model_type,
            "latency": self.pipeline.last_latency,
            "fps": self.fps
        }
