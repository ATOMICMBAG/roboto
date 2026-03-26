import platform
import os

def detect_hardware():
    machine = platform.machine().lower()
    system = platform.system().lower()

    # Jetson (ARM64 + NVIDIA)
    if machine == "aarch64" and os.path.exists("/usr/lib/aarch64-linux-gnu/tegra"):
        return "jetson"

    # Intel CPU/iGPU
    if "intel" in platform.processor().lower():
        return "intel"

    # Windows / Linux Desktop
    if system in ("windows", "linux"):
        return "desktop"

    # Fallback: Mobile
    return "mobile"
