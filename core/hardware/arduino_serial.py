# core/hardware/arduino_serial.py

import time

try:
    import serial
except Exception:
    serial = None

class ArduinoSerial:
    def __init__(self, port="/dev/ttyUSB0", baud=115200, timeout=1):
        self.port = port
        self.baud = baud
        self.timeout = timeout
        self.ser = None

    def connect(self):
        if serial is None:
            raise RuntimeError("pyserial is not installed")
        self.ser = serial.Serial(self.port, self.baud, timeout=self.timeout)
        time.sleep(2)  # Arduino reset delay

    def send(self, command):
        if not self.ser:
            raise Exception("Arduino not connected")

        self.ser.write((command + "\n").encode())
        return self.ser.readline().decode().strip()

    def close(self):
        if self.ser:
            self.ser.close()
