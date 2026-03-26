# templates/movement/raster_scan.py

def raster_scan(stepper_group, x_range, y_range, step):
    for y in np.arange(y_range[0], y_range[1], step):
        for x in np.arange(x_range[0], x_range[1], step):
            stepper_group.move_to({"X": x, "Y": y})
            stepper_group.wait()
            yield (x, y)
