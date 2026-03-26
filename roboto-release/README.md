````markdown
# roboto — Modular Robotics & Vision Framework

**roboto** ist ein modulares Robotics‑Framework mit:

- Multi‑Axis‑Motion‑Control
- Multi‑Node‑Vision (PC, Jetson, Mobile)
- Sensor‑Integration
- AI‑gestützten Tools (Autofocus, Vision‑Follow, Spot‑Follow, Raster‑Scan, Heatmap)
- Recorder & Replay
- Annotation (Boxes, Masken, Keypoints)
- Dataset‑Export (YOLO, COCO, Pose, Segmentation)
- Moderner Web‑UI (Svelte)
- Mobile‑Client
- Docker‑Deployment & Start‑Scripts

Dieses Verzeichnis **`roboto-release/`** ist das **Release‑Bundle**:  
Es enthält alles, was zum **Ausführen** von roboto nötig ist – nicht alles, was zum **Entwickeln** nötig ist.

---

## 1. Inhalt dieses Release‑Bundles

Struktur von `roboto-release/`:

```text
roboto-release/
 ├── backend/
 │     ├── config/
 │     │     ├── vision_config.py
 │     │     └── vision_profiles.py
 │     │
 │     ├── core/
 │     │     ├── combined/
 │     │     ├── config/
 │     │     ├── control/
 │     │     ├── hardware/
 │     │     ├── motors/
 │     │     ├── sensors/
 │     │     └── vision/
 │     │
 │     ├── server/
 │     │     ├── api_vision.py
 │     │     ├── mobile_ws.py
 │     │     ├── video_stream.py
 │     │     └── websocket_server.py
 │     │
 │     ├── Dockerfile.backend
 │     └── start_backend.sh
 │
 ├── ui/
 │     ├── build/              # Kompilierte Web‑UI (Svelte‑Build)
 │     ├── Dockerfile.ui
 │     └── start_ui.sh
 │
 ├── mobile/
 │     ├── index.html
 │     └── mobile.js
 │
 ├── vision-node/
 │     ├── start_node.py
 │     └── requirements.txt
 │
 ├── docker-compose.yml
 ├── README.md
 └── CHANGELOG.md
```
````

**Wichtig:**  
Der Entwicklungs‑Sourcecode (z. B. `src/`, `templates/`) liegt im **Hauptprojekt** (`roboto/`), nicht im Release‑Bundle.  
Das ist **gewollt**:

- `roboto/` → Entwicklung
- `roboto-release/` → Ausführung / Deployment

---

## 2. Haupt‑Features

### 2.1 Robotics / Motion

- Multi‑Axis‑Motion‑Control (`core/control/`)
- Motion Planner (`motion_planner.py`)
- Raster‑Scan & Heatmap‑Scan (`core/combined/raster_scan.py`, `raster_heatmap.py`)
- Collision Guard (`collision_guard.py`)
- Autofocus (`autofocus.py`, `ai_autofocus.py`)
- Vision‑Follow & Spot‑Follow (`vision_follow.py`, `spot_follow.py`, `ai_spot_follow.py`)
- Duet3D‑Integration (`core/hardware/duet3d.py`)
- Arduino‑Firmware (`roboto_firmware.ino`)

### 2.2 Vision

- Multi‑Node‑Vision (PC, Jetson, Mobile)
- YOLO / Segmenter / Pose (modell‑agnostische Pipeline)
- Vision‑Recorder (`recorder.py`)
- Vision‑Replay (`replay_reader.py`, `replay_service.py`)
- Annotation‑Tools (Boxes, Masken, Keypoints)
- Dataset‑Export (YOLO, COCO, Pose, Segmentation) (`dataset_exporter.py`)
- Model‑Switcher (YOLO / Seg / Pose)
- Performance‑Overlay (FPS, Latenz)
- Health‑Monitoring (healthy / degraded / offline)
- Auto‑Reconnect für Remote‑Nodes

### 2.3 Sensors

- IMU (`core/sensors/imu.py`)
- Lidar (`core/sensors/lidar.py`)
- Optical Sensor (`core/sensors/optical.py`)
- Current Sensor (`core/sensors/current.py`)
- Mobile Device Sensor (`core/sensors/mobile_device.py`)

