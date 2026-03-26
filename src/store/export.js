import { get } from "svelte/store";
import { annotations } from "./annotation.js";

export function exportYOLO(imageWidth, imageHeight) {
  const anns = get(annotations);

  return anns
    .filter((a) => a.type === "box")
    .map((a) => {
      const { x, y, w, h } = a.box;
      const cx = (x + w / 2) / imageWidth;
      const cy = (y + h / 2) / imageHeight;
      const nw = w / imageWidth;
      const nh = h / imageHeight;
      return `0 ${cx} ${cy} ${nw} ${nh}`;
    })
    .join("\n");
}
