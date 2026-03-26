<script>
    import { sensorValue } from "../store/ws.js";
    import { onMount } from "svelte";

    let value = 0;

    const unsubscribe = sensorValue.subscribe(v => value = v);

    onMount(() => {
        return () => unsubscribe();
    });
</script>

<div class="panel">
    <h2>Sensor Live</h2>
    <p>Current: {value.toFixed(2)}</p>
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
