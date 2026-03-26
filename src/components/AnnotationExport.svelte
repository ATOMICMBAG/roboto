<script>
    import { exportYOLO } from "../store/export.js";

    function save() {
        const txt = exportYOLO(1280, 720);
        const blob = new Blob([txt], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "labels.txt";
        a.click();
    }
</script>

<button on:click={save}>Export YOLO Labels</button>
