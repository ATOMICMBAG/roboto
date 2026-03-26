<script>
    import { apiRequest } from "../store/activity.js";

    let model = "yolo";

    async function saveModel() {
        await apiRequest("set_model", "/api/vision/model", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ model })
        });
    }
</script>

<div class="panel">
    <h3>Vision Model</h3>

    <select bind:value={model} on:change={saveModel}>
        <option value="yolo">YOLO (Boxes)</option>
        <option value="segmenter">Segmenter (Masken)</option>
        <option value="pose">Pose (Keypoints)</option>
    </select>
</div>

<style>
.panel {
    padding: 0.75rem;
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    background: #e6e6e6;
    color: #181818;
}
select {
    padding: 0.5rem;
    background: #e4e4e4;
    color: #181818;
    border-radius: 2px;
}
</style>
