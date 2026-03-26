# core/sensors/mobile_device.py

from .sensor_base import Sensor

class MobileDeviceSensor(Sensor):
    def __init__(self):
        self.gyro = (0, 0, 0)
        self.accel = (0, 0, 0)
        self.gps = (0, 0, 0)
        self.frame = None

    def update_gyro(self, a, b, g):
        self.gyro = (a, b, g)

    def update_accel(self, x, y, z):
        self.accel = (x, y, z)

    def update_gps(self, lat, lon, alt):
        self.gps = (lat, lon, alt)

    def update_frame(self, frame):
        self.frame = frame
