<script>
    import { sensorValue } from "../store/ws.js";
    import { onMount } from "svelte";

    let canvas;
    let ctx;
    let data = [];

    onMount(() => {
        ctx = canvas.getContext("2d");

        sensorValue.subscribe(v => {
            data.push(v);
            if (data.length > 200) data.shift();
            draw();
        });
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#00ff88";
        ctx.beginPath();

        data.forEach((v, i) => {
            const x = (i / data.length) * canvas.width;
            const y = canvas.height - (v / 1023) * canvas.height;
            ctx.lineTo(x, y);
        });

        ctx.stroke();
    }
</script>

<div class="panel">
    <h2>Sensor Graph</h2>
    <canvas bind:this={canvas} width="300" height="150"></canvas>
</div>

<style>
.panel {
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 3px;
    background: #e7e7e7;
    color: #000000;
}
</style>