### 2.4 Web‑UI

Die Web‑UI ist bereits **kompiliert** und liegt in `ui/build/`.  
Sie bietet u. a.:

- Vision‑Ansicht (Live‑Stream, Overlays)
- Vision‑Recorder & Replay‑Player
- Annotation‑Tools (Boxes, Masken, Keypoints)
- Dataset‑Export‑Panel
- Model‑Switcher
- Backend‑Selector
- Vision‑Node‑Selector
- Performance‑Overlay
- Motion‑Control‑Panel
- Sensor‑Live‑Ansichten
- Heatmap‑Views

### 2.5 Server

- REST‑API (`server/api_vision.py`)
- Vision‑Streaming (`server/video_stream.py`)
- WebSocket‑Server (`server/websocket_server.py`)
- Mobile‑WebSocket (`server/mobile_ws.py`)

### 2.6 Mobile‑Client

- `mobile/index.html` + `mobile.js`
- verbindet sich per WebSocket mit `/mobile`
- kann Vision‑Daten und Sensor‑Daten senden
- Auto‑Reconnect‑Logik möglich (im Client‑JS)

---

## 3. Entwicklungsprojekt vs. Release‑Bundle

**Wichtiges Konzept:**

- Der Ordner **`roboto/`** (ohne `-release`) ist dein **Entwicklungsordner**.
  - Enthält: `src/`, `templates/`, Svelte‑Source, Dev‑Tools, etc.
  - Hier wird entwickelt, erweitert, refactored.

- Der Ordner **`roboto-release/`** ist dein **Release‑Bundle**.
  - Enthält: kompiliertes UI (`ui/build/`), Backend‑Code, Mobile‑Client, Start‑Scripts, Docker‑Files.
  - Hier wird **nicht** entwickelt, sondern nur **ausgeführt** / deployed.

Dass Ordner wie `core/`, `server/`, `config/`, `mobile/` **sowohl im Entwicklungsordner als auch im Release‑Ordner** existieren, ist **normal und gewollt**:

- Im Entwicklungsordner: als Sourcecode‑Basis
- Im Release‑Ordner: als lauffähiges Paket

---

## 4. Start ohne Docker (lokal)

### 4.1 Backend starten

Im Ordner `roboto-release/backend/`:

```bash
# Optional: virtuelles Environment aktivieren
# python -m venv venv
# source venv/bin/activate  (Linux/macOS)
# venv\Scripts\activate.bat (Windows)

pip install -r requirements.txt
./start_backend.sh
```

Oder direkt:

```bash
python -m server.video_stream
```

Standard‑Port: `8022`

### 4.2 UI starten (falls du nicht den Build, sondern Dev‑UI nutzen willst)

Im Entwicklungsordner (`roboto/`, nicht im Release):

```bash
cd src
npm install
npm run dev
```

Im Release‑Bundle ist die UI bereits gebaut (`ui/build/`) und kann z. B. über einen einfachen Static‑Server oder Nginx ausgeliefert werden (siehe Docker unten).

---

## 5. Start mit Docker

Dieses Release enthält Docker‑Files für Backend und UI sowie ein `docker-compose.yml`.

### 5.1 Backend‑Container

`roboto-release/backend/Dockerfile.backend`:

- Basis: `python:3.11-slim`
- Installiert `requirements.txt`
- Kopiert Backend‑Code
- Startet `server.video_stream` auf Port `8022`

### 5.2 UI‑Container

`roboto-release/ui/Dockerfile.ui`:

- Build‑Stage: `node:20` → Svelte‑Build
- Runtime: `nginx:alpine` → dient `ui/build/` unter Port `80`

### 5.3 docker-compose

Im Ordner `roboto-release/`:

```bash
docker compose up --build
```

Standard‑Ports:

- Backend: `8022` (Host) → `8022` (Container)
- UI: `8033` (Host) → `80` (Container)

Danach:

- UI im Browser: `http://localhost:8033`
- Backend‑API: `http://localhost:8022`

