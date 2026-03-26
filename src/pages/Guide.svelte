<script>
  const quickSteps = [
    "Backend starten (Launcher oder CLI)",
    "Frontend öffnen (http://localhost:8033)",
    "Im Bereich 'System Status' prüfen: Backend/Frontend/WS = ONLINE",
    "Im Tab 'Vision' Livebild und Overlay prüfen",
    "Bei Fehlern Activity-Log lesen (zeigt Aktion + Backend-Antwort)",
  ];

  const hardwareModes = [
    {
      title: "Nur PC/Laptop + Smartphone (empfohlen für Start)",
      text: "Nutzt Vision, Replay, Annotation, Export und Mobile-Controller ohne Spezialhardware.",
    },
    {
      title: "PC/Laptop + Arduino (z. B. UNO)",
      text: "Für einfache Motor-/Sensor-Experimente. Erst virtuell testen, dann echte I/O schrittweise aktivieren.",
    },
    {
      title: "PC/Laptop + Duet3D / 3D-Drucker-Controller",
      text: "Für Multi-Axis-Motion und Raster-Workflows. Sehr sinnvoll für dein Projektfokus.",
    },
  ];
</script>

<section class="guide">
  <h2>Roboto Control UI</h2>
  <p>
    Roboto Control verbindet Vision, Motion-Control und Sensorik in einer gemeinsamen Oberfläche.
    Die App kann sowohl als Analyse-Tool (Vision/Replay/Export) als auch als Steuerzentrale
    für Hardware (z. B. Motoren, Raster-Scan, Mobile Controller) genutzt werden.
  </p>

  <h3>Tabs im Überblick</h3>
  <ul>
    <li><b>Dashboard</b>: Motorsteuerung + Live-Sensorik + Graph.</li>
    <li><b>Vision</b>: Kamera, Overlays, Annotation, Recorder/Replay.</li>
    <li><b>Raster</b>: Raster-Scan + Heatmap (2D/3D).</li>
    <li><b>Guide</b>: Diese Hilfeseite.</li>
  </ul>

  <h3>System Status (wichtig)</h3>
  <p>
    Im linken Bereich zeigt die App live den Zustand von Backend, Frontend und WebSocket.
    Zusätzlich zeigt das Activity-Log jede Aktion und die Antwort vom Backend.
  </p>

  <h3>Quickstart (für Nutzer)</h3>
  <ol>
    {#each quickSteps as s}
      <li>{s}</li>
    {/each}
  </ol>

  <h3>Fehler lesen & verstehen</h3>
  <ul>
    <li><b>Backend OFFLINE</b>: Server läuft nicht oder Port 8022 nicht erreichbar.</li>
    <li><b>WS DISCONNECTED</b>: WebSocket-Verbindung gestört; Echtzeitfunktionen eingeschränkt.</li>
    <li><b>Letzter Backend-Fehler</b>: Letzte konkrete API-Fehlermeldung (Status/Exception).</li>
  </ul>

  <h3>Hardware-Strategie (praxisnah)</h3>
  <p>
    Nicht jeder Nutzer hat die gleiche Hardware. Deshalb empfiehlt sich ein modularer Einstieg:
  </p>

  <div class="cards">
    {#each hardwareModes as m}
      <article>
        <h4>{m.title}</h4>
        <p>{m.text}</p>
      </article>
    {/each}
  </div>

  <h3>Capability-Ansatz:</h3>
  <p>
    Funktionen dynamisch aktivieren, je nachdem welche Hardware erkannt
    wurde. So können Einsteiger mit PC+Handy starten und Fortgeschrittene Duet3D/Arduino nutzen,
    ohne dass die App überfordert.
  </p>
</section>

<style>
  .guide {
    max-width: 1000px;
    display: grid;
    gap: 0.8rem;
    line-height: 1.45;
  }

  h2,
  h3,
  h4 {
    margin: 0;
  }

  p,
  ul,
  ol {
    margin: 0;
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
</style>