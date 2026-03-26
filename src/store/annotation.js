import { writable } from "svelte/store";

export const annotations = writable([]); // [{type, box, mask, keypoints, class}]
export const selectedAnnotation = writable(null);

export function addBox(x, y, w, h, cls = "object") {
  annotations.update((a) => [
    ...a,
    {
      type: "box",
      box: { x, y, w, h },
      class: cls,
    },
  ]);
}

export function removeAnnotation(index) {
  annotations.update((a) => a.filter((_, i) => i !== index));
}

export function clearAnnotations() {
  annotations.set([]);
}

export function addMask(points, cls = "object") {
  annotations.update((a) => [
    ...a,
    {
      type: "mask",
      points, // [{x, y}, {x2, y2}, ...]
      class: cls,
    },
  ]);
}

export function addKeypointSet(points, cls = "person") {
  annotations.update((a) => [
    ...a,
    {
      type: "keypoints",
      points, // [{x, y, score}]
      class: cls,
    },
  ]);
}

export function updateKeypoint(annotationIndex, pointIndex, x, y) {
  annotations.update((a) => {
    a[annotationIndex].points[pointIndex].x = x;
    a[annotationIndex].points[pointIndex].y = y;
    return a;
  });
}
