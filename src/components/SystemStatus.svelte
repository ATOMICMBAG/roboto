<script>
    import { activityLog, backendOnline, frontendOnline, lastBackendError } from "../store/activity.js";
    import { wsStatus } from "../store/ws.js";

    let expanded = false;

    function badgeClass(ok) {
        return ok ? "ok" : "bad";
    }
</script>

<div class="panel">
    <div class="header">
        <h3>System Status</h3>
        <button on:click={() => (expanded = !expanded)}>{expanded ? "−" : "+"}</button>
    </div>

    {#if $lastBackendError}
        <div class="error">Letzter Vision Backend Fehler: {$lastBackendError}</div>
    {/if}

    {#if expanded}
        <div class="log">
                <div class="badges">
                    <span class="badge {badgeClass($backendOnline)}">Backend: {$backendOnline ? "ONLINE" : "OFFLINE"}</span>
                    <span class="badge {badgeClass($frontendOnline)}">Frontend: {$frontendOnline ? "ONLINE" : "OFFLINE"}</span>
                    <span class="badge {badgeClass($wsStatus === "connected")}">WS: {$wsStatus.toUpperCase()}</span>
                </div>
            {#if $activityLog.length === 0}
                <div class="item muted">Noch keine Aktivität.</div>
            {:else}
                {#each $activityLog as e}
                    <div class="item {e.status}">
                        <span class="time">[{e.ts}]</span>
                        <span class="src">{e.source}</span>
                        <span class="act">{e.action}</span>
                        {#if e.details}
                            <span class="details">— {e.details}</span>
                        {/if}
                    </div>
                {/each}
            {/if}
        </div>
    {/if}
</div>

<style>
.panel {
    padding: 0.75rem;
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    background: #e6e6e6;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

h3 {
    margin: 0;
    font-size: 0.95rem;
}

button {
    padding: 0.1rem 0.5rem;
    border-radius: 2px;
    border: 1px solid #c0c0c0;
    background: #e6e6e6;
    color: #000000;
}

.badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
}

.badge {
    border-radius: 4px;
    font-size: 0.72rem;
    padding: 0.2rem 0.55rem;
    border: 1px solid #b4b4b4;
}

.badge.ok {
    color: #3f684d;
}

.badge.bad {
    color: #7a4747;
}

.error {
    font-size: 0.75rem;
    color: #7a4747;
    margin-bottom: 0.5rem;
    word-break: break-word;
}

.log {
    max-height: 220px;
    overflow: auto;
    border-top: 1px solid #1d1d1d;
    padding-top: 0.5rem;
    display: grid;
    gap: 0.25rem;
}

.item {
    font-size: 0.74rem;
    line-height: 1.25;
}

.item.info {
    color: #425f83;
}

.item.pending {
    color: #856a14;
}

.item.success {
    color: #237e44;
}

.item.error {
    color: #8d2828;
}

.item .time {
    color: #4d4c4c;
    margin-right: 0.35rem;
}

.item .src {
    color: #1f4b7e;
    margin-right: 0.35rem;
}

.muted {
    color: #292929;
}
</style>