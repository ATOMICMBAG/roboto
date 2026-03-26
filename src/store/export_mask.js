import { get } from "svelte/store";
import { annotations } from "./annotation.js";

export function exportCOCOPolygons() {
  const anns = get(annotations);

  return anns
    .filter((a) => a.type === "mask")
    .map((a) => ({
      segmentation: [a.points.flatMap((p) => [p.x, p.y])],
      category_id: 1,
    }));
}

export function exportMaskPNG(width, height) {
  const anns = get(annotations);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "white";

  anns
    .filter((a) => a.type === "mask")
    .forEach((a) => {
      ctx.beginPath();
      ctx.moveTo(a.points[0].x, a.points[0].y);
      for (let p of a.points) ctx.lineTo(p.x, p.y);
      ctx.closePath();
      ctx.fill();
    });

  return canvas.toDataURL("image/png");
}
