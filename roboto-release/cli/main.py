import typer
import subprocess
import webbrowser
import requests
import sys
import os
import time
from pathlib import Path

app = typer.Typer(help="roboto command line interface")

BASE_DIR = Path(__file__).resolve().parents[1]
BACKEND_URL = "http://localhost:8022/api/vision/nodes/status"
BACKEND_PID_FILE = BASE_DIR / ".roboto_backend.pid"


def _detect_backend_target():
    root_server = BASE_DIR / "server" / "video_stream.py"
    release_server = BASE_DIR / "backend" / "server" / "video_stream.py"

    if root_server.exists():
        return BASE_DIR, "server.video_stream:app"
    if release_server.exists():
        return BASE_DIR / "backend", "server.video_stream:app"

    return BASE_DIR, "server.video_stream:app"


def _is_backend_online() -> bool:
    try:
        return requests.get(BACKEND_URL, timeout=1.0).ok
    except Exception:
        return False


def _is_pid_alive(pid: int) -> bool:
    try:
        os.kill(pid, 0)
        return True
    except PermissionError:
        return True
    except Exception:
        return False


def _read_pid_file(path: Path):
    try:
        return int(path.read_text(encoding="utf-8").strip())
    except Exception:
        return None


def _remove_pid_file(path: Path):
    try:
        if path.exists():
            path.unlink()
    except Exception:
        pass

# -------------------------
# Backend Commands
# -------------------------

@app.command()
def start_backend(wait_seconds: int = 6):
    """Startet das roboto Backend."""

    if _is_backend_online():
        typer.echo("Backend läuft bereits auf Port 8022.")
        return

    existing_pid = _read_pid_file(BACKEND_PID_FILE)
    if existing_pid and _is_pid_alive(existing_pid):
        typer.echo(f"Backend-Prozess existiert bereits (PID {existing_pid}).")
        return

    typer.echo("Starte Backend...")

    log_path = BASE_DIR / "backend.log"
    log_file = open(log_path, "a", encoding="utf-8")

    backend_cwd, backend_app = _detect_backend_target()

    proc = subprocess.Popen([
        sys.executable,
        "-m",
        "uvicorn",
        backend_app,
        "--host",
        "0.0.0.0",
        "--port",
        "8022",
    ], cwd=str(backend_cwd), stdout=log_file, stderr=subprocess.STDOUT)

    BACKEND_PID_FILE.write_text(str(proc.pid), encoding="utf-8")
    typer.echo(f"Backend-Prozess gestartet (PID {proc.pid}).")

    if wait_seconds > 0:
        end = time.time() + wait_seconds
        while time.time() < end:
            if _is_backend_online():
                typer.echo("Backend ist ONLINE.")
                return
            time.sleep(0.5)

        typer.echo(f"Backend antwortet noch nicht. Prüfe Logs: {log_path}")

@app.command()
def stop_backend():
    """Stoppt das Backend (falls möglich)."""

    pid = _read_pid_file(BACKEND_PID_FILE)
    if not pid:
        typer.echo("Keine Backend-PID-Datei gefunden.")
        if _is_backend_online():
            typer.echo("Backend scheint trotzdem zu laufen (extern gestartet).")
        return

    if not _is_pid_alive(pid):
        typer.echo("Backend-Prozess laut PID-Datei läuft nicht mehr.")
        _remove_pid_file(BACKEND_PID_FILE)
        return

    try:
        if os.name == "nt":
            subprocess.run(["taskkill", "/PID", str(pid), "/T", "/F"], check=False)
        else:
            os.kill(pid, 15)
    except Exception as e:
        typer.echo(f"Fehler beim Stoppen: {e}")
        return

    _remove_pid_file(BACKEND_PID_FILE)
    typer.echo(f"Backend-Stopp gesendet (PID {pid}).")

@app.command()
def ui():
    """Öffnet die Web-UI im Browser."""
    typer.echo("Öffne UI...")
    webbrowser.open("http://localhost:8033")

# -------------------------
# Vision Node Commands
# -------------------------

@app.command()
def status():
    """Zeigt Backend-Status und bekannte PID an."""
    online = _is_backend_online()
    pid = _read_pid_file(BACKEND_PID_FILE)
    typer.echo(f"Backend API: {'ONLINE' if online else 'OFFLINE'}")
    typer.echo(f"PID-Datei: {pid if pid else 'nicht vorhanden'}")

@app.command()
def nodes():
    """Listet alle Vision-Nodes auf."""
    try:
        res = requests.get("http://localhost:8022/api/vision/nodes/status", timeout=3)
        data = res.json()
        typer.echo("Vision Nodes:")
        for n in data:
            typer.echo(f"- {n['name']} ({n['status']})")
    except Exception as e:
        typer.echo(f"Fehler beim Abrufen der Nodes: {e}")

# -------------------------
# Entry Point
# -------------------------

def run():
    app()

if __name__ == "__main__":
    run()
