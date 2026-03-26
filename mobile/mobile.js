let ws = null;
let reconnectDelay = 500; // ms
const nodeId = `mobile-${Math.random().toString(36).slice(2, 10)}`;

function sendIfOpen(payload) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ node_id: nodeId, ...payload }));
  }
}

function connect() {
  const host = window.location.hostname || "localhost";
  ws = new WebSocket(`ws://${host}:8022/api/mobile`);

  ws.onopen = () => {
    console.log("Mobile WS connected");
    reconnectDelay = 500; // Reset
  };

  ws.onclose = () => {
    console.log("Mobile WS disconnected, retrying...");
    setTimeout(connect, reconnectDelay);
    reconnectDelay = Math.min(reconnectDelay * 2, 5000); // exponential backoff
  };

  ws.onerror = () => {
    ws.close();
  };
}

connect();

// Gyro
window.addEventListener("deviceorientation", (e) => {
  sendIfOpen({
    type: "gyro",
    alpha: e.alpha,
    beta: e.beta,
    gamma: e.gamma,
  });
});

// Accelerometer
window.addEventListener("devicemotion", (e) => {
  sendIfOpen({
    type: "accel",
    x: e.acceleration?.x,
    y: e.acceleration?.y,
    z: e.acceleration?.z,
  });
});

// GPS
navigator.geolocation.watchPosition((pos) => {
  sendIfOpen({
    type: "gps",
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
    alt: pos.coords.altitude,
  });
});

// Kamera
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  const video = document.createElement("video");
  video.srcObject = stream;
  video.play();

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  setInterval(() => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    const frame = canvas.toDataURL("image/jpeg", 0.5);

    sendIfOpen({
      type: "frame",
      data: frame,
    });
  }, 100);
});

// Motion Controller: Neigung → Steuerung
window.addEventListener("deviceorientation", (e) => {
  sendIfOpen({
    type: "motion",
    pitch: e.beta, // -180 bis 180
    roll: e.gamma, // -90 bis 90
    yaw: e.alpha, // 0 bis 360
  });
});
