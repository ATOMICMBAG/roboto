# core/sensors/current.py

from .sensor_base import Sensor

class CurrentSensor(Sensor):
    def __init__(self, hardware, pin, scale=1.0):
        self.hw = hardware
        self.pin = pin
        self.scale = scale

    def read(self):
        """Rohwert vom ADC."""
        if not self.hw:
            return 0.0

        if hasattr(self.hw, "read_analog"):
            return self.hw.read_analog(self.pin)

        # Fallback auf generischen Serial-Command
        try:
            raw = self.hw.send("CURRENT_READ")
            return float(raw)
        except Exception:
            return 0.0

    def get_current(self):
        """Skalierter Stromwert in Ampere."""
        return self.read() * self.scale

    def get_load(self):
        """Normierter Lastwert (0–1)."""
        return min(1.0, self.get_current() / (self.scale * 1023))

    def is_overload(self, threshold=0.8):
        return self.get_load() > threshold
