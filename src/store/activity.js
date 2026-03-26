import { writable } from "svelte/store";

export const backendOnline = writable(false);
export const frontendOnline = writable(true);
export const lastBackendError = writable(null);

export const activityLog = writable([]);

const MAX_LOG = 250;

export function addActivity(source, action, status = "info", details = "") {
  const ts = new Date().toLocaleTimeString();
  const item = { ts, source, action, status, details };

  activityLog.update((items) => {
    const next = [item, ...items];
    if (next.length > MAX_LOG) next.length = MAX_LOG;
    return next;
  });
}

export async function apiRequest(action, url, options = {}) {
  addActivity(
    "frontend",
    action,
    "pending",
    `${options.method || "GET"} ${url}`,
  );

  try {
    const res = await fetch(url, options);
    const ok = res.ok;

    if (url.includes("/api/")) {
      backendOnline.set(ok || res.status < 500);
      if (!ok) lastBackendError.set(`${res.status} ${res.statusText}`);
    }

    addActivity(
      "backend",
      action,
      ok ? "success" : "error",
      `${res.status} ${res.statusText}`,
    );

    return res;
  } catch (e) {
    if (url.includes("/api/")) {
      backendOnline.set(false);
      lastBackendError.set(String(e));
    }

    addActivity("backend", action, "error", String(e));
    throw e;
  }
}
