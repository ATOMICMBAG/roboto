<script>
    import * as THREE from "three";
    import { onDestroy } from "svelte";
    import { heatmapData } from "../store/heatmap.js";

    let container;
    let data = null;

    const unsubscribe = heatmapData.subscribe(v => {
        data = v;
        if (data) init3D();
    });

    let scene, camera, renderer, mesh;
    let animationId;

    function init3D() {
        if (!data) return;

        const w = data[0].length;
        const h = data.length;

        // Szene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        // Kamera
        camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(0, -w, w * 0.8);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(500, 500);
        container.innerHTML = "";
        container.appendChild(renderer.domElement);

        // Geometrie
        const geometry = new THREE.PlaneGeometry(w, h, w - 1, h - 1);

        // Höhenwerte einbauen
        const verts = geometry.attributes.position;
        for (let i = 0; i < verts.count; i++) {
            const x = i % w;
            const y = Math.floor(i / w);
            const z = data[y][x] * 0.1; // Skalierung
            verts.setZ(i, z);
        }
        verts.needsUpdate = true;

        // Farbskala
        const colors = [];
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const v = data[y][x];
                const r = Math.min(1, v / 255);
                const b = 1 - r;
                colors.push(r, 0, b);
            }
        }
        geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

        // Material
        const material = new THREE.MeshLambertMaterial({
            vertexColors: true,
            side: THREE.DoubleSide,
            wireframe: false
        });

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);

        // Licht
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 10);
        scene.add(light);

        animate();
    }

    function animate() {
        animationId = requestAnimationFrame(animate);
        mesh.rotation.z += 0.002; // leichte Rotation
        renderer.render(scene, camera);
    }

    onDestroy(() => {
        if (animationId) cancelAnimationFrame(animationId);
        unsubscribe();
        renderer?.dispose();
    });
</script>

<div class="panel">
    <h2>3D Heatmap</h2>
    <div bind:this={container} class="canvas"></div>
</div>

<style>
.panel {
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 3px;
    background: #e7e7e7;
    color: #000000;
}
div {
    width: 90%;
    height: 90%;
}
.canvas {
    width: 640px;
    height: 480px;
}
</style>
