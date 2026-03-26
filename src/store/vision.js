import { writable } from "svelte/store";
import { fps, latency } from "./performance.js";
import { apiRequest } from "./activity.js";

export const spotX = writable(null);
export const spotY = writable(null);
export const focusValue = writable(0);
export const yoloBoxes = writable([]);
export const segmentationMask = writable(null);
export const posePoints = writable([]);

export const visionData = writable(null);
export const visionFrame = writable(null);
export const visionResults = writable(null);
export const visionModel = writable(null);

export function handleVisionMessage(msg) {
  if (msg.type === "spot") {
    spotX.set(msg.x);
    spotY.set(msg.y);
  }
  if (msg.type === "focus") {
    focusValue.set(msg.value);
  }
  if (msg.type === "yolo_boxes") {
    yoloBoxes.set(msg.boxes);
  }
  if (msg.type === "segmentation_mask") {
    segmentationMask.set(msg.mask);
  }
  if (msg.type === "pose_keypoints") {
    posePoints.set(msg.points);
  }
}

export async function updateVision() {
  try {
    const res = await apiRequest("vision_frame_poll", "/api/vision/frame");
    const data = await res.json();
    visionData.set(data);

    if (data.status === "no_frame" || data.status === "no_node") return;

    visionFrame.set(data.frame);
    visionResults.set(data.results);
    visionModel.set(data.model);

    fps.set(data.fps ?? 0);
    latency.set(data.latency ?? 0);
  } catch (e) {
    // Netzwerkfehler still behandeln, UI bleibt responsiv
  }
}
