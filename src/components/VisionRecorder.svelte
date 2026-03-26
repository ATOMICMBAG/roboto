<script>
    import { apiRequest } from "../store/activity.js";

    async function start() {
        await apiRequest("record_start", "/api/vision/record/start", { method: "POST" });
    }

    async function stop() {
        await apiRequest("record_stop", "/api/vision/record/stop", { method: "POST" });
    }
</script>

<div class="recorder">
    <button on:click={start}>Start Recording</button>
    <button on:click={stop}>Stop Recording</button>
</div>

<style>
.recorder {
    display: flex;
    gap: 1rem;
}
button {
    padding: 0.5rem 1rem;
}
</style>
