<script>
    import { annotations, addBox } from "../store/annotation.js";

    let canvas;
    let ctx;
    let drawing = false;
    let startX, startY;

    function onMouseDown(e) {
        drawing = true;
        const rect = canvas.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
    }

    function onMouseUp(e) {
        if (!drawing) return;
        drawing = false;

        const rect = canvas.getBoundingClientRect();
        const endX = e.clientX - rect.left;
        const endY = e.clientY - rect.top;

        const w = endX - startX;
        const h = endY - startY;

        addBox(startX, startY, w, h);
    }

    // WICHTIG: auch auf $annotations reagieren
    $: if (canvas && $annotations) {
        draw();
    }

    function draw() {
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        $annotations.forEach(a => {
            if (a.type === "box") {
                ctx.strokeStyle = "yellow";
                ctx.lineWidth = 2;
                ctx.strokeRect(a.box.x, a.box.y, a.box.w, a.box.h);
            }
            if (a.type === "mask") {
                drawMask(a.points);
            }
        });
    }

    function drawMask(points) {
        ctx.fillStyle = "rgba(0, 255, 255, 0.3)";
        ctx.strokeStyle = "cyan";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let p of points) {
            ctx.lineTo(p.x, p.y);
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
</script>

<canvas
    bind:this={canvas}
    width="1280"
    height="720"
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
/>

<style>
canvas {
    width: 100%;
    height: auto;
    cursor: crosshair;
}
</style>
