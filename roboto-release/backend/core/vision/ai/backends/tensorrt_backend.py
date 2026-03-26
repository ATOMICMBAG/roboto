# core/vision/ai/backends/tensorrt_backend.py

import tensorrt as trt
import pycuda.driver as cuda
import pycuda.autoinit
import numpy as np

from .backend_base import BackendBase


class TensorRTBackend(BackendBase):
    """
    TensorRT Backend für NVIDIA GPUs / Jetson.
    Lädt eine .engine / .plan Datei und führt Inference auf CUDA aus.
    """

    def __init__(self):
        super().__init__()
        self.engine = None
        self.context = None
        self.bindings = []
        self.inputs = []
        self.outputs = []
        self.stream = None


    # ---------------------------------------------------------
    # Modell laden
    # ---------------------------------------------------------
    def load(self, engine_path):
        logger = trt.Logger(trt.Logger.WARNING)

        # Engine laden
        with open(engine_path, "rb") as f, trt.Runtime(logger) as runtime:
            self.engine = runtime.deserialize_cuda_engine(f.read())

        self.context = self.engine.create_execution_context()
        self.stream = cuda.Stream()

        # Bindings vorbereiten
        for i in range(self.engine.num_bindings):
            name = self.engine.get_binding_name(i)
            dtype = trt.nptype(self.engine.get_binding_dtype(i))
            shape = self.engine.get_binding_shape(i)

            size = np.prod(shape) * np.dtype(dtype).itemsize
            device_mem = cuda.mem_alloc(size)

            binding = {
                "index": i,
                "name": name,
                "dtype": dtype,
                "shape": shape,
                "device_mem": device_mem
            }

            if self.engine.binding_is_input(i):
                self.inputs.append(binding)
            else:
                self.outputs.append(binding)

            self.bindings.append(int(device_mem))

        self.model_loaded = True


    # ---------------------------------------------------------
    # Inference
    # ---------------------------------------------------------
    def infer(self, input_tensor: np.ndarray):
        if not self.model_loaded:
            raise RuntimeError("TensorRT engine not loaded.")

        # Input → GPU
        inp = self.inputs[0]
        cuda.memcpy_htod_async(inp["device_mem"], input_tensor, self.stream)

        # Ausführen
        self.context.execute_async_v2(self.bindings, self.stream.handle)

        # Output ← GPU
        outputs = []
        for out in self.outputs:
            host_mem = np.empty(out["shape"], dtype=out["dtype"])
            cuda.memcpy_dtoh_async(host_mem, out["device_mem"], self.stream)
            outputs.append(host_mem)

        self.stream.synchronize()
        return outputs
