<script>
    import { heatmapData } from "../store/heatmap.js";
    let canvas;
    let data = null;

    heatmapData.subscribe(v => {
        data = v;
        if (data) draw();
    });

    function draw() {
        const ctx = canvas.getContext("2d");
        const h = data.length;
        const w = data[0].length;

        canvas.width = w;
        canvas.height = h;

        const img = ctx.createImageData(w, h);

        // Farbskala: Blau → Rot
        function color(v) {
            const r = Math.min(255, v * 4);
            const g = 0;
            const b = 255 - r;
            return [r, g, b];
        }

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const v = data[y][x];
                const [r, g, b] = color(v);

                const idx = (y * w + x) * 4;
                img.data[idx] = r;
                img.data[idx + 1] = g;
                img.data[idx + 2] = b;
                img.data[idx + 3] = 255;
            }
        }

        ctx.putImageData(img, 0, 0);
    }
</script>

<div class="panel">
    <h2>Heatmap</h2>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
.panel {
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 3px;
    background: #e7e7e7;
    color: #000000;
}
div {
    width: 90%;
    height: 90%;
}
canvas {
    image-rendering: pixelated;
    width: 640px;
    height: 480px;
}
</style>
