<script>
    import CameraRasterScan from "../components/CameraRasterScan.svelte";
    import HeatmapView from "../components/HeatmapView.svelte";
    import Heatmap3D from "../components/Heatmap3D.svelte";
</script>

<div class="grid">
    <CameraRasterScan />
    <HeatmapView />
    <Heatmap3D />
</div>

<style>
.grid {
    display: grid;
    gap: 1rem;
}
</style>
