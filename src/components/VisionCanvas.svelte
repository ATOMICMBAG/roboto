<script>
    import { visionFrame, visionResults, visionModel } from "../store/vision.js";
    import PerformanceOverlay from "./PerformanceOverlay.svelte";
    import MaskAnnotation from "./MaskAnnotation.svelte";
    import AnnotationCanvas from "./AnnotationCanvas.svelte";
    import KeypointAnnotation from "./KeypointAnnotation.svelte";

    let frame;
    let results;
    let model;

    $: frame = $visionFrame;
    $: results = $visionResults;
    $: model = $visionModel;

    let canvas;
    let ctx;

    $: if (canvas && frame) {
        draw();
    }

    function draw() {
        const img = new Image();
        img.src = "data:image/jpeg;base64," + frame;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            if (!results) return;

            if (model === "yolo") drawBoxes(results);
            if (model === "segmenter") drawMask(results);
            if (model === "pose") drawKeypoints(results);
        };
    }

    function drawBoxes(res) {
        const { boxes, scores, classes } = res;

        ctx.strokeStyle = "lime";
        ctx.lineWidth = 2;

        for (let i = 0; i < boxes.length; i++) {
            const [x, y, w, h] = boxes[i];
            ctx.strokeRect(x, y, w, h);
        }
    }

    function drawMask(mask) {
        const h = mask.length;
        const w = mask[0].length;

        const imgData = ctx.createImageData(w, h);
        let idx = 0;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const v = mask[y][x] ? 255 : 0;
                imgData.data[idx++] = 0;     // R
                imgData.data[idx++] = 255;   // G
                imgData.data[idx++] = 0;     // B
                imgData.data[idx++] = v;     // A
            }
        }

        ctx.putImageData(imgData, 0, 0);
    }

    function drawKeypoints(kp) {
        ctx.fillStyle = "red";
        for (const [x, y, score] of kp) {
            if (score > 0.3) {
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
</script>

<div class="vision-container">
    <canvas bind:this={canvas}></canvas>
    <PerformanceOverlay />
    <MaskAnnotation />
    <AnnotationCanvas />
    <KeypointAnnotation />
</div>

<style>
.vision-container {
    position: relative;
}
canvas {
    width: 100%;
    height: auto;
}
</style>
