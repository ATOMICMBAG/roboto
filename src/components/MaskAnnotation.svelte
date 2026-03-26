<script>
    import { addMask } from "../store/annotation.js";

    let canvas;
    let ctx;
    let points = [];
    let drawing = false;

    function onClick(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        points.push({ x, y });
        draw();
    }

    function onDoubleClick() {
        if (points.length > 2) {
            addMask(points);
        }
        points = [];
        draw();
    }

    function draw() {
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (points.length > 1) {
            ctx.strokeStyle = "cyan";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let p of points) {
                ctx.lineTo(p.x, p.y);
            }

            ctx.stroke();
        }

        for (let p of points) {
            ctx.fillStyle = "cyan";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    }
</script>

<canvas
    bind:this={canvas}
    width="1280"
    height="720"
    on:click={onClick}
    on:dblclick={onDoubleClick}
/>

<style>
canvas {
    position: absolute;
    top: 0;
    left: 0;
    cursor: crosshair;
}
</style>
