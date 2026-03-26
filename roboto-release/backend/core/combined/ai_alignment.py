# core/combined/ai_alignment.py

class AILaserAlignment:
    def __init__(self, camera, qd_sensor, axis_group, model_path):
        self.camera = camera
        self.qd = qd_sensor
        self.group = axis_group

        from core.vision.ai.segmenter import Segmenter
        self.seg = Segmenter(model_path)
        self.seg.load()

    def run_step(self):
        frame = self.camera.get_frame()
        mask = self.seg.infer(frame)

        # KI erkennt Spot-Form
        quality = mask.mean()

        # Quadrant-Detektor erkennt präzise Position
        x, y = self.qd.get_normalized_offset()

        # Korrektur
        self.group.move_by({
            "X": -x * 0.1,
            "Y": -y * 0.1
        })

        return quality
