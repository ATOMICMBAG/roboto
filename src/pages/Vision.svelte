<script>
    import { onMount } from "svelte";

    import CameraStream from "../components/CameraStream.svelte";
    import CameraOverlay from "../components/CameraOverlay.svelte";
    import VisionCanvas from "../components/VisionCanvas.svelte";
    import { updateVision } from "../store/vision.js";

    let timer;

    onMount(() => {
        timer = setInterval(updateVision, 100); // 10 FPS
        return () => clearInterval(timer);
    });
</script>

<div class="vision-container">
    <CameraStream />
    <CameraOverlay />
    <VisionCanvas />
</div>

<style>
.vision-container {
    position: relative;
    width: 640px;
    height: 480px;
}
</style>
