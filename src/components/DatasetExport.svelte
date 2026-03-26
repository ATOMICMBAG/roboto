<script>
    import { exportYOLO } from "../store/export.js";
    import { exportMaskPNG } from "../store/export_mask.js";
    import { exportYOLOPose } from "../store/export_keypoints.js";
    import { apiRequest } from "../store/activity.js";

    let datasetName = "my_dataset";

    async function exportFrame() {
        const res = await apiRequest("dataset_read_frame", "/api/vision/frame");
        const data = await res.json();

        const yolo = exportYOLO(data.width, data.height);
        const pose = exportYOLOPose(data.width, data.height);
        const mask = exportMaskPNG(data.width, data.height);

        await apiRequest("dataset_export", "/api/dataset/export", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                dataset: datasetName,
                frame: data.frame,
                yolo,
                pose,
                mask
            })
        });
    }
</script>

<div>
    <input bind:value={datasetName} placeholder="Dataset Name" />
    <button on:click={exportFrame}>Export Frame</button>
</div>
