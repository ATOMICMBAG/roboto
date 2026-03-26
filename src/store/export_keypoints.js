import { get } from "svelte/store";
import { annotations } from "./annotation.js";

export function exportCOCOKeypoints() {
  const anns = get(annotations);

  return anns
    .filter((a) => a.type === "keypoints")
    .map((a) => ({
      keypoints: a.points.flatMap((p) => [p.x, p.y, 2]),
      num_keypoints: a.points.length,
      category_id: 1,
    }));
}

export function exportYOLOPose(imageWidth, imageHeight) {
  const anns = get(annotations);

  return anns
    .filter((a) => a.type === "keypoints")
    .map((a) => {
      const kp = a.points
        .map((p) => [p.x / imageWidth, p.y / imageHeight, 1])
        .flat();

      return `0 ${kp.join(" ")}`;
    })
    .join("\n");
}
