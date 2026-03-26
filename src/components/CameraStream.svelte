<script>
    export let url = "/video";
</script>

<div class="panel">
    <h2>Camera</h2>
    <img src={url} alt="camera stream" />
</div>

<style>
.panel {
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 3px;
    background: #e7e7e7;
    color: #000000;
}
img {
    width: 100%;
    border-radius: 6px;
}
</style>
