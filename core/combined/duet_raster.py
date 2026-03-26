# core/combined/duet_raster.py

class DuetRasterScan:
    def __init__(self, duet, camera, x_range, y_range, step, analyzer):
        self.duet = duet
        self.camera = camera
        self.x_range = x_range
        self.y_range = y_range
        self.step = step
        self.analyzer = analyzer

    def run(self, heatmap):
        from .raster_scan import RasterScan

        scan = RasterScan(self.duet, self.camera, self.x_range, self.y_range, self.step)

        def callback(x, y, frame):
            value = self.analyzer(frame)
            heatmap.add_value(x, y, value)

        scan.run(callback)
        return heatmap
