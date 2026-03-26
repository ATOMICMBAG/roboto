# core/sensors/lidar.py

from .sensor_base import Sensor

class LidarSensor(Sensor):
    def __init__(self, hardware, port="/dev/ttyUSB1", baud=115200):
        self.hw = hardware
        self.port = port
        self.baud = baud
        self.lidar = None

    def start(self):
        self.lidar = self.hw.open_lidar(self.port, self.baud)

    def stop(self):
        if self.lidar:
            self.lidar.stop()

    def get_scan(self):
        """Liste von (winkel, distanz)"""
        return self.lidar.get_scan()

    def get_pointcloud(self):
        """Liste von (x, y) Punkten"""
        scan = self.get_scan()
        points = []
        for angle, dist in scan:
            x = dist * math.cos(math.radians(angle))
            y = dist * math.sin(math.radians(angle))
            points.append((x, y))
        return points
