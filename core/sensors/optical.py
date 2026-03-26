# core/sensors/optical.py

from .sensor_base import Sensor

class QuadrantDetector(Sensor):
    def __init__(self, hardware, pins):
        """
        pins = {
            "Q1": pin1,
            "Q2": pin2,
            "Q3": pin3,
            "Q4": pin4
        }
        """
        self.hw = hardware
        self.pins = pins

    def read(self):
        """Rohwerte aller vier Quadranten."""
        return {
            "Q1": self.hw.read_analog(self.pins["Q1"]),
            "Q2": self.hw.read_analog(self.pins["Q2"]),
            "Q3": self.hw.read_analog(self.pins["Q3"]),
            "Q4": self.hw.read_analog(self.pins["Q4"]),
        }

    def get_intensity(self):
        """Gesamtintensität."""
        q = self.read()
        return q["Q1"] + q["Q2"] + q["Q3"] + q["Q4"]

    def get_offset(self):
        """Berechnet Spot-Position (x,y) relativ zur Mitte."""
        q = self.read()
        x = (q["Q1"] + q["Q4"]) - (q["Q2"] + q["Q3"])
        y = (q["Q1"] + q["Q2"]) - (q["Q3"] + q["Q4"])
        return x, y

    def get_normalized_offset(self):
        """Normierte Position (-1 bis 1)."""
        x, y = self.get_offset()
        total = self.get_intensity()
        if total == 0:
            return 0, 0
        return x / total, y / total
