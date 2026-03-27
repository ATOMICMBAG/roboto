<script>
  import { onMount } from 'svelte';

  let language = 'en';
  $: showDE = language === 'de';

  onMount(() => {
    const saved = localStorage.getItem('guideLanguage');
    if (saved) language = saved;
  });

  function toggleLanguage() {
    language = language === 'en' ? 'de' : 'en';
    localStorage.setItem('guideLanguage', language);
  }

  const quickStepsEN = [
    "Start the backend (Launcher or CLI)",
    "Open the frontend (http://localhost:8033)",
    "Check 'System Status': Backend/Frontend/WS = ONLINE",
    "In 'Vision' tab, verify live image and overlay",
    "Read Activity-Log for errors (shows action + backend response)"
  ];

  const quickStepsDE = [
    "Backend starten (Launcher oder CLI)",
    "Frontend öffnen (http://localhost:8033)",
    "Im Bereich 'System Status' prüfen: Backend/Frontend/WS = ONLINE",
    "Im Tab 'Vision' Livebild und Overlay prüfen",
    "Bei Fehlern Activity-Log lesen (zeigt Aktion + Backend-Antwort)"
  ];

  const hardwareModesEN = [
    {
      title: "PC/Laptop + Smartphone (recommended for start)",
      text: "Uses Vision, Replay, Annotation, Export and Mobile-Controller without special hardware."
    },
    {
      title: "PC/Laptop + Arduino (e.g. UNO)",
      text: "For simple motor/sensor experiments. Test virtually first, then activate real I/O step by step."
    },
    {
      title: "PC/Laptop + Duet3D / 3D-Printer Controller",
      text: "For multi-axis motion and raster workflows. Very useful for your project focus."
    }
  ];

  const hardwareModesDE = [
    {
      title: "Nur PC/Laptop + Smartphone (empfohlen für Start)",
      text: "Nutzt Vision, Replay, Annotation, Export und Mobile-Controller ohne Spezialhardware."
    },
    {
      title: "PC/Laptop + Arduino (z. B. UNO)",
      text: "Für einfache Motor-/Sensor-Experimente. Erst virtuell testen, dann echte I/O schrittweise aktivieren."
    },
    {
      title: "PC/Laptop + Duet3D / 3D-Drucker-Controller",
      text: "Für Multi-Axis-Motion und Raster-Workflows. Sehr sinnvoll für dein Projektfokus."
    }
  ];
</script>

