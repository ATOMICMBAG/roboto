# core/hardware/duet3d.py

import requests
import time

class Duet3D:
    def __init__(self, host="http://duet3d.local", password=None):
        self.host = host.rstrip("/")
        self.password = password

    def send_gcode(self, cmd):
        url = f"{self.host}/machine/code"
        payload = {"code": cmd}

        r = requests.post(url, json=payload)
        return r.json()

    def get_status(self):
        url = f"{self.host}/machine/status"
        r = requests.get(url)
        return r.json()

    def get_position(self):
        status = self.get_status()
        return status["coords"]["xyz"]

    def home_all(self):
        return self.send_gcode("G28")

    def move_to(self, x=None, y=None, z=None, f=3000):
        cmd = "G1"
        if x is not None: cmd += f" X{x}"
        if y is not None: cmd += f" Y{y}"
        if z is not None: cmd += f" Z{z}"
        cmd += f" F{f}"
        return self.send_gcode(cmd)

    def move_by(self, dx=0, dy=0, dz=0, f=3000):
        pos = self.get_position()
        return self.move_to(
            x=pos[0] + dx,
            y=pos[1] + dy,
            z=pos[2] + dz,
            f=f
        )
