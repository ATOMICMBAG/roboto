[DE](./README_DE.md) ｜ DE

# roboto - Modular Robotics & Vision Framework

**roboto** is a modular robotics framework featuring multi-axis motion control, multi-node vision system, sensor integration, AI-powered tools, dataset export, replay system, and a modern web UI.

[**_Preview: roboto.maazi.de_**](https://roboto.maazi.de)
<be>

![pic](roboto.jpeg)

## Live Preview

A live preview of the application is available on the author's VPS at [**roboto.maazi.de**](https://roboto.maazi.de). However, **please note that without connected hardware (Arduino, sensors, etc.), certain features like motion control and sensor readings will not function or will show placeholder data**. The vision system and UI will operate normally, but full functionality requires the appropriate hardware attachments.

If you have compatible hardware, you can connect it and the system should automatically detect and utilize it.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Live Preview](#live-preview)
- [Development vs Release](#development-vs-release)
- [Future Work](#future-work)
- [License](#license)

## Overview

roboto is designed as an extensible platform for robotics experimentation and development. It integrates hardware control (Arduino, Duet3D), computer vision (YOLO, segmentation, pose estimation), sensor fusion (IMU, Lidar, optical, current), and a responsive web interface built with Svelte.

The framework emphasizes modularity, allowing users to mix and match components based on their hardware setup and experimentation goals.

## Features

### Robotics / Motion Control

- Multi-Axis Motion Control
- Motion Planner
- Raster Scan & Heatmap Scan
- Collision Guard
- Autofocus
- Vision Follow & Spot Follow
- Duet3D Integration
- Arduino Firmware Support

### Vision System

- Multi-Node Vision (PC, Jetson, Mobile Devices)
- YOLO / Segmenter / Pose Estimation (model-agnostic pipeline)
- Vision Recorder & Replay
- Annotation Tools (Bounding Boxes, Masks, Keypoints)
- Dataset Export (YOLO, COCO, Pose, Segmentation)
- Model Switcher
- Performance Overlay (FPS, Latency)
- Health Monitoring (healthy/degraded/offline)
- Auto-Reconnect for Remote Nodes

### Sensor Integration

- IMU (Inertial Measurement Unit)
- Lidar
- Optical Sensors
- Current Sensors
- Mobile Device Sensors

### Web UI (Svelte)

- Vision Dashboard (Live Stream, Overlays)
- Motion Control Panel
- Sensor Live Graphs
- 3D Heatmap View
- Replay Player
- Annotation Tools
- Dataset Export Panel
- Model Switcher
- Backend Selector
- Node Selector
- System Status Overview

### Server- REST API (`server/api_vision.py`)

- Vision Streaming Server (`server/video_stream.py`)
- WebSocket Server (`server/websocket_server.py`)
- Mobile WebSocket (`server/mobile_ws.py`)

### Mobile Client- Vision & Sensor Streaming Client

- Auto-Reconnect Capability
- Simple HTML/JS Interface## Project Structure

```
roboto/
 ├── ARCHIVE/              # Historical development documents
 ├── build/                # Frontend build output
 ├── cli/                  # Command-line interface (Typer-based)
 ├── config/               # Configuration files (vision)
 ├── core/                 # Core functionality
 │   ├── combined/         # Combined modules (motion+vision+AI)
 │   ├── config/           # Core configuration
 │   ├── control/          # Motion control
 │   ├── hardware/         # Hardware interfaces (Arduino, Duet3D)
 │   ├── motors/           # Motor controllers
 │   ├── sensors/          # Sensor drivers
 │   └── vision/           # Vision processing pipeline
 ├── launcher/             # Tkinter-based desktop launcher
 ├── mobile/               # Mobile client files
 ├── recordings/           #<write_to_file>
```

<path>README.md</path>
<content>

# roboto - Modular Robotics & Vision Framework

**roboto** is a modular robotics framework featuring multi-axis motion control, multi-node vision system, sensor integration, AI-powered tools, dataset export, replay system, and a modern web UI.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Live Preview](#live-preview)
- [Development vs Release](#development-vs-release)
- [Future Work](#future-work)
- [License](#license)

## Overview

roboto is designed as an extensible platform for robotics experimentation and development. It integrates hardware control (Arduino, Duet3D), computer vision (YOLO, segmentation, pose estimation), sensor fusion (IMU, Lidar, optical, current), and a responsive web interface built with Svelte.

The framework emphasizes modularity, allowing users to mix and match components based on their hardware setup and experimentation goals.

## Features### Robotics / Motion Control- Multi-Axis Motion Control

- Motion Planner
- Raster Scan & Heatmap Scan
- Collision Guard
- Autofocus
- Vision Follow & Spot Follow
- Duet3D Integration
- Arduino Firmware Support

### Vision System

- Multi-Node Vision (PC, Jetson, Mobile Devices)
- YOLO / Segmenter / Pose Estimation (model-agnostic pipeline)
- Vision Recorder & Replay
- Annotation Tools (Bounding Boxes, Masks, Keypoints)
- Dataset Export (YOLO, COCO, Pose, Segmentation)
- Model Switcher
- Performance Overlay (FPS, Latency)
- Health Monitoring (healthy/degraded/offline)
- Auto-Reconnect for Remote Nodes

### Sensor Integration

- IMU (Inertial Measurement Unit)
- Lidar
- Optical Sensors
- Current Sensors
- Mobile Device Sensors

### Web UI (Svelte)

- Vision Dashboard (Live Stream, Overlays)
- Motion Control Panel
- Sensor Live Graphs
- 3D Heatmap View
- Replay Player
- Annotation Tools
- Dataset Export Panel- Model Switcher
- Backend Selector
- Node Selector
- System Status Overview

### Server- REST API (`server/api_vision.py`)

- Vision Streaming Server (`server/video_stream.py`)
- WebSocket Server (`server/websocket_server.py`)
- Mobile WebSocket (`server/mobile_ws.py`)

### Mobile Client

- Vision & Sensor Streaming Client
- Auto-Reconnect Capability
- Simple HTML/JS Interface

## Project Structure

```

roboto/
├── ARCHIVE/ # Historical development documents
├── build/ # Frontend build output
├── cli/ # Command-line interface (Typer-based)
├── config/ # Configuration files (vision)
├── core/ # Core functionality
│ ├── combined/ # Combined modules (motion+vision+AI)
│ ├── config/ # Core configuration
│ ├── control/ # Motion control
│ ├── hardware/ # Hardware interfaces (Arduino, Duet3D)
│ ├── motors/ # Motor controllers
│ ├── sensors/ # Sensor drivers
│ └── vision/ # Vision processing pipeline
├── launcher/ # Tkinter-based desktop launcher
├── mobile/ # Mobile client files
├── recordings/ # Session recordings
├── roboto-release/ # Release bundle (execution/deployment)
├── server/ # Server components (API, streaming, websockets)
├── src/ # Svelte frontend source
│ ├── App.svelte
│ ├── main.js
│ ├── components/ # UI components
│ ├── pages/ # Page components
│ └── store/ # State management
├── templates/ # Movement templates
├── .vscode/ # VS Code settings
├── index.html # Frontend entry point
├── jsconfig.json ├── package.json
├── package-lock.json
├── setup.py
├── svelte.config.js └── vite.config.js

```

## Installation & Setup

### Prerequisites

- **Python 3.11+**
- **Node.js 20 LTS**
- **npm** (comes with Node.js)
- Optional but recommended for full functionality: Arduino or similar hardware

### Backend Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd roboto
```

2. Create and activate a Python virtual environment:

```bash
python -m venv .venv
# Windows
.\.venv\Scripts\Activate.ps1
# Linux/macOS
source .venv/bin/activate
```

3. Install backend dependencies:

```bash
pip install --upgrade pip
pip install fastapi "uvicorn[standard]" opencv-python requests typer pyserial numpy
```

4. (Optional) Install the CLI tool:

```bash
pip install -e .
```

### Frontend Setup

1. Install Node.js dependencies:

```bash
npm install
```

2. The frontend is ready for development or building.

### Mobile Client

No installation required—simply open `mobile/index.html` in a browser and configure the WebSocket connection to your backend.

## Running the Application

### Backend Only

To start the backend server:

```bash
# Using virtual environment (if activated)
python -m uvicorn server.video_stream:app --host 0.0.0.0 --port 8022 --reload
```

Or using the CLI:

```bash
roboto start-backend
```

The backend will be available at `http://localhost:8022`.

### Frontend Only (Development Mode)

To start the frontend development server:

````bash
npm run dev -- --host 0.0.0.0 --port 8033```
Then open `http://localhost:8033` in your browser.

### Full Stack (Development)
1. Start the backend in one terminal:
```bash
.\.venv\Scripts\Activate.ps1  # Windows
# or
source .venv/bin/activate     # Linux/macOS
python -m uvicorn server.video_stream:app --reload --port 8022
````

2. Start the frontend in another terminal:

```bash
npm run dev -- --port 8033
```

3. Access the UI at `http://localhost:8033` and the backend API at `http://localhost:8022`.

### Production Build

To create a production build of the frontend:

```bash
npm run build
```

This generates optimized static files in the `build/` directory.

To serve the production build:

```bash
# Simple static server (for testing)
npx serve build
# Or copy to roboto-release/ui/build/ for Docker/deployment
xcopy /E /I /Y build\* roboto-release\ui\build\  # Windows
# or
cp -r build/* roboto-release/ui/build/         # Linux/macOS
```

### Docker Deployment

The `roboto-release/` directory contains Docker files for easy deployment:

```bash
cd roboto-release
docker compose up --build
```

This will start:

- Backend on port `8022`
- UI on port `8033`

Note: The UI container expects the frontend build to be present in `roboto-release/ui/build/`. Run `npm run build` and copy the output before building Docker images if you've made frontend changes.

## Live Preview

A live preview of the application is available on the author's VPS at [**roboto.maazi.de**](https://roboto.maazi.de). However, **please note that without connected hardware (Arduino, sensors, etc.), certain features like motion control and sensor readings will not function or will show placeholder data**. The vision system and UI will operate normally, but full functionality requires the appropriate hardware attachments.

If you have compatible hardware, you can connect it and the system should automatically detect and utilize it.

## Development vs Release- **`roboto/`** – Development directory containing full source code (`src/`, `templates/`, etc.)

- **`roboto-release/`** – Release bundle containing only what's needed to run the application:
  - Pre-built frontend (`ui/build/`)
  - Backend code
  - Mobile client
  - CLI and launcher tools
  - Docker configuration
  - Startup scripts

This separation ensures that the release is clean and focused on execution, while the development directory retains all tools for extension and modification.

## Future WorkThe author plans to continue development, with potential future enhancements including:

- QR code generator for easy mobile client setup
- Live backend streaming logs in the launcher
- Node health monitoring dashboard
- Mobile client status indicators
- Additional launcher buttons for recorder/replay, model switching, dataset export
- Improved launcher design (icons, colors)

Contributions, feedback, and ideas are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Thanks to the open-source community for the various libraries and tools that make this project possible.
