<script>
    import { onMount } from "svelte";
    import { apiRequest } from "../store/activity.js";

    let nodes = [];
    let refreshTimer;

    async function loadNodes() {
        const res = await apiRequest("load_nodes", "/api/vision/nodes");
        nodes = await res.json();
    }

    async function selectNode(id) {
        await apiRequest("select_node", "/api/vision/nodes/select", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ node_id: id })
        });
        loadNodes();
    }

    onMount(() => {
        loadNodes();
        refreshTimer = setInterval(loadNodes, 2000);
        return () => clearInterval(refreshTimer);
    });
</script>

<div class="nodes">
    {#each nodes as n}
        <div class="node" class:active={n.active}>
            <button
                class:selected={n.active}
                on:click={() => selectNode(n.id)}
            >
                {n.name}
                {n.remote ? " (Remote)" : ""}
            </button>
            <span class="status {n.status}">
                {n.status === "offline" ? "🔴 offline" :
                n.status === "degraded" ? "🟡 degraded" :
                "🟢 healthy"}
            </span>
        </div>
    {/each}
</div>

<style>
.nodes {
    display: flex;
    gap: 0.5rem;
}
button.selected {
    background: lime;
    color: black;
}
.status {
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 12px;
    margin-left: 8px;
}
.status.healthy {
    background: #2ecc71;
    color: black;
}
.status.degraded {
    background: #f1c40f;
    color: black;
}
.status.offline {
    background: #e74c3c;
    color: white;
}
</style>
