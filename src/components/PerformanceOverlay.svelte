<script>
    import { fps, latency } from "../store/performance.js";
</script>

<div class="perf">
    <div>FPS: {$fps.toFixed(1)}</div>
    <div>Latency: {$latency.toFixed(1)} ms</div>
</div>

<style>
.perf {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.5);
    padding: 6px 10px;
    border-radius: 2px;
    color: white;
    font-size: 14px;
}
</style>
