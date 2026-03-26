# core/vision/replay_service.py

from core.vision.replay_reader import ReplayReader

class ReplayService:
    def __init__(self):
        self.reader = None
        self.active = False

    def load_session(self, session_dir):
        self.reader = ReplayReader(session_dir)
        self.active = True

    def stop(self):
        self.active = False
        self.reader = None

    def get_next(self):
        if not self.active or not self.reader:
            return None
        return self.reader.get_next()
