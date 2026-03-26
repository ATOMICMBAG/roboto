import { writable } from "svelte/store";

export const heatmapData = writable(null);

export function handleHeatmapMessage(msg) {
  if (msg.type === "raster_done") {
    heatmapData.set(msg.map);
  }
}
