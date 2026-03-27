<script>
  import { onDestroy, onMount } from "svelte";

  import Dashboard from "./pages/Dashboard.svelte";
  import Vision from "./pages/Vision.svelte";
  import RasterScan from "./pages/RasterScan.svelte";
  import Guide from "./pages/Guide.svelte";
  import ModelSelector from "./components/ModelSelector.svelte";
  import BackendSelector from "./components/BackendSelector.svelte";
  import VisionNodeSelector from "./components/VisionNodeSelector.svelte";
  import VisionRecorder from "./components/VisionRecorder.svelte";
  import ReplayPlayer from "./components/ReplayPlayer.svelte";
  import DatasetExport from "./components/DatasetExport.svelte";
  import SystemStatus from "./components/SystemStatus.svelte";
  import { wsStatus } from "./store/ws.js";
  import {
    backendOnline,
    frontendOnline,
    lastBackendError,
    addActivity,
  } from "./store/activity.js";

  let activeTab = "guide";
  let statusTimer;

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "vision", label: "Vision" },
    { id: "raster", label: "Raster" },
    { id: "guide", label: "Guide" },
  ];

  async function pollStatus() {
    try {
      const res = await fetch("/api/vision/nodes/status", { cache: "no-store" });
      backendOnline.set(res.ok);
      lastBackendError.set(res.ok ? null : `${res.status} ${res.statusText}`);
    } catch (e) {
      backendOnline.set(false);
      lastBackendError.set(String(e));
    }
  }

  onMount(() => {
    const onlineHandler = () => {
      frontendOnline.set(true);
      addActivity("frontend", "network", "success", "Browser online");
    };
    const offlineHandler = () => {
      frontendOnline.set(false);
      addActivity("frontend", "network", "error", "Browser offline");
    };

    frontendOnline.set(navigator.onLine);
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    pollStatus();
    statusTimer = setInterval(pollStatus, 1500);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  });

  onDestroy(() => {
    clearInterval(statusTimer);
  });
</script>

<main class="app">
  <header class="topbar">
    <h1><a href="https://roboto.maazi.de" target="_self" class="link">maazi.de | Roboto Control UI</a> </h1>
    <div class="statusbar">
      <span class="badge" class:ok={$backendOnline} class:bad={!$backendOnline}>
        Backend: {$backendOnline ? "ONLINE" : "OFFLINE"}
      </span>
      <span class="badge" class:ok={$frontendOnline} class:bad={!$frontendOnline}>
        Frontend: {$frontendOnline ? "ONLINE" : "OFFLINE"}
      </span>
      <span class="badge" class:ok={$wsStatus === "connected"} class:bad={$wsStatus !== "connected"}>
        WS: {$wsStatus.toUpperCase()}
      </span>
    </div>
    <nav>
      {#each tabs as tab}
        <button
          class:active={activeTab === tab.id}
          on:click={() => (activeTab = tab.id)}
        >
          {tab.label}
        </button>
      {/each}
    </nav>
  </header>

  <section class="content">
    <aside class="sidebar">
      <BackendSelector />
      <ModelSelector />
      <VisionNodeSelector />
      <VisionRecorder />
      <ReplayPlayer />
      <DatasetExport />
      <SystemStatus />
    </aside>

    <div class="workspace">
      {#if activeTab === "dashboard"}
        <Dashboard />
      {:else if activeTab === "vision"}
        <Vision />
      {:else if activeTab === "raster"}
        <RasterScan />
      {:else if activeTab === "guide"}
        <Guide />
      {/if}
    </div>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    background: #ffffff;
    color: #000000;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #2a2a2a;
    background: #ffffff;
  }

  h1 {
    margin: 0;
    font-size: 1.1rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  .link {
    color: #000000;
    text-decoration: none;
  }

  .link:visited {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link:active {
    text-decoration: none;
  }

  .statusbar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
  }

  .badge {
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    border: 1px solid #444;
  }

  .badge.ok {
    background: #14532d;
    color: #bbf7d0;
    border-color: #166534;
  }

  .badge.bad {
    background: #7f1d1d;
    color: #fecaca;
    border-color: #991b1b;
  }

  button {
    background: #cecece;
    color: #1a1a1a;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding: 0.4rem 0.75rem;
    cursor: pointer;
  }

  button.active {
    background: #383838;
    color: #ffffff;
    border-color: #9b9b9b;
    font-weight: 700;
  }

  .content {
    flex: 1;
    display: grid;
    grid-template-columns: 320px 1fr;
    min-height: 0;
  }

  .sidebar {
    border-right: 1px solid #2a2a2a;
    padding: 1rem;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .workspace {
    padding: 1rem;
    overflow: auto;
  }

  @media (max-width: 1000px) {
    .content {
      grid-template-columns: 1fr;
    }

    .topbar {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .statusbar {
      margin: 0;
      order: 3;
      width: 100%;
      flex-wrap: wrap;
    }

    .sidebar {
      border-right: none;
      border-bottom: 1px solid #2a2a2a;
    }
  }
</style>