var Xl = Object.defineProperty;
var $l = (n, e, t) =>
  e in n ?
    Xl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
  : (n[e] = t);
var qr = (n, e, t) => $l(n, typeof e != "symbol" ? e + "" : e, t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials" ? (s.credentials = "include")
      : r.crossOrigin === "anonymous" ? (s.credentials = "omit")
      : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
function ve() {}
function Yo(n) {
  return n();
}
function aa() {
  return Object.create(null);
}
function kt(n) {
  n.forEach(Yo);
}
function jo(n) {
  return typeof n == "function";
}
function ot(n, e) {
  return n != n ?
      e == e
    : n !== e || (n && typeof n == "object") || typeof n == "function";
}
let rr;
function oa(n, e) {
  return n === e ? !0 : (
      (rr || (rr = document.createElement("a")), (rr.href = e), n === rr.href)
    );
}
function ql(n) {
  return Object.keys(n).length === 0;
}
function Ko(n, ...e) {
  if (n == null) {
    for (const i of e) i(void 0);
    return ve;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ks(n) {
  let e;
  return (Ko(n, (t) => (e = t))(), e);
}
function Gt(n, e, t) {
  n.$$.on_destroy.push(Ko(e, t));
}
function R(n, e) {
  n.appendChild(e);
}
function Ye(n, e, t) {
  n.insertBefore(e, t || null);
}
function Xe(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Pi(n, e) {
  for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
}
function V(n) {
  return document.createElement(n);
}
function Ve(n) {
  return document.createTextNode(n);
}
function oe() {
  return Ve(" ");
}
function Yl() {
  return Ve("");
}
function je(n, e, t, i) {
  return (n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i));
}
function q(n, e, t) {
  t == null ?
    n.removeAttribute(e)
  : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function jt(n) {
  return n === "" ? null : +n;
}
function jl(n) {
  return Array.from(n.childNodes);
}
function xt(n, e) {
  ((e = "" + e), n.data !== e && (n.data = e));
}
function Qe(n, e) {
  n.value = e ?? "";
}
function Un(n, e, t) {
  for (let i = 0; i < n.options.length; i += 1) {
    const r = n.options[i];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Lr(n) {
  const e = n.querySelector(":checked");
  return e && e.__value;
}
function Rt(n, e, t) {
  n.classList.toggle(e, !!t);
}
let qi;
function Xi(n) {
  qi = n;
}
function Zo() {
  if (!qi) throw new Error("Function called outside component initialization");
  return qi;
}
function ri(n) {
  Zo().$$.on_mount.push(n);
}
function Jo(n) {
  Zo().$$.on_destroy.push(n);
}
const bi = [],
  mn = [];
let Ri = [];
const la = [],
  Kl = Promise.resolve();
let Rs = !1;
function Zl() {
  Rs || ((Rs = !0), Kl.then(Qo));
}
function ti(n) {
  Ri.push(n);
}
const Yr = new Set();
let ai = 0;
function Qo() {
  if (ai !== 0) return;
  const n = qi;
  do {
    try {
      for (; ai < bi.length; ) {
        const e = bi[ai];
        (ai++, Xi(e), Jl(e.$$));
      }
    } catch (e) {
      throw ((bi.length = 0), (ai = 0), e);
    }
    for (Xi(null), bi.length = 0, ai = 0; mn.length; ) mn.pop()();
    for (let e = 0; e < Ri.length; e += 1) {
      const t = Ri[e];
      Yr.has(t) || (Yr.add(t), t());
    }
    Ri.length = 0;
  } while (bi.length);
  for (; la.length; ) la.pop()();
  ((Rs = !1), Yr.clear(), Xi(n));
}
function Jl(n) {
  if (n.fragment !== null) {
    (n.update(), kt(n.before_update));
    const e = n.dirty;
    ((n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(ti));
  }
}
function Ql(n) {
  const e = [],
    t = [];
  (Ri.forEach((i) => (n.indexOf(i) === -1 ? e.push(i) : t.push(i))),
    t.forEach((i) => i()),
    (Ri = e));
}
const Rr = new Set();
let Zn;
function ec() {
  Zn = { r: 0, c: [], p: Zn };
}
function tc() {
  (Zn.r || kt(Zn.c), (Zn = Zn.p));
}
function nt(n, e) {
  n && n.i && (Rr.delete(n), n.i(e));
}
function at(n, e, t, i) {
  if (n && n.o) {
    if (Rr.has(n)) return;
    (Rr.add(n),
      Zn.c.push(() => {
        (Rr.delete(n), i && (t && n.d(1), i()));
      }),
      n.o(e));
  } else i && i();
}
function rn(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function dt(n) {
  n && n.c();
}
function ct(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  (i && i.m(e, t),
    ti(() => {
      const s = n.$$.on_mount.map(Yo).filter(jo);
      (n.$$.on_destroy ? n.$$.on_destroy.push(...s) : kt(s),
        (n.$$.on_mount = []));
    }),
    r.forEach(ti));
}
function ut(n, e) {
  const t = n.$$;
  t.fragment !== null &&
    (Ql(t.after_update),
    kt(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function nc(n, e) {
  (n.$$.dirty[0] === -1 && (bi.push(n), Zl(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << (e % 31)));
}
function ht(n, e, t, i, r, s, o = null, a = [-1]) {
  const l = qi;
  Xi(n);
  const c = (n.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: ve,
    not_equal: r,
    bound: aa(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: aa(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  o && o(c.root);
  let u = !1;
  if (
    ((c.ctx =
      t ?
        t(n, e.props || {}, (f, d, ...m) => {
          const _ = m.length ? m[0] : d;
          return (
            c.ctx &&
              r(c.ctx[f], (c.ctx[f] = _)) &&
              (!c.skip_bound && c.bound[f] && c.bound[f](_), u && nc(n, f)),
            d
          );
        })
      : []),
    c.update(),
    (u = !0),
    kt(c.before_update),
    (c.fragment = i ? i(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const f = jl(e.target);
      (c.fragment && c.fragment.l(f), f.forEach(Xe));
    } else c.fragment && c.fragment.c();
    (e.intro && nt(n.$$.fragment), ct(n, e.target, e.anchor), Qo());
  }
  Xi(l);
}
class ft {
  constructor() {
    qr(this, "$$");
    qr(this, "$$set");
  }
  $destroy() {
    (ut(this, 1), (this.$destroy = ve));
  }
  $on(e, t) {
    if (!jo(t)) return ve;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(t),
      () => {
        const r = i.indexOf(t);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !ql(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const ic = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ic);
const oi = [];
function Mt(n, e = ve) {
  let t;
  const i = new Set();
  function r(a) {
    if (ot(n, a) && ((n = a), t)) {
      const l = !oi.length;
      for (const c of i) (c[1](), oi.push(c, n));
      if (l) {
        for (let c = 0; c < oi.length; c += 2) oi[c][0](oi[c + 1]);
        oi.length = 0;
      }
    }
  }
  function s(a) {
    r(a(n));
  }
  function o(a, l = ve) {
    const c = [a, l];
    return (
      i.add(c),
      i.size === 1 && (t = e(r, s) || ve),
      a(n),
      () => {
        (i.delete(c), i.size === 0 && t && (t(), (t = null)));
      }
    );
  }
  return { set: r, update: s, subscribe: o };
}
const el = Mt(0),
  tl = Mt(0),
  bn = Mt(!1),
  Wi = Mt(!0),
  Yi = Mt(null),
  nl = Mt([]),
  ca = 250;
function Yt(n, e, t = "info", i = "") {
  const s = {
    ts: new Date().toLocaleTimeString(),
    source: n,
    action: e,
    status: t,
    details: i,
  };
  nl.update((o) => {
    const a = [s, ...o];
    return (a.length > ca && (a.length = ca), a);
  });
}
async function Kt(n, e, t = {}) {
  Yt("frontend", n, "pending", `${t.method || "GET"} ${e}`);
  try {
    const i = await fetch(e, t),
      r = i.ok;
    return (
      e.includes("/api/") &&
        (bn.set(r || i.status < 500),
        r || Yi.set(`${i.status} ${i.statusText}`)),
      Yt("backend", n, r ? "success" : "error", `${i.status} ${i.statusText}`),
      i
    );
  } catch (i) {
    throw (
      e.includes("/api/") && (bn.set(!1), Yi.set(String(i))),
      Yt("backend", n, "error", String(i)),
      i
    );
  }
}
const rc = Mt(null),
  sc = Mt(null),
  ac = Mt(0),
  il = Mt([]),
  rl = Mt(null),
  sl = Mt([]),
  oc = Mt(null),
  Hs = Mt(null),
  Vs = Mt(null),
  Ws = Mt(null);
function lc(n) {
  (n.type === "spot" && (rc.set(n.x), sc.set(n.y)),
    n.type === "focus" && ac.set(n.value),
    n.type === "yolo_boxes" && il.set(n.boxes),
    n.type === "segmentation_mask" && rl.set(n.mask),
    n.type === "pose_keypoints" && sl.set(n.points));
}
async function cc() {
  try {
    const e = await (await Kt("vision_frame_poll", "/api/vision/frame")).json();
    if ((oc.set(e), e.status === "no_frame" || e.status === "no_node")) return;
    (Hs.set(e.frame),
      Vs.set(e.results),
      Ws.set(e.model),
      el.set(e.fps ?? 0),
      tl.set(e.latency ?? 0));
  } catch {}
}
const Xs = Mt(null);
function uc(n) {
  n.type === "raster_done" && Xs.set(n.map);
}
const Pr = Mt("disconnected"),
  $s = Mt(0);
let Bt,
  Cs = [];
function al() {
  if (
    Bt &&
    (Bt.readyState === WebSocket.OPEN || Bt.readyState === WebSocket.CONNECTING)
  )
    return;
  const n = window.location.protocol === "https:" ? "wss" : "ws",
    e = window.location.host;
  ((Bt = new WebSocket(`${n}://${e}/api/ws`)),
    Yt("frontend", "ws_connect", "pending", `${n}://${e}/api/ws`),
    (Bt.onopen = () => {
      for (
        Pr.set("connected"),
          bn.set(!0),
          Yt("backend", "ws_connect", "success", "WebSocket verbunden");
        Cs.length > 0 && Bt.readyState === WebSocket.OPEN;
      ) {
        const t = Cs.shift();
        (Bt.send(t), Yt("frontend", "ws_send_queued", "info", t));
      }
    }),
    (Bt.onclose = () => {
      (Pr.set("disconnected"),
        bn.set(!1),
        Yt("backend", "ws_close", "error", "WebSocket getrennt"));
    }),
    (Bt.onerror = () => {
      (bn.set(!1), Yt("backend", "ws_error", "error", "WebSocket-Fehler"));
    }),
    (Bt.onmessage = (t) => {
      const i = JSON.parse(t.data);
      (lc(i),
        uc(i),
        Yt("backend", "ws_message", "info", i.type || "unknown"),
        i.type === "current" && $s.set(i.value));
    }));
}
function Ls(n) {
  const e = JSON.stringify(n);
  ((!Bt || Bt.readyState === WebSocket.CLOSED) && al(),
    Bt && Bt.readyState === WebSocket.OPEN ?
      (Bt.send(e), Yt("frontend", "ws_send", "info", n.type || "unknown"))
    : (Cs.push(e), Yt("frontend", "ws_queue", "pending", n.type || "unknown")));
}
function hc(n) {
  let e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p, h;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "Motor Control"),
        (i = oe()),
        (r = V("label")),
        (s = Ve("Servo Angle: ")),
        (o = Ve(n[0])),
        (a = Ve("°")),
        (l = oe()),
        (c = V("input")),
        (u = oe()),
        (f = V("label")),
        (f.textContent = "Stepper Position (mm)"),
        (d = oe()),
        (m = V("input")),
        (_ = oe()),
        (g = V("button")),
        (g.textContent = "Move"),
        q(r, "for", "servo-angle"),
        q(c, "id", "servo-angle"),
        q(c, "type", "range"),
        q(c, "min", "0"),
        q(c, "max", "180"),
        q(f, "for", "stepper-pos"),
        q(m, "id", "stepper-pos"),
        q(m, "type", "number"),
        q(e, "class", "panel svelte-e10i4"));
    },
    m(M, x) {
      (Ye(M, e, x),
        R(e, t),
        R(e, i),
        R(e, r),
        R(r, s),
        R(r, o),
        R(r, a),
        R(e, l),
        R(e, c),
        Qe(c, n[0]),
        R(e, u),
        R(e, f),
        R(e, d),
        R(e, m),
        Qe(m, n[1]),
        R(e, _),
        R(e, g),
        p ||
          ((h = [
            je(c, "change", n[4]),
            je(c, "input", n[4]),
            je(c, "change", n[2]),
            je(m, "input", n[5]),
            je(g, "click", n[3]),
          ]),
          (p = !0)));
    },
    p(M, [x]) {
      (x & 1 && xt(o, M[0]),
        x & 1 && Qe(c, M[0]),
        x & 2 && jt(m.value) !== M[1] && Qe(m, M[1]));
    },
    i: ve,
    o: ve,
    d(M) {
      (M && Xe(e), (p = !1), kt(h));
    },
  };
}
function fc(n, e, t) {
  let i = 90,
    r = 0;
  function s() {
    Ls({ type: "servo_move", angle: i });
  }
  function o() {
    Ls({ type: "stepper_move", pos: r });
  }
  function a() {
    ((i = jt(this.value)), t(0, i));
  }
  function l() {
    ((r = jt(this.value)), t(1, r));
  }
  return [i, r, s, o, a, l];
}
class dc extends ft {
  constructor(e) {
    (super(), ht(this, e, fc, hc, ot, {}));
  }
}
function pc(n) {
  let e,
    t,
    i,
    r,
    s,
    o = n[0].toFixed(2) + "",
    a;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "Sensor Live"),
        (i = oe()),
        (r = V("p")),
        (s = Ve("Current: ")),
        (a = Ve(o)),
        q(e, "class", "panel svelte-e10i4"));
    },
    m(l, c) {
      (Ye(l, e, c), R(e, t), R(e, i), R(e, r), R(r, s), R(r, a));
    },
    p(l, [c]) {
      c & 1 && o !== (o = l[0].toFixed(2) + "") && xt(a, o);
    },
    i: ve,
    o: ve,
    d(l) {
      l && Xe(e);
    },
  };
}
function mc(n, e, t) {
  let i = 0;
  const r = $s.subscribe((s) => t(0, (i = s)));
  return (ri(() => () => r()), [i]);
}
class _c extends ft {
  constructor(e) {
    (super(), ht(this, e, mc, pc, ot, {}));
  }
}
function gc(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "Sensor Graph"),
        (i = oe()),
        (r = V("canvas")),
        q(r, "width", "300"),
        q(r, "height", "150"),
        q(e, "class", "panel svelte-e10i4"));
    },
    m(s, o) {
      (Ye(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: ve,
    i: ve,
    o: ve,
    d(s) {
      (s && Xe(e), n[1](null));
    },
  };
}
function vc(n, e, t) {
  let i,
    r,
    s = [];
  ri(() => {
    ((r = i.getContext("2d")),
      $s.subscribe((l) => {
        (s.push(l), s.length > 200 && s.shift(), o());
      }));
  });
  function o() {
    (r.clearRect(0, 0, i.width, i.height),
      (r.strokeStyle = "#00ff88"),
      r.beginPath(),
      s.forEach((l, c) => {
        const u = (c / s.length) * i.width,
          f = i.height - (l / 1023) * i.height;
        r.lineTo(u, f);
      }),
      r.stroke());
  }
  function a(l) {
    mn[l ? "unshift" : "push"](() => {
      ((i = l), t(0, i));
    });
  }
  return [i, a];
}
class xc extends ft {
  constructor(e) {
    (super(), ht(this, e, vc, gc, ot, {}));
  }
}
function Mc(n) {
  let e, t, i, r, s, o, a;
  return (
    (t = new dc({})),
    (r = new _c({})),
    (o = new xc({})),
    {
      c() {
        ((e = V("div")),
          dt(t.$$.fragment),
          (i = oe()),
          dt(r.$$.fragment),
          (s = oe()),
          dt(o.$$.fragment),
          q(e, "class", "grid svelte-1udxs04"));
      },
      m(l, c) {
        (Ye(l, e, c),
          ct(t, e, null),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          (a = !0));
      },
      p: ve,
      i(l) {
        a ||
          (nt(t.$$.fragment, l),
          nt(r.$$.fragment, l),
          nt(o.$$.fragment, l),
          (a = !0));
      },
      o(l) {
        (at(t.$$.fragment, l),
          at(r.$$.fragment, l),
          at(o.$$.fragment, l),
          (a = !1));
      },
      d(l) {
        (l && Xe(e), ut(t), ut(r), ut(o));
      },
    }
  );
}
function Sc(n) {
  return (ri(() => al()), []);
}
class Ec extends ft {
  constructor(e) {
    (super(), ht(this, e, Sc, Mc, ot, {}));
  }
}
function yc(n) {
  let e, t, i, r, s;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "Camera"),
        (i = oe()),
        (r = V("img")),
        oa(r.src, (s = n[0])) || q(r, "src", s),
        q(r, "alt", "camera stream"),
        q(r, "class", "svelte-jyl0g4"),
        q(e, "class", "panel svelte-jyl0g4"));
    },
    m(o, a) {
      (Ye(o, e, a), R(e, t), R(e, i), R(e, r));
    },
    p(o, [a]) {
      a & 1 && !oa(r.src, (s = o[0])) && q(r, "src", s);
    },
    i: ve,
    o: ve,
    d(o) {
      o && Xe(e);
    },
  };
}
function Tc(n, e, t) {
  let { url: i = "/video" } = e;
  return (
    (n.$$set = (r) => {
      "url" in r && t(0, (i = r.url));
    }),
    [i]
  );
}
class bc extends ft {
  constructor(e) {
    (super(), ht(this, e, Tc, yc, ot, { url: 0 }));
  }
}
function Ac(n) {
  let e;
  return {
    c() {
      ((e = V("canvas")),
        q(e, "width", "640"),
        q(e, "height", "480"),
        q(e, "class", "svelte-xfekda"));
    },
    m(t, i) {
      (Ye(t, e, i), n[1](e));
    },
    p: ve,
    i: ve,
    o: ve,
    d(t) {
      (t && Xe(e), n[1](null));
    },
  };
}
function wc(n, e, t) {
  let i,
    r = [],
    s = null,
    o = [];
  (il.subscribe((c) => (r = c)),
    rl.subscribe((c) => (s = c)),
    sl.subscribe((c) => (o = c)));
  function a() {
    if (!i) return;
    const c = i.getContext("2d");
    if (
      (c.clearRect(0, 0, i.width, i.height),
      (c.strokeStyle = "lime"),
      (c.lineWidth = 2),
      r.forEach(([u, f, d, m]) => {
        c.strokeRect(u, f, d - u, m - f);
      }),
      (c.fillStyle = "red"),
      o.forEach(([u, f]) => {
        (c.beginPath(), c.arc(u, f, 4, 0, Math.PI * 2), c.fill());
      }),
      s)
    ) {
      const u = c.createImageData(i.width, i.height);
      for (let f = 0; f < s.length; f++) {
        const d = s[f] * 255;
        ((u.data[f * 4 + 0] = d),
          (u.data[f * 4 + 1] = 0),
          (u.data[f * 4 + 2] = 0),
          (u.data[f * 4 + 3] = 100));
      }
      c.putImageData(u, 0, 0);
    }
  }
  function l(c) {
    mn[c ? "unshift" : "push"](() => {
      ((i = c), t(0, i));
    });
  }
  return (
    (n.$$.update = () => {
      n.$$.dirty & 1 && i && a();
    }),
    [i, l]
  );
}
class Rc extends ft {
  constructor(e) {
    (super(), ht(this, e, wc, Ac, ot, {}));
  }
}
function Cc(n) {
  let e,
    t,
    i,
    r = n[0].toFixed(1) + "",
    s,
    o,
    a,
    l,
    c = n[1].toFixed(1) + "",
    u,
    f;
  return {
    c() {
      ((e = V("div")),
        (t = V("div")),
        (i = Ve("FPS: ")),
        (s = Ve(r)),
        (o = oe()),
        (a = V("div")),
        (l = Ve("Latency: ")),
        (u = Ve(c)),
        (f = Ve(" ms")),
        q(e, "class", "perf svelte-1j8dabl"));
    },
    m(d, m) {
      (Ye(d, e, m),
        R(e, t),
        R(t, i),
        R(t, s),
        R(e, o),
        R(e, a),
        R(a, l),
        R(a, u),
        R(a, f));
    },
    p(d, [m]) {
      (m & 1 && r !== (r = d[0].toFixed(1) + "") && xt(s, r),
        m & 2 && c !== (c = d[1].toFixed(1) + "") && xt(u, c));
    },
    i: ve,
    o: ve,
    d(d) {
      d && Xe(e);
    },
  };
}
function Lc(n, e, t) {
  let i, r;
  return (
    Gt(n, el, (s) => t(0, (i = s))),
    Gt(n, tl, (s) => t(1, (r = s))),
    [i, r]
  );
}
class Pc extends ft {
  constructor(e) {
    (super(), ht(this, e, Lc, Cc, ot, {}));
  }
}
const wn = Mt([]);
function Dc(n, e, t, i, r = "object") {
  wn.update((s) => [
    ...s,
    { type: "box", box: { x: n, y: e, w: t, h: i }, class: r },
  ]);
}
function Uc(n, e = "object") {
  wn.update((t) => [...t, { type: "mask", points: n, class: e }]);
}
function Ic(n, e = "person") {
  wn.update((t) => [...t, { type: "keypoints", points: n, class: e }]);
}
function Nc(n, e, t, i) {
  wn.update((r) => ((r[n].points[e].x = t), (r[n].points[e].y = i), r));
}
function Fc(n) {
  let e, t, i;
  return {
    c() {
      ((e = V("canvas")),
        q(e, "width", "1280"),
        q(e, "height", "720"),
        q(e, "class", "svelte-1pdvpkz"));
    },
    m(r, s) {
      (Ye(r, e, s),
        n[3](e),
        t || ((i = [je(e, "click", n[1]), je(e, "dblclick", n[2])]), (t = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(r) {
      (r && Xe(e), n[3](null), (t = !1), kt(i));
    },
  };
}
function Oc(n, e, t) {
  let i,
    r,
    s = [];
  function o(u) {
    const f = i.getBoundingClientRect(),
      d = u.clientX - f.left,
      m = u.clientY - f.top;
    (s.push({ x: d, y: m }), l());
  }
  function a() {
    (s.length > 2 && Uc(s), (s = []), l());
  }
  function l() {
    if (
      ((r = i.getContext("2d")),
      r.clearRect(0, 0, i.width, i.height),
      s.length > 1)
    ) {
      ((r.strokeStyle = "cyan"),
        (r.lineWidth = 2),
        r.beginPath(),
        r.moveTo(s[0].x, s[0].y));
      for (let u of s) r.lineTo(u.x, u.y);
      r.stroke();
    }
    for (let u of s)
      ((r.fillStyle = "cyan"),
        r.beginPath(),
        r.arc(u.x, u.y, 4, 0, Math.PI * 2),
        r.fill());
  }
  function c(u) {
    mn[u ? "unshift" : "push"](() => {
      ((i = u), t(0, i));
    });
  }
  return [i, o, a, c];
}
class Bc extends ft {
  constructor(e) {
    (super(), ht(this, e, Oc, Fc, ot, {}));
  }
}
function zc(n) {
  let e, t, i;
  return {
    c() {
      ((e = V("canvas")),
        q(e, "width", "1280"),
        q(e, "height", "720"),
        q(e, "class", "svelte-uet3hy"));
    },
    m(r, s) {
      (Ye(r, e, s),
        n[4](e),
        t ||
          ((i = [je(e, "mousedown", n[1]), je(e, "mouseup", n[2])]), (t = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(r) {
      (r && Xe(e), n[4](null), (t = !1), kt(i));
    },
  };
}
function Gc(n, e, t) {
  let i;
  Gt(n, wn, (_) => t(3, (i = _)));
  let r,
    s,
    o = !1,
    a,
    l;
  function c(_) {
    o = !0;
    const g = r.getBoundingClientRect();
    ((a = _.clientX - g.left), (l = _.clientY - g.top));
  }
  function u(_) {
    if (!o) return;
    o = !1;
    const g = r.getBoundingClientRect(),
      p = _.clientX - g.left,
      h = _.clientY - g.top,
      M = p - a,
      x = h - l;
    Dc(a, l, M, x);
  }
  function f() {
    ((s = r.getContext("2d")),
      s.clearRect(0, 0, r.width, r.height),
      i.forEach((_) => {
        (_.type === "box" &&
          ((s.strokeStyle = "yellow"),
          (s.lineWidth = 2),
          s.strokeRect(_.box.x, _.box.y, _.box.w, _.box.h)),
          _.type === "mask" && d(_.points));
      }));
  }
  function d(_) {
    ((s.fillStyle = "rgba(0, 255, 255, 0.3)"),
      (s.strokeStyle = "cyan"),
      (s.lineWidth = 2),
      s.beginPath(),
      s.moveTo(_[0].x, _[0].y));
    for (let g of _) s.lineTo(g.x, g.y);
    (s.closePath(), s.fill(), s.stroke());
  }
  function m(_) {
    mn[_ ? "unshift" : "push"](() => {
      ((r = _), t(0, r));
    });
  }
  return (
    (n.$$.update = () => {
      n.$$.dirty & 9 && r && i && f();
    }),
    [r, c, u, i, m]
  );
}
class kc extends ft {
  constructor(e) {
    (super(), ht(this, e, Gc, zc, ot, {}));
  }
}
function Hc(n) {
  let e, t, i;
  return {
    c() {
      ((e = V("canvas")),
        q(e, "width", "1280"),
        q(e, "height", "720"),
        q(e, "class", "svelte-1pdvpkz"));
    },
    m(r, s) {
      (Ye(r, e, s),
        n[6](e),
        t ||
          ((i = [
            je(e, "click", n[1]),
            je(e, "mousedown", n[2]),
            je(e, "mousemove", n[3]),
            je(e, "mouseup", n[4]),
          ]),
          (t = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(r) {
      (r && Xe(e), n[6](null), (t = !1), kt(i));
    },
  };
}
const jr = 6;
function Vc(n, e, t) {
  let i;
  Gt(n, wn, (h) => t(5, (i = h)));
  let r,
    s,
    o = [],
    a = null;
  function l(h) {
    const M = r.getBoundingClientRect(),
      x = h.clientX - M.left,
      T = h.clientY - M.top;
    (o.push({ x, y: T, score: 1 }), o.length === 17 && (Ic(o), (o = [])), d());
  }
  function c(h) {
    const M = r.getBoundingClientRect(),
      x = h.clientX - M.left,
      T = h.clientY - M.top;
    i.forEach((L, w) => {
      L.type === "keypoints" &&
        L.points.forEach((A, k) => {
          const S = A.x - x,
            b = A.y - T;
          S * S + b * b < jr * jr && (a = { annIndex: w, pointIndex: k });
        });
    });
  }
  function u(h) {
    if (!a) return;
    const M = r.getBoundingClientRect(),
      x = h.clientX - M.left,
      T = h.clientY - M.top;
    (Nc(a.annIndex, a.pointIndex, x, T), d());
  }
  function f() {
    a = null;
  }
  function d() {
    ((s = r.getContext("2d")),
      s.clearRect(0, 0, r.width, r.height),
      i.forEach((h) => {
        h.type === "keypoints" && g(h.points);
      }),
      o.forEach((h) => {
        m(h.x, h.y);
      }));
  }
  function m(h, M) {
    ((s.fillStyle = "red"),
      s.beginPath(),
      s.arc(h, M, jr, 0, Math.PI * 2),
      s.fill());
  }
  const _ = [
    [5, 7],
    [7, 9],
    [6, 8],
    [8, 10],
    [11, 13],
    [13, 15],
    [12, 14],
    [14, 16],
    [5, 6],
    [11, 12],
    [5, 11],
    [6, 12],
  ];
  function g(h) {
    ((s.strokeStyle = "lime"),
      (s.lineWidth = 2),
      _.forEach(([M, x]) => {
        const T = h[M],
          L = h[x];
        !T ||
          !L ||
          (s.beginPath(), s.moveTo(T.x, T.y), s.lineTo(L.x, L.y), s.stroke());
      }),
      h.forEach((M) => m(M.x, M.y)));
  }
  function p(h) {
    mn[h ? "unshift" : "push"](() => {
      ((r = h), t(0, r));
    });
  }
  return (
    (n.$$.update = () => {
      n.$$.dirty & 33 && r && i && d();
    }),
    [r, l, c, u, f, i, p]
  );
}
class Wc extends ft {
  constructor(e) {
    (super(), ht(this, e, Vc, Hc, ot, {}));
  }
}
function Xc(n) {
  let e, t, i, r, s, o, a, l, c, u, f;
  return (
    (r = new Pc({})),
    (o = new Bc({})),
    (l = new kc({})),
    (u = new Wc({})),
    {
      c() {
        ((e = V("div")),
          (t = V("canvas")),
          (i = oe()),
          dt(r.$$.fragment),
          (s = oe()),
          dt(o.$$.fragment),
          (a = oe()),
          dt(l.$$.fragment),
          (c = oe()),
          dt(u.$$.fragment),
          q(t, "class", "svelte-1cq807x"),
          q(e, "class", "vision-container svelte-1cq807x"));
      },
      m(d, m) {
        (Ye(d, e, m),
          R(e, t),
          n[5](t),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          R(e, a),
          ct(l, e, null),
          R(e, c),
          ct(u, e, null),
          (f = !0));
      },
      p: ve,
      i(d) {
        f ||
          (nt(r.$$.fragment, d),
          nt(o.$$.fragment, d),
          nt(l.$$.fragment, d),
          nt(u.$$.fragment, d),
          (f = !0));
      },
      o(d) {
        (at(r.$$.fragment, d),
          at(o.$$.fragment, d),
          at(l.$$.fragment, d),
          at(u.$$.fragment, d),
          (f = !1));
      },
      d(d) {
        (d && Xe(e), n[5](null), ut(r), ut(o), ut(l), ut(u));
      },
    }
  );
}
function $c(n, e, t) {
  let i, r, s;
  (Gt(n, Ws, (p) => t(2, (i = p))),
    Gt(n, Vs, (p) => t(3, (r = p))),
    Gt(n, Hs, (p) => t(4, (s = p))));
  let o, a, l, c, u;
  function f() {
    const p = new Image();
    ((p.src = "data:image/jpeg;base64," + o),
      (p.onload = () => {
        (t(0, (c.width = p.width), c),
          t(0, (c.height = p.height), c),
          (u = c.getContext("2d")),
          u.drawImage(p, 0, 0),
          a &&
            (l === "yolo" && d(a),
            l === "segmenter" && m(a),
            l === "pose" && _(a)));
      }));
  }
  function d(p) {
    const { boxes: h, scores: M, classes: x } = p;
    ((u.strokeStyle = "lime"), (u.lineWidth = 2));
    for (let T = 0; T < h.length; T++) {
      const [L, w, A, k] = h[T];
      u.strokeRect(L, w, A, k);
    }
  }
  function m(p) {
    const h = p.length,
      M = p[0].length,
      x = u.createImageData(M, h);
    let T = 0;
    for (let L = 0; L < h; L++)
      for (let w = 0; w < M; w++) {
        const A = p[L][w] ? 255 : 0;
        ((x.data[T++] = 0),
          (x.data[T++] = 255),
          (x.data[T++] = 0),
          (x.data[T++] = A));
      }
    u.putImageData(x, 0, 0);
  }
  function _(p) {
    u.fillStyle = "red";
    for (const [h, M, x] of p)
      x > 0.3 && (u.beginPath(), u.arc(h, M, 4, 0, Math.PI * 2), u.fill());
  }
  function g(p) {
    mn[p ? "unshift" : "push"](() => {
      ((c = p), t(0, c));
    });
  }
  return (
    (n.$$.update = () => {
      (n.$$.dirty & 16 && t(1, (o = s)),
        n.$$.dirty & 8 && (a = r),
        n.$$.dirty & 4 && (l = i),
        n.$$.dirty & 3 && c && o && f());
    }),
    [c, o, i, r, s, g]
  );
}
class qc extends ft {
  constructor(e) {
    (super(), ht(this, e, $c, Xc, ot, {}));
  }
}
function Yc(n) {
  let e, t, i, r, s, o, a;
  return (
    (t = new bc({})),
    (r = new Rc({})),
    (o = new qc({})),
    {
      c() {
        ((e = V("div")),
          dt(t.$$.fragment),
          (i = oe()),
          dt(r.$$.fragment),
          (s = oe()),
          dt(o.$$.fragment),
          q(e, "class", "vision-container svelte-1g74rqe"));
      },
      m(l, c) {
        (Ye(l, e, c),
          ct(t, e, null),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          (a = !0));
      },
      p: ve,
      i(l) {
        a ||
          (nt(t.$$.fragment, l),
          nt(r.$$.fragment, l),
          nt(o.$$.fragment, l),
          (a = !0));
      },
      o(l) {
        (at(t.$$.fragment, l),
          at(r.$$.fragment, l),
          at(o.$$.fragment, l),
          (a = !1));
      },
      d(l) {
        (l && Xe(e), ut(t), ut(r), ut(o));
      },
    }
  );
}
function jc(n) {
  let e;
  return (ri(() => ((e = setInterval(cc, 100)), () => clearInterval(e))), []);
}
class Kc extends ft {
  constructor(e) {
    (super(), ht(this, e, jc, Yc, ot, {}));
  }
}
function Zc(n) {
  let e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p, h, M, x, T, L, w;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "Raster Scan"),
        (i = oe()),
        (r = V("label")),
        (r.textContent = "X Range"),
        (s = oe()),
        (o = V("input")),
        (a = oe()),
        (l = V("input")),
        (c = oe()),
        (u = V("label")),
        (u.textContent = "Y Range"),
        (f = oe()),
        (d = V("input")),
        (m = oe()),
        (_ = V("input")),
        (g = oe()),
        (p = V("label")),
        (p.textContent = "Step"),
        (h = oe()),
        (M = V("input")),
        (x = oe()),
        (T = V("button")),
        (T.textContent = "Start"),
        q(r, "for", "x0"),
        q(o, "id", "x0"),
        q(o, "type", "number"),
        q(l, "id", "x1"),
        q(l, "type", "number"),
        q(u, "for", "y0"),
        q(d, "id", "y0"),
        q(d, "type", "number"),
        q(_, "id", "y1"),
        q(_, "type", "number"),
        q(p, "for", "step"),
        q(M, "id", "step"),
        q(M, "type", "number"),
        q(e, "class", "panel"));
    },
    m(A, k) {
      (Ye(A, e, k),
        R(e, t),
        R(e, i),
        R(e, r),
        R(e, s),
        R(e, o),
        Qe(o, n[0]),
        R(e, a),
        R(e, l),
        Qe(l, n[1]),
        R(e, c),
        R(e, u),
        R(e, f),
        R(e, d),
        Qe(d, n[2]),
        R(e, m),
        R(e, _),
        Qe(_, n[3]),
        R(e, g),
        R(e, p),
        R(e, h),
        R(e, M),
        Qe(M, n[4]),
        R(e, x),
        R(e, T),
        L ||
          ((w = [
            je(o, "input", n[6]),
            je(l, "input", n[7]),
            je(d, "input", n[8]),
            je(_, "input", n[9]),
            je(M, "input", n[10]),
            je(T, "click", n[5]),
          ]),
          (L = !0)));
    },
    p(A, [k]) {
      (k & 1 && jt(o.value) !== A[0] && Qe(o, A[0]),
        k & 2 && jt(l.value) !== A[1] && Qe(l, A[1]),
        k & 4 && jt(d.value) !== A[2] && Qe(d, A[2]),
        k & 8 && jt(_.value) !== A[3] && Qe(_, A[3]),
        k & 16 && jt(M.value) !== A[4] && Qe(M, A[4]));
    },
    i: ve,
    o: ve,
    d(A) {
      (A && Xe(e), (L = !1), kt(w));
    },
  };
}
function Jc(n, e, t) {
  let i = 0,
    r = 50,
    s = 0,
    o = 50,
    a = 1;
  function l() {
    Ls({ type: "raster_start", x_range: [i, r], y_range: [s, o], step: a });
  }
  function c() {
    ((i = jt(this.value)), t(0, i));
  }
  function u() {
    ((r = jt(this.value)), t(1, r));
  }
  function f() {
    ((s = jt(this.value)), t(2, s));
  }
  function d() {
    ((o = jt(this.value)), t(3, o));
  }
  function m() {
    ((a = jt(this.value)), t(4, a));
  }
  return [i, r, s, o, a, l, c, u, f, d, m];
}
class Qc extends ft {
  constructor(e) {
    (super(), ht(this, e, Jc, Zc, ot, {}));
  }
}
function eu(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "Heatmap"),
        (i = oe()),
        (r = V("canvas")),
        q(r, "class", "svelte-86n1hn"),
        q(e, "class", "panel svelte-86n1hn"));
    },
    m(s, o) {
      (Ye(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: ve,
    i: ve,
    o: ve,
    d(s) {
      (s && Xe(e), n[1](null));
    },
  };
}
function tu(n, e, t) {
  let i,
    r = null;
  Xs.subscribe((a) => {
    ((r = a), r && s());
  });
  function s() {
    const a = i.getContext("2d"),
      l = r.length,
      c = r[0].length;
    (t(0, (i.width = c), i), t(0, (i.height = l), i));
    const u = a.createImageData(c, l);
    function f(d) {
      const m = Math.min(255, d * 4),
        _ = 0,
        g = 255 - m;
      return [m, _, g];
    }
    for (let d = 0; d < l; d++)
      for (let m = 0; m < c; m++) {
        const _ = r[d][m],
          [g, p, h] = f(_),
          M = (d * c + m) * 4;
        ((u.data[M] = g),
          (u.data[M + 1] = p),
          (u.data[M + 2] = h),
          (u.data[M + 3] = 255));
      }
    a.putImageData(u, 0, 0);
  }
  function o(a) {
    mn[a ? "unshift" : "push"](() => {
      ((i = a), t(0, i));
    });
  }
  return [i, o];
}
class nu extends ft {
  constructor(e) {
    (super(), ht(this, e, tu, eu, ot, {}));
  }
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const qs = "160",
  iu = 0,
  ua = 1,
  ru = 2,
  ol = 1,
  su = 2,
  En = 3,
  Gn = 0,
  Wt = 1,
  dn = 2,
  Fn = 0,
  Ci = 1,
  ha = 2,
  fa = 3,
  da = 4,
  au = 5,
  jn = 100,
  ou = 101,
  lu = 102,
  pa = 103,
  ma = 104,
  cu = 200,
  uu = 201,
  hu = 202,
  fu = 203,
  Ps = 204,
  Ds = 205,
  du = 206,
  pu = 207,
  mu = 208,
  _u = 209,
  gu = 210,
  vu = 211,
  xu = 212,
  Mu = 213,
  Su = 214,
  Eu = 0,
  yu = 1,
  Tu = 2,
  Dr = 3,
  bu = 4,
  Au = 5,
  wu = 6,
  Ru = 7,
  Ys = 0,
  Cu = 1,
  Lu = 2,
  On = 0,
  Pu = 1,
  Du = 2,
  Uu = 3,
  Iu = 4,
  Nu = 5,
  Fu = 6,
  ll = 300,
  Di = 301,
  Ui = 302,
  Us = 303,
  Is = 304,
  Br = 306,
  Ns = 1e3,
  cn = 1001,
  Fs = 1002,
  zt = 1003,
  _a = 1004,
  Kr = 1005,
  en = 1006,
  Ou = 1007,
  ji = 1008,
  Bn = 1009,
  Bu = 1010,
  zu = 1011,
  js = 1012,
  cl = 1013,
  In = 1014,
  Nn = 1015,
  Ki = 1016,
  ul = 1017,
  hl = 1018,
  Jn = 1020,
  Gu = 1021,
  un = 1023,
  ku = 1024,
  Hu = 1025,
  Qn = 1026,
  Ii = 1027,
  Vu = 1028,
  fl = 1029,
  Wu = 1030,
  dl = 1031,
  pl = 1033,
  Zr = 33776,
  Jr = 33777,
  Qr = 33778,
  es = 33779,
  ga = 35840,
  va = 35841,
  xa = 35842,
  Ma = 35843,
  ml = 36196,
  Sa = 37492,
  Ea = 37496,
  ya = 37808,
  Ta = 37809,
  ba = 37810,
  Aa = 37811,
  wa = 37812,
  Ra = 37813,
  Ca = 37814,
  La = 37815,
  Pa = 37816,
  Da = 37817,
  Ua = 37818,
  Ia = 37819,
  Na = 37820,
  Fa = 37821,
  ts = 36492,
  Oa = 36494,
  Ba = 36495,
  Xu = 36283,
  za = 36284,
  Ga = 36285,
  ka = 36286,
  _l = 3e3,
  ei = 3001,
  $u = 3200,
  qu = 3201,
  gl = 0,
  Yu = 1,
  nn = "",
  Lt = "srgb",
  An = "srgb-linear",
  Ks = "display-p3",
  zr = "display-p3-linear",
  Ur = "linear",
  lt = "srgb",
  Ir = "rec709",
  Nr = "p3",
  li = 7680,
  Ha = 519,
  ju = 512,
  Ku = 513,
  Zu = 514,
  vl = 515,
  Ju = 516,
  Qu = 517,
  eh = 518,
  th = 519,
  Va = 35044,
  Wa = "300 es",
  Os = 1035,
  yn = 2e3,
  Fr = 2001;
class Fi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    (i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t));
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const Dt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  ns = Math.PI / 180,
  Bs = 180 / Math.PI;
function Zi() {
  const n = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    Dt[n & 255] +
    Dt[(n >> 8) & 255] +
    Dt[(n >> 16) & 255] +
    Dt[(n >> 24) & 255] +
    "-" +
    Dt[e & 255] +
    Dt[(e >> 8) & 255] +
    "-" +
    Dt[((e >> 16) & 15) | 64] +
    Dt[(e >> 24) & 255] +
    "-" +
    Dt[(t & 63) | 128] +
    Dt[(t >> 8) & 255] +
    "-" +
    Dt[(t >> 16) & 255] +
    Dt[(t >> 24) & 255] +
    Dt[i & 255] +
    Dt[(i >> 8) & 255] +
    Dt[(i >> 16) & 255] +
    Dt[(i >> 24) & 255]
  ).toLowerCase();
}
function Vt(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function nh(n, e) {
  return ((n % e) + e) % e;
}
function is(n, e, t) {
  return (1 - t) * n + t * e;
}
function Xa(n) {
  return (n & (n - 1)) === 0 && n !== 0;
}
function zs(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function zi(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ht(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ze {
  constructor(e = 0, t = 0) {
    ((Ze.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * i + r[6]),
      (this.y = r[1] * t + r[4] * i + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i)),
    );
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Vt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const i = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (
      (this.x = s * i - o * r + e.x),
      (this.y = s * r + o * i + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class He {
  constructor(e, t, i, r, s, o, a, l, c) {
    ((He.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, r, s, o, a, l, c));
  }
  set(e, t, i, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = i),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      r = t.elements,
      s = this.elements,
      o = i[0],
      a = i[3],
      l = i[6],
      c = i[1],
      u = i[4],
      f = i[7],
      d = i[2],
      m = i[5],
      _ = i[8],
      g = r[0],
      p = r[3],
      h = r[6],
      M = r[1],
      x = r[4],
      T = r[7],
      L = r[2],
      w = r[5],
      A = r[8];
    return (
      (s[0] = o * g + a * M + l * L),
      (s[3] = o * p + a * x + l * w),
      (s[6] = o * h + a * T + l * A),
      (s[1] = c * g + u * M + f * L),
      (s[4] = c * p + u * x + f * w),
      (s[7] = c * h + u * T + f * A),
      (s[2] = d * g + m * M + _ * L),
      (s[5] = d * p + m * x + _ * w),
      (s[8] = d * h + m * T + _ * A),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - i * s * u + i * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = u * o - a * c,
      d = a * l - u * s,
      m = c * s - o * l,
      _ = t * f + i * d + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return (
      (e[0] = f * g),
      (e[1] = (r * c - u * i) * g),
      (e[2] = (a * i - r * o) * g),
      (e[3] = d * g),
      (e[4] = (u * t - r * l) * g),
      (e[5] = (r * s - a * t) * g),
      (e[6] = m * g),
      (e[7] = (i * l - c * t) * g),
      (e[8] = (o * t - i * s) * g),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, i, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * o + c * a) + o + e,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(rs.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(rs.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(rs.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2 ?
        this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
      : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return (this.set(t, -i, 0, i, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const rs = new He();
function xl(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return !0;
  return !1;
}
function Or(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function ih() {
  const n = Or("canvas");
  return ((n.style.display = "block"), n);
}
const $a = {};
function $i(n) {
  n in $a || (($a[n] = !0), console.warn(n));
}
const qa = new He().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199,
  ),
  Ya = new He().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735,
  ),
  sr = {
    [An]: {
      transfer: Ur,
      primaries: Ir,
      toReference: (n) => n,
      fromReference: (n) => n,
    },
    [Lt]: {
      transfer: lt,
      primaries: Ir,
      toReference: (n) => n.convertSRGBToLinear(),
      fromReference: (n) => n.convertLinearToSRGB(),
    },
    [zr]: {
      transfer: Ur,
      primaries: Nr,
      toReference: (n) => n.applyMatrix3(Ya),
      fromReference: (n) => n.applyMatrix3(qa),
    },
    [Ks]: {
      transfer: lt,
      primaries: Nr,
      toReference: (n) => n.convertSRGBToLinear().applyMatrix3(Ya),
      fromReference: (n) => n.applyMatrix3(qa).convertLinearToSRGB(),
    },
  },
  rh = new Set([An, zr]),
  tt = {
    enabled: !0,
    _workingColorSpace: An,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(n) {
      if (!rh.has(n))
        throw new Error(`Unsupported working color space, "${n}".`);
      this._workingColorSpace = n;
    },
    convert: function (n, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return n;
      const i = sr[e].toReference,
        r = sr[t].fromReference;
      return r(i(n));
    },
    fromWorkingColorSpace: function (n, e) {
      return this.convert(n, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (n, e) {
      return this.convert(n, e, this._workingColorSpace);
    },
    getPrimaries: function (n) {
      return sr[n].primaries;
    },
    getTransfer: function (n) {
      return n === nn ? Ur : sr[n].transfer;
    },
  };
function Li(n) {
  return n < 0.04045 ?
      n * 0.0773993808
    : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function ss(n) {
  return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let ci;
class Ml {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      (ci === void 0 && (ci = Or("canvas")),
        (ci.width = e.width),
        (ci.height = e.height));
      const i = ci.getContext("2d");
      (e instanceof ImageData ?
        i.putImageData(e, 0, 0)
      : i.drawImage(e, 0, 0, e.width, e.height),
        (t = ci));
    }
    return t.width > 2048 || t.height > 2048 ?
        (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e,
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Or("canvas");
      ((t.width = e.width), (t.height = e.height));
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Li(s[o] / 255) * 255;
      return (i.putImageData(r, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ?
          (t[i] = Math.floor(Li(t[i] / 255) * 255))
        : (t[i] = Li(t[i]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let sh = 0;
class Sl {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: sh++ }),
      (this.uuid = Zi()),
      (this.data = e),
      (this.version = 0));
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(as(r[o].image)) : s.push(as(r[o]));
      } else s = as(r);
      i.url = s;
    }
    return (t || (e.images[this.uuid] = i), i);
  }
}
function as(n) {
  return (
    (
      (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && n instanceof ImageBitmap)
    ) ?
      Ml.getDataURL(n)
    : n.data ?
      {
        data: Array.from(n.data),
        width: n.width,
        height: n.height,
        type: n.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
  );
}
let ah = 0;
class Zt extends Fi {
  constructor(
    e = Zt.DEFAULT_IMAGE,
    t = Zt.DEFAULT_MAPPING,
    i = cn,
    r = cn,
    s = en,
    o = ji,
    a = un,
    l = Bn,
    c = Zt.DEFAULT_ANISOTROPY,
    u = nn,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: ah++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.source = new Sl(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Ze(0, 0)),
      (this.repeat = new Ze(1, 1)),
      (this.center = new Ze(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new He()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof u == "string" ?
        (this.colorSpace = u)
      : ($i(
          "THREE.Texture: Property .encoding has been replaced by .colorSpace.",
        ),
        (this.colorSpace = u === ei ? Lt : nn)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1));
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ll) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ns:
          e.x = e.x - Math.floor(e.x);
          break;
        case cn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Fs:
          Math.abs(Math.floor(e.x) % 2) === 1 ?
            (e.x = Math.ceil(e.x) - e.x)
          : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ns:
          e.y = e.y - Math.floor(e.y);
          break;
        case cn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Fs:
          Math.abs(Math.floor(e.y) % 2) === 1 ?
            (e.y = Math.ceil(e.y) - e.y)
          : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      $i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === Lt ? ei : _l
    );
  }
  set encoding(e) {
    ($i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === ei ? Lt : nn));
  }
}
Zt.DEFAULT_IMAGE = null;
Zt.DEFAULT_MAPPING = ll;
Zt.DEFAULT_ANISOTROPY = 1;
class Ct {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    ((Ct.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      (this.w = r));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, r) {
    return ((this.x = e), (this.y = t), (this.z = i), (this.w = r), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * i + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * i + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * i + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * i + o[11] * r + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4 ?
        ((this.x = 1), (this.y = 0), (this.z = 0))
      : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      f = l[8],
      d = l[1],
      m = l[5],
      _ = l[9],
      g = l[2],
      p = l[6],
      h = l[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(f - g) < 0.01 &&
      Math.abs(_ - p) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(f + g) < 0.1 &&
        Math.abs(_ + p) < 0.1 &&
        Math.abs(c + m + h - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const x = (c + 1) / 2,
        T = (m + 1) / 2,
        L = (h + 1) / 2,
        w = (u + d) / 4,
        A = (f + g) / 4,
        k = (_ + p) / 4;
      return (
        x > T && x > L ?
          x < 0.01 ?
            ((i = 0), (r = 0.707106781), (s = 0.707106781))
          : ((i = Math.sqrt(x)), (r = w / i), (s = A / i))
        : T > L ?
          T < 0.01 ?
            ((i = 0.707106781), (r = 0), (s = 0.707106781))
          : ((r = Math.sqrt(T)), (i = w / r), (s = k / r))
        : L < 0.01 ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
        : ((s = Math.sqrt(L)), (i = A / s), (r = k / s)),
        this.set(i, r, s, t),
        this
      );
    }
    let M = Math.sqrt(
      (p - _) * (p - _) + (f - g) * (f - g) + (d - u) * (d - u),
    );
    return (
      Math.abs(M) < 0.001 && (M = 1),
      (this.x = (p - _) / M),
      (this.y = (f - g) / M),
      (this.z = (d - u) / M),
      (this.w = Math.acos((c + m + h - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      (this.w = e.w + (t.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class oh extends Fi {
  constructor(e = 1, t = 1, i = {}) {
    (super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Ct(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ct(0, 0, e, t)));
    const r = { width: e, height: t, depth: 1 };
    (i.encoding !== void 0 &&
      ($i(
        "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.",
      ),
      (i.colorSpace = i.encoding === ei ? Lt : nn)),
      (i = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: en,
          depthBuffer: !0,
          stencilBuffer: !1,
          depthTexture: null,
          samples: 0,
        },
        i,
      )),
      (this.texture = new Zt(
        r,
        i.mapping,
        i.wrapS,
        i.wrapT,
        i.magFilter,
        i.minFilter,
        i.format,
        i.type,
        i.anisotropy,
        i.colorSpace,
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps = i.generateMipmaps),
      (this.texture.internalFormat = i.internalFormat),
      (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples));
  }
  setSize(e, t, i = 1) {
    ((this.width !== e || this.height !== t || this.depth !== i) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = i),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = i),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0));
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Sl(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ni extends oh {
  constructor(e = 1, t = 1, i = {}) {
    (super(e, t, i), (this.isWebGLRenderTarget = !0));
  }
}
class El extends Zt {
  constructor(e = null, t = 1, i = 1, r = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = zt),
      (this.minFilter = zt),
      (this.wrapR = cn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class lh extends Zt {
  constructor(e = null, t = 1, i = 1, r = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = zt),
      (this.minFilter = zt),
      (this.wrapR = cn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Ji {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = r));
  }
  static slerpFlat(e, t, i, r, s, o, a) {
    let l = i[r + 0],
      c = i[r + 1],
      u = i[r + 2],
      f = i[r + 3];
    const d = s[o + 0],
      m = s[o + 1],
      _ = s[o + 2],
      g = s[o + 3];
    if (a === 0) {
      ((e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f));
      return;
    }
    if (a === 1) {
      ((e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = _), (e[t + 3] = g));
      return;
    }
    if (f !== g || l !== d || c !== m || u !== _) {
      let p = 1 - a;
      const h = l * d + c * m + u * _ + f * g,
        M = h >= 0 ? 1 : -1,
        x = 1 - h * h;
      if (x > Number.EPSILON) {
        const L = Math.sqrt(x),
          w = Math.atan2(L, h * M);
        ((p = Math.sin(p * w) / L), (a = Math.sin(a * w) / L));
      }
      const T = a * M;
      if (
        ((l = l * p + d * T),
        (c = c * p + m * T),
        (u = u * p + _ * T),
        (f = f * p + g * T),
        p === 1 - a)
      ) {
        const L = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        ((l *= L), (c *= L), (u *= L), (f *= L));
      }
    }
    ((e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f));
  }
  static multiplyQuaternionsFlat(e, t, i, r, s, o) {
    const a = i[r],
      l = i[r + 1],
      c = i[r + 2],
      u = i[r + 3],
      f = s[o],
      d = s[o + 1],
      m = s[o + 2],
      _ = s[o + 3];
    return (
      (e[t] = a * _ + u * f + l * m - c * d),
      (e[t + 1] = l * _ + u * d + c * f - a * m),
      (e[t + 2] = c * _ + u * m + a * d - l * f),
      (e[t + 3] = u * _ - a * f - l * d - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, i, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const i = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(i / 2),
      u = a(r / 2),
      f = a(s / 2),
      d = l(i / 2),
      m = l(r / 2),
      _ = l(s / 2);
    switch (o) {
      case "XYZ":
        ((this._x = d * u * f + c * m * _),
          (this._y = c * m * f - d * u * _),
          (this._z = c * u * _ + d * m * f),
          (this._w = c * u * f - d * m * _));
        break;
      case "YXZ":
        ((this._x = d * u * f + c * m * _),
          (this._y = c * m * f - d * u * _),
          (this._z = c * u * _ - d * m * f),
          (this._w = c * u * f + d * m * _));
        break;
      case "ZXY":
        ((this._x = d * u * f - c * m * _),
          (this._y = c * m * f + d * u * _),
          (this._z = c * u * _ + d * m * f),
          (this._w = c * u * f - d * m * _));
        break;
      case "ZYX":
        ((this._x = d * u * f - c * m * _),
          (this._y = c * m * f + d * u * _),
          (this._z = c * u * _ - d * m * f),
          (this._w = c * u * f + d * m * _));
        break;
      case "YZX":
        ((this._x = d * u * f + c * m * _),
          (this._y = c * m * f + d * u * _),
          (this._z = c * u * _ - d * m * f),
          (this._w = c * u * f - d * m * _));
        break;
      case "XZY":
        ((this._x = d * u * f - c * m * _),
          (this._y = c * m * f - d * u * _),
          (this._z = c * u * _ + d * m * f),
          (this._w = c * u * f + d * m * _));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            o,
        );
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const i = t / 2,
      r = Math.sin(i);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      i = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      d = i + a + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      ((this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - r) * m));
    } else if (i > a && i > f) {
      const m = 2 * Math.sqrt(1 + i - a - f);
      ((this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + o) / m),
        (this._z = (s + c) / m));
    } else if (a > f) {
      const m = 2 * Math.sqrt(1 + a - i - f);
      ((this._w = (s - c) / m),
        (this._x = (r + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m));
    } else {
      const m = 2 * Math.sqrt(1 + f - i - a);
      ((this._w = (o - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON ?
        ((i = 0),
        Math.abs(e.x) > Math.abs(e.z) ?
          ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
        : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
      : ((this._x = e.y * t.z - e.z * t.y),
        (this._y = e.z * t.x - e.x * t.z),
        (this._z = e.x * t.y - e.y * t.x),
        (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Vt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const r = Math.min(1, t / i);
    return (this.slerp(e, r), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0 ?
        ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
      : ((e = 1 / e),
        (this._x = this._x * e),
        (this._y = this._y * e),
        (this._z = this._z * e),
        (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = i * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - i * c),
      (this._z = s * u + o * c + i * l - r * a),
      (this._w = o * u - i * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + i * e._x + r * e._y + s * e._z;
    if (
      (a < 0 ?
        ((this._w = -e._w),
        (this._x = -e._x),
        (this._y = -e._y),
        (this._z = -e._z),
        (a = -a))
      : this.copy(e),
      a >= 1)
    )
      return ((this._w = o), (this._x = i), (this._y = r), (this._z = s), this);
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * i + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      f = Math.sin((1 - t) * u) / c,
      d = Math.sin(t * u) / c;
    return (
      (this._w = o * f + this._w * d),
      (this._x = i * f + this._x * d),
      (this._y = r * f + this._y * d),
      (this._z = s * f + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      i = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      i * Math.sin(s),
      i * Math.cos(s),
      t * Math.sin(r),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class G {
  constructor(e = 0, t = 0, i = 0) {
    ((G.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i));
  }
  set(e, t, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(ja.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ja.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * i + s[6] * r),
      (this.y = s[1] * t + s[4] * i + s[7] * r),
      (this.z = s[2] * t + s[5] * i + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = 2 * (o * r - a * i),
      u = 2 * (a * t - s * r),
      f = 2 * (s * i - o * t);
    return (
      (this.x = t + l * c + o * f - a * u),
      (this.y = i + l * u + a * c - s * f),
      (this.z = r + l * f + s * u - o * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * i + s[8] * r),
      (this.y = s[1] * t + s[5] * i + s[9] * r),
      (this.z = s[2] * t + s[6] * i + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - i * l),
      (this.z = i * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return (os.copy(this).projectOnVector(e), this.sub(os));
  }
  reflect(e) {
    return this.sub(os.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Vt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y,
      r = this.z - e.z;
    return t * t + i * i + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(i)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = i),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = i), (this.z = r), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      i = Math.sqrt(1 - e ** 2);
    return (
      (this.x = i * Math.cos(t)),
      (this.y = i * Math.sin(t)),
      (this.z = e),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const os = new G(),
  ja = new Ji();
class Qi {
  constructor(
    e = new G(1 / 0, 1 / 0, 1 / 0),
    t = new G(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(sn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(sn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = sn.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(i), this.max.copy(e).add(i), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty() ?
        e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          (e.isMesh === !0 ?
            e.getVertexPosition(o, sn)
          : sn.fromBufferAttribute(s, o),
            sn.applyMatrix4(e.matrixWorld),
            this.expandByPoint(sn));
      else
        (e.boundingBox !== void 0 ?
          (e.boundingBox === null && e.computeBoundingBox(),
          ar.copy(e.boundingBox))
        : (i.boundingBox === null && i.computeBoundingBox(),
          ar.copy(i.boundingBox)),
          ar.applyMatrix4(e.matrixWorld),
          this.union(ar));
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, sn),
      sn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, i;
    return (
      e.normal.x > 0 ?
        ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
      : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0 ?
        ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
      : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0 ?
        ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
      : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      t <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(Gi),
      or.subVectors(this.max, Gi),
      ui.subVectors(e.a, Gi),
      hi.subVectors(e.b, Gi),
      fi.subVectors(e.c, Gi),
      Rn.subVectors(hi, ui),
      Cn.subVectors(fi, hi),
      Vn.subVectors(ui, fi));
    let t = [
      0,
      -Rn.z,
      Rn.y,
      0,
      -Cn.z,
      Cn.y,
      0,
      -Vn.z,
      Vn.y,
      Rn.z,
      0,
      -Rn.x,
      Cn.z,
      0,
      -Cn.x,
      Vn.z,
      0,
      -Vn.x,
      -Rn.y,
      Rn.x,
      0,
      -Cn.y,
      Cn.x,
      0,
      -Vn.y,
      Vn.x,
      0,
    ];
    return (
        !ls(t, ui, hi, fi, or) ||
          ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ls(t, ui, hi, fi, or))
      ) ?
        !1
      : (lr.crossVectors(Rn, Cn),
        (t = [lr.x, lr.y, lr.z]),
        ls(t, ui, hi, fi, or));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, sn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty() ?
        e.makeEmpty()
      : (this.getCenter(e.center),
        (e.radius = this.getSize(sn).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (
        (gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(gn),
        this)
      );
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const gn = [
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
  ],
  sn = new G(),
  ar = new Qi(),
  ui = new G(),
  hi = new G(),
  fi = new G(),
  Rn = new G(),
  Cn = new G(),
  Vn = new G(),
  Gi = new G(),
  or = new G(),
  lr = new G(),
  Wn = new G();
function ls(n, e, t, i, r) {
  for (let s = 0, o = n.length - 3; s <= o; s += 3) {
    Wn.fromArray(n, s);
    const a =
        r.x * Math.abs(Wn.x) + r.y * Math.abs(Wn.y) + r.z * Math.abs(Wn.z),
      l = e.dot(Wn),
      c = t.dot(Wn),
      u = i.dot(Wn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const ch = new Qi(),
  ki = new G(),
  cs = new G();
class Zs {
  constructor(e = new G(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : ch.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, i.distanceToSquared(e[s]));
    return ((this.radius = Math.sqrt(r)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      i > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty() ?
        (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    ki.subVectors(e, this.center);
    const t = ki.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t),
        r = (i - this.radius) * 0.5;
      (this.center.addScaledVector(ki, r / i), (this.radius += r));
    }
    return this;
  }
  union(e) {
    return (
      e.isEmpty() ? this
      : this.isEmpty() ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0 ?
          (this.radius = Math.max(this.radius, e.radius))
        : (cs.subVectors(e.center, this.center).setLength(e.radius),
          this.expandByPoint(ki.copy(e.center).add(cs)),
          this.expandByPoint(ki.copy(e.center).sub(cs))),
        this)
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new G(),
  us = new G(),
  cr = new G(),
  Ln = new G(),
  hs = new G(),
  ur = new G(),
  fs = new G();
class uh {
  constructor(e = new G(), t = new G(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, vn)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ?
        t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = vn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ?
        this.origin.distanceToSquared(e)
      : (vn.copy(this.origin).addScaledVector(this.direction, t),
        vn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, r) {
    (us.copy(e).add(t).multiplyScalar(0.5),
      cr.copy(t).sub(e).normalize(),
      Ln.copy(this.origin).sub(us));
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(cr),
      a = Ln.dot(this.direction),
      l = -Ln.dot(cr),
      c = Ln.lengthSq(),
      u = Math.abs(1 - o * o);
    let f, d, m, _;
    if (u > 0)
      if (((f = o * l - a), (d = o * a - l), (_ = s * u), f >= 0))
        if (d >= -_)
          if (d <= _) {
            const g = 1 / u;
            ((f *= g),
              (d *= g),
              (m = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * l) + c));
          } else
            ((d = s),
              (f = Math.max(0, -(o * d + a))),
              (m = -f * f + d * (d + 2 * l) + c));
        else
          ((d = -s),
            (f = Math.max(0, -(o * d + a))),
            (m = -f * f + d * (d + 2 * l) + c));
      else
        d <= -_ ?
          ((f = Math.max(0, -(-o * s + a))),
          (d = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
          (m = -f * f + d * (d + 2 * l) + c))
        : d <= _ ?
          ((f = 0),
          (d = Math.min(Math.max(-s, -l), s)),
          (m = d * (d + 2 * l) + c))
        : ((f = Math.max(0, -(o * s + a))),
          (d = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
          (m = -f * f + d * (d + 2 * l) + c));
    else
      ((d = o > 0 ? -s : s),
        (f = Math.max(0, -(o * d + a))),
        (m = -f * f + d * (d + 2 * l) + c));
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(us).addScaledVector(cr, d),
      m
    );
  }
  intersectSphere(e, t) {
    vn.subVectors(e.center, this.origin);
    const i = vn.dot(this.direction),
      r = vn.dot(vn) - i * i,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = i - o,
      l = i + o;
    return (
      l < 0 ? null
      : a < 0 ? this.at(l, t)
      : this.at(a, t)
    );
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0 ?
        ((i = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
      : ((i = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
      u >= 0 ?
        ((s = (e.min.y - d.y) * u), (o = (e.max.y - d.y) * u))
      : ((s = (e.max.y - d.y) * u), (o = (e.min.y - d.y) * u)),
      (
        i > o ||
        s > r ||
        ((s > i || isNaN(i)) && (i = s),
        (o < r || isNaN(r)) && (r = o),
        f >= 0 ?
          ((a = (e.min.z - d.z) * f), (l = (e.max.z - d.z) * f))
        : ((a = (e.max.z - d.z) * f), (l = (e.min.z - d.z) * f)),
        i > l || a > r) ||
        ((a > i || i !== i) && (i = a), (l < r || r !== r) && (r = l), r < 0)
      ) ?
        null
      : this.at(i >= 0 ? i : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, vn) !== null;
  }
  intersectTriangle(e, t, i, r, s) {
    (hs.subVectors(t, e), ur.subVectors(i, e), fs.crossVectors(hs, ur));
    let o = this.direction.dot(fs),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) ((a = -1), (o = -o));
    else return null;
    Ln.subVectors(this.origin, e);
    const l = a * this.direction.dot(ur.crossVectors(Ln, ur));
    if (l < 0) return null;
    const c = a * this.direction.dot(hs.cross(Ln));
    if (c < 0 || l + c > o) return null;
    const u = -a * Ln.dot(fs);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class St {
  constructor(e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p) {
    ((St.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p));
  }
  set(e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = i),
      (h[12] = r),
      (h[1] = s),
      (h[5] = o),
      (h[9] = a),
      (h[13] = l),
      (h[2] = c),
      (h[6] = u),
      (h[10] = f),
      (h[14] = d),
      (h[3] = m),
      (h[7] = _),
      (h[11] = g),
      (h[15] = p),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new St().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      (t[9] = i[9]),
      (t[10] = i[10]),
      (t[11] = i[11]),
      (t[12] = i[12]),
      (t[13] = i[13]),
      (t[14] = i[14]),
      (t[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      i = e.elements;
    return ((t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, i) {
    return (
      this.set(
        e.x,
        t.x,
        i.x,
        0,
        e.y,
        t.y,
        i.y,
        0,
        e.z,
        t.z,
        i.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      i = e.elements,
      r = 1 / di.setFromMatrixColumn(e, 0).length(),
      s = 1 / di.setFromMatrixColumn(e, 1).length(),
      o = 1 / di.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * r),
      (t[1] = i[1] * r),
      (t[2] = i[2] * r),
      (t[3] = 0),
      (t[4] = i[4] * s),
      (t[5] = i[5] * s),
      (t[6] = i[6] * s),
      (t[7] = 0),
      (t[8] = i[8] * o),
      (t[9] = i[9] * o),
      (t[10] = i[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      i = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(i),
      a = Math.sin(i),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u,
        m = o * f,
        _ = a * u,
        g = a * f;
      ((t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = m + _ * c),
        (t[5] = d - g * c),
        (t[9] = -a * l),
        (t[2] = g - d * c),
        (t[6] = _ + m * c),
        (t[10] = o * l));
    } else if (e.order === "YXZ") {
      const d = l * u,
        m = l * f,
        _ = c * u,
        g = c * f;
      ((t[0] = d + g * a),
        (t[4] = _ * a - m),
        (t[8] = o * c),
        (t[1] = o * f),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - _),
        (t[6] = g + d * a),
        (t[10] = o * l));
    } else if (e.order === "ZXY") {
      const d = l * u,
        m = l * f,
        _ = c * u,
        g = c * f;
      ((t[0] = d - g * a),
        (t[4] = -o * f),
        (t[8] = _ + m * a),
        (t[1] = m + _ * a),
        (t[5] = o * u),
        (t[9] = g - d * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l));
    } else if (e.order === "ZYX") {
      const d = o * u,
        m = o * f,
        _ = a * u,
        g = a * f;
      ((t[0] = l * u),
        (t[4] = _ * c - m),
        (t[8] = d * c + g),
        (t[1] = l * f),
        (t[5] = g * c + d),
        (t[9] = m * c - _),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l));
    } else if (e.order === "YZX") {
      const d = o * l,
        m = o * c,
        _ = a * l,
        g = a * c;
      ((t[0] = l * u),
        (t[4] = g - d * f),
        (t[8] = _ * f + m),
        (t[1] = f),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * f + _),
        (t[10] = d - g * f));
    } else if (e.order === "XZY") {
      const d = o * l,
        m = o * c,
        _ = a * l,
        g = a * c;
      ((t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = d * f + g),
        (t[5] = o * u),
        (t[9] = m * f - _),
        (t[2] = _ * f - m),
        (t[6] = a * u),
        (t[10] = g * f + d));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(hh, e, fh);
  }
  lookAt(e, t, i) {
    const r = this.elements;
    return (
      $t.subVectors(e, t),
      $t.lengthSq() === 0 && ($t.z = 1),
      $t.normalize(),
      Pn.crossVectors(i, $t),
      Pn.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? ($t.x += 1e-4) : ($t.z += 1e-4),
        $t.normalize(),
        Pn.crossVectors(i, $t)),
      Pn.normalize(),
      hr.crossVectors($t, Pn),
      (r[0] = Pn.x),
      (r[4] = hr.x),
      (r[8] = $t.x),
      (r[1] = Pn.y),
      (r[5] = hr.y),
      (r[9] = $t.y),
      (r[2] = Pn.z),
      (r[6] = hr.z),
      (r[10] = $t.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      r = t.elements,
      s = this.elements,
      o = i[0],
      a = i[4],
      l = i[8],
      c = i[12],
      u = i[1],
      f = i[5],
      d = i[9],
      m = i[13],
      _ = i[2],
      g = i[6],
      p = i[10],
      h = i[14],
      M = i[3],
      x = i[7],
      T = i[11],
      L = i[15],
      w = r[0],
      A = r[4],
      k = r[8],
      S = r[12],
      b = r[1],
      W = r[5],
      j = r[9],
      re = r[13],
      P = r[2],
      I = r[6],
      B = r[10],
      X = r[14],
      $ = r[3],
      K = r[7],
      Y = r[11],
      te = r[15];
    return (
      (s[0] = o * w + a * b + l * P + c * $),
      (s[4] = o * A + a * W + l * I + c * K),
      (s[8] = o * k + a * j + l * B + c * Y),
      (s[12] = o * S + a * re + l * X + c * te),
      (s[1] = u * w + f * b + d * P + m * $),
      (s[5] = u * A + f * W + d * I + m * K),
      (s[9] = u * k + f * j + d * B + m * Y),
      (s[13] = u * S + f * re + d * X + m * te),
      (s[2] = _ * w + g * b + p * P + h * $),
      (s[6] = _ * A + g * W + p * I + h * K),
      (s[10] = _ * k + g * j + p * B + h * Y),
      (s[14] = _ * S + g * re + p * X + h * te),
      (s[3] = M * w + x * b + T * P + L * $),
      (s[7] = M * A + x * W + T * I + L * K),
      (s[11] = M * k + x * j + T * B + L * Y),
      (s[15] = M * S + x * re + T * X + L * te),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[4],
      r = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      f = e[6],
      d = e[10],
      m = e[14],
      _ = e[3],
      g = e[7],
      p = e[11],
      h = e[15];
    return (
      _ *
        (+s * l * f -
          r * c * f -
          s * a * d +
          i * c * d +
          r * a * m -
          i * l * m) +
      g *
        (+t * l * m -
          t * c * d +
          s * o * d -
          r * o * m +
          r * c * u -
          s * l * u) +
      p *
        (+t * c * f -
          t * a * m -
          s * o * f +
          i * o * m +
          s * a * u -
          i * c * u) +
      h *
        (-r * a * u - t * l * f + t * a * d + r * o * f - i * o * d + i * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, i) {
    const r = this.elements;
    return (
      e.isVector3 ?
        ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
      : ((r[12] = e), (r[13] = t), (r[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = e[9],
      d = e[10],
      m = e[11],
      _ = e[12],
      g = e[13],
      p = e[14],
      h = e[15],
      M = f * p * c - g * d * c + g * l * m - a * p * m - f * l * h + a * d * h,
      x = _ * d * c - u * p * c - _ * l * m + o * p * m + u * l * h - o * d * h,
      T = u * g * c - _ * f * c + _ * a * m - o * g * m - u * a * h + o * f * h,
      L = _ * f * l - u * g * l - _ * a * d + o * g * d + u * a * p - o * f * p,
      w = t * M + i * x + r * T + s * L;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / w;
    return (
      (e[0] = M * A),
      (e[1] =
        (g * d * s -
          f * p * s -
          g * r * m +
          i * p * m +
          f * r * h -
          i * d * h) *
        A),
      (e[2] =
        (a * p * s -
          g * l * s +
          g * r * c -
          i * p * c -
          a * r * h +
          i * l * h) *
        A),
      (e[3] =
        (f * l * s -
          a * d * s -
          f * r * c +
          i * d * c +
          a * r * m -
          i * l * m) *
        A),
      (e[4] = x * A),
      (e[5] =
        (u * p * s -
          _ * d * s +
          _ * r * m -
          t * p * m -
          u * r * h +
          t * d * h) *
        A),
      (e[6] =
        (_ * l * s -
          o * p * s -
          _ * r * c +
          t * p * c +
          o * r * h -
          t * l * h) *
        A),
      (e[7] =
        (o * d * s -
          u * l * s +
          u * r * c -
          t * d * c -
          o * r * m +
          t * l * m) *
        A),
      (e[8] = T * A),
      (e[9] =
        (_ * f * s -
          u * g * s -
          _ * i * m +
          t * g * m +
          u * i * h -
          t * f * h) *
        A),
      (e[10] =
        (o * g * s -
          _ * a * s +
          _ * i * c -
          t * g * c -
          o * i * h +
          t * a * h) *
        A),
      (e[11] =
        (u * a * s -
          o * f * s -
          u * i * c +
          t * f * c +
          o * i * m -
          t * a * m) *
        A),
      (e[12] = L * A),
      (e[13] =
        (u * g * r -
          _ * f * r +
          _ * i * d -
          t * g * d -
          u * i * p +
          t * f * p) *
        A),
      (e[14] =
        (_ * a * r -
          o * g * r -
          _ * i * l +
          t * g * l +
          o * i * p -
          t * a * p) *
        A),
      (e[15] =
        (o * f * r -
          u * a * r +
          u * i * l -
          t * f * l -
          o * i * d +
          t * a * d) *
        A),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      i = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= i),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= i),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= i),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= i),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, r));
  }
  makeTranslation(e, t, i) {
    return (
      e.isVector3 ?
        this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
      : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return (this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return (this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t),
      r = Math.sin(t),
      s = 1 - i,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + i,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + i,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + i,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, i) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, i, r, s, o) {
    return (this.set(1, i, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, i) {
    const r = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      f = a + a,
      d = s * c,
      m = s * u,
      _ = s * f,
      g = o * u,
      p = o * f,
      h = a * f,
      M = l * c,
      x = l * u,
      T = l * f,
      L = i.x,
      w = i.y,
      A = i.z;
    return (
      (r[0] = (1 - (g + h)) * L),
      (r[1] = (m + T) * L),
      (r[2] = (_ - x) * L),
      (r[3] = 0),
      (r[4] = (m - T) * w),
      (r[5] = (1 - (d + h)) * w),
      (r[6] = (p + M) * w),
      (r[7] = 0),
      (r[8] = (_ + x) * A),
      (r[9] = (p - M) * A),
      (r[10] = (1 - (d + g)) * A),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, i) {
    const r = this.elements;
    let s = di.set(r[0], r[1], r[2]).length();
    const o = di.set(r[4], r[5], r[6]).length(),
      a = di.set(r[8], r[9], r[10]).length();
    (this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      an.copy(this));
    const c = 1 / s,
      u = 1 / o,
      f = 1 / a;
    return (
      (an.elements[0] *= c),
      (an.elements[1] *= c),
      (an.elements[2] *= c),
      (an.elements[4] *= u),
      (an.elements[5] *= u),
      (an.elements[6] *= u),
      (an.elements[8] *= f),
      (an.elements[9] *= f),
      (an.elements[10] *= f),
      t.setFromRotationMatrix(an),
      (i.x = s),
      (i.y = o),
      (i.z = a),
      this
    );
  }
  makePerspective(e, t, i, r, s, o, a = yn) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (i - r),
      f = (t + e) / (t - e),
      d = (i + r) / (i - r);
    let m, _;
    if (a === yn) ((m = -(o + s) / (o - s)), (_ = (-2 * o * s) / (o - s)));
    else if (a === Fr) ((m = -o / (o - s)), (_ = (-o * s) / (o - s)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a,
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = d),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = _),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, r, s, o, a = yn) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (i - r),
      f = 1 / (o - s),
      d = (t + e) * c,
      m = (i + r) * u;
    let _, g;
    if (a === yn) ((_ = (o + s) * f), (g = -2 * f));
    else if (a === Fr) ((_ = s * f), (g = -1 * f));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a,
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -d),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = -_),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      (e[t + 9] = i[9]),
      (e[t + 10] = i[10]),
      (e[t + 11] = i[11]),
      (e[t + 12] = i[12]),
      (e[t + 13] = i[13]),
      (e[t + 14] = i[14]),
      (e[t + 15] = i[15]),
      e
    );
  }
}
const di = new G(),
  an = new St(),
  hh = new G(0, 0, 0),
  fh = new G(1, 1, 1),
  Pn = new G(),
  hr = new G(),
  $t = new G(),
  Ka = new St(),
  Za = new Ji();
class Gr {
  constructor(e = 0, t = 0, i = 0, r = Gr.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = r));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, i, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const r = e.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      f = r[2],
      d = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(Vt(a, -1, 1))),
          Math.abs(a) < 0.9999999 ?
            ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
          : ((this._x = Math.atan2(d, c)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Vt(u, -1, 1))),
          Math.abs(u) < 0.9999999 ?
            ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
          : ((this._y = Math.atan2(-f, s)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Vt(d, -1, 1))),
          Math.abs(d) < 0.9999999 ?
            ((this._y = Math.atan2(-f, m)), (this._z = Math.atan2(-o, c)))
          : ((this._y = 0), (this._z = Math.atan2(l, s))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Vt(f, -1, 1))),
          Math.abs(f) < 0.9999999 ?
            ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(l, s)))
          : ((this._x = 0), (this._z = Math.atan2(-o, c))));
        break;
      case "YZX":
        ((this._z = Math.asin(Vt(l, -1, 1))),
          Math.abs(l) < 0.9999999 ?
            ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
          : ((this._x = 0), (this._y = Math.atan2(a, m))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Vt(o, -1, 1))),
          Math.abs(o) < 0.9999999 ?
            ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(a, s)))
          : ((this._x = Math.atan2(-u, m)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return ((this._order = t), i === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, i) {
    return (
      Ka.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(Ka, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (Za.setFromEuler(this), this.setFromQuaternion(Za, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
Gr.DEFAULT_ORDER = "XYZ";
class yl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let dh = 0;
const Ja = new G(),
  pi = new Ji(),
  xn = new St(),
  fr = new G(),
  Hi = new G(),
  ph = new G(),
  mh = new Ji(),
  Qa = new G(1, 0, 0),
  eo = new G(0, 1, 0),
  to = new G(0, 0, 1),
  _h = { type: "added" },
  gh = { type: "removed" };
class It extends Fi {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: dh++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = It.DEFAULT_UP.clone()));
    const e = new G(),
      t = new Gr(),
      i = new Ji(),
      r = new G(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(i, void 0, !1);
    }
    (t._onChange(s),
      i._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new St() },
        normalMatrix: { value: new He() },
      }),
      (this.matrix = new St()),
      (this.matrixWorld = new St()),
      (this.matrixAutoUpdate = It.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new yl()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (pi.setFromAxisAngle(e, t), this.quaternion.multiply(pi), this);
  }
  rotateOnWorldAxis(e, t) {
    return (pi.setFromAxisAngle(e, t), this.quaternion.premultiply(pi), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(Qa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(eo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(to, e);
  }
  translateOnAxis(e, t) {
    return (
      Ja.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ja.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Qa, e);
  }
  translateY(e) {
    return this.translateOnAxis(eo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(to, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(xn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, i) {
    e.isVector3 ? fr.copy(e) : fr.set(e, t, i);
    const r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Hi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ?
        xn.lookAt(Hi, fr, this.up)
      : xn.lookAt(fr, Hi, this.up),
      this.quaternion.setFromRotationMatrix(xn),
      r &&
        (xn.extractRotation(r.matrixWorld),
        pi.setFromRotationMatrix(xn),
        this.quaternion.premultiply(pi.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ?
        (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D ?
          (e.parent !== null && e.parent.remove(e),
          (e.parent = this),
          this.children.push(e),
          e.dispatchEvent(_h))
        : console.error(
            "THREE.Object3D.add: object not an instance of THREE.Object3D.",
            e,
          ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(gh)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      xn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), xn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(xn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++)
      r[s].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Hi, e, ph),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Hi, mh, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null ?
          this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix,
          ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (e === !0 &&
        i !== null &&
        i.matrixWorldAutoUpdate === !0 &&
        i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null ?
        this.matrixWorld.copy(this.matrix)
      : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      i = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    ((r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((a) => ({
          boxInitialized: a.boxInitialized,
          boxMin: a.box.min.toArray(),
          boxMax: a.box.max.toArray(),
          sphereInitialized: a.sphereInitialized,
          sphereRadius: a.sphere.radius,
          sphereCenter: a.sphere.center.toArray(),
        }))),
        (r.maxGeometryCount = this._maxGeometryCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          })));
    function s(a, l) {
      return (a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor ?
          (r.background = this.background.toJSON())
        : this.background.isTexture &&
          (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        f = o(e.shapes),
        d = o(e.skeletons),
        m = o(e.animations),
        _ = o(e.nodes);
      (a.length > 0 && (i.geometries = a),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        u.length > 0 && (i.images = u),
        f.length > 0 && (i.shapes = f),
        d.length > 0 && (i.skeletons = d),
        m.length > 0 && (i.animations = m),
        _.length > 0 && (i.nodes = _));
    }
    return ((i.object = r), i);
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        (delete u.metadata, l.push(u));
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
It.DEFAULT_UP = new G(0, 1, 0);
It.DEFAULT_MATRIX_AUTO_UPDATE = !0;
It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const on = new G(),
  Mn = new G(),
  ds = new G(),
  Sn = new G(),
  mi = new G(),
  _i = new G(),
  no = new G(),
  ps = new G(),
  ms = new G(),
  _s = new G();
let dr = !1;
class ln {
  constructor(e = new G(), t = new G(), i = new G()) {
    ((this.a = e), (this.b = t), (this.c = i));
  }
  static getNormal(e, t, i, r) {
    (r.subVectors(i, t), on.subVectors(e, t), r.cross(on));
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, r, s) {
    (on.subVectors(r, t), Mn.subVectors(i, t), ds.subVectors(e, t));
    const o = on.dot(on),
      a = on.dot(Mn),
      l = on.dot(ds),
      c = Mn.dot(Mn),
      u = Mn.dot(ds),
      f = o * c - a * a;
    if (f === 0) return (s.set(0, 0, 0), null);
    const d = 1 / f,
      m = (c * l - a * u) * d,
      _ = (o * u - a * l) * d;
    return s.set(1 - m - _, _, m);
  }
  static containsPoint(e, t, i, r) {
    return this.getBarycoord(e, t, i, r, Sn) === null ?
        !1
      : Sn.x >= 0 && Sn.y >= 0 && Sn.x + Sn.y <= 1;
  }
  static getUV(e, t, i, r, s, o, a, l) {
    return (
      dr === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().",
        ),
        (dr = !0)),
      this.getInterpolation(e, t, i, r, s, o, a, l)
    );
  }
  static getInterpolation(e, t, i, r, s, o, a, l) {
    return this.getBarycoord(e, t, i, r, Sn) === null ?
        ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, Sn.x),
        l.addScaledVector(o, Sn.y),
        l.addScaledVector(a, Sn.z),
        l);
  }
  static isFrontFacing(e, t, i, r) {
    return (on.subVectors(i, t), Mn.subVectors(e, t), on.cross(Mn).dot(r) < 0);
  }
  set(e, t, i) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(i), this);
  }
  setFromPointsAndIndices(e, t, i, r) {
    return (this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this);
  }
  setFromAttributeAndIndices(e, t, i, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      on.subVectors(this.c, this.b),
      Mn.subVectors(this.a, this.b),
      on.cross(Mn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return ln.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return ln.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, i, r, s) {
    return (
      dr === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().",
        ),
        (dr = !0)),
      ln.getInterpolation(e, this.a, this.b, this.c, t, i, r, s)
    );
  }
  getInterpolation(e, t, i, r, s) {
    return ln.getInterpolation(e, this.a, this.b, this.c, t, i, r, s);
  }
  containsPoint(e) {
    return ln.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return ln.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    (mi.subVectors(r, i), _i.subVectors(s, i), ps.subVectors(e, i));
    const l = mi.dot(ps),
      c = _i.dot(ps);
    if (l <= 0 && c <= 0) return t.copy(i);
    ms.subVectors(e, r);
    const u = mi.dot(ms),
      f = _i.dot(ms);
    if (u >= 0 && f <= u) return t.copy(r);
    const d = l * f - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return ((o = l / (l - u)), t.copy(i).addScaledVector(mi, o));
    _s.subVectors(e, s);
    const m = mi.dot(_s),
      _ = _i.dot(_s);
    if (_ >= 0 && m <= _) return t.copy(s);
    const g = m * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return ((a = c / (c - _)), t.copy(i).addScaledVector(_i, a));
    const p = u * _ - m * f;
    if (p <= 0 && f - u >= 0 && m - _ >= 0)
      return (
        no.subVectors(s, r),
        (a = (f - u) / (f - u + (m - _))),
        t.copy(r).addScaledVector(no, a)
      );
    const h = 1 / (p + g + d);
    return (
      (o = g * h),
      (a = d * h),
      t.copy(i).addScaledVector(mi, o).addScaledVector(_i, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Tl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Dn = { h: 0, s: 0, l: 0 },
  pr = { h: 0, s: 0, l: 0 };
function gs(n, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? n + (e - n) * 6 * t
    : t < 1 / 2 ? e
    : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t)
    : n
  );
}
class Ke {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, i)
    );
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r)
      : typeof r == "number" ? this.setHex(r)
      : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = Lt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      tt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, r = tt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      tt.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, i, r = tt.workingColorSpace) {
    if (((e = nh(e, 1)), (t = Vt(t, 0, 1)), (i = Vt(i, 0, 1)), t === 0))
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        o = 2 * i - s;
      ((this.r = gs(o, s, e + 1 / 3)),
        (this.g = gs(o, s, e)),
        (this.b = gs(o, s, e - 1 / 3)));
    }
    return (tt.toWorkingColorSpace(this, r), this);
  }
  setStyle(e, t = Lt) {
    function i(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              i(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t,
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              i(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              i(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t,
        );
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Lt) {
    const i = Tl[e.toLowerCase()];
    return (
      i !== void 0 ?
        this.setHex(i, t)
      : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = Li(e.r)), (this.g = Li(e.g)), (this.b = Li(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = ss(e.r)), (this.g = ss(e.g)), (this.b = ss(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = Lt) {
    return (
      tt.fromWorkingColorSpace(Ut.copy(this), e),
      Math.round(Vt(Ut.r * 255, 0, 255)) * 65536 +
        Math.round(Vt(Ut.g * 255, 0, 255)) * 256 +
        Math.round(Vt(Ut.b * 255, 0, 255))
    );
  }
  getHexString(e = Lt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = tt.workingColorSpace) {
    tt.fromWorkingColorSpace(Ut.copy(this), t);
    const i = Ut.r,
      r = Ut.g,
      s = Ut.b,
      o = Math.max(i, r, s),
      a = Math.min(i, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) ((l = 0), (c = 0));
    else {
      const f = o - a;
      switch (((c = u <= 0.5 ? f / (o + a) : f / (2 - o - a)), o)) {
        case i:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / f + 2;
          break;
        case s:
          l = (i - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return ((e.h = l), (e.s = c), (e.l = u), e);
  }
  getRGB(e, t = tt.workingColorSpace) {
    return (
      tt.fromWorkingColorSpace(Ut.copy(this), t),
      (e.r = Ut.r),
      (e.g = Ut.g),
      (e.b = Ut.b),
      e
    );
  }
  getStyle(e = Lt) {
    tt.fromWorkingColorSpace(Ut.copy(this), e);
    const t = Ut.r,
      i = Ut.g,
      r = Ut.b;
    return e !== Lt ?
        `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, i) {
    return (this.getHSL(Dn), this.setHSL(Dn.h + e, Dn.s + t, Dn.l + i));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, i) {
    return (
      (this.r = e.r + (t.r - e.r) * i),
      (this.g = e.g + (t.g - e.g) * i),
      (this.b = e.b + (t.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(Dn), e.getHSL(pr));
    const i = is(Dn.h, pr.h, t),
      r = is(Dn.s, pr.s, t),
      s = is(Dn.l, pr.l, t);
    return (this.setHSL(i, r, s), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      i = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * i + s[6] * r),
      (this.g = s[1] * t + s[4] * i + s[7] * r),
      (this.b = s[2] * t + s[5] * i + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const Ut = new Ke();
Ke.NAMES = Tl;
let vh = 0;
class er extends Fi {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: vh++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Ci),
      (this.side = Gn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Ps),
      (this.blendDst = Ds),
      (this.blendEquation = jn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ke(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Dr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Ha),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = li),
      (this.stencilZFail = li),
      (this.stencilZPass = li),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        r && r.isColor ? r.set(i)
        : r && r.isVector3 && i && i.isVector3 ? r.copy(i)
        : (this[t] = i);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Ci && (i.blending = this.blending),
      this.side !== Gn && (i.side = this.side),
      this.vertexColors === !0 && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = !0),
      this.blendSrc !== Ps && (i.blendSrc = this.blendSrc),
      this.blendDst !== Ds && (i.blendDst = this.blendDst),
      this.blendEquation !== jn && (i.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (i.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
      this.depthFunc !== Dr && (i.depthFunc = this.depthFunc),
      this.depthTest === !1 && (i.depthTest = this.depthTest),
      this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (i.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Ha && (i.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (i.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== li && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== li && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== li && (i.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (i.alphaHash = !0),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (i.forceSinglePass = !0),
      this.wireframe === !0 && (i.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = !0),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData));
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        (delete l.metadata, o.push(l));
      }
      return o;
    }
    if (t) {
      const s = r(e.textures),
        o = r(e.images);
      (s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o));
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const r = t.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s) i[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class bl extends er {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ke(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ys),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const vt = new G(),
  mr = new Ze();
class pn {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = i),
      (this.usage = Va),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = Nn),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      console.warn(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.",
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, i) {
    ((e *= this.itemSize), (i *= t.itemSize));
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        (mr.fromBufferAttribute(this, t),
          mr.applyMatrix3(e),
          this.setXY(t, mr.x, mr.y));
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        (vt.fromBufferAttribute(this, t),
          vt.applyMatrix3(e),
          this.setXYZ(t, vt.x, vt.y, vt.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      (vt.fromBufferAttribute(this, t),
        vt.applyMatrix4(e),
        this.setXYZ(t, vt.x, vt.y, vt.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      (vt.fromBufferAttribute(this, t),
        vt.applyNormalMatrix(e),
        this.setXYZ(t, vt.x, vt.y, vt.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      (vt.fromBufferAttribute(this, t),
        vt.transformDirection(e),
        this.setXYZ(t, vt.x, vt.y, vt.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return (this.normalized && (i = zi(i, this.array)), i);
  }
  setComponent(e, t, i) {
    return (
      this.normalized && (i = Ht(i, this.array)),
      (this.array[e * this.itemSize + t] = i),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = zi(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = Ht(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = zi(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = Ht(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = zi(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Ht(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = zi(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = Ht(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Ht(t, this.array)), (i = Ht(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ht(t, this.array)),
        (i = Ht(i, this.array)),
        (r = Ht(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, i, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ht(t, this.array)),
        (i = Ht(i, this.array)),
        (r = Ht(r, this.array)),
        (s = Ht(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Va && (e.usage = this.usage),
      e
    );
  }
}
class Al extends pn {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class wl extends pn {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class zn extends pn {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let xh = 0;
const Qt = new St(),
  vs = new It(),
  gi = new G(),
  qt = new Qi(),
  Vi = new Qi(),
  wt = new G();
class si extends Fi {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: xh++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e) ?
        (this.index = new (xl(e) ? wl : Al)(e, 1))
      : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new He().getNormalMatrix(e);
      (i.applyNormalMatrix(s), (i.needsUpdate = !0));
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (Qt.makeRotationFromQuaternion(e), this.applyMatrix4(Qt), this);
  }
  rotateX(e) {
    return (Qt.makeRotationX(e), this.applyMatrix4(Qt), this);
  }
  rotateY(e) {
    return (Qt.makeRotationY(e), this.applyMatrix4(Qt), this);
  }
  rotateZ(e) {
    return (Qt.makeRotationZ(e), this.applyMatrix4(Qt), this);
  }
  translate(e, t, i) {
    return (Qt.makeTranslation(e, t, i), this.applyMatrix4(Qt), this);
  }
  scale(e, t, i) {
    return (Qt.makeScale(e, t, i), this.applyMatrix4(Qt), this);
  }
  lookAt(e) {
    return (
      vs.lookAt(e),
      vs.updateMatrix(),
      this.applyMatrix4(vs.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(gi).negate(),
      this.translate(gi.x, gi.y, gi.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      t.push(s.x, s.y, s.z || 0);
    }
    return (this.setAttribute("position", new zn(t, 3)), this);
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Qi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this,
      ),
        this.boundingBox.set(
          new G(-1 / 0, -1 / 0, -1 / 0),
          new G(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          (qt.setFromBufferAttribute(s),
            this.morphTargetsRelative ?
              (wt.addVectors(this.boundingBox.min, qt.min),
              this.boundingBox.expandByPoint(wt),
              wt.addVectors(this.boundingBox.max, qt.max),
              this.boundingBox.expandByPoint(wt))
            : (this.boundingBox.expandByPoint(qt.min),
              this.boundingBox.expandByPoint(qt.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Zs());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this,
      ),
        this.boundingSphere.set(new G(), 1 / 0));
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((qt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          (Vi.setFromBufferAttribute(a),
            this.morphTargetsRelative ?
              (wt.addVectors(qt.min, Vi.min),
              qt.expandByPoint(wt),
              wt.addVectors(qt.max, Vi.max),
              qt.expandByPoint(wt))
            : (qt.expandByPoint(Vi.min), qt.expandByPoint(Vi.max)));
        }
      qt.getCenter(i);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        (wt.fromBufferAttribute(e, s),
          (r = Math.max(r, i.distanceToSquared(wt))));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            (wt.fromBufferAttribute(a, c),
              l && (gi.fromBufferAttribute(e, c), wt.add(gi)),
              (r = Math.max(r, i.distanceToSquared(wt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const i = e.array,
      r = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = r.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new pn(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let b = 0; b < a; b++) ((c[b] = new G()), (u[b] = new G()));
    const f = new G(),
      d = new G(),
      m = new G(),
      _ = new Ze(),
      g = new Ze(),
      p = new Ze(),
      h = new G(),
      M = new G();
    function x(b, W, j) {
      (f.fromArray(r, b * 3),
        d.fromArray(r, W * 3),
        m.fromArray(r, j * 3),
        _.fromArray(o, b * 2),
        g.fromArray(o, W * 2),
        p.fromArray(o, j * 2),
        d.sub(f),
        m.sub(f),
        g.sub(_),
        p.sub(_));
      const re = 1 / (g.x * p.y - p.x * g.y);
      isFinite(re) &&
        (h
          .copy(d)
          .multiplyScalar(p.y)
          .addScaledVector(m, -g.y)
          .multiplyScalar(re),
        M.copy(m)
          .multiplyScalar(g.x)
          .addScaledVector(d, -p.x)
          .multiplyScalar(re),
        c[b].add(h),
        c[W].add(h),
        c[j].add(h),
        u[b].add(M),
        u[W].add(M),
        u[j].add(M));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: i.length }]);
    for (let b = 0, W = T.length; b < W; ++b) {
      const j = T[b],
        re = j.start,
        P = j.count;
      for (let I = re, B = re + P; I < B; I += 3)
        x(i[I + 0], i[I + 1], i[I + 2]);
    }
    const L = new G(),
      w = new G(),
      A = new G(),
      k = new G();
    function S(b) {
      (A.fromArray(s, b * 3), k.copy(A));
      const W = c[b];
      (L.copy(W),
        L.sub(A.multiplyScalar(A.dot(W))).normalize(),
        w.crossVectors(k, W));
      const re = w.dot(u[b]) < 0 ? -1 : 1;
      ((l[b * 4] = L.x),
        (l[b * 4 + 1] = L.y),
        (l[b * 4 + 2] = L.z),
        (l[b * 4 + 3] = re));
    }
    for (let b = 0, W = T.length; b < W; ++b) {
      const j = T[b],
        re = j.start,
        P = j.count;
      for (let I = re, B = re + P; I < B; I += 3)
        (S(i[I + 0]), S(i[I + 1]), S(i[I + 2]));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        ((i = new pn(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", i));
      else for (let d = 0, m = i.count; d < m; d++) i.setXYZ(d, 0, 0, 0);
      const r = new G(),
        s = new G(),
        o = new G(),
        a = new G(),
        l = new G(),
        c = new G(),
        u = new G(),
        f = new G();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const _ = e.getX(d + 0),
            g = e.getX(d + 1),
            p = e.getX(d + 2);
          (r.fromBufferAttribute(t, _),
            s.fromBufferAttribute(t, g),
            o.fromBufferAttribute(t, p),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            a.fromBufferAttribute(i, _),
            l.fromBufferAttribute(i, g),
            c.fromBufferAttribute(i, p),
            a.add(u),
            l.add(u),
            c.add(u),
            i.setXYZ(_, a.x, a.y, a.z),
            i.setXYZ(g, l.x, l.y, l.z),
            i.setXYZ(p, c.x, c.y, c.z));
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          (r.fromBufferAttribute(t, d + 0),
            s.fromBufferAttribute(t, d + 1),
            o.fromBufferAttribute(t, d + 2),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            i.setXYZ(d + 0, u.x, u.y, u.z),
            i.setXYZ(d + 1, u.x, u.y, u.z),
            i.setXYZ(d + 2, u.x, u.y, u.z));
      (this.normalizeNormals(), (i.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      (wt.fromBufferAttribute(e, t),
        wt.normalize(),
        e.setXYZ(t, wt.x, wt.y, wt.z));
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        f = a.normalized,
        d = new c.constructor(l.length * u);
      let m = 0,
        _ = 0;
      for (let g = 0, p = l.length; g < p; g++) {
        a.isInterleavedBufferAttribute ?
          (m = l[g] * a.data.stride + a.offset)
        : (m = l[g] * u);
        for (let h = 0; h < u; h++) d[_++] = c[m++];
      }
      return new pn(d, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new si(),
      i = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, i);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u],
          m = e(d, i);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        f = s[c];
      for (let d = 0, m = f.length; d < m; d++) u.push(f[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const io = new St(),
  Xn = new uh(),
  _r = new Zs(),
  ro = new G(),
  vi = new G(),
  xi = new G(),
  Mi = new G(),
  xs = new G(),
  gr = new G(),
  vr = new Ze(),
  xr = new Ze(),
  Mr = new Ze(),
  so = new G(),
  ao = new G(),
  oo = new G(),
  Sr = new G(),
  Er = new G();
class Tn extends It {
  constructor(e = new si(), t = new bl()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material =
        Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry,
      r = i.attributes.position,
      s = i.morphAttributes.position,
      o = i.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      gr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          f = s[l];
        u !== 0 &&
          (xs.fromBufferAttribute(f, e),
          o ? gr.addScaledVector(xs, u) : gr.addScaledVector(xs.sub(t), u));
      }
      t.add(gr);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (i.boundingSphere === null && i.computeBoundingSphere(),
      _r.copy(i.boundingSphere),
      _r.applyMatrix4(s),
      Xn.copy(e.ray).recast(e.near),
      !(
        _r.containsPoint(Xn.origin) === !1 &&
        (Xn.intersectSphere(_r, ro) === null ||
          Xn.origin.distanceToSquared(ro) > (e.far - e.near) ** 2)
      ) &&
        (io.copy(s).invert(),
        Xn.copy(e.ray).applyMatrix4(io),
        !(i.boundingBox !== null && Xn.intersectsBox(i.boundingBox) === !1) &&
          this._computeIntersections(e, t, Xn)));
  }
  _computeIntersections(e, t, i) {
    let r;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      f = s.attributes.normal,
      d = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const p = d[_],
            h = o[p.materialIndex],
            M = Math.max(p.start, m.start),
            x = Math.min(
              a.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let T = M, L = x; T < L; T += 3) {
            const w = a.getX(T),
              A = a.getX(T + 1),
              k = a.getX(T + 2);
            ((r = yr(this, h, e, i, c, u, f, w, A, k)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r)));
          }
        }
      else {
        const _ = Math.max(0, m.start),
          g = Math.min(a.count, m.start + m.count);
        for (let p = _, h = g; p < h; p += 3) {
          const M = a.getX(p),
            x = a.getX(p + 1),
            T = a.getX(p + 2);
          ((r = yr(this, o, e, i, c, u, f, M, x, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r)));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const p = d[_],
            h = o[p.materialIndex],
            M = Math.max(p.start, m.start),
            x = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let T = M, L = x; T < L; T += 3) {
            const w = T,
              A = T + 1,
              k = T + 2;
            ((r = yr(this, h, e, i, c, u, f, w, A, k)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r)));
          }
        }
      else {
        const _ = Math.max(0, m.start),
          g = Math.min(l.count, m.start + m.count);
        for (let p = _, h = g; p < h; p += 3) {
          const M = p,
            x = p + 1,
            T = p + 2;
          ((r = yr(this, o, e, i, c, u, f, M, x, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r)));
        }
      }
  }
}
function Mh(n, e, t, i, r, s, o, a) {
  let l;
  if (
    (e.side === Wt ?
      (l = i.intersectTriangle(o, s, r, !0, a))
    : (l = i.intersectTriangle(r, s, o, e.side === Gn, a)),
    l === null)
  )
    return null;
  (Er.copy(a), Er.applyMatrix4(n.matrixWorld));
  const c = t.ray.origin.distanceTo(Er);
  return c < t.near || c > t.far ?
      null
    : { distance: c, point: Er.clone(), object: n };
}
function yr(n, e, t, i, r, s, o, a, l, c) {
  (n.getVertexPosition(a, vi),
    n.getVertexPosition(l, xi),
    n.getVertexPosition(c, Mi));
  const u = Mh(n, e, t, i, vi, xi, Mi, Sr);
  if (u) {
    (r &&
      (vr.fromBufferAttribute(r, a),
      xr.fromBufferAttribute(r, l),
      Mr.fromBufferAttribute(r, c),
      (u.uv = ln.getInterpolation(Sr, vi, xi, Mi, vr, xr, Mr, new Ze()))),
      s &&
        (vr.fromBufferAttribute(s, a),
        xr.fromBufferAttribute(s, l),
        Mr.fromBufferAttribute(s, c),
        (u.uv1 = ln.getInterpolation(Sr, vi, xi, Mi, vr, xr, Mr, new Ze())),
        (u.uv2 = u.uv1)),
      o &&
        (so.fromBufferAttribute(o, a),
        ao.fromBufferAttribute(o, l),
        oo.fromBufferAttribute(o, c),
        (u.normal = ln.getInterpolation(Sr, vi, xi, Mi, so, ao, oo, new G())),
        u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1)));
    const f = { a, b: l, c, normal: new G(), materialIndex: 0 };
    (ln.getNormal(vi, xi, Mi, f.normal), (u.face = f));
  }
  return u;
}
class tr extends si {
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, o = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      }));
    const a = this;
    ((r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o)));
    const l = [],
      c = [],
      u = [],
      f = [];
    let d = 0,
      m = 0;
    (_("z", "y", "x", -1, -1, i, t, e, o, s, 0),
      _("z", "y", "x", 1, -1, i, t, -e, o, s, 1),
      _("x", "z", "y", 1, 1, e, i, t, r, o, 2),
      _("x", "z", "y", 1, -1, e, i, -t, r, o, 3),
      _("x", "y", "z", 1, -1, e, t, i, r, s, 4),
      _("x", "y", "z", -1, -1, e, t, -i, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new zn(c, 3)),
      this.setAttribute("normal", new zn(u, 3)),
      this.setAttribute("uv", new zn(f, 2)));
    function _(g, p, h, M, x, T, L, w, A, k, S) {
      const b = T / A,
        W = L / k,
        j = T / 2,
        re = L / 2,
        P = w / 2,
        I = A + 1,
        B = k + 1;
      let X = 0,
        $ = 0;
      const K = new G();
      for (let Y = 0; Y < B; Y++) {
        const te = Y * W - re;
        for (let Q = 0; Q < I; Q++) {
          const U = Q * b - j;
          ((K[g] = U * M),
            (K[p] = te * x),
            (K[h] = P),
            c.push(K.x, K.y, K.z),
            (K[g] = 0),
            (K[p] = 0),
            (K[h] = w > 0 ? 1 : -1),
            u.push(K.x, K.y, K.z),
            f.push(Q / A),
            f.push(1 - Y / k),
            (X += 1));
        }
      }
      for (let Y = 0; Y < k; Y++)
        for (let te = 0; te < A; te++) {
          const Q = d + te + I * Y,
            U = d + te + I * (Y + 1),
            Z = d + (te + 1) + I * (Y + 1),
            J = d + (te + 1) + I * Y;
          (l.push(Q, U, J), l.push(U, Z, J), ($ += 6));
        }
      (a.addGroup(m, $, S), (m += $), (d += X));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new tr(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function Ni(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const r = n[t][i];
      (
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
      ) ?
        r.isRenderTargetTexture ?
          (console.warn(
            "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
          ),
          (e[t][i] = null))
        : (e[t][i] = r.clone())
      : Array.isArray(r) ? (e[t][i] = r.slice())
      : (e[t][i] = r);
    }
  }
  return e;
}
function Ot(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Ni(n[t]);
    for (const r in i) e[r] = i[r];
  }
  return e;
}
function Sh(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function Rl(n) {
  return n.getRenderTarget() === null ?
      n.outputColorSpace
    : tt.workingColorSpace;
}
const Eh = { clone: Ni, merge: Ot };
var yh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Th = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ii extends er {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = yh),
      (this.fragmentShader = Th),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
        clipCullDistance: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ni(e.uniforms)),
      (this.uniformsGroups = Sh(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ?
        (t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid })
      : o && o.isColor ? (t.uniforms[r] = { type: "c", value: o.getHex() })
      : o && o.isVector2 ? (t.uniforms[r] = { type: "v2", value: o.toArray() })
      : o && o.isVector3 ? (t.uniforms[r] = { type: "v3", value: o.toArray() })
      : o && o.isVector4 ? (t.uniforms[r] = { type: "v4", value: o.toArray() })
      : o && o.isMatrix3 ? (t.uniforms[r] = { type: "m3", value: o.toArray() })
      : o && o.isMatrix4 ? (t.uniforms[r] = { type: "m4", value: o.toArray() })
      : (t.uniforms[r] = { value: o });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const i = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return (Object.keys(i).length > 0 && (t.extensions = i), t);
  }
}
class Cl extends It {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new St()),
      (this.projectionMatrix = new St()),
      (this.projectionMatrixInverse = new St()),
      (this.coordinateSystem = yn));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class tn extends Cl {
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = Bs * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(ns * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Bs * 2 * Math.atan(Math.tan(ns * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, i, r, s, o) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ns * 0.5 * this.fov)) / this.zoom,
      i = 2 * t,
      r = this.aspect * i,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      ((s += (o.offsetX * r) / l),
        (t -= (o.offsetY * i) / c),
        (r *= o.width / l),
        (i *= o.height / c));
    }
    const a = this.filmOffset;
    (a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - i,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Si = -90,
  Ei = 1;
class bh extends It {
  constructor(e, t, i) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const r = new tn(Si, Ei, e, t);
    ((r.layers = this.layers), this.add(r));
    const s = new tn(Si, Ei, e, t);
    ((s.layers = this.layers), this.add(s));
    const o = new tn(Si, Ei, e, t);
    ((o.layers = this.layers), this.add(o));
    const a = new tn(Si, Ei, e, t);
    ((a.layers = this.layers), this.add(a));
    const l = new tn(Si, Ei, e, t);
    ((l.layers = this.layers), this.add(l));
    const c = new tn(Si, Ei, e, t);
    ((c.layers = this.layers), this.add(c));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [i, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === yn)
      (i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1));
    else if (e === Fr)
      (i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const c of t) (this.add(c), c.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children,
      f = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      _ = e.xr.enabled;
    e.xr.enabled = !1;
    const g = i.texture.generateMipmaps;
    ((i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0, r),
      e.render(t, s),
      e.setRenderTarget(i, 1, r),
      e.render(t, o),
      e.setRenderTarget(i, 2, r),
      e.render(t, a),
      e.setRenderTarget(i, 3, r),
      e.render(t, l),
      e.setRenderTarget(i, 4, r),
      e.render(t, c),
      (i.texture.generateMipmaps = g),
      e.setRenderTarget(i, 5, r),
      e.render(t, u),
      e.setRenderTarget(f, d, m),
      (e.xr.enabled = _),
      (i.texture.needsPMREMUpdate = !0));
  }
}
class Ll extends Zt {
  constructor(e, t, i, r, s, o, a, l, c, u) {
    ((e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Di),
      super(e, t, i, r, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ah extends ni {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const i = { width: e, height: e, depth: 1 },
      r = [i, i, i, i, i, i];
    (t.encoding !== void 0 &&
      ($i(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.",
      ),
      (t.colorSpace = t.encoding === ei ? Lt : nn)),
      (this.texture = new Ll(
        r,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace,
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : en));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new tr(5, 5, 5),
      s = new ii({
        name: "CubemapFromEquirect",
        uniforms: Ni(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: Wt,
        blending: Fn,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Tn(r, s),
      a = t.minFilter;
    return (
      t.minFilter === ji && (t.minFilter = en),
      new bh(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, i, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) (e.setRenderTarget(this, o), e.clear(t, i, r));
    e.setRenderTarget(s);
  }
}
const Ms = new G(),
  wh = new G(),
  Rh = new He();
class qn {
  constructor(e = new G(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, i, r) {
    return (this.normal.set(e, t, i), (this.constant = r), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, i) {
    const r = Ms.subVectors(i, t).cross(wh.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(r, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(Ms),
      r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (t < 0 && i > 0) || (i < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || Rh.getNormalMatrix(e),
      r = this.coplanarPoint(Ms).applyMatrix4(e),
      s = this.normal.applyMatrix3(i).normalize();
    return ((this.constant = -r.dot(s)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $n = new Zs(),
  Tr = new G();
class Js {
  constructor(
    e = new qn(),
    t = new qn(),
    i = new qn(),
    r = new qn(),
    s = new qn(),
    o = new qn(),
  ) {
    this.planes = [e, t, i, r, s, o];
  }
  set(e, t, i, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(i),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = yn) {
    const i = this.planes,
      r = e.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      f = r[6],
      d = r[7],
      m = r[8],
      _ = r[9],
      g = r[10],
      p = r[11],
      h = r[12],
      M = r[13],
      x = r[14],
      T = r[15];
    if (
      (i[0].setComponents(l - s, d - c, p - m, T - h).normalize(),
      i[1].setComponents(l + s, d + c, p + m, T + h).normalize(),
      i[2].setComponents(l + o, d + u, p + _, T + M).normalize(),
      i[3].setComponents(l - o, d - u, p - _, T - M).normalize(),
      i[4].setComponents(l - a, d - f, p - g, T - x).normalize(),
      t === yn)
    )
      i[5].setComponents(l + a, d + f, p + g, T + x).normalize();
    else if (t === Fr) i[5].setComponents(a, f, g, x).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        $n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        $n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere($n);
  }
  intersectsSprite(e) {
    return (
      $n.center.set(0, 0, 0),
      ($n.radius = 0.7071067811865476),
      $n.applyMatrix4(e.matrixWorld),
      this.intersectsSphere($n)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      i = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(i) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = t[i];
      if (
        ((Tr.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Tr.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Tr.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Tr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Pl() {
  let n = null,
    e = !1,
    t = null,
    i = null;
  function r(s, o) {
    (t(s, o), (i = n.requestAnimationFrame(r)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((i = n.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      (n.cancelAnimationFrame(i), (e = !1));
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      n = s;
    },
  };
}
function Ch(n, e) {
  const t = e.isWebGL2,
    i = new WeakMap();
  function r(c, u) {
    const f = c.array,
      d = c.usage,
      m = f.byteLength,
      _ = n.createBuffer();
    (n.bindBuffer(u, _), n.bufferData(u, f, d), c.onUploadCallback());
    let g;
    if (f instanceof Float32Array) g = n.FLOAT;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = n.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.",
          );
      else g = n.UNSIGNED_SHORT;
    else if (f instanceof Int16Array) g = n.SHORT;
    else if (f instanceof Uint32Array) g = n.UNSIGNED_INT;
    else if (f instanceof Int32Array) g = n.INT;
    else if (f instanceof Int8Array) g = n.BYTE;
    else if (f instanceof Uint8Array) g = n.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray) g = n.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + f,
      );
    return {
      buffer: _,
      type: g,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version,
      size: m,
    };
  }
  function s(c, u, f) {
    const d = u.array,
      m = u._updateRange,
      _ = u.updateRanges;
    if (
      (n.bindBuffer(f, c),
      m.count === -1 && _.length === 0 && n.bufferSubData(f, 0, d),
      _.length !== 0)
    ) {
      for (let g = 0, p = _.length; g < p; g++) {
        const h = _[g];
        t ?
          n.bufferSubData(f, h.start * d.BYTES_PER_ELEMENT, d, h.start, h.count)
        : n.bufferSubData(
            f,
            h.start * d.BYTES_PER_ELEMENT,
            d.subarray(h.start, h.start + h.count),
          );
      }
      u.clearUpdateRanges();
    }
    (m.count !== -1 &&
      (t ?
        n.bufferSubData(f, m.offset * d.BYTES_PER_ELEMENT, d, m.offset, m.count)
      : n.bufferSubData(
          f,
          m.offset * d.BYTES_PER_ELEMENT,
          d.subarray(m.offset, m.offset + m.count),
        ),
      (m.count = -1)),
      u.onUploadCallback());
  }
  function o(c) {
    return (c.isInterleavedBufferAttribute && (c = c.data), i.get(c));
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = i.get(c);
    u && (n.deleteBuffer(u.buffer), i.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = i.get(c);
      (!d || d.version < c.version) &&
        i.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = i.get(c);
    if (f === void 0) i.set(c, r(c, u));
    else if (f.version < c.version) {
      if (f.size !== c.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (s(f.buffer, c, u), (f.version = c.version));
    }
  }
  return { get: o, remove: a, update: l };
}
class kr extends si {
  constructor(e = 1, t = 1, i = 1, r = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: r,
      }));
    const s = e / 2,
      o = t / 2,
      a = Math.floor(i),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      f = e / a,
      d = t / l,
      m = [],
      _ = [],
      g = [],
      p = [];
    for (let h = 0; h < u; h++) {
      const M = h * d - o;
      for (let x = 0; x < c; x++) {
        const T = x * f - s;
        (_.push(T, -M, 0), g.push(0, 0, 1), p.push(x / a), p.push(1 - h / l));
      }
    }
    for (let h = 0; h < l; h++)
      for (let M = 0; M < a; M++) {
        const x = M + c * h,
          T = M + c * (h + 1),
          L = M + 1 + c * (h + 1),
          w = M + 1 + c * h;
        (m.push(x, T, w), m.push(T, L, w));
      }
    (this.setIndex(m),
      this.setAttribute("position", new zn(_, 3)),
      this.setAttribute("normal", new zn(g, 3)),
      this.setAttribute("uv", new zn(p, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new kr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Lh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Ph = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Dh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Uh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ih = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Nh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Fh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Oh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Bh = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  zh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  Gh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  kh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Hh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Vh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Wh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Xh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  $h = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  qh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Yh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  jh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Kh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Zh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Jh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Qh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  ef = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  tf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  nf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  rf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  sf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  af = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  of = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  lf = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  cf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  uf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  hf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  ff = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  df = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  pf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  mf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  _f = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  gf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  vf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  xf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Mf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Sf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Ef = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  yf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Tf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  bf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Af = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  wf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Rf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Cf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Lf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Pf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Df = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Uf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  If = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Nf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Ff = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Of = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Bf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  zf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Gf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  kf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Hf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Vf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Wf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Xf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  $f = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  qf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Yf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  jf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Kf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Zf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Jf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Qf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  ed = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  td = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  nd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  id = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  rd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  sd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  ad = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  od = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  ld = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  cd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  ud = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  hd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  fd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  dd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  pd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  md = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  _d = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  gd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  vd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  xd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Md = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Sd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Ed = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  yd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Td = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  bd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Ad = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  wd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Rd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Cd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ld = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Pd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Dd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Ud = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Nd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Fd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Od = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Bd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  zd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Gd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  kd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Hd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Vd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Wd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Xd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  $d = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  qd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Yd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  jd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Kd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Zd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Jd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Qd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ep = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  tp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  np = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ip = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  rp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  sp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  ap = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  op = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  lp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  cp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Oe = {
    alphahash_fragment: Lh,
    alphahash_pars_fragment: Ph,
    alphamap_fragment: Dh,
    alphamap_pars_fragment: Uh,
    alphatest_fragment: Ih,
    alphatest_pars_fragment: Nh,
    aomap_fragment: Fh,
    aomap_pars_fragment: Oh,
    batching_pars_vertex: Bh,
    batching_vertex: zh,
    begin_vertex: Gh,
    beginnormal_vertex: kh,
    bsdfs: Hh,
    iridescence_fragment: Vh,
    bumpmap_pars_fragment: Wh,
    clipping_planes_fragment: Xh,
    clipping_planes_pars_fragment: $h,
    clipping_planes_pars_vertex: qh,
    clipping_planes_vertex: Yh,
    color_fragment: jh,
    color_pars_fragment: Kh,
    color_pars_vertex: Zh,
    color_vertex: Jh,
    common: Qh,
    cube_uv_reflection_fragment: ef,
    defaultnormal_vertex: tf,
    displacementmap_pars_vertex: nf,
    displacementmap_vertex: rf,
    emissivemap_fragment: sf,
    emissivemap_pars_fragment: af,
    colorspace_fragment: of,
    colorspace_pars_fragment: lf,
    envmap_fragment: cf,
    envmap_common_pars_fragment: uf,
    envmap_pars_fragment: hf,
    envmap_pars_vertex: ff,
    envmap_physical_pars_fragment: Tf,
    envmap_vertex: df,
    fog_vertex: pf,
    fog_pars_vertex: mf,
    fog_fragment: _f,
    fog_pars_fragment: gf,
    gradientmap_pars_fragment: vf,
    lightmap_fragment: xf,
    lightmap_pars_fragment: Mf,
    lights_lambert_fragment: Sf,
    lights_lambert_pars_fragment: Ef,
    lights_pars_begin: yf,
    lights_toon_fragment: bf,
    lights_toon_pars_fragment: Af,
    lights_phong_fragment: wf,
    lights_phong_pars_fragment: Rf,
    lights_physical_fragment: Cf,
    lights_physical_pars_fragment: Lf,
    lights_fragment_begin: Pf,
    lights_fragment_maps: Df,
    lights_fragment_end: Uf,
    logdepthbuf_fragment: If,
    logdepthbuf_pars_fragment: Nf,
    logdepthbuf_pars_vertex: Ff,
    logdepthbuf_vertex: Of,
    map_fragment: Bf,
    map_pars_fragment: zf,
    map_particle_fragment: Gf,
    map_particle_pars_fragment: kf,
    metalnessmap_fragment: Hf,
    metalnessmap_pars_fragment: Vf,
    morphcolor_vertex: Wf,
    morphnormal_vertex: Xf,
    morphtarget_pars_vertex: $f,
    morphtarget_vertex: qf,
    normal_fragment_begin: Yf,
    normal_fragment_maps: jf,
    normal_pars_fragment: Kf,
    normal_pars_vertex: Zf,
    normal_vertex: Jf,
    normalmap_pars_fragment: Qf,
    clearcoat_normal_fragment_begin: ed,
    clearcoat_normal_fragment_maps: td,
    clearcoat_pars_fragment: nd,
    iridescence_pars_fragment: id,
    opaque_fragment: rd,
    packing: sd,
    premultiplied_alpha_fragment: ad,
    project_vertex: od,
    dithering_fragment: ld,
    dithering_pars_fragment: cd,
    roughnessmap_fragment: ud,
    roughnessmap_pars_fragment: hd,
    shadowmap_pars_fragment: fd,
    shadowmap_pars_vertex: dd,
    shadowmap_vertex: pd,
    shadowmask_pars_fragment: md,
    skinbase_vertex: _d,
    skinning_pars_vertex: gd,
    skinning_vertex: vd,
    skinnormal_vertex: xd,
    specularmap_fragment: Md,
    specularmap_pars_fragment: Sd,
    tonemapping_fragment: Ed,
    tonemapping_pars_fragment: yd,
    transmission_fragment: Td,
    transmission_pars_fragment: bd,
    uv_pars_fragment: Ad,
    uv_pars_vertex: wd,
    uv_vertex: Rd,
    worldpos_vertex: Cd,
    background_vert: Ld,
    background_frag: Pd,
    backgroundCube_vert: Dd,
    backgroundCube_frag: Ud,
    cube_vert: Id,
    cube_frag: Nd,
    depth_vert: Fd,
    depth_frag: Od,
    distanceRGBA_vert: Bd,
    distanceRGBA_frag: zd,
    equirect_vert: Gd,
    equirect_frag: kd,
    linedashed_vert: Hd,
    linedashed_frag: Vd,
    meshbasic_vert: Wd,
    meshbasic_frag: Xd,
    meshlambert_vert: $d,
    meshlambert_frag: qd,
    meshmatcap_vert: Yd,
    meshmatcap_frag: jd,
    meshnormal_vert: Kd,
    meshnormal_frag: Zd,
    meshphong_vert: Jd,
    meshphong_frag: Qd,
    meshphysical_vert: ep,
    meshphysical_frag: tp,
    meshtoon_vert: np,
    meshtoon_frag: ip,
    points_vert: rp,
    points_frag: sp,
    shadow_vert: ap,
    shadow_frag: op,
    sprite_vert: lp,
    sprite_frag: cp,
  },
  ce = {
    common: {
      diffuse: { value: new Ke(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new He() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new He() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new He() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new He() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new He() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new He() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new He() },
      normalScale: { value: new Ze(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new He() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new He() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new He() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new He() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ke(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ke(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new He() },
      alphaTest: { value: 0 },
      uvTransform: { value: new He() },
    },
    sprite: {
      diffuse: { value: new Ke(16777215) },
      opacity: { value: 1 },
      center: { value: new Ze(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new He() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new He() },
      alphaTest: { value: 0 },
    },
  },
  fn = {
    basic: {
      uniforms: Ot([
        ce.common,
        ce.specularmap,
        ce.envmap,
        ce.aomap,
        ce.lightmap,
        ce.fog,
      ]),
      vertexShader: Oe.meshbasic_vert,
      fragmentShader: Oe.meshbasic_frag,
    },
    lambert: {
      uniforms: Ot([
        ce.common,
        ce.specularmap,
        ce.envmap,
        ce.aomap,
        ce.lightmap,
        ce.emissivemap,
        ce.bumpmap,
        ce.normalmap,
        ce.displacementmap,
        ce.fog,
        ce.lights,
        { emissive: { value: new Ke(0) } },
      ]),
      vertexShader: Oe.meshlambert_vert,
      fragmentShader: Oe.meshlambert_frag,
    },
    phong: {
      uniforms: Ot([
        ce.common,
        ce.specularmap,
        ce.envmap,
        ce.aomap,
        ce.lightmap,
        ce.emissivemap,
        ce.bumpmap,
        ce.normalmap,
        ce.displacementmap,
        ce.fog,
        ce.lights,
        {
          emissive: { value: new Ke(0) },
          specular: { value: new Ke(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Oe.meshphong_vert,
      fragmentShader: Oe.meshphong_frag,
    },
    standard: {
      uniforms: Ot([
        ce.common,
        ce.envmap,
        ce.aomap,
        ce.lightmap,
        ce.emissivemap,
        ce.bumpmap,
        ce.normalmap,
        ce.displacementmap,
        ce.roughnessmap,
        ce.metalnessmap,
        ce.fog,
        ce.lights,
        {
          emissive: { value: new Ke(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Oe.meshphysical_vert,
      fragmentShader: Oe.meshphysical_frag,
    },
    toon: {
      uniforms: Ot([
        ce.common,
        ce.aomap,
        ce.lightmap,
        ce.emissivemap,
        ce.bumpmap,
        ce.normalmap,
        ce.displacementmap,
        ce.gradientmap,
        ce.fog,
        ce.lights,
        { emissive: { value: new Ke(0) } },
      ]),
      vertexShader: Oe.meshtoon_vert,
      fragmentShader: Oe.meshtoon_frag,
    },
    matcap: {
      uniforms: Ot([
        ce.common,
        ce.bumpmap,
        ce.normalmap,
        ce.displacementmap,
        ce.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Oe.meshmatcap_vert,
      fragmentShader: Oe.meshmatcap_frag,
    },
    points: {
      uniforms: Ot([ce.points, ce.fog]),
      vertexShader: Oe.points_vert,
      fragmentShader: Oe.points_frag,
    },
    dashed: {
      uniforms: Ot([
        ce.common,
        ce.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Oe.linedashed_vert,
      fragmentShader: Oe.linedashed_frag,
    },
    depth: {
      uniforms: Ot([ce.common, ce.displacementmap]),
      vertexShader: Oe.depth_vert,
      fragmentShader: Oe.depth_frag,
    },
    normal: {
      uniforms: Ot([
        ce.common,
        ce.bumpmap,
        ce.normalmap,
        ce.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Oe.meshnormal_vert,
      fragmentShader: Oe.meshnormal_frag,
    },
    sprite: {
      uniforms: Ot([ce.sprite, ce.fog]),
      vertexShader: Oe.sprite_vert,
      fragmentShader: Oe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new He() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Oe.background_vert,
      fragmentShader: Oe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Oe.backgroundCube_vert,
      fragmentShader: Oe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Oe.cube_vert,
      fragmentShader: Oe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Oe.equirect_vert,
      fragmentShader: Oe.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Ot([
        ce.common,
        ce.displacementmap,
        {
          referencePosition: { value: new G() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Oe.distanceRGBA_vert,
      fragmentShader: Oe.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ot([
        ce.lights,
        ce.fog,
        { color: { value: new Ke(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Oe.shadow_vert,
      fragmentShader: Oe.shadow_frag,
    },
  };
fn.physical = {
  uniforms: Ot([
    fn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new He() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new He() },
      clearcoatNormalScale: { value: new Ze(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new He() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new He() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new He() },
      sheen: { value: 0 },
      sheenColor: { value: new Ke(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new He() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new He() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new He() },
      transmissionSamplerSize: { value: new Ze() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new He() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ke(0) },
      specularColor: { value: new Ke(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new He() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new He() },
      anisotropyVector: { value: new Ze() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new He() },
    },
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag,
};
const br = { r: 0, b: 0, g: 0 };
function up(n, e, t, i, r, s, o) {
  const a = new Ke(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    d = 0,
    m = null;
  function _(p, h) {
    let M = !1,
      x = h.isScene === !0 ? h.background : null;
    (x && x.isTexture && (x = (h.backgroundBlurriness > 0 ? t : e).get(x)),
      x === null ? g(a, l) : x && x.isColor && (g(x, 1), (M = !0)));
    const T = n.xr.getEnvironmentBlendMode();
    (T === "additive" ?
      i.buffers.color.setClear(0, 0, 0, 1, o)
    : T === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o),
      (n.autoClear || M) &&
        n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil),
      x && (x.isCubeTexture || x.mapping === Br) ?
        (u === void 0 &&
          ((u = new Tn(
            new tr(1, 1, 1),
            new ii({
              name: "BackgroundCubeMaterial",
              uniforms: Ni(fn.backgroundCube.uniforms),
              vertexShader: fn.backgroundCube.vertexShader,
              fragmentShader: fn.backgroundCube.fragmentShader,
              side: Wt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (L, w, A) {
            this.matrixWorld.copyPosition(A.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(u)),
        (u.material.uniforms.envMap.value = x),
        (u.material.uniforms.flipEnvMap.value =
          x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          h.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity),
        (u.material.toneMapped = tt.getTransfer(x.colorSpace) !== lt),
        (f !== x || d !== x.version || m !== n.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (f = x),
          (d = x.version),
          (m = n.toneMapping)),
        u.layers.enableAll(),
        p.unshift(u, u.geometry, u.material, 0, 0, null))
      : x &&
        x.isTexture &&
        (c === void 0 &&
          ((c = new Tn(
            new kr(2, 2),
            new ii({
              name: "BackgroundMaterial",
              uniforms: Ni(fn.background.uniforms),
              vertexShader: fn.background.vertexShader,
              fragmentShader: fn.background.fragmentShader,
              side: Gn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = x),
        (c.material.uniforms.backgroundIntensity.value = h.backgroundIntensity),
        (c.material.toneMapped = tt.getTransfer(x.colorSpace) !== lt),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(x.matrix),
        (f !== x || d !== x.version || m !== n.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (f = x),
          (d = x.version),
          (m = n.toneMapping)),
        c.layers.enableAll(),
        p.unshift(c, c.geometry, c.material, 0, 0, null)));
  }
  function g(p, h) {
    (p.getRGB(br, Rl(n)), i.buffers.color.setClear(br.r, br.g, br.b, h, o));
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, h = 1) {
      (a.set(p), (l = h), g(a, l));
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      ((l = p), g(a, l));
    },
    render: _,
  };
}
function hp(n, e, t, i) {
  const r = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = i.isWebGL2 || s !== null,
    a = {},
    l = p(null);
  let c = l,
    u = !1;
  function f(P, I, B, X, $) {
    let K = !1;
    if (o) {
      const Y = g(X, B, I);
      (c !== Y && ((c = Y), m(c.object)),
        (K = h(P, X, B, $)),
        K && M(P, X, B, $));
    } else {
      const Y = I.wireframe === !0;
      (c.geometry !== X.id || c.program !== B.id || c.wireframe !== Y) &&
        ((c.geometry = X.id), (c.program = B.id), (c.wireframe = Y), (K = !0));
    }
    ($ !== null && t.update($, n.ELEMENT_ARRAY_BUFFER),
      (K || u) &&
        ((u = !1),
        k(P, I, B, X),
        $ !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get($).buffer)));
  }
  function d() {
    return i.isWebGL2 ? n.createVertexArray() : s.createVertexArrayOES();
  }
  function m(P) {
    return i.isWebGL2 ? n.bindVertexArray(P) : s.bindVertexArrayOES(P);
  }
  function _(P) {
    return i.isWebGL2 ? n.deleteVertexArray(P) : s.deleteVertexArrayOES(P);
  }
  function g(P, I, B) {
    const X = B.wireframe === !0;
    let $ = a[P.id];
    $ === void 0 && (($ = {}), (a[P.id] = $));
    let K = $[I.id];
    K === void 0 && ((K = {}), ($[I.id] = K));
    let Y = K[X];
    return (Y === void 0 && ((Y = p(d())), (K[X] = Y)), Y);
  }
  function p(P) {
    const I = [],
      B = [],
      X = [];
    for (let $ = 0; $ < r; $++) ((I[$] = 0), (B[$] = 0), (X[$] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: B,
      attributeDivisors: X,
      object: P,
      attributes: {},
      index: null,
    };
  }
  function h(P, I, B, X) {
    const $ = c.attributes,
      K = I.attributes;
    let Y = 0;
    const te = B.getAttributes();
    for (const Q in te)
      if (te[Q].location >= 0) {
        const Z = $[Q];
        let J = K[Q];
        if (
          (J === void 0 &&
            (Q === "instanceMatrix" &&
              P.instanceMatrix &&
              (J = P.instanceMatrix),
            Q === "instanceColor" && P.instanceColor && (J = P.instanceColor)),
          Z === void 0 || Z.attribute !== J || (J && Z.data !== J.data))
        )
          return !0;
        Y++;
      }
    return c.attributesNum !== Y || c.index !== X;
  }
  function M(P, I, B, X) {
    const $ = {},
      K = I.attributes;
    let Y = 0;
    const te = B.getAttributes();
    for (const Q in te)
      if (te[Q].location >= 0) {
        let Z = K[Q];
        Z === void 0 &&
          (Q === "instanceMatrix" && P.instanceMatrix && (Z = P.instanceMatrix),
          Q === "instanceColor" && P.instanceColor && (Z = P.instanceColor));
        const J = {};
        ((J.attribute = Z), Z && Z.data && (J.data = Z.data), ($[Q] = J), Y++);
      }
    ((c.attributes = $), (c.attributesNum = Y), (c.index = X));
  }
  function x() {
    const P = c.newAttributes;
    for (let I = 0, B = P.length; I < B; I++) P[I] = 0;
  }
  function T(P) {
    L(P, 0);
  }
  function L(P, I) {
    const B = c.newAttributes,
      X = c.enabledAttributes,
      $ = c.attributeDivisors;
    ((B[P] = 1),
      X[P] === 0 && (n.enableVertexAttribArray(P), (X[P] = 1)),
      $[P] !== I &&
        ((i.isWebGL2 ? n : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](P, I),
        ($[P] = I)));
  }
  function w() {
    const P = c.newAttributes,
      I = c.enabledAttributes;
    for (let B = 0, X = I.length; B < X; B++)
      I[B] !== P[B] && (n.disableVertexAttribArray(B), (I[B] = 0));
  }
  function A(P, I, B, X, $, K, Y) {
    Y === !0 ?
      n.vertexAttribIPointer(P, I, B, $, K)
    : n.vertexAttribPointer(P, I, B, X, $, K);
  }
  function k(P, I, B, X) {
    if (
      i.isWebGL2 === !1 &&
      (P.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    x();
    const $ = X.attributes,
      K = B.getAttributes(),
      Y = I.defaultAttributeValues;
    for (const te in K) {
      const Q = K[te];
      if (Q.location >= 0) {
        let U = $[te];
        if (
          (U === void 0 &&
            (te === "instanceMatrix" &&
              P.instanceMatrix &&
              (U = P.instanceMatrix),
            te === "instanceColor" && P.instanceColor && (U = P.instanceColor)),
          U !== void 0)
        ) {
          const Z = U.normalized,
            J = U.itemSize,
            ue = t.get(U);
          if (ue === void 0) continue;
          const pe = ue.buffer,
            Ee = ue.type,
            Re = ue.bytesPerElement,
            ge =
              i.isWebGL2 === !0 &&
              (Ee === n.INT || Ee === n.UNSIGNED_INT || U.gpuType === cl);
          if (U.isInterleavedBufferAttribute) {
            const $e = U.data,
              N = $e.stride,
              Tt = U.offset;
            if ($e.isInstancedInterleavedBuffer) {
              for (let ee = 0; ee < Q.locationSize; ee++)
                L(Q.location + ee, $e.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = $e.meshPerAttribute * $e.count);
            } else
              for (let ee = 0; ee < Q.locationSize; ee++) T(Q.location + ee);
            n.bindBuffer(n.ARRAY_BUFFER, pe);
            for (let ee = 0; ee < Q.locationSize; ee++)
              A(
                Q.location + ee,
                J / Q.locationSize,
                Ee,
                Z,
                N * Re,
                (Tt + (J / Q.locationSize) * ee) * Re,
                ge,
              );
          } else {
            if (U.isInstancedBufferAttribute) {
              for (let $e = 0; $e < Q.locationSize; $e++)
                L(Q.location + $e, U.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = U.meshPerAttribute * U.count);
            } else
              for (let $e = 0; $e < Q.locationSize; $e++) T(Q.location + $e);
            n.bindBuffer(n.ARRAY_BUFFER, pe);
            for (let $e = 0; $e < Q.locationSize; $e++)
              A(
                Q.location + $e,
                J / Q.locationSize,
                Ee,
                Z,
                J * Re,
                (J / Q.locationSize) * $e * Re,
                ge,
              );
          }
        } else if (Y !== void 0) {
          const Z = Y[te];
          if (Z !== void 0)
            switch (Z.length) {
              case 2:
                n.vertexAttrib2fv(Q.location, Z);
                break;
              case 3:
                n.vertexAttrib3fv(Q.location, Z);
                break;
              case 4:
                n.vertexAttrib4fv(Q.location, Z);
                break;
              default:
                n.vertexAttrib1fv(Q.location, Z);
            }
        }
      }
    }
    w();
  }
  function S() {
    j();
    for (const P in a) {
      const I = a[P];
      for (const B in I) {
        const X = I[B];
        for (const $ in X) (_(X[$].object), delete X[$]);
        delete I[B];
      }
      delete a[P];
    }
  }
  function b(P) {
    if (a[P.id] === void 0) return;
    const I = a[P.id];
    for (const B in I) {
      const X = I[B];
      for (const $ in X) (_(X[$].object), delete X[$]);
      delete I[B];
    }
    delete a[P.id];
  }
  function W(P) {
    for (const I in a) {
      const B = a[I];
      if (B[P.id] === void 0) continue;
      const X = B[P.id];
      for (const $ in X) (_(X[$].object), delete X[$]);
      delete B[P.id];
    }
  }
  function j() {
    (re(), (u = !0), c !== l && ((c = l), m(c.object)));
  }
  function re() {
    ((l.geometry = null), (l.program = null), (l.wireframe = !1));
  }
  return {
    setup: f,
    reset: j,
    resetDefaultState: re,
    dispose: S,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: W,
    initAttributes: x,
    enableAttribute: T,
    disableUnusedAttributes: w,
  };
}
function fp(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  function a(u, f) {
    (n.drawArrays(s, u, f), t.update(f, s, 1));
  }
  function l(u, f, d) {
    if (d === 0) return;
    let m, _;
    if (r) ((m = n), (_ = "drawArraysInstanced"));
    else if (
      ((m = e.get("ANGLE_instanced_arrays")),
      (_ = "drawArraysInstancedANGLE"),
      m === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.",
      );
      return;
    }
    (m[_](s, u, f, d), t.update(f, s, d));
  }
  function c(u, f, d) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let _ = 0; _ < d; _++) this.render(u[_], f[_]);
    else {
      m.multiDrawArraysWEBGL(s, u, 0, f, 0, d);
      let _ = 0;
      for (let g = 0; g < d; g++) _ += f[g];
      t.update(_, s, 1);
    }
  }
  ((this.setMode = o),
    (this.render = a),
    (this.renderInstances = l),
    (this.renderMultiDraw = c));
}
function dp(n, e, t) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function s(A) {
    if (A === "highp") {
      if (
        n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision >
          0 &&
        n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      A = "mediump";
    }
    return (
        A === "mediump" &&
          n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT)
            .precision > 0 &&
          n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT)
            .precision > 0
      ) ?
        "mediump"
      : "lowp";
  }
  const o =
    typeof WebGL2RenderingContext < "u" &&
    n.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      l,
      "instead.",
    ),
    (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    f = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
    d = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = n.getParameter(n.MAX_TEXTURE_SIZE),
    _ = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
    g = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    p = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
    h = n.getParameter(n.MAX_VARYING_VECTORS),
    M = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
    x = d > 0,
    T = o || e.has("OES_texture_float"),
    L = x && T,
    w = o ? n.getParameter(n.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: _,
    maxAttributes: g,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: M,
    vertexTextures: x,
    floatFragmentTextures: T,
    floatVertexTextures: L,
    maxSamples: w,
  };
}
function pp(n) {
  const e = this;
  let t = null,
    i = 0,
    r = !1,
    s = !1;
  const o = new qn(),
    a = new He(),
    l = { value: null, needsUpdate: !1 };
  ((this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, d) {
      const m = f.length !== 0 || d || i !== 0 || r;
      return ((r = d), (i = f.length), m);
    }),
    (this.beginShadows = function () {
      ((s = !0), u(null));
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, d) {
      t = u(f, d, 0);
    }),
    (this.setState = function (f, d, m) {
      const _ = f.clippingPlanes,
        g = f.clipIntersection,
        p = f.clipShadows,
        h = n.get(f);
      if (!r || _ === null || _.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const M = s ? 0 : i,
          x = M * 4;
        let T = h.clippingState || null;
        ((l.value = T), (T = u(_, d, x, m)));
        for (let L = 0; L !== x; ++L) T[L] = t[L];
        ((h.clippingState = T),
          (this.numIntersection = g ? this.numPlanes : 0),
          (this.numPlanes += M));
      }
    }));
  function c() {
    (l.value !== t && ((l.value = t), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0));
  }
  function u(f, d, m, _) {
    const g = f !== null ? f.length : 0;
    let p = null;
    if (g !== 0) {
      if (((p = l.value), _ !== !0 || p === null)) {
        const h = m + g * 4,
          M = d.matrixWorldInverse;
        (a.getNormalMatrix(M),
          (p === null || p.length < h) && (p = new Float32Array(h)));
        for (let x = 0, T = m; x !== g; ++x, T += 4)
          (o.copy(f[x]).applyMatrix4(M, a),
            o.normal.toArray(p, T),
            (p[T + 3] = o.constant));
      }
      ((l.value = p), (l.needsUpdate = !0));
    }
    return ((e.numPlanes = g), (e.numIntersection = 0), p);
  }
}
function mp(n) {
  let e = new WeakMap();
  function t(o, a) {
    return (a === Us ? (o.mapping = Di) : a === Is && (o.mapping = Ui), o);
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Us || a === Is)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Ah(l.height / 2);
            return (
              c.fromEquirectangularTexture(n, o),
              e.set(o, c),
              o.addEventListener("dispose", r),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: i, dispose: s };
}
class Dl extends Cl {
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, o = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = i),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, i, r, s, o) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = i - e,
      o = i + e,
      a = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      s,
      o,
      a,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Ai = 4,
  lo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Kn = 20,
  Ss = new Dl(),
  co = new Ke();
let Es = null,
  ys = 0,
  Ts = 0;
const Yn = (1 + Math.sqrt(5)) / 2,
  yi = 1 / Yn,
  uo = [
    new G(1, 1, 1),
    new G(-1, 1, 1),
    new G(1, 1, -1),
    new G(-1, 1, -1),
    new G(0, Yn, yi),
    new G(0, Yn, -yi),
    new G(yi, 0, Yn),
    new G(-yi, 0, Yn),
    new G(Yn, yi, 0),
    new G(-Yn, yi, 0),
  ];
class ho {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial));
  }
  fromScene(e, t = 0, i = 0.1, r = 100) {
    ((Es = this._renderer.getRenderTarget()),
      (ys = this._renderer.getActiveCubeFace()),
      (Ts = this._renderer.getActiveMipmapLevel()),
      this._setSize(256));
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, i, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = mo()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = po()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose());
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(Es, ys, Ts),
      (e.scissorTest = !1),
      Ar(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === Di || e.mapping === Ui ?
      this._setSize(
        e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width,
      )
    : this._setSize(e.image.width / 4),
      (Es = this._renderer.getRenderTarget()),
      (ys = this._renderer.getActiveCubeFace()),
      (Ts = this._renderer.getActiveMipmapLevel()));
    const i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i),
      this._applyPMREM(i),
      this._cleanup(i),
      i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: en,
        minFilter: en,
        generateMipmaps: !1,
        type: Ki,
        format: un,
        colorSpace: An,
        depthBuffer: !1,
      },
      r = fo(e, t, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = fo(e, t, i)));
      const { _lodMax: s } = this;
      (({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = _p(s)),
        (this._blurMaterial = gp(s, e, t)));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Tn(this._lodPlanes[0], e);
    this._renderer.compile(t, Ss);
  }
  _sceneToCubeUV(e, t, i, r) {
    const a = new tn(90, 1, t, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      d = u.toneMapping;
    (u.getClearColor(co), (u.toneMapping = On), (u.autoClear = !1));
    const m = new bl({
        name: "PMREM.Background",
        side: Wt,
        depthWrite: !1,
        depthTest: !1,
      }),
      _ = new Tn(new tr(), m);
    let g = !1;
    const p = e.background;
    p ?
      p.isColor && (m.color.copy(p), (e.background = null), (g = !0))
    : (m.color.copy(co), (g = !0));
    for (let h = 0; h < 6; h++) {
      const M = h % 3;
      M === 0 ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0))
      : M === 1 ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0))
      : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const x = this._cubeSize;
      (Ar(r, M * x, h > 2 ? x : 0, x, x),
        u.setRenderTarget(r),
        g && u.render(_, a),
        u.render(e, a));
    }
    (_.geometry.dispose(),
      _.material.dispose(),
      (u.toneMapping = d),
      (u.autoClear = f),
      (e.background = p));
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      r = e.mapping === Di || e.mapping === Ui;
    r ?
      (this._cubemapMaterial === null && (this._cubemapMaterial = mo()),
      (this._cubemapMaterial.uniforms.flipEnvMap.value =
        e.isRenderTargetTexture === !1 ? -1 : 1))
    : this._equirectMaterial === null && (this._equirectMaterial = po());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new Tn(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    (Ar(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, Ss));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1],
        ),
        o = uo[(r - 1) % uo.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, r, s) {
    const o = this._pingPongRenderTarget;
    (this._halfBlur(e, o, t, i, r, "latitudinal", s),
      this._halfBlur(o, e, i, i, r, "longitudinal", s));
  }
  _halfBlur(e, t, i, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const u = 3,
      f = new Tn(this._lodPlanes[r], c),
      d = c.uniforms,
      m = this._sizeLods[i] - 1,
      _ = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Kn - 1),
      g = s / _,
      p = isFinite(s) ? 1 + Math.floor(u * g) : Kn;
    p > Kn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`,
      );
    const h = [];
    let M = 0;
    for (let A = 0; A < Kn; ++A) {
      const k = A / g,
        S = Math.exp((-k * k) / 2);
      (h.push(S), A === 0 ? (M += S) : A < p && (M += 2 * S));
    }
    for (let A = 0; A < h.length; A++) h[A] = h[A] / M;
    ((d.envMap.value = e.texture),
      (d.samples.value = p),
      (d.weights.value = h),
      (d.latitudinal.value = o === "latitudinal"),
      a && (d.poleAxis.value = a));
    const { _lodMax: x } = this;
    ((d.dTheta.value = _), (d.mipInt.value = x - i));
    const T = this._sizeLods[r],
      L = 3 * T * (r > x - Ai ? r - x + Ai : 0),
      w = 4 * (this._cubeSize - T);
    (Ar(t, L, w, 3 * T, 2 * T), l.setRenderTarget(t), l.render(f, Ss));
  }
}
function _p(n) {
  const e = [],
    t = [],
    i = [];
  let r = n;
  const s = n - Ai + 1 + lo.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    (o > n - Ai ? (l = lo[o - n + Ai - 1]) : o === 0 && (l = 0), i.push(l));
    const c = 1 / (a - 2),
      u = -c,
      f = 1 + c,
      d = [u, u, f, u, f, f, u, u, f, f, u, f],
      m = 6,
      _ = 6,
      g = 3,
      p = 2,
      h = 1,
      M = new Float32Array(g * _ * m),
      x = new Float32Array(p * _ * m),
      T = new Float32Array(h * _ * m);
    for (let w = 0; w < m; w++) {
      const A = ((w % 3) * 2) / 3 - 1,
        k = w > 2 ? 0 : -1,
        S = [
          A,
          k,
          0,
          A + 2 / 3,
          k,
          0,
          A + 2 / 3,
          k + 1,
          0,
          A,
          k,
          0,
          A + 2 / 3,
          k + 1,
          0,
          A,
          k + 1,
          0,
        ];
      (M.set(S, g * _ * w), x.set(d, p * _ * w));
      const b = [w, w, w, w, w, w];
      T.set(b, h * _ * w);
    }
    const L = new si();
    (L.setAttribute("position", new pn(M, g)),
      L.setAttribute("uv", new pn(x, p)),
      L.setAttribute("faceIndex", new pn(T, h)),
      e.push(L),
      r > Ai && r--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function fo(n, e, t) {
  const i = new ni(n, e, t);
  return (
    (i.texture.mapping = Br),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function Ar(n, e, t, i, r) {
  (n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r));
}
function gp(n, e, t) {
  const i = new Float32Array(Kn),
    r = new G(0, 1, 0);
  return new ii({
    name: "SphericalGaussianBlur",
    defines: {
      n: Kn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${n}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Qs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function po() {
  return new ii({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Qs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function mo() {
  return new ii({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Qs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Qs() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function vp(n) {
  let e = new WeakMap(),
    t = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Us || l === Is,
        u = l === Di || l === Ui;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return (
            t === null && (t = new ho(n)),
            (f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f)),
            e.set(a, f),
            f.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const f = a.image;
            if ((c && f && f.height > 0) || (u && f && r(f))) {
              t === null && (t = new ho(n));
              const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return (e.set(a, d), a.addEventListener("dispose", s), d.texture);
            } else return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: i, dispose: o };
}
function xp(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let r;
    switch (i) {
      case "WEBGL_depth_texture":
        r =
          n.getExtension("WEBGL_depth_texture") ||
          n.getExtension("MOZ_WEBGL_depth_texture") ||
          n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          n.getExtension("EXT_texture_filter_anisotropic") ||
          n.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          n.getExtension("WEBGL_compressed_texture_s3tc") ||
          n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          n.getExtension("WEBGL_compressed_texture_pvrtc") ||
          n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = n.getExtension(i);
    }
    return ((e[i] = r), r);
  }
  return {
    has: function (i) {
      return t(i) !== null;
    },
    init: function (i) {
      (i.isWebGL2 ?
        (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"))
      : (t("WEBGL_depth_texture"),
        t("OES_texture_float"),
        t("OES_texture_half_float"),
        t("OES_texture_half_float_linear"),
        t("OES_standard_derivatives"),
        t("OES_element_index_uint"),
        t("OES_vertex_array_object"),
        t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"));
    },
    get: function (i) {
      const r = t(i);
      return (
        r === null &&
          console.warn(
            "THREE.WebGLRenderer: " + i + " extension not supported.",
          ),
        r
      );
    },
  };
}
function Mp(n, e, t, i) {
  const r = {},
    s = new WeakMap();
  function o(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes) e.remove(d.attributes[_]);
    for (const _ in d.morphAttributes) {
      const g = d.morphAttributes[_];
      for (let p = 0, h = g.length; p < h; p++) e.remove(g[p]);
    }
    (d.removeEventListener("dispose", o), delete r[d.id]);
    const m = s.get(d);
    (m && (e.remove(m), s.delete(d)),
      i.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--);
  }
  function a(f, d) {
    return (
      r[d.id] === !0 ||
        (d.addEventListener("dispose", o),
        (r[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function l(f) {
    const d = f.attributes;
    for (const _ in d) e.update(d[_], n.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const _ in m) {
      const g = m[_];
      for (let p = 0, h = g.length; p < h; p++) e.update(g[p], n.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const d = [],
      m = f.index,
      _ = f.attributes.position;
    let g = 0;
    if (m !== null) {
      const M = m.array;
      g = m.version;
      for (let x = 0, T = M.length; x < T; x += 3) {
        const L = M[x + 0],
          w = M[x + 1],
          A = M[x + 2];
        d.push(L, w, w, A, A, L);
      }
    } else if (_ !== void 0) {
      const M = _.array;
      g = _.version;
      for (let x = 0, T = M.length / 3 - 1; x < T; x += 3) {
        const L = x + 0,
          w = x + 1,
          A = x + 2;
        d.push(L, w, w, A, A, L);
      }
    } else return;
    const p = new (xl(d) ? wl : Al)(d, 1);
    p.version = g;
    const h = s.get(f);
    (h && e.remove(h), s.set(f, p));
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function Sp(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function o(m) {
    s = m;
  }
  let a, l;
  function c(m) {
    ((a = m.type), (l = m.bytesPerElement));
  }
  function u(m, _) {
    (n.drawElements(s, _, a, m * l), t.update(_, s, 1));
  }
  function f(m, _, g) {
    if (g === 0) return;
    let p, h;
    if (r) ((p = n), (h = "drawElementsInstanced"));
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (h = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.",
      );
      return;
    }
    (p[h](s, _, a, m * l, g), t.update(_, s, g));
  }
  function d(m, _, g) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < g; h++) this.render(m[h] / l, _[h]);
    else {
      p.multiDrawElementsWEBGL(s, _, 0, a, m, 0, g);
      let h = 0;
      for (let M = 0; M < g; M++) h += _[M];
      t.update(h, s, 1);
    }
  }
  ((this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = f),
    (this.renderMultiDraw = d));
}
function Ep(n) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, o, a) {
    switch ((t.calls++, o)) {
      case n.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case n.LINES:
        t.lines += a * (s / 2);
        break;
      case n.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case n.LINE_LOOP:
        t.lines += a * s;
        break;
      case n.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i,
  };
}
function yp(n, e) {
  return n[0] - e[0];
}
function Tp(n, e) {
  return Math.abs(e[1]) - Math.abs(n[1]);
}
function bp(n, e, t) {
  const i = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new Ct(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, f) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const _ =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        g = _ !== void 0 ? _.length : 0;
      let p = s.get(u);
      if (p === void 0 || p.count !== g) {
        let I = function () {
          (re.dispose(), s.delete(u), u.removeEventListener("dispose", I));
        };
        var m = I;
        p !== void 0 && p.texture.dispose();
        const x = u.morphAttributes.position !== void 0,
          T = u.morphAttributes.normal !== void 0,
          L = u.morphAttributes.color !== void 0,
          w = u.morphAttributes.position || [],
          A = u.morphAttributes.normal || [],
          k = u.morphAttributes.color || [];
        let S = 0;
        (x === !0 && (S = 1), T === !0 && (S = 2), L === !0 && (S = 3));
        let b = u.attributes.position.count * S,
          W = 1;
        b > e.maxTextureSize &&
          ((W = Math.ceil(b / e.maxTextureSize)), (b = e.maxTextureSize));
        const j = new Float32Array(b * W * 4 * g),
          re = new El(j, b, W, g);
        ((re.type = Nn), (re.needsUpdate = !0));
        const P = S * 4;
        for (let B = 0; B < g; B++) {
          const X = w[B],
            $ = A[B],
            K = k[B],
            Y = b * W * 4 * B;
          for (let te = 0; te < X.count; te++) {
            const Q = te * P;
            (x === !0 &&
              (o.fromBufferAttribute(X, te),
              (j[Y + Q + 0] = o.x),
              (j[Y + Q + 1] = o.y),
              (j[Y + Q + 2] = o.z),
              (j[Y + Q + 3] = 0)),
              T === !0 &&
                (o.fromBufferAttribute($, te),
                (j[Y + Q + 4] = o.x),
                (j[Y + Q + 5] = o.y),
                (j[Y + Q + 6] = o.z),
                (j[Y + Q + 7] = 0)),
              L === !0 &&
                (o.fromBufferAttribute(K, te),
                (j[Y + Q + 8] = o.x),
                (j[Y + Q + 9] = o.y),
                (j[Y + Q + 10] = o.z),
                (j[Y + Q + 11] = K.itemSize === 4 ? o.w : 1)));
          }
        }
        ((p = { count: g, texture: re, size: new Ze(b, W) }),
          s.set(u, p),
          u.addEventListener("dispose", I));
      }
      let h = 0;
      for (let x = 0; x < d.length; x++) h += d[x];
      const M = u.morphTargetsRelative ? 1 : 1 - h;
      (f.getUniforms().setValue(n, "morphTargetBaseInfluence", M),
        f.getUniforms().setValue(n, "morphTargetInfluences", d),
        f.getUniforms().setValue(n, "morphTargetsTexture", p.texture, t),
        f.getUniforms().setValue(n, "morphTargetsTextureSize", p.size));
    } else {
      const _ = d === void 0 ? 0 : d.length;
      let g = i[u.id];
      if (g === void 0 || g.length !== _) {
        g = [];
        for (let T = 0; T < _; T++) g[T] = [T, 0];
        i[u.id] = g;
      }
      for (let T = 0; T < _; T++) {
        const L = g[T];
        ((L[0] = T), (L[1] = d[T]));
      }
      g.sort(Tp);
      for (let T = 0; T < 8; T++)
        T < _ && g[T][1] ?
          ((a[T][0] = g[T][0]), (a[T][1] = g[T][1]))
        : ((a[T][0] = Number.MAX_SAFE_INTEGER), (a[T][1] = 0));
      a.sort(yp);
      const p = u.morphAttributes.position,
        h = u.morphAttributes.normal;
      let M = 0;
      for (let T = 0; T < 8; T++) {
        const L = a[T],
          w = L[0],
          A = L[1];
        w !== Number.MAX_SAFE_INTEGER && A ?
          (p &&
            u.getAttribute("morphTarget" + T) !== p[w] &&
            u.setAttribute("morphTarget" + T, p[w]),
          h &&
            u.getAttribute("morphNormal" + T) !== h[w] &&
            u.setAttribute("morphNormal" + T, h[w]),
          (r[T] = A),
          (M += A))
        : (p &&
            u.hasAttribute("morphTarget" + T) === !0 &&
            u.deleteAttribute("morphTarget" + T),
          h &&
            u.hasAttribute("morphNormal" + T) === !0 &&
            u.deleteAttribute("morphNormal" + T),
          (r[T] = 0));
      }
      const x = u.morphTargetsRelative ? 1 : 1 - M;
      (f.getUniforms().setValue(n, "morphTargetBaseInfluence", x),
        f.getUniforms().setValue(n, "morphTargetInfluences", r));
    }
  }
  return { update: l };
}
function Ap(n, e, t, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
      u = l.geometry,
      f = e.get(l, u);
    if (
      (r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, n.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, n.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    (c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor));
  }
  return { update: s, dispose: o };
}
class Ul extends Zt {
  constructor(e, t, i, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : Qn), u !== Qn && u !== Ii))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    (i === void 0 && u === Qn && (i = In),
      i === void 0 && u === Ii && (i = Jn),
      super(null, r, s, o, a, l, u, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : zt),
      (this.minFilter = l !== void 0 ? l : zt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (super.copy(e), (this.compareFunction = e.compareFunction), this);
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const Il = new Zt(),
  Nl = new Ul(1, 1);
Nl.compareFunction = vl;
const Fl = new El(),
  Ol = new lh(),
  Bl = new Ll(),
  _o = [],
  go = [],
  vo = new Float32Array(16),
  xo = new Float32Array(9),
  Mo = new Float32Array(4);
function Oi(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = e * t;
  let s = _o[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (_o[r] = s)), e !== 0)) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) ((a += t), n[o].toArray(s, a));
  }
  return s;
}
function Et(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return !1;
  return !0;
}
function yt(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function Hr(n, e) {
  let t = go[e];
  t === void 0 && ((t = new Int32Array(e)), (go[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function wp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), (t[0] = e));
}
function Rp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Et(t, e)) return;
    (n.uniform2fv(this.addr, e), yt(t, e));
  }
}
function Cp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (n.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Et(t, e)) return;
    (n.uniform3fv(this.addr, e), yt(t, e));
  }
}
function Lp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Et(t, e)) return;
    (n.uniform4fv(this.addr, e), yt(t, e));
  }
}
function Pp(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Et(t, e)) return;
    (n.uniformMatrix2fv(this.addr, !1, e), yt(t, e));
  } else {
    if (Et(t, i)) return;
    (Mo.set(i), n.uniformMatrix2fv(this.addr, !1, Mo), yt(t, i));
  }
}
function Dp(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Et(t, e)) return;
    (n.uniformMatrix3fv(this.addr, !1, e), yt(t, e));
  } else {
    if (Et(t, i)) return;
    (xo.set(i), n.uniformMatrix3fv(this.addr, !1, xo), yt(t, i));
  }
}
function Up(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Et(t, e)) return;
    (n.uniformMatrix4fv(this.addr, !1, e), yt(t, e));
  } else {
    if (Et(t, i)) return;
    (vo.set(i), n.uniformMatrix4fv(this.addr, !1, vo), yt(t, i));
  }
}
function Ip(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), (t[0] = e));
}
function Np(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Et(t, e)) return;
    (n.uniform2iv(this.addr, e), yt(t, e));
  }
}
function Fp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Et(t, e)) return;
    (n.uniform3iv(this.addr, e), yt(t, e));
  }
}
function Op(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Et(t, e)) return;
    (n.uniform4iv(this.addr, e), yt(t, e));
  }
}
function Bp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), (t[0] = e));
}
function zp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Et(t, e)) return;
    (n.uniform2uiv(this.addr, e), yt(t, e));
  }
}
function Gp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Et(t, e)) return;
    (n.uniform3uiv(this.addr, e), yt(t, e));
  }
}
function kp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Et(t, e)) return;
    (n.uniform4uiv(this.addr, e), yt(t, e));
  }
}
function Hp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r));
  const s = this.type === n.SAMPLER_2D_SHADOW ? Nl : Il;
  t.setTexture2D(e || s, r);
}
function Vp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  (i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture3D(e || Ol, r));
}
function Wp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  (i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTextureCube(e || Bl, r));
}
function Xp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  (i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2DArray(e || Fl, r));
}
function $p(n) {
  switch (n) {
    case 5126:
      return wp;
    case 35664:
      return Rp;
    case 35665:
      return Cp;
    case 35666:
      return Lp;
    case 35674:
      return Pp;
    case 35675:
      return Dp;
    case 35676:
      return Up;
    case 5124:
    case 35670:
      return Ip;
    case 35667:
    case 35671:
      return Np;
    case 35668:
    case 35672:
      return Fp;
    case 35669:
    case 35673:
      return Op;
    case 5125:
      return Bp;
    case 36294:
      return zp;
    case 36295:
      return Gp;
    case 36296:
      return kp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hp;
    case 35679:
    case 36299:
    case 36307:
      return Vp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Wp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Xp;
  }
}
function qp(n, e) {
  n.uniform1fv(this.addr, e);
}
function Yp(n, e) {
  const t = Oi(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function jp(n, e) {
  const t = Oi(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function Kp(n, e) {
  const t = Oi(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function Zp(n, e) {
  const t = Oi(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function Jp(n, e) {
  const t = Oi(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function Qp(n, e) {
  const t = Oi(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function em(n, e) {
  n.uniform1iv(this.addr, e);
}
function tm(n, e) {
  n.uniform2iv(this.addr, e);
}
function nm(n, e) {
  n.uniform3iv(this.addr, e);
}
function im(n, e) {
  n.uniform4iv(this.addr, e);
}
function rm(n, e) {
  n.uniform1uiv(this.addr, e);
}
function sm(n, e) {
  n.uniform2uiv(this.addr, e);
}
function am(n, e) {
  n.uniform3uiv(this.addr, e);
}
function om(n, e) {
  n.uniform4uiv(this.addr, e);
}
function lm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Hr(t, r);
  Et(i, s) || (n.uniform1iv(this.addr, s), yt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Il, s[o]);
}
function cm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Hr(t, r);
  Et(i, s) || (n.uniform1iv(this.addr, s), yt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || Ol, s[o]);
}
function um(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Hr(t, r);
  Et(i, s) || (n.uniform1iv(this.addr, s), yt(i, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Bl, s[o]);
}
function hm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Hr(t, r);
  Et(i, s) || (n.uniform1iv(this.addr, s), yt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Fl, s[o]);
}
function fm(n) {
  switch (n) {
    case 5126:
      return qp;
    case 35664:
      return Yp;
    case 35665:
      return jp;
    case 35666:
      return Kp;
    case 35674:
      return Zp;
    case 35675:
      return Jp;
    case 35676:
      return Qp;
    case 5124:
    case 35670:
      return em;
    case 35667:
    case 35671:
      return tm;
    case 35668:
    case 35672:
      return nm;
    case 35669:
    case 35673:
      return im;
    case 5125:
      return rm;
    case 36294:
      return sm;
    case 36295:
      return am;
    case 36296:
      return om;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return lm;
    case 35679:
    case 36299:
    case 36307:
      return cm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return um;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hm;
  }
}
class dm {
  constructor(e, t, i) {
    ((this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = $p(t.type)));
  }
}
class pm {
  constructor(e, t, i) {
    ((this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = fm(t.type)));
  }
}
class mm {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], i);
    }
  }
}
const bs = /(\w+)(\])?(\[|\.)?/g;
function So(n, e) {
  (n.seq.push(e), (n.map[e.id] = e));
}
function _m(n, e, t) {
  const i = n.name,
    r = i.length;
  for (bs.lastIndex = 0; ; ) {
    const s = bs.exec(i),
      o = bs.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === r))) {
      So(t, c === void 0 ? new dm(a, n, e) : new pm(a, n, e));
      break;
    } else {
      let f = t.map[a];
      (f === void 0 && ((f = new mm(a)), So(t, f)), (t = f));
    }
  }
}
class Cr {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      _m(s, o, this);
    }
  }
  setValue(e, t, i, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    const r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = i[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function Eo(n, e, t) {
  const i = n.createShader(e);
  return (n.shaderSource(i, t), n.compileShader(i), i);
}
const gm = 37297;
let vm = 0;
function xm(n, e) {
  const t = n.split(`
`),
    i = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    i.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return i.join(`
`);
}
function Mm(n) {
  const e = tt.getPrimaries(tt.workingColorSpace),
    t = tt.getPrimaries(n);
  let i;
  switch (
    (e === t ? (i = "")
    : e === Nr && t === Ir ? (i = "LinearDisplayP3ToLinearSRGB")
    : e === Ir && t === Nr && (i = "LinearSRGBToLinearDisplayP3"),
    n)
  ) {
    case An:
    case zr:
      return [i, "LinearTransferOETF"];
    case Lt:
    case Ks:
      return [i, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", n),
        [i, "LinearTransferOETF"]
      );
  }
}
function yo(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS),
    r = n.getShaderInfoLog(e).trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      xm(n.getShaderSource(e), o)
    );
  } else return r;
}
function Sm(n, e) {
  const t = Mm(e);
  return `vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Em(n, e) {
  let t;
  switch (e) {
    case Pu:
      t = "Linear";
      break;
    case Du:
      t = "Reinhard";
      break;
    case Uu:
      t = "OptimizedCineon";
      break;
    case Iu:
      t = "ACESFilmic";
      break;
    case Fu:
      t = "AgX";
      break;
    case Nu:
      t = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear"));
  }
  return (
    "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function ym(n) {
  return [
    (
      n.extensionDerivatives ||
      n.envMapCubeUVHeight ||
      n.bumpMap ||
      n.normalMapTangentSpace ||
      n.clearcoatNormalMap ||
      n.flatShading ||
      n.shaderID === "physical"
    ) ?
      "#extension GL_OES_standard_derivatives : enable"
    : "",
    (
      (n.extensionFragDepth || n.logarithmicDepthBuffer) &&
      n.rendererExtensionFragDepth
    ) ?
      "#extension GL_EXT_frag_depth : enable"
    : "",
    n.extensionDrawBuffers && n.rendererExtensionDrawBuffers ?
      "#extension GL_EXT_draw_buffers : require"
    : "",
    (
      (n.extensionShaderTextureLOD || n.envMap || n.transmission) &&
      n.rendererExtensionShaderTextureLod
    ) ?
      "#extension GL_EXT_shader_texture_lod : enable"
    : "",
  ].filter(wi).join(`
`);
}
function Tm(n) {
  return [
    n.extensionClipCullDistance ?
      "#extension GL_ANGLE_clip_cull_distance : require"
    : "",
  ].filter(wi).join(`
`);
}
function bm(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function Am(n, e) {
  const t = {},
    i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    (s.type === n.FLOAT_MAT2 && (a = 2),
      s.type === n.FLOAT_MAT3 && (a = 3),
      s.type === n.FLOAT_MAT4 && (a = 4),
      (t[o] = {
        type: s.type,
        location: n.getAttribLocation(e, o),
        locationSize: a,
      }));
  }
  return t;
}
function wi(n) {
  return n !== "";
}
function To(n, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function bo(n, e) {
  return n
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const wm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Gs(n) {
  return n.replace(wm, Cm);
}
const Rm = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function Cm(n, e) {
  let t = Oe[e];
  if (t === void 0) {
    const i = Rm.get(e);
    if (i !== void 0)
      ((t = Oe[i]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          i,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Gs(t);
}
const Lm =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ao(n) {
  return n.replace(Lm, Pm);
}
function Pm(n, e, t, i) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function wo(n) {
  let e =
    "precision " +
    n.precision +
    ` float;
precision ` +
    n.precision +
    " int;";
  return (
    n.precision === "highp" ?
      (e += `
#define HIGH_PRECISION`)
    : n.precision === "mediump" ?
      (e += `
#define MEDIUM_PRECISION`)
    : n.precision === "lowp" &&
      (e += `
#define LOW_PRECISION`),
    e
  );
}
function Dm(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    n.shadowMapType === ol ? (e = "SHADOWMAP_TYPE_PCF")
    : n.shadowMapType === su ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
    : n.shadowMapType === En && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Um(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case Di:
      case Ui:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Br:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Im(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap)
    switch (n.envMapMode) {
      case Ui:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Nm(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case Ys:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Cu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Lu:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Fm(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    i = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: i,
    maxMip: t,
  };
}
function Om(n, e, t, i) {
  const r = n.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = Dm(t),
    c = Um(t),
    u = Im(t),
    f = Nm(t),
    d = Fm(t),
    m = t.isWebGL2 ? "" : ym(t),
    _ = Tm(t),
    g = bm(s),
    p = r.createProgram();
  let h,
    M,
    x =
      t.glslVersion ?
        "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial ?
    ((h = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      g,
    ].filter(wi).join(`
`)),
    h.length > 0 &&
      (h += `
`),
    (M = [
      m,
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      g,
    ].filter(wi).join(`
`)),
    M.length > 0 &&
      (M += `
`))
  : ((h = [
      wo(t),
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      g,
      t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
      t.batching ? "#define USE_BATCHING" : "",
      t.instancing ? "#define USE_INSTANCING" : "",
      t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.map ? "#define USE_MAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + u : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.anisotropy ? "#define USE_ANISOTROPY" : "",
      t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaHash ? "#define USE_ALPHAHASH" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      t.mapUv ? "#define MAP_UV " + t.mapUv : "",
      t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
      t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
      t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
      t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
      t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
      t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
      t.displacementMapUv ?
        "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
      : "",
      t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
      t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
      t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
      t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
      t.clearcoatNormalMapUv ?
        "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
      : "",
      t.clearcoatRoughnessMapUv ?
        "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
      : "",
      t.iridescenceMapUv ?
        "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
      : "",
      t.iridescenceThicknessMapUv ?
        "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
      : "",
      t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
      t.sheenRoughnessMapUv ?
        "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
      : "",
      t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
      t.specularColorMapUv ?
        "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
      : "",
      t.specularIntensityMapUv ?
        "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
      : "",
      t.transmissionMapUv ?
        "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
      : "",
      t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
      t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
      t.vertexColors ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUv1s ? "#define USE_UV1" : "",
      t.vertexUv2s ? "#define USE_UV2" : "",
      t.vertexUv3s ? "#define USE_UV3" : "",
      t.pointsUvs ? "#define USE_POINTS_UV" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.skinning ? "#define USE_SKINNING" : "",
      t.morphTargets ? "#define USE_MORPHTARGETS" : "",
      t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
      t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
      t.morphTargetsCount > 0 && t.isWebGL2 ?
        "#define MORPHTARGETS_TEXTURE"
      : "",
      t.morphTargetsCount > 0 && t.isWebGL2 ?
        "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
      : "",
      t.morphTargetsCount > 0 && t.isWebGL2 ?
        "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
      : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + l : "",
      t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
      t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ?
        "#define USE_LOGDEPTHBUF_EXT"
      : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_UV1",
      "	attribute vec2 uv1;",
      "#endif",
      "#ifdef USE_UV2",
      "	attribute vec2 uv2;",
      "#endif",
      "#ifdef USE_UV3",
      "	attribute vec2 uv3;",
      "#endif",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
      "	attribute vec3 morphTarget0;",
      "	attribute vec3 morphTarget1;",
      "	attribute vec3 morphTarget2;",
      "	attribute vec3 morphTarget3;",
      "	#ifdef USE_MORPHNORMALS",
      "		attribute vec3 morphNormal0;",
      "		attribute vec3 morphNormal1;",
      "		attribute vec3 morphNormal2;",
      "		attribute vec3 morphNormal3;",
      "	#else",
      "		attribute vec3 morphTarget4;",
      "		attribute vec3 morphTarget5;",
      "		attribute vec3 morphTarget6;",
      "		attribute vec3 morphTarget7;",
      "	#endif",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      `
`,
    ].filter(wi).join(`
`)),
    (M = [
      m,
      wo(t),
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      g,
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.map ? "#define USE_MAP" : "",
      t.matcap ? "#define USE_MATCAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + c : "",
      t.envMap ? "#define " + u : "",
      t.envMap ? "#define " + f : "",
      d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
      d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
      d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.anisotropy ? "#define USE_ANISOTROPY" : "",
      t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
      t.clearcoat ? "#define USE_CLEARCOAT" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.iridescence ? "#define USE_IRIDESCENCE" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaTest ? "#define USE_ALPHATEST" : "",
      t.alphaHash ? "#define USE_ALPHAHASH" : "",
      t.sheen ? "#define USE_SHEEN" : "",
      t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
      t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUv1s ? "#define USE_UV1" : "",
      t.vertexUv2s ? "#define USE_UV2" : "",
      t.vertexUv3s ? "#define USE_UV3" : "",
      t.pointsUvs ? "#define USE_POINTS_UV" : "",
      t.gradientMap ? "#define USE_GRADIENTMAP" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + l : "",
      t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
      t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
      t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ?
        "#define USE_LOGDEPTHBUF_EXT"
      : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      t.toneMapping !== On ? "#define TONE_MAPPING" : "",
      t.toneMapping !== On ? Oe.tonemapping_pars_fragment : "",
      t.toneMapping !== On ? Em("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      Oe.colorspace_pars_fragment,
      Sm("linearToOutputTexel", t.outputColorSpace),
      t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
      `
`,
    ].filter(wi).join(`
`))),
    (o = Gs(o)),
    (o = To(o, t)),
    (o = bo(o, t)),
    (a = Gs(a)),
    (a = To(a, t)),
    (a = bo(a, t)),
    (o = Ao(o)),
    (a = Ao(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((x = `#version 300 es
`),
      (h =
        [
          _,
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        h),
      (M =
        [
          "precision mediump sampler2DArray;",
          "#define varying in",
          t.glslVersion === Wa ?
            ""
          : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Wa ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        M)));
  const T = x + h + o,
    L = x + M + a,
    w = Eo(r, r.VERTEX_SHADER, T),
    A = Eo(r, r.FRAGMENT_SHADER, L);
  (r.attachShader(p, w),
    r.attachShader(p, A),
    t.index0AttributeName !== void 0 ?
      r.bindAttribLocation(p, 0, t.index0AttributeName)
    : t.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"),
    r.linkProgram(p));
  function k(j) {
    if (n.debug.checkShaderErrors) {
      const re = r.getProgramInfoLog(p).trim(),
        P = r.getShaderInfoLog(w).trim(),
        I = r.getShaderInfoLog(A).trim();
      let B = !0,
        X = !0;
      if (r.getProgramParameter(p, r.LINK_STATUS) === !1)
        if (((B = !1), typeof n.debug.onShaderError == "function"))
          n.debug.onShaderError(r, p, w, A);
        else {
          const $ = yo(r, w, "vertex"),
            K = yo(r, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(p, r.VALIDATE_STATUS) +
              `

Program Info Log: ` +
              re +
              `
` +
              $ +
              `
` +
              K,
          );
        }
      else
        re !== "" ?
          console.warn("THREE.WebGLProgram: Program Info Log:", re)
        : (P === "" || I === "") && (X = !1);
      X &&
        (j.diagnostics = {
          runnable: B,
          programLog: re,
          vertexShader: { log: P, prefix: h },
          fragmentShader: { log: I, prefix: M },
        });
    }
    (r.deleteShader(w), r.deleteShader(A), (S = new Cr(r, p)), (b = Am(r, p)));
  }
  let S;
  this.getUniforms = function () {
    return (S === void 0 && k(this), S);
  };
  let b;
  this.getAttributes = function () {
    return (b === void 0 && k(this), b);
  };
  let W = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (W === !1 && (W = r.getProgramParameter(p, gm)), W);
    }),
    (this.destroy = function () {
      (i.releaseStatesOfProgram(this),
        r.deleteProgram(p),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = vm++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = w),
    (this.fragmentShader = A),
    this
  );
}
let Bm = 0;
class zm {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(i),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      (i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return (i === void 0 && ((i = new Set()), t.set(e, i)), i);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return (i === void 0 && ((i = new Gm(e)), t.set(e, i)), i);
  }
}
class Gm {
  constructor(e) {
    ((this.id = Bm++), (this.code = e), (this.usedTimes = 0));
  }
}
function km(n, e, t, i, r, s, o) {
  const a = new yl(),
    l = new zm(),
    c = [],
    u = r.isWebGL2,
    f = r.logarithmicDepthBuffer,
    d = r.vertexTextures;
  let m = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function g(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, b, W, j, re) {
    const P = j.fog,
      I = re.geometry,
      B = S.isMeshStandardMaterial ? j.environment : null,
      X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || B),
      $ = X && X.mapping === Br ? X.image.height : null,
      K = _[S.type];
    S.precision !== null &&
      ((m = r.getMaxPrecision(S.precision)),
      m !== S.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          S.precision,
          "not supported, using",
          m,
          "instead.",
        ));
    const Y =
        I.morphAttributes.position ||
        I.morphAttributes.normal ||
        I.morphAttributes.color,
      te = Y !== void 0 ? Y.length : 0;
    let Q = 0;
    (I.morphAttributes.position !== void 0 && (Q = 1),
      I.morphAttributes.normal !== void 0 && (Q = 2),
      I.morphAttributes.color !== void 0 && (Q = 3));
    let U, Z, J, ue;
    if (K) {
      const Nt = fn[K];
      ((U = Nt.vertexShader), (Z = Nt.fragmentShader));
    } else
      ((U = S.vertexShader),
        (Z = S.fragmentShader),
        l.update(S),
        (J = l.getVertexShaderID(S)),
        (ue = l.getFragmentShaderID(S)));
    const pe = n.getRenderTarget(),
      Ee = re.isInstancedMesh === !0,
      Re = re.isBatchedMesh === !0,
      ge = !!S.map,
      $e = !!S.matcap,
      N = !!X,
      Tt = !!S.aoMap,
      ee = !!S.lightMap,
      Se = !!S.bumpMap,
      _e = !!S.normalMap,
      qe = !!S.displacementMap,
      Ue = !!S.emissiveMap,
      y = !!S.metalnessMap,
      v = !!S.roughnessMap,
      O = S.anisotropy > 0,
      se = S.clearcoat > 0,
      ie = S.iridescence > 0,
      ae = S.sheen > 0,
      ye = S.transmission > 0,
      de = O && !!S.anisotropyMap,
      xe = se && !!S.clearcoatMap,
      Ce = se && !!S.clearcoatNormalMap,
      Be = se && !!S.clearcoatRoughnessMap,
      ne = ie && !!S.iridescenceMap,
      et = ie && !!S.iridescenceThicknessMap,
      We = ae && !!S.sheenColorMap,
      De = ae && !!S.sheenRoughnessMap,
      be = !!S.specularMap,
      Me = !!S.specularColorMap,
      Fe = !!S.specularIntensityMap,
      Je = ye && !!S.transmissionMap,
      mt = ye && !!S.thicknessMap,
      Ge = !!S.gradientMap,
      le = !!S.alphaMap,
      C = S.alphaTest > 0,
      he = !!S.alphaHash,
      fe = !!S.extensions,
      Le = !!I.attributes.uv1,
      Ae = !!I.attributes.uv2,
      it = !!I.attributes.uv3;
    let rt = On;
    return (
      S.toneMapped &&
        (pe === null || pe.isXRRenderTarget === !0) &&
        (rt = n.toneMapping),
      {
        isWebGL2: u,
        shaderID: K,
        shaderType: S.type,
        shaderName: S.name,
        vertexShader: U,
        fragmentShader: Z,
        defines: S.defines,
        customVertexShaderID: J,
        customFragmentShaderID: ue,
        isRawShaderMaterial: S.isRawShaderMaterial === !0,
        glslVersion: S.glslVersion,
        precision: m,
        batching: Re,
        instancing: Ee,
        instancingColor: Ee && re.instanceColor !== null,
        supportsVertexTextures: d,
        outputColorSpace:
          pe === null ? n.outputColorSpace
          : pe.isXRRenderTarget === !0 ? pe.texture.colorSpace
          : An,
        map: ge,
        matcap: $e,
        envMap: N,
        envMapMode: N && X.mapping,
        envMapCubeUVHeight: $,
        aoMap: Tt,
        lightMap: ee,
        bumpMap: Se,
        normalMap: _e,
        displacementMap: d && qe,
        emissiveMap: Ue,
        normalMapObjectSpace: _e && S.normalMapType === Yu,
        normalMapTangentSpace: _e && S.normalMapType === gl,
        metalnessMap: y,
        roughnessMap: v,
        anisotropy: O,
        anisotropyMap: de,
        clearcoat: se,
        clearcoatMap: xe,
        clearcoatNormalMap: Ce,
        clearcoatRoughnessMap: Be,
        iridescence: ie,
        iridescenceMap: ne,
        iridescenceThicknessMap: et,
        sheen: ae,
        sheenColorMap: We,
        sheenRoughnessMap: De,
        specularMap: be,
        specularColorMap: Me,
        specularIntensityMap: Fe,
        transmission: ye,
        transmissionMap: Je,
        thicknessMap: mt,
        gradientMap: Ge,
        opaque: S.transparent === !1 && S.blending === Ci,
        alphaMap: le,
        alphaTest: C,
        alphaHash: he,
        combine: S.combine,
        mapUv: ge && g(S.map.channel),
        aoMapUv: Tt && g(S.aoMap.channel),
        lightMapUv: ee && g(S.lightMap.channel),
        bumpMapUv: Se && g(S.bumpMap.channel),
        normalMapUv: _e && g(S.normalMap.channel),
        displacementMapUv: qe && g(S.displacementMap.channel),
        emissiveMapUv: Ue && g(S.emissiveMap.channel),
        metalnessMapUv: y && g(S.metalnessMap.channel),
        roughnessMapUv: v && g(S.roughnessMap.channel),
        anisotropyMapUv: de && g(S.anisotropyMap.channel),
        clearcoatMapUv: xe && g(S.clearcoatMap.channel),
        clearcoatNormalMapUv: Ce && g(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: Be && g(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ne && g(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: et && g(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: We && g(S.sheenColorMap.channel),
        sheenRoughnessMapUv: De && g(S.sheenRoughnessMap.channel),
        specularMapUv: be && g(S.specularMap.channel),
        specularColorMapUv: Me && g(S.specularColorMap.channel),
        specularIntensityMapUv: Fe && g(S.specularIntensityMap.channel),
        transmissionMapUv: Je && g(S.transmissionMap.channel),
        thicknessMapUv: mt && g(S.thicknessMap.channel),
        alphaMapUv: le && g(S.alphaMap.channel),
        vertexTangents: !!I.attributes.tangent && (_e || O),
        vertexColors: S.vertexColors,
        vertexAlphas:
          S.vertexColors === !0 &&
          !!I.attributes.color &&
          I.attributes.color.itemSize === 4,
        vertexUv1s: Le,
        vertexUv2s: Ae,
        vertexUv3s: it,
        pointsUvs: re.isPoints === !0 && !!I.attributes.uv && (ge || le),
        fog: !!P,
        useFog: S.fog === !0,
        fogExp2: P && P.isFogExp2,
        flatShading: S.flatShading === !0,
        sizeAttenuation: S.sizeAttenuation === !0,
        logarithmicDepthBuffer: f,
        skinning: re.isSkinnedMesh === !0,
        morphTargets: I.morphAttributes.position !== void 0,
        morphNormals: I.morphAttributes.normal !== void 0,
        morphColors: I.morphAttributes.color !== void 0,
        morphTargetsCount: te,
        morphTextureStride: Q,
        numDirLights: b.directional.length,
        numPointLights: b.point.length,
        numSpotLights: b.spot.length,
        numSpotLightMaps: b.spotLightMap.length,
        numRectAreaLights: b.rectArea.length,
        numHemiLights: b.hemi.length,
        numDirLightShadows: b.directionalShadowMap.length,
        numPointLightShadows: b.pointShadowMap.length,
        numSpotLightShadows: b.spotShadowMap.length,
        numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
        numLightProbes: b.numLightProbes,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: S.dithering,
        shadowMapEnabled: n.shadowMap.enabled && W.length > 0,
        shadowMapType: n.shadowMap.type,
        toneMapping: rt,
        useLegacyLights: n._useLegacyLights,
        decodeVideoTexture:
          ge &&
          S.map.isVideoTexture === !0 &&
          tt.getTransfer(S.map.colorSpace) === lt,
        premultipliedAlpha: S.premultipliedAlpha,
        doubleSided: S.side === dn,
        flipSided: S.side === Wt,
        useDepthPacking: S.depthPacking >= 0,
        depthPacking: S.depthPacking || 0,
        index0AttributeName: S.index0AttributeName,
        extensionDerivatives: fe && S.extensions.derivatives === !0,
        extensionFragDepth: fe && S.extensions.fragDepth === !0,
        extensionDrawBuffers: fe && S.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: fe && S.extensions.shaderTextureLOD === !0,
        extensionClipCullDistance:
          fe &&
          S.extensions.clipCullDistance &&
          i.has("WEBGL_clip_cull_distance"),
        rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
        rendererExtensionParallelShaderCompile: i.has(
          "KHR_parallel_shader_compile",
        ),
        customProgramCacheKey: S.customProgramCacheKey(),
      }
    );
  }
  function h(S) {
    const b = [];
    if (
      (S.shaderID ?
        b.push(S.shaderID)
      : (b.push(S.customVertexShaderID), b.push(S.customFragmentShaderID)),
      S.defines !== void 0)
    )
      for (const W in S.defines) (b.push(W), b.push(S.defines[W]));
    return (
      S.isRawShaderMaterial === !1 &&
        (M(b, S), x(b, S), b.push(n.outputColorSpace)),
      b.push(S.customProgramCacheKey),
      b.join()
    );
  }
  function M(S, b) {
    (S.push(b.precision),
      S.push(b.outputColorSpace),
      S.push(b.envMapMode),
      S.push(b.envMapCubeUVHeight),
      S.push(b.mapUv),
      S.push(b.alphaMapUv),
      S.push(b.lightMapUv),
      S.push(b.aoMapUv),
      S.push(b.bumpMapUv),
      S.push(b.normalMapUv),
      S.push(b.displacementMapUv),
      S.push(b.emissiveMapUv),
      S.push(b.metalnessMapUv),
      S.push(b.roughnessMapUv),
      S.push(b.anisotropyMapUv),
      S.push(b.clearcoatMapUv),
      S.push(b.clearcoatNormalMapUv),
      S.push(b.clearcoatRoughnessMapUv),
      S.push(b.iridescenceMapUv),
      S.push(b.iridescenceThicknessMapUv),
      S.push(b.sheenColorMapUv),
      S.push(b.sheenRoughnessMapUv),
      S.push(b.specularMapUv),
      S.push(b.specularColorMapUv),
      S.push(b.specularIntensityMapUv),
      S.push(b.transmissionMapUv),
      S.push(b.thicknessMapUv),
      S.push(b.combine),
      S.push(b.fogExp2),
      S.push(b.sizeAttenuation),
      S.push(b.morphTargetsCount),
      S.push(b.morphAttributeCount),
      S.push(b.numDirLights),
      S.push(b.numPointLights),
      S.push(b.numSpotLights),
      S.push(b.numSpotLightMaps),
      S.push(b.numHemiLights),
      S.push(b.numRectAreaLights),
      S.push(b.numDirLightShadows),
      S.push(b.numPointLightShadows),
      S.push(b.numSpotLightShadows),
      S.push(b.numSpotLightShadowsWithMaps),
      S.push(b.numLightProbes),
      S.push(b.shadowMapType),
      S.push(b.toneMapping),
      S.push(b.numClippingPlanes),
      S.push(b.numClipIntersection),
      S.push(b.depthPacking));
  }
  function x(S, b) {
    (a.disableAll(),
      b.isWebGL2 && a.enable(0),
      b.supportsVertexTextures && a.enable(1),
      b.instancing && a.enable(2),
      b.instancingColor && a.enable(3),
      b.matcap && a.enable(4),
      b.envMap && a.enable(5),
      b.normalMapObjectSpace && a.enable(6),
      b.normalMapTangentSpace && a.enable(7),
      b.clearcoat && a.enable(8),
      b.iridescence && a.enable(9),
      b.alphaTest && a.enable(10),
      b.vertexColors && a.enable(11),
      b.vertexAlphas && a.enable(12),
      b.vertexUv1s && a.enable(13),
      b.vertexUv2s && a.enable(14),
      b.vertexUv3s && a.enable(15),
      b.vertexTangents && a.enable(16),
      b.anisotropy && a.enable(17),
      b.alphaHash && a.enable(18),
      b.batching && a.enable(19),
      S.push(a.mask),
      a.disableAll(),
      b.fog && a.enable(0),
      b.useFog && a.enable(1),
      b.flatShading && a.enable(2),
      b.logarithmicDepthBuffer && a.enable(3),
      b.skinning && a.enable(4),
      b.morphTargets && a.enable(5),
      b.morphNormals && a.enable(6),
      b.morphColors && a.enable(7),
      b.premultipliedAlpha && a.enable(8),
      b.shadowMapEnabled && a.enable(9),
      b.useLegacyLights && a.enable(10),
      b.doubleSided && a.enable(11),
      b.flipSided && a.enable(12),
      b.useDepthPacking && a.enable(13),
      b.dithering && a.enable(14),
      b.transmission && a.enable(15),
      b.sheen && a.enable(16),
      b.opaque && a.enable(17),
      b.pointsUvs && a.enable(18),
      b.decodeVideoTexture && a.enable(19),
      S.push(a.mask));
  }
  function T(S) {
    const b = _[S.type];
    let W;
    if (b) {
      const j = fn[b];
      W = Eh.clone(j.uniforms);
    } else W = S.uniforms;
    return W;
  }
  function L(S, b) {
    let W;
    for (let j = 0, re = c.length; j < re; j++) {
      const P = c[j];
      if (P.cacheKey === b) {
        ((W = P), ++W.usedTimes);
        break;
      }
    }
    return (W === void 0 && ((W = new Om(n, b, S, s)), c.push(W)), W);
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const b = c.indexOf(S);
      ((c[b] = c[c.length - 1]), c.pop(), S.destroy());
    }
  }
  function A(S) {
    l.remove(S);
  }
  function k() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: L,
    releaseProgram: w,
    releaseShaderCache: A,
    programs: c,
    dispose: k,
  };
}
function Hm() {
  let n = new WeakMap();
  function e(s) {
    let o = n.get(s);
    return (o === void 0 && ((o = {}), n.set(s, o)), o);
  }
  function t(s) {
    n.delete(s);
  }
  function i(s, o, a) {
    n.get(s)[o] = a;
  }
  function r() {
    n = new WeakMap();
  }
  return { get: e, remove: t, update: i, dispose: r };
}
function Vm(n, e) {
  return (
    n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder
    : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder
    : n.material.id !== e.material.id ? n.material.id - e.material.id
    : n.z !== e.z ? n.z - e.z
    : n.id - e.id
  );
}
function Ro(n, e) {
  return (
    n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder
    : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder
    : n.z !== e.z ? e.z - n.z
    : n.id - e.id
  );
}
function Co() {
  const n = [];
  let e = 0;
  const t = [],
    i = [],
    r = [];
  function s() {
    ((e = 0), (t.length = 0), (i.length = 0), (r.length = 0));
  }
  function o(f, d, m, _, g, p) {
    let h = n[e];
    return (
      h === void 0 ?
        ((h = {
          id: f.id,
          object: f,
          geometry: d,
          material: m,
          groupOrder: _,
          renderOrder: f.renderOrder,
          z: g,
          group: p,
        }),
        (n[e] = h))
      : ((h.id = f.id),
        (h.object = f),
        (h.geometry = d),
        (h.material = m),
        (h.groupOrder = _),
        (h.renderOrder = f.renderOrder),
        (h.z = g),
        (h.group = p)),
      e++,
      h
    );
  }
  function a(f, d, m, _, g, p) {
    const h = o(f, d, m, _, g, p);
    m.transmission > 0 ? i.push(h)
    : m.transparent === !0 ? r.push(h)
    : t.push(h);
  }
  function l(f, d, m, _, g, p) {
    const h = o(f, d, m, _, g, p);
    m.transmission > 0 ? i.unshift(h)
    : m.transparent === !0 ? r.unshift(h)
    : t.unshift(h);
  }
  function c(f, d) {
    (t.length > 1 && t.sort(f || Vm),
      i.length > 1 && i.sort(d || Ro),
      r.length > 1 && r.sort(d || Ro));
  }
  function u() {
    for (let f = e, d = n.length; f < d; f++) {
      const m = n[f];
      if (m.id === null) break;
      ((m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function Wm() {
  let n = new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let o;
    return (
      s === void 0 ? ((o = new Co()), n.set(i, [o]))
      : r >= s.length ? ((o = new Co()), s.push(o))
      : (o = s[r]),
      o
    );
  }
  function t() {
    n = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Xm() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new G(), color: new Ke() };
          break;
        case "SpotLight":
          t = {
            position: new G(),
            direction: new G(),
            color: new Ke(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new G(), color: new Ke(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new G(), skyColor: new Ke(), groundColor: new Ke() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ke(),
            position: new G(),
            halfWidth: new G(),
            halfHeight: new G(),
          };
          break;
      }
      return ((n[e.id] = t), t);
    },
  };
}
function $m() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ze(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ze(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ze(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((n[e.id] = t), t);
    },
  };
}
let qm = 0;
function Ym(n, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (n.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (n.map ? 1 : 0)
  );
}
function jm(n, e) {
  const t = new Xm(),
    i = $m(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let u = 0; u < 9; u++) r.probe.push(new G());
  const s = new G(),
    o = new St(),
    a = new St();
  function l(u, f) {
    let d = 0,
      m = 0,
      _ = 0;
    for (let j = 0; j < 9; j++) r.probe[j].set(0, 0, 0);
    let g = 0,
      p = 0,
      h = 0,
      M = 0,
      x = 0,
      T = 0,
      L = 0,
      w = 0,
      A = 0,
      k = 0,
      S = 0;
    u.sort(Ym);
    const b = f === !0 ? Math.PI : 1;
    for (let j = 0, re = u.length; j < re; j++) {
      const P = u[j],
        I = P.color,
        B = P.intensity,
        X = P.distance,
        $ = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        ((d += I.r * B * b), (m += I.g * B * b), (_ += I.b * B * b));
      else if (P.isLightProbe) {
        for (let K = 0; K < 9; K++)
          r.probe[K].addScaledVector(P.sh.coefficients[K], B);
        S++;
      } else if (P.isDirectionalLight) {
        const K = t.get(P);
        if (
          (K.color.copy(P.color).multiplyScalar(P.intensity * b), P.castShadow)
        ) {
          const Y = P.shadow,
            te = i.get(P);
          ((te.shadowBias = Y.bias),
            (te.shadowNormalBias = Y.normalBias),
            (te.shadowRadius = Y.radius),
            (te.shadowMapSize = Y.mapSize),
            (r.directionalShadow[g] = te),
            (r.directionalShadowMap[g] = $),
            (r.directionalShadowMatrix[g] = P.shadow.matrix),
            T++);
        }
        ((r.directional[g] = K), g++);
      } else if (P.isSpotLight) {
        const K = t.get(P);
        (K.position.setFromMatrixPosition(P.matrixWorld),
          K.color.copy(I).multiplyScalar(B * b),
          (K.distance = X),
          (K.coneCos = Math.cos(P.angle)),
          (K.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (K.decay = P.decay),
          (r.spot[h] = K));
        const Y = P.shadow;
        if (
          (P.map &&
            ((r.spotLightMap[A] = P.map),
            A++,
            Y.updateMatrices(P),
            P.castShadow && k++),
          (r.spotLightMatrix[h] = Y.matrix),
          P.castShadow)
        ) {
          const te = i.get(P);
          ((te.shadowBias = Y.bias),
            (te.shadowNormalBias = Y.normalBias),
            (te.shadowRadius = Y.radius),
            (te.shadowMapSize = Y.mapSize),
            (r.spotShadow[h] = te),
            (r.spotShadowMap[h] = $),
            w++);
        }
        h++;
      } else if (P.isRectAreaLight) {
        const K = t.get(P);
        (K.color.copy(I).multiplyScalar(B),
          K.halfWidth.set(P.width * 0.5, 0, 0),
          K.halfHeight.set(0, P.height * 0.5, 0),
          (r.rectArea[M] = K),
          M++);
      } else if (P.isPointLight) {
        const K = t.get(P);
        if (
          (K.color.copy(P.color).multiplyScalar(P.intensity * b),
          (K.distance = P.distance),
          (K.decay = P.decay),
          P.castShadow)
        ) {
          const Y = P.shadow,
            te = i.get(P);
          ((te.shadowBias = Y.bias),
            (te.shadowNormalBias = Y.normalBias),
            (te.shadowRadius = Y.radius),
            (te.shadowMapSize = Y.mapSize),
            (te.shadowCameraNear = Y.camera.near),
            (te.shadowCameraFar = Y.camera.far),
            (r.pointShadow[p] = te),
            (r.pointShadowMap[p] = $),
            (r.pointShadowMatrix[p] = P.shadow.matrix),
            L++);
        }
        ((r.point[p] = K), p++);
      } else if (P.isHemisphereLight) {
        const K = t.get(P);
        (K.skyColor.copy(P.color).multiplyScalar(B * b),
          K.groundColor.copy(P.groundColor).multiplyScalar(B * b),
          (r.hemi[x] = K),
          x++);
      }
    }
    (M > 0 &&
      (e.isWebGL2 ?
        n.has("OES_texture_float_linear") === !0 ?
          ((r.rectAreaLTC1 = ce.LTC_FLOAT_1), (r.rectAreaLTC2 = ce.LTC_FLOAT_2))
        : ((r.rectAreaLTC1 = ce.LTC_HALF_1), (r.rectAreaLTC2 = ce.LTC_HALF_2))
      : n.has("OES_texture_float_linear") === !0 ?
        ((r.rectAreaLTC1 = ce.LTC_FLOAT_1), (r.rectAreaLTC2 = ce.LTC_FLOAT_2))
      : n.has("OES_texture_half_float_linear") === !0 ?
        ((r.rectAreaLTC1 = ce.LTC_HALF_1), (r.rectAreaLTC2 = ce.LTC_HALF_2))
      : console.error(
          "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.",
        )),
      (r.ambient[0] = d),
      (r.ambient[1] = m),
      (r.ambient[2] = _));
    const W = r.hash;
    (W.directionalLength !== g ||
      W.pointLength !== p ||
      W.spotLength !== h ||
      W.rectAreaLength !== M ||
      W.hemiLength !== x ||
      W.numDirectionalShadows !== T ||
      W.numPointShadows !== L ||
      W.numSpotShadows !== w ||
      W.numSpotMaps !== A ||
      W.numLightProbes !== S) &&
      ((r.directional.length = g),
      (r.spot.length = h),
      (r.rectArea.length = M),
      (r.point.length = p),
      (r.hemi.length = x),
      (r.directionalShadow.length = T),
      (r.directionalShadowMap.length = T),
      (r.pointShadow.length = L),
      (r.pointShadowMap.length = L),
      (r.spotShadow.length = w),
      (r.spotShadowMap.length = w),
      (r.directionalShadowMatrix.length = T),
      (r.pointShadowMatrix.length = L),
      (r.spotLightMatrix.length = w + A - k),
      (r.spotLightMap.length = A),
      (r.numSpotLightShadowsWithMaps = k),
      (r.numLightProbes = S),
      (W.directionalLength = g),
      (W.pointLength = p),
      (W.spotLength = h),
      (W.rectAreaLength = M),
      (W.hemiLength = x),
      (W.numDirectionalShadows = T),
      (W.numPointShadows = L),
      (W.numSpotShadows = w),
      (W.numSpotMaps = A),
      (W.numLightProbes = S),
      (r.version = qm++));
  }
  function c(u, f) {
    let d = 0,
      m = 0,
      _ = 0,
      g = 0,
      p = 0;
    const h = f.matrixWorldInverse;
    for (let M = 0, x = u.length; M < x; M++) {
      const T = u[M];
      if (T.isDirectionalLight) {
        const L = r.directional[d];
        (L.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          L.direction.sub(s),
          L.direction.transformDirection(h),
          d++);
      } else if (T.isSpotLight) {
        const L = r.spot[_];
        (L.position.setFromMatrixPosition(T.matrixWorld),
          L.position.applyMatrix4(h),
          L.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          L.direction.sub(s),
          L.direction.transformDirection(h),
          _++);
      } else if (T.isRectAreaLight) {
        const L = r.rectArea[g];
        (L.position.setFromMatrixPosition(T.matrixWorld),
          L.position.applyMatrix4(h),
          a.identity(),
          o.copy(T.matrixWorld),
          o.premultiply(h),
          a.extractRotation(o),
          L.halfWidth.set(T.width * 0.5, 0, 0),
          L.halfHeight.set(0, T.height * 0.5, 0),
          L.halfWidth.applyMatrix4(a),
          L.halfHeight.applyMatrix4(a),
          g++);
      } else if (T.isPointLight) {
        const L = r.point[m];
        (L.position.setFromMatrixPosition(T.matrixWorld),
          L.position.applyMatrix4(h),
          m++);
      } else if (T.isHemisphereLight) {
        const L = r.hemi[p];
        (L.direction.setFromMatrixPosition(T.matrixWorld),
          L.direction.transformDirection(h),
          p++);
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Lo(n, e) {
  const t = new jm(n, e),
    i = [],
    r = [];
  function s() {
    ((i.length = 0), (r.length = 0));
  }
  function o(f) {
    i.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(i, f);
  }
  function c(f) {
    t.setupView(i, f);
  }
  return {
    init: s,
    state: { lightsArray: i, shadowsArray: r, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function Km(n, e) {
  let t = new WeakMap();
  function i(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0 ? ((l = new Lo(n, e)), t.set(s, [l]))
      : o >= a.length ? ((l = new Lo(n, e)), a.push(l))
      : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: i, dispose: r };
}
class Zm extends er {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = $u),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Jm extends er {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Qm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  e_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function t_(n, e, t) {
  let i = new Js();
  const r = new Ze(),
    s = new Ze(),
    o = new Ct(),
    a = new Zm({ depthPacking: qu }),
    l = new Jm(),
    c = {},
    u = t.maxTextureSize,
    f = { [Gn]: Wt, [Wt]: Gn, [dn]: dn },
    d = new ii({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ze() },
        radius: { value: 4 },
      },
      vertexShader: Qm,
      fragmentShader: e_,
    }),
    m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new si();
  _.setAttribute(
    "position",
    new pn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const g = new Tn(_, d),
    p = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = ol));
  let h = this.type;
  this.render = function (w, A, k) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const S = n.getRenderTarget(),
      b = n.getActiveCubeFace(),
      W = n.getActiveMipmapLevel(),
      j = n.state;
    (j.setBlending(Fn),
      j.buffers.color.setClear(1, 1, 1, 1),
      j.buffers.depth.setTest(!0),
      j.setScissorTest(!1));
    const re = h !== En && this.type === En,
      P = h === En && this.type !== En;
    for (let I = 0, B = w.length; I < B; I++) {
      const X = w[I],
        $ = X.shadow;
      if ($ === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if ($.autoUpdate === !1 && $.needsUpdate === !1) continue;
      r.copy($.mapSize);
      const K = $.getFrameExtents();
      if (
        (r.multiply(K),
        s.copy($.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / K.x)),
            (r.x = s.x * K.x),
            ($.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / K.y)),
            (r.y = s.y * K.y),
            ($.mapSize.y = s.y))),
        $.map === null || re === !0 || P === !0)
      ) {
        const te = this.type !== En ? { minFilter: zt, magFilter: zt } : {};
        ($.map !== null && $.map.dispose(),
          ($.map = new ni(r.x, r.y, te)),
          ($.map.texture.name = X.name + ".shadowMap"),
          $.camera.updateProjectionMatrix());
      }
      (n.setRenderTarget($.map), n.clear());
      const Y = $.getViewportCount();
      for (let te = 0; te < Y; te++) {
        const Q = $.getViewport(te);
        (o.set(s.x * Q.x, s.y * Q.y, s.x * Q.z, s.y * Q.w),
          j.viewport(o),
          $.updateMatrices(X, te),
          (i = $.getFrustum()),
          T(A, k, $.camera, X, this.type));
      }
      ($.isPointLightShadow !== !0 && this.type === En && M($, k),
        ($.needsUpdate = !1));
    }
    ((h = this.type), (p.needsUpdate = !1), n.setRenderTarget(S, b, W));
  };
  function M(w, A) {
    const k = e.update(g);
    (d.defines.VSM_SAMPLES !== w.blurSamples &&
      ((d.defines.VSM_SAMPLES = w.blurSamples),
      (m.defines.VSM_SAMPLES = w.blurSamples),
      (d.needsUpdate = !0),
      (m.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new ni(r.x, r.y)),
      (d.uniforms.shadow_pass.value = w.map.texture),
      (d.uniforms.resolution.value = w.mapSize),
      (d.uniforms.radius.value = w.radius),
      n.setRenderTarget(w.mapPass),
      n.clear(),
      n.renderBufferDirect(A, null, k, d, g, null),
      (m.uniforms.shadow_pass.value = w.mapPass.texture),
      (m.uniforms.resolution.value = w.mapSize),
      (m.uniforms.radius.value = w.radius),
      n.setRenderTarget(w.map),
      n.clear(),
      n.renderBufferDirect(A, null, k, m, g, null));
  }
  function x(w, A, k, S) {
    let b = null;
    const W =
      k.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (W !== void 0) b = W;
    else if (
      ((b = k.isPointLight === !0 ? l : a),
      (n.localClippingEnabled &&
        A.clipShadows === !0 &&
        Array.isArray(A.clippingPlanes) &&
        A.clippingPlanes.length !== 0) ||
        (A.displacementMap && A.displacementScale !== 0) ||
        (A.alphaMap && A.alphaTest > 0) ||
        (A.map && A.alphaTest > 0))
    ) {
      const j = b.uuid,
        re = A.uuid;
      let P = c[j];
      P === void 0 && ((P = {}), (c[j] = P));
      let I = P[re];
      (I === void 0 &&
        ((I = b.clone()), (P[re] = I), A.addEventListener("dispose", L)),
        (b = I));
    }
    if (
      ((b.visible = A.visible),
      (b.wireframe = A.wireframe),
      S === En ?
        (b.side = A.shadowSide !== null ? A.shadowSide : A.side)
      : (b.side = A.shadowSide !== null ? A.shadowSide : f[A.side]),
      (b.alphaMap = A.alphaMap),
      (b.alphaTest = A.alphaTest),
      (b.map = A.map),
      (b.clipShadows = A.clipShadows),
      (b.clippingPlanes = A.clippingPlanes),
      (b.clipIntersection = A.clipIntersection),
      (b.displacementMap = A.displacementMap),
      (b.displacementScale = A.displacementScale),
      (b.displacementBias = A.displacementBias),
      (b.wireframeLinewidth = A.wireframeLinewidth),
      (b.linewidth = A.linewidth),
      k.isPointLight === !0 && b.isMeshDistanceMaterial === !0)
    ) {
      const j = n.properties.get(b);
      j.light = k;
    }
    return b;
  }
  function T(w, A, k, S, b) {
    if (w.visible === !1) return;
    if (
      w.layers.test(A.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && b === En)) &&
      (!w.frustumCulled || i.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, w.matrixWorld);
      const re = e.update(w),
        P = w.material;
      if (Array.isArray(P)) {
        const I = re.groups;
        for (let B = 0, X = I.length; B < X; B++) {
          const $ = I[B],
            K = P[$.materialIndex];
          if (K && K.visible) {
            const Y = x(w, K, S, b);
            (w.onBeforeShadow(n, w, A, k, re, Y, $),
              n.renderBufferDirect(k, null, re, Y, w, $),
              w.onAfterShadow(n, w, A, k, re, Y, $));
          }
        }
      } else if (P.visible) {
        const I = x(w, P, S, b);
        (w.onBeforeShadow(n, w, A, k, re, I, null),
          n.renderBufferDirect(k, null, re, I, w, null),
          w.onAfterShadow(n, w, A, k, re, I, null));
      }
    }
    const j = w.children;
    for (let re = 0, P = j.length; re < P; re++) T(j[re], A, k, S, b);
  }
  function L(w) {
    w.target.removeEventListener("dispose", L);
    for (const k in c) {
      const S = c[k],
        b = w.target.uuid;
      b in S && (S[b].dispose(), delete S[b]);
    }
  }
}
function n_(n, e, t) {
  const i = t.isWebGL2;
  function r() {
    let C = !1;
    const he = new Ct();
    let fe = null;
    const Le = new Ct(0, 0, 0, 0);
    return {
      setMask: function (Ae) {
        fe !== Ae && !C && (n.colorMask(Ae, Ae, Ae, Ae), (fe = Ae));
      },
      setLocked: function (Ae) {
        C = Ae;
      },
      setClear: function (Ae, it, rt, bt, Nt) {
        (Nt === !0 && ((Ae *= bt), (it *= bt), (rt *= bt)),
          he.set(Ae, it, rt, bt),
          Le.equals(he) === !1 && (n.clearColor(Ae, it, rt, bt), Le.copy(he)));
      },
      reset: function () {
        ((C = !1), (fe = null), Le.set(-1, 0, 0, 0));
      },
    };
  }
  function s() {
    let C = !1,
      he = null,
      fe = null,
      Le = null;
    return {
      setTest: function (Ae) {
        Ae ? Re(n.DEPTH_TEST) : ge(n.DEPTH_TEST);
      },
      setMask: function (Ae) {
        he !== Ae && !C && (n.depthMask(Ae), (he = Ae));
      },
      setFunc: function (Ae) {
        if (fe !== Ae) {
          switch (Ae) {
            case Eu:
              n.depthFunc(n.NEVER);
              break;
            case yu:
              n.depthFunc(n.ALWAYS);
              break;
            case Tu:
              n.depthFunc(n.LESS);
              break;
            case Dr:
              n.depthFunc(n.LEQUAL);
              break;
            case bu:
              n.depthFunc(n.EQUAL);
              break;
            case Au:
              n.depthFunc(n.GEQUAL);
              break;
            case wu:
              n.depthFunc(n.GREATER);
              break;
            case Ru:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          fe = Ae;
        }
      },
      setLocked: function (Ae) {
        C = Ae;
      },
      setClear: function (Ae) {
        Le !== Ae && (n.clearDepth(Ae), (Le = Ae));
      },
      reset: function () {
        ((C = !1), (he = null), (fe = null), (Le = null));
      },
    };
  }
  function o() {
    let C = !1,
      he = null,
      fe = null,
      Le = null,
      Ae = null,
      it = null,
      rt = null,
      bt = null,
      Nt = null;
    return {
      setTest: function (st) {
        C || (st ? Re(n.STENCIL_TEST) : ge(n.STENCIL_TEST));
      },
      setMask: function (st) {
        he !== st && !C && (n.stencilMask(st), (he = st));
      },
      setFunc: function (st, Ft, hn) {
        (fe !== st || Le !== Ft || Ae !== hn) &&
          (n.stencilFunc(st, Ft, hn), (fe = st), (Le = Ft), (Ae = hn));
      },
      setOp: function (st, Ft, hn) {
        (it !== st || rt !== Ft || bt !== hn) &&
          (n.stencilOp(st, Ft, hn), (it = st), (rt = Ft), (bt = hn));
      },
      setLocked: function (st) {
        C = st;
      },
      setClear: function (st) {
        Nt !== st && (n.clearStencil(st), (Nt = st));
      },
      reset: function () {
        ((C = !1),
          (he = null),
          (fe = null),
          (Le = null),
          (Ae = null),
          (it = null),
          (rt = null),
          (bt = null),
          (Nt = null));
      },
    };
  }
  const a = new r(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    f = new WeakMap();
  let d = {},
    m = {},
    _ = new WeakMap(),
    g = [],
    p = null,
    h = !1,
    M = null,
    x = null,
    T = null,
    L = null,
    w = null,
    A = null,
    k = null,
    S = new Ke(0, 0, 0),
    b = 0,
    W = !1,
    j = null,
    re = null,
    P = null,
    I = null,
    B = null;
  const X = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1,
    K = 0;
  const Y = n.getParameter(n.VERSION);
  Y.indexOf("WebGL") !== -1 ?
    ((K = parseFloat(/^WebGL (\d)/.exec(Y)[1])), ($ = K >= 1))
  : Y.indexOf("OpenGL ES") !== -1 &&
    ((K = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1])), ($ = K >= 2));
  let te = null,
    Q = {};
  const U = n.getParameter(n.SCISSOR_BOX),
    Z = n.getParameter(n.VIEWPORT),
    J = new Ct().fromArray(U),
    ue = new Ct().fromArray(Z);
  function pe(C, he, fe, Le) {
    const Ae = new Uint8Array(4),
      it = n.createTexture();
    (n.bindTexture(C, it),
      n.texParameteri(C, n.TEXTURE_MIN_FILTER, n.NEAREST),
      n.texParameteri(C, n.TEXTURE_MAG_FILTER, n.NEAREST));
    for (let rt = 0; rt < fe; rt++)
      i && (C === n.TEXTURE_3D || C === n.TEXTURE_2D_ARRAY) ?
        n.texImage3D(he, 0, n.RGBA, 1, 1, Le, 0, n.RGBA, n.UNSIGNED_BYTE, Ae)
      : n.texImage2D(he + rt, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, Ae);
    return it;
  }
  const Ee = {};
  ((Ee[n.TEXTURE_2D] = pe(n.TEXTURE_2D, n.TEXTURE_2D, 1)),
    (Ee[n.TEXTURE_CUBE_MAP] = pe(
      n.TEXTURE_CUBE_MAP,
      n.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    i &&
      ((Ee[n.TEXTURE_2D_ARRAY] = pe(
        n.TEXTURE_2D_ARRAY,
        n.TEXTURE_2D_ARRAY,
        1,
        1,
      )),
      (Ee[n.TEXTURE_3D] = pe(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Re(n.DEPTH_TEST),
    l.setFunc(Dr),
    Ue(!1),
    y(ua),
    Re(n.CULL_FACE),
    _e(Fn));
  function Re(C) {
    d[C] !== !0 && (n.enable(C), (d[C] = !0));
  }
  function ge(C) {
    d[C] !== !1 && (n.disable(C), (d[C] = !1));
  }
  function $e(C, he) {
    return m[C] !== he ?
        (n.bindFramebuffer(C, he),
        (m[C] = he),
        i &&
          (C === n.DRAW_FRAMEBUFFER && (m[n.FRAMEBUFFER] = he),
          C === n.FRAMEBUFFER && (m[n.DRAW_FRAMEBUFFER] = he)),
        !0)
      : !1;
  }
  function N(C, he) {
    let fe = g,
      Le = !1;
    if (C)
      if (
        ((fe = _.get(he)),
        fe === void 0 && ((fe = []), _.set(he, fe)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const Ae = C.texture;
        if (fe.length !== Ae.length || fe[0] !== n.COLOR_ATTACHMENT0) {
          for (let it = 0, rt = Ae.length; it < rt; it++)
            fe[it] = n.COLOR_ATTACHMENT0 + it;
          ((fe.length = Ae.length), (Le = !0));
        }
      } else
        fe[0] !== n.COLOR_ATTACHMENT0 &&
          ((fe[0] = n.COLOR_ATTACHMENT0), (Le = !0));
    else fe[0] !== n.BACK && ((fe[0] = n.BACK), (Le = !0));
    Le &&
      (t.isWebGL2 ?
        n.drawBuffers(fe)
      : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe));
  }
  function Tt(C) {
    return p !== C ? (n.useProgram(C), (p = C), !0) : !1;
  }
  const ee = {
    [jn]: n.FUNC_ADD,
    [ou]: n.FUNC_SUBTRACT,
    [lu]: n.FUNC_REVERSE_SUBTRACT,
  };
  if (i) ((ee[pa] = n.MIN), (ee[ma] = n.MAX));
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((ee[pa] = C.MIN_EXT), (ee[ma] = C.MAX_EXT));
  }
  const Se = {
    [cu]: n.ZERO,
    [uu]: n.ONE,
    [hu]: n.SRC_COLOR,
    [Ps]: n.SRC_ALPHA,
    [gu]: n.SRC_ALPHA_SATURATE,
    [mu]: n.DST_COLOR,
    [du]: n.DST_ALPHA,
    [fu]: n.ONE_MINUS_SRC_COLOR,
    [Ds]: n.ONE_MINUS_SRC_ALPHA,
    [_u]: n.ONE_MINUS_DST_COLOR,
    [pu]: n.ONE_MINUS_DST_ALPHA,
    [vu]: n.CONSTANT_COLOR,
    [xu]: n.ONE_MINUS_CONSTANT_COLOR,
    [Mu]: n.CONSTANT_ALPHA,
    [Su]: n.ONE_MINUS_CONSTANT_ALPHA,
  };
  function _e(C, he, fe, Le, Ae, it, rt, bt, Nt, st) {
    if (C === Fn) {
      h === !0 && (ge(n.BLEND), (h = !1));
      return;
    }
    if ((h === !1 && (Re(n.BLEND), (h = !0)), C !== au)) {
      if (C !== M || st !== W) {
        if (
          ((x !== jn || w !== jn) &&
            (n.blendEquation(n.FUNC_ADD), (x = jn), (w = jn)),
          st)
        )
          switch (C) {
            case Ci:
              n.blendFuncSeparate(
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case ha:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case fa:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case da:
              n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Ci:
              n.blendFuncSeparate(
                n.SRC_ALPHA,
                n.ONE_MINUS_SRC_ALPHA,
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case ha:
              n.blendFunc(n.SRC_ALPHA, n.ONE);
              break;
            case fa:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case da:
              n.blendFunc(n.ZERO, n.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        ((T = null),
          (L = null),
          (A = null),
          (k = null),
          S.set(0, 0, 0),
          (b = 0),
          (M = C),
          (W = st));
      }
      return;
    }
    ((Ae = Ae || he),
      (it = it || fe),
      (rt = rt || Le),
      (he !== x || Ae !== w) &&
        (n.blendEquationSeparate(ee[he], ee[Ae]), (x = he), (w = Ae)),
      (fe !== T || Le !== L || it !== A || rt !== k) &&
        (n.blendFuncSeparate(Se[fe], Se[Le], Se[it], Se[rt]),
        (T = fe),
        (L = Le),
        (A = it),
        (k = rt)),
      (bt.equals(S) === !1 || Nt !== b) &&
        (n.blendColor(bt.r, bt.g, bt.b, Nt), S.copy(bt), (b = Nt)),
      (M = C),
      (W = !1));
  }
  function qe(C, he) {
    C.side === dn ? ge(n.CULL_FACE) : Re(n.CULL_FACE);
    let fe = C.side === Wt;
    (he && (fe = !fe),
      Ue(fe),
      C.blending === Ci && C.transparent === !1 ?
        _e(Fn)
      : _e(
          C.blending,
          C.blendEquation,
          C.blendSrc,
          C.blendDst,
          C.blendEquationAlpha,
          C.blendSrcAlpha,
          C.blendDstAlpha,
          C.blendColor,
          C.blendAlpha,
          C.premultipliedAlpha,
        ),
      l.setFunc(C.depthFunc),
      l.setTest(C.depthTest),
      l.setMask(C.depthWrite),
      a.setMask(C.colorWrite));
    const Le = C.stencilWrite;
    (c.setTest(Le),
      Le &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      O(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ?
        Re(n.SAMPLE_ALPHA_TO_COVERAGE)
      : ge(n.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Ue(C) {
    j !== C && (C ? n.frontFace(n.CW) : n.frontFace(n.CCW), (j = C));
  }
  function y(C) {
    (C !== iu ?
      (Re(n.CULL_FACE),
      C !== re &&
        (C === ua ? n.cullFace(n.BACK)
        : C === ru ? n.cullFace(n.FRONT)
        : n.cullFace(n.FRONT_AND_BACK)))
    : ge(n.CULL_FACE),
      (re = C));
  }
  function v(C) {
    C !== P && ($ && n.lineWidth(C), (P = C));
  }
  function O(C, he, fe) {
    C ?
      (Re(n.POLYGON_OFFSET_FILL),
      (I !== he || B !== fe) && (n.polygonOffset(he, fe), (I = he), (B = fe)))
    : ge(n.POLYGON_OFFSET_FILL);
  }
  function se(C) {
    C ? Re(n.SCISSOR_TEST) : ge(n.SCISSOR_TEST);
  }
  function ie(C) {
    (C === void 0 && (C = n.TEXTURE0 + X - 1),
      te !== C && (n.activeTexture(C), (te = C)));
  }
  function ae(C, he, fe) {
    fe === void 0 && (te === null ? (fe = n.TEXTURE0 + X - 1) : (fe = te));
    let Le = Q[fe];
    (Le === void 0 && ((Le = { type: void 0, texture: void 0 }), (Q[fe] = Le)),
      (Le.type !== C || Le.texture !== he) &&
        (te !== fe && (n.activeTexture(fe), (te = fe)),
        n.bindTexture(C, he || Ee[C]),
        (Le.type = C),
        (Le.texture = he)));
  }
  function ye() {
    const C = Q[te];
    C !== void 0 &&
      C.type !== void 0 &&
      (n.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function de() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function xe() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ce() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Be() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ne() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function et() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function We() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function De() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function be() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Me() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Fe(C) {
    J.equals(C) === !1 && (n.scissor(C.x, C.y, C.z, C.w), J.copy(C));
  }
  function Je(C) {
    ue.equals(C) === !1 && (n.viewport(C.x, C.y, C.z, C.w), ue.copy(C));
  }
  function mt(C, he) {
    let fe = f.get(he);
    fe === void 0 && ((fe = new WeakMap()), f.set(he, fe));
    let Le = fe.get(C);
    Le === void 0 && ((Le = n.getUniformBlockIndex(he, C.name)), fe.set(C, Le));
  }
  function Ge(C, he) {
    const Le = f.get(he).get(C);
    u.get(he) !== Le &&
      (n.uniformBlockBinding(he, Le, C.__bindingPointIndex), u.set(he, Le));
  }
  function le() {
    (n.disable(n.BLEND),
      n.disable(n.CULL_FACE),
      n.disable(n.DEPTH_TEST),
      n.disable(n.POLYGON_OFFSET_FILL),
      n.disable(n.SCISSOR_TEST),
      n.disable(n.STENCIL_TEST),
      n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
      n.blendEquation(n.FUNC_ADD),
      n.blendFunc(n.ONE, n.ZERO),
      n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO),
      n.blendColor(0, 0, 0, 0),
      n.colorMask(!0, !0, !0, !0),
      n.clearColor(0, 0, 0, 0),
      n.depthMask(!0),
      n.depthFunc(n.LESS),
      n.clearDepth(1),
      n.stencilMask(4294967295),
      n.stencilFunc(n.ALWAYS, 0, 4294967295),
      n.stencilOp(n.KEEP, n.KEEP, n.KEEP),
      n.clearStencil(0),
      n.cullFace(n.BACK),
      n.frontFace(n.CCW),
      n.polygonOffset(0, 0),
      n.activeTexture(n.TEXTURE0),
      n.bindFramebuffer(n.FRAMEBUFFER, null),
      i === !0 &&
        (n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
        n.bindFramebuffer(n.READ_FRAMEBUFFER, null)),
      n.useProgram(null),
      n.lineWidth(1),
      n.scissor(0, 0, n.canvas.width, n.canvas.height),
      n.viewport(0, 0, n.canvas.width, n.canvas.height),
      (d = {}),
      (te = null),
      (Q = {}),
      (m = {}),
      (_ = new WeakMap()),
      (g = []),
      (p = null),
      (h = !1),
      (M = null),
      (x = null),
      (T = null),
      (L = null),
      (w = null),
      (A = null),
      (k = null),
      (S = new Ke(0, 0, 0)),
      (b = 0),
      (W = !1),
      (j = null),
      (re = null),
      (P = null),
      (I = null),
      (B = null),
      J.set(0, 0, n.canvas.width, n.canvas.height),
      ue.set(0, 0, n.canvas.width, n.canvas.height),
      a.reset(),
      l.reset(),
      c.reset());
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: Re,
    disable: ge,
    bindFramebuffer: $e,
    drawBuffers: N,
    useProgram: Tt,
    setBlending: _e,
    setMaterial: qe,
    setFlipSided: Ue,
    setCullFace: y,
    setLineWidth: v,
    setPolygonOffset: O,
    setScissorTest: se,
    activeTexture: ie,
    bindTexture: ae,
    unbindTexture: ye,
    compressedTexImage2D: de,
    compressedTexImage3D: xe,
    texImage2D: be,
    texImage3D: Me,
    updateUBOMapping: mt,
    uniformBlockBinding: Ge,
    texStorage2D: We,
    texStorage3D: De,
    texSubImage2D: Ce,
    texSubImage3D: Be,
    compressedTexSubImage2D: ne,
    compressedTexSubImage3D: et,
    scissor: Fe,
    viewport: Je,
    reset: le,
  };
}
function i_(n, e, t, i, r, s, o) {
  const a = r.isWebGL2,
    l =
      e.has("WEBGL_multisampled_render_to_texture") ?
        e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    u = new WeakMap();
  let f;
  const d = new WeakMap();
  let m = !1;
  try {
    m =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function _(y, v) {
    return m ? new OffscreenCanvas(y, v) : Or("canvas");
  }
  function g(y, v, O, se) {
    let ie = 1;
    if (
      ((y.width > se || y.height > se) &&
        (ie = se / Math.max(y.width, y.height)),
      ie < 1 || v === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && y instanceof ImageBitmap)
      ) {
        const ae = v ? zs : Math.floor,
          ye = ae(ie * y.width),
          de = ae(ie * y.height);
        f === void 0 && (f = _(ye, de));
        const xe = O ? _(ye, de) : f;
        return (
          (xe.width = ye),
          (xe.height = de),
          xe.getContext("2d").drawImage(y, 0, 0, ye, de),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              y.width +
              "x" +
              y.height +
              ") to (" +
              ye +
              "x" +
              de +
              ").",
          ),
          xe
        );
      } else
        return (
          "data" in y &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                y.width +
                "x" +
                y.height +
                ").",
            ),
          y
        );
    return y;
  }
  function p(y) {
    return Xa(y.width) && Xa(y.height);
  }
  function h(y) {
    return a ? !1 : (
        y.wrapS !== cn ||
          y.wrapT !== cn ||
          (y.minFilter !== zt && y.minFilter !== en)
      );
  }
  function M(y, v) {
    return y.generateMipmaps && v && y.minFilter !== zt && y.minFilter !== en;
  }
  function x(y) {
    n.generateMipmap(y);
  }
  function T(y, v, O, se, ie = !1) {
    if (a === !1) return v;
    if (y !== null) {
      if (n[y] !== void 0) return n[y];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          y +
          "'",
      );
    }
    let ae = v;
    if (
      (v === n.RED &&
        (O === n.FLOAT && (ae = n.R32F),
        O === n.HALF_FLOAT && (ae = n.R16F),
        O === n.UNSIGNED_BYTE && (ae = n.R8)),
      v === n.RED_INTEGER &&
        (O === n.UNSIGNED_BYTE && (ae = n.R8UI),
        O === n.UNSIGNED_SHORT && (ae = n.R16UI),
        O === n.UNSIGNED_INT && (ae = n.R32UI),
        O === n.BYTE && (ae = n.R8I),
        O === n.SHORT && (ae = n.R16I),
        O === n.INT && (ae = n.R32I)),
      v === n.RG &&
        (O === n.FLOAT && (ae = n.RG32F),
        O === n.HALF_FLOAT && (ae = n.RG16F),
        O === n.UNSIGNED_BYTE && (ae = n.RG8)),
      v === n.RGBA)
    ) {
      const ye = ie ? Ur : tt.getTransfer(se);
      (O === n.FLOAT && (ae = n.RGBA32F),
        O === n.HALF_FLOAT && (ae = n.RGBA16F),
        O === n.UNSIGNED_BYTE && (ae = ye === lt ? n.SRGB8_ALPHA8 : n.RGBA8),
        O === n.UNSIGNED_SHORT_4_4_4_4 && (ae = n.RGBA4),
        O === n.UNSIGNED_SHORT_5_5_5_1 && (ae = n.RGB5_A1));
    }
    return (
      (ae === n.R16F ||
        ae === n.R32F ||
        ae === n.RG16F ||
        ae === n.RG32F ||
        ae === n.RGBA16F ||
        ae === n.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      ae
    );
  }
  function L(y, v, O) {
    return (
      (
        M(y, O) === !0 ||
          (y.isFramebufferTexture && y.minFilter !== zt && y.minFilter !== en)
      ) ?
        Math.log2(Math.max(v.width, v.height)) + 1
      : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length
      : y.isCompressedTexture && Array.isArray(y.image) ? v.mipmaps.length
      : 1
    );
  }
  function w(y) {
    return y === zt || y === _a || y === Kr ? n.NEAREST : n.LINEAR;
  }
  function A(y) {
    const v = y.target;
    (v.removeEventListener("dispose", A),
      S(v),
      v.isVideoTexture && u.delete(v));
  }
  function k(y) {
    const v = y.target;
    (v.removeEventListener("dispose", k), W(v));
  }
  function S(y) {
    const v = i.get(y);
    if (v.__webglInit === void 0) return;
    const O = y.source,
      se = d.get(O);
    if (se) {
      const ie = se[v.__cacheKey];
      (ie.usedTimes--,
        ie.usedTimes === 0 && b(y),
        Object.keys(se).length === 0 && d.delete(O));
    }
    i.remove(y);
  }
  function b(y) {
    const v = i.get(y);
    n.deleteTexture(v.__webglTexture);
    const O = y.source,
      se = d.get(O);
    (delete se[v.__cacheKey], o.memory.textures--);
  }
  function W(y) {
    const v = y.texture,
      O = i.get(y),
      se = i.get(v);
    if (
      (se.__webglTexture !== void 0 &&
        (n.deleteTexture(se.__webglTexture), o.memory.textures--),
      y.depthTexture && y.depthTexture.dispose(),
      y.isWebGLCubeRenderTarget)
    )
      for (let ie = 0; ie < 6; ie++) {
        if (Array.isArray(O.__webglFramebuffer[ie]))
          for (let ae = 0; ae < O.__webglFramebuffer[ie].length; ae++)
            n.deleteFramebuffer(O.__webglFramebuffer[ie][ae]);
        else n.deleteFramebuffer(O.__webglFramebuffer[ie]);
        O.__webglDepthbuffer && n.deleteRenderbuffer(O.__webglDepthbuffer[ie]);
      }
    else {
      if (Array.isArray(O.__webglFramebuffer))
        for (let ie = 0; ie < O.__webglFramebuffer.length; ie++)
          n.deleteFramebuffer(O.__webglFramebuffer[ie]);
      else n.deleteFramebuffer(O.__webglFramebuffer);
      if (
        (O.__webglDepthbuffer && n.deleteRenderbuffer(O.__webglDepthbuffer),
        O.__webglMultisampledFramebuffer &&
          n.deleteFramebuffer(O.__webglMultisampledFramebuffer),
        O.__webglColorRenderbuffer)
      )
        for (let ie = 0; ie < O.__webglColorRenderbuffer.length; ie++)
          O.__webglColorRenderbuffer[ie] &&
            n.deleteRenderbuffer(O.__webglColorRenderbuffer[ie]);
      O.__webglDepthRenderbuffer &&
        n.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let ie = 0, ae = v.length; ie < ae; ie++) {
        const ye = i.get(v[ie]);
        (ye.__webglTexture &&
          (n.deleteTexture(ye.__webglTexture), o.memory.textures--),
          i.remove(v[ie]));
      }
    (i.remove(v), i.remove(y));
  }
  let j = 0;
  function re() {
    j = 0;
  }
  function P() {
    const y = j;
    return (
      y >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            y +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (j += 1),
      y
    );
  }
  function I(y) {
    const v = [];
    return (
      v.push(y.wrapS),
      v.push(y.wrapT),
      v.push(y.wrapR || 0),
      v.push(y.magFilter),
      v.push(y.minFilter),
      v.push(y.anisotropy),
      v.push(y.internalFormat),
      v.push(y.format),
      v.push(y.type),
      v.push(y.generateMipmaps),
      v.push(y.premultiplyAlpha),
      v.push(y.flipY),
      v.push(y.unpackAlignment),
      v.push(y.colorSpace),
      v.join()
    );
  }
  function B(y, v) {
    const O = i.get(y);
    if (
      (y.isVideoTexture && qe(y),
      y.isRenderTargetTexture === !1 &&
        y.version > 0 &&
        O.__version !== y.version)
    ) {
      const se = y.image;
      if (se === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (se.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        J(O, y, v);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, O.__webglTexture, n.TEXTURE0 + v);
  }
  function X(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      J(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, O.__webglTexture, n.TEXTURE0 + v);
  }
  function $(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      J(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, O.__webglTexture, n.TEXTURE0 + v);
  }
  function K(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      ue(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, O.__webglTexture, n.TEXTURE0 + v);
  }
  const Y = { [Ns]: n.REPEAT, [cn]: n.CLAMP_TO_EDGE, [Fs]: n.MIRRORED_REPEAT },
    te = {
      [zt]: n.NEAREST,
      [_a]: n.NEAREST_MIPMAP_NEAREST,
      [Kr]: n.NEAREST_MIPMAP_LINEAR,
      [en]: n.LINEAR,
      [Ou]: n.LINEAR_MIPMAP_NEAREST,
      [ji]: n.LINEAR_MIPMAP_LINEAR,
    },
    Q = {
      [ju]: n.NEVER,
      [th]: n.ALWAYS,
      [Ku]: n.LESS,
      [vl]: n.LEQUAL,
      [Zu]: n.EQUAL,
      [eh]: n.GEQUAL,
      [Ju]: n.GREATER,
      [Qu]: n.NOTEQUAL,
    };
  function U(y, v, O) {
    if (
      (O ?
        (n.texParameteri(y, n.TEXTURE_WRAP_S, Y[v.wrapS]),
        n.texParameteri(y, n.TEXTURE_WRAP_T, Y[v.wrapT]),
        (y === n.TEXTURE_3D || y === n.TEXTURE_2D_ARRAY) &&
          n.texParameteri(y, n.TEXTURE_WRAP_R, Y[v.wrapR]),
        n.texParameteri(y, n.TEXTURE_MAG_FILTER, te[v.magFilter]),
        n.texParameteri(y, n.TEXTURE_MIN_FILTER, te[v.minFilter]))
      : (n.texParameteri(y, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE),
        n.texParameteri(y, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE),
        (y === n.TEXTURE_3D || y === n.TEXTURE_2D_ARRAY) &&
          n.texParameteri(y, n.TEXTURE_WRAP_R, n.CLAMP_TO_EDGE),
        (v.wrapS !== cn || v.wrapT !== cn) &&
          console.warn(
            "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",
          ),
        n.texParameteri(y, n.TEXTURE_MAG_FILTER, w(v.magFilter)),
        n.texParameteri(y, n.TEXTURE_MIN_FILTER, w(v.minFilter)),
        v.minFilter !== zt &&
          v.minFilter !== en &&
          console.warn(
            "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",
          )),
      v.compareFunction &&
        (n.texParameteri(y, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE),
        n.texParameteri(y, n.TEXTURE_COMPARE_FUNC, Q[v.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const se = e.get("EXT_texture_filter_anisotropic");
      if (
        v.magFilter === zt ||
        (v.minFilter !== Kr && v.minFilter !== ji) ||
        (v.type === Nn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          v.type === Ki &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (v.anisotropy > 1 || i.get(v).__currentAnisotropy) &&
        (n.texParameterf(
          y,
          se.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(v.anisotropy, r.getMaxAnisotropy()),
        ),
        (i.get(v).__currentAnisotropy = v.anisotropy));
    }
  }
  function Z(y, v) {
    let O = !1;
    y.__webglInit === void 0 &&
      ((y.__webglInit = !0), v.addEventListener("dispose", A));
    const se = v.source;
    let ie = d.get(se);
    ie === void 0 && ((ie = {}), d.set(se, ie));
    const ae = I(v);
    if (ae !== y.__cacheKey) {
      (ie[ae] === void 0 &&
        ((ie[ae] = { texture: n.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (O = !0)),
        ie[ae].usedTimes++);
      const ye = ie[y.__cacheKey];
      (ye !== void 0 &&
        (ie[y.__cacheKey].usedTimes--, ye.usedTimes === 0 && b(v)),
        (y.__cacheKey = ae),
        (y.__webglTexture = ie[ae].texture));
    }
    return O;
  }
  function J(y, v, O) {
    let se = n.TEXTURE_2D;
    ((v.isDataArrayTexture || v.isCompressedArrayTexture) &&
      (se = n.TEXTURE_2D_ARRAY),
      v.isData3DTexture && (se = n.TEXTURE_3D));
    const ie = Z(y, v),
      ae = v.source;
    t.bindTexture(se, y.__webglTexture, n.TEXTURE0 + O);
    const ye = i.get(ae);
    if (ae.version !== ye.__version || ie === !0) {
      t.activeTexture(n.TEXTURE0 + O);
      const de = tt.getPrimaries(tt.workingColorSpace),
        xe = v.colorSpace === nn ? null : tt.getPrimaries(v.colorSpace),
        Ce =
          v.colorSpace === nn || de === xe ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ce));
      const Be = h(v) && p(v.image) === !1;
      let ne = g(v.image, Be, !1, r.maxTextureSize);
      ne = Ue(v, ne);
      const et = p(ne) || a,
        We = s.convert(v.format, v.colorSpace);
      let De = s.convert(v.type),
        be = T(v.internalFormat, We, De, v.colorSpace, v.isVideoTexture);
      U(se, v, et);
      let Me;
      const Fe = v.mipmaps,
        Je = a && v.isVideoTexture !== !0 && be !== ml,
        mt = ye.__version === void 0 || ie === !0,
        Ge = L(v, ne, et);
      if (v.isDepthTexture)
        ((be = n.DEPTH_COMPONENT),
          a ?
            v.type === Nn ? (be = n.DEPTH_COMPONENT32F)
            : v.type === In ? (be = n.DEPTH_COMPONENT24)
            : v.type === Jn ? (be = n.DEPTH24_STENCIL8)
            : (be = n.DEPTH_COMPONENT16)
          : v.type === Nn &&
            console.error(
              "WebGLRenderer: Floating point depth texture requires WebGL2.",
            ),
          v.format === Qn &&
            be === n.DEPTH_COMPONENT &&
            v.type !== js &&
            v.type !== In &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.",
            ),
            (v.type = In),
            (De = s.convert(v.type))),
          v.format === Ii &&
            be === n.DEPTH_COMPONENT &&
            ((be = n.DEPTH_STENCIL),
            v.type !== Jn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.",
              ),
              (v.type = Jn),
              (De = s.convert(v.type)))),
          mt &&
            (Je ?
              t.texStorage2D(n.TEXTURE_2D, 1, be, ne.width, ne.height)
            : t.texImage2D(
                n.TEXTURE_2D,
                0,
                be,
                ne.width,
                ne.height,
                0,
                We,
                De,
                null,
              )));
      else if (v.isDataTexture)
        if (Fe.length > 0 && et) {
          Je &&
            mt &&
            t.texStorage2D(n.TEXTURE_2D, Ge, be, Fe[0].width, Fe[0].height);
          for (let le = 0, C = Fe.length; le < C; le++)
            ((Me = Fe[le]),
              Je ?
                t.texSubImage2D(
                  n.TEXTURE_2D,
                  le,
                  0,
                  0,
                  Me.width,
                  Me.height,
                  We,
                  De,
                  Me.data,
                )
              : t.texImage2D(
                  n.TEXTURE_2D,
                  le,
                  be,
                  Me.width,
                  Me.height,
                  0,
                  We,
                  De,
                  Me.data,
                ));
          v.generateMipmaps = !1;
        } else
          Je ?
            (mt && t.texStorage2D(n.TEXTURE_2D, Ge, be, ne.width, ne.height),
            t.texSubImage2D(
              n.TEXTURE_2D,
              0,
              0,
              0,
              ne.width,
              ne.height,
              We,
              De,
              ne.data,
            ))
          : t.texImage2D(
              n.TEXTURE_2D,
              0,
              be,
              ne.width,
              ne.height,
              0,
              We,
              De,
              ne.data,
            );
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Je &&
            mt &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ge,
              be,
              Fe[0].width,
              Fe[0].height,
              ne.depth,
            );
          for (let le = 0, C = Fe.length; le < C; le++)
            ((Me = Fe[le]),
              v.format !== un ?
                We !== null ?
                  Je ?
                    t.compressedTexSubImage3D(
                      n.TEXTURE_2D_ARRAY,
                      le,
                      0,
                      0,
                      0,
                      Me.width,
                      Me.height,
                      ne.depth,
                      We,
                      Me.data,
                      0,
                      0,
                    )
                  : t.compressedTexImage3D(
                      n.TEXTURE_2D_ARRAY,
                      le,
                      be,
                      Me.width,
                      Me.height,
                      ne.depth,
                      0,
                      Me.data,
                      0,
                      0,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                  )
              : Je ?
                t.texSubImage3D(
                  n.TEXTURE_2D_ARRAY,
                  le,
                  0,
                  0,
                  0,
                  Me.width,
                  Me.height,
                  ne.depth,
                  We,
                  De,
                  Me.data,
                )
              : t.texImage3D(
                  n.TEXTURE_2D_ARRAY,
                  le,
                  be,
                  Me.width,
                  Me.height,
                  ne.depth,
                  0,
                  We,
                  De,
                  Me.data,
                ));
        } else {
          Je &&
            mt &&
            t.texStorage2D(n.TEXTURE_2D, Ge, be, Fe[0].width, Fe[0].height);
          for (let le = 0, C = Fe.length; le < C; le++)
            ((Me = Fe[le]),
              v.format !== un ?
                We !== null ?
                  Je ?
                    t.compressedTexSubImage2D(
                      n.TEXTURE_2D,
                      le,
                      0,
                      0,
                      Me.width,
                      Me.height,
                      We,
                      Me.data,
                    )
                  : t.compressedTexImage2D(
                      n.TEXTURE_2D,
                      le,
                      be,
                      Me.width,
                      Me.height,
                      0,
                      Me.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                  )
              : Je ?
                t.texSubImage2D(
                  n.TEXTURE_2D,
                  le,
                  0,
                  0,
                  Me.width,
                  Me.height,
                  We,
                  De,
                  Me.data,
                )
              : t.texImage2D(
                  n.TEXTURE_2D,
                  le,
                  be,
                  Me.width,
                  Me.height,
                  0,
                  We,
                  De,
                  Me.data,
                ));
        }
      else if (v.isDataArrayTexture)
        Je ?
          (mt &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ge,
              be,
              ne.width,
              ne.height,
              ne.depth,
            ),
          t.texSubImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            0,
            0,
            0,
            ne.width,
            ne.height,
            ne.depth,
            We,
            De,
            ne.data,
          ))
        : t.texImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            be,
            ne.width,
            ne.height,
            ne.depth,
            0,
            We,
            De,
            ne.data,
          );
      else if (v.isData3DTexture)
        Je ?
          (mt &&
            t.texStorage3D(n.TEXTURE_3D, Ge, be, ne.width, ne.height, ne.depth),
          t.texSubImage3D(
            n.TEXTURE_3D,
            0,
            0,
            0,
            0,
            ne.width,
            ne.height,
            ne.depth,
            We,
            De,
            ne.data,
          ))
        : t.texImage3D(
            n.TEXTURE_3D,
            0,
            be,
            ne.width,
            ne.height,
            ne.depth,
            0,
            We,
            De,
            ne.data,
          );
      else if (v.isFramebufferTexture) {
        if (mt)
          if (Je) t.texStorage2D(n.TEXTURE_2D, Ge, be, ne.width, ne.height);
          else {
            let le = ne.width,
              C = ne.height;
            for (let he = 0; he < Ge; he++)
              (t.texImage2D(n.TEXTURE_2D, he, be, le, C, 0, We, De, null),
                (le >>= 1),
                (C >>= 1));
          }
      } else if (Fe.length > 0 && et) {
        Je &&
          mt &&
          t.texStorage2D(n.TEXTURE_2D, Ge, be, Fe[0].width, Fe[0].height);
        for (let le = 0, C = Fe.length; le < C; le++)
          ((Me = Fe[le]),
            Je ?
              t.texSubImage2D(n.TEXTURE_2D, le, 0, 0, We, De, Me)
            : t.texImage2D(n.TEXTURE_2D, le, be, We, De, Me));
        v.generateMipmaps = !1;
      } else
        Je ?
          (mt && t.texStorage2D(n.TEXTURE_2D, Ge, be, ne.width, ne.height),
          t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, We, De, ne))
        : t.texImage2D(n.TEXTURE_2D, 0, be, We, De, ne);
      (M(v, et) && x(se),
        (ye.__version = ae.version),
        v.onUpdate && v.onUpdate(v));
    }
    y.__version = v.version;
  }
  function ue(y, v, O) {
    if (v.image.length !== 6) return;
    const se = Z(y, v),
      ie = v.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, y.__webglTexture, n.TEXTURE0 + O);
    const ae = i.get(ie);
    if (ie.version !== ae.__version || se === !0) {
      t.activeTexture(n.TEXTURE0 + O);
      const ye = tt.getPrimaries(tt.workingColorSpace),
        de = v.colorSpace === nn ? null : tt.getPrimaries(v.colorSpace),
        xe =
          v.colorSpace === nn || ye === de ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe));
      const Ce = v.isCompressedTexture || v.image[0].isCompressedTexture,
        Be = v.image[0] && v.image[0].isDataTexture,
        ne = [];
      for (let le = 0; le < 6; le++)
        (!Ce && !Be ?
          (ne[le] = g(v.image[le], !1, !0, r.maxCubemapSize))
        : (ne[le] = Be ? v.image[le].image : v.image[le]),
          (ne[le] = Ue(v, ne[le])));
      const et = ne[0],
        We = p(et) || a,
        De = s.convert(v.format, v.colorSpace),
        be = s.convert(v.type),
        Me = T(v.internalFormat, De, be, v.colorSpace),
        Fe = a && v.isVideoTexture !== !0,
        Je = ae.__version === void 0 || se === !0;
      let mt = L(v, et, We);
      U(n.TEXTURE_CUBE_MAP, v, We);
      let Ge;
      if (Ce) {
        Fe &&
          Je &&
          t.texStorage2D(n.TEXTURE_CUBE_MAP, mt, Me, et.width, et.height);
        for (let le = 0; le < 6; le++) {
          Ge = ne[le].mipmaps;
          for (let C = 0; C < Ge.length; C++) {
            const he = Ge[C];
            v.format !== un ?
              De !== null ?
                Fe ?
                  t.compressedTexSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    C,
                    0,
                    0,
                    he.width,
                    he.height,
                    De,
                    he.data,
                  )
                : t.compressedTexImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    C,
                    Me,
                    he.width,
                    he.height,
                    0,
                    he.data,
                  )
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                )
            : Fe ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                C,
                0,
                0,
                he.width,
                he.height,
                De,
                be,
                he.data,
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                C,
                Me,
                he.width,
                he.height,
                0,
                De,
                be,
                he.data,
              );
          }
        }
      } else {
        ((Ge = v.mipmaps),
          Fe &&
            Je &&
            (Ge.length > 0 && mt++,
            t.texStorage2D(
              n.TEXTURE_CUBE_MAP,
              mt,
              Me,
              ne[0].width,
              ne[0].height,
            )));
        for (let le = 0; le < 6; le++)
          if (Be) {
            Fe ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                0,
                0,
                0,
                ne[le].width,
                ne[le].height,
                De,
                be,
                ne[le].data,
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                0,
                Me,
                ne[le].width,
                ne[le].height,
                0,
                De,
                be,
                ne[le].data,
              );
            for (let C = 0; C < Ge.length; C++) {
              const fe = Ge[C].image[le].image;
              Fe ?
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  C + 1,
                  0,
                  0,
                  fe.width,
                  fe.height,
                  De,
                  be,
                  fe.data,
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  C + 1,
                  Me,
                  fe.width,
                  fe.height,
                  0,
                  De,
                  be,
                  fe.data,
                );
            }
          } else {
            Fe ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                0,
                0,
                0,
                De,
                be,
                ne[le],
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                0,
                Me,
                De,
                be,
                ne[le],
              );
            for (let C = 0; C < Ge.length; C++) {
              const he = Ge[C];
              Fe ?
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  C + 1,
                  0,
                  0,
                  De,
                  be,
                  he.image[le],
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  C + 1,
                  Me,
                  De,
                  be,
                  he.image[le],
                );
            }
          }
      }
      (M(v, We) && x(n.TEXTURE_CUBE_MAP),
        (ae.__version = ie.version),
        v.onUpdate && v.onUpdate(v));
    }
    y.__version = v.version;
  }
  function pe(y, v, O, se, ie, ae) {
    const ye = s.convert(O.format, O.colorSpace),
      de = s.convert(O.type),
      xe = T(O.internalFormat, ye, de, O.colorSpace);
    if (!i.get(v).__hasExternalTextures) {
      const Be = Math.max(1, v.width >> ae),
        ne = Math.max(1, v.height >> ae);
      ie === n.TEXTURE_3D || ie === n.TEXTURE_2D_ARRAY ?
        t.texImage3D(ie, ae, xe, Be, ne, v.depth, 0, ye, de, null)
      : t.texImage2D(ie, ae, xe, Be, ne, 0, ye, de, null);
    }
    (t.bindFramebuffer(n.FRAMEBUFFER, y),
      _e(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          se,
          ie,
          i.get(O).__webglTexture,
          0,
          Se(v),
        )
      : (ie === n.TEXTURE_2D ||
          (ie >= n.TEXTURE_CUBE_MAP_POSITIVE_X &&
            ie <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
        n.framebufferTexture2D(
          n.FRAMEBUFFER,
          se,
          ie,
          i.get(O).__webglTexture,
          ae,
        ),
      t.bindFramebuffer(n.FRAMEBUFFER, null));
  }
  function Ee(y, v, O) {
    if (
      (n.bindRenderbuffer(n.RENDERBUFFER, y), v.depthBuffer && !v.stencilBuffer)
    ) {
      let se = a === !0 ? n.DEPTH_COMPONENT24 : n.DEPTH_COMPONENT16;
      if (O || _e(v)) {
        const ie = v.depthTexture;
        ie &&
          ie.isDepthTexture &&
          (ie.type === Nn ?
            (se = n.DEPTH_COMPONENT32F)
          : ie.type === In && (se = n.DEPTH_COMPONENT24));
        const ae = Se(v);
        _e(v) ?
          l.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            ae,
            se,
            v.width,
            v.height,
          )
        : n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            ae,
            se,
            v.width,
            v.height,
          );
      } else n.renderbufferStorage(n.RENDERBUFFER, se, v.width, v.height);
      n.framebufferRenderbuffer(
        n.FRAMEBUFFER,
        n.DEPTH_ATTACHMENT,
        n.RENDERBUFFER,
        y,
      );
    } else if (v.depthBuffer && v.stencilBuffer) {
      const se = Se(v);
      (O && _e(v) === !1 ?
        n.renderbufferStorageMultisample(
          n.RENDERBUFFER,
          se,
          n.DEPTH24_STENCIL8,
          v.width,
          v.height,
        )
      : _e(v) ?
        l.renderbufferStorageMultisampleEXT(
          n.RENDERBUFFER,
          se,
          n.DEPTH24_STENCIL8,
          v.width,
          v.height,
        )
      : n.renderbufferStorage(
          n.RENDERBUFFER,
          n.DEPTH_STENCIL,
          v.width,
          v.height,
        ),
        n.framebufferRenderbuffer(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.RENDERBUFFER,
          y,
        ));
    } else {
      const se =
        v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ie = 0; ie < se.length; ie++) {
        const ae = se[ie],
          ye = s.convert(ae.format, ae.colorSpace),
          de = s.convert(ae.type),
          xe = T(ae.internalFormat, ye, de, ae.colorSpace),
          Ce = Se(v);
        O && _e(v) === !1 ?
          n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            Ce,
            xe,
            v.width,
            v.height,
          )
        : _e(v) ?
          l.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            Ce,
            xe,
            v.width,
            v.height,
          )
        : n.renderbufferStorage(n.RENDERBUFFER, xe, v.width, v.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function Re(y, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(n.FRAMEBUFFER, y),
      !(v.depthTexture && v.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    ((!i.get(v.depthTexture).__webglTexture ||
      v.depthTexture.image.width !== v.width ||
      v.depthTexture.image.height !== v.height) &&
      ((v.depthTexture.image.width = v.width),
      (v.depthTexture.image.height = v.height),
      (v.depthTexture.needsUpdate = !0)),
      B(v.depthTexture, 0));
    const se = i.get(v.depthTexture).__webglTexture,
      ie = Se(v);
    if (v.depthTexture.format === Qn)
      _e(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          n.DEPTH_ATTACHMENT,
          n.TEXTURE_2D,
          se,
          0,
          ie,
        )
      : n.framebufferTexture2D(
          n.FRAMEBUFFER,
          n.DEPTH_ATTACHMENT,
          n.TEXTURE_2D,
          se,
          0,
        );
    else if (v.depthTexture.format === Ii)
      _e(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.TEXTURE_2D,
          se,
          0,
          ie,
        )
      : n.framebufferTexture2D(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.TEXTURE_2D,
          se,
          0,
        );
    else throw new Error("Unknown depthTexture format");
  }
  function ge(y) {
    const v = i.get(y),
      O = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      Re(v.__webglFramebuffer, y);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let se = 0; se < 6; se++)
        (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[se]),
          (v.__webglDepthbuffer[se] = n.createRenderbuffer()),
          Ee(v.__webglDepthbuffer[se], y, !1));
    } else
      (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer),
        (v.__webglDepthbuffer = n.createRenderbuffer()),
        Ee(v.__webglDepthbuffer, y, !1));
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function $e(y, v, O) {
    const se = i.get(y);
    (v !== void 0 &&
      pe(
        se.__webglFramebuffer,
        y,
        y.texture,
        n.COLOR_ATTACHMENT0,
        n.TEXTURE_2D,
        0,
      ),
      O !== void 0 && ge(y));
  }
  function N(y) {
    const v = y.texture,
      O = i.get(y),
      se = i.get(v);
    (y.addEventListener("dispose", k),
      y.isWebGLMultipleRenderTargets !== !0 &&
        (se.__webglTexture === void 0 &&
          (se.__webglTexture = n.createTexture()),
        (se.__version = v.version),
        o.memory.textures++));
    const ie = y.isWebGLCubeRenderTarget === !0,
      ae = y.isWebGLMultipleRenderTargets === !0,
      ye = p(y) || a;
    if (ie) {
      O.__webglFramebuffer = [];
      for (let de = 0; de < 6; de++)
        if (a && v.mipmaps && v.mipmaps.length > 0) {
          O.__webglFramebuffer[de] = [];
          for (let xe = 0; xe < v.mipmaps.length; xe++)
            O.__webglFramebuffer[de][xe] = n.createFramebuffer();
        } else O.__webglFramebuffer[de] = n.createFramebuffer();
    } else {
      if (a && v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let de = 0; de < v.mipmaps.length; de++)
          O.__webglFramebuffer[de] = n.createFramebuffer();
      } else O.__webglFramebuffer = n.createFramebuffer();
      if (ae)
        if (r.drawBuffers) {
          const de = y.texture;
          for (let xe = 0, Ce = de.length; xe < Ce; xe++) {
            const Be = i.get(de[xe]);
            Be.__webglTexture === void 0 &&
              ((Be.__webglTexture = n.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.",
          );
      if (a && y.samples > 0 && _e(y) === !1) {
        const de = ae ? v : [v];
        ((O.__webglMultisampledFramebuffer = n.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          t.bindFramebuffer(n.FRAMEBUFFER, O.__webglMultisampledFramebuffer));
        for (let xe = 0; xe < de.length; xe++) {
          const Ce = de[xe];
          ((O.__webglColorRenderbuffer[xe] = n.createRenderbuffer()),
            n.bindRenderbuffer(n.RENDERBUFFER, O.__webglColorRenderbuffer[xe]));
          const Be = s.convert(Ce.format, Ce.colorSpace),
            ne = s.convert(Ce.type),
            et = T(
              Ce.internalFormat,
              Be,
              ne,
              Ce.colorSpace,
              y.isXRRenderTarget === !0,
            ),
            We = Se(y);
          (n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            We,
            et,
            y.width,
            y.height,
          ),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + xe,
              n.RENDERBUFFER,
              O.__webglColorRenderbuffer[xe],
            ));
        }
        (n.bindRenderbuffer(n.RENDERBUFFER, null),
          y.depthBuffer &&
            ((O.__webglDepthRenderbuffer = n.createRenderbuffer()),
            Ee(O.__webglDepthRenderbuffer, y, !0)),
          t.bindFramebuffer(n.FRAMEBUFFER, null));
      }
    }
    if (ie) {
      (t.bindTexture(n.TEXTURE_CUBE_MAP, se.__webglTexture),
        U(n.TEXTURE_CUBE_MAP, v, ye));
      for (let de = 0; de < 6; de++)
        if (a && v.mipmaps && v.mipmaps.length > 0)
          for (let xe = 0; xe < v.mipmaps.length; xe++)
            pe(
              O.__webglFramebuffer[de][xe],
              y,
              v,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_CUBE_MAP_POSITIVE_X + de,
              xe,
            );
        else
          pe(
            O.__webglFramebuffer[de],
            y,
            v,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_CUBE_MAP_POSITIVE_X + de,
            0,
          );
      (M(v, ye) && x(n.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (ae) {
      const de = y.texture;
      for (let xe = 0, Ce = de.length; xe < Ce; xe++) {
        const Be = de[xe],
          ne = i.get(Be);
        (t.bindTexture(n.TEXTURE_2D, ne.__webglTexture),
          U(n.TEXTURE_2D, Be, ye),
          pe(
            O.__webglFramebuffer,
            y,
            Be,
            n.COLOR_ATTACHMENT0 + xe,
            n.TEXTURE_2D,
            0,
          ),
          M(Be, ye) && x(n.TEXTURE_2D));
      }
      t.unbindTexture();
    } else {
      let de = n.TEXTURE_2D;
      if (
        ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) &&
          (a ?
            (de = y.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.",
            )),
        t.bindTexture(de, se.__webglTexture),
        U(de, v, ye),
        a && v.mipmaps && v.mipmaps.length > 0)
      )
        for (let xe = 0; xe < v.mipmaps.length; xe++)
          pe(O.__webglFramebuffer[xe], y, v, n.COLOR_ATTACHMENT0, de, xe);
      else pe(O.__webglFramebuffer, y, v, n.COLOR_ATTACHMENT0, de, 0);
      (M(v, ye) && x(de), t.unbindTexture());
    }
    y.depthBuffer && ge(y);
  }
  function Tt(y) {
    const v = p(y) || a,
      O = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let se = 0, ie = O.length; se < ie; se++) {
      const ae = O[se];
      if (M(ae, v)) {
        const ye =
            y.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D,
          de = i.get(ae).__webglTexture;
        (t.bindTexture(ye, de), x(ye), t.unbindTexture());
      }
    }
  }
  function ee(y) {
    if (a && y.samples > 0 && _e(y) === !1) {
      const v = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture],
        O = y.width,
        se = y.height;
      let ie = n.COLOR_BUFFER_BIT;
      const ae = [],
        ye = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
        de = i.get(y),
        xe = y.isWebGLMultipleRenderTargets === !0;
      if (xe)
        for (let Ce = 0; Ce < v.length; Ce++)
          (t.bindFramebuffer(n.FRAMEBUFFER, de.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.RENDERBUFFER,
              null,
            ),
            t.bindFramebuffer(n.FRAMEBUFFER, de.__webglFramebuffer),
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.TEXTURE_2D,
              null,
              0,
            ));
      (t.bindFramebuffer(n.READ_FRAMEBUFFER, de.__webglMultisampledFramebuffer),
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, de.__webglFramebuffer));
      for (let Ce = 0; Ce < v.length; Ce++) {
        (ae.push(n.COLOR_ATTACHMENT0 + Ce), y.depthBuffer && ae.push(ye));
        const Be =
          de.__ignoreDepthValues !== void 0 ? de.__ignoreDepthValues : !1;
        if (
          (Be === !1 &&
            (y.depthBuffer && (ie |= n.DEPTH_BUFFER_BIT),
            y.stencilBuffer && (ie |= n.STENCIL_BUFFER_BIT)),
          xe &&
            n.framebufferRenderbuffer(
              n.READ_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.RENDERBUFFER,
              de.__webglColorRenderbuffer[Ce],
            ),
          Be === !0 &&
            (n.invalidateFramebuffer(n.READ_FRAMEBUFFER, [ye]),
            n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [ye])),
          xe)
        ) {
          const ne = i.get(v[Ce]).__webglTexture;
          n.framebufferTexture2D(
            n.DRAW_FRAMEBUFFER,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_2D,
            ne,
            0,
          );
        }
        (n.blitFramebuffer(0, 0, O, se, 0, 0, O, se, ie, n.NEAREST),
          c && n.invalidateFramebuffer(n.READ_FRAMEBUFFER, ae));
      }
      if (
        (t.bindFramebuffer(n.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
        xe)
      )
        for (let Ce = 0; Ce < v.length; Ce++) {
          (t.bindFramebuffer(n.FRAMEBUFFER, de.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.RENDERBUFFER,
              de.__webglColorRenderbuffer[Ce],
            ));
          const Be = i.get(v[Ce]).__webglTexture;
          (t.bindFramebuffer(n.FRAMEBUFFER, de.__webglFramebuffer),
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.TEXTURE_2D,
              Be,
              0,
            ));
        }
      t.bindFramebuffer(n.DRAW_FRAMEBUFFER, de.__webglMultisampledFramebuffer);
    }
  }
  function Se(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function _e(y) {
    const v = i.get(y);
    return (
      a &&
      y.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function qe(y) {
    const v = o.render.frame;
    u.get(y) !== v && (u.set(y, v), y.update());
  }
  function Ue(y, v) {
    const O = y.colorSpace,
      se = y.format,
      ie = y.type;
    return (
      y.isCompressedTexture === !0 ||
        y.isVideoTexture === !0 ||
        y.format === Os ||
        (O !== An &&
          O !== nn &&
          (tt.getTransfer(O) === lt ?
            a === !1 ?
              e.has("EXT_sRGB") === !0 && se === un ?
                ((y.format = Os), (y.minFilter = en), (y.generateMipmaps = !1))
              : (v = Ml.sRGBToLinear(v))
            : (se !== un || ie !== Bn) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
          : console.error(
              "THREE.WebGLTextures: Unsupported texture color space:",
              O,
            ))),
      v
    );
  }
  ((this.allocateTextureUnit = P),
    (this.resetTextureUnits = re),
    (this.setTexture2D = B),
    (this.setTexture2DArray = X),
    (this.setTexture3D = $),
    (this.setTextureCube = K),
    (this.rebindTextures = $e),
    (this.setupRenderTarget = N),
    (this.updateRenderTargetMipmap = Tt),
    (this.updateMultisampleRenderTarget = ee),
    (this.setupDepthRenderbuffer = ge),
    (this.setupFrameBufferTexture = pe),
    (this.useMultisampledRTT = _e));
}
function r_(n, e, t) {
  const i = t.isWebGL2;
  function r(s, o = nn) {
    let a;
    const l = tt.getTransfer(o);
    if (s === Bn) return n.UNSIGNED_BYTE;
    if (s === ul) return n.UNSIGNED_SHORT_4_4_4_4;
    if (s === hl) return n.UNSIGNED_SHORT_5_5_5_1;
    if (s === Bu) return n.BYTE;
    if (s === zu) return n.SHORT;
    if (s === js) return n.UNSIGNED_SHORT;
    if (s === cl) return n.INT;
    if (s === In) return n.UNSIGNED_INT;
    if (s === Nn) return n.FLOAT;
    if (s === Ki)
      return i ?
          n.HALF_FLOAT
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Gu) return n.ALPHA;
    if (s === un) return n.RGBA;
    if (s === ku) return n.LUMINANCE;
    if (s === Hu) return n.LUMINANCE_ALPHA;
    if (s === Qn) return n.DEPTH_COMPONENT;
    if (s === Ii) return n.DEPTH_STENCIL;
    if (s === Os)
      return ((a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null);
    if (s === Vu) return n.RED;
    if (s === fl) return n.RED_INTEGER;
    if (s === Wu) return n.RG;
    if (s === dl) return n.RG_INTEGER;
    if (s === pl) return n.RGBA_INTEGER;
    if (s === Zr || s === Jr || s === Qr || s === es)
      if (l === lt)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === Zr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Jr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Qr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === es) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === Zr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Jr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Qr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === es) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === ga || s === va || s === xa || s === Ma)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === ga) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === va) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === xa) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Ma) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === ml)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Sa || s === Ea)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === Sa)
          return l === lt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Ea)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === ya ||
      s === Ta ||
      s === ba ||
      s === Aa ||
      s === wa ||
      s === Ra ||
      s === Ca ||
      s === La ||
      s === Pa ||
      s === Da ||
      s === Ua ||
      s === Ia ||
      s === Na ||
      s === Fa
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === ya)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Ta)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === ba)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Aa)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === wa)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ra)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ca)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === La)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Pa)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Da)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ua)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ia)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Na)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Fa)
          return l === lt ?
              a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === ts || s === Oa || s === Ba)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === ts)
          return l === lt ?
              a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === Oa) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === Ba) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (s === Xu || s === za || s === Ga || s === ka)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === ts) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === za) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Ga) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ka) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return (
      s === Jn ?
        i ? n.UNSIGNED_INT_24_8
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : n[s] !== void 0 ? n[s]
      : null
    );
  }
  return { convert: r };
}
class s_ extends tn {
  constructor(e = []) {
    (super(), (this.isArrayCamera = !0), (this.cameras = e));
  }
}
class wr extends It {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const a_ = { type: "move" };
class As {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new wr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new wr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new G()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new G())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new wr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new G()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new G())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, i) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const g of e.hand.values()) {
          const p = t.getJointPose(g, i),
            h = this._getHandJoint(c, g);
          (p !== null &&
            (h.matrix.fromArray(p.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = p.radius)),
            (h.visible = p !== null));
        }
        const u = c.joints["index-finger-tip"],
          f = c.joints["thumb-tip"],
          d = u.position.distanceTo(f.position),
          m = 0.02,
          _ = 0.005;
        c.inputState.pinching && d > m + _ ?
          ((c.inputState.pinching = !1),
          this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this,
          }))
        : !c.inputState.pinching &&
          d <= m - _ &&
          ((c.inputState.pinching = !0),
          this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this,
          }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, i)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity ?
              ((l.hasLinearVelocity = !0),
              l.linearVelocity.copy(s.linearVelocity))
            : (l.hasLinearVelocity = !1),
            s.angularVelocity ?
              ((l.hasAngularVelocity = !0),
              l.angularVelocity.copy(s.angularVelocity))
            : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = t.getPose(e.targetRaySpace, i)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          r.linearVelocity ?
            ((a.hasLinearVelocity = !0),
            a.linearVelocity.copy(r.linearVelocity))
          : (a.hasLinearVelocity = !1),
          r.angularVelocity ?
            ((a.hasAngularVelocity = !0),
            a.angularVelocity.copy(r.angularVelocity))
          : (a.hasAngularVelocity = !1),
          this.dispatchEvent(a_)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new wr();
      ((i.matrixAutoUpdate = !1),
        (i.visible = !1),
        (e.joints[t.jointName] = i),
        e.add(i));
    }
    return e.joints[t.jointName];
  }
}
class o_ extends Fi {
  constructor(e, t) {
    super();
    const i = this;
    let r = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      u = null,
      f = null,
      d = null,
      m = null,
      _ = null;
    const g = t.getContextAttributes();
    let p = null,
      h = null;
    const M = [],
      x = [],
      T = new Ze();
    let L = null;
    const w = new tn();
    (w.layers.enable(1), (w.viewport = new Ct()));
    const A = new tn();
    (A.layers.enable(2), (A.viewport = new Ct()));
    const k = [w, A],
      S = new s_();
    (S.layers.enable(1), S.layers.enable(2));
    let b = null,
      W = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let Z = M[U];
        return (
          Z === void 0 && ((Z = new As()), (M[U] = Z)),
          Z.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let Z = M[U];
        return (Z === void 0 && ((Z = new As()), (M[U] = Z)), Z.getGripSpace());
      }),
      (this.getHand = function (U) {
        let Z = M[U];
        return (Z === void 0 && ((Z = new As()), (M[U] = Z)), Z.getHandSpace());
      }));
    function j(U) {
      const Z = x.indexOf(U.inputSource);
      if (Z === -1) return;
      const J = M[Z];
      J !== void 0 &&
        (J.update(U.inputSource, U.frame, c || o),
        J.dispatchEvent({ type: U.type, data: U.inputSource }));
    }
    function re() {
      (r.removeEventListener("select", j),
        r.removeEventListener("selectstart", j),
        r.removeEventListener("selectend", j),
        r.removeEventListener("squeeze", j),
        r.removeEventListener("squeezestart", j),
        r.removeEventListener("squeezeend", j),
        r.removeEventListener("end", re),
        r.removeEventListener("inputsourceschange", P));
      for (let U = 0; U < M.length; U++) {
        const Z = x[U];
        Z !== null && ((x[U] = null), M[U].disconnect(Z));
      }
      ((b = null),
        (W = null),
        e.setRenderTarget(p),
        (m = null),
        (d = null),
        (f = null),
        (r = null),
        (h = null),
        Q.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(L),
        e.setSize(T.width, T.height, !1),
        i.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (U) {
      ((s = U),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (U) {
        ((a = U),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (U) {
        c = U;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : m;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return _;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (U) {
        if (((r = U), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener("select", j),
            r.addEventListener("selectstart", j),
            r.addEventListener("selectend", j),
            r.addEventListener("squeeze", j),
            r.addEventListener("squeezestart", j),
            r.addEventListener("squeezeend", j),
            r.addEventListener("end", re),
            r.addEventListener("inputsourceschange", P),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (L = e.getPixelRatio()),
            e.getSize(T),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const Z = {
              antialias: r.renderState.layers === void 0 ? g.antialias : !0,
              alpha: !0,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            ((m = new XRWebGLLayer(r, t, Z)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (h = new ni(m.framebufferWidth, m.framebufferHeight, {
                format: un,
                type: Bn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: g.stencil,
              })));
          } else {
            let Z = null,
              J = null,
              ue = null;
            g.depth &&
              ((ue = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (Z = g.stencil ? Ii : Qn),
              (J = g.stencil ? Jn : In));
            const pe = {
              colorFormat: t.RGBA8,
              depthFormat: ue,
              scaleFactor: s,
            };
            ((f = new XRWebGLBinding(r, t)),
              (d = f.createProjectionLayer(pe)),
              r.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (h = new ni(d.textureWidth, d.textureHeight, {
                format: un,
                type: Bn,
                depthTexture: new Ul(
                  d.textureWidth,
                  d.textureHeight,
                  J,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  Z,
                ),
                stencilBuffer: g.stencil,
                colorSpace: e.outputColorSpace,
                samples: g.antialias ? 4 : 0,
              })));
            const Ee = e.properties.get(h);
            Ee.__ignoreDepthValues = d.ignoreDepthValues;
          }
          ((h.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await r.requestReferenceSpace(a)),
            Q.setContext(r),
            Q.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }));
    function P(U) {
      for (let Z = 0; Z < U.removed.length; Z++) {
        const J = U.removed[Z],
          ue = x.indexOf(J);
        ue >= 0 && ((x[ue] = null), M[ue].disconnect(J));
      }
      for (let Z = 0; Z < U.added.length; Z++) {
        const J = U.added[Z];
        let ue = x.indexOf(J);
        if (ue === -1) {
          for (let Ee = 0; Ee < M.length; Ee++)
            if (Ee >= x.length) {
              (x.push(J), (ue = Ee));
              break;
            } else if (x[Ee] === null) {
              ((x[Ee] = J), (ue = Ee));
              break;
            }
          if (ue === -1) break;
        }
        const pe = M[ue];
        pe && pe.connect(J);
      }
    }
    const I = new G(),
      B = new G();
    function X(U, Z, J) {
      (I.setFromMatrixPosition(Z.matrixWorld),
        B.setFromMatrixPosition(J.matrixWorld));
      const ue = I.distanceTo(B),
        pe = Z.projectionMatrix.elements,
        Ee = J.projectionMatrix.elements,
        Re = pe[14] / (pe[10] - 1),
        ge = pe[14] / (pe[10] + 1),
        $e = (pe[9] + 1) / pe[5],
        N = (pe[9] - 1) / pe[5],
        Tt = (pe[8] - 1) / pe[0],
        ee = (Ee[8] + 1) / Ee[0],
        Se = Re * Tt,
        _e = Re * ee,
        qe = ue / (-Tt + ee),
        Ue = qe * -Tt;
      (Z.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(Ue),
        U.translateZ(qe),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert());
      const y = Re + qe,
        v = ge + qe,
        O = Se - Ue,
        se = _e + (ue - Ue),
        ie = (($e * ge) / v) * y,
        ae = ((N * ge) / v) * y;
      (U.projectionMatrix.makePerspective(O, se, ie, ae, y, v),
        U.projectionMatrixInverse.copy(U.projectionMatrix).invert());
    }
    function $(U, Z) {
      (Z === null ?
        U.matrixWorld.copy(U.matrix)
      : U.matrixWorld.multiplyMatrices(Z.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert());
    }
    this.updateCamera = function (U) {
      if (r === null) return;
      ((S.near = A.near = w.near = U.near),
        (S.far = A.far = w.far = U.far),
        (b !== S.near || W !== S.far) &&
          (r.updateRenderState({ depthNear: S.near, depthFar: S.far }),
          (b = S.near),
          (W = S.far)));
      const Z = U.parent,
        J = S.cameras;
      $(S, Z);
      for (let ue = 0; ue < J.length; ue++) $(J[ue], Z);
      (J.length === 2 ?
        X(S, w, A)
      : S.projectionMatrix.copy(w.projectionMatrix),
        K(U, S, Z));
    };
    function K(U, Z, J) {
      (J === null ?
        U.matrix.copy(Z.matrixWorld)
      : (U.matrix.copy(J.matrixWorld),
        U.matrix.invert(),
        U.matrix.multiply(Z.matrixWorld)),
        U.matrix.decompose(U.position, U.quaternion, U.scale),
        U.updateMatrixWorld(!0),
        U.projectionMatrix.copy(Z.projectionMatrix),
        U.projectionMatrixInverse.copy(Z.projectionMatrixInverse),
        U.isPerspectiveCamera &&
          ((U.fov = Bs * 2 * Math.atan(1 / U.projectionMatrix.elements[5])),
          (U.zoom = 1)));
    }
    ((this.getCamera = function () {
      return S;
    }),
      (this.getFoveation = function () {
        if (!(d === null && m === null)) return l;
      }),
      (this.setFoveation = function (U) {
        ((l = U),
          d !== null && (d.fixedFoveation = U),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = U));
      }));
    let Y = null;
    function te(U, Z) {
      if (((u = Z.getViewerPose(c || o)), (_ = Z), u !== null)) {
        const J = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(h, m.framebuffer),
          e.setRenderTarget(h));
        let ue = !1;
        J.length !== S.cameras.length && ((S.cameras.length = 0), (ue = !0));
        for (let pe = 0; pe < J.length; pe++) {
          const Ee = J[pe];
          let Re = null;
          if (m !== null) Re = m.getViewport(Ee);
          else {
            const $e = f.getViewSubImage(d, Ee);
            ((Re = $e.viewport),
              pe === 0 &&
                (e.setRenderTargetTextures(
                  h,
                  $e.colorTexture,
                  d.ignoreDepthValues ? void 0 : $e.depthStencilTexture,
                ),
                e.setRenderTarget(h)));
          }
          let ge = k[pe];
          (ge === void 0 &&
            ((ge = new tn()),
            ge.layers.enable(pe),
            (ge.viewport = new Ct()),
            (k[pe] = ge)),
            ge.matrix.fromArray(Ee.transform.matrix),
            ge.matrix.decompose(ge.position, ge.quaternion, ge.scale),
            ge.projectionMatrix.fromArray(Ee.projectionMatrix),
            ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),
            ge.viewport.set(Re.x, Re.y, Re.width, Re.height),
            pe === 0 &&
              (S.matrix.copy(ge.matrix),
              S.matrix.decompose(S.position, S.quaternion, S.scale)),
            ue === !0 && S.cameras.push(ge));
        }
      }
      for (let J = 0; J < M.length; J++) {
        const ue = x[J],
          pe = M[J];
        ue !== null && pe !== void 0 && pe.update(ue, Z, c || o);
      }
      (Y && Y(U, Z),
        Z.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: Z }),
        (_ = null));
    }
    const Q = new Pl();
    (Q.setAnimationLoop(te),
      (this.setAnimationLoop = function (U) {
        Y = U;
      }),
      (this.dispose = function () {}));
  }
}
function l_(n, e) {
  function t(p, h) {
    (p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix));
  }
  function i(p, h) {
    (h.color.getRGB(p.fogColor.value, Rl(n)),
      h.isFog ?
        ((p.fogNear.value = h.near), (p.fogFar.value = h.far))
      : h.isFogExp2 && (p.fogDensity.value = h.density));
  }
  function r(p, h, M, x, T) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h)
    : h.isMeshToonMaterial ? (s(p, h), f(p, h))
    : h.isMeshPhongMaterial ? (s(p, h), u(p, h))
    : h.isMeshStandardMaterial ?
      (s(p, h), d(p, h), h.isMeshPhysicalMaterial && m(p, h, T))
    : h.isMeshMatcapMaterial ? (s(p, h), _(p, h))
    : h.isMeshDepthMaterial ? s(p, h)
    : h.isMeshDistanceMaterial ? (s(p, h), g(p, h))
    : h.isMeshNormalMaterial ? s(p, h)
    : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h))
    : h.isPointsMaterial ? l(p, h, M, x)
    : h.isSpriteMaterial ? c(p, h)
    : h.isShadowMaterial ?
      (p.color.value.copy(h.color), (p.opacity.value = h.opacity))
    : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    ((p.opacity.value = h.opacity),
      h.color && p.diffuse.value.copy(h.color),
      h.emissive &&
        p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.bumpMap &&
        ((p.bumpMap.value = h.bumpMap),
        t(h.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = h.bumpScale),
        h.side === Wt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === Wt && p.normalScale.value.negate()),
      h.displacementMap &&
        ((p.displacementMap.value = h.displacementMap),
        t(h.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = h.displacementScale),
        (p.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((p.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, p.emissiveMapTransform)),
      h.specularMap &&
        ((p.specularMap.value = h.specularMap),
        t(h.specularMap, p.specularMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest));
    const M = e.get(h).envMap;
    if (
      (M &&
        ((p.envMap.value = M),
        (p.flipEnvMap.value =
          M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = h.reflectivity),
        (p.ior.value = h.ior),
        (p.refractionRatio.value = h.refractionRatio)),
      h.lightMap)
    ) {
      p.lightMap.value = h.lightMap;
      const x = n._useLegacyLights === !0 ? Math.PI : 1;
      ((p.lightMapIntensity.value = h.lightMapIntensity * x),
        t(h.lightMap, p.lightMapTransform));
    }
    h.aoMap &&
      ((p.aoMap.value = h.aoMap),
      (p.aoMapIntensity.value = h.aoMapIntensity),
      t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    (p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)));
  }
  function a(p, h) {
    ((p.dashSize.value = h.dashSize),
      (p.totalSize.value = h.dashSize + h.gapSize),
      (p.scale.value = h.scale));
  }
  function l(p, h, M, x) {
    (p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.size.value = h.size * M),
      (p.scale.value = x * 0.5),
      h.map && ((p.map.value = h.map), t(h.map, p.uvTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest));
  }
  function c(p, h) {
    (p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.rotation.value = h.rotation),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest));
  }
  function u(p, h) {
    (p.specular.value.copy(h.specular),
      (p.shininess.value = Math.max(h.shininess, 1e-4)));
  }
  function f(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function d(p, h) {
    ((p.metalness.value = h.metalness),
      h.metalnessMap &&
        ((p.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = h.roughness),
      h.roughnessMap &&
        ((p.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, p.roughnessMapTransform)),
      e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity));
  }
  function m(p, h, M) {
    ((p.ior.value = h.ior),
      h.sheen > 0 &&
        (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (p.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((p.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, p.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((p.clearcoat.value = h.clearcoat),
        (p.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((p.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, p.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === Wt && p.clearcoatNormalScale.value.negate())),
      h.iridescence > 0 &&
        ((p.iridescence.value = h.iridescence),
        (p.iridescenceIOR.value = h.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((p.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, p.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((p.transmission.value = h.transmission),
        (p.transmissionSamplerMap.value = M.texture),
        p.transmissionSamplerSize.value.set(M.width, M.height),
        h.transmissionMap &&
          ((p.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = h.thickness),
        h.thicknessMap &&
          ((p.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = h.attenuationDistance),
        p.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation),
        ),
        h.anisotropyMap &&
          ((p.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = h.specularIntensity),
      p.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((p.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, p.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((p.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, p.specularIntensityMapTransform)));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function g(p, h) {
    const M = e.get(h).light;
    (p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),
      (p.nearDistance.value = M.shadow.camera.near),
      (p.farDistance.value = M.shadow.camera.far));
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: r };
}
function c_(n, e, t, i) {
  let r = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(M, x) {
    const T = x.program;
    i.uniformBlockBinding(M, T);
  }
  function c(M, x) {
    let T = r[M.id];
    T === void 0 &&
      (_(M), (T = u(M)), (r[M.id] = T), M.addEventListener("dispose", p));
    const L = x.program;
    i.updateUBOMapping(M, L);
    const w = e.render.frame;
    s[M.id] !== w && (d(M), (s[M.id] = w));
  }
  function u(M) {
    const x = f();
    M.__bindingPointIndex = x;
    const T = n.createBuffer(),
      L = M.__size,
      w = M.usage;
    return (
      n.bindBuffer(n.UNIFORM_BUFFER, T),
      n.bufferData(n.UNIFORM_BUFFER, L, w),
      n.bindBuffer(n.UNIFORM_BUFFER, null),
      n.bindBufferBase(n.UNIFORM_BUFFER, x, T),
      T
    );
  }
  function f() {
    for (let M = 0; M < a; M++) if (o.indexOf(M) === -1) return (o.push(M), M);
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function d(M) {
    const x = r[M.id],
      T = M.uniforms,
      L = M.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, x);
    for (let w = 0, A = T.length; w < A; w++) {
      const k = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let S = 0, b = k.length; S < b; S++) {
        const W = k[S];
        if (m(W, w, S, L) === !0) {
          const j = W.__offset,
            re = Array.isArray(W.value) ? W.value : [W.value];
          let P = 0;
          for (let I = 0; I < re.length; I++) {
            const B = re[I],
              X = g(B);
            typeof B == "number" || typeof B == "boolean" ?
              ((W.__data[0] = B),
              n.bufferSubData(n.UNIFORM_BUFFER, j + P, W.__data))
            : B.isMatrix3 ?
              ((W.__data[0] = B.elements[0]),
              (W.__data[1] = B.elements[1]),
              (W.__data[2] = B.elements[2]),
              (W.__data[3] = 0),
              (W.__data[4] = B.elements[3]),
              (W.__data[5] = B.elements[4]),
              (W.__data[6] = B.elements[5]),
              (W.__data[7] = 0),
              (W.__data[8] = B.elements[6]),
              (W.__data[9] = B.elements[7]),
              (W.__data[10] = B.elements[8]),
              (W.__data[11] = 0))
            : (B.toArray(W.__data, P),
              (P += X.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          n.bufferSubData(n.UNIFORM_BUFFER, j, W.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function m(M, x, T, L) {
    const w = M.value,
      A = x + "_" + T;
    if (L[A] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean" ?
          (L[A] = w)
        : (L[A] = w.clone()),
        !0
      );
    {
      const k = L[A];
      if (typeof w == "number" || typeof w == "boolean") {
        if (k !== w) return ((L[A] = w), !0);
      } else if (k.equals(w) === !1) return (k.copy(w), !0);
    }
    return !1;
  }
  function _(M) {
    const x = M.uniforms;
    let T = 0;
    const L = 16;
    for (let A = 0, k = x.length; A < k; A++) {
      const S = Array.isArray(x[A]) ? x[A] : [x[A]];
      for (let b = 0, W = S.length; b < W; b++) {
        const j = S[b],
          re = Array.isArray(j.value) ? j.value : [j.value];
        for (let P = 0, I = re.length; P < I; P++) {
          const B = re[P],
            X = g(B),
            $ = T % L;
          ($ !== 0 && L - $ < X.boundary && (T += L - $),
            (j.__data = new Float32Array(
              X.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (j.__offset = T),
            (T += X.storage));
        }
      }
    }
    const w = T % L;
    return (w > 0 && (T += L - w), (M.__size = T), (M.__cache = {}), this);
  }
  function g(M) {
    const x = { boundary: 0, storage: 0 };
    return (
      typeof M == "number" || typeof M == "boolean" ?
        ((x.boundary = 4), (x.storage = 4))
      : M.isVector2 ? ((x.boundary = 8), (x.storage = 8))
      : M.isVector3 || M.isColor ? ((x.boundary = 16), (x.storage = 12))
      : M.isVector4 ? ((x.boundary = 16), (x.storage = 16))
      : M.isMatrix3 ? ((x.boundary = 48), (x.storage = 48))
      : M.isMatrix4 ? ((x.boundary = 64), (x.storage = 64))
      : M.isTexture ?
        console.warn(
          "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
        )
      : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M),
      x
    );
  }
  function p(M) {
    const x = M.target;
    x.removeEventListener("dispose", p);
    const T = o.indexOf(x.__bindingPointIndex);
    (o.splice(T, 1), n.deleteBuffer(r[x.id]), delete r[x.id], delete s[x.id]);
  }
  function h() {
    for (const M in r) n.deleteBuffer(r[M]);
    ((o = []), (r = {}), (s = {}));
  }
  return { bind: l, update: c, dispose: h };
}
class zl {
  constructor(e = {}) {
    const {
      canvas: t = ih(),
      context: i = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    i !== null ? (d = i.getContextAttributes().alpha) : (d = o);
    const m = new Uint32Array(4),
      _ = new Int32Array(4);
    let g = null,
      p = null;
    const h = [],
      M = [];
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Lt),
      (this._useLegacyLights = !1),
      (this.toneMapping = On),
      (this.toneMappingExposure = 1));
    const x = this;
    let T = !1,
      L = 0,
      w = 0,
      A = null,
      k = -1,
      S = null;
    const b = new Ct(),
      W = new Ct();
    let j = null;
    const re = new Ke(0);
    let P = 0,
      I = t.width,
      B = t.height,
      X = 1,
      $ = null,
      K = null;
    const Y = new Ct(0, 0, I, B),
      te = new Ct(0, 0, I, B);
    let Q = !1;
    const U = new Js();
    let Z = !1,
      J = !1,
      ue = null;
    const pe = new St(),
      Ee = new Ze(),
      Re = new G(),
      ge = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function $e() {
      return A === null ? X : 1;
    }
    let N = i;
    function Tt(E, D) {
      for (let z = 0; z < E.length; z++) {
        const H = E[z],
          F = t.getContext(H, D);
        if (F !== null) return F;
      }
      return null;
    }
    try {
      const E = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${qs}`),
        t.addEventListener("webglcontextlost", le, !1),
        t.addEventListener("webglcontextrestored", C, !1),
        t.addEventListener("webglcontextcreationerror", he, !1),
        N === null)
      ) {
        const D = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (x.isWebGL1Renderer === !0 && D.shift(), (N = Tt(D, E)), N === null)
        )
          throw Tt(D) ?
              new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
      (typeof WebGLRenderingContext < "u" &&
        N instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.",
        ),
        N.getShaderPrecisionFormat === void 0 &&
          (N.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          }));
    } catch (E) {
      throw (console.error("THREE.WebGLRenderer: " + E.message), E);
    }
    let ee,
      Se,
      _e,
      qe,
      Ue,
      y,
      v,
      O,
      se,
      ie,
      ae,
      ye,
      de,
      xe,
      Ce,
      Be,
      ne,
      et,
      We,
      De,
      be,
      Me,
      Fe,
      Je;
    function mt() {
      ((ee = new xp(N)),
        (Se = new dp(N, ee, e)),
        ee.init(Se),
        (Me = new r_(N, ee, Se)),
        (_e = new n_(N, ee, Se)),
        (qe = new Ep(N)),
        (Ue = new Hm()),
        (y = new i_(N, ee, _e, Ue, Se, Me, qe)),
        (v = new mp(x)),
        (O = new vp(x)),
        (se = new Ch(N, Se)),
        (Fe = new hp(N, ee, se, Se)),
        (ie = new Mp(N, se, qe, Fe)),
        (ae = new Ap(N, ie, se, qe)),
        (We = new bp(N, Se, y)),
        (Be = new pp(Ue)),
        (ye = new km(x, v, O, ee, Se, Fe, Be)),
        (de = new l_(x, Ue)),
        (xe = new Wm()),
        (Ce = new Km(ee, Se)),
        (et = new up(x, v, O, _e, ae, d, l)),
        (ne = new t_(x, ae, Se)),
        (Je = new c_(N, qe, Se, _e)),
        (De = new fp(N, ee, qe, Se)),
        (be = new Sp(N, ee, qe, Se)),
        (qe.programs = ye.programs),
        (x.capabilities = Se),
        (x.extensions = ee),
        (x.properties = Ue),
        (x.renderLists = xe),
        (x.shadowMap = ne),
        (x.state = _e),
        (x.info = qe));
    }
    mt();
    const Ge = new o_(x, N);
    ((this.xr = Ge),
      (this.getContext = function () {
        return N;
      }),
      (this.getContextAttributes = function () {
        return N.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const E = ee.get("WEBGL_lose_context");
        E && E.loseContext();
      }),
      (this.forceContextRestore = function () {
        const E = ee.get("WEBGL_lose_context");
        E && E.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return X;
      }),
      (this.setPixelRatio = function (E) {
        E !== void 0 && ((X = E), this.setSize(I, B, !1));
      }),
      (this.getSize = function (E) {
        return E.set(I, B);
      }),
      (this.setSize = function (E, D, z = !0) {
        if (Ge.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((I = E),
          (B = D),
          (t.width = Math.floor(E * X)),
          (t.height = Math.floor(D * X)),
          z === !0 && ((t.style.width = E + "px"), (t.style.height = D + "px")),
          this.setViewport(0, 0, E, D));
      }),
      (this.getDrawingBufferSize = function (E) {
        return E.set(I * X, B * X).floor();
      }),
      (this.setDrawingBufferSize = function (E, D, z) {
        ((I = E),
          (B = D),
          (X = z),
          (t.width = Math.floor(E * z)),
          (t.height = Math.floor(D * z)),
          this.setViewport(0, 0, E, D));
      }),
      (this.getCurrentViewport = function (E) {
        return E.copy(b);
      }),
      (this.getViewport = function (E) {
        return E.copy(Y);
      }),
      (this.setViewport = function (E, D, z, H) {
        (E.isVector4 ? Y.set(E.x, E.y, E.z, E.w) : Y.set(E, D, z, H),
          _e.viewport(b.copy(Y).multiplyScalar(X).floor()));
      }),
      (this.getScissor = function (E) {
        return E.copy(te);
      }),
      (this.setScissor = function (E, D, z, H) {
        (E.isVector4 ? te.set(E.x, E.y, E.z, E.w) : te.set(E, D, z, H),
          _e.scissor(W.copy(te).multiplyScalar(X).floor()));
      }),
      (this.getScissorTest = function () {
        return Q;
      }),
      (this.setScissorTest = function (E) {
        _e.setScissorTest((Q = E));
      }),
      (this.setOpaqueSort = function (E) {
        $ = E;
      }),
      (this.setTransparentSort = function (E) {
        K = E;
      }),
      (this.getClearColor = function (E) {
        return E.copy(et.getClearColor());
      }),
      (this.setClearColor = function () {
        et.setClearColor.apply(et, arguments);
      }),
      (this.getClearAlpha = function () {
        return et.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        et.setClearAlpha.apply(et, arguments);
      }),
      (this.clear = function (E = !0, D = !0, z = !0) {
        let H = 0;
        if (E) {
          let F = !1;
          if (A !== null) {
            const me = A.texture.format;
            F = me === pl || me === dl || me === fl;
          }
          if (F) {
            const me = A.texture.type,
              Te =
                me === Bn ||
                me === In ||
                me === js ||
                me === Jn ||
                me === ul ||
                me === hl,
              we = et.getClearColor(),
              Pe = et.getClearAlpha(),
              ze = we.r,
              Ie = we.g,
              Ne = we.b;
            Te ?
              ((m[0] = ze),
              (m[1] = Ie),
              (m[2] = Ne),
              (m[3] = Pe),
              N.clearBufferuiv(N.COLOR, 0, m))
            : ((_[0] = ze),
              (_[1] = Ie),
              (_[2] = Ne),
              (_[3] = Pe),
              N.clearBufferiv(N.COLOR, 0, _));
          } else H |= N.COLOR_BUFFER_BIT;
        }
        (D && (H |= N.DEPTH_BUFFER_BIT),
          z &&
            ((H |= N.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          N.clear(H));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", le, !1),
          t.removeEventListener("webglcontextrestored", C, !1),
          t.removeEventListener("webglcontextcreationerror", he, !1),
          xe.dispose(),
          Ce.dispose(),
          Ue.dispose(),
          v.dispose(),
          O.dispose(),
          ae.dispose(),
          Fe.dispose(),
          Je.dispose(),
          ye.dispose(),
          Ge.dispose(),
          Ge.removeEventListener("sessionstart", Nt),
          Ge.removeEventListener("sessionend", st),
          ue && (ue.dispose(), (ue = null)),
          Ft.stop());
      }));
    function le(E) {
      (E.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (T = !0));
    }
    function C() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (T = !1));
      const E = qe.autoReset,
        D = ne.enabled,
        z = ne.autoUpdate,
        H = ne.needsUpdate,
        F = ne.type;
      (mt(),
        (qe.autoReset = E),
        (ne.enabled = D),
        (ne.autoUpdate = z),
        (ne.needsUpdate = H),
        (ne.type = F));
    }
    function he(E) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        E.statusMessage,
      );
    }
    function fe(E) {
      const D = E.target;
      (D.removeEventListener("dispose", fe), Le(D));
    }
    function Le(E) {
      (Ae(E), Ue.remove(E));
    }
    function Ae(E) {
      const D = Ue.get(E).programs;
      D !== void 0 &&
        (D.forEach(function (z) {
          ye.releaseProgram(z);
        }),
        E.isShaderMaterial && ye.releaseShaderCache(E));
    }
    this.renderBufferDirect = function (E, D, z, H, F, me) {
      D === null && (D = ge);
      const Te = F.isMesh && F.matrixWorld.determinant() < 0,
        we = kl(E, D, z, H, F);
      _e.setMaterial(H, Te);
      let Pe = z.index,
        ze = 1;
      if (H.wireframe === !0) {
        if (((Pe = ie.getWireframeAttribute(z)), Pe === void 0)) return;
        ze = 2;
      }
      const Ie = z.drawRange,
        Ne = z.attributes.position;
      let gt = Ie.start * ze,
        Xt = (Ie.start + Ie.count) * ze;
      (me !== null &&
        ((gt = Math.max(gt, me.start * ze)),
        (Xt = Math.min(Xt, (me.start + me.count) * ze))),
        Pe !== null ?
          ((gt = Math.max(gt, 0)), (Xt = Math.min(Xt, Pe.count)))
        : Ne != null &&
          ((gt = Math.max(gt, 0)), (Xt = Math.min(Xt, Ne.count))));
      const At = Xt - gt;
      if (At < 0 || At === 1 / 0) return;
      Fe.setup(F, H, we, z, Pe);
      let _n,
        pt = De;
      if (
        (Pe !== null && ((_n = se.get(Pe)), (pt = be), pt.setIndex(_n)),
        F.isMesh)
      )
        H.wireframe === !0 ?
          (_e.setLineWidth(H.wireframeLinewidth * $e()), pt.setMode(N.LINES))
        : pt.setMode(N.TRIANGLES);
      else if (F.isLine) {
        let ke = H.linewidth;
        (ke === void 0 && (ke = 1),
          _e.setLineWidth(ke * $e()),
          F.isLineSegments ? pt.setMode(N.LINES)
          : F.isLineLoop ? pt.setMode(N.LINE_LOOP)
          : pt.setMode(N.LINE_STRIP));
      } else
        F.isPoints ?
          pt.setMode(N.POINTS)
        : F.isSprite && pt.setMode(N.TRIANGLES);
      if (F.isBatchedMesh)
        pt.renderMultiDraw(
          F._multiDrawStarts,
          F._multiDrawCounts,
          F._multiDrawCount,
        );
      else if (F.isInstancedMesh) pt.renderInstances(gt, At, F.count);
      else if (z.isInstancedBufferGeometry) {
        const ke = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          Vr = Math.min(z.instanceCount, ke);
        pt.renderInstances(gt, At, Vr);
      } else pt.render(gt, At);
    };
    function it(E, D, z) {
      E.transparent === !0 && E.side === dn && E.forceSinglePass === !1 ?
        ((E.side = Wt),
        (E.needsUpdate = !0),
        ir(E, D, z),
        (E.side = Gn),
        (E.needsUpdate = !0),
        ir(E, D, z),
        (E.side = dn))
      : ir(E, D, z);
    }
    ((this.compile = function (E, D, z = null) {
      (z === null && (z = E),
        (p = Ce.get(z)),
        p.init(),
        M.push(p),
        z.traverseVisible(function (F) {
          F.isLight &&
            F.layers.test(D.layers) &&
            (p.pushLight(F), F.castShadow && p.pushShadow(F));
        }),
        E !== z &&
          E.traverseVisible(function (F) {
            F.isLight &&
              F.layers.test(D.layers) &&
              (p.pushLight(F), F.castShadow && p.pushShadow(F));
          }),
        p.setupLights(x._useLegacyLights));
      const H = new Set();
      return (
        E.traverse(function (F) {
          const me = F.material;
          if (me)
            if (Array.isArray(me))
              for (let Te = 0; Te < me.length; Te++) {
                const we = me[Te];
                (it(we, z, F), H.add(we));
              }
            else (it(me, z, F), H.add(me));
        }),
        M.pop(),
        (p = null),
        H
      );
    }),
      (this.compileAsync = function (E, D, z = null) {
        const H = this.compile(E, D, z);
        return new Promise((F) => {
          function me() {
            if (
              (H.forEach(function (Te) {
                Ue.get(Te).currentProgram.isReady() && H.delete(Te);
              }),
              H.size === 0)
            ) {
              F(E);
              return;
            }
            setTimeout(me, 10);
          }
          ee.get("KHR_parallel_shader_compile") !== null ?
            me()
          : setTimeout(me, 10);
        });
      }));
    let rt = null;
    function bt(E) {
      rt && rt(E);
    }
    function Nt() {
      Ft.stop();
    }
    function st() {
      Ft.start();
    }
    const Ft = new Pl();
    (Ft.setAnimationLoop(bt),
      typeof self < "u" && Ft.setContext(self),
      (this.setAnimationLoop = function (E) {
        ((rt = E), Ge.setAnimationLoop(E), E === null ? Ft.stop() : Ft.start());
      }),
      Ge.addEventListener("sessionstart", Nt),
      Ge.addEventListener("sessionend", st),
      (this.render = function (E, D) {
        if (D !== void 0 && D.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (T === !0) return;
        (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(),
          D.parent === null &&
            D.matrixWorldAutoUpdate === !0 &&
            D.updateMatrixWorld(),
          Ge.enabled === !0 &&
            Ge.isPresenting === !0 &&
            (Ge.cameraAutoUpdate === !0 && Ge.updateCamera(D),
            (D = Ge.getCamera())),
          E.isScene === !0 && E.onBeforeRender(x, E, D, A),
          (p = Ce.get(E, M.length)),
          p.init(),
          M.push(p),
          pe.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
          U.setFromProjectionMatrix(pe),
          (J = this.localClippingEnabled),
          (Z = Be.init(this.clippingPlanes, J)),
          (g = xe.get(E, h.length)),
          g.init(),
          h.push(g),
          hn(E, D, 0, x.sortObjects),
          g.finish(),
          x.sortObjects === !0 && g.sort($, K),
          this.info.render.frame++,
          Z === !0 && Be.beginShadows());
        const z = p.state.shadowsArray;
        if (
          (ne.render(z, E, D),
          Z === !0 && Be.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          et.render(g, E),
          p.setupLights(x._useLegacyLights),
          D.isArrayCamera)
        ) {
          const H = D.cameras;
          for (let F = 0, me = H.length; F < me; F++) {
            const Te = H[F];
            ea(g, E, Te, Te.viewport);
          }
        } else ea(g, E, D);
        (A !== null &&
          (y.updateMultisampleRenderTarget(A), y.updateRenderTargetMipmap(A)),
          E.isScene === !0 && E.onAfterRender(x, E, D),
          Fe.resetDefaultState(),
          (k = -1),
          (S = null),
          M.pop(),
          M.length > 0 ? (p = M[M.length - 1]) : (p = null),
          h.pop(),
          h.length > 0 ? (g = h[h.length - 1]) : (g = null));
      }));
    function hn(E, D, z, H) {
      if (E.visible === !1) return;
      if (E.layers.test(D.layers)) {
        if (E.isGroup) z = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === !0 && E.update(D);
        else if (E.isLight) (p.pushLight(E), E.castShadow && p.pushShadow(E));
        else if (E.isSprite) {
          if (!E.frustumCulled || U.intersectsSprite(E)) {
            H && Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);
            const Te = ae.update(E),
              we = E.material;
            we.visible && g.push(E, Te, we, z, Re.z, null);
          }
        } else if (
          (E.isMesh || E.isLine || E.isPoints) &&
          (!E.frustumCulled || U.intersectsObject(E))
        ) {
          const Te = ae.update(E),
            we = E.material;
          if (
            (H &&
              (E.boundingSphere !== void 0 ?
                (E.boundingSphere === null && E.computeBoundingSphere(),
                Re.copy(E.boundingSphere.center))
              : (Te.boundingSphere === null && Te.computeBoundingSphere(),
                Re.copy(Te.boundingSphere.center)),
              Re.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),
            Array.isArray(we))
          ) {
            const Pe = Te.groups;
            for (let ze = 0, Ie = Pe.length; ze < Ie; ze++) {
              const Ne = Pe[ze],
                gt = we[Ne.materialIndex];
              gt && gt.visible && g.push(E, Te, gt, z, Re.z, Ne);
            }
          } else we.visible && g.push(E, Te, we, z, Re.z, null);
        }
      }
      const me = E.children;
      for (let Te = 0, we = me.length; Te < we; Te++) hn(me[Te], D, z, H);
    }
    function ea(E, D, z, H) {
      const F = E.opaque,
        me = E.transmissive,
        Te = E.transparent;
      (p.setupLightsView(z),
        Z === !0 && Be.setGlobalState(x.clippingPlanes, z),
        me.length > 0 && Gl(F, me, D, z),
        H && _e.viewport(b.copy(H)),
        F.length > 0 && nr(F, D, z),
        me.length > 0 && nr(me, D, z),
        Te.length > 0 && nr(Te, D, z),
        _e.buffers.depth.setTest(!0),
        _e.buffers.depth.setMask(!0),
        _e.buffers.color.setMask(!0),
        _e.setPolygonOffset(!1));
    }
    function Gl(E, D, z, H) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      const me = Se.isWebGL2;
      (ue === null &&
        (ue = new ni(1, 1, {
          generateMipmaps: !0,
          type: ee.has("EXT_color_buffer_half_float") ? Ki : Bn,
          minFilter: ji,
          samples: me ? 4 : 0,
        })),
        x.getDrawingBufferSize(Ee),
        me ? ue.setSize(Ee.x, Ee.y) : ue.setSize(zs(Ee.x), zs(Ee.y)));
      const Te = x.getRenderTarget();
      (x.setRenderTarget(ue),
        x.getClearColor(re),
        (P = x.getClearAlpha()),
        P < 1 && x.setClearColor(16777215, 0.5),
        x.clear());
      const we = x.toneMapping;
      ((x.toneMapping = On),
        nr(E, z, H),
        y.updateMultisampleRenderTarget(ue),
        y.updateRenderTargetMipmap(ue));
      let Pe = !1;
      for (let ze = 0, Ie = D.length; ze < Ie; ze++) {
        const Ne = D[ze],
          gt = Ne.object,
          Xt = Ne.geometry,
          At = Ne.material,
          _n = Ne.group;
        if (At.side === dn && gt.layers.test(H.layers)) {
          const pt = At.side;
          ((At.side = Wt),
            (At.needsUpdate = !0),
            ta(gt, z, H, Xt, At, _n),
            (At.side = pt),
            (At.needsUpdate = !0),
            (Pe = !0));
        }
      }
      (Pe === !0 &&
        (y.updateMultisampleRenderTarget(ue), y.updateRenderTargetMipmap(ue)),
        x.setRenderTarget(Te),
        x.setClearColor(re, P),
        (x.toneMapping = we));
    }
    function nr(E, D, z) {
      const H = D.isScene === !0 ? D.overrideMaterial : null;
      for (let F = 0, me = E.length; F < me; F++) {
        const Te = E[F],
          we = Te.object,
          Pe = Te.geometry,
          ze = H === null ? Te.material : H,
          Ie = Te.group;
        we.layers.test(z.layers) && ta(we, D, z, Pe, ze, Ie);
      }
    }
    function ta(E, D, z, H, F, me) {
      (E.onBeforeRender(x, D, z, H, F, me),
        E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, E.matrixWorld),
        E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
        F.onBeforeRender(x, D, z, H, E, me),
        F.transparent === !0 && F.side === dn && F.forceSinglePass === !1 ?
          ((F.side = Wt),
          (F.needsUpdate = !0),
          x.renderBufferDirect(z, D, H, F, E, me),
          (F.side = Gn),
          (F.needsUpdate = !0),
          x.renderBufferDirect(z, D, H, F, E, me),
          (F.side = dn))
        : x.renderBufferDirect(z, D, H, F, E, me),
        E.onAfterRender(x, D, z, H, F, me));
    }
    function ir(E, D, z) {
      D.isScene !== !0 && (D = ge);
      const H = Ue.get(E),
        F = p.state.lights,
        me = p.state.shadowsArray,
        Te = F.state.version,
        we = ye.getParameters(E, F.state, me, D, z),
        Pe = ye.getProgramCacheKey(we);
      let ze = H.programs;
      ((H.environment = E.isMeshStandardMaterial ? D.environment : null),
        (H.fog = D.fog),
        (H.envMap = (E.isMeshStandardMaterial ? O : v).get(
          E.envMap || H.environment,
        )),
        ze === void 0 &&
          (E.addEventListener("dispose", fe),
          (ze = new Map()),
          (H.programs = ze)));
      let Ie = ze.get(Pe);
      if (Ie !== void 0) {
        if (H.currentProgram === Ie && H.lightsStateVersion === Te)
          return (ia(E, we), Ie);
      } else
        ((we.uniforms = ye.getUniforms(E)),
          E.onBuild(z, we, x),
          E.onBeforeCompile(we, x),
          (Ie = ye.acquireProgram(we, Pe)),
          ze.set(Pe, Ie),
          (H.uniforms = we.uniforms));
      const Ne = H.uniforms;
      return (
        ((!E.isShaderMaterial && !E.isRawShaderMaterial) ||
          E.clipping === !0) &&
          (Ne.clippingPlanes = Be.uniform),
        ia(E, we),
        (H.needsLights = Vl(E)),
        (H.lightsStateVersion = Te),
        H.needsLights &&
          ((Ne.ambientLightColor.value = F.state.ambient),
          (Ne.lightProbe.value = F.state.probe),
          (Ne.directionalLights.value = F.state.directional),
          (Ne.directionalLightShadows.value = F.state.directionalShadow),
          (Ne.spotLights.value = F.state.spot),
          (Ne.spotLightShadows.value = F.state.spotShadow),
          (Ne.rectAreaLights.value = F.state.rectArea),
          (Ne.ltc_1.value = F.state.rectAreaLTC1),
          (Ne.ltc_2.value = F.state.rectAreaLTC2),
          (Ne.pointLights.value = F.state.point),
          (Ne.pointLightShadows.value = F.state.pointShadow),
          (Ne.hemisphereLights.value = F.state.hemi),
          (Ne.directionalShadowMap.value = F.state.directionalShadowMap),
          (Ne.directionalShadowMatrix.value = F.state.directionalShadowMatrix),
          (Ne.spotShadowMap.value = F.state.spotShadowMap),
          (Ne.spotLightMatrix.value = F.state.spotLightMatrix),
          (Ne.spotLightMap.value = F.state.spotLightMap),
          (Ne.pointShadowMap.value = F.state.pointShadowMap),
          (Ne.pointShadowMatrix.value = F.state.pointShadowMatrix)),
        (H.currentProgram = Ie),
        (H.uniformsList = null),
        Ie
      );
    }
    function na(E) {
      if (E.uniformsList === null) {
        const D = E.currentProgram.getUniforms();
        E.uniformsList = Cr.seqWithValue(D.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function ia(E, D) {
      const z = Ue.get(E);
      ((z.outputColorSpace = D.outputColorSpace),
        (z.batching = D.batching),
        (z.instancing = D.instancing),
        (z.instancingColor = D.instancingColor),
        (z.skinning = D.skinning),
        (z.morphTargets = D.morphTargets),
        (z.morphNormals = D.morphNormals),
        (z.morphColors = D.morphColors),
        (z.morphTargetsCount = D.morphTargetsCount),
        (z.numClippingPlanes = D.numClippingPlanes),
        (z.numIntersection = D.numClipIntersection),
        (z.vertexAlphas = D.vertexAlphas),
        (z.vertexTangents = D.vertexTangents),
        (z.toneMapping = D.toneMapping));
    }
    function kl(E, D, z, H, F) {
      (D.isScene !== !0 && (D = ge), y.resetTextureUnits());
      const me = D.fog,
        Te = H.isMeshStandardMaterial ? D.environment : null,
        we =
          A === null ? x.outputColorSpace
          : A.isXRRenderTarget === !0 ? A.texture.colorSpace
          : An,
        Pe = (H.isMeshStandardMaterial ? O : v).get(H.envMap || Te),
        ze =
          H.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        Ie = !!z.attributes.tangent && (!!H.normalMap || H.anisotropy > 0),
        Ne = !!z.morphAttributes.position,
        gt = !!z.morphAttributes.normal,
        Xt = !!z.morphAttributes.color;
      let At = On;
      H.toneMapped &&
        (A === null || A.isXRRenderTarget === !0) &&
        (At = x.toneMapping);
      const _n =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        pt = _n !== void 0 ? _n.length : 0,
        ke = Ue.get(H),
        Vr = p.state.lights;
      if (Z === !0 && (J === !0 || E !== S)) {
        const Jt = E === S && H.id === k;
        Be.setState(H, E, Jt);
      }
      let _t = !1;
      H.version === ke.__version ?
        ((ke.needsLights && ke.lightsStateVersion !== Vr.state.version) ||
          ke.outputColorSpace !== we ||
          (F.isBatchedMesh && ke.batching === !1) ||
          (!F.isBatchedMesh && ke.batching === !0) ||
          (F.isInstancedMesh && ke.instancing === !1) ||
          (!F.isInstancedMesh && ke.instancing === !0) ||
          (F.isSkinnedMesh && ke.skinning === !1) ||
          (!F.isSkinnedMesh && ke.skinning === !0) ||
          (F.isInstancedMesh &&
            ke.instancingColor === !0 &&
            F.instanceColor === null) ||
          (F.isInstancedMesh &&
            ke.instancingColor === !1 &&
            F.instanceColor !== null) ||
          ke.envMap !== Pe ||
          (H.fog === !0 && ke.fog !== me) ||
          (ke.numClippingPlanes !== void 0 &&
            (ke.numClippingPlanes !== Be.numPlanes ||
              ke.numIntersection !== Be.numIntersection)) ||
          ke.vertexAlphas !== ze ||
          ke.vertexTangents !== Ie ||
          ke.morphTargets !== Ne ||
          ke.morphNormals !== gt ||
          ke.morphColors !== Xt ||
          ke.toneMapping !== At ||
          (Se.isWebGL2 === !0 && ke.morphTargetsCount !== pt)) &&
        (_t = !0)
      : ((_t = !0), (ke.__version = H.version));
      let kn = ke.currentProgram;
      _t === !0 && (kn = ir(H, D, F));
      let ra = !1,
        Bi = !1,
        Wr = !1;
      const Pt = kn.getUniforms(),
        Hn = ke.uniforms;
      if (
        (_e.useProgram(kn.program) && ((ra = !0), (Bi = !0), (Wr = !0)),
        H.id !== k && ((k = H.id), (Bi = !0)),
        ra || S !== E)
      ) {
        (Pt.setValue(N, "projectionMatrix", E.projectionMatrix),
          Pt.setValue(N, "viewMatrix", E.matrixWorldInverse));
        const Jt = Pt.map.cameraPosition;
        (Jt !== void 0 &&
          Jt.setValue(N, Re.setFromMatrixPosition(E.matrixWorld)),
          Se.logarithmicDepthBuffer &&
            Pt.setValue(
              N,
              "logDepthBufFC",
              2 / (Math.log(E.far + 1) / Math.LN2),
            ),
          (H.isMeshPhongMaterial ||
            H.isMeshToonMaterial ||
            H.isMeshLambertMaterial ||
            H.isMeshBasicMaterial ||
            H.isMeshStandardMaterial ||
            H.isShaderMaterial) &&
            Pt.setValue(N, "isOrthographic", E.isOrthographicCamera === !0),
          S !== E && ((S = E), (Bi = !0), (Wr = !0)));
      }
      if (F.isSkinnedMesh) {
        (Pt.setOptional(N, F, "bindMatrix"),
          Pt.setOptional(N, F, "bindMatrixInverse"));
        const Jt = F.skeleton;
        Jt &&
          (Se.floatVertexTextures ?
            (Jt.boneTexture === null && Jt.computeBoneTexture(),
            Pt.setValue(N, "boneTexture", Jt.boneTexture, y))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.",
            ));
      }
      F.isBatchedMesh &&
        (Pt.setOptional(N, F, "batchingTexture"),
        Pt.setValue(N, "batchingTexture", F._matricesTexture, y));
      const Xr = z.morphAttributes;
      if (
        ((Xr.position !== void 0 ||
          Xr.normal !== void 0 ||
          (Xr.color !== void 0 && Se.isWebGL2 === !0)) &&
          We.update(F, z, kn),
        (Bi || ke.receiveShadow !== F.receiveShadow) &&
          ((ke.receiveShadow = F.receiveShadow),
          Pt.setValue(N, "receiveShadow", F.receiveShadow)),
        H.isMeshGouraudMaterial &&
          H.envMap !== null &&
          ((Hn.envMap.value = Pe),
          (Hn.flipEnvMap.value =
            Pe.isCubeTexture && Pe.isRenderTargetTexture === !1 ? -1 : 1)),
        Bi &&
          (Pt.setValue(N, "toneMappingExposure", x.toneMappingExposure),
          ke.needsLights && Hl(Hn, Wr),
          me && H.fog === !0 && de.refreshFogUniforms(Hn, me),
          de.refreshMaterialUniforms(Hn, H, X, B, ue),
          Cr.upload(N, na(ke), Hn, y)),
        H.isShaderMaterial &&
          H.uniformsNeedUpdate === !0 &&
          (Cr.upload(N, na(ke), Hn, y), (H.uniformsNeedUpdate = !1)),
        H.isSpriteMaterial && Pt.setValue(N, "center", F.center),
        Pt.setValue(N, "modelViewMatrix", F.modelViewMatrix),
        Pt.setValue(N, "normalMatrix", F.normalMatrix),
        Pt.setValue(N, "modelMatrix", F.matrixWorld),
        H.isShaderMaterial || H.isRawShaderMaterial)
      ) {
        const Jt = H.uniformsGroups;
        for (let $r = 0, Wl = Jt.length; $r < Wl; $r++)
          if (Se.isWebGL2) {
            const sa = Jt[$r];
            (Je.update(sa, kn), Je.bind(sa, kn));
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.",
            );
      }
      return kn;
    }
    function Hl(E, D) {
      ((E.ambientLightColor.needsUpdate = D),
        (E.lightProbe.needsUpdate = D),
        (E.directionalLights.needsUpdate = D),
        (E.directionalLightShadows.needsUpdate = D),
        (E.pointLights.needsUpdate = D),
        (E.pointLightShadows.needsUpdate = D),
        (E.spotLights.needsUpdate = D),
        (E.spotLightShadows.needsUpdate = D),
        (E.rectAreaLights.needsUpdate = D),
        (E.hemisphereLights.needsUpdate = D));
    }
    function Vl(E) {
      return (
        E.isMeshLambertMaterial ||
        E.isMeshToonMaterial ||
        E.isMeshPhongMaterial ||
        E.isMeshStandardMaterial ||
        E.isShadowMaterial ||
        (E.isShaderMaterial && E.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return L;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return A;
      }),
      (this.setRenderTargetTextures = function (E, D, z) {
        ((Ue.get(E.texture).__webglTexture = D),
          (Ue.get(E.depthTexture).__webglTexture = z));
        const H = Ue.get(E);
        ((H.__hasExternalTextures = !0),
          H.__hasExternalTextures &&
            ((H.__autoAllocateDepthBuffer = z === void 0),
            H.__autoAllocateDepthBuffer ||
              (ee.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
                ),
                (H.__useRenderToTexture = !1)))));
      }),
      (this.setRenderTargetFramebuffer = function (E, D) {
        const z = Ue.get(E);
        ((z.__webglFramebuffer = D),
          (z.__useDefaultFramebuffer = D === void 0));
      }),
      (this.setRenderTarget = function (E, D = 0, z = 0) {
        ((A = E), (L = D), (w = z));
        let H = !0,
          F = null,
          me = !1,
          Te = !1;
        if (E) {
          const Pe = Ue.get(E);
          Pe.__useDefaultFramebuffer !== void 0 ?
            (_e.bindFramebuffer(N.FRAMEBUFFER, null), (H = !1))
          : Pe.__webglFramebuffer === void 0 ? y.setupRenderTarget(E)
          : Pe.__hasExternalTextures &&
            y.rebindTextures(
              E,
              Ue.get(E.texture).__webglTexture,
              Ue.get(E.depthTexture).__webglTexture,
            );
          const ze = E.texture;
          (ze.isData3DTexture ||
            ze.isDataArrayTexture ||
            ze.isCompressedArrayTexture) &&
            (Te = !0);
          const Ie = Ue.get(E).__webglFramebuffer;
          (E.isWebGLCubeRenderTarget ?
            (Array.isArray(Ie[D]) ? (F = Ie[D][z]) : (F = Ie[D]), (me = !0))
          : Se.isWebGL2 && E.samples > 0 && y.useMultisampledRTT(E) === !1 ?
            (F = Ue.get(E).__webglMultisampledFramebuffer)
          : Array.isArray(Ie) ? (F = Ie[z])
          : (F = Ie),
            b.copy(E.viewport),
            W.copy(E.scissor),
            (j = E.scissorTest));
        } else
          (b.copy(Y).multiplyScalar(X).floor(),
            W.copy(te).multiplyScalar(X).floor(),
            (j = Q));
        if (
          (_e.bindFramebuffer(N.FRAMEBUFFER, F) &&
            Se.drawBuffers &&
            H &&
            _e.drawBuffers(E, F),
          _e.viewport(b),
          _e.scissor(W),
          _e.setScissorTest(j),
          me)
        ) {
          const Pe = Ue.get(E.texture);
          N.framebufferTexture2D(
            N.FRAMEBUFFER,
            N.COLOR_ATTACHMENT0,
            N.TEXTURE_CUBE_MAP_POSITIVE_X + D,
            Pe.__webglTexture,
            z,
          );
        } else if (Te) {
          const Pe = Ue.get(E.texture),
            ze = D || 0;
          N.framebufferTextureLayer(
            N.FRAMEBUFFER,
            N.COLOR_ATTACHMENT0,
            Pe.__webglTexture,
            z || 0,
            ze,
          );
        }
        k = -1;
      }),
      (this.readRenderTargetPixels = function (E, D, z, H, F, me, Te) {
        if (!(E && E.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let we = Ue.get(E).__webglFramebuffer;
        if ((E.isWebGLCubeRenderTarget && Te !== void 0 && (we = we[Te]), we)) {
          _e.bindFramebuffer(N.FRAMEBUFFER, we);
          try {
            const Pe = E.texture,
              ze = Pe.format,
              Ie = Pe.type;
            if (
              ze !== un &&
              Me.convert(ze) !==
                N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            const Ne =
              Ie === Ki &&
              (ee.has("EXT_color_buffer_half_float") ||
                (Se.isWebGL2 && ee.has("EXT_color_buffer_float")));
            if (
              Ie !== Bn &&
              Me.convert(Ie) !==
                N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Ie === Nn &&
                (Se.isWebGL2 ||
                  ee.has("OES_texture_float") ||
                  ee.has("WEBGL_color_buffer_float"))
              ) &&
              !Ne
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            D >= 0 &&
              D <= E.width - H &&
              z >= 0 &&
              z <= E.height - F &&
              N.readPixels(D, z, H, F, Me.convert(ze), Me.convert(Ie), me);
          } finally {
            const Pe = A !== null ? Ue.get(A).__webglFramebuffer : null;
            _e.bindFramebuffer(N.FRAMEBUFFER, Pe);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (E, D, z = 0) {
        const H = Math.pow(2, -z),
          F = Math.floor(D.image.width * H),
          me = Math.floor(D.image.height * H);
        (y.setTexture2D(D, 0),
          N.copyTexSubImage2D(N.TEXTURE_2D, z, 0, 0, E.x, E.y, F, me),
          _e.unbindTexture());
      }),
      (this.copyTextureToTexture = function (E, D, z, H = 0) {
        const F = D.image.width,
          me = D.image.height,
          Te = Me.convert(z.format),
          we = Me.convert(z.type);
        (y.setTexture2D(z, 0),
          N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, z.flipY),
          N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
          N.pixelStorei(N.UNPACK_ALIGNMENT, z.unpackAlignment),
          D.isDataTexture ?
            N.texSubImage2D(
              N.TEXTURE_2D,
              H,
              E.x,
              E.y,
              F,
              me,
              Te,
              we,
              D.image.data,
            )
          : D.isCompressedTexture ?
            N.compressedTexSubImage2D(
              N.TEXTURE_2D,
              H,
              E.x,
              E.y,
              D.mipmaps[0].width,
              D.mipmaps[0].height,
              Te,
              D.mipmaps[0].data,
            )
          : N.texSubImage2D(N.TEXTURE_2D, H, E.x, E.y, Te, we, D.image),
          H === 0 && z.generateMipmaps && N.generateMipmap(N.TEXTURE_2D),
          _e.unbindTexture());
      }),
      (this.copyTextureToTexture3D = function (E, D, z, H, F = 0) {
        if (x.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.",
          );
          return;
        }
        const me = E.max.x - E.min.x + 1,
          Te = E.max.y - E.min.y + 1,
          we = E.max.z - E.min.z + 1,
          Pe = Me.convert(H.format),
          ze = Me.convert(H.type);
        let Ie;
        if (H.isData3DTexture) (y.setTexture3D(H, 0), (Ie = N.TEXTURE_3D));
        else if (H.isDataArrayTexture || H.isCompressedArrayTexture)
          (y.setTexture2DArray(H, 0), (Ie = N.TEXTURE_2D_ARRAY));
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.",
          );
          return;
        }
        (N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, H.flipY),
          N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, H.premultiplyAlpha),
          N.pixelStorei(N.UNPACK_ALIGNMENT, H.unpackAlignment));
        const Ne = N.getParameter(N.UNPACK_ROW_LENGTH),
          gt = N.getParameter(N.UNPACK_IMAGE_HEIGHT),
          Xt = N.getParameter(N.UNPACK_SKIP_PIXELS),
          At = N.getParameter(N.UNPACK_SKIP_ROWS),
          _n = N.getParameter(N.UNPACK_SKIP_IMAGES),
          pt = z.isCompressedTexture ? z.mipmaps[F] : z.image;
        (N.pixelStorei(N.UNPACK_ROW_LENGTH, pt.width),
          N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, pt.height),
          N.pixelStorei(N.UNPACK_SKIP_PIXELS, E.min.x),
          N.pixelStorei(N.UNPACK_SKIP_ROWS, E.min.y),
          N.pixelStorei(N.UNPACK_SKIP_IMAGES, E.min.z),
          z.isDataTexture || z.isData3DTexture ?
            N.texSubImage3D(Ie, F, D.x, D.y, D.z, me, Te, we, Pe, ze, pt.data)
          : z.isCompressedArrayTexture ?
            (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.",
            ),
            N.compressedTexSubImage3D(
              Ie,
              F,
              D.x,
              D.y,
              D.z,
              me,
              Te,
              we,
              Pe,
              pt.data,
            ))
          : N.texSubImage3D(Ie, F, D.x, D.y, D.z, me, Te, we, Pe, ze, pt),
          N.pixelStorei(N.UNPACK_ROW_LENGTH, Ne),
          N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, gt),
          N.pixelStorei(N.UNPACK_SKIP_PIXELS, Xt),
          N.pixelStorei(N.UNPACK_SKIP_ROWS, At),
          N.pixelStorei(N.UNPACK_SKIP_IMAGES, _n),
          F === 0 && H.generateMipmaps && N.generateMipmap(Ie),
          _e.unbindTexture());
      }),
      (this.initTexture = function (E) {
        (E.isCubeTexture ? y.setTextureCube(E, 0)
        : E.isData3DTexture ? y.setTexture3D(E, 0)
        : E.isDataArrayTexture || E.isCompressedArrayTexture ?
          y.setTexture2DArray(E, 0)
        : y.setTexture2D(E, 0),
          _e.unbindTexture());
      }),
      (this.resetState = function () {
        ((L = 0), (w = 0), (A = null), _e.reset(), Fe.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return yn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorSpace = e === Ks ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        tt.workingColorSpace === zr ? "display-p3" : "srgb"));
  }
  get outputEncoding() {
    return (
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.",
      ),
      this.outputColorSpace === Lt ? ei : _l
    );
  }
  set outputEncoding(e) {
    (console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.",
    ),
      (this.outputColorSpace = e === ei ? Lt : An));
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.",
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    (console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.",
    ),
      (this._useLegacyLights = e));
  }
}
class u_ extends zl {}
u_.prototype.isWebGL1Renderer = !0;
class h_ extends It {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
}
class f_ extends er {
  constructor(e) {
    (super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Ke(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ke(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = gl),
      (this.normalScale = new Ze(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ys),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class d_ extends It {
  constructor(e, t = 1) {
    (super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ke(e)),
      (this.intensity = t));
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const ws = new St(),
  Po = new G(),
  Do = new G();
class p_ {
  constructor(e) {
    ((this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ze(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new St()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Js()),
      (this._frameExtents = new Ze(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ct(0, 0, 1, 1)]));
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      i = this.matrix;
    (Po.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Po),
      Do.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Do),
      t.updateMatrixWorld(),
      ws.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ws),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(ws));
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class m_ extends p_ {
  constructor() {
    (super(new Dl(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class __ extends d_ {
  constructor(e, t) {
    (super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(It.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new It()),
      (this.shadow = new m_()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: qs } }),
  );
typeof window < "u" &&
  (window.__THREE__ ?
    console.warn("WARNING: Multiple instances of Three.js being imported.")
  : (window.__THREE__ = qs));
function g_(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = V("div")),
        (t = V("h2")),
        (t.textContent = "3D Heatmap"),
        (i = oe()),
        (r = V("div")),
        q(r, "class", "svelte-1qp06gq"),
        q(e, "class", "panel svelte-1qp06gq"));
    },
    m(s, o) {
      (Ye(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: ve,
    i: ve,
    o: ve,
    d(s) {
      (s && Xe(e), n[1](null));
    },
  };
}
function v_(n, e, t) {
  let i,
    r = null;
  const s = Xs.subscribe((_) => {
    ((r = _), r && f());
  });
  let o, a, l, c, u;
  function f() {
    if (!r) return;
    const _ = r[0].length,
      g = r.length;
    ((o = new h_()),
      (o.background = new Ke(1118481)),
      (a = new tn(45, 1, 0.1, 1e3)),
      a.position.set(0, -_, _ * 0.8),
      (l = new zl({ antialias: !0 })),
      l.setSize(500, 500),
      t(0, (i.innerHTML = ""), i),
      i.appendChild(l.domElement));
    const p = new kr(_, g, _ - 1, g - 1),
      h = p.attributes.position;
    for (let L = 0; L < h.count; L++) {
      const w = L % _,
        A = Math.floor(L / _),
        k = r[A][w] * 0.1;
      h.setZ(L, k);
    }
    h.needsUpdate = !0;
    const M = [];
    for (let L = 0; L < g; L++)
      for (let w = 0; w < _; w++) {
        const A = r[L][w],
          k = Math.min(1, A / 255),
          S = 1 - k;
        M.push(k, 0, S);
      }
    p.setAttribute("color", new zn(M, 3));
    const x = new f_({ vertexColors: !0, side: dn, wireframe: !1 });
    ((c = new Tn(p, x)), (c.rotation.x = -Math.PI / 2), o.add(c));
    const T = new __(16777215, 1);
    (T.position.set(0, 0, 10), o.add(T), d());
  }
  function d() {
    ((u = requestAnimationFrame(d)), (c.rotation.z += 0.002), l.render(o, a));
  }
  Jo(() => {
    (u && cancelAnimationFrame(u), s(), l == null || l.dispose());
  });
  function m(_) {
    mn[_ ? "unshift" : "push"](() => {
      ((i = _), t(0, i));
    });
  }
  return [i, m];
}
class x_ extends ft {
  constructor(e) {
    (super(), ht(this, e, v_, g_, ot, {}));
  }
}
function M_(n) {
  let e, t, i, r, s, o, a;
  return (
    (t = new Qc({})),
    (r = new nu({})),
    (o = new x_({})),
    {
      c() {
        ((e = V("div")),
          dt(t.$$.fragment),
          (i = oe()),
          dt(r.$$.fragment),
          (s = oe()),
          dt(o.$$.fragment),
          q(e, "class", "grid svelte-1udxs04"));
      },
      m(l, c) {
        (Ye(l, e, c),
          ct(t, e, null),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          (a = !0));
      },
      p: ve,
      i(l) {
        a ||
          (nt(t.$$.fragment, l),
          nt(r.$$.fragment, l),
          nt(o.$$.fragment, l),
          (a = !0));
      },
      o(l) {
        (at(t.$$.fragment, l),
          at(r.$$.fragment, l),
          at(o.$$.fragment, l),
          (a = !1));
      },
      d(l) {
        (l && Xe(e), ut(t), ut(r), ut(o));
      },
    }
  );
}
class S_ extends ft {
  constructor(e) {
    (super(), ht(this, e, null, M_, ot, {}));
  }
}
function Uo(n, e, t) {
  const i = n.slice();
  return ((i[2] = e[t]), i);
}
function Io(n, e, t) {
  const i = n.slice();
  return ((i[5] = e[t]), i);
}
function No(n) {
  let e;
  return {
    c() {
      ((e = V("li")), (e.textContent = `${n[5]}`));
    },
    m(t, i) {
      Ye(t, e, i);
    },
    p: ve,
    d(t) {
      t && Xe(e);
    },
  };
}
function Fo(n) {
  let e, t, i, r, s;
  return {
    c() {
      ((e = V("article")),
        (t = V("h4")),
        (t.textContent = `${n[2].title}`),
        (i = oe()),
        (r = V("p")),
        (r.textContent = `${n[2].text}`),
        (s = oe()),
        q(t, "class", "svelte-1dhku2"),
        q(r, "class", "svelte-1dhku2"),
        q(e, "class", "svelte-1dhku2"));
    },
    m(o, a) {
      (Ye(o, e, a), R(e, t), R(e, i), R(e, r), R(e, s));
    },
    p: ve,
    d(o) {
      o && Xe(e);
    },
  };
}
function E_(n) {
  let e,
    t,
    i,
    r,
    s,
    o,
    a,
    l,
    c,
    u,
    f,
    d,
    m,
    _,
    g,
    p,
    h,
    M,
    x,
    T,
    L,
    w,
    A,
    k,
    S,
    b,
    W,
    j,
    re,
    P,
    I,
    B,
    X,
    $,
    K = rn(n[0]),
    Y = [];
  for (let U = 0; U < K.length; U += 1) Y[U] = No(Io(n, K, U));
  let te = rn(n[1]),
    Q = [];
  for (let U = 0; U < te.length; U += 1) Q[U] = Fo(Uo(n, te, U));
  return {
    c() {
      ((e = V("section")),
        (t = V("h2")),
        (t.textContent = "Webapp-Erklärung (Basis)"),
        (i = oe()),
        (r = V("p")),
        (r.textContent = `Diese Seite ist eine textbasierte Einführung für neue Nutzer. Sie erklärt, was die App macht,\r
    wie man startet und wie man Probleme erkennt.`),
        (s = oe()),
        (o = V("h3")),
        (o.textContent = "Zweck der App"),
        (a = oe()),
        (l = V("p")),
        (l.textContent = `roboto verbindet Vision, Motion-Control und Sensorik in einer gemeinsamen Oberfläche.\r
    Die App kann sowohl als Analyse-Tool (Vision/Replay/Export) als auch als Steuerzentrale\r
    für Hardware (z. B. Motoren, Raster-Scan, Mobile Controller) genutzt werden.`),
        (c = oe()),
        (u = V("h3")),
        (u.textContent = "Tabs im Überblick"),
        (f = oe()),
        (d = V("ul")),
        (d.innerHTML =
          "<li><b>Dashboard</b>: Motorsteuerung + Live-Sensorik + Graph.</li> <li><b>Vision</b>: Kamera, Overlays, Annotation, Recorder/Replay.</li> <li><b>Raster</b>: Raster-Scan + Heatmap (2D/3D).</li> <li><b>Guide</b>: Diese Hilfeseite.</li>"),
        (m = oe()),
        (_ = V("h3")),
        (_.textContent = "System Status (wichtig)"),
        (g = oe()),
        (p = V("p")),
        (p.textContent = `Im linken Bereich zeigt die App live den Zustand von Backend, Frontend und WebSocket.\r
    Zusätzlich zeigt das Activity-Log jede Aktion und die Antwort vom Backend.`),
        (h = oe()),
        (M = V("h3")),
        (M.textContent = "Quickstart (für Nutzer)"),
        (x = oe()),
        (T = V("ol")));
      for (let U = 0; U < Y.length; U += 1) Y[U].c();
      ((L = oe()),
        (w = V("h3")),
        (w.textContent = "Fehler lesen & verstehen"),
        (A = oe()),
        (k = V("ul")),
        (k.innerHTML =
          "<li><b>Backend OFFLINE</b>: Server läuft nicht oder Port 8022 nicht erreichbar.</li> <li><b>WS DISCONNECTED</b>: WebSocket-Verbindung gestört; Echtzeitfunktionen eingeschränkt.</li> <li><b>Letzter Backend-Fehler</b>: Letzte konkrete API-Fehlermeldung (Status/Exception).</li>"),
        (S = oe()),
        (b = V("h3")),
        (b.textContent = "Hardware-Strategie (praxisnah)"),
        (W = oe()),
        (j = V("p")),
        (j.textContent =
          "Nicht jeder Nutzer hat die gleiche Hardware. Deshalb empfiehlt sich ein modularer Einstieg:"),
        (re = oe()),
        (P = V("div")));
      for (let U = 0; U < Q.length; U += 1) Q[U].c();
      ((I = oe()),
        (B = V("h3")),
        (B.textContent = "Empfehlung für dein Projekt"),
        (X = oe()),
        ($ = V("p")),
        ($.textContent = `Ja, es macht absolut Sinn, Alltags-Hardware zu unterstützen. Der beste Weg ist ein\r
    "Capability-Ansatz": Funktionen dynamisch aktivieren, je nachdem welche Hardware erkannt\r
    wurde. So können Einsteiger mit PC+Handy starten und Fortgeschrittene Duet3D/Arduino nutzen,\r
    ohne dass die App überfordert.`),
        q(t, "class", "svelte-1dhku2"),
        q(r, "class", "svelte-1dhku2"),
        q(o, "class", "svelte-1dhku2"),
        q(l, "class", "svelte-1dhku2"),
        q(u, "class", "svelte-1dhku2"),
        q(d, "class", "svelte-1dhku2"),
        q(_, "class", "svelte-1dhku2"),
        q(p, "class", "svelte-1dhku2"),
        q(M, "class", "svelte-1dhku2"),
        q(T, "class", "svelte-1dhku2"),
        q(w, "class", "svelte-1dhku2"),
        q(k, "class", "svelte-1dhku2"),
        q(b, "class", "svelte-1dhku2"),
        q(j, "class", "svelte-1dhku2"),
        q(P, "class", "cards svelte-1dhku2"),
        q(B, "class", "svelte-1dhku2"),
        q($, "class", "svelte-1dhku2"),
        q(e, "class", "guide svelte-1dhku2"));
    },
    m(U, Z) {
      (Ye(U, e, Z),
        R(e, t),
        R(e, i),
        R(e, r),
        R(e, s),
        R(e, o),
        R(e, a),
        R(e, l),
        R(e, c),
        R(e, u),
        R(e, f),
        R(e, d),
        R(e, m),
        R(e, _),
        R(e, g),
        R(e, p),
        R(e, h),
        R(e, M),
        R(e, x),
        R(e, T));
      for (let J = 0; J < Y.length; J += 1) Y[J] && Y[J].m(T, null);
      (R(e, L),
        R(e, w),
        R(e, A),
        R(e, k),
        R(e, S),
        R(e, b),
        R(e, W),
        R(e, j),
        R(e, re),
        R(e, P));
      for (let J = 0; J < Q.length; J += 1) Q[J] && Q[J].m(P, null);
      (R(e, I), R(e, B), R(e, X), R(e, $));
    },
    p(U, [Z]) {
      if (Z & 1) {
        K = rn(U[0]);
        let J;
        for (J = 0; J < K.length; J += 1) {
          const ue = Io(U, K, J);
          Y[J] ? Y[J].p(ue, Z) : ((Y[J] = No(ue)), Y[J].c(), Y[J].m(T, null));
        }
        for (; J < Y.length; J += 1) Y[J].d(1);
        Y.length = K.length;
      }
      if (Z & 2) {
        te = rn(U[1]);
        let J;
        for (J = 0; J < te.length; J += 1) {
          const ue = Uo(U, te, J);
          Q[J] ? Q[J].p(ue, Z) : ((Q[J] = Fo(ue)), Q[J].c(), Q[J].m(P, null));
        }
        for (; J < Q.length; J += 1) Q[J].d(1);
        Q.length = te.length;
      }
    },
    i: ve,
    o: ve,
    d(U) {
      (U && Xe(e), Pi(Y, U), Pi(Q, U));
    },
  };
}
function y_(n) {
  return [
    [
      "Backend starten (Launcher oder CLI)",
      "Frontend öffnen (http://localhost:8033)",
      "Im Bereich 'System Status' prüfen: Backend/Frontend/WS = ONLINE",
      "Im Tab 'Vision' Livebild und Overlay prüfen",
      "Bei Fehlern Activity-Log lesen (zeigt Aktion + Backend-Antwort)",
    ],
    [
      {
        title: "Nur PC/Laptop + Smartphone (empfohlen für Start)",
        text: "Nutzt Vision, Replay, Annotation, Export und Mobile-Controller ohne Spezialhardware.",
      },
      {
        title: "PC/Laptop + Arduino (z. B. UNO)",
        text: "Für einfache Motor-/Sensor-Experimente. Erst virtuell testen, dann echte I/O schrittweise aktivieren.",
      },
      {
        title: "PC/Laptop + Duet3D / 3D-Drucker-Controller",
        text: "Für Multi-Axis-Motion und Raster-Workflows. Sehr sinnvoll für dein Projektfokus.",
      },
    ],
  ];
}
class T_ extends ft {
  constructor(e) {
    (super(), ht(this, e, y_, E_, ot, {}));
  }
}
function b_(n) {
  let e, t, i, r, s, o, a, l, c;
  return {
    c() {
      ((e = V("div")),
        (t = V("h3")),
        (t.textContent = "Vision Model"),
        (i = oe()),
        (r = V("select")),
        (s = V("option")),
        (s.textContent = "YOLO (Boxes)"),
        (o = V("option")),
        (o.textContent = "Segmenter (Masken)"),
        (a = V("option")),
        (a.textContent = "Pose (Keypoints)"),
        (s.__value = "yolo"),
        Qe(s, s.__value),
        (o.__value = "segmenter"),
        Qe(o, o.__value),
        (a.__value = "pose"),
        Qe(a, a.__value),
        n[0] === void 0 && ti(() => n[2].call(r)),
        q(e, "class", "panel svelte-dv6z1t"));
    },
    m(u, f) {
      (Ye(u, e, f),
        R(e, t),
        R(e, i),
        R(e, r),
        R(r, s),
        R(r, o),
        R(r, a),
        Un(r, n[0], !0),
        l || ((c = [je(r, "change", n[2]), je(r, "change", n[1])]), (l = !0)));
    },
    p(u, [f]) {
      f & 1 && Un(r, u[0]);
    },
    i: ve,
    o: ve,
    d(u) {
      (u && Xe(e), (l = !1), kt(c));
    },
  };
}
function A_(n, e, t) {
  let i = "yolo";
  async function r() {
    await Kt("set_model", "/api/vision/model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: i }),
    });
  }
  function s() {
    ((i = Lr(this)), t(0, i));
  }
  return [i, r, s];
}
class w_ extends ft {
  constructor(e) {
    (super(), ht(this, e, A_, b_, ot, {}));
  }
}
function R_(n) {
  let e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p, h, M;
  return {
    c() {
      ((e = V("div")),
        (t = V("h3")),
        (t.textContent = "Vision Backend"),
        (i = oe()),
        (r = V("select")),
        (s = V("option")),
        (s.textContent = "ONNX Runtime"),
        (o = V("option")),
        (o.textContent = "TensorRT"),
        (a = V("option")),
        (a.textContent = "OpenVINO"),
        (l = V("option")),
        (l.textContent = "SNPE (Remote)"),
        (c = oe()),
        (u = V("h3")),
        (u.textContent = "Vision Profil"),
        (f = oe()),
        (d = V("select")),
        (m = V("option")),
        (m.textContent = "NVIDIA Jetson"),
        (_ = V("option")),
        (_.textContent = "Intel CPU/iGPU"),
        (g = V("option")),
        (g.textContent = "Desktop/Laptop"),
        (p = V("option")),
        (p.textContent = "Mobile Vision Node"),
        (s.__value = "onnx"),
        Qe(s, s.__value),
        (o.__value = "tensorrt"),
        Qe(o, o.__value),
        (a.__value = "openvino"),
        Qe(a, a.__value),
        (l.__value = "snpe"),
        Qe(l, l.__value),
        q(r, "class", "svelte-2fb5c5"),
        n[0] === void 0 && ti(() => n[4].call(r)),
        (m.__value = "jetson"),
        Qe(m, m.__value),
        (_.__value = "intel"),
        Qe(_, _.__value),
        (g.__value = "desktop"),
        Qe(g, g.__value),
        (p.__value = "mobile"),
        Qe(p, p.__value),
        q(d, "class", "svelte-2fb5c5"),
        n[1] === void 0 && ti(() => n[5].call(d)),
        q(e, "class", "panel svelte-2fb5c5"));
    },
    m(x, T) {
      (Ye(x, e, T),
        R(e, t),
        R(e, i),
        R(e, r),
        R(r, s),
        R(r, o),
        R(r, a),
        R(r, l),
        Un(r, n[0], !0),
        R(e, c),
        R(e, u),
        R(e, f),
        R(e, d),
        R(d, m),
        R(d, _),
        R(d, g),
        R(d, p),
        Un(d, n[1], !0),
        h ||
          ((M = [
            je(r, "change", n[4]),
            je(r, "change", n[2]),
            je(d, "change", n[5]),
            je(d, "change", n[3]),
          ]),
          (h = !0)));
    },
    p(x, [T]) {
      (T & 1 && Un(r, x[0]), T & 2 && Un(d, x[1]));
    },
    i: ve,
    o: ve,
    d(x) {
      (x && Xe(e), (h = !1), kt(M));
    },
  };
}
function C_(n, e, t) {
  let i = "onnx",
    r = "desktop";
  async function s() {
    await Kt("set_backend", "/api/vision/backend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ backend: i }),
    });
  }
  async function o() {
    await Kt("set_profile", "/api/vision/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile: r }),
    });
  }
  function a() {
    ((i = Lr(this)), t(0, i));
  }
  function l() {
    ((r = Lr(this)), t(1, r));
  }
  return [i, r, s, o, a, l];
}
class L_ extends ft {
  constructor(e) {
    (super(), ht(this, e, C_, R_, ot, {}));
  }
}
function Oo(n, e, t) {
  const i = n.slice();
  return ((i[5] = e[t]), i);
}
function Bo(n) {
  let e,
    t,
    i = n[5].name + "",
    r,
    s,
    o = n[5].remote ? " (Remote)" : "",
    a,
    l,
    c,
    u =
      n[5].status === "offline" ? "🔴 offline"
      : n[5].status === "degraded" ? "🟡 degraded"
      : "🟢 healthy",
    f,
    d,
    m,
    _,
    g;
  function p() {
    return n[2](n[5]);
  }
  return {
    c() {
      ((e = V("div")),
        (t = V("button")),
        (r = Ve(i)),
        (s = oe()),
        (a = Ve(o)),
        (l = oe()),
        (c = V("span")),
        (f = Ve(u)),
        (m = oe()),
        q(t, "class", "svelte-1mweq8t"),
        Rt(t, "selected", n[5].active),
        q(c, "class", (d = "status " + n[5].status + " svelte-1mweq8t")),
        q(e, "class", "node"),
        Rt(e, "active", n[5].active));
    },
    m(h, M) {
      (Ye(h, e, M),
        R(e, t),
        R(t, r),
        R(t, s),
        R(t, a),
        R(e, l),
        R(e, c),
        R(c, f),
        R(e, m),
        _ || ((g = je(t, "click", p)), (_ = !0)));
    },
    p(h, M) {
      ((n = h),
        M & 1 && i !== (i = n[5].name + "") && xt(r, i),
        M & 1 && o !== (o = n[5].remote ? " (Remote)" : "") && xt(a, o),
        M & 1 && Rt(t, "selected", n[5].active),
        M & 1 &&
          u !==
            (u =
              n[5].status === "offline" ? "🔴 offline"
              : n[5].status === "degraded" ? "🟡 degraded"
              : "🟢 healthy") &&
          xt(f, u),
        M & 1 &&
          d !== (d = "status " + n[5].status + " svelte-1mweq8t") &&
          q(c, "class", d),
        M & 1 && Rt(e, "active", n[5].active));
    },
    d(h) {
      (h && Xe(e), (_ = !1), g());
    },
  };
}
function P_(n) {
  let e,
    t = rn(n[0]),
    i = [];
  for (let r = 0; r < t.length; r += 1) i[r] = Bo(Oo(n, t, r));
  return {
    c() {
      e = V("div");
      for (let r = 0; r < i.length; r += 1) i[r].c();
      q(e, "class", "nodes svelte-1mweq8t");
    },
    m(r, s) {
      Ye(r, e, s);
      for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
    },
    p(r, [s]) {
      if (s & 3) {
        t = rn(r[0]);
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = Oo(r, t, o);
          i[o] ? i[o].p(a, s) : ((i[o] = Bo(a)), i[o].c(), i[o].m(e, null));
        }
        for (; o < i.length; o += 1) i[o].d(1);
        i.length = t.length;
      }
    },
    i: ve,
    o: ve,
    d(r) {
      (r && Xe(e), Pi(i, r));
    },
  };
}
function D_(n, e, t) {
  let i = [],
    r;
  async function s() {
    const l = await Kt("load_nodes", "/api/vision/nodes");
    t(0, (i = await l.json()));
  }
  async function o(l) {
    (await Kt("select_node", "/api/vision/nodes/select", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ node_id: l }),
    }),
      s());
  }
  return (
    ri(() => (s(), (r = setInterval(s, 2e3)), () => clearInterval(r))),
    [i, o, (l) => o(l.id)]
  );
}
class U_ extends ft {
  constructor(e) {
    (super(), ht(this, e, D_, P_, ot, {}));
  }
}
function I_(n) {
  let e, t, i, r, s, o;
  return {
    c() {
      ((e = V("div")),
        (t = V("button")),
        (t.textContent = "Start Recording"),
        (i = oe()),
        (r = V("button")),
        (r.textContent = "Stop Recording"),
        q(t, "class", "svelte-16qoqwn"),
        q(r, "class", "svelte-16qoqwn"),
        q(e, "class", "recorder svelte-16qoqwn"));
    },
    m(a, l) {
      (Ye(a, e, l),
        R(e, t),
        R(e, i),
        R(e, r),
        s || ((o = [je(t, "click", n[0]), je(r, "click", n[1])]), (s = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(a) {
      (a && Xe(e), (s = !1), kt(o));
    },
  };
}
function N_(n) {
  async function e() {
    await Kt("record_start", "/api/vision/record/start", { method: "POST" });
  }
  async function t() {
    await Kt("record_stop", "/api/vision/record/stop", { method: "POST" });
  }
  return [e, t];
}
class F_ extends ft {
  constructor(e) {
    (super(), ht(this, e, N_, I_, ot, {}));
  }
}
function zo(n, e, t) {
  const i = n.slice();
  return ((i[6] = e[t]), i);
}
function Go(n) {
  let e,
    t = n[6] + "",
    i,
    r;
  return {
    c() {
      ((e = V("option")),
        (i = Ve(t)),
        (e.__value = r = n[6]),
        Qe(e, e.__value));
    },
    m(s, o) {
      (Ye(s, e, o), R(e, i));
    },
    p(s, o) {
      (o & 1 && t !== (t = s[6] + "") && xt(i, t),
        o & 1 && r !== (r = s[6]) && ((e.__value = r), Qe(e, e.__value)));
    },
    d(s) {
      s && Xe(e);
    },
  };
}
function O_(n) {
  let e,
    t,
    i,
    r,
    s,
    o,
    a = rn(n[0]),
    l = [];
  for (let c = 0; c < a.length; c += 1) l[c] = Go(zo(n, a, c));
  return {
    c() {
      ((e = V("div")), (t = V("select")));
      for (let c = 0; c < l.length; c += 1) l[c].c();
      ((i = oe()),
        (r = V("button")),
        (r.textContent = "Replay starten"),
        n[1] === void 0 && ti(() => n[3].call(t)));
    },
    m(c, u) {
      (Ye(c, e, u), R(e, t));
      for (let f = 0; f < l.length; f += 1) l[f] && l[f].m(t, null);
      (Un(t, n[1], !0),
        R(e, i),
        R(e, r),
        s || ((o = [je(t, "change", n[3]), je(r, "click", n[2])]), (s = !0)));
    },
    p(c, [u]) {
      if (u & 1) {
        a = rn(c[0]);
        let f;
        for (f = 0; f < a.length; f += 1) {
          const d = zo(c, a, f);
          l[f] ? l[f].p(d, u) : ((l[f] = Go(d)), l[f].c(), l[f].m(t, null));
        }
        for (; f < l.length; f += 1) l[f].d(1);
        l.length = a.length;
      }
      u & 3 && Un(t, c[1]);
    },
    i: ve,
    o: ve,
    d(c) {
      (c && Xe(e), Pi(l, c), (s = !1), kt(o));
    },
  };
}
function B_(n, e, t) {
  let i = [],
    r = null;
  async function s() {
    const c = await Kt("list_recordings", "/api/vision/recordings");
    t(0, (i = await c.json()));
  }
  async function o() {
    (await Kt("replay_load", "/api/vision/replay/load", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session: r }),
    }),
      a());
  }
  async function a() {
    const u = await (
      await Kt("replay_frame", "/api/vision/replay/frame")
    ).json();
    u &&
      (Hs.set(u.frame),
      Vs.set(u.results),
      Ws.set(u.model),
      requestAnimationFrame(a));
  }
  ri(() => {
    s();
  });
  function l() {
    ((r = Lr(this)), t(1, r), t(0, i));
  }
  return [i, r, o, l];
}
class z_ extends ft {
  constructor(e) {
    (super(), ht(this, e, B_, O_, ot, {}));
  }
}
function G_(n, e) {
  return ks(wn)
    .filter((i) => i.type === "box")
    .map((i) => {
      const { x: r, y: s, w: o, h: a } = i.box,
        l = (r + o / 2) / n,
        c = (s + a / 2) / e,
        u = o / n,
        f = a / e;
      return `0 ${l} ${c} ${u} ${f}`;
    }).join(`
`);
}
function k_(n, e) {
  const t = ks(wn),
    i = document.createElement("canvas");
  ((i.width = n), (i.height = e));
  const r = i.getContext("2d");
  return (
    (r.fillStyle = "black"),
    r.fillRect(0, 0, n, e),
    (r.fillStyle = "white"),
    t
      .filter((s) => s.type === "mask")
      .forEach((s) => {
        (r.beginPath(), r.moveTo(s.points[0].x, s.points[0].y));
        for (let o of s.points) r.lineTo(o.x, o.y);
        (r.closePath(), r.fill());
      }),
    i.toDataURL("image/png")
  );
}
function H_(n, e) {
  return ks(wn)
    .filter((i) => i.type === "keypoints")
    .map(
      (i) =>
        `0 ${i.points
          .map((s) => [s.x / n, s.y / e, 1])
          .flat()
          .join(" ")}`,
    ).join(`
`);
}
function V_(n) {
  let e, t, i, r, s, o;
  return {
    c() {
      ((e = V("div")),
        (t = V("input")),
        (i = oe()),
        (r = V("button")),
        (r.textContent = "Export Frame"),
        q(t, "placeholder", "Dataset Name"));
    },
    m(a, l) {
      (Ye(a, e, l),
        R(e, t),
        Qe(t, n[0]),
        R(e, i),
        R(e, r),
        s || ((o = [je(t, "input", n[2]), je(r, "click", n[1])]), (s = !0)));
    },
    p(a, [l]) {
      l & 1 && t.value !== a[0] && Qe(t, a[0]);
    },
    i: ve,
    o: ve,
    d(a) {
      (a && Xe(e), (s = !1), kt(o));
    },
  };
}
function W_(n, e, t) {
  let i = "my_dataset";
  async function r() {
    const a = await (
        await Kt("dataset_read_frame", "/api/vision/frame")
      ).json(),
      l = G_(a.width, a.height),
      c = H_(a.width, a.height),
      u = k_(a.width, a.height);
    await Kt("dataset_export", "/api/dataset/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataset: i,
        frame: a.frame,
        yolo: l,
        pose: c,
        mask: u,
      }),
    });
  }
  function s() {
    ((i = this.value), t(0, i));
  }
  return [i, r, s];
}
class X_ extends ft {
  constructor(e) {
    (super(), ht(this, e, W_, V_, ot, {}));
  }
}
function ko(n, e, t) {
  const i = n.slice();
  return ((i[7] = e[t]), i);
}
function Ho(n) {
  let e, t, i;
  return {
    c() {
      ((e = V("div")),
        (t = Ve("Letzter Backend-Fehler: ")),
        (i = Ve(n[4])),
        q(e, "class", "error svelte-1781vg8"));
    },
    m(r, s) {
      (Ye(r, e, s), R(e, t), R(e, i));
    },
    p(r, s) {
      s & 16 && xt(i, r[4]);
    },
    d(r) {
      r && Xe(e);
    },
  };
}
function Vo(n) {
  let e;
  function t(s, o) {
    return s[5].length === 0 ? q_ : $_;
  }
  let i = t(n),
    r = i(n);
  return {
    c() {
      ((e = V("div")), r.c(), q(e, "class", "log svelte-1781vg8"));
    },
    m(s, o) {
      (Ye(s, e, o), r.m(e, null));
    },
    p(s, o) {
      i === (i = t(s)) && r ?
        r.p(s, o)
      : (r.d(1), (r = i(s)), r && (r.c(), r.m(e, null)));
    },
    d(s) {
      (s && Xe(e), r.d());
    },
  };
}
function $_(n) {
  let e,
    t = rn(n[5]),
    i = [];
  for (let r = 0; r < t.length; r += 1) i[r] = Xo(ko(n, t, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1) i[r].c();
      e = Yl();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(r, s);
      Ye(r, e, s);
    },
    p(r, s) {
      if (s & 32) {
        t = rn(r[5]);
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = ko(r, t, o);
          i[o] ?
            i[o].p(a, s)
          : ((i[o] = Xo(a)), i[o].c(), i[o].m(e.parentNode, e));
        }
        for (; o < i.length; o += 1) i[o].d(1);
        i.length = t.length;
      }
    },
    d(r) {
      (r && Xe(e), Pi(i, r));
    },
  };
}
function q_(n) {
  let e;
  return {
    c() {
      ((e = V("div")),
        (e.textContent = "Noch keine Aktivität."),
        q(e, "class", "item muted svelte-1781vg8"));
    },
    m(t, i) {
      Ye(t, e, i);
    },
    p: ve,
    d(t) {
      t && Xe(e);
    },
  };
}
function Wo(n) {
  let e,
    t,
    i = n[7].details + "",
    r;
  return {
    c() {
      ((e = V("span")), (t = Ve("— ")), (r = Ve(i)), q(e, "class", "details"));
    },
    m(s, o) {
      (Ye(s, e, o), R(e, t), R(e, r));
    },
    p(s, o) {
      o & 32 && i !== (i = s[7].details + "") && xt(r, i);
    },
    d(s) {
      s && Xe(e);
    },
  };
}
function Xo(n) {
  let e,
    t,
    i,
    r = n[7].ts + "",
    s,
    o,
    a,
    l,
    c = n[7].source + "",
    u,
    f,
    d,
    m = n[7].action + "",
    _,
    g,
    p,
    h,
    M = n[7].details && Wo(n);
  return {
    c() {
      ((e = V("div")),
        (t = V("span")),
        (i = Ve("[")),
        (s = Ve(r)),
        (o = Ve("]")),
        (a = oe()),
        (l = V("span")),
        (u = Ve(c)),
        (f = oe()),
        (d = V("span")),
        (_ = Ve(m)),
        (g = oe()),
        M && M.c(),
        (p = oe()),
        q(t, "class", "time svelte-1781vg8"),
        q(l, "class", "src svelte-1781vg8"),
        q(d, "class", "act"),
        q(e, "class", (h = "item " + n[7].status + " svelte-1781vg8")));
    },
    m(x, T) {
      (Ye(x, e, T),
        R(e, t),
        R(t, i),
        R(t, s),
        R(t, o),
        R(e, a),
        R(e, l),
        R(l, u),
        R(e, f),
        R(e, d),
        R(d, _),
        R(e, g),
        M && M.m(e, null),
        R(e, p));
    },
    p(x, T) {
      (T & 32 && r !== (r = x[7].ts + "") && xt(s, r),
        T & 32 && c !== (c = x[7].source + "") && xt(u, c),
        T & 32 && m !== (m = x[7].action + "") && xt(_, m),
        x[7].details ?
          M ? M.p(x, T)
          : ((M = Wo(x)), M.c(), M.m(e, p))
        : M && (M.d(1), (M = null)),
        T & 32 &&
          h !== (h = "item " + x[7].status + " svelte-1781vg8") &&
          q(e, "class", h));
    },
    d(x) {
      (x && Xe(e), M && M.d());
    },
  };
}
function Y_(n) {
  let e,
    t,
    i,
    r,
    s,
    o = n[0] ? "−" : "+",
    a,
    l,
    c,
    u,
    f,
    d = n[1] ? "ONLINE" : "OFFLINE",
    m,
    _,
    g,
    p,
    h,
    M = n[2] ? "ONLINE" : "OFFLINE",
    x,
    T,
    L,
    w,
    A,
    k = n[3].toUpperCase() + "",
    S,
    b,
    W,
    j,
    re,
    P,
    I = n[4] && Ho(n),
    B = n[0] && Vo(n);
  return {
    c() {
      ((e = V("div")),
        (t = V("div")),
        (i = V("h3")),
        (i.textContent = "System Status"),
        (r = oe()),
        (s = V("button")),
        (a = Ve(o)),
        (l = oe()),
        (c = V("div")),
        (u = V("span")),
        (f = Ve("Backend: ")),
        (m = Ve(d)),
        (g = oe()),
        (p = V("span")),
        (h = Ve("Frontend: ")),
        (x = Ve(M)),
        (L = oe()),
        (w = V("span")),
        (A = Ve("WS: ")),
        (S = Ve(k)),
        (W = oe()),
        I && I.c(),
        (j = oe()),
        B && B.c(),
        q(i, "class", "svelte-1781vg8"),
        q(s, "class", "svelte-1781vg8"),
        q(t, "class", "header svelte-1781vg8"),
        q(u, "class", (_ = "badge " + Ti(n[1]) + " svelte-1781vg8")),
        q(p, "class", (T = "badge " + Ti(n[2]) + " svelte-1781vg8")),
        q(
          w,
          "class",
          (b = "badge " + Ti(n[3] === "connected") + " svelte-1781vg8"),
        ),
        q(c, "class", "badges svelte-1781vg8"),
        q(e, "class", "panel svelte-1781vg8"));
    },
    m(X, $) {
      (Ye(X, e, $),
        R(e, t),
        R(t, i),
        R(t, r),
        R(t, s),
        R(s, a),
        R(e, l),
        R(e, c),
        R(c, u),
        R(u, f),
        R(u, m),
        R(c, g),
        R(c, p),
        R(p, h),
        R(p, x),
        R(c, L),
        R(c, w),
        R(w, A),
        R(w, S),
        R(e, W),
        I && I.m(e, null),
        R(e, j),
        B && B.m(e, null),
        re || ((P = je(s, "click", n[6])), (re = !0)));
    },
    p(X, [$]) {
      ($ & 1 && o !== (o = X[0] ? "−" : "+") && xt(a, o),
        $ & 2 && d !== (d = X[1] ? "ONLINE" : "OFFLINE") && xt(m, d),
        $ & 2 &&
          _ !== (_ = "badge " + Ti(X[1]) + " svelte-1781vg8") &&
          q(u, "class", _),
        $ & 4 && M !== (M = X[2] ? "ONLINE" : "OFFLINE") && xt(x, M),
        $ & 4 &&
          T !== (T = "badge " + Ti(X[2]) + " svelte-1781vg8") &&
          q(p, "class", T),
        $ & 8 && k !== (k = X[3].toUpperCase() + "") && xt(S, k),
        $ & 8 &&
          b !== (b = "badge " + Ti(X[3] === "connected") + " svelte-1781vg8") &&
          q(w, "class", b),
        X[4] ?
          I ? I.p(X, $)
          : ((I = Ho(X)), I.c(), I.m(e, j))
        : I && (I.d(1), (I = null)),
        X[0] ?
          B ? B.p(X, $)
          : ((B = Vo(X)), B.c(), B.m(e, null))
        : B && (B.d(1), (B = null)));
    },
    i: ve,
    o: ve,
    d(X) {
      (X && Xe(e), I && I.d(), B && B.d(), (re = !1), P());
    },
  };
}
function Ti(n) {
  return n ? "ok" : "bad";
}
function j_(n, e, t) {
  let i, r, s, o, a;
  (Gt(n, bn, (u) => t(1, (i = u))),
    Gt(n, Wi, (u) => t(2, (r = u))),
    Gt(n, Pr, (u) => t(3, (s = u))),
    Gt(n, Yi, (u) => t(4, (o = u))),
    Gt(n, nl, (u) => t(5, (a = u))));
  let l = !0;
  return [l, i, r, s, o, a, () => t(0, (l = !l))];
}
class K_ extends ft {
  constructor(e) {
    (super(), ht(this, e, j_, Y_, ot, {}));
  }
}
function $o(n, e, t) {
  const i = n.slice();
  return ((i[8] = e[t]), i);
}
function qo(n) {
  let e, t, i;
  function r() {
    return n[5](n[8]);
  }
  return {
    c() {
      ((e = V("button")),
        (e.textContent = `${n[8].label} `),
        q(e, "class", "svelte-qcl7nk"),
        Rt(e, "active", n[0] === n[8].id));
    },
    m(s, o) {
      (Ye(s, e, o), t || ((i = je(e, "click", r)), (t = !0)));
    },
    p(s, o) {
      ((n = s), o & 17 && Rt(e, "active", n[0] === n[8].id));
    },
    d(s) {
      (s && Xe(e), (t = !1), i());
    },
  };
}
function Z_(n) {
  let e, t;
  return (
    (e = new T_({})),
    {
      c() {
        dt(e.$$.fragment);
      },
      m(i, r) {
        (ct(e, i, r), (t = !0));
      },
      i(i) {
        t || (nt(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (at(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        ut(e, i);
      },
    }
  );
}
function J_(n) {
  let e, t;
  return (
    (e = new S_({})),
    {
      c() {
        dt(e.$$.fragment);
      },
      m(i, r) {
        (ct(e, i, r), (t = !0));
      },
      i(i) {
        t || (nt(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (at(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        ut(e, i);
      },
    }
  );
}
function Q_(n) {
  let e, t;
  return (
    (e = new Kc({})),
    {
      c() {
        dt(e.$$.fragment);
      },
      m(i, r) {
        (ct(e, i, r), (t = !0));
      },
      i(i) {
        t || (nt(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (at(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        ut(e, i);
      },
    }
  );
}
function eg(n) {
  let e, t;
  return (
    (e = new Ec({})),
    {
      c() {
        dt(e.$$.fragment);
      },
      m(i, r) {
        (ct(e, i, r), (t = !0));
      },
      i(i) {
        t || (nt(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (at(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        ut(e, i);
      },
    }
  );
}
function tg(n) {
  let e,
    t,
    i,
    r,
    s,
    o,
    a,
    l = n[1] ? "ONLINE" : "OFFLINE",
    c,
    u,
    f,
    d,
    m = n[2] ? "ONLINE" : "OFFLINE",
    _,
    g,
    p,
    h,
    M = n[3].toUpperCase() + "",
    x,
    T,
    L,
    w,
    A,
    k,
    S,
    b,
    W,
    j,
    re,
    P,
    I,
    B,
    X,
    $,
    K,
    Y,
    te,
    Q,
    U,
    Z,
    J,
    ue,
    pe,
    Ee,
    Re = rn(n[4]),
    ge = [];
  for (let ee = 0; ee < Re.length; ee += 1) ge[ee] = qo($o(n, Re, ee));
  ((S = new K_({})),
    (W = new L_({})),
    (re = new w_({})),
    (I = new U_({})),
    (X = new F_({})),
    (K = new z_({})),
    (te = new X_({})));
  const $e = [eg, Q_, J_, Z_],
    N = [];
  function Tt(ee, Se) {
    return (
      ee[0] === "dashboard" ? 0
      : ee[0] === "vision" ? 1
      : ee[0] === "raster" ? 2
      : ee[0] === "guide" ? 3
      : -1
    );
  }
  return (
    ~(ue = Tt(n)) && (pe = N[ue] = $e[ue](n)),
    {
      c() {
        ((e = V("main")),
          (t = V("header")),
          (i = V("h1")),
          (i.textContent = "maazi.de"),
          (r = oe()),
          (s = V("div")),
          (o = V("span")),
          (a = Ve("Backend: ")),
          (c = Ve(l)),
          (u = oe()),
          (f = V("span")),
          (d = Ve("Frontend: ")),
          (_ = Ve(m)),
          (g = oe()),
          (p = V("span")),
          (h = Ve("WS: ")),
          (x = Ve(M)),
          (T = oe()),
          (L = V("nav")));
        for (let ee = 0; ee < ge.length; ee += 1) ge[ee].c();
        ((w = oe()),
          (A = V("section")),
          (k = V("aside")),
          dt(S.$$.fragment),
          (b = oe()),
          dt(W.$$.fragment),
          (j = oe()),
          dt(re.$$.fragment),
          (P = oe()),
          dt(I.$$.fragment),
          (B = oe()),
          dt(X.$$.fragment),
          ($ = oe()),
          dt(K.$$.fragment),
          (Y = oe()),
          dt(te.$$.fragment),
          (Q = oe()),
          (U = V("div")),
          (Z = V("h1")),
          (Z.textContent = "roboto Control UI"),
          (J = oe()),
          pe && pe.c(),
          q(i, "class", "svelte-qcl7nk"),
          q(o, "class", "badge svelte-qcl7nk"),
          Rt(o, "ok", n[1]),
          Rt(o, "bad", !n[1]),
          q(f, "class", "badge svelte-qcl7nk"),
          Rt(f, "ok", n[2]),
          Rt(f, "bad", !n[2]),
          q(p, "class", "badge svelte-qcl7nk"),
          Rt(p, "ok", n[3] === "connected"),
          Rt(p, "bad", n[3] !== "connected"),
          q(s, "class", "statusbar svelte-qcl7nk"),
          q(L, "class", "svelte-qcl7nk"),
          q(t, "class", "topbar svelte-qcl7nk"),
          q(k, "class", "sidebar svelte-qcl7nk"),
          q(Z, "class", "svelte-qcl7nk"),
          q(U, "class", "workspace svelte-qcl7nk"),
          q(A, "class", "content svelte-qcl7nk"),
          q(e, "class", "app svelte-qcl7nk"));
      },
      m(ee, Se) {
        (Ye(ee, e, Se),
          R(e, t),
          R(t, i),
          R(t, r),
          R(t, s),
          R(s, o),
          R(o, a),
          R(o, c),
          R(s, u),
          R(s, f),
          R(f, d),
          R(f, _),
          R(s, g),
          R(s, p),
          R(p, h),
          R(p, x),
          R(t, T),
          R(t, L));
        for (let _e = 0; _e < ge.length; _e += 1) ge[_e] && ge[_e].m(L, null);
        (R(e, w),
          R(e, A),
          R(A, k),
          ct(S, k, null),
          R(k, b),
          ct(W, k, null),
          R(k, j),
          ct(re, k, null),
          R(k, P),
          ct(I, k, null),
          R(k, B),
          ct(X, k, null),
          R(k, $),
          ct(K, k, null),
          R(k, Y),
          ct(te, k, null),
          R(A, Q),
          R(A, U),
          R(U, Z),
          R(U, J),
          ~ue && N[ue].m(U, null),
          (Ee = !0));
      },
      p(ee, [Se]) {
        if (
          ((!Ee || Se & 2) &&
            l !== (l = ee[1] ? "ONLINE" : "OFFLINE") &&
            xt(c, l),
          (!Ee || Se & 2) && Rt(o, "ok", ee[1]),
          (!Ee || Se & 2) && Rt(o, "bad", !ee[1]),
          (!Ee || Se & 4) &&
            m !== (m = ee[2] ? "ONLINE" : "OFFLINE") &&
            xt(_, m),
          (!Ee || Se & 4) && Rt(f, "ok", ee[2]),
          (!Ee || Se & 4) && Rt(f, "bad", !ee[2]),
          (!Ee || Se & 8) && M !== (M = ee[3].toUpperCase() + "") && xt(x, M),
          (!Ee || Se & 8) && Rt(p, "ok", ee[3] === "connected"),
          (!Ee || Se & 8) && Rt(p, "bad", ee[3] !== "connected"),
          Se & 17)
        ) {
          Re = rn(ee[4]);
          let qe;
          for (qe = 0; qe < Re.length; qe += 1) {
            const Ue = $o(ee, Re, qe);
            ge[qe] ?
              ge[qe].p(Ue, Se)
            : ((ge[qe] = qo(Ue)), ge[qe].c(), ge[qe].m(L, null));
          }
          for (; qe < ge.length; qe += 1) ge[qe].d(1);
          ge.length = Re.length;
        }
        let _e = ue;
        ((ue = Tt(ee)),
          ue !== _e &&
            (pe &&
              (ec(),
              at(N[_e], 1, 1, () => {
                N[_e] = null;
              }),
              tc()),
            ~ue ?
              ((pe = N[ue]),
              pe || ((pe = N[ue] = $e[ue](ee)), pe.c()),
              nt(pe, 1),
              pe.m(U, null))
            : (pe = null)));
      },
      i(ee) {
        Ee ||
          (nt(S.$$.fragment, ee),
          nt(W.$$.fragment, ee),
          nt(re.$$.fragment, ee),
          nt(I.$$.fragment, ee),
          nt(X.$$.fragment, ee),
          nt(K.$$.fragment, ee),
          nt(te.$$.fragment, ee),
          nt(pe),
          (Ee = !0));
      },
      o(ee) {
        (at(S.$$.fragment, ee),
          at(W.$$.fragment, ee),
          at(re.$$.fragment, ee),
          at(I.$$.fragment, ee),
          at(X.$$.fragment, ee),
          at(K.$$.fragment, ee),
          at(te.$$.fragment, ee),
          at(pe),
          (Ee = !1));
      },
      d(ee) {
        (ee && Xe(e),
          Pi(ge, ee),
          ut(S),
          ut(W),
          ut(re),
          ut(I),
          ut(X),
          ut(K),
          ut(te),
          ~ue && N[ue].d());
      },
    }
  );
}
function ng(n, e, t) {
  let i, r, s;
  (Gt(n, bn, (f) => t(1, (i = f))),
    Gt(n, Wi, (f) => t(2, (r = f))),
    Gt(n, Pr, (f) => t(3, (s = f))));
  let o = "dashboard",
    a;
  const l = [
    { id: "dashboard", label: "Dashboard" },
    { id: "vision", label: "Vision" },
    { id: "raster", label: "Raster" },
    { id: "guide", label: "Guide" },
  ];
  async function c() {
    try {
      const f = await fetch("/api/vision/nodes/status", { cache: "no-store" });
      (bn.set(f.ok), Yi.set(f.ok ? null : `${f.status} ${f.statusText}`));
    } catch (f) {
      (bn.set(!1), Yi.set(String(f)));
    }
  }
  return (
    ri(() => {
      const f = () => {
          (Wi.set(!0), Yt("frontend", "network", "success", "Browser online"));
        },
        d = () => {
          (Wi.set(!1), Yt("frontend", "network", "error", "Browser offline"));
        };
      return (
        Wi.set(navigator.onLine),
        window.addEventListener("online", f),
        window.addEventListener("offline", d),
        c(),
        (a = setInterval(c, 1500)),
        () => {
          (window.removeEventListener("online", f),
            window.removeEventListener("offline", d));
        }
      );
    }),
    Jo(() => {
      clearInterval(a);
    }),
    [o, i, r, s, l, (f) => t(0, (o = f.id))]
  );
}
class ig extends ft {
  constructor(e) {
    (super(), ht(this, e, ng, tg, ot, {}));
  }
}
new ig({ target: document.getElementById("app") });
