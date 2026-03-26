<script>
    import { sendWS } from "../store/ws.js";
    let enabled = false;

    function toggle() {
        enabled = !enabled;
        sendWS({ type: enabled ? "motion_enable" : "motion_disable" });
    }
</script>

<div class="panel">
    <h2>Mobile Motion Controller</h2>

    <button on:click={toggle}>
        {enabled ? "Disable" : "Enable"}
    </button>

    <p>Use your phone as a controller.</p>
</div>

<style>
.panel {
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 3px;
    background: #222;
    color: #eee;
}
button {
    padding: 0.5rem 1rem;
}
</style>
