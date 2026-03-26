import { writable } from "svelte/store";
import { handleVisionMessage } from "./vision.js";
import { handleHeatmapMessage } from "./heatmap.js";
import { addActivity, backendOnline } from "./activity.js";

export const wsStatus = writable("disconnected");
export const sensorValue = writable(0);

let ws;
let queue = [];

export function connectWS() {
  if (
    ws &&
    (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)
  ) {
    return;
  }

  const proto = window.location.protocol === "https:" ? "wss" : "ws";
  const host = window.location.host;
  ws = new WebSocket(`${proto}://${host}/api/ws`);
  addActivity("frontend", "ws_connect", "pending", `${proto}://${host}/api/ws`);

  ws.onopen = () => {
    wsStatus.set("connected");
    backendOnline.set(true);
    addActivity("backend", "ws_connect", "success", "WebSocket verbunden");

    while (queue.length > 0 && ws.readyState === WebSocket.OPEN) {
      const payload = queue.shift();
      ws.send(payload);
      addActivity("frontend", "ws_send_queued", "info", payload);
    }
  };
  ws.onclose = () => {
    wsStatus.set("disconnected");
    backendOnline.set(false);
    addActivity("backend", "ws_close", "error", "WebSocket getrennt");
  };

  ws.onerror = () => {
    backendOnline.set(false);
    addActivity("backend", "ws_error", "error", "WebSocket-Fehler");
  };

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    handleVisionMessage(msg);
    handleHeatmapMessage(msg);
    addActivity("backend", "ws_message", "info", msg.type || "unknown");

    if (msg.type === "current") {
      sensorValue.set(msg.value);
    }
  };
}

export function sendWS(data) {
  const payload = JSON.stringify(data);

  if (!ws || ws.readyState === WebSocket.CLOSED) {
    connectWS();
  }

  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(payload);
    addActivity("frontend", "ws_send", "info", data.type || "unknown");
  } else {
    queue.push(payload);
    addActivity("frontend", "ws_queue", "pending", data.type || "unknown");
  }
}
