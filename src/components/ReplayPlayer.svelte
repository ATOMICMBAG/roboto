<script>
    import { onMount } from "svelte";
    import { visionFrame, visionResults, visionModel } from "../store/vision.js";
    import { apiRequest } from "../store/activity.js";

    let sessions = [];
    let selected = null;

    async function loadSessions() {
        const res = await apiRequest("list_recordings", "/api/vision/recordings");
        sessions = await res.json();
    }

    async function startReplay() {
        await apiRequest("replay_load", "/api/vision/replay/load", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session: selected })
        });

        playLoop();
    }

    async function playLoop() {
        const res = await apiRequest("replay_frame", "/api/vision/replay/frame");
        const data = await res.json();

        if (!data) return;

        visionFrame.set(data.frame);
        visionResults.set(data.results);
        visionModel.set(data.model);

        requestAnimationFrame(playLoop);
    }

    onMount(() => {
        loadSessions();
    });
</script>

<div>
    <select bind:value={selected}>
        {#each sessions as s}
            <option value={s}>{s}</option>
        {/each}
    </select>

    <button on:click={startReplay}>Replay starten</button>
</div>
