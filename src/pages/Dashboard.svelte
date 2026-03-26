<script>
    import { onMount } from "svelte";
    import { connectWS } from "../store/ws.js";

    import MotorControl from "../components/MotorControl.svelte";
    import SensorLive from "../components/SensorLive.svelte";
    import SensorGraph from "../components/SensorGraph.svelte";

    onMount(() => connectWS());
</script>

<div class="grid">
    <MotorControl />
    <SensorLive />
    <SensorGraph />
</div>

<style>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
</style>
