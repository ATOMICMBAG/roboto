<script>
    import { sendWS } from "../store/ws.js";
    let x0 = 0, x1 = 50, y0 = 0, y1 = 50, step = 1;

    function startScan() {
        sendWS({
            type: "raster_start",
            x_range: [x0, x1],
            y_range: [y0, y1],
            step
        });
    }
</script>

<div class="panel">
    <h2>Raster Scan</h2>

    <label for="x0">X Range</label>
    <input id="x0" type="number" bind:value={x0} />
    <input id="x1" type="number" bind:value={x1} />

    <label for="y0">Y Range</label>
    <input id="y0" type="number" bind:value={y0} />
    <input id="y1" type="number" bind:value={y1} />

    <label for="step">Step</label>
    <input id="step" type="number" bind:value={step} />

    <button on:click={startScan}>Start</button>
</div>
