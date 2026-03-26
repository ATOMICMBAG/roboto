import queue
import socket
import subprocess
import sys
import threading
import time
import tkinter as tk
import webbrowser
from pathlib import Path

import requests

class RobotoLauncher:
    def __init__(self):
        self.base_dir = Path(__file__).resolve().parents[1]
        self.backend_cwd = self._detect_backend_cwd()
        self.frontend_mode, self.frontend_cwd = self._detect_frontend_mode()

        self.backend_process = None
        self.frontend_process = None
        self.log_queue = queue.Queue()
        self.state_queue = queue.Queue()
        self.closing = False

        self.root = tk.Tk()
        self.root.title("roboto Launcher")
        self.root.geometry("560x460")

        tk.Label(self.root, text="roboto Control Center", font=("Arial", 16)).pack(pady=10)

        btn_frame = tk.Frame(self.root)
        btn_frame.pack(pady=6)

        tk.Button(btn_frame, text="Backend starten", command=self.start_backend, width=24).grid(row=0, column=0, padx=4, pady=2)
        tk.Button(btn_frame, text="Backend stoppen", command=self.stop_backend, width=24).grid(row=0, column=1, padx=4, pady=2)
        tk.Button(btn_frame, text="Frontend starten", command=self.start_frontend, width=24).grid(row=1, column=0, padx=4, pady=2)
        tk.Button(btn_frame, text="Frontend stoppen", command=self.stop_frontend, width=24).grid(row=1, column=1, padx=4, pady=2)
        tk.Button(btn_frame, text="UI öffnen", command=self.open_ui, width=24).grid(row=2, column=0, padx=4, pady=2)
        tk.Button(btn_frame, text="Vision Nodes anzeigen", command=self.show_nodes, width=24).grid(row=2, column=1, padx=4, pady=2)

        self.backend_status_var = tk.StringVar(value="Backend: unbekannt")
        self.frontend_status_var = tk.StringVar(value="Frontend: unbekannt")

        status_frame = tk.Frame(self.root)
        status_frame.pack(fill="x", padx=10, pady=4)

        tk.Label(status_frame, textvariable=self.backend_status_var, anchor="w", font=("Arial", 10, "bold")).pack(fill="x")
        tk.Label(status_frame, textvariable=self.frontend_status_var, anchor="w", font=("Arial", 10, "bold")).pack(fill="x")

        self.status_box = tk.Text(self.root, height=14, width=70)
        self.status_box.pack(padx=10, pady=8, fill="both", expand=True)

        self.log(f"Launcher gestartet. Basis: {self.base_dir}")
        self.log(f"Backend-CWD: {self.backend_cwd}")
        self.log(f"Frontend-Modus: {self.frontend_mode} ({self.frontend_cwd})")

        self.root.protocol("WM_DELETE_WINDOW", self.on_close)
        self.root.after(100, self._drain_log_queue)

        self.poll_thread = threading.Thread(target=self._poll_status_loop, daemon=True)
        self.poll_thread.start()

    def _detect_backend_cwd(self):
        if (self.base_dir / "server" / "video_stream.py").exists():
            return self.base_dir
        if (self.base_dir / "backend" / "server" / "video_stream.py").exists():
            return self.base_dir / "backend"
        return self.base_dir

    def _detect_frontend_mode(self):
        if (self.base_dir / "package.json").exists():
            return "dev", self.base_dir
        if (self.base_dir / "ui" / "build" / "index.html").exists():
            return "static", self.base_dir / "ui"
        return "none", self.base_dir

    def _is_port_open(self, port, host="127.0.0.1"):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(0.35)
            return sock.connect_ex((host, port)) == 0

    def _spawn_process(self, name, cmd, cwd):
        try:
            proc = subprocess.Popen(
                cmd,
                cwd=str(cwd),
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1,
            )
            threading.Thread(target=self._stream_output, args=(name, proc), daemon=True).start()
            self.log(f"{name} gestartet (PID {proc.pid})")
            return proc
        except Exception as e:
            self.log(f"Fehler beim Start von {name}: {e}")
            return None

    def _stream_output(self, name, proc):
        if not proc.stdout:
            return
        for line in proc.stdout:
            msg = line.strip()
            if msg:
                self.log_queue.put(f"[{name}] {msg}")
        self.log_queue.put(f"[{name}] Prozess beendet (Code {proc.poll()})")

    def start_backend(self):
        if self.backend_process and self.backend_process.poll() is None:
            self.log("Backend läuft bereits (Launcher-Prozess).")
            return

        if self._is_port_open(8022):
            self.log("Port 8022 ist bereits offen — Backend scheint schon zu laufen.")
            return

        cmd = [
            sys.executable,
            "-m",
            "uvicorn",
            "server.video_stream:app",
            "--host",
            "0.0.0.0",
            "--port",
            "8022",
        ]
        self.backend_process = self._spawn_process("backend", cmd, self.backend_cwd)

    def stop_backend(self):
        if self.backend_process and self.backend_process.poll() is None:
            self.backend_process.terminate()
            self.log("Backend-Stopp angefordert.")
            return

        self.log("Kein vom Launcher gestarteter Backend-Prozess gefunden.")

    def start_frontend(self):
        if self.frontend_process and self.frontend_process.poll() is None:
            self.log("Frontend läuft bereits (Launcher-Prozess).")
            return

        if self._is_port_open(8033):
            self.log("Port 8033 ist bereits offen — Frontend scheint schon zu laufen.")
            return

        if self.frontend_mode == "dev":
            cmd = ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8033"]
            self.frontend_process = self._spawn_process("frontend", cmd, self.frontend_cwd)
            return

        if self.frontend_mode == "static":
            cmd = [sys.executable, "-m", "http.server", "8033", "--directory", "build"]
            self.frontend_process = self._spawn_process("frontend", cmd, self.frontend_cwd)
            return

        self.log("Frontend-Modus nicht erkannt. Weder package.json noch ui/build gefunden.")

    def stop_frontend(self):
        if self.frontend_process and self.frontend_process.poll() is None:
            self.frontend_process.terminate()
            self.log("Frontend-Stopp angefordert.")
            return

        self.log("Kein vom Launcher gestarteter Frontend-Prozess gefunden.")

    def open_ui(self):
        webbrowser.open("http://localhost:8033")
        self.log("UI geöffnet.")

    def show_nodes(self):
        def worker():
            try:
                res = requests.get("http://localhost:8022/api/vision/nodes/status", timeout=1.2)
                nodes = res.json()
                self.log_queue.put("Vision Nodes:")
                for n in nodes:
                    self.log_queue.put(f"- {n['name']} ({n['status']})")
            except Exception as e:
                self.log_queue.put(f"Fehler: Backend nicht erreichbar ({e}).")

        threading.Thread(target=worker, daemon=True).start()

    def _poll_status_loop(self):
        while not self.closing:
            backend_ok = False
            frontend_ok = False

            try:
                r = requests.get("http://localhost:8022/api/vision/nodes/status", timeout=0.7)
                backend_ok = r.ok
            except Exception:
                backend_ok = False

            try:
                r = requests.get("http://localhost:8033", timeout=0.7)
                frontend_ok = r.ok
            except Exception:
                frontend_ok = False

            self.state_queue.put((backend_ok, frontend_ok))
            time.sleep(1.0)

    def _apply_status(self, backend_ok, frontend_ok):
        self.backend_status_var.set(f"Backend: {'ONLINE' if backend_ok else 'OFFLINE'} (http://localhost:8022)")
        self.frontend_status_var.set(f"Frontend: {'ONLINE' if frontend_ok else 'OFFLINE'} (http://localhost:8033)")
        self.root.title(
            f"roboto Launcher — Backend {'online' if backend_ok else 'offline'} | Frontend {'online' if frontend_ok else 'offline'}"
        )

    def _drain_log_queue(self):
        while True:
            try:
                backend_ok, frontend_ok = self.state_queue.get_nowait()
            except queue.Empty:
                break
            self._apply_status(backend_ok, frontend_ok)

        while True:
            try:
                msg = self.log_queue.get_nowait()
            except queue.Empty:
                break
            self.log(msg)

        if not self.closing:
            self.root.after(100, self._drain_log_queue)

    def log(self, msg):
        self.status_box.insert(tk.END, msg + "\n")
        self.status_box.see(tk.END)

    def on_close(self):
        self.closing = True
        try:
            if self.backend_process and self.backend_process.poll() is None:
                self.backend_process.terminate()
            if self.frontend_process and self.frontend_process.poll() is None:
                self.frontend_process.terminate()
        except Exception:
            pass
        self.root.destroy()

    def run(self):
        self.root.mainloop()


if __name__ == "__main__":
    RobotoLauncher().run()