---

## 6. Vision‑Nodes & Mobile‑Client

### 6.1 Vision‑Node (z. B. Jetson / Remote‑PC)

Im Ordner `roboto-release/vision-node/`:

```bash
pip install -r requirements.txt
python start_node.py
```

`start_node.py` registriert einen Vision‑Node und startet dessen Vision‑Service.

### 6.2 Mobile‑Client

Im Ordner `roboto-release/mobile/`:

- `index.html` im Browser öffnen (z. B. auf dem Handy)
- `mobile.js` verbindet sich per WebSocket mit dem Backend (`/mobile`)
- kann Vision‑Frames, Sensor‑Daten, etc. senden
- Auto‑Reconnect kann im JS implementiert sein (z. B. WebSocket‑Reconnect‑Loop)

---

## 7. Vision‑Funktionen im Überblick

### 7.1 Pipeline & Modelle

- `core/vision/pipeline.py`
  - `set_model(model_type)`
  - `load_model()`
  - `process_frame()`
  - unterstützt YOLO / Segmenter / Pose (modell‑agnostisch)

### 7.2 VisionService

- `core/vision/vision_service.py`
  - Kamera‑Handling
  - Pipeline‑Aufruf
  - FPS‑Berechnung
  - Latenz‑Messung
  - Recorder‑Integration

### 7.3 Recorder & Replay

- `core/vision/recorder.py`
  - speichert Frames + Metadaten + Ergebnisse
- `core/vision/replay_reader.py` / `replay_service.py`
  - lädt Sessions
  - ermöglicht Frame‑für‑Frame‑Analyse

### 7.4 Annotation & Dataset‑Export

- Bounding Boxes, Masken, Keypoints
- Export in:
  - YOLO
  - COCO
  - Pose
  - PNG‑Masken

---

## 8. Motion & Combined‑Module

Die Datei `core/combined/` enthält kombinierte Logik aus:

- Vision
- Motion
- AI
- Safety

Beispiele:

- `raster_scan.py` / `raster_heatmap.py` → Raster‑Scan & Heatmap‑Scan
- `autofocus.py` / `ai_autofocus.py` → Autofocus‑Logik
- `vision_follow.py` / `ai_spot_follow.py` → Vision‑Follow / Spot‑Follow
- `collision_guard.py` → Kollisionsschutz
- `mobile_controller.py` → Mobile‑Control‑Integration

Diese Module sind für komplexere Robotik‑Workflows gedacht.

---

## 9. Sensors

In `core/sensors/`:

- `sensor_base.py` → gemeinsame Basis
- `imu.py` → Inertial Measurement Unit
- `lidar.py` → Lidar‑Integration
- `optical.py` → optische Sensoren
- `current.py` → Stromsensor
- `mobile_device.py` → Sensoren vom Mobile‑Client

---

## 10. Entwicklung vs. Deployment (Kurzfassung)

- **Entwicklung:**
  - Ordner: `roboto/`
  - Enthält: `src/`, `templates/`, vollständigen Sourcecode
  - Hier wird entwickelt, erweitert, refactored

- **Deployment / Release:**
  - Ordner: `roboto-release/`
  - Enthält: kompiliertes UI, Backend‑Code, Mobile‑Client, Start‑Scripts, Docker‑Files
  - Hier wird nur gestartet / deployed

Dass Ordner wie `core/`, `server/`, `config/`, `mobile/` **in beiden** existieren, ist **normal und korrekt**:

- im Entwicklungsordner als Source
- im Release‑Ordner als lauffähiges Paket

---

## 11. Versionierung & Changelog

Siehe `CHANGELOG.md` für eine Übersicht der Versionen und Änderungen.

---

## 12. Nächste Schritte / Erweiterbarkeit

roboto ist modular aufgebaut und kann erweitert werden um:

- neue Vision‑Modelle / Backends
- neue Sensoren
- neue Bewegungs‑Templates
- neue UI‑Panels
- zusätzliche Nodes (z. B. weitere Jetsons, PCs, Mobile‑Devices)
- CI/CD‑Pipelines, Tests, Linting, etc.

---
