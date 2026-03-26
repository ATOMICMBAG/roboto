# core/combined/raster_heatmap.py

import numpy as np

class RasterHeatmap:
    def __init__(self, x_range, y_range, step):
        self.x_range = x_range
        self.y_range = y_range
        self.step = step

        self.xs = np.arange(x_range[0], x_range[1], step)
        self.ys = np.arange(y_range[0], y_range[1], step)

        self.map = np.zeros((len(self.ys), len(self.xs)))

    def add_value(self, x, y, value):
        xi = int((x - self.x_range[0]) / self.step)
        yi = int((y - self.y_range[0]) / self.step)
        self.map[yi, xi] = value

    def get_map(self):
        return self.map
