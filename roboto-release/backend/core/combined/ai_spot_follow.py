# core/combined/ai_spot_follow.py

class AISpotFollow:
    def __init__(self, camera, axis_group, model_path, kp=0.1):
        self.camera = camera
        self.group = axis_group
        self.kp = kp

        from core.vision.ai.object_detector import ObjectDetector
        self.detector = ObjectDetector(model_path)
        self.detector.load()

    def run_step(self):
        frame = self.camera.get_frame()
        boxes = self.detector.infer(frame)

        if len(boxes) == 0:
            return

        # Wir nehmen das erste erkannte Objekt
        x1, y1, x2, y2, conf, cls = boxes[0]

        cx = (x1 + x2) / 2
        cy = (y1 + y2) / 2

        h, w = frame.shape[:2]
        error_x = cx - w/2
        error_y = cy - h/2

        self.group.move_by({
            "X": -error_x * self.kp,
            "Y": -error_y * self.kp
        })
