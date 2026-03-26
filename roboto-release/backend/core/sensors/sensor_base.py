# core/sensors/sensor_base.py

class Sensor:
    def read(self):
        raise NotImplementedError

    def read_normalized(self):
        value = self.read()
        return value  # später skalieren

    def is_triggered(self, threshold=None):
        value = self.read()
        if threshold is None:
            return bool(value)
        return value >= threshold

    def calibrate(self):
        pass

    def get_status(self):
        return {"ok": True}