<section class="guide">
  <div class="lang-toggle">
    <button on:click={toggleLanguage} class={`lang-${language}`}>
      {language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
    </button>
  </div>

  <!-- English Content -->
  {#if language === 'en'}
    <h2>Welcome to Roboto - Modular Robotics & Vision Framework</h2>
    <p>
      <strong>roboto</strong> is a modular robotics framework with multi-axis motion control, multi-node vision system, 
      sensor integration, AI-powered tools, dataset export, replay system, and a modern web UI built with Svelte.
    </p>
    <p>
      Live preview: <a href="https://roboto.maazi.de" target="_blank" class="link">roboto.maazi.de</a> 
      (Note: Without hardware, some features show placeholders.)
    </p>

    <h3>Quickstart</h3>
    <ol>
      {#each quickStepsEN as step}
        <li>{step}</li>
      {/each}
    </ol>

    <h3>UI Tabs Overview</h3>
    <ul>
      <li><b>Dashboard</b>: Motion control + Live sensors + Graphs.</li>
      <li><b>Vision</b>: Camera streams, Overlays, Annotation, Recorder/Replay.</li>
      <li><b>Raster</b>: Raster scan + Heatmap (2D/3D).</li>
      <li><b>Guide</b>: This help page.</li>
    </ul>

    <h3>System Status (important)</h3>
    <p>
      Left sidebar shows live status of Backend, Frontend, WebSocket. 
      Activity-Log displays every action and backend response.
    </p>
    <ul>
      <li><b>Backend OFFLINE</b>: Server not running or port 8022 unreachable.</li>
      <li><b>WS DISCONNECTED</b>: WebSocket issue; realtime limited.</li>
      <li><b>Last Backend Error</b>: Latest API error details.</li>
    </ul>

    <h3>Hardware Strategies</h3>
    <div class="cards">
      {#each hardwareModesEN as mode}
        <article>
          <h4>{mode.title}</h4>
          <p>{mode.text}</p>
        </article>
      {/each}
    </div>

    <h3>Setup & Running</h3>
    <p>See <a href="https://github.com/maazi/roboto" target="_blank" class="link">GitHub README</a> for full installation, 
    backend/frontend start commands, Docker deployment, etc.</p>

    <h3>Features Highlights</h3>
    <ul>
      <li>Multi-Node Vision (YOLO, Segmentation, Pose)</li>
      <li>Motion Control (Multi-Axis, Autofocus, Follow)</li>
      <li>Sensors (IMU, Lidar, etc.)</li>
      <li>Annotation & Dataset Export</li>
      <li>Mobile Client Support</li>
    </ul>

    <article>
      <header>
          <h1>roboto - Modular Robotics & Vision Framework</h1>
          <p>roboto is a modular robotics framework featuring multi-axis motion control, multi-node vision system, sensor integration, AI-powered tools, dataset export, replay system, and a modern web UI.</p>
          <p>Preview: <a href="https://roboto.maazi.de" target="_self" rel="noopener" class="link">roboto.maazi.de</a></p>
      </header>

      <section>
          <h2>Live Preview</h2>
          <p>A live preview of the application is available on the author's VPS at <a href="https://roboto.maazi.de" target="_self" rel="noopener" class="link">roboto.maazi.de</a>. However, please note that without connected hardware (Arduino, sensors, etc.), certain features like motion control and sensor readings will not function or will show placeholder data. The vision system and UI will operate normally, but full functionality requires the appropriate hardware attachments.</p>
          <p>If you have compatible hardware, you can connect it and the system should automatically detect and utilize it.</p>
      </section>

      <section>
          <h2>Table of Contents</h2>
          <ul>
              <li><a href="#overview" class="link">Overview</a></li>
              <li><a href="#features" class="link">Features</a></li>
              <li><a href="#project-structure" class="link">Project Structure</a></li>
              <li><a href="#installation-setup" class="link">Installation & Setup</a></li>
              <li><a href="#running-the-application" class="link">Running the Application</a></li>
              <li><a href="#live-preview" class="link">Live Preview</a></li>
              <li><a href="#development-vs-release" class="link">Development vs Release</a></li>
              <li><a href="#future-work" class="link">Future Work</a></li>
              <li><a href="#license" class="link">License</a></li>
          </ul>
      </section>

      <section id="overview">
          <h2>Overview</h2>
          <p>roboto is designed as an extensible platform for robotics experimentation and development. It integrates hardware control (Arduino, Duet3D), computer vision (YOLO, segmentation, pose estimation), sensor fusion (IMU, Lidar, optical, current), and a responsive web interface built with Svelte.</p>
          <p>The framework emphasizes modularity, allowing users to mix and match components based on their hardware setup and experimentation goals.</p>
      </section>

      <section id="features">
          <h2>Features</h2>
          
          <h3>Robotics / Motion Control</h3>
          <ul>
              <li>Multi-Axis Motion Control</li>
              <li>Motion Planner</li>
              <li>Raster Scan & Heatmap Scan</li>
              <li>Collision Guard</li>
              <li>Autofocus</li>
              <li>Vision Follow & Spot Follow</li>
              <li>Duet3D Integration</li>
              <li>Arduino Firmware Support</li>
          </ul>

          <h3>Vision System</h3>
          <ul>
              <li>Multi-Node Vision (PC, Jetson, Mobile Devices)</li>
              <li>YOLO / Segmenter / Pose Estimation (model-agnostic pipeline)</li>
              <li>Vision Recorder & Replay</li>
              <li>Annotation Tools (Bounding Boxes, Masks, Keypoints)</li>
              <li>Dataset Export (YOLO, COCO, Pose, Segmentation)</li>
              <li>Model Switcher</li>
              <li>Performance Overlay (FPS, Latency)</li>
              <li>Health Monitoring (healthy/degraded/offline)</li>
              <li>Auto-Reconnect for Remote Nodes</li>
          </ul>

          <h3>Sensor Integration</h3>
          <ul>
              <li>IMU (Inertial Measurement Unit)</li>
              <li>Lidar</li>
              <li>Optical Sensors</li>
              <li>Current Sensors</li>
              <li>Mobile Device Sensors</li>
          </ul>

          <h3>Web UI (Svelte)</h3>
          <ul>
              <li>Vision Dashboard (Live Stream, Overlays)</li>
              <li>Motion Control Panel</li>
              <li>Sensor Live Graphs</li>
              <li>3D Heatmap View</li>
              <li>Replay Player</li>
              <li>Annotation Tools</li>
              <li>Dataset Export Panel</li>
              <li>Model Switcher</li>
              <li>Backend Selector</li>
              <li>Node Selector</li>
              <li>System Status Overview</li>
          </ul>

          <h3>Server</h3>
          <ul>
              <li>REST API (<code>server/api_vision.py</code>)</li>
              <li>Vision Streaming Server (<code>server/video_stream.py</code>)</li>
              <li>WebSocket Server (<code>server/websocket_server.py</code>)</li>
              <li>Mobile WebSocket (<code>server/mobile_ws.py</code>)</li>
          </ul>

          <h3>Mobile Client</h3>
          <ul>
              <li>Vision & Sensor Streaming Client</li>
              <li>Auto-Reconnect Capability</li>
              <li>Simple HTML/JS Interface</li>
          </ul>
      </section>

      <section id="project-structure">
          <h2>Project Structure</h2>
          <pre><code>roboto/
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
  ├── recordings/           # Session recordings
  ├── roboto-release/       # Release bundle (execution/deployment)
  ├── server/               # Server components (API, streaming, websockets)
  ├── src/                  # Svelte frontend source
  │   ├── App.svelte
  │   ├── main.js
  │   ├── components/       # UI components
  │   ├── pages/            # Page components
  │   └── store/            # State management
  ├── templates/            # Movement templates
  ├── .vscode/              # VS Code settings
  ├── index.html            # Frontend entry point
  ├── jsconfig.json 
  ├── package.json
  ├── package-lock.json
  ├── setup.py
  ├── svelte.config.js 
  └── vite.config.js
          </code></pre>
      </section>

      <section id="installation-setup">
          <h2>Installation & Setup</h2>
          
          <h3>Prerequisites</h3>
          <ul>
              <li>Python 3.11+</li>
              <li>Node.js 20 LTS</li>
              <li>npm (comes with Node.js)</li>
              <li>Optional but recommended for full functionality: Arduino or similar hardware</li>
          </ul>

          <h3>Backend Setup</h3>
          <p>Clone the repository:</p>
          <pre><code>git clone &lt;repository-url&gt;
  cd roboto</code></pre>
          <p>Create and activate a Python virtual environment:</p>
          <pre><code>python -m venv .venv
  # Windows
  .\.venv\Scripts\Activate.ps1
  # Linux/macOS
  source .venv/bin/activate</code></pre>
          <p>Install backend dependencies:</p>
          <pre><code>pip install --upgrade pip
  pip install fastapi "uvicorn[standard]" opencv-python requests typer pyserial numpy</code></pre>
          <p>(Optional) Install the CLI tool:</p>
          <pre><code>pip install -e .</code></pre>

          <h3>Frontend Setup</h3>
          <p>Install Node.js dependencies:</p>
          <pre><code>npm install</code></pre>
          <p>The frontend is ready for development or building.</p>

          <h3>Mobile Client</h3>
          <p>No installation required—simply open <code>mobile/index.html</code> in a browser and configure the WebSocket connection to your backend.</p>
      </section>

      <section id="running-the-application">
          <h2>Running the Application</h2>

          <h3>Backend Only</h3>
          <p>To start the backend server:</p>
          <pre><code># Using virtual environment (if activated)
  python -m uvicorn server.video_stream:app --host 0.0.0.0 --port 8022 --reload
  # Or using the CLI:
  roboto start-backend</code></pre>
          <p>The backend will be available at <code>http://localhost:8022</code>.</p>

          <h3>Frontend Only (Development Mode)</h3>
          <p>To start the frontend development server:</p>
          <pre><code>npm run dev -- --host 0.0.0.0 --port 8033</code></pre>
          <p>Then open <code>http://localhost:8033</code> in your browser.</p>

          <h3>Full Stack (Development)</h3>
          <ol>
              <li>Start the backend in one terminal:
                  <pre><code>.\.venv\Scripts\Activate.ps1  # Windows
  # or
  source .venv/bin/activate     # Linux/macOS
  python -m uvicorn server.video_stream:app --reload --port 8022</code></pre>
              </li>
              <li>Start the frontend in another terminal:
                  <pre><code>npm run dev -- --port 8033</code></pre>
              </li>
          </ol>
          <p>Access the UI at <code>http://localhost:8033</code> and the backend API at <code>http://localhost:8022</code>.</p>

          <h3>Production Build</h3>
          <p>To create a production build of the frontend:</p>
          <pre><code>npm run build</code></pre>
          <p>This generates optimized static files in the <code>build/</code> directory.</p>
          <p>To serve the production build:</p>
          <pre><code># Simple static server (for testing)
  npx serve build
  # Or copy to roboto-release/ui/build/ for Docker/deployment
  xcopy /E /I /Y build\* roboto-release\ui\build\  # Windows
  # or
  cp -r build/* roboto-release/ui/build/         # Linux/macOS</code></pre>

          <h3>Docker Deployment</h3>
          <p>The <code>roboto-release/</code> directory contains Docker files for easy deployment:</p>
          <pre><code>cd roboto-release
  docker compose up --build</code></pre>
          <p>This will start:</p>
          <ul>
              <li>Backend on port <code>8022</code></li>
              <li>UI on port <code>8033</code></li>
          </ul>
          <p>Note: The UI container expects the frontend build to be present in <code>roboto-release/ui/build/</code>. Run <code>npm run build</code> and copy the output before building Docker images if you've made frontend changes.</p>
      </section>

      <section id="development-vs-release">
          <h2>Development vs Release</h2>
          <ul>
              <li><code>roboto/</code> – Development directory containing full source code (<code>src/</code>, <code>templates/</code>, etc.)</li>
              <li><code>roboto-release/</code> – Release bundle containing only what's needed to run the application:
                  <ul>
                      <li>Pre-built frontend (<code>ui/build/</code>)</li>
                      <li>Backend code</li>
                      <li>Mobile client</li>
                      <li>CLI and launcher tools</li>
                      <li>Docker configuration</li>
                      <li>Startup scripts</li>
                  </ul>
              </li>
          </ul>
          <p>This separation ensures that the release is clean and focused on execution, while the development directory retains all tools for extension and modification.</p>
      </section>

      <section id="future-work">
          <h2>Future Work</h2>
          <p>The author plans to continue development, with potential future enhancements including:</p>
          <ul>
              <li>QR code generator for easy mobile client setup</li>
              <li>Live backend streaming logs in the launcher</li>
              <li>Node health monitoring dashboard</li>
              <li>Mobile client status indicators</li>
              <li>Additional launcher buttons for recorder/replay, model switching, dataset export</li>
              <li>Improved launcher design (icons, colors)</li>
          </ul>
          <p>Contributions, feedback, and ideas are welcome!</p>
      </section>

      <section id="license">
          <h2>License</h2>
          <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
      </section>

      <section>
          <h2>Acknowledgments</h2>
          <p>Thanks to the open-source community for the various libraries and tools that make this project possible.</p>
      </section>
  </article>
  {/if}

  <!-- German Content -->
  {#if language === 'de'}
    <h2>Willkommen bei Roboto - Modulares Robotics & Vision Framework</h2>
    <p>
      <strong>roboto</strong> ist ein modulares Robotics-Framework mit Multi-Achsen-Motion-Control, Multi-Node-Vision-System, 
      Sensor-Integration, KI-gestützten Tools, Dataset-Export, Replay-System und moderner Web-UI (Svelte).
    </p>
    <p>
      Live-Vorschau: <a href="https://roboto.maazi.de" target="_blank" class="link">roboto.maazi.de</a> 
      (Hinweis: Ohne Hardware Platzhalterdaten.)
    </p>

    <h3>Quickstart</h3>
    <ol>
      {#each quickStepsDE as step}
        <li>{step}</li>
      {/each}
    </ol>

    <h3>UI Tabs Übersicht</h3>
    <ul>
      <li><b>Dashboard</b>: Motorsteuerung + Live-Sensorik + Graph.</li>
      <li><b>Vision</b>: Kamera, Overlays, Annotation, Recorder/Replay.</li>
      <li><b>Raster</b>: Raster-Scan + Heatmap (2D/3D).</li>
      <li><b>Guide</b>: Diese Hilfeseite.</li>
    </ul>

    <h3>System Status (wichtig)</h3>
    <p>
      Linker Bereich zeigt live Backend, Frontend, WebSocket-Status. 
      Activity-Log jede Aktion + Backend-Antwort.
    </p>
    <ul>
      <li><b>Backend OFFLINE</b>: Server läuft nicht / Port 8022.</li>
      <li><b>WS DISCONNECTED</b>: WebSocket gestört; Echtzeit eingeschränkt.</li>
      <li><b>Letzter Backend-Fehler</b>: Letzte API-Meldung.</li>
    </ul>

    <h3>Hardware-Strategie</h3>
    <div class="cards">
      {#each hardwareModesDE as mode}
        <article>
          <h4>{mode.title}</h4>
          <p>{mode.text}</p>
        </article>
      {/each}
    </div>

    <h3>Setup & Starten</h3>
    <p>Siehe <a href="https://github.com/maazi/roboto" target="_blank" class="link">GitHub README</a> für Installation, 
    Backend/Frontend-Befehle, Docker etc.</p>

    <h3>Funktions-Highlights</h3>
    <ul>
      <li>Multi-Node Vision (YOLO, Segmentierung, Pose)</li>
      <li>Motion Control (Multi-Achse, Autofocus, Follow)</li>
      <li>Sensoren (IMU, Lidar etc.)</li>
      <li>Annotation & Dataset-Export</li>
      <li>Mobile Client</li>
    </ul>

    <article>
      <header>
          <h1>roboto - Modulares Robotics & Vision Framework</h1>
          <p>roboto ist ein modulares Robotics-Framework mit Multi-Achsen-Motion-Control, Multi-Node-Vision-System, Sensor-Integration, KI-gestützten Tools, Dataset-Export, Replay-System und einer modernen Web-UI.</p>
          <p>Preview: <a href="https://roboto.maazi.de" target="_self" rel="noopener" class="link">roboto.maazi.de</a></p>
      </header>

      <section>
          <h2>Live-Vorschau</h2>
          <p>Eine Live-Vorschau der Anwendung ist auf dem VPS des Autors verfügbar unter <a href="https://roboto.maazi.de" target="_self" rel="noopener" class="link">roboto.maazi.de</a>. Beachte jedoch bitte, dass ohne angeschlossene Hardware (Arduino, Sensoren usw.) bestimmte Funktionen wie Bewegungskontrolle und Sensormessungen nicht funktionieren oder Platzhalterdaten anzeigen werden. Das Vision-System und die UI funktionieren normal, aber volle Funktionalität erfordert die entsprechende Hardware-Anbindung.</p>
          <p>Wenn du kompatible Hardware hast, kannst du sie anschließen und das System sollte sie automatisch erkennen und nutzen.</p>
      </section>

      <section>
          <h2>Inhaltsverzeichnis</h2>
          <ul>
              <li><a href="#übersicht" class="link">Übersicht</a></li>
              <li><a href="#funktionen" class="link">Funktionen</a></li>
              <li><a href="#projektstruktur" class="link">Projektstruktur</a></li>
              <li><a href="#installation-setup" class="link">Installation & Setup</a></li>
              <li><a href="#anwendung-ausführen" class="link">Anwendung ausführen</a></li>
              <li><a href="#live-vorschau" class="link">Live-Vorschau</a></li>
              <li><a href="#entwicklung-vs-release" class="link">Entwicklung vs Release</a></li>
              <li><a href="#zukünftige-arbeit" class="link">Zukünftige Arbeit</a></li>
              <li><a href="#lizenz" class="link">Lizenz</a></li>
          </ul>
      </section>

      <section id="übersicht">
          <h2>Übersicht</h2>
          <p>roboto ist als erweiterbare Plattform für Robotik-Experimente und -Entwicklung konzipiert. Es integriert Hardware-Steuerung (Arduino, Duet3D), Computer-Vision (YOLO, Segmentierung, Pose-Schätzung), Sensor-Fusion (IMU, Lidar, optisch, Strom) und eine responsive Web-UI, die mit Svelte erstellt wurde.</p>
          <p>Der Framework betont Modularität, sodass Benutzer Komponenten basierend auf ihrer Hardware-Ausstattung und Experimentierziele kombinieren und austauschen können.</p>
      </section>

      <section id="funktionen">
          <h2>Funktionen</h2>
          
          <h3>Robotik / Bewegungskontrolle</h3>
          <ul>
              <li>Multi-Achsen-Bewegungskontrolle</li>
              <li>Bewegungsplaner</li>
              <li>Raster-Scan & Wärmebild-Scan</li>
              <li>Kollisionsschutz</li>
              <li>Autofokus</li>
              <li>Vision Follow & Spot Follow</li>
              <li>Duet3D-Integration</li>
              <li>Arduino-Firmware-Unterstützung</li>
          </ul>

          <h3>Vision-System</h3>
          <ul>
              <li>Multi-Node-Vision (PC, Jetson, Mobile Geräte)</li>
              <li>YOLO / Segmenter / Pose-Schätzung (modellunabhängige Pipeline)</li>
              <li>Vision-Recorder & Replay</li>
              <li>Annotation-Werkzeuge (Umrahmende Boxen, Masken, Schlüsselpunkte)</li>
              <li>Dataset-Export (YOLO, COCO, Pose, Segmentierung)</li>
              <li>Modell-Wechsler</li>
              <li>Leistungsüberlagerung (FPS, Latenz)</li>
              <li>Gesundheitsüberwachung (gesund/degradiert/offline)</li>
              <li>Auto-Reconnect für entfernte Nodes</li>
          </ul>

          <h3>Sensor-Integration</h3>
          <ul>
              <li>IMU (Trägheitsmessunit)</li>
              <li>Lidar</li>
              <li>Optische Sensoren</li>
              <li>Stromsensoren</li>
              <li>Mobile Gerätesensoren</li>
          </ul>

          <h3>Web-UI (Svelte)</h3>
          <ul>
              <li>Vision-Dashboard (Live-Stream, Überlagerungen)</li>
              <li>Bewegungssteuerungs-Panel</li>
              <li>Sensor-Live-Graphen</li>
              <li>3D-Wärmebild-Ansicht</li>
              <li>Replay-Spieler</li>
              <li>Annotation-Werkzeuge</li>
              <li>Dataset-Export-Panel</li>
              <li>Modell-Wechsler</li>
              <li>Backend-Wechsler</li>
              <li>Node-Wechsler</li>
              <li>Systemstatus-Übersicht</li>
          </ul>

          <h3>Server</h3>
          <ul>
              <li>REST-API (<code>server/api_vision.py</code>)</li>
              <li>Vision-Streaming-Server (<code>server/video_stream.py</code>)</li>
              <li>WebSocket-Server (<code>server/websocket_server.py</code>)</li>
              <li>Mobile WebSocket (<code>server/mobile_ws.py</code>)</li>
          </ul>

          <h3>Mobile Client</h3>
          <ul>
              <li>Vision & Sensor-Streaming-Client</li>
              <li>Auto-Reconnect-Fähigkeit</li>
              <li>Einfache HTML/JS-Schnittstelle</li>
          </ul>
      </section>

      <section id="projektstruktur">
          <h2>Projektstruktur</h2>
          <pre><code>roboto/
  ├── ARCHIVE/              # Historische Entwicklungsdokumente
  ├── build/                # Frontend-Build-Ausgabe
  ├── cli/                  # Befehlszeilenschnittstelle (Typer-basiert)
  ├── config/               # Konfigurationsdateien (Vision)
  ├── core/                 # Kernfunktionalität
  │   ├── combined/         # Kombinierte Module (Bewegung+Vision+KI)
  │   ├── config/           # Kernkonfiguration
  │   ├── control/          # Bewegungssteuerung
  │   ├── hardware/         # Hardware-Schnittstellen (Arduino, Duet3D)
  │   ├── motors/           # Motorcontroller
  │   ├── sensors/          # Sensortreiber
  │   └── vision/           # Vision-Verarbeitungspipeline
  ├── launcher/             # Tkinter-basierter Desktop-Launcher
  ├── mobile/               # Mobile Client-Dateien
  ├── recordings/           # Sitzungsaufzeichnungen
  ├── roboto-release/       # Release-Bundle (Ausführung/Deployment)
  ├── server/               # Serverkomponenten (API, Streaming, WebSockets)
  ├── src/                  # Svelte-Frontend-Quellcode
  │   ├── App.svelte
  │   ├── main.js
  │   ├── components/       # UI-Komponenten
  │   ├── pages/            # Seitenkomponenten
  │   └── store/            # Zustandsverwaltung
  ├── templates/            # Bewegungsvorlagen
  ├── .vscode/              # VS Code-Einstellungen
  ├── index.html            # Frontend-Einstiegspunkt
  ├── jsconfig.json 
  ├── package.json
  ├── package-lock.json
  ├── setup.py
  ├── svelte.config.js 
  └── vite.config.js
          </code></pre>
      </section>

      <section id="installation-setup">
          <h2>Installation & Setup</h2>
          
          <h3>Voraussetzungen</h3>
          <ul>
              <li>Python 3.11+</li>
              <li>Node.js 20 LTS</li>
              <li>npm (kommt mit Node.js)</li>
              <li>Optional aber empfohlen für volle Funktionalität: Arduino oder ähnliche Hardware</li>
          </ul>

          <h3>Backend-Setup</h3>
          <p>Repository klonen:</p>
          <pre><code>git clone &lt;repository-url&gt;
  cd roboto</code></pre>
          <p>Python-virtuelle Umgebung erstellen und aktivieren:</p>
          <pre><code>python -m venv .venv
  # Windows
  .\.venv\Scripts\Activate.ps1
  # Linux/macOS
  source .venv/bin/activate</code></pre>
          <p>Backend-Abhängigkeiten installieren:</p>
          <pre><code>pip install --upgrade pip
  pip install fastapi "uvicorn[standard]" opencv-python requests typer pyserial numpy</code></pre>
          <p>(Optional) CLI-Tool installieren:</p>
          <pre><code>pip install -e .</code></pre>

          <h3>Frontend-Setup</h3>
          <p>Node.js-Abhängigkeiten installieren:</p>
          <pre><code>npm install</code></pre>
          <p>Das Frontend ist bereit für Entwicklung oder Build.</p>

          <h3>Mobile Client</h3>
          <p>Keine Installation erforderlich – öffne einfach <code>mobile/index.html</code> im Browser und konfiguriere die WebSocket-Verbindung zu deinem Backend.</p>
      </section>

      <section id="anwendung-ausführen">
          <h2>Anwendung ausführen</h2>

          <h3>Nur Backend</h3>
          <p>Um den Backend-Server zu starten:</p>
          <pre><code># Mit virtueller Umgebung (falls aktiviert)
  python -m uvicorn server.video_stream:app --host 0.0.0.0 --port 8022 --reload
  # Oder über die CLI:
  roboto start-backend</code></pre>
          <p>Der Backend ist unter <code>http://localhost:8022</code> verfügbar.</p>

          <h3>Nur Frontend (Entwicklungsmodus)</h3>
          <p>Um den Frontend-Entwicklungsserver zu starten:</p>
          <pre><code>npm run dev -- --host 0.0.0.0 --port 8033</code></pre>
          <p>Dann öffne <code>http://localhost:8033</code> in deinem Browser.</p>

          <h3>Voller Stack (Entwicklung)</h3>
          <ol>
              <li>Backend in einem Terminal starten:
                  <pre><code>.\.venv\Scripts\Activate.ps1  # Windows
  # oder
  source .venv/bin/activate     # Linux/macOS
  python -m uvicorn server.video_stream:app --reload --port 8022</code></pre>
              </li>
              <li>Frontend in einem anderen Terminal starten:
                  <pre><code>npm run dev -- --port 8033</code></pre>
              </li>
          </ol>
          <p>UI unter <code>http://localhost:8033</code> und Backend-API unter <code>http://localhost:8022</code> aufrufen.</p>

          <h3>Produktions-Build</h3>
          <p>Um einen Produktions-Build des Frontends zu erstellen:</p>
          <pre><code>npm run build</code></pre>
          <p>Dies erzeugt optimierte statische Dateien im <code>build/</code> Verzeichnis.</p>
          <p>Um den Produktions-Build bereitzustellen:</p>
          <pre><code># Einfacher statischer Server (zum Testen)
  npx serve build
  # Oder nach roboto-release/ui/build/ für Docker/Deployment kopieren
  xcopy /E /I /Y build\* roboto-release\ui\build\  # Windows
  # oder
  cp -r build/* roboto-release/ui/build/         # Linux/macOS</code></pre>

          <h3>Docker-Deployment</h3>
          <p>Das <code>roboto-release/</code> Verzeichnis enthält Docker-Dateien für eine einfache Bereitstellung:</p>
          <pre><code>cd roboto-release
  docker compose up --build</code></pre>
          <p>Dies startet:</p>
          <ul>
              <li>Backend auf Port <code>8022</code></li>
              <li>UI auf Port <code>8033</code></li>
          </ul>
          <p>Hinweis: Der UI-Container erwartet den Frontend-Build im Verzeichnis <code>roboto-release/ui/build/</code>. Führe <code>npm run build</code> aus und kopiere die Ausgabe, bevor du Docker-Images erstellst, wenn du Frontend-Änderungen vorgenommen hast.</p>
      </section>

      <section id="entwicklung-vs-release">
          <h2>Entwicklung vs Release</h2>
          <ul>
              <li><code>roboto/</code> – Entwicklungsverzeichnis mit vollem Quellcode (<code>src/</code>, <code>templates/</code>, etc.)</li>
              <li><code>roboto-release/</code> – Release-Bundle mit nur dem Nötigen zum Ausführen der Anwendung:
                  <ul>
                      <li>Vorgebautes Frontend (<code>ui/build/</code>)</li>
                      <li>Backend-Code</li>
                      <li>Mobile Client</li>
                      <li>CLI und Launcher-Tools</li>
                      <li>Docker-Konfiguration</li>
                      <li>Startskripte</li>
                  </ul>
              </li>
          </ul>
          <p>Diese Trennung stellt sicher, dass das Release sauber und auf Ausführung fokussiert ist, während das Entwicklungsverzeichnis alle Werkzeuge für Erweiterung und Modifikation behält.</p>
      </section>

      <section id="zukünftige-arbeit">
          <h2>Zukünftige Arbeit</h2>
          <p>Der Autor plant die Weiterentwicklung mit potenziellen zukünftigen Verbesserungen einschließlich:</p>
          <ul>
              <li>QR-Code-Generator für einfache Mobile-Client-Einrichtung</li>
              <li>Live-Backend-Streaming-Protokolle im Launcher</li>
              <li>Node-Gesundheitsüberwachungs-Dashboard</li>
              <li>Mobile-Client-Statusanzeigen</li>
              <li>Zusätzliche Launcher-Buttons für Recorder/Replay, Modellwechsel, Dataset-Export</li>
              <li>Verbessertes Launcher-Design (Symbole, Farben)</li>
          </ul>
          <p>Beiträge, Feedback und Ideen sind willkommen!</p>
      </section>

      <section id="lizenz">
          <h2>Lizenz</h2>
          <p>Dieses Projekt steht unter der MIT-Lizenz – siehe die LICENSE-Datei für Details.</p>
      </section>

      <section>
          <h2>Danksagung</h2>
          <p>Dank der Open-Source-Community für die verschiedenen Bibliotheken und Tools, die dieses Projekt möglich machen.</p>
      </section>
  </article>

  {/if}
</section>

<style>
  .guide {
    max-width: 1000px;
    display: grid;
    gap: 0.8rem;
    line-height: 1.45;
    padding: 1rem;
  }

  .lang-toggle {
    text-align: right;
  }

  .lang-toggle button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background: white;
    border-radius: 4px;
    cursor: pointer;
  }

  .lang-toggle button:hover {
    background: #f0f0f0;
  }

  h2, h3, h4 {
    margin: 0 0 0.5rem 0;
  }

  p, ul, ol {
    margin: 0 0 0.5rem 0;
  }

  .link {
    color: #000000;
    text-decoration: none;
  }

  .link:visited {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link:active {
    text-decoration: none;
  }

  ol {
    padding-left: 1.5rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 0.7rem;
  }

  article {
    border: 1px solid #a7a6a6;
    border-radius: 3px;
    padding: 0.7rem;
    background: #dfdfdf;
  }

  ul {
    padding-left: 1.2rem;
  }

  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>