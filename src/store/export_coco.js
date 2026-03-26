import { get } from "svelte/store";
import { annotations } from "./annotation.js";

export function exportCOCO(imageWidth, imageHeight) {
  const anns = get(annotations);

  return {
    annotations: anns.map((a, idx) => {
      if (a.type === "box") {
        return {
          id: idx,
          category_id: 1,
          bbox: [a.box.x, a.box.y, a.box.w, a.box.h],
          area: a.box.w * a.box.h,
          iscrowd: 0,
        };
      }

      if (a.type === "mask") {
        return {
          id: idx,
          category_id: 1,
          segmentation: [a.points.flatMap((p) => [p.x, p.y])],
          area: 0,
          iscrowd: 0,
        };
      }

      if (a.type === "keypoints") {
        return {
          id: idx,
          category_id: 1,
          keypoints: a.points.flatMap((p) => [p.x, p.y, 2]),
          num_keypoints: a.points.length,
        };
      }
    }),
  };
}
