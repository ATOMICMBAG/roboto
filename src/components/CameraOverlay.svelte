<script>
    import { yoloBoxes, segmentationMask, posePoints } from "../store/vision.js";

    let canvas;
    let boxes = [];
    let mask = null;
    let points = [];

    yoloBoxes.subscribe(v => boxes = v);
    segmentationMask.subscribe(v => mask = v);
    posePoints.subscribe(v => points = v);

    function draw() {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Bounding Boxes
        ctx.strokeStyle = "lime";
        ctx.lineWidth = 2;
        boxes.forEach(([x1, y1, x2, y2]) => {
            ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        });

        // Pose Keypoints
        ctx.fillStyle = "red";
        points.forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        // Segmentation Mask
        if (mask) {
            const img = ctx.createImageData(canvas.width, canvas.height);
            for (let i = 0; i < mask.length; i++) {
                const v = mask[i] * 255;
                img.data[i * 4 + 0] = v;
                img.data[i * 4 + 1] = 0;
                img.data[i * 4 + 2] = 0;
                img.data[i * 4 + 3] = 100; // Transparenz
            }
            ctx.putImageData(img, 0, 0);
        }
    }

    $: if (canvas) {
        draw();
    }
</script>

<canvas bind:this={canvas} width="640" height="480"></canvas>

<style>
canvas {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
}
</style>
