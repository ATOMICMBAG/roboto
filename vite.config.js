import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  server: {
    host: "0.0.0.0",
    port: 8033,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:8022",
        changeOrigin: true,
        ws: true,
      },
      "/video": {
        target: "http://localhost:8022",
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 8033,
    strictPort: true,
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
