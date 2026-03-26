# core/combined/raster_scan.py

import numpy as np

class RasterScan:
    def __init__(self, duet, camera, x_range, y_range, step):
        self.duet = duet
        self.camera = camera
        self.x_range = x_range
        self.y_range = y_range
        self.step = step

    def generate_points(self):
        xs = np.arange(self.x_range[0], self.x_range[1], self.step)
        ys = np.arange(self.y_range[0], self.y_range[1], self.step)

        for yi, y in enumerate(ys):
            # Serpentinen-Muster (schneller)
            if yi % 2 == 0:
                for x in xs:
                    yield x, y
            else:
                for x in reversed(xs):
                    yield x, y

    def run(self, callback):
        for x, y in self.generate_points():
            self.duet.move_to(x=x, y=y)
            frame = self.camera.get_frame()
            callback(x, y, frame)
