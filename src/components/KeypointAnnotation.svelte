<script>
    import { annotations, addKeypointSet, updateKeypoint } from "../store/annotation.js";

    let canvas;
    let ctx;

    let currentPoints = [];
    let dragging = null; // {annIndex, pointIndex}

    const KEYPOINT_RADIUS = 6;

    function onClick(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        currentPoints.push({ x, y, score: 1.0 });

        if (currentPoints.length === 17) {
            addKeypointSet(currentPoints);
            currentPoints = [];
        }

        draw();
    }

    function onMouseDown(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if clicking on an existing keypoint
        $annotations.forEach((ann, annIndex) => {
            if (ann.type !== "keypoints") return;

            ann.points.forEach((p, pointIndex) => {
                const dx = p.x - x;
                const dy = p.y - y;
                if (dx*dx + dy*dy < KEYPOINT_RADIUS*KEYPOINT_RADIUS) {
                    dragging = { annIndex, pointIndex };
                }
            });
        });
    }

    function onMouseMove(e) {
        if (!dragging) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        updateKeypoint(dragging.annIndex, dragging.pointIndex, x, y);
        draw();
    }

    function onMouseUp() {
        dragging = null;
    }

    $: if (canvas && $annotations) draw();

    function draw() {
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw existing keypoint sets
        $annotations.forEach(a => {
            if (a.type === "keypoints") {
                drawSkeleton(a.points);
            }
        });

        // Draw current points (before full set)
        currentPoints.forEach(p => {
            drawPoint(p.x, p.y);
        });
    }

    function drawPoint(x, y) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, KEYPOINT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
    }

    // COCO skeleton connections
    const SKELETON = [
        [5, 7], [7, 9],   // left arm
        [6, 8], [8, 10],  // right arm
        [11, 13], [13, 15], // left leg
        [12, 14], [14, 16], // right leg
        [5, 6], [11, 12], // shoulders, hips
        [5, 11], [6, 12]  // torso
    ];

    function drawSkeleton(points) {
        ctx.strokeStyle = "lime";
        ctx.lineWidth = 2;

        SKELETON.forEach(([a, b]) => {
            const p1 = points[a];
            const p2 = points[b];
            if (!p1 || !p2) return;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        });

        points.forEach(p => drawPoint(p.x, p.y));
    }
</script>

<canvas
    bind:this={canvas}
    width="1280"
    height="720"
    on:click={onClick}
    on:mousedown={onMouseDown}
    on:mousemove={onMouseMove}
    on:mouseup={onMouseUp}
/>

<style>
canvas {
    position: absolute;
    top: 0;
    left: 0;
    cursor: crosshair;
}
</style>
