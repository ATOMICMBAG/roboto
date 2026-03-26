<script>
    import { apiRequest } from "../store/activity.js";

    let backend = "onnx";
    let profile = "desktop";   // <-- WICHTIG: Variable definieren!

    async function saveBackend() {
        await apiRequest("set_backend", "/api/vision/backend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ backend })
        });
    }

    async function saveProfile() {
        await apiRequest("set_profile", "/api/vision/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ profile })   // <-- jetzt korrekt
        });
    }
</script>

<div class="panel">
    <h3>Vision Backend</h3>
    <select bind:value={backend} on:change={saveBackend}>
        <option value="onnx">ONNX Runtime</option>
        <option value="tensorrt">TensorRT</option>
        <option value="openvino">OpenVINO</option>
        <option value="snpe">SNPE (Remote)</option>
    </select>

    <h3>Vision Profil</h3>
    <select bind:value={profile} on:change={saveProfile}>
        <option value="jetson">NVIDIA Jetson</option>
        <option value="intel">Intel CPU/iGPU</option>
        <option value="desktop">Desktop/Laptop</option>
        <option value="mobile">Mobile Vision Node</option>
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
