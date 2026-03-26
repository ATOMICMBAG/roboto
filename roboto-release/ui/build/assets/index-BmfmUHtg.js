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
function pe() {}
function Yo(n) {
  return n();
}
function aa() {
  return Object.create(null);
}
function Ht(n) {
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
    return pe;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Hs(n) {
  let e;
  return (Ko(n, (t) => (e = t))(), e);
}
function Gt(n, e, t) {
  n.$$.on_destroy.push(Ko(e, t));
}
function R(n, e) {
  n.appendChild(e);
}
function qe(n, e, t) {
  n.insertBefore(e, t || null);
}
function Xe(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Pi(n, e) {
  for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
}
function W(n) {
  return document.createElement(n);
}
function Ve(n) {
  return document.createTextNode(n);
}
function ae() {
  return Ve(" ");
}
function Yl() {
  return Ve("");
}
function Ye(n, e, t, i) {
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
function Mt(n, e) {
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
    (n.update(), Ht(n.before_update));
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
  (Zn.r || Ht(Zn.c), (Zn = Zn.p));
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
      (n.$$.on_destroy ? n.$$.on_destroy.push(...s) : Ht(s),
        (n.$$.on_mount = []));
    }),
    r.forEach(ti));
}
function ut(n, e) {
  const t = n.$$;
  t.fragment !== null &&
    (Ql(t.after_update),
    Ht(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function nc(n, e) {
  (n.$$.dirty[0] === -1 && (bi.push(n), Zl(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << (e % 31)));
}
function ft(n, e, t, i, r, s, o = null, a = [-1]) {
  const l = qi;
  Xi(n);
  const c = (n.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: pe,
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
        t(n, e.props || {}, (h, d, ...m) => {
          const _ = m.length ? m[0] : d;
          return (
            c.ctx &&
              r(c.ctx[h], (c.ctx[h] = _)) &&
              (!c.skip_bound && c.bound[h] && c.bound[h](_), u && nc(n, h)),
            d
          );
        })
      : []),
    c.update(),
    (u = !0),
    Ht(c.before_update),
    (c.fragment = i ? i(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const h = jl(e.target);
      (c.fragment && c.fragment.l(h), h.forEach(Xe));
    } else c.fragment && c.fragment.c();
    (e.intro && nt(n.$$.fragment), ct(n, e.target, e.anchor), Qo());
  }
  Xi(l);
}
class ht {
  constructor() {
    qr(this, "$$");
    qr(this, "$$set");
  }
  $destroy() {
    (ut(this, 1), (this.$destroy = pe));
  }
  $on(e, t) {
    if (!jo(t)) return pe;
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
function St(n, e = pe) {
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
  function o(a, l = pe) {
    const c = [a, l];
    return (
      i.add(c),
      i.size === 1 && (t = e(r, s) || pe),
      a(n),
      () => {
        (i.delete(c), i.size === 0 && t && (t(), (t = null)));
      }
    );
  }
  return { set: r, update: s, subscribe: o };
}
const el = St(0),
  tl = St(0),
  bn = St(!1),
  Wi = St(!0),
  Yi = St(null),
  nl = St([]),
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
const rc = St(null),
  sc = St(null),
  ac = St(0),
  il = St([]),
  rl = St(null),
  sl = St([]),
  oc = St(null),
  ks = St(null),
  Vs = St(null),
  Ws = St(null);
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
    (ks.set(e.frame),
      Vs.set(e.results),
      Ws.set(e.model),
      el.set(e.fps ?? 0),
      tl.set(e.latency ?? 0));
  } catch {}
}
const Xs = St(null);
function uc(n) {
  n.type === "raster_done" && Xs.set(n.map);
}
const Pr = St("disconnected"),
  $s = St(0);
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
function fc(n) {
  let e, t, i, r, s, o, a, l, c, u, h, d, m, _, g, p, f;
  return {
    c() {
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "Motor Control"),
        (i = ae()),
        (r = W("label")),
        (s = Ve("Servo Angle: ")),
        (o = Ve(n[0])),
        (a = Ve("°")),
        (l = ae()),
        (c = W("input")),
        (u = ae()),
        (h = W("label")),
        (h.textContent = "Stepper Position (mm)"),
        (d = ae()),
        (m = W("input")),
        (_ = ae()),
        (g = W("button")),
        (g.textContent = "Move"),
        q(r, "for", "servo-angle"),
        q(c, "id", "servo-angle"),
        q(c, "type", "range"),
        q(c, "min", "0"),
        q(c, "max", "180"),
        q(h, "for", "stepper-pos"),
        q(m, "id", "stepper-pos"),
        q(m, "type", "number"),
        q(e, "class", "panel svelte-e10i4"));
    },
    m(M, x) {
      (qe(M, e, x),
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
        R(e, h),
        R(e, d),
        R(e, m),
        Qe(m, n[1]),
        R(e, _),
        R(e, g),
        p ||
          ((f = [
            Ye(c, "change", n[4]),
            Ye(c, "input", n[4]),
            Ye(c, "change", n[2]),
            Ye(m, "input", n[5]),
            Ye(g, "click", n[3]),
          ]),
          (p = !0)));
    },
    p(M, [x]) {
      (x & 1 && Mt(o, M[0]),
        x & 1 && Qe(c, M[0]),
        x & 2 && jt(m.value) !== M[1] && Qe(m, M[1]));
    },
    i: pe,
    o: pe,
    d(M) {
      (M && Xe(e), (p = !1), Ht(f));
    },
  };
}
function hc(n, e, t) {
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
class dc extends ht {
  constructor(e) {
    (super(), ft(this, e, hc, fc, ot, {}));
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
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "Sensor Live"),
        (i = ae()),
        (r = W("p")),
        (s = Ve("Current: ")),
        (a = Ve(o)),
        q(e, "class", "panel svelte-e10i4"));
    },
    m(l, c) {
      (qe(l, e, c), R(e, t), R(e, i), R(e, r), R(r, s), R(r, a));
    },
    p(l, [c]) {
      c & 1 && o !== (o = l[0].toFixed(2) + "") && Mt(a, o);
    },
    i: pe,
    o: pe,
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
class _c extends ht {
  constructor(e) {
    (super(), ft(this, e, mc, pc, ot, {}));
  }
}
function gc(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "Sensor Graph"),
        (i = ae()),
        (r = W("canvas")),
        q(r, "width", "300"),
        q(r, "height", "150"),
        q(e, "class", "panel svelte-e10i4"));
    },
    m(s, o) {
      (qe(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: pe,
    i: pe,
    o: pe,
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
          h = i.height - (l / 1023) * i.height;
        r.lineTo(u, h);
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
class xc extends ht {
  constructor(e) {
    (super(), ft(this, e, vc, gc, ot, {}));
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
        ((e = W("div")),
          dt(t.$$.fragment),
          (i = ae()),
          dt(r.$$.fragment),
          (s = ae()),
          dt(o.$$.fragment),
          q(e, "class", "grid svelte-1udxs04"));
      },
      m(l, c) {
        (qe(l, e, c),
          ct(t, e, null),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          (a = !0));
      },
      p: pe,
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
class Ec extends ht {
  constructor(e) {
    (super(), ft(this, e, Sc, Mc, ot, {}));
  }
}
function yc(n) {
  let e, t, i, r, s;
  return {
    c() {
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "Camera"),
        (i = ae()),
        (r = W("img")),
        oa(r.src, (s = n[0])) || q(r, "src", s),
        q(r, "alt", "camera stream"),
        q(r, "class", "svelte-jyl0g4"),
        q(e, "class", "panel svelte-jyl0g4"));
    },
    m(o, a) {
      (qe(o, e, a), R(e, t), R(e, i), R(e, r));
    },
    p(o, [a]) {
      a & 1 && !oa(r.src, (s = o[0])) && q(r, "src", s);
    },
    i: pe,
    o: pe,
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
class bc extends ht {
  constructor(e) {
    (super(), ft(this, e, Tc, yc, ot, { url: 0 }));
  }
}
function Ac(n) {
  let e;
  return {
    c() {
      ((e = W("canvas")),
        q(e, "width", "640"),
        q(e, "height", "480"),
        q(e, "class", "svelte-xfekda"));
    },
    m(t, i) {
      (qe(t, e, i), n[1](e));
    },
    p: pe,
    i: pe,
    o: pe,
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
      r.forEach(([u, h, d, m]) => {
        c.strokeRect(u, h, d - u, m - h);
      }),
      (c.fillStyle = "red"),
      o.forEach(([u, h]) => {
        (c.beginPath(), c.arc(u, h, 4, 0, Math.PI * 2), c.fill());
      }),
      s)
    ) {
      const u = c.createImageData(i.width, i.height);
      for (let h = 0; h < s.length; h++) {
        const d = s[h] * 255;
        ((u.data[h * 4 + 0] = d),
          (u.data[h * 4 + 1] = 0),
          (u.data[h * 4 + 2] = 0),
          (u.data[h * 4 + 3] = 100));
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
class Rc extends ht {
  constructor(e) {
    (super(), ft(this, e, wc, Ac, ot, {}));
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
    h;
  return {
    c() {
      ((e = W("div")),
        (t = W("div")),
        (i = Ve("FPS: ")),
        (s = Ve(r)),
        (o = ae()),
        (a = W("div")),
        (l = Ve("Latency: ")),
        (u = Ve(c)),
        (h = Ve(" ms")),
        q(e, "class", "perf svelte-1j8dabl"));
    },
    m(d, m) {
      (qe(d, e, m),
        R(e, t),
        R(t, i),
        R(t, s),
        R(e, o),
        R(e, a),
        R(a, l),
        R(a, u),
        R(a, h));
    },
    p(d, [m]) {
      (m & 1 && r !== (r = d[0].toFixed(1) + "") && Mt(s, r),
        m & 2 && c !== (c = d[1].toFixed(1) + "") && Mt(u, c));
    },
    i: pe,
    o: pe,
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
class Pc extends ht {
  constructor(e) {
    (super(), ft(this, e, Lc, Cc, ot, {}));
  }
}
const wn = St([]);
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
      ((e = W("canvas")),
        q(e, "width", "1280"),
        q(e, "height", "720"),
        q(e, "class", "svelte-1pdvpkz"));
    },
    m(r, s) {
      (qe(r, e, s),
        n[3](e),
        t || ((i = [Ye(e, "click", n[1]), Ye(e, "dblclick", n[2])]), (t = !0)));
    },
    p: pe,
    i: pe,
    o: pe,
    d(r) {
      (r && Xe(e), n[3](null), (t = !1), Ht(i));
    },
  };
}
function Oc(n, e, t) {
  let i,
    r,
    s = [];
  function o(u) {
    const h = i.getBoundingClientRect(),
      d = u.clientX - h.left,
      m = u.clientY - h.top;
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
class Bc extends ht {
  constructor(e) {
    (super(), ft(this, e, Oc, Fc, ot, {}));
  }
}
function zc(n) {
  let e, t, i;
  return {
    c() {
      ((e = W("canvas")),
        q(e, "width", "1280"),
        q(e, "height", "720"),
        q(e, "class", "svelte-uet3hy"));
    },
    m(r, s) {
      (qe(r, e, s),
        n[4](e),
        t ||
          ((i = [Ye(e, "mousedown", n[1]), Ye(e, "mouseup", n[2])]), (t = !0)));
    },
    p: pe,
    i: pe,
    o: pe,
    d(r) {
      (r && Xe(e), n[4](null), (t = !1), Ht(i));
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
      f = _.clientY - g.top,
      M = p - a,
      x = f - l;
    Dc(a, l, M, x);
  }
  function h() {
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
      n.$$.dirty & 9 && r && i && h();
    }),
    [r, c, u, i, m]
  );
}
class Hc extends ht {
  constructor(e) {
    (super(), ft(this, e, Gc, zc, ot, {}));
  }
}
function kc(n) {
  let e, t, i;
  return {
    c() {
      ((e = W("canvas")),
        q(e, "width", "1280"),
        q(e, "height", "720"),
        q(e, "class", "svelte-1pdvpkz"));
    },
    m(r, s) {
      (qe(r, e, s),
        n[6](e),
        t ||
          ((i = [
            Ye(e, "click", n[1]),
            Ye(e, "mousedown", n[2]),
            Ye(e, "mousemove", n[3]),
            Ye(e, "mouseup", n[4]),
          ]),
          (t = !0)));
    },
    p: pe,
    i: pe,
    o: pe,
    d(r) {
      (r && Xe(e), n[6](null), (t = !1), Ht(i));
    },
  };
}
const jr = 6;
function Vc(n, e, t) {
  let i;
  Gt(n, wn, (f) => t(5, (i = f)));
  let r,
    s,
    o = [],
    a = null;
  function l(f) {
    const M = r.getBoundingClientRect(),
      x = f.clientX - M.left,
      T = f.clientY - M.top;
    (o.push({ x, y: T, score: 1 }), o.length === 17 && (Ic(o), (o = [])), d());
  }
  function c(f) {
    const M = r.getBoundingClientRect(),
      x = f.clientX - M.left,
      T = f.clientY - M.top;
    i.forEach((P, w) => {
      P.type === "keypoints" &&
        P.points.forEach((A, H) => {
          const S = A.x - x,
            b = A.y - T;
          S * S + b * b < jr * jr && (a = { annIndex: w, pointIndex: H });
        });
    });
  }
  function u(f) {
    if (!a) return;
    const M = r.getBoundingClientRect(),
      x = f.clientX - M.left,
      T = f.clientY - M.top;
    (Nc(a.annIndex, a.pointIndex, x, T), d());
  }
  function h() {
    a = null;
  }
  function d() {
    ((s = r.getContext("2d")),
      s.clearRect(0, 0, r.width, r.height),
      i.forEach((f) => {
        f.type === "keypoints" && g(f.points);
      }),
      o.forEach((f) => {
        m(f.x, f.y);
      }));
  }
  function m(f, M) {
    ((s.fillStyle = "red"),
      s.beginPath(),
      s.arc(f, M, jr, 0, Math.PI * 2),
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
  function g(f) {
    ((s.strokeStyle = "lime"),
      (s.lineWidth = 2),
      _.forEach(([M, x]) => {
        const T = f[M],
          P = f[x];
        !T ||
          !P ||
          (s.beginPath(), s.moveTo(T.x, T.y), s.lineTo(P.x, P.y), s.stroke());
      }),
      f.forEach((M) => m(M.x, M.y)));
  }
  function p(f) {
    mn[f ? "unshift" : "push"](() => {
      ((r = f), t(0, r));
    });
  }
  return (
    (n.$$.update = () => {
      n.$$.dirty & 33 && r && i && d();
    }),
    [r, l, c, u, h, i, p]
  );
}
class Wc extends ht {
  constructor(e) {
    (super(), ft(this, e, Vc, kc, ot, {}));
  }
}
function Xc(n) {
  let e, t, i, r, s, o, a, l, c, u, h;
  return (
    (r = new Pc({})),
    (o = new Bc({})),
    (l = new Hc({})),
    (u = new Wc({})),
    {
      c() {
        ((e = W("div")),
          (t = W("canvas")),
          (i = ae()),
          dt(r.$$.fragment),
          (s = ae()),
          dt(o.$$.fragment),
          (a = ae()),
          dt(l.$$.fragment),
          (c = ae()),
          dt(u.$$.fragment),
          q(t, "class", "svelte-1cq807x"),
          q(e, "class", "vision-container svelte-1cq807x"));
      },
      m(d, m) {
        (qe(d, e, m),
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
          (h = !0));
      },
      p: pe,
      i(d) {
        h ||
          (nt(r.$$.fragment, d),
          nt(o.$$.fragment, d),
          nt(l.$$.fragment, d),
          nt(u.$$.fragment, d),
          (h = !0));
      },
      o(d) {
        (at(r.$$.fragment, d),
          at(o.$$.fragment, d),
          at(l.$$.fragment, d),
          at(u.$$.fragment, d),
          (h = !1));
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
    Gt(n, ks, (p) => t(4, (s = p))));
  let o, a, l, c, u;
  function h() {
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
    const { boxes: f, scores: M, classes: x } = p;
    ((u.strokeStyle = "lime"), (u.lineWidth = 2));
    for (let T = 0; T < f.length; T++) {
      const [P, w, A, H] = f[T];
      u.strokeRect(P, w, A, H);
    }
  }
  function m(p) {
    const f = p.length,
      M = p[0].length,
      x = u.createImageData(M, f);
    let T = 0;
    for (let P = 0; P < f; P++)
      for (let w = 0; w < M; w++) {
        const A = p[P][w] ? 255 : 0;
        ((x.data[T++] = 0),
          (x.data[T++] = 255),
          (x.data[T++] = 0),
          (x.data[T++] = A));
      }
    u.putImageData(x, 0, 0);
  }
  function _(p) {
    u.fillStyle = "red";
    for (const [f, M, x] of p)
      x > 0.3 && (u.beginPath(), u.arc(f, M, 4, 0, Math.PI * 2), u.fill());
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
        n.$$.dirty & 3 && c && o && h());
    }),
    [c, o, i, r, s, g]
  );
}
class qc extends ht {
  constructor(e) {
    (super(), ft(this, e, $c, Xc, ot, {}));
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
        ((e = W("div")),
          dt(t.$$.fragment),
          (i = ae()),
          dt(r.$$.fragment),
          (s = ae()),
          dt(o.$$.fragment),
          q(e, "class", "vision-container svelte-1g74rqe"));
      },
      m(l, c) {
        (qe(l, e, c),
          ct(t, e, null),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          (a = !0));
      },
      p: pe,
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
class Kc extends ht {
  constructor(e) {
    (super(), ft(this, e, jc, Yc, ot, {}));
  }
}
function Zc(n) {
  let e, t, i, r, s, o, a, l, c, u, h, d, m, _, g, p, f, M, x, T, P, w;
  return {
    c() {
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "Raster Scan"),
        (i = ae()),
        (r = W("label")),
        (r.textContent = "X Range"),
        (s = ae()),
        (o = W("input")),
        (a = ae()),
        (l = W("input")),
        (c = ae()),
        (u = W("label")),
        (u.textContent = "Y Range"),
        (h = ae()),
        (d = W("input")),
        (m = ae()),
        (_ = W("input")),
        (g = ae()),
        (p = W("label")),
        (p.textContent = "Step"),
        (f = ae()),
        (M = W("input")),
        (x = ae()),
        (T = W("button")),
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
    m(A, H) {
      (qe(A, e, H),
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
        R(e, h),
        R(e, d),
        Qe(d, n[2]),
        R(e, m),
        R(e, _),
        Qe(_, n[3]),
        R(e, g),
        R(e, p),
        R(e, f),
        R(e, M),
        Qe(M, n[4]),
        R(e, x),
        R(e, T),
        P ||
          ((w = [
            Ye(o, "input", n[6]),
            Ye(l, "input", n[7]),
            Ye(d, "input", n[8]),
            Ye(_, "input", n[9]),
            Ye(M, "input", n[10]),
            Ye(T, "click", n[5]),
          ]),
          (P = !0)));
    },
    p(A, [H]) {
      (H & 1 && jt(o.value) !== A[0] && Qe(o, A[0]),
        H & 2 && jt(l.value) !== A[1] && Qe(l, A[1]),
        H & 4 && jt(d.value) !== A[2] && Qe(d, A[2]),
        H & 8 && jt(_.value) !== A[3] && Qe(_, A[3]),
        H & 16 && jt(M.value) !== A[4] && Qe(M, A[4]));
    },
    i: pe,
    o: pe,
    d(A) {
      (A && Xe(e), (P = !1), Ht(w));
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
  function h() {
    ((s = jt(this.value)), t(2, s));
  }
  function d() {
    ((o = jt(this.value)), t(3, o));
  }
  function m() {
    ((a = jt(this.value)), t(4, a));
  }
  return [i, r, s, o, a, l, c, u, h, d, m];
}
class Qc extends ht {
  constructor(e) {
    (super(), ft(this, e, Jc, Zc, ot, {}));
  }
}
function eu(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "Heatmap"),
        (i = ae()),
        (r = W("canvas")),
        q(r, "class", "svelte-86n1hn"),
        q(e, "class", "panel svelte-86n1hn"));
    },
    m(s, o) {
      (qe(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: pe,
    i: pe,
    o: pe,
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
    function h(d) {
      const m = Math.min(255, d * 4),
        _ = 0,
        g = 255 - m;
      return [m, _, g];
    }
    for (let d = 0; d < l; d++)
      for (let m = 0; m < c; m++) {
        const _ = r[d][m],
          [g, p, f] = h(_),
          M = (d * c + m) * 4;
        ((u.data[M] = g),
          (u.data[M + 1] = p),
          (u.data[M + 2] = f),
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
class nu extends ht {
  constructor(e) {
    (super(), ft(this, e, tu, eu, ot, {}));
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
  fa = 2,
  ha = 3,
  da = 4,
  au = 5,
  jn = 100,
  ou = 101,
  lu = 102,
  pa = 103,
  ma = 104,
  cu = 200,
  uu = 201,
  fu = 202,
  hu = 203,
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
  fl = 1018,
  Jn = 1020,
  Gu = 1021,
  un = 1023,
  Hu = 1024,
  ku = 1025,
  Qn = 1026,
  Ii = 1027,
  Vu = 1028,
  hl = 1029,
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
  Ha = 36286,
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
  ka = 519,
  ju = 512,
  Ku = 513,
  Zu = 514,
  vl = 515,
  Ju = 516,
  Qu = 517,
  ef = 518,
  tf = 519,
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
function nf(n, e) {
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
function kt(n, e) {
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
class Ke {
  constructor(e = 0, t = 0) {
    ((Ke.prototype.isVector2 = !0), (this.x = e), (this.y = t));
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
class ke {
  constructor(e, t, i, r, s, o, a, l, c) {
    ((ke.prototype.isMatrix3 = !0),
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
      h = i[7],
      d = i[2],
      m = i[5],
      _ = i[8],
      g = r[0],
      p = r[3],
      f = r[6],
      M = r[1],
      x = r[4],
      T = r[7],
      P = r[2],
      w = r[5],
      A = r[8];
    return (
      (s[0] = o * g + a * M + l * P),
      (s[3] = o * p + a * x + l * w),
      (s[6] = o * f + a * T + l * A),
      (s[1] = c * g + u * M + h * P),
      (s[4] = c * p + u * x + h * w),
      (s[7] = c * f + u * T + h * A),
      (s[2] = d * g + m * M + _ * P),
      (s[5] = d * p + m * x + _ * w),
      (s[8] = d * f + m * T + _ * A),
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
      h = u * o - a * c,
      d = a * l - u * s,
      m = c * s - o * l,
      _ = t * h + i * d + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return (
      (e[0] = h * g),
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
const rs = new ke();
function xl(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return !0;
  return !1;
}
function Or(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function rf() {
  const n = Or("canvas");
  return ((n.style.display = "block"), n);
}
const $a = {};
function $i(n) {
  n in $a || (($a[n] = !0), console.warn(n));
}
const qa = new ke().set(
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
  Ya = new ke().set(
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
  sf = new Set([An, zr]),
  tt = {
    enabled: !0,
    _workingColorSpace: An,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(n) {
      if (!sf.has(n))
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
let af = 0;
class Sl {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: af++ }),
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
let of = 0;
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
      Object.defineProperty(this, "id", { value: of++ }),
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
      (this.offset = new Ke(0, 0)),
      (this.repeat = new Ke(1, 1)),
      (this.center = new Ke(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new ke()),
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
      h = l[8],
      d = l[1],
      m = l[5],
      _ = l[9],
      g = l[2],
      p = l[6],
      f = l[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(h - g) < 0.01 &&
      Math.abs(_ - p) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(h + g) < 0.1 &&
        Math.abs(_ + p) < 0.1 &&
        Math.abs(c + m + f - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const x = (c + 1) / 2,
        T = (m + 1) / 2,
        P = (f + 1) / 2,
        w = (u + d) / 4,
        A = (h + g) / 4,
        H = (_ + p) / 4;
      return (
        x > T && x > P ?
          x < 0.01 ?
            ((i = 0), (r = 0.707106781), (s = 0.707106781))
          : ((i = Math.sqrt(x)), (r = w / i), (s = A / i))
        : T > P ?
          T < 0.01 ?
            ((i = 0.707106781), (r = 0), (s = 0.707106781))
          : ((r = Math.sqrt(T)), (i = w / r), (s = H / r))
        : P < 0.01 ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
        : ((s = Math.sqrt(P)), (i = A / s), (r = H / s)),
        this.set(i, r, s, t),
        this
      );
    }
    let M = Math.sqrt(
      (p - _) * (p - _) + (h - g) * (h - g) + (d - u) * (d - u),
    );
    return (
      Math.abs(M) < 0.001 && (M = 1),
      (this.x = (p - _) / M),
      (this.y = (h - g) / M),
      (this.z = (d - u) / M),
      (this.w = Math.acos((c + m + f - 1) / 2)),
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
class lf extends Fi {
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
class ni extends lf {
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
class cf extends Zt {
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
      h = i[r + 3];
    const d = s[o + 0],
      m = s[o + 1],
      _ = s[o + 2],
      g = s[o + 3];
    if (a === 0) {
      ((e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h));
      return;
    }
    if (a === 1) {
      ((e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = _), (e[t + 3] = g));
      return;
    }
    if (h !== g || l !== d || c !== m || u !== _) {
      let p = 1 - a;
      const f = l * d + c * m + u * _ + h * g,
        M = f >= 0 ? 1 : -1,
        x = 1 - f * f;
      if (x > Number.EPSILON) {
        const P = Math.sqrt(x),
          w = Math.atan2(P, f * M);
        ((p = Math.sin(p * w) / P), (a = Math.sin(a * w) / P));
      }
      const T = a * M;
      if (
        ((l = l * p + d * T),
        (c = c * p + m * T),
        (u = u * p + _ * T),
        (h = h * p + g * T),
        p === 1 - a)
      ) {
        const P = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        ((l *= P), (c *= P), (u *= P), (h *= P));
      }
    }
    ((e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h));
  }
  static multiplyQuaternionsFlat(e, t, i, r, s, o) {
    const a = i[r],
      l = i[r + 1],
      c = i[r + 2],
      u = i[r + 3],
      h = s[o],
      d = s[o + 1],
      m = s[o + 2],
      _ = s[o + 3];
    return (
      (e[t] = a * _ + u * h + l * m - c * d),
      (e[t + 1] = l * _ + u * d + c * h - a * m),
      (e[t + 2] = c * _ + u * m + a * d - l * h),
      (e[t + 3] = u * _ - a * h - l * d - c * m),
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
      h = a(s / 2),
      d = l(i / 2),
      m = l(r / 2),
      _ = l(s / 2);
    switch (o) {
      case "XYZ":
        ((this._x = d * u * h + c * m * _),
          (this._y = c * m * h - d * u * _),
          (this._z = c * u * _ + d * m * h),
          (this._w = c * u * h - d * m * _));
        break;
      case "YXZ":
        ((this._x = d * u * h + c * m * _),
          (this._y = c * m * h - d * u * _),
          (this._z = c * u * _ - d * m * h),
          (this._w = c * u * h + d * m * _));
        break;
      case "ZXY":
        ((this._x = d * u * h - c * m * _),
          (this._y = c * m * h + d * u * _),
          (this._z = c * u * _ + d * m * h),
          (this._w = c * u * h - d * m * _));
        break;
      case "ZYX":
        ((this._x = d * u * h - c * m * _),
          (this._y = c * m * h + d * u * _),
          (this._z = c * u * _ - d * m * h),
          (this._w = c * u * h + d * m * _));
        break;
      case "YZX":
        ((this._x = d * u * h + c * m * _),
          (this._y = c * m * h + d * u * _),
          (this._z = c * u * _ - d * m * h),
          (this._w = c * u * h - d * m * _));
        break;
      case "XZY":
        ((this._x = d * u * h - c * m * _),
          (this._y = c * m * h - d * u * _),
          (this._z = c * u * _ + d * m * h),
          (this._w = c * u * h + d * m * _));
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
      h = t[10],
      d = i + a + h;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      ((this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - r) * m));
    } else if (i > a && i > h) {
      const m = 2 * Math.sqrt(1 + i - a - h);
      ((this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + o) / m),
        (this._z = (s + c) / m));
    } else if (a > h) {
      const m = 2 * Math.sqrt(1 + a - i - h);
      ((this._w = (s - c) / m),
        (this._x = (r + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m));
    } else {
      const m = 2 * Math.sqrt(1 + h - i - a);
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
      h = Math.sin((1 - t) * u) / c,
      d = Math.sin(t * u) / c;
    return (
      (this._w = o * h + this._w * d),
      (this._x = i * h + this._x * d),
      (this._y = r * h + this._y * d),
      (this._z = s * h + this._z * d),
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
      h = 2 * (s * i - o * t);
    return (
      (this.x = t + l * c + o * h - a * u),
      (this.y = i + l * u + a * c - s * h),
      (this.z = r + l * h + s * u - o * c),
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
      fi.subVectors(e.b, Gi),
      hi.subVectors(e.c, Gi),
      Rn.subVectors(fi, ui),
      Cn.subVectors(hi, fi),
      Vn.subVectors(ui, hi));
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
        !ls(t, ui, fi, hi, or) ||
          ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ls(t, ui, fi, hi, or))
      ) ?
        !1
      : (lr.crossVectors(Rn, Cn),
        (t = [lr.x, lr.y, lr.z]),
        ls(t, ui, fi, hi, or));
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
  fi = new G(),
  hi = new G(),
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
const uf = new Qi(),
  Hi = new G(),
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
    t !== void 0 ? i.copy(t) : uf.setFromPoints(e).getCenter(i);
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
    Hi.subVectors(e, this.center);
    const t = Hi.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t),
        r = (i - this.radius) * 0.5;
      (this.center.addScaledVector(Hi, r / i), (this.radius += r));
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
          this.expandByPoint(Hi.copy(e.center).add(cs)),
          this.expandByPoint(Hi.copy(e.center).sub(cs))),
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
  fs = new G(),
  ur = new G(),
  hs = new G();
class ff {
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
    let h, d, m, _;
    if (u > 0)
      if (((h = o * l - a), (d = o * a - l), (_ = s * u), h >= 0))
        if (d >= -_)
          if (d <= _) {
            const g = 1 / u;
            ((h *= g),
              (d *= g),
              (m = h * (h + o * d + 2 * a) + d * (o * h + d + 2 * l) + c));
          } else
            ((d = s),
              (h = Math.max(0, -(o * d + a))),
              (m = -h * h + d * (d + 2 * l) + c));
        else
          ((d = -s),
            (h = Math.max(0, -(o * d + a))),
            (m = -h * h + d * (d + 2 * l) + c));
      else
        d <= -_ ?
          ((h = Math.max(0, -(-o * s + a))),
          (d = h > 0 ? -s : Math.min(Math.max(-s, -l), s)),
          (m = -h * h + d * (d + 2 * l) + c))
        : d <= _ ?
          ((h = 0),
          (d = Math.min(Math.max(-s, -l), s)),
          (m = d * (d + 2 * l) + c))
        : ((h = Math.max(0, -(o * s + a))),
          (d = h > 0 ? s : Math.min(Math.max(-s, -l), s)),
          (m = -h * h + d * (d + 2 * l) + c));
    else
      ((d = o > 0 ? -s : s),
        (h = Math.max(0, -(o * d + a))),
        (m = -h * h + d * (d + 2 * l) + c));
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, h),
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
      h = 1 / this.direction.z,
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
        h >= 0 ?
          ((a = (e.min.z - d.z) * h), (l = (e.max.z - d.z) * h))
        : ((a = (e.max.z - d.z) * h), (l = (e.min.z - d.z) * h)),
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
    (fs.subVectors(t, e), ur.subVectors(i, e), hs.crossVectors(fs, ur));
    let o = this.direction.dot(hs),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) ((a = -1), (o = -o));
    else return null;
    Ln.subVectors(this.origin, e);
    const l = a * this.direction.dot(ur.crossVectors(Ln, ur));
    if (l < 0) return null;
    const c = a * this.direction.dot(fs.cross(Ln));
    if (c < 0 || l + c > o) return null;
    const u = -a * Ln.dot(hs);
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
class Et {
  constructor(e, t, i, r, s, o, a, l, c, u, h, d, m, _, g, p) {
    ((Et.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, r, s, o, a, l, c, u, h, d, m, _, g, p));
  }
  set(e, t, i, r, s, o, a, l, c, u, h, d, m, _, g, p) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[4] = t),
      (f[8] = i),
      (f[12] = r),
      (f[1] = s),
      (f[5] = o),
      (f[9] = a),
      (f[13] = l),
      (f[2] = c),
      (f[6] = u),
      (f[10] = h),
      (f[14] = d),
      (f[3] = m),
      (f[7] = _),
      (f[11] = g),
      (f[15] = p),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Et().fromArray(this.elements);
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
      h = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u,
        m = o * h,
        _ = a * u,
        g = a * h;
      ((t[0] = l * u),
        (t[4] = -l * h),
        (t[8] = c),
        (t[1] = m + _ * c),
        (t[5] = d - g * c),
        (t[9] = -a * l),
        (t[2] = g - d * c),
        (t[6] = _ + m * c),
        (t[10] = o * l));
    } else if (e.order === "YXZ") {
      const d = l * u,
        m = l * h,
        _ = c * u,
        g = c * h;
      ((t[0] = d + g * a),
        (t[4] = _ * a - m),
        (t[8] = o * c),
        (t[1] = o * h),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - _),
        (t[6] = g + d * a),
        (t[10] = o * l));
    } else if (e.order === "ZXY") {
      const d = l * u,
        m = l * h,
        _ = c * u,
        g = c * h;
      ((t[0] = d - g * a),
        (t[4] = -o * h),
        (t[8] = _ + m * a),
        (t[1] = m + _ * a),
        (t[5] = o * u),
        (t[9] = g - d * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l));
    } else if (e.order === "ZYX") {
      const d = o * u,
        m = o * h,
        _ = a * u,
        g = a * h;
      ((t[0] = l * u),
        (t[4] = _ * c - m),
        (t[8] = d * c + g),
        (t[1] = l * h),
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
        (t[4] = g - d * h),
        (t[8] = _ * h + m),
        (t[1] = h),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * h + _),
        (t[10] = d - g * h));
    } else if (e.order === "XZY") {
      const d = o * l,
        m = o * c,
        _ = a * l,
        g = a * c;
      ((t[0] = l * u),
        (t[4] = -h),
        (t[8] = c * u),
        (t[1] = d * h + g),
        (t[5] = o * u),
        (t[9] = m * h - _),
        (t[2] = _ * h - m),
        (t[6] = a * u),
        (t[10] = g * h + d));
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
    return this.compose(hf, e, df);
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
      fr.crossVectors($t, Pn),
      (r[0] = Pn.x),
      (r[4] = fr.x),
      (r[8] = $t.x),
      (r[1] = Pn.y),
      (r[5] = fr.y),
      (r[9] = $t.y),
      (r[2] = Pn.z),
      (r[6] = fr.z),
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
      h = i[5],
      d = i[9],
      m = i[13],
      _ = i[2],
      g = i[6],
      p = i[10],
      f = i[14],
      M = i[3],
      x = i[7],
      T = i[11],
      P = i[15],
      w = r[0],
      A = r[4],
      H = r[8],
      S = r[12],
      b = r[1],
      V = r[5],
      Z = r[9],
      ie = r[13],
      D = r[2],
      N = r[6],
      B = r[10],
      X = r[14],
      $ = r[3],
      J = r[7],
      j = r[11],
      ee = r[15];
    return (
      (s[0] = o * w + a * b + l * D + c * $),
      (s[4] = o * A + a * V + l * N + c * J),
      (s[8] = o * H + a * Z + l * B + c * j),
      (s[12] = o * S + a * ie + l * X + c * ee),
      (s[1] = u * w + h * b + d * D + m * $),
      (s[5] = u * A + h * V + d * N + m * J),
      (s[9] = u * H + h * Z + d * B + m * j),
      (s[13] = u * S + h * ie + d * X + m * ee),
      (s[2] = _ * w + g * b + p * D + f * $),
      (s[6] = _ * A + g * V + p * N + f * J),
      (s[10] = _ * H + g * Z + p * B + f * j),
      (s[14] = _ * S + g * ie + p * X + f * ee),
      (s[3] = M * w + x * b + T * D + P * $),
      (s[7] = M * A + x * V + T * N + P * J),
      (s[11] = M * H + x * Z + T * B + P * j),
      (s[15] = M * S + x * ie + T * X + P * ee),
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
      h = e[6],
      d = e[10],
      m = e[14],
      _ = e[3],
      g = e[7],
      p = e[11],
      f = e[15];
    return (
      _ *
        (+s * l * h -
          r * c * h -
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
        (+t * c * h -
          t * a * m -
          s * o * h +
          i * o * m +
          s * a * u -
          i * c * u) +
      f *
        (-r * a * u - t * l * h + t * a * d + r * o * h - i * o * d + i * l * u)
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
      h = e[9],
      d = e[10],
      m = e[11],
      _ = e[12],
      g = e[13],
      p = e[14],
      f = e[15],
      M = h * p * c - g * d * c + g * l * m - a * p * m - h * l * f + a * d * f,
      x = _ * d * c - u * p * c - _ * l * m + o * p * m + u * l * f - o * d * f,
      T = u * g * c - _ * h * c + _ * a * m - o * g * m - u * a * f + o * h * f,
      P = _ * h * l - u * g * l - _ * a * d + o * g * d + u * a * p - o * h * p,
      w = t * M + i * x + r * T + s * P;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / w;
    return (
      (e[0] = M * A),
      (e[1] =
        (g * d * s -
          h * p * s -
          g * r * m +
          i * p * m +
          h * r * f -
          i * d * f) *
        A),
      (e[2] =
        (a * p * s -
          g * l * s +
          g * r * c -
          i * p * c -
          a * r * f +
          i * l * f) *
        A),
      (e[3] =
        (h * l * s -
          a * d * s -
          h * r * c +
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
          u * r * f +
          t * d * f) *
        A),
      (e[6] =
        (_ * l * s -
          o * p * s -
          _ * r * c +
          t * p * c +
          o * r * f -
          t * l * f) *
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
        (_ * h * s -
          u * g * s -
          _ * i * m +
          t * g * m +
          u * i * f -
          t * h * f) *
        A),
      (e[10] =
        (o * g * s -
          _ * a * s +
          _ * i * c -
          t * g * c -
          o * i * f +
          t * a * f) *
        A),
      (e[11] =
        (u * a * s -
          o * h * s -
          u * i * c +
          t * h * c +
          o * i * m -
          t * a * m) *
        A),
      (e[12] = P * A),
      (e[13] =
        (u * g * r -
          _ * h * r +
          _ * i * d -
          t * g * d -
          u * i * p +
          t * h * p) *
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
        (o * h * r -
          u * a * r +
          u * i * l -
          t * h * l -
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
      h = a + a,
      d = s * c,
      m = s * u,
      _ = s * h,
      g = o * u,
      p = o * h,
      f = a * h,
      M = l * c,
      x = l * u,
      T = l * h,
      P = i.x,
      w = i.y,
      A = i.z;
    return (
      (r[0] = (1 - (g + f)) * P),
      (r[1] = (m + T) * P),
      (r[2] = (_ - x) * P),
      (r[3] = 0),
      (r[4] = (m - T) * w),
      (r[5] = (1 - (d + f)) * w),
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
      h = 1 / a;
    return (
      (an.elements[0] *= c),
      (an.elements[1] *= c),
      (an.elements[2] *= c),
      (an.elements[4] *= u),
      (an.elements[5] *= u),
      (an.elements[6] *= u),
      (an.elements[8] *= h),
      (an.elements[9] *= h),
      (an.elements[10] *= h),
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
      h = (t + e) / (t - e),
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
      (l[8] = h),
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
      h = 1 / (o - s),
      d = (t + e) * c,
      m = (i + r) * u;
    let _, g;
    if (a === yn) ((_ = (o + s) * h), (g = -2 * h));
    else if (a === Fr) ((_ = s * h), (g = -1 * h));
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
  an = new Et(),
  hf = new G(0, 0, 0),
  df = new G(1, 1, 1),
  Pn = new G(),
  fr = new G(),
  $t = new G(),
  Ka = new Et(),
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
      h = r[2],
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
          : ((this._y = Math.atan2(-h, s)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Vt(d, -1, 1))),
          Math.abs(d) < 0.9999999 ?
            ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-o, c)))
          : ((this._y = 0), (this._z = Math.atan2(l, s))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Vt(h, -1, 1))),
          Math.abs(h) < 0.9999999 ?
            ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(l, s)))
          : ((this._x = 0), (this._z = Math.atan2(-o, c))));
        break;
      case "YZX":
        ((this._z = Math.asin(Vt(l, -1, 1))),
          Math.abs(l) < 0.9999999 ?
            ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, s)))
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
let pf = 0;
const Ja = new G(),
  pi = new Ji(),
  xn = new Et(),
  hr = new G(),
  ki = new G(),
  mf = new G(),
  _f = new Ji(),
  Qa = new G(1, 0, 0),
  eo = new G(0, 1, 0),
  to = new G(0, 0, 1),
  gf = { type: "added" },
  vf = { type: "removed" };
class It extends Fi {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: pf++ }),
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
        modelViewMatrix: { value: new Et() },
        normalMatrix: { value: new ke() },
      }),
      (this.matrix = new Et()),
      (this.matrixWorld = new Et()),
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
    e.isVector3 ? hr.copy(e) : hr.set(e, t, i);
    const r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      ki.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ?
        xn.lookAt(ki, hr, this.up)
      : xn.lookAt(hr, ki, this.up),
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
          e.dispatchEvent(gf))
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
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(vf)),
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
      this.matrixWorld.decompose(ki, e, mf),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(ki, _f, e),
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
            const h = l[c];
            s(e.shapes, h);
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
        h = o(e.shapes),
        d = o(e.skeletons),
        m = o(e.animations),
        _ = o(e.nodes);
      (a.length > 0 && (i.geometries = a),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        u.length > 0 && (i.images = u),
        h.length > 0 && (i.shapes = h),
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
      h = o * c - a * a;
    if (h === 0) return (s.set(0, 0, 0), null);
    const d = 1 / h,
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
      h = _i.dot(ms);
    if (u >= 0 && h <= u) return t.copy(r);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return ((o = l / (l - u)), t.copy(i).addScaledVector(mi, o));
    _s.subVectors(e, s);
    const m = mi.dot(_s),
      _ = _i.dot(_s);
    if (_ >= 0 && m <= _) return t.copy(s);
    const g = m * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return ((a = c / (c - _)), t.copy(i).addScaledVector(_i, a));
    const p = u * _ - m * h;
    if (p <= 0 && h - u >= 0 && m - _ >= 0)
      return (
        no.subVectors(s, r),
        (a = (h - u) / (h - u + (m - _))),
        t.copy(r).addScaledVector(no, a)
      );
    const f = 1 / (p + g + d);
    return (
      (o = g * f),
      (a = d * f),
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
class je {
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
    if (((e = nf(e, 1)), (t = Vt(t, 0, 1)), (i = Vt(i, 0, 1)), t === 0))
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
      const h = o - a;
      switch (((c = u <= 0.5 ? h / (o + a) : h / (2 - o - a)), o)) {
        case i:
          l = (r - s) / h + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / h + 2;
          break;
        case s:
          l = (i - r) / h + 4;
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
const Ut = new je();
je.NAMES = Tl;
let xf = 0;
class er extends Fi {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: xf++ }),
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
      (this.blendColor = new je(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Dr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = ka),
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
      this.stencilFunc !== ka && (i.stencilFunc = this.stencilFunc),
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
      (this.color = new je(16777215)),
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
const xt = new G(),
  mr = new Ke();
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
        (xt.fromBufferAttribute(this, t),
          xt.applyMatrix3(e),
          this.setXYZ(t, xt.x, xt.y, xt.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      (xt.fromBufferAttribute(this, t),
        xt.applyMatrix4(e),
        this.setXYZ(t, xt.x, xt.y, xt.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      (xt.fromBufferAttribute(this, t),
        xt.applyNormalMatrix(e),
        this.setXYZ(t, xt.x, xt.y, xt.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      (xt.fromBufferAttribute(this, t),
        xt.transformDirection(e),
        this.setXYZ(t, xt.x, xt.y, xt.z));
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
      this.normalized && (i = kt(i, this.array)),
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
      this.normalized && (t = kt(t, this.array)),
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
      this.normalized && (t = kt(t, this.array)),
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
      this.normalized && (t = kt(t, this.array)),
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
      this.normalized && (t = kt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = kt(t, this.array)), (i = kt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = kt(t, this.array)),
        (i = kt(i, this.array)),
        (r = kt(r, this.array))),
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
        ((t = kt(t, this.array)),
        (i = kt(i, this.array)),
        (r = kt(r, this.array)),
        (s = kt(s, this.array))),
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
let Mf = 0;
const Qt = new Et(),
  vs = new It(),
  gi = new G(),
  qt = new Qi(),
  Vi = new Qi(),
  wt = new G();
class si extends Fi {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Mf++ }),
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
      const s = new ke().getNormalMatrix(e);
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
    const h = new G(),
      d = new G(),
      m = new G(),
      _ = new Ke(),
      g = new Ke(),
      p = new Ke(),
      f = new G(),
      M = new G();
    function x(b, V, Z) {
      (h.fromArray(r, b * 3),
        d.fromArray(r, V * 3),
        m.fromArray(r, Z * 3),
        _.fromArray(o, b * 2),
        g.fromArray(o, V * 2),
        p.fromArray(o, Z * 2),
        d.sub(h),
        m.sub(h),
        g.sub(_),
        p.sub(_));
      const ie = 1 / (g.x * p.y - p.x * g.y);
      isFinite(ie) &&
        (f
          .copy(d)
          .multiplyScalar(p.y)
          .addScaledVector(m, -g.y)
          .multiplyScalar(ie),
        M.copy(m)
          .multiplyScalar(g.x)
          .addScaledVector(d, -p.x)
          .multiplyScalar(ie),
        c[b].add(f),
        c[V].add(f),
        c[Z].add(f),
        u[b].add(M),
        u[V].add(M),
        u[Z].add(M));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: i.length }]);
    for (let b = 0, V = T.length; b < V; ++b) {
      const Z = T[b],
        ie = Z.start,
        D = Z.count;
      for (let N = ie, B = ie + D; N < B; N += 3)
        x(i[N + 0], i[N + 1], i[N + 2]);
    }
    const P = new G(),
      w = new G(),
      A = new G(),
      H = new G();
    function S(b) {
      (A.fromArray(s, b * 3), H.copy(A));
      const V = c[b];
      (P.copy(V),
        P.sub(A.multiplyScalar(A.dot(V))).normalize(),
        w.crossVectors(H, V));
      const ie = w.dot(u[b]) < 0 ? -1 : 1;
      ((l[b * 4] = P.x),
        (l[b * 4 + 1] = P.y),
        (l[b * 4 + 2] = P.z),
        (l[b * 4 + 3] = ie));
    }
    for (let b = 0, V = T.length; b < V; ++b) {
      const Z = T[b],
        ie = Z.start,
        D = Z.count;
      for (let N = ie, B = ie + D; N < B; N += 3)
        (S(i[N + 0]), S(i[N + 1]), S(i[N + 2]));
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
        h = new G();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const _ = e.getX(d + 0),
            g = e.getX(d + 1),
            p = e.getX(d + 2);
          (r.fromBufferAttribute(t, _),
            s.fromBufferAttribute(t, g),
            o.fromBufferAttribute(t, p),
            u.subVectors(o, s),
            h.subVectors(r, s),
            u.cross(h),
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
            h.subVectors(r, s),
            u.cross(h),
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
        h = a.normalized,
        d = new c.constructor(l.length * u);
      let m = 0,
        _ = 0;
      for (let g = 0, p = l.length; g < p; g++) {
        a.isInterleavedBufferAttribute ?
          (m = l[g] * a.data.stride + a.offset)
        : (m = l[g] * u);
        for (let f = 0; f < u; f++) d[_++] = c[m++];
      }
      return new pn(d, u, h);
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
      for (let u = 0, h = c.length; u < h; u++) {
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
      for (let h = 0, d = c.length; h < d; h++) {
        const m = c[h];
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
        h = s[c];
      for (let d = 0, m = h.length; d < m; d++) u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const h = o[c];
      this.addGroup(h.start, h.count, h.materialIndex);
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
const io = new Et(),
  Xn = new ff(),
  _r = new Zs(),
  ro = new G(),
  vi = new G(),
  xi = new G(),
  Mi = new G(),
  xs = new G(),
  gr = new G(),
  vr = new Ke(),
  xr = new Ke(),
  Mr = new Ke(),
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
          h = s[l];
        u !== 0 &&
          (xs.fromBufferAttribute(h, e),
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
      h = s.attributes.normal,
      d = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const p = d[_],
            f = o[p.materialIndex],
            M = Math.max(p.start, m.start),
            x = Math.min(
              a.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let T = M, P = x; T < P; T += 3) {
            const w = a.getX(T),
              A = a.getX(T + 1),
              H = a.getX(T + 2);
            ((r = yr(this, f, e, i, c, u, h, w, A, H)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r)));
          }
        }
      else {
        const _ = Math.max(0, m.start),
          g = Math.min(a.count, m.start + m.count);
        for (let p = _, f = g; p < f; p += 3) {
          const M = a.getX(p),
            x = a.getX(p + 1),
            T = a.getX(p + 2);
          ((r = yr(this, o, e, i, c, u, h, M, x, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r)));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const p = d[_],
            f = o[p.materialIndex],
            M = Math.max(p.start, m.start),
            x = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let T = M, P = x; T < P; T += 3) {
            const w = T,
              A = T + 1,
              H = T + 2;
            ((r = yr(this, f, e, i, c, u, h, w, A, H)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r)));
          }
        }
      else {
        const _ = Math.max(0, m.start),
          g = Math.min(l.count, m.start + m.count);
        for (let p = _, f = g; p < f; p += 3) {
          const M = p,
            x = p + 1,
            T = p + 2;
          ((r = yr(this, o, e, i, c, u, h, M, x, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r)));
        }
      }
  }
}
function Sf(n, e, t, i, r, s, o, a) {
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
  const u = Sf(n, e, t, i, vi, xi, Mi, Sr);
  if (u) {
    (r &&
      (vr.fromBufferAttribute(r, a),
      xr.fromBufferAttribute(r, l),
      Mr.fromBufferAttribute(r, c),
      (u.uv = ln.getInterpolation(Sr, vi, xi, Mi, vr, xr, Mr, new Ke()))),
      s &&
        (vr.fromBufferAttribute(s, a),
        xr.fromBufferAttribute(s, l),
        Mr.fromBufferAttribute(s, c),
        (u.uv1 = ln.getInterpolation(Sr, vi, xi, Mi, vr, xr, Mr, new Ke())),
        (u.uv2 = u.uv1)),
      o &&
        (so.fromBufferAttribute(o, a),
        ao.fromBufferAttribute(o, l),
        oo.fromBufferAttribute(o, c),
        (u.normal = ln.getInterpolation(Sr, vi, xi, Mi, so, ao, oo, new G())),
        u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1)));
    const h = { a, b: l, c, normal: new G(), materialIndex: 0 };
    (ln.getNormal(vi, xi, Mi, h.normal), (u.face = h));
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
      h = [];
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
      this.setAttribute("uv", new zn(h, 2)));
    function _(g, p, f, M, x, T, P, w, A, H, S) {
      const b = T / A,
        V = P / H,
        Z = T / 2,
        ie = P / 2,
        D = w / 2,
        N = A + 1,
        B = H + 1;
      let X = 0,
        $ = 0;
      const J = new G();
      for (let j = 0; j < B; j++) {
        const ee = j * V - ie;
        for (let Q = 0; Q < N; Q++) {
          const I = Q * b - Z;
          ((J[g] = I * M),
            (J[p] = ee * x),
            (J[f] = D),
            c.push(J.x, J.y, J.z),
            (J[g] = 0),
            (J[p] = 0),
            (J[f] = w > 0 ? 1 : -1),
            u.push(J.x, J.y, J.z),
            h.push(Q / A),
            h.push(1 - j / H),
            (X += 1));
        }
      }
      for (let j = 0; j < H; j++)
        for (let ee = 0; ee < A; ee++) {
          const Q = d + ee + N * j,
            I = d + ee + N * (j + 1),
            K = d + (ee + 1) + N * (j + 1),
            Y = d + (ee + 1) + N * j;
          (l.push(Q, I, Y), l.push(I, K, Y), ($ += 6));
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
function Ef(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function Rl(n) {
  return n.getRenderTarget() === null ?
      n.outputColorSpace
    : tt.workingColorSpace;
}
const yf = { clone: Ni, merge: Ot };
var Tf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  bf = `void main() {
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
      (this.vertexShader = Tf),
      (this.fragmentShader = bf),
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
      (this.uniformsGroups = Ef(e.uniformsGroups)),
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
      (this.matrixWorldInverse = new Et()),
      (this.projectionMatrix = new Et()),
      (this.projectionMatrixInverse = new Et()),
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
class Af extends It {
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
      h = e.getRenderTarget(),
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
      e.setRenderTarget(h, d, m),
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
class wf extends ni {
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
      new Af(1, 10, this).update(e, o),
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
  Rf = new G(),
  Cf = new ke();
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
    const r = Ms.subVectors(i, t).cross(Rf.subVectors(e, t)).normalize();
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
    const i = t || Cf.getNormalMatrix(e),
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
      h = r[6],
      d = r[7],
      m = r[8],
      _ = r[9],
      g = r[10],
      p = r[11],
      f = r[12],
      M = r[13],
      x = r[14],
      T = r[15];
    if (
      (i[0].setComponents(l - s, d - c, p - m, T - f).normalize(),
      i[1].setComponents(l + s, d + c, p + m, T + f).normalize(),
      i[2].setComponents(l + o, d + u, p + _, T + M).normalize(),
      i[3].setComponents(l - o, d - u, p - _, T - M).normalize(),
      i[4].setComponents(l - a, d - h, p - g, T - x).normalize(),
      t === yn)
    )
      i[5].setComponents(l + a, d + h, p + g, T + x).normalize();
    else if (t === Fr) i[5].setComponents(a, h, g, x).normalize();
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
function Lf(n, e) {
  const t = e.isWebGL2,
    i = new WeakMap();
  function r(c, u) {
    const h = c.array,
      d = c.usage,
      m = h.byteLength,
      _ = n.createBuffer();
    (n.bindBuffer(u, _), n.bufferData(u, h, d), c.onUploadCallback());
    let g;
    if (h instanceof Float32Array) g = n.FLOAT;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = n.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.",
          );
      else g = n.UNSIGNED_SHORT;
    else if (h instanceof Int16Array) g = n.SHORT;
    else if (h instanceof Uint32Array) g = n.UNSIGNED_INT;
    else if (h instanceof Int32Array) g = n.INT;
    else if (h instanceof Int8Array) g = n.BYTE;
    else if (h instanceof Uint8Array) g = n.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray) g = n.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h,
      );
    return {
      buffer: _,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version,
      size: m,
    };
  }
  function s(c, u, h) {
    const d = u.array,
      m = u._updateRange,
      _ = u.updateRanges;
    if (
      (n.bindBuffer(h, c),
      m.count === -1 && _.length === 0 && n.bufferSubData(h, 0, d),
      _.length !== 0)
    ) {
      for (let g = 0, p = _.length; g < p; g++) {
        const f = _[g];
        t ?
          n.bufferSubData(h, f.start * d.BYTES_PER_ELEMENT, d, f.start, f.count)
        : n.bufferSubData(
            h,
            f.start * d.BYTES_PER_ELEMENT,
            d.subarray(f.start, f.start + f.count),
          );
      }
      u.clearUpdateRanges();
    }
    (m.count !== -1 &&
      (t ?
        n.bufferSubData(h, m.offset * d.BYTES_PER_ELEMENT, d, m.offset, m.count)
      : n.bufferSubData(
          h,
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
    const h = i.get(c);
    if (h === void 0) i.set(c, r(c, u));
    else if (h.version < c.version) {
      if (h.size !== c.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (s(h.buffer, c, u), (h.version = c.version));
    }
  }
  return { get: o, remove: a, update: l };
}
class Hr extends si {
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
      h = e / a,
      d = t / l,
      m = [],
      _ = [],
      g = [],
      p = [];
    for (let f = 0; f < u; f++) {
      const M = f * d - o;
      for (let x = 0; x < c; x++) {
        const T = x * h - s;
        (_.push(T, -M, 0), g.push(0, 0, 1), p.push(x / a), p.push(1 - f / l));
      }
    }
    for (let f = 0; f < l; f++)
      for (let M = 0; M < a; M++) {
        const x = M + c * f,
          T = M + c * (f + 1),
          P = M + 1 + c * (f + 1),
          w = M + 1 + c * f;
        (m.push(x, T, w), m.push(T, P, w));
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
    return new Hr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Pf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Df = `#ifdef USE_ALPHAHASH
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
  Uf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  If = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Nf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Ff = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Of = `#ifdef USE_AOMAP
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
  Bf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  zf = `#ifdef USE_BATCHING
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
  Gf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  Hf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  kf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Vf = `float G_BlinnPhong_Implicit( ) {
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
  Wf = `#ifdef USE_IRIDESCENCE
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
  Xf = `#ifdef USE_BUMPMAP
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
  $f = `#if NUM_CLIPPING_PLANES > 0
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
  qf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Yf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  jf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Kf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Zf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Jf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Qf = `#if defined( USE_COLOR_ALPHA )
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
  eh = `#define PI 3.141592653589793
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
  th = `#ifdef ENVMAP_TYPE_CUBE_UV
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
  nh = `vec3 transformedNormal = objectNormal;
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
  ih = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  rh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  sh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  ah = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  oh = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  lh = `
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
  ch = `#ifdef USE_ENVMAP
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
  uh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  fh = `#ifdef USE_ENVMAP
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
  hh = `#ifdef USE_ENVMAP
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
  dh = `#ifdef USE_ENVMAP
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
  ph = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  mh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  _h = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  gh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  vh = `#ifdef USE_GRADIENTMAP
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
  xh = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Mh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Sh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Eh = `varying vec3 vViewPosition;
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
  yh = `uniform bool receiveShadow;
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
  Th = `#ifdef USE_ENVMAP
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
  bh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Ah = `varying vec3 vViewPosition;
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
  wh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Rh = `varying vec3 vViewPosition;
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
  Ch = `PhysicalMaterial material;
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
  Lh = `struct PhysicalMaterial {
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
  Ph = `
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
  Dh = `#if defined( RE_IndirectDiffuse )
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
  Uh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Ih = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Nh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Fh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Oh = `#ifdef USE_LOGDEPTHBUF
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
  Bh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  zh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Gh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
  Hh = `#if defined( USE_POINTS_UV )
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
  kh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Vh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Wh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Xh = `#ifdef USE_MORPHNORMALS
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
  $h = `#ifdef USE_MORPHTARGETS
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
  qh = `#ifdef USE_MORPHTARGETS
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
  Yh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
  jh = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
  Kh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Zh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Jh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Qh = `#ifdef USE_NORMALMAP
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
  fd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  hd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  Hd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  kd = `uniform float scale;
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
  Fe = {
    alphahash_fragment: Pf,
    alphahash_pars_fragment: Df,
    alphamap_fragment: Uf,
    alphamap_pars_fragment: If,
    alphatest_fragment: Nf,
    alphatest_pars_fragment: Ff,
    aomap_fragment: Of,
    aomap_pars_fragment: Bf,
    batching_pars_vertex: zf,
    batching_vertex: Gf,
    begin_vertex: Hf,
    beginnormal_vertex: kf,
    bsdfs: Vf,
    iridescence_fragment: Wf,
    bumpmap_pars_fragment: Xf,
    clipping_planes_fragment: $f,
    clipping_planes_pars_fragment: qf,
    clipping_planes_pars_vertex: Yf,
    clipping_planes_vertex: jf,
    color_fragment: Kf,
    color_pars_fragment: Zf,
    color_pars_vertex: Jf,
    color_vertex: Qf,
    common: eh,
    cube_uv_reflection_fragment: th,
    defaultnormal_vertex: nh,
    displacementmap_pars_vertex: ih,
    displacementmap_vertex: rh,
    emissivemap_fragment: sh,
    emissivemap_pars_fragment: ah,
    colorspace_fragment: oh,
    colorspace_pars_fragment: lh,
    envmap_fragment: ch,
    envmap_common_pars_fragment: uh,
    envmap_pars_fragment: fh,
    envmap_pars_vertex: hh,
    envmap_physical_pars_fragment: Th,
    envmap_vertex: dh,
    fog_vertex: ph,
    fog_pars_vertex: mh,
    fog_fragment: _h,
    fog_pars_fragment: gh,
    gradientmap_pars_fragment: vh,
    lightmap_fragment: xh,
    lightmap_pars_fragment: Mh,
    lights_lambert_fragment: Sh,
    lights_lambert_pars_fragment: Eh,
    lights_pars_begin: yh,
    lights_toon_fragment: bh,
    lights_toon_pars_fragment: Ah,
    lights_phong_fragment: wh,
    lights_phong_pars_fragment: Rh,
    lights_physical_fragment: Ch,
    lights_physical_pars_fragment: Lh,
    lights_fragment_begin: Ph,
    lights_fragment_maps: Dh,
    lights_fragment_end: Uh,
    logdepthbuf_fragment: Ih,
    logdepthbuf_pars_fragment: Nh,
    logdepthbuf_pars_vertex: Fh,
    logdepthbuf_vertex: Oh,
    map_fragment: Bh,
    map_pars_fragment: zh,
    map_particle_fragment: Gh,
    map_particle_pars_fragment: Hh,
    metalnessmap_fragment: kh,
    metalnessmap_pars_fragment: Vh,
    morphcolor_vertex: Wh,
    morphnormal_vertex: Xh,
    morphtarget_pars_vertex: $h,
    morphtarget_vertex: qh,
    normal_fragment_begin: Yh,
    normal_fragment_maps: jh,
    normal_pars_fragment: Kh,
    normal_pars_vertex: Zh,
    normal_vertex: Jh,
    normalmap_pars_fragment: Qh,
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
    roughnessmap_pars_fragment: fd,
    shadowmap_pars_fragment: hd,
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
    equirect_frag: Hd,
    linedashed_vert: kd,
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
  le = {
    common: {
      diffuse: { value: new je(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new ke() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ke() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new ke() },
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
      aoMapTransform: { value: new ke() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new ke() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new ke() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new ke() },
      normalScale: { value: new Ke(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new ke() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new ke() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new ke() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new ke() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new je(16777215) },
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
      diffuse: { value: new je(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ke() },
      alphaTest: { value: 0 },
      uvTransform: { value: new ke() },
    },
    sprite: {
      diffuse: { value: new je(16777215) },
      opacity: { value: 1 },
      center: { value: new Ke(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new ke() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ke() },
      alphaTest: { value: 0 },
    },
  },
  hn = {
    basic: {
      uniforms: Ot([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.fog,
      ]),
      vertexShader: Fe.meshbasic_vert,
      fragmentShader: Fe.meshbasic_frag,
    },
    lambert: {
      uniforms: Ot([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        { emissive: { value: new je(0) } },
      ]),
      vertexShader: Fe.meshlambert_vert,
      fragmentShader: Fe.meshlambert_frag,
    },
    phong: {
      uniforms: Ot([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        {
          emissive: { value: new je(0) },
          specular: { value: new je(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Fe.meshphong_vert,
      fragmentShader: Fe.meshphong_frag,
    },
    standard: {
      uniforms: Ot([
        le.common,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.roughnessmap,
        le.metalnessmap,
        le.fog,
        le.lights,
        {
          emissive: { value: new je(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Fe.meshphysical_vert,
      fragmentShader: Fe.meshphysical_frag,
    },
    toon: {
      uniforms: Ot([
        le.common,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.gradientmap,
        le.fog,
        le.lights,
        { emissive: { value: new je(0) } },
      ]),
      vertexShader: Fe.meshtoon_vert,
      fragmentShader: Fe.meshtoon_frag,
    },
    matcap: {
      uniforms: Ot([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Fe.meshmatcap_vert,
      fragmentShader: Fe.meshmatcap_frag,
    },
    points: {
      uniforms: Ot([le.points, le.fog]),
      vertexShader: Fe.points_vert,
      fragmentShader: Fe.points_frag,
    },
    dashed: {
      uniforms: Ot([
        le.common,
        le.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Fe.linedashed_vert,
      fragmentShader: Fe.linedashed_frag,
    },
    depth: {
      uniforms: Ot([le.common, le.displacementmap]),
      vertexShader: Fe.depth_vert,
      fragmentShader: Fe.depth_frag,
    },
    normal: {
      uniforms: Ot([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Fe.meshnormal_vert,
      fragmentShader: Fe.meshnormal_frag,
    },
    sprite: {
      uniforms: Ot([le.sprite, le.fog]),
      vertexShader: Fe.sprite_vert,
      fragmentShader: Fe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new ke() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Fe.background_vert,
      fragmentShader: Fe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Fe.backgroundCube_vert,
      fragmentShader: Fe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Fe.cube_vert,
      fragmentShader: Fe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Fe.equirect_vert,
      fragmentShader: Fe.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Ot([
        le.common,
        le.displacementmap,
        {
          referencePosition: { value: new G() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Fe.distanceRGBA_vert,
      fragmentShader: Fe.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ot([
        le.lights,
        le.fog,
        { color: { value: new je(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Fe.shadow_vert,
      fragmentShader: Fe.shadow_frag,
    },
  };
hn.physical = {
  uniforms: Ot([
    hn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new ke() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new ke() },
      clearcoatNormalScale: { value: new Ke(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new ke() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new ke() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new ke() },
      sheen: { value: 0 },
      sheenColor: { value: new je(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new ke() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new ke() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new ke() },
      transmissionSamplerSize: { value: new Ke() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new ke() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new je(0) },
      specularColor: { value: new je(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new ke() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new ke() },
      anisotropyVector: { value: new Ke() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new ke() },
    },
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag,
};
const br = { r: 0, b: 0, g: 0 };
function up(n, e, t, i, r, s, o) {
  const a = new je(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    h = null,
    d = 0,
    m = null;
  function _(p, f) {
    let M = !1,
      x = f.isScene === !0 ? f.background : null;
    (x && x.isTexture && (x = (f.backgroundBlurriness > 0 ? t : e).get(x)),
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
              uniforms: Ni(hn.backgroundCube.uniforms),
              vertexShader: hn.backgroundCube.vertexShader,
              fragmentShader: hn.backgroundCube.fragmentShader,
              side: Wt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (P, w, A) {
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
          f.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = f.backgroundIntensity),
        (u.material.toneMapped = tt.getTransfer(x.colorSpace) !== lt),
        (h !== x || d !== x.version || m !== n.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (h = x),
          (d = x.version),
          (m = n.toneMapping)),
        u.layers.enableAll(),
        p.unshift(u, u.geometry, u.material, 0, 0, null))
      : x &&
        x.isTexture &&
        (c === void 0 &&
          ((c = new Tn(
            new Hr(2, 2),
            new ii({
              name: "BackgroundMaterial",
              uniforms: Ni(hn.background.uniforms),
              vertexShader: hn.background.vertexShader,
              fragmentShader: hn.background.fragmentShader,
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
        (c.material.uniforms.backgroundIntensity.value = f.backgroundIntensity),
        (c.material.toneMapped = tt.getTransfer(x.colorSpace) !== lt),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(x.matrix),
        (h !== x || d !== x.version || m !== n.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (h = x),
          (d = x.version),
          (m = n.toneMapping)),
        c.layers.enableAll(),
        p.unshift(c, c.geometry, c.material, 0, 0, null)));
  }
  function g(p, f) {
    (p.getRGB(br, Rl(n)), i.buffers.color.setClear(br.r, br.g, br.b, f, o));
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, f = 1) {
      (a.set(p), (l = f), g(a, l));
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
function fp(n, e, t, i) {
  const r = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = i.isWebGL2 || s !== null,
    a = {},
    l = p(null);
  let c = l,
    u = !1;
  function h(D, N, B, X, $) {
    let J = !1;
    if (o) {
      const j = g(X, B, N);
      (c !== j && ((c = j), m(c.object)),
        (J = f(D, X, B, $)),
        J && M(D, X, B, $));
    } else {
      const j = N.wireframe === !0;
      (c.geometry !== X.id || c.program !== B.id || c.wireframe !== j) &&
        ((c.geometry = X.id), (c.program = B.id), (c.wireframe = j), (J = !0));
    }
    ($ !== null && t.update($, n.ELEMENT_ARRAY_BUFFER),
      (J || u) &&
        ((u = !1),
        H(D, N, B, X),
        $ !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get($).buffer)));
  }
  function d() {
    return i.isWebGL2 ? n.createVertexArray() : s.createVertexArrayOES();
  }
  function m(D) {
    return i.isWebGL2 ? n.bindVertexArray(D) : s.bindVertexArrayOES(D);
  }
  function _(D) {
    return i.isWebGL2 ? n.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
  }
  function g(D, N, B) {
    const X = B.wireframe === !0;
    let $ = a[D.id];
    $ === void 0 && (($ = {}), (a[D.id] = $));
    let J = $[N.id];
    J === void 0 && ((J = {}), ($[N.id] = J));
    let j = J[X];
    return (j === void 0 && ((j = p(d())), (J[X] = j)), j);
  }
  function p(D) {
    const N = [],
      B = [],
      X = [];
    for (let $ = 0; $ < r; $++) ((N[$] = 0), (B[$] = 0), (X[$] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: N,
      enabledAttributes: B,
      attributeDivisors: X,
      object: D,
      attributes: {},
      index: null,
    };
  }
  function f(D, N, B, X) {
    const $ = c.attributes,
      J = N.attributes;
    let j = 0;
    const ee = B.getAttributes();
    for (const Q in ee)
      if (ee[Q].location >= 0) {
        const K = $[Q];
        let Y = J[Q];
        if (
          (Y === void 0 &&
            (Q === "instanceMatrix" &&
              D.instanceMatrix &&
              (Y = D.instanceMatrix),
            Q === "instanceColor" && D.instanceColor && (Y = D.instanceColor)),
          K === void 0 || K.attribute !== Y || (Y && K.data !== Y.data))
        )
          return !0;
        j++;
      }
    return c.attributesNum !== j || c.index !== X;
  }
  function M(D, N, B, X) {
    const $ = {},
      J = N.attributes;
    let j = 0;
    const ee = B.getAttributes();
    for (const Q in ee)
      if (ee[Q].location >= 0) {
        let K = J[Q];
        K === void 0 &&
          (Q === "instanceMatrix" && D.instanceMatrix && (K = D.instanceMatrix),
          Q === "instanceColor" && D.instanceColor && (K = D.instanceColor));
        const Y = {};
        ((Y.attribute = K), K && K.data && (Y.data = K.data), ($[Q] = Y), j++);
      }
    ((c.attributes = $), (c.attributesNum = j), (c.index = X));
  }
  function x() {
    const D = c.newAttributes;
    for (let N = 0, B = D.length; N < B; N++) D[N] = 0;
  }
  function T(D) {
    P(D, 0);
  }
  function P(D, N) {
    const B = c.newAttributes,
      X = c.enabledAttributes,
      $ = c.attributeDivisors;
    ((B[D] = 1),
      X[D] === 0 && (n.enableVertexAttribArray(D), (X[D] = 1)),
      $[D] !== N &&
        ((i.isWebGL2 ? n : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, N),
        ($[D] = N)));
  }
  function w() {
    const D = c.newAttributes,
      N = c.enabledAttributes;
    for (let B = 0, X = N.length; B < X; B++)
      N[B] !== D[B] && (n.disableVertexAttribArray(B), (N[B] = 0));
  }
  function A(D, N, B, X, $, J, j) {
    j === !0 ?
      n.vertexAttribIPointer(D, N, B, $, J)
    : n.vertexAttribPointer(D, N, B, X, $, J);
  }
  function H(D, N, B, X) {
    if (
      i.isWebGL2 === !1 &&
      (D.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    x();
    const $ = X.attributes,
      J = B.getAttributes(),
      j = N.defaultAttributeValues;
    for (const ee in J) {
      const Q = J[ee];
      if (Q.location >= 0) {
        let I = $[ee];
        if (
          (I === void 0 &&
            (ee === "instanceMatrix" &&
              D.instanceMatrix &&
              (I = D.instanceMatrix),
            ee === "instanceColor" && D.instanceColor && (I = D.instanceColor)),
          I !== void 0)
        ) {
          const K = I.normalized,
            Y = I.itemSize,
            ce = t.get(I);
          if (ce === void 0) continue;
          const me = ce.buffer,
            Me = ce.type,
            Pe = ce.bytesPerElement,
            Te =
              i.isWebGL2 === !0 &&
              (Me === n.INT || Me === n.UNSIGNED_INT || I.gpuType === cl);
          if (I.isInterleavedBufferAttribute) {
            const $e = I.data,
              L = $e.stride,
              Ze = I.offset;
            if ($e.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < Q.locationSize; xe++)
                P(Q.location + xe, $e.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = $e.meshPerAttribute * $e.count);
            } else
              for (let xe = 0; xe < Q.locationSize; xe++) T(Q.location + xe);
            n.bindBuffer(n.ARRAY_BUFFER, me);
            for (let xe = 0; xe < Q.locationSize; xe++)
              A(
                Q.location + xe,
                Y / Q.locationSize,
                Me,
                K,
                L * Pe,
                (Ze + (Y / Q.locationSize) * xe) * Pe,
                Te,
              );
          } else {
            if (I.isInstancedBufferAttribute) {
              for (let $e = 0; $e < Q.locationSize; $e++)
                P(Q.location + $e, I.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = I.meshPerAttribute * I.count);
            } else
              for (let $e = 0; $e < Q.locationSize; $e++) T(Q.location + $e);
            n.bindBuffer(n.ARRAY_BUFFER, me);
            for (let $e = 0; $e < Q.locationSize; $e++)
              A(
                Q.location + $e,
                Y / Q.locationSize,
                Me,
                K,
                Y * Pe,
                (Y / Q.locationSize) * $e * Pe,
                Te,
              );
          }
        } else if (j !== void 0) {
          const K = j[ee];
          if (K !== void 0)
            switch (K.length) {
              case 2:
                n.vertexAttrib2fv(Q.location, K);
                break;
              case 3:
                n.vertexAttrib3fv(Q.location, K);
                break;
              case 4:
                n.vertexAttrib4fv(Q.location, K);
                break;
              default:
                n.vertexAttrib1fv(Q.location, K);
            }
        }
      }
    }
    w();
  }
  function S() {
    Z();
    for (const D in a) {
      const N = a[D];
      for (const B in N) {
        const X = N[B];
        for (const $ in X) (_(X[$].object), delete X[$]);
        delete N[B];
      }
      delete a[D];
    }
  }
  function b(D) {
    if (a[D.id] === void 0) return;
    const N = a[D.id];
    for (const B in N) {
      const X = N[B];
      for (const $ in X) (_(X[$].object), delete X[$]);
      delete N[B];
    }
    delete a[D.id];
  }
  function V(D) {
    for (const N in a) {
      const B = a[N];
      if (B[D.id] === void 0) continue;
      const X = B[D.id];
      for (const $ in X) (_(X[$].object), delete X[$]);
      delete B[D.id];
    }
  }
  function Z() {
    (ie(), (u = !0), c !== l && ((c = l), m(c.object)));
  }
  function ie() {
    ((l.geometry = null), (l.program = null), (l.wireframe = !1));
  }
  return {
    setup: h,
    reset: Z,
    resetDefaultState: ie,
    dispose: S,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: V,
    initAttributes: x,
    enableAttribute: T,
    disableUnusedAttributes: w,
  };
}
function hp(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  function a(u, h) {
    (n.drawArrays(s, u, h), t.update(h, s, 1));
  }
  function l(u, h, d) {
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
    (m[_](s, u, h, d), t.update(h, s, d));
  }
  function c(u, h, d) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let _ = 0; _ < d; _++) this.render(u[_], h[_]);
    else {
      m.multiDrawArraysWEBGL(s, u, 0, h, 0, d);
      let _ = 0;
      for (let g = 0; g < d; g++) _ += h[g];
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
    h = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
    d = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = n.getParameter(n.MAX_TEXTURE_SIZE),
    _ = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
    g = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    p = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
    f = n.getParameter(n.MAX_VARYING_VECTORS),
    M = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
    x = d > 0,
    T = o || e.has("OES_texture_float"),
    P = x && T,
    w = o ? n.getParameter(n.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: _,
    maxAttributes: g,
    maxVertexUniforms: p,
    maxVaryings: f,
    maxFragmentUniforms: M,
    vertexTextures: x,
    floatFragmentTextures: T,
    floatVertexTextures: P,
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
    a = new ke(),
    l = { value: null, needsUpdate: !1 };
  ((this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, d) {
      const m = h.length !== 0 || d || i !== 0 || r;
      return ((r = d), (i = h.length), m);
    }),
    (this.beginShadows = function () {
      ((s = !0), u(null));
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (h, d) {
      t = u(h, d, 0);
    }),
    (this.setState = function (h, d, m) {
      const _ = h.clippingPlanes,
        g = h.clipIntersection,
        p = h.clipShadows,
        f = n.get(h);
      if (!r || _ === null || _.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const M = s ? 0 : i,
          x = M * 4;
        let T = f.clippingState || null;
        ((l.value = T), (T = u(_, d, x, m)));
        for (let P = 0; P !== x; ++P) T[P] = t[P];
        ((f.clippingState = T),
          (this.numIntersection = g ? this.numPlanes : 0),
          (this.numPlanes += M));
      }
    }));
  function c() {
    (l.value !== t && ((l.value = t), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0));
  }
  function u(h, d, m, _) {
    const g = h !== null ? h.length : 0;
    let p = null;
    if (g !== 0) {
      if (((p = l.value), _ !== !0 || p === null)) {
        const f = m + g * 4,
          M = d.matrixWorldInverse;
        (a.getNormalMatrix(M),
          (p === null || p.length < f) && (p = new Float32Array(f)));
        for (let x = 0, T = m; x !== g; ++x, T += 4)
          (o.copy(h[x]).applyMatrix4(M, a),
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
            const c = new wf(l.height / 2);
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
  co = new je();
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
class fo {
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
      r = ho(e, t, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ho(e, t, i)));
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
      h = u.autoClear,
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
    for (let f = 0; f < 6; f++) {
      const M = f % 3;
      M === 0 ? (a.up.set(0, l[f], 0), a.lookAt(c[f], 0, 0))
      : M === 1 ? (a.up.set(0, 0, l[f]), a.lookAt(0, c[f], 0))
      : (a.up.set(0, l[f], 0), a.lookAt(0, 0, c[f]));
      const x = this._cubeSize;
      (Ar(r, M * x, f > 2 ? x : 0, x, x),
        u.setRenderTarget(r),
        g && u.render(_, a),
        u.render(e, a));
    }
    (_.geometry.dispose(),
      _.material.dispose(),
      (u.toneMapping = d),
      (u.autoClear = h),
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
      h = new Tn(this._lodPlanes[r], c),
      d = c.uniforms,
      m = this._sizeLods[i] - 1,
      _ = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Kn - 1),
      g = s / _,
      p = isFinite(s) ? 1 + Math.floor(u * g) : Kn;
    p > Kn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`,
      );
    const f = [];
    let M = 0;
    for (let A = 0; A < Kn; ++A) {
      const H = A / g,
        S = Math.exp((-H * H) / 2);
      (f.push(S), A === 0 ? (M += S) : A < p && (M += 2 * S));
    }
    for (let A = 0; A < f.length; A++) f[A] = f[A] / M;
    ((d.envMap.value = e.texture),
      (d.samples.value = p),
      (d.weights.value = f),
      (d.latitudinal.value = o === "latitudinal"),
      a && (d.poleAxis.value = a));
    const { _lodMax: x } = this;
    ((d.dTheta.value = _), (d.mipInt.value = x - i));
    const T = this._sizeLods[r],
      P = 3 * T * (r > x - Ai ? r - x + Ai : 0),
      w = 4 * (this._cubeSize - T);
    (Ar(t, P, w, 3 * T, 2 * T), l.setRenderTarget(t), l.render(h, Ss));
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
      h = 1 + c,
      d = [u, u, h, u, h, h, u, u, h, h, u, h],
      m = 6,
      _ = 6,
      g = 3,
      p = 2,
      f = 1,
      M = new Float32Array(g * _ * m),
      x = new Float32Array(p * _ * m),
      T = new Float32Array(f * _ * m);
    for (let w = 0; w < m; w++) {
      const A = ((w % 3) * 2) / 3 - 1,
        H = w > 2 ? 0 : -1,
        S = [
          A,
          H,
          0,
          A + 2 / 3,
          H,
          0,
          A + 2 / 3,
          H + 1,
          0,
          A,
          H,
          0,
          A + 2 / 3,
          H + 1,
          0,
          A,
          H + 1,
          0,
        ];
      (M.set(S, g * _ * w), x.set(d, p * _ * w));
      const b = [w, w, w, w, w, w];
      T.set(b, f * _ * w);
    }
    const P = new si();
    (P.setAttribute("position", new pn(M, g)),
      P.setAttribute("uv", new pn(x, p)),
      P.setAttribute("faceIndex", new pn(T, f)),
      e.push(P),
      r > Ai && r--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function ho(n, e, t) {
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
          let h = e.get(a);
          return (
            t === null && (t = new fo(n)),
            (h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h)),
            e.set(a, h),
            h.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const h = a.image;
            if ((c && h && h.height > 0) || (u && h && r(h))) {
              t === null && (t = new fo(n));
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
  function o(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes) e.remove(d.attributes[_]);
    for (const _ in d.morphAttributes) {
      const g = d.morphAttributes[_];
      for (let p = 0, f = g.length; p < f; p++) e.remove(g[p]);
    }
    (d.removeEventListener("dispose", o), delete r[d.id]);
    const m = s.get(d);
    (m && (e.remove(m), s.delete(d)),
      i.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--);
  }
  function a(h, d) {
    return (
      r[d.id] === !0 ||
        (d.addEventListener("dispose", o),
        (r[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function l(h) {
    const d = h.attributes;
    for (const _ in d) e.update(d[_], n.ARRAY_BUFFER);
    const m = h.morphAttributes;
    for (const _ in m) {
      const g = m[_];
      for (let p = 0, f = g.length; p < f; p++) e.update(g[p], n.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const d = [],
      m = h.index,
      _ = h.attributes.position;
    let g = 0;
    if (m !== null) {
      const M = m.array;
      g = m.version;
      for (let x = 0, T = M.length; x < T; x += 3) {
        const P = M[x + 0],
          w = M[x + 1],
          A = M[x + 2];
        d.push(P, w, w, A, A, P);
      }
    } else if (_ !== void 0) {
      const M = _.array;
      g = _.version;
      for (let x = 0, T = M.length / 3 - 1; x < T; x += 3) {
        const P = x + 0,
          w = x + 1,
          A = x + 2;
        d.push(P, w, w, A, A, P);
      }
    } else return;
    const p = new (xl(d) ? wl : Al)(d, 1);
    p.version = g;
    const f = s.get(h);
    (f && e.remove(f), s.set(h, p));
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const m = h.index;
      m !== null && d.version < m.version && c(h);
    } else c(h);
    return s.get(h);
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
  function h(m, _, g) {
    if (g === 0) return;
    let p, f;
    if (r) ((p = n), (f = "drawElementsInstanced"));
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (f = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.",
      );
      return;
    }
    (p[f](s, _, a, m * l, g), t.update(_, s, g));
  }
  function d(m, _, g) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let f = 0; f < g; f++) this.render(m[f] / l, _[f]);
    else {
      p.multiDrawElementsWEBGL(s, _, 0, a, m, 0, g);
      let f = 0;
      for (let M = 0; M < g; M++) f += _[M];
      t.update(f, s, 1);
    }
  }
  ((this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = h),
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
  function l(c, u, h) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const _ =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        g = _ !== void 0 ? _.length : 0;
      let p = s.get(u);
      if (p === void 0 || p.count !== g) {
        let N = function () {
          (ie.dispose(), s.delete(u), u.removeEventListener("dispose", N));
        };
        var m = N;
        p !== void 0 && p.texture.dispose();
        const x = u.morphAttributes.position !== void 0,
          T = u.morphAttributes.normal !== void 0,
          P = u.morphAttributes.color !== void 0,
          w = u.morphAttributes.position || [],
          A = u.morphAttributes.normal || [],
          H = u.morphAttributes.color || [];
        let S = 0;
        (x === !0 && (S = 1), T === !0 && (S = 2), P === !0 && (S = 3));
        let b = u.attributes.position.count * S,
          V = 1;
        b > e.maxTextureSize &&
          ((V = Math.ceil(b / e.maxTextureSize)), (b = e.maxTextureSize));
        const Z = new Float32Array(b * V * 4 * g),
          ie = new El(Z, b, V, g);
        ((ie.type = Nn), (ie.needsUpdate = !0));
        const D = S * 4;
        for (let B = 0; B < g; B++) {
          const X = w[B],
            $ = A[B],
            J = H[B],
            j = b * V * 4 * B;
          for (let ee = 0; ee < X.count; ee++) {
            const Q = ee * D;
            (x === !0 &&
              (o.fromBufferAttribute(X, ee),
              (Z[j + Q + 0] = o.x),
              (Z[j + Q + 1] = o.y),
              (Z[j + Q + 2] = o.z),
              (Z[j + Q + 3] = 0)),
              T === !0 &&
                (o.fromBufferAttribute($, ee),
                (Z[j + Q + 4] = o.x),
                (Z[j + Q + 5] = o.y),
                (Z[j + Q + 6] = o.z),
                (Z[j + Q + 7] = 0)),
              P === !0 &&
                (o.fromBufferAttribute(J, ee),
                (Z[j + Q + 8] = o.x),
                (Z[j + Q + 9] = o.y),
                (Z[j + Q + 10] = o.z),
                (Z[j + Q + 11] = J.itemSize === 4 ? o.w : 1)));
          }
        }
        ((p = { count: g, texture: ie, size: new Ke(b, V) }),
          s.set(u, p),
          u.addEventListener("dispose", N));
      }
      let f = 0;
      for (let x = 0; x < d.length; x++) f += d[x];
      const M = u.morphTargetsRelative ? 1 : 1 - f;
      (h.getUniforms().setValue(n, "morphTargetBaseInfluence", M),
        h.getUniforms().setValue(n, "morphTargetInfluences", d),
        h.getUniforms().setValue(n, "morphTargetsTexture", p.texture, t),
        h.getUniforms().setValue(n, "morphTargetsTextureSize", p.size));
    } else {
      const _ = d === void 0 ? 0 : d.length;
      let g = i[u.id];
      if (g === void 0 || g.length !== _) {
        g = [];
        for (let T = 0; T < _; T++) g[T] = [T, 0];
        i[u.id] = g;
      }
      for (let T = 0; T < _; T++) {
        const P = g[T];
        ((P[0] = T), (P[1] = d[T]));
      }
      g.sort(Tp);
      for (let T = 0; T < 8; T++)
        T < _ && g[T][1] ?
          ((a[T][0] = g[T][0]), (a[T][1] = g[T][1]))
        : ((a[T][0] = Number.MAX_SAFE_INTEGER), (a[T][1] = 0));
      a.sort(yp);
      const p = u.morphAttributes.position,
        f = u.morphAttributes.normal;
      let M = 0;
      for (let T = 0; T < 8; T++) {
        const P = a[T],
          w = P[0],
          A = P[1];
        w !== Number.MAX_SAFE_INTEGER && A ?
          (p &&
            u.getAttribute("morphTarget" + T) !== p[w] &&
            u.setAttribute("morphTarget" + T, p[w]),
          f &&
            u.getAttribute("morphNormal" + T) !== f[w] &&
            u.setAttribute("morphNormal" + T, f[w]),
          (r[T] = A),
          (M += A))
        : (p &&
            u.hasAttribute("morphTarget" + T) === !0 &&
            u.deleteAttribute("morphTarget" + T),
          f &&
            u.hasAttribute("morphNormal" + T) === !0 &&
            u.deleteAttribute("morphNormal" + T),
          (r[T] = 0));
      }
      const x = u.morphTargetsRelative ? 1 : 1 - M;
      (h.getUniforms().setValue(n, "morphTargetBaseInfluence", x),
        h.getUniforms().setValue(n, "morphTargetInfluences", r));
    }
  }
  return { update: l };
}
function Ap(n, e, t, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
      u = l.geometry,
      h = e.get(l, u);
    if (
      (r.get(h) !== c && (e.update(h), r.set(h, c)),
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
    return h;
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
  Ol = new cf(),
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
function yt(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return !1;
  return !0;
}
function Tt(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function kr(n, e) {
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
    if (yt(t, e)) return;
    (n.uniform2fv(this.addr, e), Tt(t, e));
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
    if (yt(t, e)) return;
    (n.uniform3fv(this.addr, e), Tt(t, e));
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
    if (yt(t, e)) return;
    (n.uniform4fv(this.addr, e), Tt(t, e));
  }
}
function Pp(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (yt(t, e)) return;
    (n.uniformMatrix2fv(this.addr, !1, e), Tt(t, e));
  } else {
    if (yt(t, i)) return;
    (Mo.set(i), n.uniformMatrix2fv(this.addr, !1, Mo), Tt(t, i));
  }
}
function Dp(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (yt(t, e)) return;
    (n.uniformMatrix3fv(this.addr, !1, e), Tt(t, e));
  } else {
    if (yt(t, i)) return;
    (xo.set(i), n.uniformMatrix3fv(this.addr, !1, xo), Tt(t, i));
  }
}
function Up(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (yt(t, e)) return;
    (n.uniformMatrix4fv(this.addr, !1, e), Tt(t, e));
  } else {
    if (yt(t, i)) return;
    (vo.set(i), n.uniformMatrix4fv(this.addr, !1, vo), Tt(t, i));
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
    if (yt(t, e)) return;
    (n.uniform2iv(this.addr, e), Tt(t, e));
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
    if (yt(t, e)) return;
    (n.uniform3iv(this.addr, e), Tt(t, e));
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
    if (yt(t, e)) return;
    (n.uniform4iv(this.addr, e), Tt(t, e));
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
    if (yt(t, e)) return;
    (n.uniform2uiv(this.addr, e), Tt(t, e));
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
    if (yt(t, e)) return;
    (n.uniform3uiv(this.addr, e), Tt(t, e));
  }
}
function Hp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (yt(t, e)) return;
    (n.uniform4uiv(this.addr, e), Tt(t, e));
  }
}
function kp(n, e, t) {
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
      return Hp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return kp;
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
    s = kr(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), Tt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Il, s[o]);
}
function cm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), Tt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || Ol, s[o]);
}
function um(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), Tt(i, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Bl, s[o]);
}
function fm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), Tt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Fl, s[o]);
}
function hm(n) {
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
      return fm;
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
      (this.setValue = hm(t.type)));
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
      let h = t.map[a];
      (h === void 0 && ((h = new mm(a)), So(t, h)), (t = h));
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
  let t = Fe[e];
  if (t === void 0) {
    const i = Rm.get(e);
    if (i !== void 0)
      ((t = Fe[i]),
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
    h = Nm(t),
    d = Fm(t),
    m = t.isWebGL2 ? "" : ym(t),
    _ = Tm(t),
    g = bm(s),
    p = r.createProgram();
  let f,
    M,
    x =
      t.glslVersion ?
        "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial ?
    ((f = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      g,
    ].filter(wi).join(`
`)),
    f.length > 0 &&
      (f += `
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
  : ((f = [
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
      t.envMap ? "#define " + h : "",
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
      t.toneMapping !== On ? Fe.tonemapping_pars_fragment : "",
      t.toneMapping !== On ? Em("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      Fe.colorspace_pars_fragment,
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
      (f =
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
        f),
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
  const T = x + f + o,
    P = x + M + a,
    w = Eo(r, r.VERTEX_SHADER, T),
    A = Eo(r, r.FRAGMENT_SHADER, P);
  (r.attachShader(p, w),
    r.attachShader(p, A),
    t.index0AttributeName !== void 0 ?
      r.bindAttribLocation(p, 0, t.index0AttributeName)
    : t.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"),
    r.linkProgram(p));
  function H(Z) {
    if (n.debug.checkShaderErrors) {
      const ie = r.getProgramInfoLog(p).trim(),
        D = r.getShaderInfoLog(w).trim(),
        N = r.getShaderInfoLog(A).trim();
      let B = !0,
        X = !0;
      if (r.getProgramParameter(p, r.LINK_STATUS) === !1)
        if (((B = !1), typeof n.debug.onShaderError == "function"))
          n.debug.onShaderError(r, p, w, A);
        else {
          const $ = yo(r, w, "vertex"),
            J = yo(r, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(p, r.VALIDATE_STATUS) +
              `

Program Info Log: ` +
              ie +
              `
` +
              $ +
              `
` +
              J,
          );
        }
      else
        ie !== "" ?
          console.warn("THREE.WebGLProgram: Program Info Log:", ie)
        : (D === "" || N === "") && (X = !1);
      X &&
        (Z.diagnostics = {
          runnable: B,
          programLog: ie,
          vertexShader: { log: D, prefix: f },
          fragmentShader: { log: N, prefix: M },
        });
    }
    (r.deleteShader(w), r.deleteShader(A), (S = new Cr(r, p)), (b = Am(r, p)));
  }
  let S;
  this.getUniforms = function () {
    return (S === void 0 && H(this), S);
  };
  let b;
  this.getAttributes = function () {
    return (b === void 0 && H(this), b);
  };
  let V = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (V === !1 && (V = r.getProgramParameter(p, gm)), V);
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
function Hm(n, e, t, i, r, s, o) {
  const a = new yl(),
    l = new zm(),
    c = [],
    u = r.isWebGL2,
    h = r.logarithmicDepthBuffer,
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
  function p(S, b, V, Z, ie) {
    const D = Z.fog,
      N = ie.geometry,
      B = S.isMeshStandardMaterial ? Z.environment : null,
      X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || B),
      $ = X && X.mapping === Br ? X.image.height : null,
      J = _[S.type];
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
    const j =
        N.morphAttributes.position ||
        N.morphAttributes.normal ||
        N.morphAttributes.color,
      ee = j !== void 0 ? j.length : 0;
    let Q = 0;
    (N.morphAttributes.position !== void 0 && (Q = 1),
      N.morphAttributes.normal !== void 0 && (Q = 2),
      N.morphAttributes.color !== void 0 && (Q = 3));
    let I, K, Y, ce;
    if (J) {
      const Nt = hn[J];
      ((I = Nt.vertexShader), (K = Nt.fragmentShader));
    } else
      ((I = S.vertexShader),
        (K = S.fragmentShader),
        l.update(S),
        (Y = l.getVertexShaderID(S)),
        (ce = l.getFragmentShaderID(S)));
    const me = n.getRenderTarget(),
      Me = ie.isInstancedMesh === !0,
      Pe = ie.isBatchedMesh === !0,
      Te = !!S.map,
      $e = !!S.matcap,
      L = !!X,
      Ze = !!S.aoMap,
      xe = !!S.lightMap,
      Se = !!S.bumpMap,
      ve = !!S.normalMap,
      pt = !!S.displacementMap,
      Oe = !!S.emissiveMap,
      y = !!S.metalnessMap,
      v = !!S.roughnessMap,
      O = S.anisotropy > 0,
      re = S.clearcoat > 0,
      ne = S.iridescence > 0,
      se = S.sheen > 0,
      Ee = S.transmission > 0,
      he = O && !!S.anisotropyMap,
      _e = re && !!S.clearcoatMap,
      Re = re && !!S.clearcoatNormalMap,
      Be = re && !!S.clearcoatRoughnessMap,
      te = ne && !!S.iridescenceMap,
      et = ne && !!S.iridescenceThicknessMap,
      We = se && !!S.sheenColorMap,
      De = se && !!S.sheenRoughnessMap,
      be = !!S.specularMap,
      ge = !!S.specularColorMap,
      Ne = !!S.specularIntensityMap,
      Je = Ee && !!S.transmissionMap,
      _t = Ee && !!S.thicknessMap,
      Ge = !!S.gradientMap,
      oe = !!S.alphaMap,
      C = S.alphaTest > 0,
      ue = !!S.alphaHash,
      fe = !!S.extensions,
      Ce = !!N.attributes.uv1,
      Ae = !!N.attributes.uv2,
      it = !!N.attributes.uv3;
    let rt = On;
    return (
      S.toneMapped &&
        (me === null || me.isXRRenderTarget === !0) &&
        (rt = n.toneMapping),
      {
        isWebGL2: u,
        shaderID: J,
        shaderType: S.type,
        shaderName: S.name,
        vertexShader: I,
        fragmentShader: K,
        defines: S.defines,
        customVertexShaderID: Y,
        customFragmentShaderID: ce,
        isRawShaderMaterial: S.isRawShaderMaterial === !0,
        glslVersion: S.glslVersion,
        precision: m,
        batching: Pe,
        instancing: Me,
        instancingColor: Me && ie.instanceColor !== null,
        supportsVertexTextures: d,
        outputColorSpace:
          me === null ? n.outputColorSpace
          : me.isXRRenderTarget === !0 ? me.texture.colorSpace
          : An,
        map: Te,
        matcap: $e,
        envMap: L,
        envMapMode: L && X.mapping,
        envMapCubeUVHeight: $,
        aoMap: Ze,
        lightMap: xe,
        bumpMap: Se,
        normalMap: ve,
        displacementMap: d && pt,
        emissiveMap: Oe,
        normalMapObjectSpace: ve && S.normalMapType === Yu,
        normalMapTangentSpace: ve && S.normalMapType === gl,
        metalnessMap: y,
        roughnessMap: v,
        anisotropy: O,
        anisotropyMap: he,
        clearcoat: re,
        clearcoatMap: _e,
        clearcoatNormalMap: Re,
        clearcoatRoughnessMap: Be,
        iridescence: ne,
        iridescenceMap: te,
        iridescenceThicknessMap: et,
        sheen: se,
        sheenColorMap: We,
        sheenRoughnessMap: De,
        specularMap: be,
        specularColorMap: ge,
        specularIntensityMap: Ne,
        transmission: Ee,
        transmissionMap: Je,
        thicknessMap: _t,
        gradientMap: Ge,
        opaque: S.transparent === !1 && S.blending === Ci,
        alphaMap: oe,
        alphaTest: C,
        alphaHash: ue,
        combine: S.combine,
        mapUv: Te && g(S.map.channel),
        aoMapUv: Ze && g(S.aoMap.channel),
        lightMapUv: xe && g(S.lightMap.channel),
        bumpMapUv: Se && g(S.bumpMap.channel),
        normalMapUv: ve && g(S.normalMap.channel),
        displacementMapUv: pt && g(S.displacementMap.channel),
        emissiveMapUv: Oe && g(S.emissiveMap.channel),
        metalnessMapUv: y && g(S.metalnessMap.channel),
        roughnessMapUv: v && g(S.roughnessMap.channel),
        anisotropyMapUv: he && g(S.anisotropyMap.channel),
        clearcoatMapUv: _e && g(S.clearcoatMap.channel),
        clearcoatNormalMapUv: Re && g(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: Be && g(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: te && g(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: et && g(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: We && g(S.sheenColorMap.channel),
        sheenRoughnessMapUv: De && g(S.sheenRoughnessMap.channel),
        specularMapUv: be && g(S.specularMap.channel),
        specularColorMapUv: ge && g(S.specularColorMap.channel),
        specularIntensityMapUv: Ne && g(S.specularIntensityMap.channel),
        transmissionMapUv: Je && g(S.transmissionMap.channel),
        thicknessMapUv: _t && g(S.thicknessMap.channel),
        alphaMapUv: oe && g(S.alphaMap.channel),
        vertexTangents: !!N.attributes.tangent && (ve || O),
        vertexColors: S.vertexColors,
        vertexAlphas:
          S.vertexColors === !0 &&
          !!N.attributes.color &&
          N.attributes.color.itemSize === 4,
        vertexUv1s: Ce,
        vertexUv2s: Ae,
        vertexUv3s: it,
        pointsUvs: ie.isPoints === !0 && !!N.attributes.uv && (Te || oe),
        fog: !!D,
        useFog: S.fog === !0,
        fogExp2: D && D.isFogExp2,
        flatShading: S.flatShading === !0,
        sizeAttenuation: S.sizeAttenuation === !0,
        logarithmicDepthBuffer: h,
        skinning: ie.isSkinnedMesh === !0,
        morphTargets: N.morphAttributes.position !== void 0,
        morphNormals: N.morphAttributes.normal !== void 0,
        morphColors: N.morphAttributes.color !== void 0,
        morphTargetsCount: ee,
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
        shadowMapEnabled: n.shadowMap.enabled && V.length > 0,
        shadowMapType: n.shadowMap.type,
        toneMapping: rt,
        useLegacyLights: n._useLegacyLights,
        decodeVideoTexture:
          Te &&
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
  function f(S) {
    const b = [];
    if (
      (S.shaderID ?
        b.push(S.shaderID)
      : (b.push(S.customVertexShaderID), b.push(S.customFragmentShaderID)),
      S.defines !== void 0)
    )
      for (const V in S.defines) (b.push(V), b.push(S.defines[V]));
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
    let V;
    if (b) {
      const Z = hn[b];
      V = yf.clone(Z.uniforms);
    } else V = S.uniforms;
    return V;
  }
  function P(S, b) {
    let V;
    for (let Z = 0, ie = c.length; Z < ie; Z++) {
      const D = c[Z];
      if (D.cacheKey === b) {
        ((V = D), ++V.usedTimes);
        break;
      }
    }
    return (V === void 0 && ((V = new Om(n, b, S, s)), c.push(V)), V);
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
  function H() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: T,
    acquireProgram: P,
    releaseProgram: w,
    releaseShaderCache: A,
    programs: c,
    dispose: H,
  };
}
function km() {
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
  function o(h, d, m, _, g, p) {
    let f = n[e];
    return (
      f === void 0 ?
        ((f = {
          id: h.id,
          object: h,
          geometry: d,
          material: m,
          groupOrder: _,
          renderOrder: h.renderOrder,
          z: g,
          group: p,
        }),
        (n[e] = f))
      : ((f.id = h.id),
        (f.object = h),
        (f.geometry = d),
        (f.material = m),
        (f.groupOrder = _),
        (f.renderOrder = h.renderOrder),
        (f.z = g),
        (f.group = p)),
      e++,
      f
    );
  }
  function a(h, d, m, _, g, p) {
    const f = o(h, d, m, _, g, p);
    m.transmission > 0 ? i.push(f)
    : m.transparent === !0 ? r.push(f)
    : t.push(f);
  }
  function l(h, d, m, _, g, p) {
    const f = o(h, d, m, _, g, p);
    m.transmission > 0 ? i.unshift(f)
    : m.transparent === !0 ? r.unshift(f)
    : t.unshift(f);
  }
  function c(h, d) {
    (t.length > 1 && t.sort(h || Vm),
      i.length > 1 && i.sort(d || Ro),
      r.length > 1 && r.sort(d || Ro));
  }
  function u() {
    for (let h = e, d = n.length; h < d; h++) {
      const m = n[h];
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
          t = { direction: new G(), color: new je() };
          break;
        case "SpotLight":
          t = {
            position: new G(),
            direction: new G(),
            color: new je(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new G(), color: new je(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new G(), skyColor: new je(), groundColor: new je() };
          break;
        case "RectAreaLight":
          t = {
            color: new je(),
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
            shadowMapSize: new Ke(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ke(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ke(),
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
    o = new Et(),
    a = new Et();
  function l(u, h) {
    let d = 0,
      m = 0,
      _ = 0;
    for (let Z = 0; Z < 9; Z++) r.probe[Z].set(0, 0, 0);
    let g = 0,
      p = 0,
      f = 0,
      M = 0,
      x = 0,
      T = 0,
      P = 0,
      w = 0,
      A = 0,
      H = 0,
      S = 0;
    u.sort(Ym);
    const b = h === !0 ? Math.PI : 1;
    for (let Z = 0, ie = u.length; Z < ie; Z++) {
      const D = u[Z],
        N = D.color,
        B = D.intensity,
        X = D.distance,
        $ = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        ((d += N.r * B * b), (m += N.g * B * b), (_ += N.b * B * b));
      else if (D.isLightProbe) {
        for (let J = 0; J < 9; J++)
          r.probe[J].addScaledVector(D.sh.coefficients[J], B);
        S++;
      } else if (D.isDirectionalLight) {
        const J = t.get(D);
        if (
          (J.color.copy(D.color).multiplyScalar(D.intensity * b), D.castShadow)
        ) {
          const j = D.shadow,
            ee = i.get(D);
          ((ee.shadowBias = j.bias),
            (ee.shadowNormalBias = j.normalBias),
            (ee.shadowRadius = j.radius),
            (ee.shadowMapSize = j.mapSize),
            (r.directionalShadow[g] = ee),
            (r.directionalShadowMap[g] = $),
            (r.directionalShadowMatrix[g] = D.shadow.matrix),
            T++);
        }
        ((r.directional[g] = J), g++);
      } else if (D.isSpotLight) {
        const J = t.get(D);
        (J.position.setFromMatrixPosition(D.matrixWorld),
          J.color.copy(N).multiplyScalar(B * b),
          (J.distance = X),
          (J.coneCos = Math.cos(D.angle)),
          (J.penumbraCos = Math.cos(D.angle * (1 - D.penumbra))),
          (J.decay = D.decay),
          (r.spot[f] = J));
        const j = D.shadow;
        if (
          (D.map &&
            ((r.spotLightMap[A] = D.map),
            A++,
            j.updateMatrices(D),
            D.castShadow && H++),
          (r.spotLightMatrix[f] = j.matrix),
          D.castShadow)
        ) {
          const ee = i.get(D);
          ((ee.shadowBias = j.bias),
            (ee.shadowNormalBias = j.normalBias),
            (ee.shadowRadius = j.radius),
            (ee.shadowMapSize = j.mapSize),
            (r.spotShadow[f] = ee),
            (r.spotShadowMap[f] = $),
            w++);
        }
        f++;
      } else if (D.isRectAreaLight) {
        const J = t.get(D);
        (J.color.copy(N).multiplyScalar(B),
          J.halfWidth.set(D.width * 0.5, 0, 0),
          J.halfHeight.set(0, D.height * 0.5, 0),
          (r.rectArea[M] = J),
          M++);
      } else if (D.isPointLight) {
        const J = t.get(D);
        if (
          (J.color.copy(D.color).multiplyScalar(D.intensity * b),
          (J.distance = D.distance),
          (J.decay = D.decay),
          D.castShadow)
        ) {
          const j = D.shadow,
            ee = i.get(D);
          ((ee.shadowBias = j.bias),
            (ee.shadowNormalBias = j.normalBias),
            (ee.shadowRadius = j.radius),
            (ee.shadowMapSize = j.mapSize),
            (ee.shadowCameraNear = j.camera.near),
            (ee.shadowCameraFar = j.camera.far),
            (r.pointShadow[p] = ee),
            (r.pointShadowMap[p] = $),
            (r.pointShadowMatrix[p] = D.shadow.matrix),
            P++);
        }
        ((r.point[p] = J), p++);
      } else if (D.isHemisphereLight) {
        const J = t.get(D);
        (J.skyColor.copy(D.color).multiplyScalar(B * b),
          J.groundColor.copy(D.groundColor).multiplyScalar(B * b),
          (r.hemi[x] = J),
          x++);
      }
    }
    (M > 0 &&
      (e.isWebGL2 ?
        n.has("OES_texture_float_linear") === !0 ?
          ((r.rectAreaLTC1 = le.LTC_FLOAT_1), (r.rectAreaLTC2 = le.LTC_FLOAT_2))
        : ((r.rectAreaLTC1 = le.LTC_HALF_1), (r.rectAreaLTC2 = le.LTC_HALF_2))
      : n.has("OES_texture_float_linear") === !0 ?
        ((r.rectAreaLTC1 = le.LTC_FLOAT_1), (r.rectAreaLTC2 = le.LTC_FLOAT_2))
      : n.has("OES_texture_half_float_linear") === !0 ?
        ((r.rectAreaLTC1 = le.LTC_HALF_1), (r.rectAreaLTC2 = le.LTC_HALF_2))
      : console.error(
          "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.",
        )),
      (r.ambient[0] = d),
      (r.ambient[1] = m),
      (r.ambient[2] = _));
    const V = r.hash;
    (V.directionalLength !== g ||
      V.pointLength !== p ||
      V.spotLength !== f ||
      V.rectAreaLength !== M ||
      V.hemiLength !== x ||
      V.numDirectionalShadows !== T ||
      V.numPointShadows !== P ||
      V.numSpotShadows !== w ||
      V.numSpotMaps !== A ||
      V.numLightProbes !== S) &&
      ((r.directional.length = g),
      (r.spot.length = f),
      (r.rectArea.length = M),
      (r.point.length = p),
      (r.hemi.length = x),
      (r.directionalShadow.length = T),
      (r.directionalShadowMap.length = T),
      (r.pointShadow.length = P),
      (r.pointShadowMap.length = P),
      (r.spotShadow.length = w),
      (r.spotShadowMap.length = w),
      (r.directionalShadowMatrix.length = T),
      (r.pointShadowMatrix.length = P),
      (r.spotLightMatrix.length = w + A - H),
      (r.spotLightMap.length = A),
      (r.numSpotLightShadowsWithMaps = H),
      (r.numLightProbes = S),
      (V.directionalLength = g),
      (V.pointLength = p),
      (V.spotLength = f),
      (V.rectAreaLength = M),
      (V.hemiLength = x),
      (V.numDirectionalShadows = T),
      (V.numPointShadows = P),
      (V.numSpotShadows = w),
      (V.numSpotMaps = A),
      (V.numLightProbes = S),
      (r.version = qm++));
  }
  function c(u, h) {
    let d = 0,
      m = 0,
      _ = 0,
      g = 0,
      p = 0;
    const f = h.matrixWorldInverse;
    for (let M = 0, x = u.length; M < x; M++) {
      const T = u[M];
      if (T.isDirectionalLight) {
        const P = r.directional[d];
        (P.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          P.direction.sub(s),
          P.direction.transformDirection(f),
          d++);
      } else if (T.isSpotLight) {
        const P = r.spot[_];
        (P.position.setFromMatrixPosition(T.matrixWorld),
          P.position.applyMatrix4(f),
          P.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          P.direction.sub(s),
          P.direction.transformDirection(f),
          _++);
      } else if (T.isRectAreaLight) {
        const P = r.rectArea[g];
        (P.position.setFromMatrixPosition(T.matrixWorld),
          P.position.applyMatrix4(f),
          a.identity(),
          o.copy(T.matrixWorld),
          o.premultiply(f),
          a.extractRotation(o),
          P.halfWidth.set(T.width * 0.5, 0, 0),
          P.halfHeight.set(0, T.height * 0.5, 0),
          P.halfWidth.applyMatrix4(a),
          P.halfHeight.applyMatrix4(a),
          g++);
      } else if (T.isPointLight) {
        const P = r.point[m];
        (P.position.setFromMatrixPosition(T.matrixWorld),
          P.position.applyMatrix4(f),
          m++);
      } else if (T.isHemisphereLight) {
        const P = r.hemi[p];
        (P.direction.setFromMatrixPosition(T.matrixWorld),
          P.direction.transformDirection(f),
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
  function o(h) {
    i.push(h);
  }
  function a(h) {
    r.push(h);
  }
  function l(h) {
    t.setup(i, h);
  }
  function c(h) {
    t.setupView(i, h);
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
  const r = new Ke(),
    s = new Ke(),
    o = new Ct(),
    a = new Zm({ depthPacking: qu }),
    l = new Jm(),
    c = {},
    u = t.maxTextureSize,
    h = { [Gn]: Wt, [Wt]: Gn, [dn]: dn },
    d = new ii({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ke() },
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
  let f = this.type;
  this.render = function (w, A, H) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const S = n.getRenderTarget(),
      b = n.getActiveCubeFace(),
      V = n.getActiveMipmapLevel(),
      Z = n.state;
    (Z.setBlending(Fn),
      Z.buffers.color.setClear(1, 1, 1, 1),
      Z.buffers.depth.setTest(!0),
      Z.setScissorTest(!1));
    const ie = f !== En && this.type === En,
      D = f === En && this.type !== En;
    for (let N = 0, B = w.length; N < B; N++) {
      const X = w[N],
        $ = X.shadow;
      if ($ === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if ($.autoUpdate === !1 && $.needsUpdate === !1) continue;
      r.copy($.mapSize);
      const J = $.getFrameExtents();
      if (
        (r.multiply(J),
        s.copy($.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / J.x)),
            (r.x = s.x * J.x),
            ($.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / J.y)),
            (r.y = s.y * J.y),
            ($.mapSize.y = s.y))),
        $.map === null || ie === !0 || D === !0)
      ) {
        const ee = this.type !== En ? { minFilter: zt, magFilter: zt } : {};
        ($.map !== null && $.map.dispose(),
          ($.map = new ni(r.x, r.y, ee)),
          ($.map.texture.name = X.name + ".shadowMap"),
          $.camera.updateProjectionMatrix());
      }
      (n.setRenderTarget($.map), n.clear());
      const j = $.getViewportCount();
      for (let ee = 0; ee < j; ee++) {
        const Q = $.getViewport(ee);
        (o.set(s.x * Q.x, s.y * Q.y, s.x * Q.z, s.y * Q.w),
          Z.viewport(o),
          $.updateMatrices(X, ee),
          (i = $.getFrustum()),
          T(A, H, $.camera, X, this.type));
      }
      ($.isPointLightShadow !== !0 && this.type === En && M($, H),
        ($.needsUpdate = !1));
    }
    ((f = this.type), (p.needsUpdate = !1), n.setRenderTarget(S, b, V));
  };
  function M(w, A) {
    const H = e.update(g);
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
      n.renderBufferDirect(A, null, H, d, g, null),
      (m.uniforms.shadow_pass.value = w.mapPass.texture),
      (m.uniforms.resolution.value = w.mapSize),
      (m.uniforms.radius.value = w.radius),
      n.setRenderTarget(w.map),
      n.clear(),
      n.renderBufferDirect(A, null, H, m, g, null));
  }
  function x(w, A, H, S) {
    let b = null;
    const V =
      H.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (V !== void 0) b = V;
    else if (
      ((b = H.isPointLight === !0 ? l : a),
      (n.localClippingEnabled &&
        A.clipShadows === !0 &&
        Array.isArray(A.clippingPlanes) &&
        A.clippingPlanes.length !== 0) ||
        (A.displacementMap && A.displacementScale !== 0) ||
        (A.alphaMap && A.alphaTest > 0) ||
        (A.map && A.alphaTest > 0))
    ) {
      const Z = b.uuid,
        ie = A.uuid;
      let D = c[Z];
      D === void 0 && ((D = {}), (c[Z] = D));
      let N = D[ie];
      (N === void 0 &&
        ((N = b.clone()), (D[ie] = N), A.addEventListener("dispose", P)),
        (b = N));
    }
    if (
      ((b.visible = A.visible),
      (b.wireframe = A.wireframe),
      S === En ?
        (b.side = A.shadowSide !== null ? A.shadowSide : A.side)
      : (b.side = A.shadowSide !== null ? A.shadowSide : h[A.side]),
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
      H.isPointLight === !0 && b.isMeshDistanceMaterial === !0)
    ) {
      const Z = n.properties.get(b);
      Z.light = H;
    }
    return b;
  }
  function T(w, A, H, S, b) {
    if (w.visible === !1) return;
    if (
      w.layers.test(A.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && b === En)) &&
      (!w.frustumCulled || i.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, w.matrixWorld);
      const ie = e.update(w),
        D = w.material;
      if (Array.isArray(D)) {
        const N = ie.groups;
        for (let B = 0, X = N.length; B < X; B++) {
          const $ = N[B],
            J = D[$.materialIndex];
          if (J && J.visible) {
            const j = x(w, J, S, b);
            (w.onBeforeShadow(n, w, A, H, ie, j, $),
              n.renderBufferDirect(H, null, ie, j, w, $),
              w.onAfterShadow(n, w, A, H, ie, j, $));
          }
        }
      } else if (D.visible) {
        const N = x(w, D, S, b);
        (w.onBeforeShadow(n, w, A, H, ie, N, null),
          n.renderBufferDirect(H, null, ie, N, w, null),
          w.onAfterShadow(n, w, A, H, ie, N, null));
      }
    }
    const Z = w.children;
    for (let ie = 0, D = Z.length; ie < D; ie++) T(Z[ie], A, H, S, b);
  }
  function P(w) {
    w.target.removeEventListener("dispose", P);
    for (const H in c) {
      const S = c[H],
        b = w.target.uuid;
      b in S && (S[b].dispose(), delete S[b]);
    }
  }
}
function n_(n, e, t) {
  const i = t.isWebGL2;
  function r() {
    let C = !1;
    const ue = new Ct();
    let fe = null;
    const Ce = new Ct(0, 0, 0, 0);
    return {
      setMask: function (Ae) {
        fe !== Ae && !C && (n.colorMask(Ae, Ae, Ae, Ae), (fe = Ae));
      },
      setLocked: function (Ae) {
        C = Ae;
      },
      setClear: function (Ae, it, rt, bt, Nt) {
        (Nt === !0 && ((Ae *= bt), (it *= bt), (rt *= bt)),
          ue.set(Ae, it, rt, bt),
          Ce.equals(ue) === !1 && (n.clearColor(Ae, it, rt, bt), Ce.copy(ue)));
      },
      reset: function () {
        ((C = !1), (fe = null), Ce.set(-1, 0, 0, 0));
      },
    };
  }
  function s() {
    let C = !1,
      ue = null,
      fe = null,
      Ce = null;
    return {
      setTest: function (Ae) {
        Ae ? Pe(n.DEPTH_TEST) : Te(n.DEPTH_TEST);
      },
      setMask: function (Ae) {
        ue !== Ae && !C && (n.depthMask(Ae), (ue = Ae));
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
        Ce !== Ae && (n.clearDepth(Ae), (Ce = Ae));
      },
      reset: function () {
        ((C = !1), (ue = null), (fe = null), (Ce = null));
      },
    };
  }
  function o() {
    let C = !1,
      ue = null,
      fe = null,
      Ce = null,
      Ae = null,
      it = null,
      rt = null,
      bt = null,
      Nt = null;
    return {
      setTest: function (st) {
        C || (st ? Pe(n.STENCIL_TEST) : Te(n.STENCIL_TEST));
      },
      setMask: function (st) {
        ue !== st && !C && (n.stencilMask(st), (ue = st));
      },
      setFunc: function (st, Ft, fn) {
        (fe !== st || Ce !== Ft || Ae !== fn) &&
          (n.stencilFunc(st, Ft, fn), (fe = st), (Ce = Ft), (Ae = fn));
      },
      setOp: function (st, Ft, fn) {
        (it !== st || rt !== Ft || bt !== fn) &&
          (n.stencilOp(st, Ft, fn), (it = st), (rt = Ft), (bt = fn));
      },
      setLocked: function (st) {
        C = st;
      },
      setClear: function (st) {
        Nt !== st && (n.clearStencil(st), (Nt = st));
      },
      reset: function () {
        ((C = !1),
          (ue = null),
          (fe = null),
          (Ce = null),
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
    h = new WeakMap();
  let d = {},
    m = {},
    _ = new WeakMap(),
    g = [],
    p = null,
    f = !1,
    M = null,
    x = null,
    T = null,
    P = null,
    w = null,
    A = null,
    H = null,
    S = new je(0, 0, 0),
    b = 0,
    V = !1,
    Z = null,
    ie = null,
    D = null,
    N = null,
    B = null;
  const X = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1,
    J = 0;
  const j = n.getParameter(n.VERSION);
  j.indexOf("WebGL") !== -1 ?
    ((J = parseFloat(/^WebGL (\d)/.exec(j)[1])), ($ = J >= 1))
  : j.indexOf("OpenGL ES") !== -1 &&
    ((J = parseFloat(/^OpenGL ES (\d)/.exec(j)[1])), ($ = J >= 2));
  let ee = null,
    Q = {};
  const I = n.getParameter(n.SCISSOR_BOX),
    K = n.getParameter(n.VIEWPORT),
    Y = new Ct().fromArray(I),
    ce = new Ct().fromArray(K);
  function me(C, ue, fe, Ce) {
    const Ae = new Uint8Array(4),
      it = n.createTexture();
    (n.bindTexture(C, it),
      n.texParameteri(C, n.TEXTURE_MIN_FILTER, n.NEAREST),
      n.texParameteri(C, n.TEXTURE_MAG_FILTER, n.NEAREST));
    for (let rt = 0; rt < fe; rt++)
      i && (C === n.TEXTURE_3D || C === n.TEXTURE_2D_ARRAY) ?
        n.texImage3D(ue, 0, n.RGBA, 1, 1, Ce, 0, n.RGBA, n.UNSIGNED_BYTE, Ae)
      : n.texImage2D(ue + rt, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, Ae);
    return it;
  }
  const Me = {};
  ((Me[n.TEXTURE_2D] = me(n.TEXTURE_2D, n.TEXTURE_2D, 1)),
    (Me[n.TEXTURE_CUBE_MAP] = me(
      n.TEXTURE_CUBE_MAP,
      n.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    i &&
      ((Me[n.TEXTURE_2D_ARRAY] = me(
        n.TEXTURE_2D_ARRAY,
        n.TEXTURE_2D_ARRAY,
        1,
        1,
      )),
      (Me[n.TEXTURE_3D] = me(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Pe(n.DEPTH_TEST),
    l.setFunc(Dr),
    Oe(!1),
    y(ua),
    Pe(n.CULL_FACE),
    ve(Fn));
  function Pe(C) {
    d[C] !== !0 && (n.enable(C), (d[C] = !0));
  }
  function Te(C) {
    d[C] !== !1 && (n.disable(C), (d[C] = !1));
  }
  function $e(C, ue) {
    return m[C] !== ue ?
        (n.bindFramebuffer(C, ue),
        (m[C] = ue),
        i &&
          (C === n.DRAW_FRAMEBUFFER && (m[n.FRAMEBUFFER] = ue),
          C === n.FRAMEBUFFER && (m[n.DRAW_FRAMEBUFFER] = ue)),
        !0)
      : !1;
  }
  function L(C, ue) {
    let fe = g,
      Ce = !1;
    if (C)
      if (
        ((fe = _.get(ue)),
        fe === void 0 && ((fe = []), _.set(ue, fe)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const Ae = C.texture;
        if (fe.length !== Ae.length || fe[0] !== n.COLOR_ATTACHMENT0) {
          for (let it = 0, rt = Ae.length; it < rt; it++)
            fe[it] = n.COLOR_ATTACHMENT0 + it;
          ((fe.length = Ae.length), (Ce = !0));
        }
      } else
        fe[0] !== n.COLOR_ATTACHMENT0 &&
          ((fe[0] = n.COLOR_ATTACHMENT0), (Ce = !0));
    else fe[0] !== n.BACK && ((fe[0] = n.BACK), (Ce = !0));
    Ce &&
      (t.isWebGL2 ?
        n.drawBuffers(fe)
      : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe));
  }
  function Ze(C) {
    return p !== C ? (n.useProgram(C), (p = C), !0) : !1;
  }
  const xe = {
    [jn]: n.FUNC_ADD,
    [ou]: n.FUNC_SUBTRACT,
    [lu]: n.FUNC_REVERSE_SUBTRACT,
  };
  if (i) ((xe[pa] = n.MIN), (xe[ma] = n.MAX));
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((xe[pa] = C.MIN_EXT), (xe[ma] = C.MAX_EXT));
  }
  const Se = {
    [cu]: n.ZERO,
    [uu]: n.ONE,
    [fu]: n.SRC_COLOR,
    [Ps]: n.SRC_ALPHA,
    [gu]: n.SRC_ALPHA_SATURATE,
    [mu]: n.DST_COLOR,
    [du]: n.DST_ALPHA,
    [hu]: n.ONE_MINUS_SRC_COLOR,
    [Ds]: n.ONE_MINUS_SRC_ALPHA,
    [_u]: n.ONE_MINUS_DST_COLOR,
    [pu]: n.ONE_MINUS_DST_ALPHA,
    [vu]: n.CONSTANT_COLOR,
    [xu]: n.ONE_MINUS_CONSTANT_COLOR,
    [Mu]: n.CONSTANT_ALPHA,
    [Su]: n.ONE_MINUS_CONSTANT_ALPHA,
  };
  function ve(C, ue, fe, Ce, Ae, it, rt, bt, Nt, st) {
    if (C === Fn) {
      f === !0 && (Te(n.BLEND), (f = !1));
      return;
    }
    if ((f === !1 && (Pe(n.BLEND), (f = !0)), C !== au)) {
      if (C !== M || st !== V) {
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
            case fa:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case ha:
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
            case fa:
              n.blendFunc(n.SRC_ALPHA, n.ONE);
              break;
            case ha:
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
          (P = null),
          (A = null),
          (H = null),
          S.set(0, 0, 0),
          (b = 0),
          (M = C),
          (V = st));
      }
      return;
    }
    ((Ae = Ae || ue),
      (it = it || fe),
      (rt = rt || Ce),
      (ue !== x || Ae !== w) &&
        (n.blendEquationSeparate(xe[ue], xe[Ae]), (x = ue), (w = Ae)),
      (fe !== T || Ce !== P || it !== A || rt !== H) &&
        (n.blendFuncSeparate(Se[fe], Se[Ce], Se[it], Se[rt]),
        (T = fe),
        (P = Ce),
        (A = it),
        (H = rt)),
      (bt.equals(S) === !1 || Nt !== b) &&
        (n.blendColor(bt.r, bt.g, bt.b, Nt), S.copy(bt), (b = Nt)),
      (M = C),
      (V = !1));
  }
  function pt(C, ue) {
    C.side === dn ? Te(n.CULL_FACE) : Pe(n.CULL_FACE);
    let fe = C.side === Wt;
    (ue && (fe = !fe),
      Oe(fe),
      C.blending === Ci && C.transparent === !1 ?
        ve(Fn)
      : ve(
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
    const Ce = C.stencilWrite;
    (c.setTest(Ce),
      Ce &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      O(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ?
        Pe(n.SAMPLE_ALPHA_TO_COVERAGE)
      : Te(n.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Oe(C) {
    Z !== C && (C ? n.frontFace(n.CW) : n.frontFace(n.CCW), (Z = C));
  }
  function y(C) {
    (C !== iu ?
      (Pe(n.CULL_FACE),
      C !== ie &&
        (C === ua ? n.cullFace(n.BACK)
        : C === ru ? n.cullFace(n.FRONT)
        : n.cullFace(n.FRONT_AND_BACK)))
    : Te(n.CULL_FACE),
      (ie = C));
  }
  function v(C) {
    C !== D && ($ && n.lineWidth(C), (D = C));
  }
  function O(C, ue, fe) {
    C ?
      (Pe(n.POLYGON_OFFSET_FILL),
      (N !== ue || B !== fe) && (n.polygonOffset(ue, fe), (N = ue), (B = fe)))
    : Te(n.POLYGON_OFFSET_FILL);
  }
  function re(C) {
    C ? Pe(n.SCISSOR_TEST) : Te(n.SCISSOR_TEST);
  }
  function ne(C) {
    (C === void 0 && (C = n.TEXTURE0 + X - 1),
      ee !== C && (n.activeTexture(C), (ee = C)));
  }
  function se(C, ue, fe) {
    fe === void 0 && (ee === null ? (fe = n.TEXTURE0 + X - 1) : (fe = ee));
    let Ce = Q[fe];
    (Ce === void 0 && ((Ce = { type: void 0, texture: void 0 }), (Q[fe] = Ce)),
      (Ce.type !== C || Ce.texture !== ue) &&
        (ee !== fe && (n.activeTexture(fe), (ee = fe)),
        n.bindTexture(C, ue || Me[C]),
        (Ce.type = C),
        (Ce.texture = ue)));
  }
  function Ee() {
    const C = Q[ee];
    C !== void 0 &&
      C.type !== void 0 &&
      (n.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function he() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Re() {
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
  function te() {
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
  function ge() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ne(C) {
    Y.equals(C) === !1 && (n.scissor(C.x, C.y, C.z, C.w), Y.copy(C));
  }
  function Je(C) {
    ce.equals(C) === !1 && (n.viewport(C.x, C.y, C.z, C.w), ce.copy(C));
  }
  function _t(C, ue) {
    let fe = h.get(ue);
    fe === void 0 && ((fe = new WeakMap()), h.set(ue, fe));
    let Ce = fe.get(C);
    Ce === void 0 && ((Ce = n.getUniformBlockIndex(ue, C.name)), fe.set(C, Ce));
  }
  function Ge(C, ue) {
    const Ce = h.get(ue).get(C);
    u.get(ue) !== Ce &&
      (n.uniformBlockBinding(ue, Ce, C.__bindingPointIndex), u.set(ue, Ce));
  }
  function oe() {
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
      (ee = null),
      (Q = {}),
      (m = {}),
      (_ = new WeakMap()),
      (g = []),
      (p = null),
      (f = !1),
      (M = null),
      (x = null),
      (T = null),
      (P = null),
      (w = null),
      (A = null),
      (H = null),
      (S = new je(0, 0, 0)),
      (b = 0),
      (V = !1),
      (Z = null),
      (ie = null),
      (D = null),
      (N = null),
      (B = null),
      Y.set(0, 0, n.canvas.width, n.canvas.height),
      ce.set(0, 0, n.canvas.width, n.canvas.height),
      a.reset(),
      l.reset(),
      c.reset());
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: Pe,
    disable: Te,
    bindFramebuffer: $e,
    drawBuffers: L,
    useProgram: Ze,
    setBlending: ve,
    setMaterial: pt,
    setFlipSided: Oe,
    setCullFace: y,
    setLineWidth: v,
    setPolygonOffset: O,
    setScissorTest: re,
    activeTexture: ne,
    bindTexture: se,
    unbindTexture: Ee,
    compressedTexImage2D: he,
    compressedTexImage3D: _e,
    texImage2D: be,
    texImage3D: ge,
    updateUBOMapping: _t,
    uniformBlockBinding: Ge,
    texStorage2D: We,
    texStorage3D: De,
    texSubImage2D: Re,
    texSubImage3D: Be,
    compressedTexSubImage2D: te,
    compressedTexSubImage3D: et,
    scissor: Ne,
    viewport: Je,
    reset: oe,
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
  let h;
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
  function g(y, v, O, re) {
    let ne = 1;
    if (
      ((y.width > re || y.height > re) &&
        (ne = re / Math.max(y.width, y.height)),
      ne < 1 || v === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && y instanceof ImageBitmap)
      ) {
        const se = v ? zs : Math.floor,
          Ee = se(ne * y.width),
          he = se(ne * y.height);
        h === void 0 && (h = _(Ee, he));
        const _e = O ? _(Ee, he) : h;
        return (
          (_e.width = Ee),
          (_e.height = he),
          _e.getContext("2d").drawImage(y, 0, 0, Ee, he),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              y.width +
              "x" +
              y.height +
              ") to (" +
              Ee +
              "x" +
              he +
              ").",
          ),
          _e
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
  function f(y) {
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
  function T(y, v, O, re, ne = !1) {
    if (a === !1) return v;
    if (y !== null) {
      if (n[y] !== void 0) return n[y];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          y +
          "'",
      );
    }
    let se = v;
    if (
      (v === n.RED &&
        (O === n.FLOAT && (se = n.R32F),
        O === n.HALF_FLOAT && (se = n.R16F),
        O === n.UNSIGNED_BYTE && (se = n.R8)),
      v === n.RED_INTEGER &&
        (O === n.UNSIGNED_BYTE && (se = n.R8UI),
        O === n.UNSIGNED_SHORT && (se = n.R16UI),
        O === n.UNSIGNED_INT && (se = n.R32UI),
        O === n.BYTE && (se = n.R8I),
        O === n.SHORT && (se = n.R16I),
        O === n.INT && (se = n.R32I)),
      v === n.RG &&
        (O === n.FLOAT && (se = n.RG32F),
        O === n.HALF_FLOAT && (se = n.RG16F),
        O === n.UNSIGNED_BYTE && (se = n.RG8)),
      v === n.RGBA)
    ) {
      const Ee = ne ? Ur : tt.getTransfer(re);
      (O === n.FLOAT && (se = n.RGBA32F),
        O === n.HALF_FLOAT && (se = n.RGBA16F),
        O === n.UNSIGNED_BYTE && (se = Ee === lt ? n.SRGB8_ALPHA8 : n.RGBA8),
        O === n.UNSIGNED_SHORT_4_4_4_4 && (se = n.RGBA4),
        O === n.UNSIGNED_SHORT_5_5_5_1 && (se = n.RGB5_A1));
    }
    return (
      (se === n.R16F ||
        se === n.R32F ||
        se === n.RG16F ||
        se === n.RG32F ||
        se === n.RGBA16F ||
        se === n.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      se
    );
  }
  function P(y, v, O) {
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
  function H(y) {
    const v = y.target;
    (v.removeEventListener("dispose", H), V(v));
  }
  function S(y) {
    const v = i.get(y);
    if (v.__webglInit === void 0) return;
    const O = y.source,
      re = d.get(O);
    if (re) {
      const ne = re[v.__cacheKey];
      (ne.usedTimes--,
        ne.usedTimes === 0 && b(y),
        Object.keys(re).length === 0 && d.delete(O));
    }
    i.remove(y);
  }
  function b(y) {
    const v = i.get(y);
    n.deleteTexture(v.__webglTexture);
    const O = y.source,
      re = d.get(O);
    (delete re[v.__cacheKey], o.memory.textures--);
  }
  function V(y) {
    const v = y.texture,
      O = i.get(y),
      re = i.get(v);
    if (
      (re.__webglTexture !== void 0 &&
        (n.deleteTexture(re.__webglTexture), o.memory.textures--),
      y.depthTexture && y.depthTexture.dispose(),
      y.isWebGLCubeRenderTarget)
    )
      for (let ne = 0; ne < 6; ne++) {
        if (Array.isArray(O.__webglFramebuffer[ne]))
          for (let se = 0; se < O.__webglFramebuffer[ne].length; se++)
            n.deleteFramebuffer(O.__webglFramebuffer[ne][se]);
        else n.deleteFramebuffer(O.__webglFramebuffer[ne]);
        O.__webglDepthbuffer && n.deleteRenderbuffer(O.__webglDepthbuffer[ne]);
      }
    else {
      if (Array.isArray(O.__webglFramebuffer))
        for (let ne = 0; ne < O.__webglFramebuffer.length; ne++)
          n.deleteFramebuffer(O.__webglFramebuffer[ne]);
      else n.deleteFramebuffer(O.__webglFramebuffer);
      if (
        (O.__webglDepthbuffer && n.deleteRenderbuffer(O.__webglDepthbuffer),
        O.__webglMultisampledFramebuffer &&
          n.deleteFramebuffer(O.__webglMultisampledFramebuffer),
        O.__webglColorRenderbuffer)
      )
        for (let ne = 0; ne < O.__webglColorRenderbuffer.length; ne++)
          O.__webglColorRenderbuffer[ne] &&
            n.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);
      O.__webglDepthRenderbuffer &&
        n.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let ne = 0, se = v.length; ne < se; ne++) {
        const Ee = i.get(v[ne]);
        (Ee.__webglTexture &&
          (n.deleteTexture(Ee.__webglTexture), o.memory.textures--),
          i.remove(v[ne]));
      }
    (i.remove(v), i.remove(y));
  }
  let Z = 0;
  function ie() {
    Z = 0;
  }
  function D() {
    const y = Z;
    return (
      y >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            y +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (Z += 1),
      y
    );
  }
  function N(y) {
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
      (y.isVideoTexture && pt(y),
      y.isRenderTargetTexture === !1 &&
        y.version > 0 &&
        O.__version !== y.version)
    ) {
      const re = y.image;
      if (re === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (re.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        Y(O, y, v);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, O.__webglTexture, n.TEXTURE0 + v);
  }
  function X(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      Y(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, O.__webglTexture, n.TEXTURE0 + v);
  }
  function $(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      Y(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, O.__webglTexture, n.TEXTURE0 + v);
  }
  function J(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      ce(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, O.__webglTexture, n.TEXTURE0 + v);
  }
  const j = { [Ns]: n.REPEAT, [cn]: n.CLAMP_TO_EDGE, [Fs]: n.MIRRORED_REPEAT },
    ee = {
      [zt]: n.NEAREST,
      [_a]: n.NEAREST_MIPMAP_NEAREST,
      [Kr]: n.NEAREST_MIPMAP_LINEAR,
      [en]: n.LINEAR,
      [Ou]: n.LINEAR_MIPMAP_NEAREST,
      [ji]: n.LINEAR_MIPMAP_LINEAR,
    },
    Q = {
      [ju]: n.NEVER,
      [tf]: n.ALWAYS,
      [Ku]: n.LESS,
      [vl]: n.LEQUAL,
      [Zu]: n.EQUAL,
      [ef]: n.GEQUAL,
      [Ju]: n.GREATER,
      [Qu]: n.NOTEQUAL,
    };
  function I(y, v, O) {
    if (
      (O ?
        (n.texParameteri(y, n.TEXTURE_WRAP_S, j[v.wrapS]),
        n.texParameteri(y, n.TEXTURE_WRAP_T, j[v.wrapT]),
        (y === n.TEXTURE_3D || y === n.TEXTURE_2D_ARRAY) &&
          n.texParameteri(y, n.TEXTURE_WRAP_R, j[v.wrapR]),
        n.texParameteri(y, n.TEXTURE_MAG_FILTER, ee[v.magFilter]),
        n.texParameteri(y, n.TEXTURE_MIN_FILTER, ee[v.minFilter]))
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
      const re = e.get("EXT_texture_filter_anisotropic");
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
          re.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(v.anisotropy, r.getMaxAnisotropy()),
        ),
        (i.get(v).__currentAnisotropy = v.anisotropy));
    }
  }
  function K(y, v) {
    let O = !1;
    y.__webglInit === void 0 &&
      ((y.__webglInit = !0), v.addEventListener("dispose", A));
    const re = v.source;
    let ne = d.get(re);
    ne === void 0 && ((ne = {}), d.set(re, ne));
    const se = N(v);
    if (se !== y.__cacheKey) {
      (ne[se] === void 0 &&
        ((ne[se] = { texture: n.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (O = !0)),
        ne[se].usedTimes++);
      const Ee = ne[y.__cacheKey];
      (Ee !== void 0 &&
        (ne[y.__cacheKey].usedTimes--, Ee.usedTimes === 0 && b(v)),
        (y.__cacheKey = se),
        (y.__webglTexture = ne[se].texture));
    }
    return O;
  }
  function Y(y, v, O) {
    let re = n.TEXTURE_2D;
    ((v.isDataArrayTexture || v.isCompressedArrayTexture) &&
      (re = n.TEXTURE_2D_ARRAY),
      v.isData3DTexture && (re = n.TEXTURE_3D));
    const ne = K(y, v),
      se = v.source;
    t.bindTexture(re, y.__webglTexture, n.TEXTURE0 + O);
    const Ee = i.get(se);
    if (se.version !== Ee.__version || ne === !0) {
      t.activeTexture(n.TEXTURE0 + O);
      const he = tt.getPrimaries(tt.workingColorSpace),
        _e = v.colorSpace === nn ? null : tt.getPrimaries(v.colorSpace),
        Re =
          v.colorSpace === nn || he === _e ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Re));
      const Be = f(v) && p(v.image) === !1;
      let te = g(v.image, Be, !1, r.maxTextureSize);
      te = Oe(v, te);
      const et = p(te) || a,
        We = s.convert(v.format, v.colorSpace);
      let De = s.convert(v.type),
        be = T(v.internalFormat, We, De, v.colorSpace, v.isVideoTexture);
      I(re, v, et);
      let ge;
      const Ne = v.mipmaps,
        Je = a && v.isVideoTexture !== !0 && be !== ml,
        _t = Ee.__version === void 0 || ne === !0,
        Ge = P(v, te, et);
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
          _t &&
            (Je ?
              t.texStorage2D(n.TEXTURE_2D, 1, be, te.width, te.height)
            : t.texImage2D(
                n.TEXTURE_2D,
                0,
                be,
                te.width,
                te.height,
                0,
                We,
                De,
                null,
              )));
      else if (v.isDataTexture)
        if (Ne.length > 0 && et) {
          Je &&
            _t &&
            t.texStorage2D(n.TEXTURE_2D, Ge, be, Ne[0].width, Ne[0].height);
          for (let oe = 0, C = Ne.length; oe < C; oe++)
            ((ge = Ne[oe]),
              Je ?
                t.texSubImage2D(
                  n.TEXTURE_2D,
                  oe,
                  0,
                  0,
                  ge.width,
                  ge.height,
                  We,
                  De,
                  ge.data,
                )
              : t.texImage2D(
                  n.TEXTURE_2D,
                  oe,
                  be,
                  ge.width,
                  ge.height,
                  0,
                  We,
                  De,
                  ge.data,
                ));
          v.generateMipmaps = !1;
        } else
          Je ?
            (_t && t.texStorage2D(n.TEXTURE_2D, Ge, be, te.width, te.height),
            t.texSubImage2D(
              n.TEXTURE_2D,
              0,
              0,
              0,
              te.width,
              te.height,
              We,
              De,
              te.data,
            ))
          : t.texImage2D(
              n.TEXTURE_2D,
              0,
              be,
              te.width,
              te.height,
              0,
              We,
              De,
              te.data,
            );
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Je &&
            _t &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ge,
              be,
              Ne[0].width,
              Ne[0].height,
              te.depth,
            );
          for (let oe = 0, C = Ne.length; oe < C; oe++)
            ((ge = Ne[oe]),
              v.format !== un ?
                We !== null ?
                  Je ?
                    t.compressedTexSubImage3D(
                      n.TEXTURE_2D_ARRAY,
                      oe,
                      0,
                      0,
                      0,
                      ge.width,
                      ge.height,
                      te.depth,
                      We,
                      ge.data,
                      0,
                      0,
                    )
                  : t.compressedTexImage3D(
                      n.TEXTURE_2D_ARRAY,
                      oe,
                      be,
                      ge.width,
                      ge.height,
                      te.depth,
                      0,
                      ge.data,
                      0,
                      0,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                  )
              : Je ?
                t.texSubImage3D(
                  n.TEXTURE_2D_ARRAY,
                  oe,
                  0,
                  0,
                  0,
                  ge.width,
                  ge.height,
                  te.depth,
                  We,
                  De,
                  ge.data,
                )
              : t.texImage3D(
                  n.TEXTURE_2D_ARRAY,
                  oe,
                  be,
                  ge.width,
                  ge.height,
                  te.depth,
                  0,
                  We,
                  De,
                  ge.data,
                ));
        } else {
          Je &&
            _t &&
            t.texStorage2D(n.TEXTURE_2D, Ge, be, Ne[0].width, Ne[0].height);
          for (let oe = 0, C = Ne.length; oe < C; oe++)
            ((ge = Ne[oe]),
              v.format !== un ?
                We !== null ?
                  Je ?
                    t.compressedTexSubImage2D(
                      n.TEXTURE_2D,
                      oe,
                      0,
                      0,
                      ge.width,
                      ge.height,
                      We,
                      ge.data,
                    )
                  : t.compressedTexImage2D(
                      n.TEXTURE_2D,
                      oe,
                      be,
                      ge.width,
                      ge.height,
                      0,
                      ge.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                  )
              : Je ?
                t.texSubImage2D(
                  n.TEXTURE_2D,
                  oe,
                  0,
                  0,
                  ge.width,
                  ge.height,
                  We,
                  De,
                  ge.data,
                )
              : t.texImage2D(
                  n.TEXTURE_2D,
                  oe,
                  be,
                  ge.width,
                  ge.height,
                  0,
                  We,
                  De,
                  ge.data,
                ));
        }
      else if (v.isDataArrayTexture)
        Je ?
          (_t &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ge,
              be,
              te.width,
              te.height,
              te.depth,
            ),
          t.texSubImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            0,
            0,
            0,
            te.width,
            te.height,
            te.depth,
            We,
            De,
            te.data,
          ))
        : t.texImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            be,
            te.width,
            te.height,
            te.depth,
            0,
            We,
            De,
            te.data,
          );
      else if (v.isData3DTexture)
        Je ?
          (_t &&
            t.texStorage3D(n.TEXTURE_3D, Ge, be, te.width, te.height, te.depth),
          t.texSubImage3D(
            n.TEXTURE_3D,
            0,
            0,
            0,
            0,
            te.width,
            te.height,
            te.depth,
            We,
            De,
            te.data,
          ))
        : t.texImage3D(
            n.TEXTURE_3D,
            0,
            be,
            te.width,
            te.height,
            te.depth,
            0,
            We,
            De,
            te.data,
          );
      else if (v.isFramebufferTexture) {
        if (_t)
          if (Je) t.texStorage2D(n.TEXTURE_2D, Ge, be, te.width, te.height);
          else {
            let oe = te.width,
              C = te.height;
            for (let ue = 0; ue < Ge; ue++)
              (t.texImage2D(n.TEXTURE_2D, ue, be, oe, C, 0, We, De, null),
                (oe >>= 1),
                (C >>= 1));
          }
      } else if (Ne.length > 0 && et) {
        Je &&
          _t &&
          t.texStorage2D(n.TEXTURE_2D, Ge, be, Ne[0].width, Ne[0].height);
        for (let oe = 0, C = Ne.length; oe < C; oe++)
          ((ge = Ne[oe]),
            Je ?
              t.texSubImage2D(n.TEXTURE_2D, oe, 0, 0, We, De, ge)
            : t.texImage2D(n.TEXTURE_2D, oe, be, We, De, ge));
        v.generateMipmaps = !1;
      } else
        Je ?
          (_t && t.texStorage2D(n.TEXTURE_2D, Ge, be, te.width, te.height),
          t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, We, De, te))
        : t.texImage2D(n.TEXTURE_2D, 0, be, We, De, te);
      (M(v, et) && x(re),
        (Ee.__version = se.version),
        v.onUpdate && v.onUpdate(v));
    }
    y.__version = v.version;
  }
  function ce(y, v, O) {
    if (v.image.length !== 6) return;
    const re = K(y, v),
      ne = v.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, y.__webglTexture, n.TEXTURE0 + O);
    const se = i.get(ne);
    if (ne.version !== se.__version || re === !0) {
      t.activeTexture(n.TEXTURE0 + O);
      const Ee = tt.getPrimaries(tt.workingColorSpace),
        he = v.colorSpace === nn ? null : tt.getPrimaries(v.colorSpace),
        _e =
          v.colorSpace === nn || Ee === he ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e));
      const Re = v.isCompressedTexture || v.image[0].isCompressedTexture,
        Be = v.image[0] && v.image[0].isDataTexture,
        te = [];
      for (let oe = 0; oe < 6; oe++)
        (!Re && !Be ?
          (te[oe] = g(v.image[oe], !1, !0, r.maxCubemapSize))
        : (te[oe] = Be ? v.image[oe].image : v.image[oe]),
          (te[oe] = Oe(v, te[oe])));
      const et = te[0],
        We = p(et) || a,
        De = s.convert(v.format, v.colorSpace),
        be = s.convert(v.type),
        ge = T(v.internalFormat, De, be, v.colorSpace),
        Ne = a && v.isVideoTexture !== !0,
        Je = se.__version === void 0 || re === !0;
      let _t = P(v, et, We);
      I(n.TEXTURE_CUBE_MAP, v, We);
      let Ge;
      if (Re) {
        Ne &&
          Je &&
          t.texStorage2D(n.TEXTURE_CUBE_MAP, _t, ge, et.width, et.height);
        for (let oe = 0; oe < 6; oe++) {
          Ge = te[oe].mipmaps;
          for (let C = 0; C < Ge.length; C++) {
            const ue = Ge[C];
            v.format !== un ?
              De !== null ?
                Ne ?
                  t.compressedTexSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    C,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    De,
                    ue.data,
                  )
                : t.compressedTexImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    C,
                    ge,
                    ue.width,
                    ue.height,
                    0,
                    ue.data,
                  )
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                )
            : Ne ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                C,
                0,
                0,
                ue.width,
                ue.height,
                De,
                be,
                ue.data,
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                C,
                ge,
                ue.width,
                ue.height,
                0,
                De,
                be,
                ue.data,
              );
          }
        }
      } else {
        ((Ge = v.mipmaps),
          Ne &&
            Je &&
            (Ge.length > 0 && _t++,
            t.texStorage2D(
              n.TEXTURE_CUBE_MAP,
              _t,
              ge,
              te[0].width,
              te[0].height,
            )));
        for (let oe = 0; oe < 6; oe++)
          if (Be) {
            Ne ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                0,
                0,
                0,
                te[oe].width,
                te[oe].height,
                De,
                be,
                te[oe].data,
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                0,
                ge,
                te[oe].width,
                te[oe].height,
                0,
                De,
                be,
                te[oe].data,
              );
            for (let C = 0; C < Ge.length; C++) {
              const fe = Ge[C].image[oe].image;
              Ne ?
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
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
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  C + 1,
                  ge,
                  fe.width,
                  fe.height,
                  0,
                  De,
                  be,
                  fe.data,
                );
            }
          } else {
            Ne ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                0,
                0,
                0,
                De,
                be,
                te[oe],
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                0,
                ge,
                De,
                be,
                te[oe],
              );
            for (let C = 0; C < Ge.length; C++) {
              const ue = Ge[C];
              Ne ?
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  C + 1,
                  0,
                  0,
                  De,
                  be,
                  ue.image[oe],
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  C + 1,
                  ge,
                  De,
                  be,
                  ue.image[oe],
                );
            }
          }
      }
      (M(v, We) && x(n.TEXTURE_CUBE_MAP),
        (se.__version = ne.version),
        v.onUpdate && v.onUpdate(v));
    }
    y.__version = v.version;
  }
  function me(y, v, O, re, ne, se) {
    const Ee = s.convert(O.format, O.colorSpace),
      he = s.convert(O.type),
      _e = T(O.internalFormat, Ee, he, O.colorSpace);
    if (!i.get(v).__hasExternalTextures) {
      const Be = Math.max(1, v.width >> se),
        te = Math.max(1, v.height >> se);
      ne === n.TEXTURE_3D || ne === n.TEXTURE_2D_ARRAY ?
        t.texImage3D(ne, se, _e, Be, te, v.depth, 0, Ee, he, null)
      : t.texImage2D(ne, se, _e, Be, te, 0, Ee, he, null);
    }
    (t.bindFramebuffer(n.FRAMEBUFFER, y),
      ve(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          re,
          ne,
          i.get(O).__webglTexture,
          0,
          Se(v),
        )
      : (ne === n.TEXTURE_2D ||
          (ne >= n.TEXTURE_CUBE_MAP_POSITIVE_X &&
            ne <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
        n.framebufferTexture2D(
          n.FRAMEBUFFER,
          re,
          ne,
          i.get(O).__webglTexture,
          se,
        ),
      t.bindFramebuffer(n.FRAMEBUFFER, null));
  }
  function Me(y, v, O) {
    if (
      (n.bindRenderbuffer(n.RENDERBUFFER, y), v.depthBuffer && !v.stencilBuffer)
    ) {
      let re = a === !0 ? n.DEPTH_COMPONENT24 : n.DEPTH_COMPONENT16;
      if (O || ve(v)) {
        const ne = v.depthTexture;
        ne &&
          ne.isDepthTexture &&
          (ne.type === Nn ?
            (re = n.DEPTH_COMPONENT32F)
          : ne.type === In && (re = n.DEPTH_COMPONENT24));
        const se = Se(v);
        ve(v) ?
          l.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            se,
            re,
            v.width,
            v.height,
          )
        : n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            se,
            re,
            v.width,
            v.height,
          );
      } else n.renderbufferStorage(n.RENDERBUFFER, re, v.width, v.height);
      n.framebufferRenderbuffer(
        n.FRAMEBUFFER,
        n.DEPTH_ATTACHMENT,
        n.RENDERBUFFER,
        y,
      );
    } else if (v.depthBuffer && v.stencilBuffer) {
      const re = Se(v);
      (O && ve(v) === !1 ?
        n.renderbufferStorageMultisample(
          n.RENDERBUFFER,
          re,
          n.DEPTH24_STENCIL8,
          v.width,
          v.height,
        )
      : ve(v) ?
        l.renderbufferStorageMultisampleEXT(
          n.RENDERBUFFER,
          re,
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
      const re =
        v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ne = 0; ne < re.length; ne++) {
        const se = re[ne],
          Ee = s.convert(se.format, se.colorSpace),
          he = s.convert(se.type),
          _e = T(se.internalFormat, Ee, he, se.colorSpace),
          Re = Se(v);
        O && ve(v) === !1 ?
          n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            Re,
            _e,
            v.width,
            v.height,
          )
        : ve(v) ?
          l.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            Re,
            _e,
            v.width,
            v.height,
          )
        : n.renderbufferStorage(n.RENDERBUFFER, _e, v.width, v.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function Pe(y, v) {
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
    const re = i.get(v.depthTexture).__webglTexture,
      ne = Se(v);
    if (v.depthTexture.format === Qn)
      ve(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          n.DEPTH_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
          ne,
        )
      : n.framebufferTexture2D(
          n.FRAMEBUFFER,
          n.DEPTH_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
        );
    else if (v.depthTexture.format === Ii)
      ve(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
          ne,
        )
      : n.framebufferTexture2D(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
        );
    else throw new Error("Unknown depthTexture format");
  }
  function Te(y) {
    const v = i.get(y),
      O = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      Pe(v.__webglFramebuffer, y);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let re = 0; re < 6; re++)
        (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[re]),
          (v.__webglDepthbuffer[re] = n.createRenderbuffer()),
          Me(v.__webglDepthbuffer[re], y, !1));
    } else
      (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer),
        (v.__webglDepthbuffer = n.createRenderbuffer()),
        Me(v.__webglDepthbuffer, y, !1));
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function $e(y, v, O) {
    const re = i.get(y);
    (v !== void 0 &&
      me(
        re.__webglFramebuffer,
        y,
        y.texture,
        n.COLOR_ATTACHMENT0,
        n.TEXTURE_2D,
        0,
      ),
      O !== void 0 && Te(y));
  }
  function L(y) {
    const v = y.texture,
      O = i.get(y),
      re = i.get(v);
    (y.addEventListener("dispose", H),
      y.isWebGLMultipleRenderTargets !== !0 &&
        (re.__webglTexture === void 0 &&
          (re.__webglTexture = n.createTexture()),
        (re.__version = v.version),
        o.memory.textures++));
    const ne = y.isWebGLCubeRenderTarget === !0,
      se = y.isWebGLMultipleRenderTargets === !0,
      Ee = p(y) || a;
    if (ne) {
      O.__webglFramebuffer = [];
      for (let he = 0; he < 6; he++)
        if (a && v.mipmaps && v.mipmaps.length > 0) {
          O.__webglFramebuffer[he] = [];
          for (let _e = 0; _e < v.mipmaps.length; _e++)
            O.__webglFramebuffer[he][_e] = n.createFramebuffer();
        } else O.__webglFramebuffer[he] = n.createFramebuffer();
    } else {
      if (a && v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let he = 0; he < v.mipmaps.length; he++)
          O.__webglFramebuffer[he] = n.createFramebuffer();
      } else O.__webglFramebuffer = n.createFramebuffer();
      if (se)
        if (r.drawBuffers) {
          const he = y.texture;
          for (let _e = 0, Re = he.length; _e < Re; _e++) {
            const Be = i.get(he[_e]);
            Be.__webglTexture === void 0 &&
              ((Be.__webglTexture = n.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.",
          );
      if (a && y.samples > 0 && ve(y) === !1) {
        const he = se ? v : [v];
        ((O.__webglMultisampledFramebuffer = n.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          t.bindFramebuffer(n.FRAMEBUFFER, O.__webglMultisampledFramebuffer));
        for (let _e = 0; _e < he.length; _e++) {
          const Re = he[_e];
          ((O.__webglColorRenderbuffer[_e] = n.createRenderbuffer()),
            n.bindRenderbuffer(n.RENDERBUFFER, O.__webglColorRenderbuffer[_e]));
          const Be = s.convert(Re.format, Re.colorSpace),
            te = s.convert(Re.type),
            et = T(
              Re.internalFormat,
              Be,
              te,
              Re.colorSpace,
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
              n.COLOR_ATTACHMENT0 + _e,
              n.RENDERBUFFER,
              O.__webglColorRenderbuffer[_e],
            ));
        }
        (n.bindRenderbuffer(n.RENDERBUFFER, null),
          y.depthBuffer &&
            ((O.__webglDepthRenderbuffer = n.createRenderbuffer()),
            Me(O.__webglDepthRenderbuffer, y, !0)),
          t.bindFramebuffer(n.FRAMEBUFFER, null));
      }
    }
    if (ne) {
      (t.bindTexture(n.TEXTURE_CUBE_MAP, re.__webglTexture),
        I(n.TEXTURE_CUBE_MAP, v, Ee));
      for (let he = 0; he < 6; he++)
        if (a && v.mipmaps && v.mipmaps.length > 0)
          for (let _e = 0; _e < v.mipmaps.length; _e++)
            me(
              O.__webglFramebuffer[he][_e],
              y,
              v,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_CUBE_MAP_POSITIVE_X + he,
              _e,
            );
        else
          me(
            O.__webglFramebuffer[he],
            y,
            v,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_CUBE_MAP_POSITIVE_X + he,
            0,
          );
      (M(v, Ee) && x(n.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (se) {
      const he = y.texture;
      for (let _e = 0, Re = he.length; _e < Re; _e++) {
        const Be = he[_e],
          te = i.get(Be);
        (t.bindTexture(n.TEXTURE_2D, te.__webglTexture),
          I(n.TEXTURE_2D, Be, Ee),
          me(
            O.__webglFramebuffer,
            y,
            Be,
            n.COLOR_ATTACHMENT0 + _e,
            n.TEXTURE_2D,
            0,
          ),
          M(Be, Ee) && x(n.TEXTURE_2D));
      }
      t.unbindTexture();
    } else {
      let he = n.TEXTURE_2D;
      if (
        ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) &&
          (a ?
            (he = y.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.",
            )),
        t.bindTexture(he, re.__webglTexture),
        I(he, v, Ee),
        a && v.mipmaps && v.mipmaps.length > 0)
      )
        for (let _e = 0; _e < v.mipmaps.length; _e++)
          me(O.__webglFramebuffer[_e], y, v, n.COLOR_ATTACHMENT0, he, _e);
      else me(O.__webglFramebuffer, y, v, n.COLOR_ATTACHMENT0, he, 0);
      (M(v, Ee) && x(he), t.unbindTexture());
    }
    y.depthBuffer && Te(y);
  }
  function Ze(y) {
    const v = p(y) || a,
      O = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let re = 0, ne = O.length; re < ne; re++) {
      const se = O[re];
      if (M(se, v)) {
        const Ee =
            y.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D,
          he = i.get(se).__webglTexture;
        (t.bindTexture(Ee, he), x(Ee), t.unbindTexture());
      }
    }
  }
  function xe(y) {
    if (a && y.samples > 0 && ve(y) === !1) {
      const v = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture],
        O = y.width,
        re = y.height;
      let ne = n.COLOR_BUFFER_BIT;
      const se = [],
        Ee = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
        he = i.get(y),
        _e = y.isWebGLMultipleRenderTargets === !0;
      if (_e)
        for (let Re = 0; Re < v.length; Re++)
          (t.bindFramebuffer(n.FRAMEBUFFER, he.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Re,
              n.RENDERBUFFER,
              null,
            ),
            t.bindFramebuffer(n.FRAMEBUFFER, he.__webglFramebuffer),
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Re,
              n.TEXTURE_2D,
              null,
              0,
            ));
      (t.bindFramebuffer(n.READ_FRAMEBUFFER, he.__webglMultisampledFramebuffer),
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, he.__webglFramebuffer));
      for (let Re = 0; Re < v.length; Re++) {
        (se.push(n.COLOR_ATTACHMENT0 + Re), y.depthBuffer && se.push(Ee));
        const Be =
          he.__ignoreDepthValues !== void 0 ? he.__ignoreDepthValues : !1;
        if (
          (Be === !1 &&
            (y.depthBuffer && (ne |= n.DEPTH_BUFFER_BIT),
            y.stencilBuffer && (ne |= n.STENCIL_BUFFER_BIT)),
          _e &&
            n.framebufferRenderbuffer(
              n.READ_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.RENDERBUFFER,
              he.__webglColorRenderbuffer[Re],
            ),
          Be === !0 &&
            (n.invalidateFramebuffer(n.READ_FRAMEBUFFER, [Ee]),
            n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [Ee])),
          _e)
        ) {
          const te = i.get(v[Re]).__webglTexture;
          n.framebufferTexture2D(
            n.DRAW_FRAMEBUFFER,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_2D,
            te,
            0,
          );
        }
        (n.blitFramebuffer(0, 0, O, re, 0, 0, O, re, ne, n.NEAREST),
          c && n.invalidateFramebuffer(n.READ_FRAMEBUFFER, se));
      }
      if (
        (t.bindFramebuffer(n.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
        _e)
      )
        for (let Re = 0; Re < v.length; Re++) {
          (t.bindFramebuffer(n.FRAMEBUFFER, he.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Re,
              n.RENDERBUFFER,
              he.__webglColorRenderbuffer[Re],
            ));
          const Be = i.get(v[Re]).__webglTexture;
          (t.bindFramebuffer(n.FRAMEBUFFER, he.__webglFramebuffer),
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Re,
              n.TEXTURE_2D,
              Be,
              0,
            ));
        }
      t.bindFramebuffer(n.DRAW_FRAMEBUFFER, he.__webglMultisampledFramebuffer);
    }
  }
  function Se(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function ve(y) {
    const v = i.get(y);
    return (
      a &&
      y.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function pt(y) {
    const v = o.render.frame;
    u.get(y) !== v && (u.set(y, v), y.update());
  }
  function Oe(y, v) {
    const O = y.colorSpace,
      re = y.format,
      ne = y.type;
    return (
      y.isCompressedTexture === !0 ||
        y.isVideoTexture === !0 ||
        y.format === Os ||
        (O !== An &&
          O !== nn &&
          (tt.getTransfer(O) === lt ?
            a === !1 ?
              e.has("EXT_sRGB") === !0 && re === un ?
                ((y.format = Os), (y.minFilter = en), (y.generateMipmaps = !1))
              : (v = Ml.sRGBToLinear(v))
            : (re !== un || ne !== Bn) &&
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
  ((this.allocateTextureUnit = D),
    (this.resetTextureUnits = ie),
    (this.setTexture2D = B),
    (this.setTexture2DArray = X),
    (this.setTexture3D = $),
    (this.setTextureCube = J),
    (this.rebindTextures = $e),
    (this.setupRenderTarget = L),
    (this.updateRenderTargetMipmap = Ze),
    (this.updateMultisampleRenderTarget = xe),
    (this.setupDepthRenderbuffer = Te),
    (this.setupFrameBufferTexture = me),
    (this.useMultisampledRTT = ve));
}
function r_(n, e, t) {
  const i = t.isWebGL2;
  function r(s, o = nn) {
    let a;
    const l = tt.getTransfer(o);
    if (s === Bn) return n.UNSIGNED_BYTE;
    if (s === ul) return n.UNSIGNED_SHORT_4_4_4_4;
    if (s === fl) return n.UNSIGNED_SHORT_5_5_5_1;
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
    if (s === Hu) return n.LUMINANCE;
    if (s === ku) return n.LUMINANCE_ALPHA;
    if (s === Qn) return n.DEPTH_COMPONENT;
    if (s === Ii) return n.DEPTH_STENCIL;
    if (s === Os)
      return ((a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null);
    if (s === Vu) return n.RED;
    if (s === hl) return n.RED_INTEGER;
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
    if (s === Xu || s === za || s === Ga || s === Ha)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === ts) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === za) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Ga) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Ha) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
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
            f = this._getHandJoint(c, g);
          (p !== null &&
            (f.matrix.fromArray(p.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale),
            (f.matrixWorldNeedsUpdate = !0),
            (f.jointRadius = p.radius)),
            (f.visible = p !== null));
        }
        const u = c.joints["index-finger-tip"],
          h = c.joints["thumb-tip"],
          d = u.position.distanceTo(h.position),
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
      h = null,
      d = null,
      m = null,
      _ = null;
    const g = t.getContextAttributes();
    let p = null,
      f = null;
    const M = [],
      x = [],
      T = new Ke();
    let P = null;
    const w = new tn();
    (w.layers.enable(1), (w.viewport = new Ct()));
    const A = new tn();
    (A.layers.enable(2), (A.viewport = new Ct()));
    const H = [w, A],
      S = new s_();
    (S.layers.enable(1), S.layers.enable(2));
    let b = null,
      V = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (I) {
        let K = M[I];
        return (
          K === void 0 && ((K = new As()), (M[I] = K)),
          K.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (I) {
        let K = M[I];
        return (K === void 0 && ((K = new As()), (M[I] = K)), K.getGripSpace());
      }),
      (this.getHand = function (I) {
        let K = M[I];
        return (K === void 0 && ((K = new As()), (M[I] = K)), K.getHandSpace());
      }));
    function Z(I) {
      const K = x.indexOf(I.inputSource);
      if (K === -1) return;
      const Y = M[K];
      Y !== void 0 &&
        (Y.update(I.inputSource, I.frame, c || o),
        Y.dispatchEvent({ type: I.type, data: I.inputSource }));
    }
    function ie() {
      (r.removeEventListener("select", Z),
        r.removeEventListener("selectstart", Z),
        r.removeEventListener("selectend", Z),
        r.removeEventListener("squeeze", Z),
        r.removeEventListener("squeezestart", Z),
        r.removeEventListener("squeezeend", Z),
        r.removeEventListener("end", ie),
        r.removeEventListener("inputsourceschange", D));
      for (let I = 0; I < M.length; I++) {
        const K = x[I];
        K !== null && ((x[I] = null), M[I].disconnect(K));
      }
      ((b = null),
        (V = null),
        e.setRenderTarget(p),
        (m = null),
        (d = null),
        (h = null),
        (r = null),
        (f = null),
        Q.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(P),
        e.setSize(T.width, T.height, !1),
        i.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (I) {
      ((s = I),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (I) {
        ((a = I),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (I) {
        c = I;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : m;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return _;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (I) {
        if (((r = I), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener("select", Z),
            r.addEventListener("selectstart", Z),
            r.addEventListener("selectend", Z),
            r.addEventListener("squeeze", Z),
            r.addEventListener("squeezestart", Z),
            r.addEventListener("squeezeend", Z),
            r.addEventListener("end", ie),
            r.addEventListener("inputsourceschange", D),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (P = e.getPixelRatio()),
            e.getSize(T),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const K = {
              antialias: r.renderState.layers === void 0 ? g.antialias : !0,
              alpha: !0,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            ((m = new XRWebGLLayer(r, t, K)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (f = new ni(m.framebufferWidth, m.framebufferHeight, {
                format: un,
                type: Bn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: g.stencil,
              })));
          } else {
            let K = null,
              Y = null,
              ce = null;
            g.depth &&
              ((ce = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (K = g.stencil ? Ii : Qn),
              (Y = g.stencil ? Jn : In));
            const me = {
              colorFormat: t.RGBA8,
              depthFormat: ce,
              scaleFactor: s,
            };
            ((h = new XRWebGLBinding(r, t)),
              (d = h.createProjectionLayer(me)),
              r.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (f = new ni(d.textureWidth, d.textureHeight, {
                format: un,
                type: Bn,
                depthTexture: new Ul(
                  d.textureWidth,
                  d.textureHeight,
                  Y,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  K,
                ),
                stencilBuffer: g.stencil,
                colorSpace: e.outputColorSpace,
                samples: g.antialias ? 4 : 0,
              })));
            const Me = e.properties.get(f);
            Me.__ignoreDepthValues = d.ignoreDepthValues;
          }
          ((f.isXRRenderTarget = !0),
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
    function D(I) {
      for (let K = 0; K < I.removed.length; K++) {
        const Y = I.removed[K],
          ce = x.indexOf(Y);
        ce >= 0 && ((x[ce] = null), M[ce].disconnect(Y));
      }
      for (let K = 0; K < I.added.length; K++) {
        const Y = I.added[K];
        let ce = x.indexOf(Y);
        if (ce === -1) {
          for (let Me = 0; Me < M.length; Me++)
            if (Me >= x.length) {
              (x.push(Y), (ce = Me));
              break;
            } else if (x[Me] === null) {
              ((x[Me] = Y), (ce = Me));
              break;
            }
          if (ce === -1) break;
        }
        const me = M[ce];
        me && me.connect(Y);
      }
    }
    const N = new G(),
      B = new G();
    function X(I, K, Y) {
      (N.setFromMatrixPosition(K.matrixWorld),
        B.setFromMatrixPosition(Y.matrixWorld));
      const ce = N.distanceTo(B),
        me = K.projectionMatrix.elements,
        Me = Y.projectionMatrix.elements,
        Pe = me[14] / (me[10] - 1),
        Te = me[14] / (me[10] + 1),
        $e = (me[9] + 1) / me[5],
        L = (me[9] - 1) / me[5],
        Ze = (me[8] - 1) / me[0],
        xe = (Me[8] + 1) / Me[0],
        Se = Pe * Ze,
        ve = Pe * xe,
        pt = ce / (-Ze + xe),
        Oe = pt * -Ze;
      (K.matrixWorld.decompose(I.position, I.quaternion, I.scale),
        I.translateX(Oe),
        I.translateZ(pt),
        I.matrixWorld.compose(I.position, I.quaternion, I.scale),
        I.matrixWorldInverse.copy(I.matrixWorld).invert());
      const y = Pe + pt,
        v = Te + pt,
        O = Se - Oe,
        re = ve + (ce - Oe),
        ne = (($e * Te) / v) * y,
        se = ((L * Te) / v) * y;
      (I.projectionMatrix.makePerspective(O, re, ne, se, y, v),
        I.projectionMatrixInverse.copy(I.projectionMatrix).invert());
    }
    function $(I, K) {
      (K === null ?
        I.matrixWorld.copy(I.matrix)
      : I.matrixWorld.multiplyMatrices(K.matrixWorld, I.matrix),
        I.matrixWorldInverse.copy(I.matrixWorld).invert());
    }
    this.updateCamera = function (I) {
      if (r === null) return;
      ((S.near = A.near = w.near = I.near),
        (S.far = A.far = w.far = I.far),
        (b !== S.near || V !== S.far) &&
          (r.updateRenderState({ depthNear: S.near, depthFar: S.far }),
          (b = S.near),
          (V = S.far)));
      const K = I.parent,
        Y = S.cameras;
      $(S, K);
      for (let ce = 0; ce < Y.length; ce++) $(Y[ce], K);
      (Y.length === 2 ?
        X(S, w, A)
      : S.projectionMatrix.copy(w.projectionMatrix),
        J(I, S, K));
    };
    function J(I, K, Y) {
      (Y === null ?
        I.matrix.copy(K.matrixWorld)
      : (I.matrix.copy(Y.matrixWorld),
        I.matrix.invert(),
        I.matrix.multiply(K.matrixWorld)),
        I.matrix.decompose(I.position, I.quaternion, I.scale),
        I.updateMatrixWorld(!0),
        I.projectionMatrix.copy(K.projectionMatrix),
        I.projectionMatrixInverse.copy(K.projectionMatrixInverse),
        I.isPerspectiveCamera &&
          ((I.fov = Bs * 2 * Math.atan(1 / I.projectionMatrix.elements[5])),
          (I.zoom = 1)));
    }
    ((this.getCamera = function () {
      return S;
    }),
      (this.getFoveation = function () {
        if (!(d === null && m === null)) return l;
      }),
      (this.setFoveation = function (I) {
        ((l = I),
          d !== null && (d.fixedFoveation = I),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = I));
      }));
    let j = null;
    function ee(I, K) {
      if (((u = K.getViewerPose(c || o)), (_ = K), u !== null)) {
        const Y = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(f, m.framebuffer),
          e.setRenderTarget(f));
        let ce = !1;
        Y.length !== S.cameras.length && ((S.cameras.length = 0), (ce = !0));
        for (let me = 0; me < Y.length; me++) {
          const Me = Y[me];
          let Pe = null;
          if (m !== null) Pe = m.getViewport(Me);
          else {
            const $e = h.getViewSubImage(d, Me);
            ((Pe = $e.viewport),
              me === 0 &&
                (e.setRenderTargetTextures(
                  f,
                  $e.colorTexture,
                  d.ignoreDepthValues ? void 0 : $e.depthStencilTexture,
                ),
                e.setRenderTarget(f)));
          }
          let Te = H[me];
          (Te === void 0 &&
            ((Te = new tn()),
            Te.layers.enable(me),
            (Te.viewport = new Ct()),
            (H[me] = Te)),
            Te.matrix.fromArray(Me.transform.matrix),
            Te.matrix.decompose(Te.position, Te.quaternion, Te.scale),
            Te.projectionMatrix.fromArray(Me.projectionMatrix),
            Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),
            Te.viewport.set(Pe.x, Pe.y, Pe.width, Pe.height),
            me === 0 &&
              (S.matrix.copy(Te.matrix),
              S.matrix.decompose(S.position, S.quaternion, S.scale)),
            ce === !0 && S.cameras.push(Te));
        }
      }
      for (let Y = 0; Y < M.length; Y++) {
        const ce = x[Y],
          me = M[Y];
        ce !== null && me !== void 0 && me.update(ce, K, c || o);
      }
      (j && j(I, K),
        K.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: K }),
        (_ = null));
    }
    const Q = new Pl();
    (Q.setAnimationLoop(ee),
      (this.setAnimationLoop = function (I) {
        j = I;
      }),
      (this.dispose = function () {}));
  }
}
function l_(n, e) {
  function t(p, f) {
    (p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix));
  }
  function i(p, f) {
    (f.color.getRGB(p.fogColor.value, Rl(n)),
      f.isFog ?
        ((p.fogNear.value = f.near), (p.fogFar.value = f.far))
      : f.isFogExp2 && (p.fogDensity.value = f.density));
  }
  function r(p, f, M, x, T) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(p, f)
    : f.isMeshToonMaterial ? (s(p, f), h(p, f))
    : f.isMeshPhongMaterial ? (s(p, f), u(p, f))
    : f.isMeshStandardMaterial ?
      (s(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, T))
    : f.isMeshMatcapMaterial ? (s(p, f), _(p, f))
    : f.isMeshDepthMaterial ? s(p, f)
    : f.isMeshDistanceMaterial ? (s(p, f), g(p, f))
    : f.isMeshNormalMaterial ? s(p, f)
    : f.isLineBasicMaterial ? (o(p, f), f.isLineDashedMaterial && a(p, f))
    : f.isPointsMaterial ? l(p, f, M, x)
    : f.isSpriteMaterial ? c(p, f)
    : f.isShadowMaterial ?
      (p.color.value.copy(f.color), (p.opacity.value = f.opacity))
    : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(p, f) {
    ((p.opacity.value = f.opacity),
      f.color && p.diffuse.value.copy(f.color),
      f.emissive &&
        p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.bumpMap &&
        ((p.bumpMap.value = f.bumpMap),
        t(f.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = f.bumpScale),
        f.side === Wt && (p.bumpScale.value *= -1)),
      f.normalMap &&
        ((p.normalMap.value = f.normalMap),
        t(f.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(f.normalScale),
        f.side === Wt && p.normalScale.value.negate()),
      f.displacementMap &&
        ((p.displacementMap.value = f.displacementMap),
        t(f.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = f.displacementScale),
        (p.displacementBias.value = f.displacementBias)),
      f.emissiveMap &&
        ((p.emissiveMap.value = f.emissiveMap),
        t(f.emissiveMap, p.emissiveMapTransform)),
      f.specularMap &&
        ((p.specularMap.value = f.specularMap),
        t(f.specularMap, p.specularMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest));
    const M = e.get(f).envMap;
    if (
      (M &&
        ((p.envMap.value = M),
        (p.flipEnvMap.value =
          M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = f.reflectivity),
        (p.ior.value = f.ior),
        (p.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      p.lightMap.value = f.lightMap;
      const x = n._useLegacyLights === !0 ? Math.PI : 1;
      ((p.lightMapIntensity.value = f.lightMapIntensity * x),
        t(f.lightMap, p.lightMapTransform));
    }
    f.aoMap &&
      ((p.aoMap.value = f.aoMap),
      (p.aoMapIntensity.value = f.aoMapIntensity),
      t(f.aoMap, p.aoMapTransform));
  }
  function o(p, f) {
    (p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)));
  }
  function a(p, f) {
    ((p.dashSize.value = f.dashSize),
      (p.totalSize.value = f.dashSize + f.gapSize),
      (p.scale.value = f.scale));
  }
  function l(p, f, M, x) {
    (p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.size.value = f.size * M),
      (p.scale.value = x * 0.5),
      f.map && ((p.map.value = f.map), t(f.map, p.uvTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest));
  }
  function c(p, f) {
    (p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.rotation.value = f.rotation),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest));
  }
  function u(p, f) {
    (p.specular.value.copy(f.specular),
      (p.shininess.value = Math.max(f.shininess, 1e-4)));
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    ((p.metalness.value = f.metalness),
      f.metalnessMap &&
        ((p.metalnessMap.value = f.metalnessMap),
        t(f.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = f.roughness),
      f.roughnessMap &&
        ((p.roughnessMap.value = f.roughnessMap),
        t(f.roughnessMap, p.roughnessMapTransform)),
      e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity));
  }
  function m(p, f, M) {
    ((p.ior.value = f.ior),
      f.sheen > 0 &&
        (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (p.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap &&
          ((p.sheenColorMap.value = f.sheenColorMap),
          t(f.sheenColorMap, p.sheenColorMapTransform)),
        f.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = f.sheenRoughnessMap),
          t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      f.clearcoat > 0 &&
        ((p.clearcoat.value = f.clearcoat),
        (p.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap &&
          ((p.clearcoatMap.value = f.clearcoatMap),
          t(f.clearcoatMap, p.clearcoatMapTransform)),
        f.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
          t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        f.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = f.clearcoatNormalMap),
          t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          f.side === Wt && p.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((p.iridescence.value = f.iridescence),
        (p.iridescenceIOR.value = f.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap &&
          ((p.iridescenceMap.value = f.iridescenceMap),
          t(f.iridescenceMap, p.iridescenceMapTransform)),
        f.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = f.iridescenceThicknessMap),
          t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      f.transmission > 0 &&
        ((p.transmission.value = f.transmission),
        (p.transmissionSamplerMap.value = M.texture),
        p.transmissionSamplerSize.value.set(M.width, M.height),
        f.transmissionMap &&
          ((p.transmissionMap.value = f.transmissionMap),
          t(f.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = f.thickness),
        f.thicknessMap &&
          ((p.thicknessMap.value = f.thicknessMap),
          t(f.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = f.attenuationDistance),
        p.attenuationColor.value.copy(f.attenuationColor)),
      f.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          f.anisotropy * Math.cos(f.anisotropyRotation),
          f.anisotropy * Math.sin(f.anisotropyRotation),
        ),
        f.anisotropyMap &&
          ((p.anisotropyMap.value = f.anisotropyMap),
          t(f.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = f.specularIntensity),
      p.specularColor.value.copy(f.specularColor),
      f.specularColorMap &&
        ((p.specularColorMap.value = f.specularColorMap),
        t(f.specularColorMap, p.specularColorMapTransform)),
      f.specularIntensityMap &&
        ((p.specularIntensityMap.value = f.specularIntensityMap),
        t(f.specularIntensityMap, p.specularIntensityMapTransform)));
  }
  function _(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    const M = e.get(f).light;
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
    const P = x.program;
    i.updateUBOMapping(M, P);
    const w = e.render.frame;
    s[M.id] !== w && (d(M), (s[M.id] = w));
  }
  function u(M) {
    const x = h();
    M.__bindingPointIndex = x;
    const T = n.createBuffer(),
      P = M.__size,
      w = M.usage;
    return (
      n.bindBuffer(n.UNIFORM_BUFFER, T),
      n.bufferData(n.UNIFORM_BUFFER, P, w),
      n.bindBuffer(n.UNIFORM_BUFFER, null),
      n.bindBufferBase(n.UNIFORM_BUFFER, x, T),
      T
    );
  }
  function h() {
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
      P = M.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, x);
    for (let w = 0, A = T.length; w < A; w++) {
      const H = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let S = 0, b = H.length; S < b; S++) {
        const V = H[S];
        if (m(V, w, S, P) === !0) {
          const Z = V.__offset,
            ie = Array.isArray(V.value) ? V.value : [V.value];
          let D = 0;
          for (let N = 0; N < ie.length; N++) {
            const B = ie[N],
              X = g(B);
            typeof B == "number" || typeof B == "boolean" ?
              ((V.__data[0] = B),
              n.bufferSubData(n.UNIFORM_BUFFER, Z + D, V.__data))
            : B.isMatrix3 ?
              ((V.__data[0] = B.elements[0]),
              (V.__data[1] = B.elements[1]),
              (V.__data[2] = B.elements[2]),
              (V.__data[3] = 0),
              (V.__data[4] = B.elements[3]),
              (V.__data[5] = B.elements[4]),
              (V.__data[6] = B.elements[5]),
              (V.__data[7] = 0),
              (V.__data[8] = B.elements[6]),
              (V.__data[9] = B.elements[7]),
              (V.__data[10] = B.elements[8]),
              (V.__data[11] = 0))
            : (B.toArray(V.__data, D),
              (D += X.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          n.bufferSubData(n.UNIFORM_BUFFER, Z, V.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function m(M, x, T, P) {
    const w = M.value,
      A = x + "_" + T;
    if (P[A] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean" ?
          (P[A] = w)
        : (P[A] = w.clone()),
        !0
      );
    {
      const H = P[A];
      if (typeof w == "number" || typeof w == "boolean") {
        if (H !== w) return ((P[A] = w), !0);
      } else if (H.equals(w) === !1) return (H.copy(w), !0);
    }
    return !1;
  }
  function _(M) {
    const x = M.uniforms;
    let T = 0;
    const P = 16;
    for (let A = 0, H = x.length; A < H; A++) {
      const S = Array.isArray(x[A]) ? x[A] : [x[A]];
      for (let b = 0, V = S.length; b < V; b++) {
        const Z = S[b],
          ie = Array.isArray(Z.value) ? Z.value : [Z.value];
        for (let D = 0, N = ie.length; D < N; D++) {
          const B = ie[D],
            X = g(B),
            $ = T % P;
          ($ !== 0 && P - $ < X.boundary && (T += P - $),
            (Z.__data = new Float32Array(
              X.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (Z.__offset = T),
            (T += X.storage));
        }
      }
    }
    const w = T % P;
    return (w > 0 && (T += P - w), (M.__size = T), (M.__cache = {}), this);
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
  function f() {
    for (const M in r) n.deleteBuffer(r[M]);
    ((o = []), (r = {}), (s = {}));
  }
  return { bind: l, update: c, dispose: f };
}
class zl {
  constructor(e = {}) {
    const {
      canvas: t = rf(),
      context: i = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    i !== null ? (d = i.getContextAttributes().alpha) : (d = o);
    const m = new Uint32Array(4),
      _ = new Int32Array(4);
    let g = null,
      p = null;
    const f = [],
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
      P = 0,
      w = 0,
      A = null,
      H = -1,
      S = null;
    const b = new Ct(),
      V = new Ct();
    let Z = null;
    const ie = new je(0);
    let D = 0,
      N = t.width,
      B = t.height,
      X = 1,
      $ = null,
      J = null;
    const j = new Ct(0, 0, N, B),
      ee = new Ct(0, 0, N, B);
    let Q = !1;
    const I = new Js();
    let K = !1,
      Y = !1,
      ce = null;
    const me = new Et(),
      Me = new Ke(),
      Pe = new G(),
      Te = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function $e() {
      return A === null ? X : 1;
    }
    let L = i;
    function Ze(E, U) {
      for (let z = 0; z < E.length; z++) {
        const k = E[z],
          F = t.getContext(k, U);
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
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${qs}`),
        t.addEventListener("webglcontextlost", oe, !1),
        t.addEventListener("webglcontextrestored", C, !1),
        t.addEventListener("webglcontextcreationerror", ue, !1),
        L === null)
      ) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (x.isWebGL1Renderer === !0 && U.shift(), (L = Ze(U, E)), L === null)
        )
          throw Ze(U) ?
              new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
      (typeof WebGLRenderingContext < "u" &&
        L instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.",
        ),
        L.getShaderPrecisionFormat === void 0 &&
          (L.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          }));
    } catch (E) {
      throw (console.error("THREE.WebGLRenderer: " + E.message), E);
    }
    let xe,
      Se,
      ve,
      pt,
      Oe,
      y,
      v,
      O,
      re,
      ne,
      se,
      Ee,
      he,
      _e,
      Re,
      Be,
      te,
      et,
      We,
      De,
      be,
      ge,
      Ne,
      Je;
    function _t() {
      ((xe = new xp(L)),
        (Se = new dp(L, xe, e)),
        xe.init(Se),
        (ge = new r_(L, xe, Se)),
        (ve = new n_(L, xe, Se)),
        (pt = new Ep(L)),
        (Oe = new km()),
        (y = new i_(L, xe, ve, Oe, Se, ge, pt)),
        (v = new mp(x)),
        (O = new vp(x)),
        (re = new Lf(L, Se)),
        (Ne = new fp(L, xe, re, Se)),
        (ne = new Mp(L, re, pt, Ne)),
        (se = new Ap(L, ne, re, pt)),
        (We = new bp(L, Se, y)),
        (Be = new pp(Oe)),
        (Ee = new Hm(x, v, O, xe, Se, Ne, Be)),
        (he = new l_(x, Oe)),
        (_e = new Wm()),
        (Re = new Km(xe, Se)),
        (et = new up(x, v, O, ve, se, d, l)),
        (te = new t_(x, se, Se)),
        (Je = new c_(L, pt, Se, ve)),
        (De = new hp(L, xe, pt, Se)),
        (be = new Sp(L, xe, pt, Se)),
        (pt.programs = Ee.programs),
        (x.capabilities = Se),
        (x.extensions = xe),
        (x.properties = Oe),
        (x.renderLists = _e),
        (x.shadowMap = te),
        (x.state = ve),
        (x.info = pt));
    }
    _t();
    const Ge = new o_(x, L);
    ((this.xr = Ge),
      (this.getContext = function () {
        return L;
      }),
      (this.getContextAttributes = function () {
        return L.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const E = xe.get("WEBGL_lose_context");
        E && E.loseContext();
      }),
      (this.forceContextRestore = function () {
        const E = xe.get("WEBGL_lose_context");
        E && E.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return X;
      }),
      (this.setPixelRatio = function (E) {
        E !== void 0 && ((X = E), this.setSize(N, B, !1));
      }),
      (this.getSize = function (E) {
        return E.set(N, B);
      }),
      (this.setSize = function (E, U, z = !0) {
        if (Ge.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((N = E),
          (B = U),
          (t.width = Math.floor(E * X)),
          (t.height = Math.floor(U * X)),
          z === !0 && ((t.style.width = E + "px"), (t.style.height = U + "px")),
          this.setViewport(0, 0, E, U));
      }),
      (this.getDrawingBufferSize = function (E) {
        return E.set(N * X, B * X).floor();
      }),
      (this.setDrawingBufferSize = function (E, U, z) {
        ((N = E),
          (B = U),
          (X = z),
          (t.width = Math.floor(E * z)),
          (t.height = Math.floor(U * z)),
          this.setViewport(0, 0, E, U));
      }),
      (this.getCurrentViewport = function (E) {
        return E.copy(b);
      }),
      (this.getViewport = function (E) {
        return E.copy(j);
      }),
      (this.setViewport = function (E, U, z, k) {
        (E.isVector4 ? j.set(E.x, E.y, E.z, E.w) : j.set(E, U, z, k),
          ve.viewport(b.copy(j).multiplyScalar(X).floor()));
      }),
      (this.getScissor = function (E) {
        return E.copy(ee);
      }),
      (this.setScissor = function (E, U, z, k) {
        (E.isVector4 ? ee.set(E.x, E.y, E.z, E.w) : ee.set(E, U, z, k),
          ve.scissor(V.copy(ee).multiplyScalar(X).floor()));
      }),
      (this.getScissorTest = function () {
        return Q;
      }),
      (this.setScissorTest = function (E) {
        ve.setScissorTest((Q = E));
      }),
      (this.setOpaqueSort = function (E) {
        $ = E;
      }),
      (this.setTransparentSort = function (E) {
        J = E;
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
      (this.clear = function (E = !0, U = !0, z = !0) {
        let k = 0;
        if (E) {
          let F = !1;
          if (A !== null) {
            const de = A.texture.format;
            F = de === pl || de === dl || de === hl;
          }
          if (F) {
            const de = A.texture.type,
              ye =
                de === Bn ||
                de === In ||
                de === js ||
                de === Jn ||
                de === ul ||
                de === fl,
              we = et.getClearColor(),
              Le = et.getClearAlpha(),
              ze = we.r,
              Ue = we.g,
              Ie = we.b;
            ye ?
              ((m[0] = ze),
              (m[1] = Ue),
              (m[2] = Ie),
              (m[3] = Le),
              L.clearBufferuiv(L.COLOR, 0, m))
            : ((_[0] = ze),
              (_[1] = Ue),
              (_[2] = Ie),
              (_[3] = Le),
              L.clearBufferiv(L.COLOR, 0, _));
          } else k |= L.COLOR_BUFFER_BIT;
        }
        (U && (k |= L.DEPTH_BUFFER_BIT),
          z &&
            ((k |= L.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          L.clear(k));
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
        (t.removeEventListener("webglcontextlost", oe, !1),
          t.removeEventListener("webglcontextrestored", C, !1),
          t.removeEventListener("webglcontextcreationerror", ue, !1),
          _e.dispose(),
          Re.dispose(),
          Oe.dispose(),
          v.dispose(),
          O.dispose(),
          se.dispose(),
          Ne.dispose(),
          Je.dispose(),
          Ee.dispose(),
          Ge.dispose(),
          Ge.removeEventListener("sessionstart", Nt),
          Ge.removeEventListener("sessionend", st),
          ce && (ce.dispose(), (ce = null)),
          Ft.stop());
      }));
    function oe(E) {
      (E.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (T = !0));
    }
    function C() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (T = !1));
      const E = pt.autoReset,
        U = te.enabled,
        z = te.autoUpdate,
        k = te.needsUpdate,
        F = te.type;
      (_t(),
        (pt.autoReset = E),
        (te.enabled = U),
        (te.autoUpdate = z),
        (te.needsUpdate = k),
        (te.type = F));
    }
    function ue(E) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        E.statusMessage,
      );
    }
    function fe(E) {
      const U = E.target;
      (U.removeEventListener("dispose", fe), Ce(U));
    }
    function Ce(E) {
      (Ae(E), Oe.remove(E));
    }
    function Ae(E) {
      const U = Oe.get(E).programs;
      U !== void 0 &&
        (U.forEach(function (z) {
          Ee.releaseProgram(z);
        }),
        E.isShaderMaterial && Ee.releaseShaderCache(E));
    }
    this.renderBufferDirect = function (E, U, z, k, F, de) {
      U === null && (U = Te);
      const ye = F.isMesh && F.matrixWorld.determinant() < 0,
        we = Hl(E, U, z, k, F);
      ve.setMaterial(k, ye);
      let Le = z.index,
        ze = 1;
      if (k.wireframe === !0) {
        if (((Le = ne.getWireframeAttribute(z)), Le === void 0)) return;
        ze = 2;
      }
      const Ue = z.drawRange,
        Ie = z.attributes.position;
      let vt = Ue.start * ze,
        Xt = (Ue.start + Ue.count) * ze;
      (de !== null &&
        ((vt = Math.max(vt, de.start * ze)),
        (Xt = Math.min(Xt, (de.start + de.count) * ze))),
        Le !== null ?
          ((vt = Math.max(vt, 0)), (Xt = Math.min(Xt, Le.count)))
        : Ie != null &&
          ((vt = Math.max(vt, 0)), (Xt = Math.min(Xt, Ie.count))));
      const At = Xt - vt;
      if (At < 0 || At === 1 / 0) return;
      Ne.setup(F, k, we, z, Le);
      let _n,
        mt = De;
      if (
        (Le !== null && ((_n = re.get(Le)), (mt = be), mt.setIndex(_n)),
        F.isMesh)
      )
        k.wireframe === !0 ?
          (ve.setLineWidth(k.wireframeLinewidth * $e()), mt.setMode(L.LINES))
        : mt.setMode(L.TRIANGLES);
      else if (F.isLine) {
        let He = k.linewidth;
        (He === void 0 && (He = 1),
          ve.setLineWidth(He * $e()),
          F.isLineSegments ? mt.setMode(L.LINES)
          : F.isLineLoop ? mt.setMode(L.LINE_LOOP)
          : mt.setMode(L.LINE_STRIP));
      } else
        F.isPoints ?
          mt.setMode(L.POINTS)
        : F.isSprite && mt.setMode(L.TRIANGLES);
      if (F.isBatchedMesh)
        mt.renderMultiDraw(
          F._multiDrawStarts,
          F._multiDrawCounts,
          F._multiDrawCount,
        );
      else if (F.isInstancedMesh) mt.renderInstances(vt, At, F.count);
      else if (z.isInstancedBufferGeometry) {
        const He = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          Vr = Math.min(z.instanceCount, He);
        mt.renderInstances(vt, At, Vr);
      } else mt.render(vt, At);
    };
    function it(E, U, z) {
      E.transparent === !0 && E.side === dn && E.forceSinglePass === !1 ?
        ((E.side = Wt),
        (E.needsUpdate = !0),
        ir(E, U, z),
        (E.side = Gn),
        (E.needsUpdate = !0),
        ir(E, U, z),
        (E.side = dn))
      : ir(E, U, z);
    }
    ((this.compile = function (E, U, z = null) {
      (z === null && (z = E),
        (p = Re.get(z)),
        p.init(),
        M.push(p),
        z.traverseVisible(function (F) {
          F.isLight &&
            F.layers.test(U.layers) &&
            (p.pushLight(F), F.castShadow && p.pushShadow(F));
        }),
        E !== z &&
          E.traverseVisible(function (F) {
            F.isLight &&
              F.layers.test(U.layers) &&
              (p.pushLight(F), F.castShadow && p.pushShadow(F));
          }),
        p.setupLights(x._useLegacyLights));
      const k = new Set();
      return (
        E.traverse(function (F) {
          const de = F.material;
          if (de)
            if (Array.isArray(de))
              for (let ye = 0; ye < de.length; ye++) {
                const we = de[ye];
                (it(we, z, F), k.add(we));
              }
            else (it(de, z, F), k.add(de));
        }),
        M.pop(),
        (p = null),
        k
      );
    }),
      (this.compileAsync = function (E, U, z = null) {
        const k = this.compile(E, U, z);
        return new Promise((F) => {
          function de() {
            if (
              (k.forEach(function (ye) {
                Oe.get(ye).currentProgram.isReady() && k.delete(ye);
              }),
              k.size === 0)
            ) {
              F(E);
              return;
            }
            setTimeout(de, 10);
          }
          xe.get("KHR_parallel_shader_compile") !== null ?
            de()
          : setTimeout(de, 10);
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
      (this.render = function (E, U) {
        if (U !== void 0 && U.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (T === !0) return;
        (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(),
          U.parent === null &&
            U.matrixWorldAutoUpdate === !0 &&
            U.updateMatrixWorld(),
          Ge.enabled === !0 &&
            Ge.isPresenting === !0 &&
            (Ge.cameraAutoUpdate === !0 && Ge.updateCamera(U),
            (U = Ge.getCamera())),
          E.isScene === !0 && E.onBeforeRender(x, E, U, A),
          (p = Re.get(E, M.length)),
          p.init(),
          M.push(p),
          me.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          I.setFromProjectionMatrix(me),
          (Y = this.localClippingEnabled),
          (K = Be.init(this.clippingPlanes, Y)),
          (g = _e.get(E, f.length)),
          g.init(),
          f.push(g),
          fn(E, U, 0, x.sortObjects),
          g.finish(),
          x.sortObjects === !0 && g.sort($, J),
          this.info.render.frame++,
          K === !0 && Be.beginShadows());
        const z = p.state.shadowsArray;
        if (
          (te.render(z, E, U),
          K === !0 && Be.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          et.render(g, E),
          p.setupLights(x._useLegacyLights),
          U.isArrayCamera)
        ) {
          const k = U.cameras;
          for (let F = 0, de = k.length; F < de; F++) {
            const ye = k[F];
            ea(g, E, ye, ye.viewport);
          }
        } else ea(g, E, U);
        (A !== null &&
          (y.updateMultisampleRenderTarget(A), y.updateRenderTargetMipmap(A)),
          E.isScene === !0 && E.onAfterRender(x, E, U),
          Ne.resetDefaultState(),
          (H = -1),
          (S = null),
          M.pop(),
          M.length > 0 ? (p = M[M.length - 1]) : (p = null),
          f.pop(),
          f.length > 0 ? (g = f[f.length - 1]) : (g = null));
      }));
    function fn(E, U, z, k) {
      if (E.visible === !1) return;
      if (E.layers.test(U.layers)) {
        if (E.isGroup) z = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === !0 && E.update(U);
        else if (E.isLight) (p.pushLight(E), E.castShadow && p.pushShadow(E));
        else if (E.isSprite) {
          if (!E.frustumCulled || I.intersectsSprite(E)) {
            k && Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);
            const ye = se.update(E),
              we = E.material;
            we.visible && g.push(E, ye, we, z, Pe.z, null);
          }
        } else if (
          (E.isMesh || E.isLine || E.isPoints) &&
          (!E.frustumCulled || I.intersectsObject(E))
        ) {
          const ye = se.update(E),
            we = E.material;
          if (
            (k &&
              (E.boundingSphere !== void 0 ?
                (E.boundingSphere === null && E.computeBoundingSphere(),
                Pe.copy(E.boundingSphere.center))
              : (ye.boundingSphere === null && ye.computeBoundingSphere(),
                Pe.copy(ye.boundingSphere.center)),
              Pe.applyMatrix4(E.matrixWorld).applyMatrix4(me)),
            Array.isArray(we))
          ) {
            const Le = ye.groups;
            for (let ze = 0, Ue = Le.length; ze < Ue; ze++) {
              const Ie = Le[ze],
                vt = we[Ie.materialIndex];
              vt && vt.visible && g.push(E, ye, vt, z, Pe.z, Ie);
            }
          } else we.visible && g.push(E, ye, we, z, Pe.z, null);
        }
      }
      const de = E.children;
      for (let ye = 0, we = de.length; ye < we; ye++) fn(de[ye], U, z, k);
    }
    function ea(E, U, z, k) {
      const F = E.opaque,
        de = E.transmissive,
        ye = E.transparent;
      (p.setupLightsView(z),
        K === !0 && Be.setGlobalState(x.clippingPlanes, z),
        de.length > 0 && Gl(F, de, U, z),
        k && ve.viewport(b.copy(k)),
        F.length > 0 && nr(F, U, z),
        de.length > 0 && nr(de, U, z),
        ye.length > 0 && nr(ye, U, z),
        ve.buffers.depth.setTest(!0),
        ve.buffers.depth.setMask(!0),
        ve.buffers.color.setMask(!0),
        ve.setPolygonOffset(!1));
    }
    function Gl(E, U, z, k) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      const de = Se.isWebGL2;
      (ce === null &&
        (ce = new ni(1, 1, {
          generateMipmaps: !0,
          type: xe.has("EXT_color_buffer_half_float") ? Ki : Bn,
          minFilter: ji,
          samples: de ? 4 : 0,
        })),
        x.getDrawingBufferSize(Me),
        de ? ce.setSize(Me.x, Me.y) : ce.setSize(zs(Me.x), zs(Me.y)));
      const ye = x.getRenderTarget();
      (x.setRenderTarget(ce),
        x.getClearColor(ie),
        (D = x.getClearAlpha()),
        D < 1 && x.setClearColor(16777215, 0.5),
        x.clear());
      const we = x.toneMapping;
      ((x.toneMapping = On),
        nr(E, z, k),
        y.updateMultisampleRenderTarget(ce),
        y.updateRenderTargetMipmap(ce));
      let Le = !1;
      for (let ze = 0, Ue = U.length; ze < Ue; ze++) {
        const Ie = U[ze],
          vt = Ie.object,
          Xt = Ie.geometry,
          At = Ie.material,
          _n = Ie.group;
        if (At.side === dn && vt.layers.test(k.layers)) {
          const mt = At.side;
          ((At.side = Wt),
            (At.needsUpdate = !0),
            ta(vt, z, k, Xt, At, _n),
            (At.side = mt),
            (At.needsUpdate = !0),
            (Le = !0));
        }
      }
      (Le === !0 &&
        (y.updateMultisampleRenderTarget(ce), y.updateRenderTargetMipmap(ce)),
        x.setRenderTarget(ye),
        x.setClearColor(ie, D),
        (x.toneMapping = we));
    }
    function nr(E, U, z) {
      const k = U.isScene === !0 ? U.overrideMaterial : null;
      for (let F = 0, de = E.length; F < de; F++) {
        const ye = E[F],
          we = ye.object,
          Le = ye.geometry,
          ze = k === null ? ye.material : k,
          Ue = ye.group;
        we.layers.test(z.layers) && ta(we, U, z, Le, ze, Ue);
      }
    }
    function ta(E, U, z, k, F, de) {
      (E.onBeforeRender(x, U, z, k, F, de),
        E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, E.matrixWorld),
        E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
        F.onBeforeRender(x, U, z, k, E, de),
        F.transparent === !0 && F.side === dn && F.forceSinglePass === !1 ?
          ((F.side = Wt),
          (F.needsUpdate = !0),
          x.renderBufferDirect(z, U, k, F, E, de),
          (F.side = Gn),
          (F.needsUpdate = !0),
          x.renderBufferDirect(z, U, k, F, E, de),
          (F.side = dn))
        : x.renderBufferDirect(z, U, k, F, E, de),
        E.onAfterRender(x, U, z, k, F, de));
    }
    function ir(E, U, z) {
      U.isScene !== !0 && (U = Te);
      const k = Oe.get(E),
        F = p.state.lights,
        de = p.state.shadowsArray,
        ye = F.state.version,
        we = Ee.getParameters(E, F.state, de, U, z),
        Le = Ee.getProgramCacheKey(we);
      let ze = k.programs;
      ((k.environment = E.isMeshStandardMaterial ? U.environment : null),
        (k.fog = U.fog),
        (k.envMap = (E.isMeshStandardMaterial ? O : v).get(
          E.envMap || k.environment,
        )),
        ze === void 0 &&
          (E.addEventListener("dispose", fe),
          (ze = new Map()),
          (k.programs = ze)));
      let Ue = ze.get(Le);
      if (Ue !== void 0) {
        if (k.currentProgram === Ue && k.lightsStateVersion === ye)
          return (ia(E, we), Ue);
      } else
        ((we.uniforms = Ee.getUniforms(E)),
          E.onBuild(z, we, x),
          E.onBeforeCompile(we, x),
          (Ue = Ee.acquireProgram(we, Le)),
          ze.set(Le, Ue),
          (k.uniforms = we.uniforms));
      const Ie = k.uniforms;
      return (
        ((!E.isShaderMaterial && !E.isRawShaderMaterial) ||
          E.clipping === !0) &&
          (Ie.clippingPlanes = Be.uniform),
        ia(E, we),
        (k.needsLights = Vl(E)),
        (k.lightsStateVersion = ye),
        k.needsLights &&
          ((Ie.ambientLightColor.value = F.state.ambient),
          (Ie.lightProbe.value = F.state.probe),
          (Ie.directionalLights.value = F.state.directional),
          (Ie.directionalLightShadows.value = F.state.directionalShadow),
          (Ie.spotLights.value = F.state.spot),
          (Ie.spotLightShadows.value = F.state.spotShadow),
          (Ie.rectAreaLights.value = F.state.rectArea),
          (Ie.ltc_1.value = F.state.rectAreaLTC1),
          (Ie.ltc_2.value = F.state.rectAreaLTC2),
          (Ie.pointLights.value = F.state.point),
          (Ie.pointLightShadows.value = F.state.pointShadow),
          (Ie.hemisphereLights.value = F.state.hemi),
          (Ie.directionalShadowMap.value = F.state.directionalShadowMap),
          (Ie.directionalShadowMatrix.value = F.state.directionalShadowMatrix),
          (Ie.spotShadowMap.value = F.state.spotShadowMap),
          (Ie.spotLightMatrix.value = F.state.spotLightMatrix),
          (Ie.spotLightMap.value = F.state.spotLightMap),
          (Ie.pointShadowMap.value = F.state.pointShadowMap),
          (Ie.pointShadowMatrix.value = F.state.pointShadowMatrix)),
        (k.currentProgram = Ue),
        (k.uniformsList = null),
        Ue
      );
    }
    function na(E) {
      if (E.uniformsList === null) {
        const U = E.currentProgram.getUniforms();
        E.uniformsList = Cr.seqWithValue(U.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function ia(E, U) {
      const z = Oe.get(E);
      ((z.outputColorSpace = U.outputColorSpace),
        (z.batching = U.batching),
        (z.instancing = U.instancing),
        (z.instancingColor = U.instancingColor),
        (z.skinning = U.skinning),
        (z.morphTargets = U.morphTargets),
        (z.morphNormals = U.morphNormals),
        (z.morphColors = U.morphColors),
        (z.morphTargetsCount = U.morphTargetsCount),
        (z.numClippingPlanes = U.numClippingPlanes),
        (z.numIntersection = U.numClipIntersection),
        (z.vertexAlphas = U.vertexAlphas),
        (z.vertexTangents = U.vertexTangents),
        (z.toneMapping = U.toneMapping));
    }
    function Hl(E, U, z, k, F) {
      (U.isScene !== !0 && (U = Te), y.resetTextureUnits());
      const de = U.fog,
        ye = k.isMeshStandardMaterial ? U.environment : null,
        we =
          A === null ? x.outputColorSpace
          : A.isXRRenderTarget === !0 ? A.texture.colorSpace
          : An,
        Le = (k.isMeshStandardMaterial ? O : v).get(k.envMap || ye),
        ze =
          k.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        Ue = !!z.attributes.tangent && (!!k.normalMap || k.anisotropy > 0),
        Ie = !!z.morphAttributes.position,
        vt = !!z.morphAttributes.normal,
        Xt = !!z.morphAttributes.color;
      let At = On;
      k.toneMapped &&
        (A === null || A.isXRRenderTarget === !0) &&
        (At = x.toneMapping);
      const _n =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        mt = _n !== void 0 ? _n.length : 0,
        He = Oe.get(k),
        Vr = p.state.lights;
      if (K === !0 && (Y === !0 || E !== S)) {
        const Jt = E === S && k.id === H;
        Be.setState(k, E, Jt);
      }
      let gt = !1;
      k.version === He.__version ?
        ((He.needsLights && He.lightsStateVersion !== Vr.state.version) ||
          He.outputColorSpace !== we ||
          (F.isBatchedMesh && He.batching === !1) ||
          (!F.isBatchedMesh && He.batching === !0) ||
          (F.isInstancedMesh && He.instancing === !1) ||
          (!F.isInstancedMesh && He.instancing === !0) ||
          (F.isSkinnedMesh && He.skinning === !1) ||
          (!F.isSkinnedMesh && He.skinning === !0) ||
          (F.isInstancedMesh &&
            He.instancingColor === !0 &&
            F.instanceColor === null) ||
          (F.isInstancedMesh &&
            He.instancingColor === !1 &&
            F.instanceColor !== null) ||
          He.envMap !== Le ||
          (k.fog === !0 && He.fog !== de) ||
          (He.numClippingPlanes !== void 0 &&
            (He.numClippingPlanes !== Be.numPlanes ||
              He.numIntersection !== Be.numIntersection)) ||
          He.vertexAlphas !== ze ||
          He.vertexTangents !== Ue ||
          He.morphTargets !== Ie ||
          He.morphNormals !== vt ||
          He.morphColors !== Xt ||
          He.toneMapping !== At ||
          (Se.isWebGL2 === !0 && He.morphTargetsCount !== mt)) &&
        (gt = !0)
      : ((gt = !0), (He.__version = k.version));
      let Hn = He.currentProgram;
      gt === !0 && (Hn = ir(k, U, F));
      let ra = !1,
        Bi = !1,
        Wr = !1;
      const Pt = Hn.getUniforms(),
        kn = He.uniforms;
      if (
        (ve.useProgram(Hn.program) && ((ra = !0), (Bi = !0), (Wr = !0)),
        k.id !== H && ((H = k.id), (Bi = !0)),
        ra || S !== E)
      ) {
        (Pt.setValue(L, "projectionMatrix", E.projectionMatrix),
          Pt.setValue(L, "viewMatrix", E.matrixWorldInverse));
        const Jt = Pt.map.cameraPosition;
        (Jt !== void 0 &&
          Jt.setValue(L, Pe.setFromMatrixPosition(E.matrixWorld)),
          Se.logarithmicDepthBuffer &&
            Pt.setValue(
              L,
              "logDepthBufFC",
              2 / (Math.log(E.far + 1) / Math.LN2),
            ),
          (k.isMeshPhongMaterial ||
            k.isMeshToonMaterial ||
            k.isMeshLambertMaterial ||
            k.isMeshBasicMaterial ||
            k.isMeshStandardMaterial ||
            k.isShaderMaterial) &&
            Pt.setValue(L, "isOrthographic", E.isOrthographicCamera === !0),
          S !== E && ((S = E), (Bi = !0), (Wr = !0)));
      }
      if (F.isSkinnedMesh) {
        (Pt.setOptional(L, F, "bindMatrix"),
          Pt.setOptional(L, F, "bindMatrixInverse"));
        const Jt = F.skeleton;
        Jt &&
          (Se.floatVertexTextures ?
            (Jt.boneTexture === null && Jt.computeBoneTexture(),
            Pt.setValue(L, "boneTexture", Jt.boneTexture, y))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.",
            ));
      }
      F.isBatchedMesh &&
        (Pt.setOptional(L, F, "batchingTexture"),
        Pt.setValue(L, "batchingTexture", F._matricesTexture, y));
      const Xr = z.morphAttributes;
      if (
        ((Xr.position !== void 0 ||
          Xr.normal !== void 0 ||
          (Xr.color !== void 0 && Se.isWebGL2 === !0)) &&
          We.update(F, z, Hn),
        (Bi || He.receiveShadow !== F.receiveShadow) &&
          ((He.receiveShadow = F.receiveShadow),
          Pt.setValue(L, "receiveShadow", F.receiveShadow)),
        k.isMeshGouraudMaterial &&
          k.envMap !== null &&
          ((kn.envMap.value = Le),
          (kn.flipEnvMap.value =
            Le.isCubeTexture && Le.isRenderTargetTexture === !1 ? -1 : 1)),
        Bi &&
          (Pt.setValue(L, "toneMappingExposure", x.toneMappingExposure),
          He.needsLights && kl(kn, Wr),
          de && k.fog === !0 && he.refreshFogUniforms(kn, de),
          he.refreshMaterialUniforms(kn, k, X, B, ce),
          Cr.upload(L, na(He), kn, y)),
        k.isShaderMaterial &&
          k.uniformsNeedUpdate === !0 &&
          (Cr.upload(L, na(He), kn, y), (k.uniformsNeedUpdate = !1)),
        k.isSpriteMaterial && Pt.setValue(L, "center", F.center),
        Pt.setValue(L, "modelViewMatrix", F.modelViewMatrix),
        Pt.setValue(L, "normalMatrix", F.normalMatrix),
        Pt.setValue(L, "modelMatrix", F.matrixWorld),
        k.isShaderMaterial || k.isRawShaderMaterial)
      ) {
        const Jt = k.uniformsGroups;
        for (let $r = 0, Wl = Jt.length; $r < Wl; $r++)
          if (Se.isWebGL2) {
            const sa = Jt[$r];
            (Je.update(sa, Hn), Je.bind(sa, Hn));
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.",
            );
      }
      return Hn;
    }
    function kl(E, U) {
      ((E.ambientLightColor.needsUpdate = U),
        (E.lightProbe.needsUpdate = U),
        (E.directionalLights.needsUpdate = U),
        (E.directionalLightShadows.needsUpdate = U),
        (E.pointLights.needsUpdate = U),
        (E.pointLightShadows.needsUpdate = U),
        (E.spotLights.needsUpdate = U),
        (E.spotLightShadows.needsUpdate = U),
        (E.rectAreaLights.needsUpdate = U),
        (E.hemisphereLights.needsUpdate = U));
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
      return P;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return A;
      }),
      (this.setRenderTargetTextures = function (E, U, z) {
        ((Oe.get(E.texture).__webglTexture = U),
          (Oe.get(E.depthTexture).__webglTexture = z));
        const k = Oe.get(E);
        ((k.__hasExternalTextures = !0),
          k.__hasExternalTextures &&
            ((k.__autoAllocateDepthBuffer = z === void 0),
            k.__autoAllocateDepthBuffer ||
              (xe.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
                ),
                (k.__useRenderToTexture = !1)))));
      }),
      (this.setRenderTargetFramebuffer = function (E, U) {
        const z = Oe.get(E);
        ((z.__webglFramebuffer = U),
          (z.__useDefaultFramebuffer = U === void 0));
      }),
      (this.setRenderTarget = function (E, U = 0, z = 0) {
        ((A = E), (P = U), (w = z));
        let k = !0,
          F = null,
          de = !1,
          ye = !1;
        if (E) {
          const Le = Oe.get(E);
          Le.__useDefaultFramebuffer !== void 0 ?
            (ve.bindFramebuffer(L.FRAMEBUFFER, null), (k = !1))
          : Le.__webglFramebuffer === void 0 ? y.setupRenderTarget(E)
          : Le.__hasExternalTextures &&
            y.rebindTextures(
              E,
              Oe.get(E.texture).__webglTexture,
              Oe.get(E.depthTexture).__webglTexture,
            );
          const ze = E.texture;
          (ze.isData3DTexture ||
            ze.isDataArrayTexture ||
            ze.isCompressedArrayTexture) &&
            (ye = !0);
          const Ue = Oe.get(E).__webglFramebuffer;
          (E.isWebGLCubeRenderTarget ?
            (Array.isArray(Ue[U]) ? (F = Ue[U][z]) : (F = Ue[U]), (de = !0))
          : Se.isWebGL2 && E.samples > 0 && y.useMultisampledRTT(E) === !1 ?
            (F = Oe.get(E).__webglMultisampledFramebuffer)
          : Array.isArray(Ue) ? (F = Ue[z])
          : (F = Ue),
            b.copy(E.viewport),
            V.copy(E.scissor),
            (Z = E.scissorTest));
        } else
          (b.copy(j).multiplyScalar(X).floor(),
            V.copy(ee).multiplyScalar(X).floor(),
            (Z = Q));
        if (
          (ve.bindFramebuffer(L.FRAMEBUFFER, F) &&
            Se.drawBuffers &&
            k &&
            ve.drawBuffers(E, F),
          ve.viewport(b),
          ve.scissor(V),
          ve.setScissorTest(Z),
          de)
        ) {
          const Le = Oe.get(E.texture);
          L.framebufferTexture2D(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            L.TEXTURE_CUBE_MAP_POSITIVE_X + U,
            Le.__webglTexture,
            z,
          );
        } else if (ye) {
          const Le = Oe.get(E.texture),
            ze = U || 0;
          L.framebufferTextureLayer(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            Le.__webglTexture,
            z || 0,
            ze,
          );
        }
        H = -1;
      }),
      (this.readRenderTargetPixels = function (E, U, z, k, F, de, ye) {
        if (!(E && E.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let we = Oe.get(E).__webglFramebuffer;
        if ((E.isWebGLCubeRenderTarget && ye !== void 0 && (we = we[ye]), we)) {
          ve.bindFramebuffer(L.FRAMEBUFFER, we);
          try {
            const Le = E.texture,
              ze = Le.format,
              Ue = Le.type;
            if (
              ze !== un &&
              ge.convert(ze) !==
                L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            const Ie =
              Ue === Ki &&
              (xe.has("EXT_color_buffer_half_float") ||
                (Se.isWebGL2 && xe.has("EXT_color_buffer_float")));
            if (
              Ue !== Bn &&
              ge.convert(Ue) !==
                L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Ue === Nn &&
                (Se.isWebGL2 ||
                  xe.has("OES_texture_float") ||
                  xe.has("WEBGL_color_buffer_float"))
              ) &&
              !Ie
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            U >= 0 &&
              U <= E.width - k &&
              z >= 0 &&
              z <= E.height - F &&
              L.readPixels(U, z, k, F, ge.convert(ze), ge.convert(Ue), de);
          } finally {
            const Le = A !== null ? Oe.get(A).__webglFramebuffer : null;
            ve.bindFramebuffer(L.FRAMEBUFFER, Le);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (E, U, z = 0) {
        const k = Math.pow(2, -z),
          F = Math.floor(U.image.width * k),
          de = Math.floor(U.image.height * k);
        (y.setTexture2D(U, 0),
          L.copyTexSubImage2D(L.TEXTURE_2D, z, 0, 0, E.x, E.y, F, de),
          ve.unbindTexture());
      }),
      (this.copyTextureToTexture = function (E, U, z, k = 0) {
        const F = U.image.width,
          de = U.image.height,
          ye = ge.convert(z.format),
          we = ge.convert(z.type);
        (y.setTexture2D(z, 0),
          L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, z.flipY),
          L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
          L.pixelStorei(L.UNPACK_ALIGNMENT, z.unpackAlignment),
          U.isDataTexture ?
            L.texSubImage2D(
              L.TEXTURE_2D,
              k,
              E.x,
              E.y,
              F,
              de,
              ye,
              we,
              U.image.data,
            )
          : U.isCompressedTexture ?
            L.compressedTexSubImage2D(
              L.TEXTURE_2D,
              k,
              E.x,
              E.y,
              U.mipmaps[0].width,
              U.mipmaps[0].height,
              ye,
              U.mipmaps[0].data,
            )
          : L.texSubImage2D(L.TEXTURE_2D, k, E.x, E.y, ye, we, U.image),
          k === 0 && z.generateMipmaps && L.generateMipmap(L.TEXTURE_2D),
          ve.unbindTexture());
      }),
      (this.copyTextureToTexture3D = function (E, U, z, k, F = 0) {
        if (x.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.",
          );
          return;
        }
        const de = E.max.x - E.min.x + 1,
          ye = E.max.y - E.min.y + 1,
          we = E.max.z - E.min.z + 1,
          Le = ge.convert(k.format),
          ze = ge.convert(k.type);
        let Ue;
        if (k.isData3DTexture) (y.setTexture3D(k, 0), (Ue = L.TEXTURE_3D));
        else if (k.isDataArrayTexture || k.isCompressedArrayTexture)
          (y.setTexture2DArray(k, 0), (Ue = L.TEXTURE_2D_ARRAY));
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.",
          );
          return;
        }
        (L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, k.flipY),
          L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha),
          L.pixelStorei(L.UNPACK_ALIGNMENT, k.unpackAlignment));
        const Ie = L.getParameter(L.UNPACK_ROW_LENGTH),
          vt = L.getParameter(L.UNPACK_IMAGE_HEIGHT),
          Xt = L.getParameter(L.UNPACK_SKIP_PIXELS),
          At = L.getParameter(L.UNPACK_SKIP_ROWS),
          _n = L.getParameter(L.UNPACK_SKIP_IMAGES),
          mt = z.isCompressedTexture ? z.mipmaps[F] : z.image;
        (L.pixelStorei(L.UNPACK_ROW_LENGTH, mt.width),
          L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, mt.height),
          L.pixelStorei(L.UNPACK_SKIP_PIXELS, E.min.x),
          L.pixelStorei(L.UNPACK_SKIP_ROWS, E.min.y),
          L.pixelStorei(L.UNPACK_SKIP_IMAGES, E.min.z),
          z.isDataTexture || z.isData3DTexture ?
            L.texSubImage3D(Ue, F, U.x, U.y, U.z, de, ye, we, Le, ze, mt.data)
          : z.isCompressedArrayTexture ?
            (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.",
            ),
            L.compressedTexSubImage3D(
              Ue,
              F,
              U.x,
              U.y,
              U.z,
              de,
              ye,
              we,
              Le,
              mt.data,
            ))
          : L.texSubImage3D(Ue, F, U.x, U.y, U.z, de, ye, we, Le, ze, mt),
          L.pixelStorei(L.UNPACK_ROW_LENGTH, Ie),
          L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, vt),
          L.pixelStorei(L.UNPACK_SKIP_PIXELS, Xt),
          L.pixelStorei(L.UNPACK_SKIP_ROWS, At),
          L.pixelStorei(L.UNPACK_SKIP_IMAGES, _n),
          F === 0 && k.generateMipmaps && L.generateMipmap(Ue),
          ve.unbindTexture());
      }),
      (this.initTexture = function (E) {
        (E.isCubeTexture ? y.setTextureCube(E, 0)
        : E.isData3DTexture ? y.setTexture3D(E, 0)
        : E.isDataArrayTexture || E.isCompressedArrayTexture ?
          y.setTexture2DArray(E, 0)
        : y.setTexture2D(E, 0),
          ve.unbindTexture());
      }),
      (this.resetState = function () {
        ((P = 0), (w = 0), (A = null), ve.reset(), Ne.reset());
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
class f_ extends It {
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
class h_ extends er {
  constructor(e) {
    (super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new je(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new je(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = gl),
      (this.normalScale = new Ke(1, 1)),
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
      (this.color = new je(e)),
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
const ws = new Et(),
  Po = new G(),
  Do = new G();
class p_ {
  constructor(e) {
    ((this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ke(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Et()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Js()),
      (this._frameExtents = new Ke(1, 1)),
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
      ((e = W("div")),
        (t = W("h2")),
        (t.textContent = "3D Heatmap"),
        (i = ae()),
        (r = W("div")),
        q(r, "class", "svelte-1qp06gq"),
        q(e, "class", "panel svelte-1qp06gq"));
    },
    m(s, o) {
      (qe(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: pe,
    i: pe,
    o: pe,
    d(s) {
      (s && Xe(e), n[1](null));
    },
  };
}
function v_(n, e, t) {
  let i,
    r = null;
  const s = Xs.subscribe((_) => {
    ((r = _), r && h());
  });
  let o, a, l, c, u;
  function h() {
    if (!r) return;
    const _ = r[0].length,
      g = r.length;
    ((o = new f_()),
      (o.background = new je(1118481)),
      (a = new tn(45, 1, 0.1, 1e3)),
      a.position.set(0, -_, _ * 0.8),
      (l = new zl({ antialias: !0 })),
      l.setSize(500, 500),
      t(0, (i.innerHTML = ""), i),
      i.appendChild(l.domElement));
    const p = new Hr(_, g, _ - 1, g - 1),
      f = p.attributes.position;
    for (let P = 0; P < f.count; P++) {
      const w = P % _,
        A = Math.floor(P / _),
        H = r[A][w] * 0.1;
      f.setZ(P, H);
    }
    f.needsUpdate = !0;
    const M = [];
    for (let P = 0; P < g; P++)
      for (let w = 0; w < _; w++) {
        const A = r[P][w],
          H = Math.min(1, A / 255),
          S = 1 - H;
        M.push(H, 0, S);
      }
    p.setAttribute("color", new zn(M, 3));
    const x = new h_({ vertexColors: !0, side: dn, wireframe: !1 });
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
class x_ extends ht {
  constructor(e) {
    (super(), ft(this, e, v_, g_, ot, {}));
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
        ((e = W("div")),
          dt(t.$$.fragment),
          (i = ae()),
          dt(r.$$.fragment),
          (s = ae()),
          dt(o.$$.fragment),
          q(e, "class", "grid svelte-1udxs04"));
      },
      m(l, c) {
        (qe(l, e, c),
          ct(t, e, null),
          R(e, i),
          ct(r, e, null),
          R(e, s),
          ct(o, e, null),
          (a = !0));
      },
      p: pe,
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
class S_ extends ht {
  constructor(e) {
    (super(), ft(this, e, null, M_, ot, {}));
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
      ((e = W("li")), (e.textContent = `${n[5]}`));
    },
    m(t, i) {
      qe(t, e, i);
    },
    p: pe,
    d(t) {
      t && Xe(e);
    },
  };
}
function Fo(n) {
  let e, t, i, r, s;
  return {
    c() {
      ((e = W("article")),
        (t = W("h4")),
        (t.textContent = `${n[2].title}`),
        (i = ae()),
        (r = W("p")),
        (r.textContent = `${n[2].text}`),
        (s = ae()),
        q(t, "class", "svelte-179yap3"),
        q(r, "class", "svelte-179yap3"),
        q(e, "class", "svelte-179yap3"));
    },
    m(o, a) {
      (qe(o, e, a), R(e, t), R(e, i), R(e, r), R(e, s));
    },
    p: pe,
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
    h,
    d,
    m,
    _,
    g,
    p,
    f,
    M,
    x,
    T,
    P,
    w,
    A,
    H,
    S,
    b,
    V,
    Z,
    ie,
    D,
    N,
    B,
    X,
    $,
    J = rn(n[0]),
    j = [];
  for (let I = 0; I < J.length; I += 1) j[I] = No(Io(n, J, I));
  let ee = rn(n[1]),
    Q = [];
  for (let I = 0; I < ee.length; I += 1) Q[I] = Fo(Uo(n, ee, I));
  return {
    c() {
      ((e = W("section")),
        (t = W("h2")),
        (t.textContent = "Webapp-Erklärung (Basis)"),
        (i = ae()),
        (r = W("p")),
        (r.textContent = `Diese Seite ist eine textbasierte Einführung für neue Nutzer. Sie erklärt, was die App macht,\r
    wie man startet und wie man Probleme erkennt.`),
        (s = ae()),
        (o = W("h3")),
        (o.textContent = "Zweck der App"),
        (a = ae()),
        (l = W("p")),
        (l.textContent = `roboto verbindet Vision, Motion-Control und Sensorik in einer gemeinsamen Oberfläche.\r
    Die App kann sowohl als Analyse-Tool (Vision/Replay/Export) als auch als Steuerzentrale\r
    für Hardware (z. B. Motoren, Raster-Scan, Mobile Controller) genutzt werden.`),
        (c = ae()),
        (u = W("h3")),
        (u.textContent = "Tabs im Überblick"),
        (h = ae()),
        (d = W("ul")),
        (d.innerHTML =
          "<li><b>Dashboard</b>: Motorsteuerung + Live-Sensorik + Graph.</li> <li><b>Vision</b>: Kamera, Overlays, Annotation, Recorder/Replay.</li> <li><b>Raster</b>: Raster-Scan + Heatmap (2D/3D).</li> <li><b>Guide</b>: Diese Hilfeseite.</li>"),
        (m = ae()),
        (_ = W("h3")),
        (_.textContent = "System Status (wichtig)"),
        (g = ae()),
        (p = W("p")),
        (p.textContent = `Im linken Bereich zeigt die App live den Zustand von Backend, Frontend und WebSocket.\r
    Zusätzlich zeigt das Activity-Log jede Aktion und die Antwort vom Backend.`),
        (f = ae()),
        (M = W("h3")),
        (M.textContent = "Quickstart (für Nutzer)"),
        (x = ae()),
        (T = W("ol")));
      for (let I = 0; I < j.length; I += 1) j[I].c();
      ((P = ae()),
        (w = W("h3")),
        (w.textContent = "Fehler lesen & verstehen"),
        (A = ae()),
        (H = W("ul")),
        (H.innerHTML =
          "<li><b>Backend OFFLINE</b>: Server läuft nicht oder Port 8022 nicht erreichbar.</li> <li><b>WS DISCONNECTED</b>: WebSocket-Verbindung gestört; Echtzeitfunktionen eingeschränkt.</li> <li><b>Letzter Backend-Fehler</b>: Letzte konkrete API-Fehlermeldung (Status/Exception).</li>"),
        (S = ae()),
        (b = W("h3")),
        (b.textContent = "Hardware-Strategie (praxisnah)"),
        (V = ae()),
        (Z = W("p")),
        (Z.textContent =
          "Nicht jeder Nutzer hat die gleiche Hardware. Deshalb empfiehlt sich ein modularer Einstieg:"),
        (ie = ae()),
        (D = W("div")));
      for (let I = 0; I < Q.length; I += 1) Q[I].c();
      ((N = ae()),
        (B = W("h3")),
        (B.textContent = "Empfehlung für dein Projekt"),
        (X = ae()),
        ($ = W("p")),
        ($.textContent = `Ja, es macht absolut Sinn, Alltags-Hardware zu unterstützen. Der beste Weg ist ein\r
    "Capability-Ansatz": Funktionen dynamisch aktivieren, je nachdem welche Hardware erkannt\r
    wurde. So können Einsteiger mit PC+Handy starten und Fortgeschrittene Duet3D/Arduino nutzen,\r
    ohne dass die App überfordert.`),
        q(t, "class", "svelte-179yap3"),
        q(r, "class", "svelte-179yap3"),
        q(o, "class", "svelte-179yap3"),
        q(l, "class", "svelte-179yap3"),
        q(u, "class", "svelte-179yap3"),
        q(d, "class", "svelte-179yap3"),
        q(_, "class", "svelte-179yap3"),
        q(p, "class", "svelte-179yap3"),
        q(M, "class", "svelte-179yap3"),
        q(T, "class", "svelte-179yap3"),
        q(w, "class", "svelte-179yap3"),
        q(H, "class", "svelte-179yap3"),
        q(b, "class", "svelte-179yap3"),
        q(Z, "class", "svelte-179yap3"),
        q(D, "class", "cards svelte-179yap3"),
        q(B, "class", "svelte-179yap3"),
        q($, "class", "svelte-179yap3"),
        q(e, "class", "guide svelte-179yap3"));
    },
    m(I, K) {
      (qe(I, e, K),
        R(e, t),
        R(e, i),
        R(e, r),
        R(e, s),
        R(e, o),
        R(e, a),
        R(e, l),
        R(e, c),
        R(e, u),
        R(e, h),
        R(e, d),
        R(e, m),
        R(e, _),
        R(e, g),
        R(e, p),
        R(e, f),
        R(e, M),
        R(e, x),
        R(e, T));
      for (let Y = 0; Y < j.length; Y += 1) j[Y] && j[Y].m(T, null);
      (R(e, P),
        R(e, w),
        R(e, A),
        R(e, H),
        R(e, S),
        R(e, b),
        R(e, V),
        R(e, Z),
        R(e, ie),
        R(e, D));
      for (let Y = 0; Y < Q.length; Y += 1) Q[Y] && Q[Y].m(D, null);
      (R(e, N), R(e, B), R(e, X), R(e, $));
    },
    p(I, [K]) {
      if (K & 1) {
        J = rn(I[0]);
        let Y;
        for (Y = 0; Y < J.length; Y += 1) {
          const ce = Io(I, J, Y);
          j[Y] ? j[Y].p(ce, K) : ((j[Y] = No(ce)), j[Y].c(), j[Y].m(T, null));
        }
        for (; Y < j.length; Y += 1) j[Y].d(1);
        j.length = J.length;
      }
      if (K & 2) {
        ee = rn(I[1]);
        let Y;
        for (Y = 0; Y < ee.length; Y += 1) {
          const ce = Uo(I, ee, Y);
          Q[Y] ? Q[Y].p(ce, K) : ((Q[Y] = Fo(ce)), Q[Y].c(), Q[Y].m(D, null));
        }
        for (; Y < Q.length; Y += 1) Q[Y].d(1);
        Q.length = ee.length;
      }
    },
    i: pe,
    o: pe,
    d(I) {
      (I && Xe(e), Pi(j, I), Pi(Q, I));
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
class T_ extends ht {
  constructor(e) {
    (super(), ft(this, e, y_, E_, ot, {}));
  }
}
function b_(n) {
  let e, t, i, r, s, o, a, l, c;
  return {
    c() {
      ((e = W("div")),
        (t = W("h3")),
        (t.textContent = "Vision Model"),
        (i = ae()),
        (r = W("select")),
        (s = W("option")),
        (s.textContent = "YOLO (Boxes)"),
        (o = W("option")),
        (o.textContent = "Segmenter (Masken)"),
        (a = W("option")),
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
    m(u, h) {
      (qe(u, e, h),
        R(e, t),
        R(e, i),
        R(e, r),
        R(r, s),
        R(r, o),
        R(r, a),
        Un(r, n[0], !0),
        l || ((c = [Ye(r, "change", n[2]), Ye(r, "change", n[1])]), (l = !0)));
    },
    p(u, [h]) {
      h & 1 && Un(r, u[0]);
    },
    i: pe,
    o: pe,
    d(u) {
      (u && Xe(e), (l = !1), Ht(c));
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
class w_ extends ht {
  constructor(e) {
    (super(), ft(this, e, A_, b_, ot, {}));
  }
}
function R_(n) {
  let e, t, i, r, s, o, a, l, c, u, h, d, m, _, g, p, f, M;
  return {
    c() {
      ((e = W("div")),
        (t = W("h3")),
        (t.textContent = "Vision Backend"),
        (i = ae()),
        (r = W("select")),
        (s = W("option")),
        (s.textContent = "ONNX Runtime"),
        (o = W("option")),
        (o.textContent = "TensorRT"),
        (a = W("option")),
        (a.textContent = "OpenVINO"),
        (l = W("option")),
        (l.textContent = "SNPE (Remote)"),
        (c = ae()),
        (u = W("h3")),
        (u.textContent = "Vision Profil"),
        (h = ae()),
        (d = W("select")),
        (m = W("option")),
        (m.textContent = "NVIDIA Jetson"),
        (_ = W("option")),
        (_.textContent = "Intel CPU/iGPU"),
        (g = W("option")),
        (g.textContent = "Desktop/Laptop"),
        (p = W("option")),
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
      (qe(x, e, T),
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
        R(e, h),
        R(e, d),
        R(d, m),
        R(d, _),
        R(d, g),
        R(d, p),
        Un(d, n[1], !0),
        f ||
          ((M = [
            Ye(r, "change", n[4]),
            Ye(r, "change", n[2]),
            Ye(d, "change", n[5]),
            Ye(d, "change", n[3]),
          ]),
          (f = !0)));
    },
    p(x, [T]) {
      (T & 1 && Un(r, x[0]), T & 2 && Un(d, x[1]));
    },
    i: pe,
    o: pe,
    d(x) {
      (x && Xe(e), (f = !1), Ht(M));
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
class L_ extends ht {
  constructor(e) {
    (super(), ft(this, e, C_, R_, ot, {}));
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
    h,
    d,
    m,
    _,
    g;
  function p() {
    return n[2](n[5]);
  }
  return {
    c() {
      ((e = W("div")),
        (t = W("button")),
        (r = Ve(i)),
        (s = ae()),
        (a = Ve(o)),
        (l = ae()),
        (c = W("span")),
        (h = Ve(u)),
        (m = ae()),
        q(t, "class", "svelte-1mweq8t"),
        Rt(t, "selected", n[5].active),
        q(c, "class", (d = "status " + n[5].status + " svelte-1mweq8t")),
        q(e, "class", "node"),
        Rt(e, "active", n[5].active));
    },
    m(f, M) {
      (qe(f, e, M),
        R(e, t),
        R(t, r),
        R(t, s),
        R(t, a),
        R(e, l),
        R(e, c),
        R(c, h),
        R(e, m),
        _ || ((g = Ye(t, "click", p)), (_ = !0)));
    },
    p(f, M) {
      ((n = f),
        M & 1 && i !== (i = n[5].name + "") && Mt(r, i),
        M & 1 && o !== (o = n[5].remote ? " (Remote)" : "") && Mt(a, o),
        M & 1 && Rt(t, "selected", n[5].active),
        M & 1 &&
          u !==
            (u =
              n[5].status === "offline" ? "🔴 offline"
              : n[5].status === "degraded" ? "🟡 degraded"
              : "🟢 healthy") &&
          Mt(h, u),
        M & 1 &&
          d !== (d = "status " + n[5].status + " svelte-1mweq8t") &&
          q(c, "class", d),
        M & 1 && Rt(e, "active", n[5].active));
    },
    d(f) {
      (f && Xe(e), (_ = !1), g());
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
      e = W("div");
      for (let r = 0; r < i.length; r += 1) i[r].c();
      q(e, "class", "nodes svelte-1mweq8t");
    },
    m(r, s) {
      qe(r, e, s);
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
    i: pe,
    o: pe,
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
class U_ extends ht {
  constructor(e) {
    (super(), ft(this, e, D_, P_, ot, {}));
  }
}
function I_(n) {
  let e, t, i, r, s, o;
  return {
    c() {
      ((e = W("div")),
        (t = W("button")),
        (t.textContent = "Start Recording"),
        (i = ae()),
        (r = W("button")),
        (r.textContent = "Stop Recording"),
        q(t, "class", "svelte-16qoqwn"),
        q(r, "class", "svelte-16qoqwn"),
        q(e, "class", "recorder svelte-16qoqwn"));
    },
    m(a, l) {
      (qe(a, e, l),
        R(e, t),
        R(e, i),
        R(e, r),
        s || ((o = [Ye(t, "click", n[0]), Ye(r, "click", n[1])]), (s = !0)));
    },
    p: pe,
    i: pe,
    o: pe,
    d(a) {
      (a && Xe(e), (s = !1), Ht(o));
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
class F_ extends ht {
  constructor(e) {
    (super(), ft(this, e, N_, I_, ot, {}));
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
      ((e = W("option")),
        (i = Ve(t)),
        (e.__value = r = n[6]),
        Qe(e, e.__value));
    },
    m(s, o) {
      (qe(s, e, o), R(e, i));
    },
    p(s, o) {
      (o & 1 && t !== (t = s[6] + "") && Mt(i, t),
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
      ((e = W("div")), (t = W("select")));
      for (let c = 0; c < l.length; c += 1) l[c].c();
      ((i = ae()),
        (r = W("button")),
        (r.textContent = "Replay starten"),
        n[1] === void 0 && ti(() => n[3].call(t)));
    },
    m(c, u) {
      (qe(c, e, u), R(e, t));
      for (let h = 0; h < l.length; h += 1) l[h] && l[h].m(t, null);
      (Un(t, n[1], !0),
        R(e, i),
        R(e, r),
        s || ((o = [Ye(t, "change", n[3]), Ye(r, "click", n[2])]), (s = !0)));
    },
    p(c, [u]) {
      if (u & 1) {
        a = rn(c[0]);
        let h;
        for (h = 0; h < a.length; h += 1) {
          const d = zo(c, a, h);
          l[h] ? l[h].p(d, u) : ((l[h] = Go(d)), l[h].c(), l[h].m(t, null));
        }
        for (; h < l.length; h += 1) l[h].d(1);
        l.length = a.length;
      }
      u & 3 && Un(t, c[1]);
    },
    i: pe,
    o: pe,
    d(c) {
      (c && Xe(e), Pi(l, c), (s = !1), Ht(o));
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
      (ks.set(u.frame),
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
class z_ extends ht {
  constructor(e) {
    (super(), ft(this, e, B_, O_, ot, {}));
  }
}
function G_(n, e) {
  return Hs(wn)
    .filter((i) => i.type === "box")
    .map((i) => {
      const { x: r, y: s, w: o, h: a } = i.box,
        l = (r + o / 2) / n,
        c = (s + a / 2) / e,
        u = o / n,
        h = a / e;
      return `0 ${l} ${c} ${u} ${h}`;
    }).join(`
`);
}
function H_(n, e) {
  const t = Hs(wn),
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
function k_(n, e) {
  return Hs(wn)
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
      ((e = W("div")),
        (t = W("input")),
        (i = ae()),
        (r = W("button")),
        (r.textContent = "Export Frame"),
        q(t, "placeholder", "Dataset Name"));
    },
    m(a, l) {
      (qe(a, e, l),
        R(e, t),
        Qe(t, n[0]),
        R(e, i),
        R(e, r),
        s || ((o = [Ye(t, "input", n[2]), Ye(r, "click", n[1])]), (s = !0)));
    },
    p(a, [l]) {
      l & 1 && t.value !== a[0] && Qe(t, a[0]);
    },
    i: pe,
    o: pe,
    d(a) {
      (a && Xe(e), (s = !1), Ht(o));
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
      c = k_(a.width, a.height),
      u = H_(a.width, a.height);
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
class X_ extends ht {
  constructor(e) {
    (super(), ft(this, e, W_, V_, ot, {}));
  }
}
function Ho(n, e, t) {
  const i = n.slice();
  return ((i[7] = e[t]), i);
}
function ko(n) {
  let e, t, i;
  return {
    c() {
      ((e = W("div")),
        (t = Ve("Letzter Backend-Fehler: ")),
        (i = Ve(n[4])),
        q(e, "class", "error svelte-t9ym7a"));
    },
    m(r, s) {
      (qe(r, e, s), R(e, t), R(e, i));
    },
    p(r, s) {
      s & 16 && Mt(i, r[4]);
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
      ((e = W("div")), r.c(), q(e, "class", "log svelte-t9ym7a"));
    },
    m(s, o) {
      (qe(s, e, o), r.m(e, null));
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
  for (let r = 0; r < t.length; r += 1) i[r] = Xo(Ho(n, t, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1) i[r].c();
      e = Yl();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(r, s);
      qe(r, e, s);
    },
    p(r, s) {
      if (s & 32) {
        t = rn(r[5]);
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = Ho(r, t, o);
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
      ((e = W("div")),
        (e.textContent = "Noch keine Aktivität."),
        q(e, "class", "item muted svelte-t9ym7a"));
    },
    m(t, i) {
      qe(t, e, i);
    },
    p: pe,
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
      ((e = W("span")), (t = Ve("— ")), (r = Ve(i)), q(e, "class", "details"));
    },
    m(s, o) {
      (qe(s, e, o), R(e, t), R(e, r));
    },
    p(s, o) {
      o & 32 && i !== (i = s[7].details + "") && Mt(r, i);
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
    h,
    d,
    m = n[7].action + "",
    _,
    g,
    p,
    f,
    M = n[7].details && Wo(n);
  return {
    c() {
      ((e = W("div")),
        (t = W("span")),
        (i = Ve("[")),
        (s = Ve(r)),
        (o = Ve("]")),
        (a = ae()),
        (l = W("span")),
        (u = Ve(c)),
        (h = ae()),
        (d = W("span")),
        (_ = Ve(m)),
        (g = ae()),
        M && M.c(),
        (p = ae()),
        q(t, "class", "time svelte-t9ym7a"),
        q(l, "class", "src svelte-t9ym7a"),
        q(d, "class", "act"),
        q(e, "class", (f = "item " + n[7].status + " svelte-t9ym7a")));
    },
    m(x, T) {
      (qe(x, e, T),
        R(e, t),
        R(t, i),
        R(t, s),
        R(t, o),
        R(e, a),
        R(e, l),
        R(l, u),
        R(e, h),
        R(e, d),
        R(d, _),
        R(e, g),
        M && M.m(e, null),
        R(e, p));
    },
    p(x, T) {
      (T & 32 && r !== (r = x[7].ts + "") && Mt(s, r),
        T & 32 && c !== (c = x[7].source + "") && Mt(u, c),
        T & 32 && m !== (m = x[7].action + "") && Mt(_, m),
        x[7].details ?
          M ? M.p(x, T)
          : ((M = Wo(x)), M.c(), M.m(e, p))
        : M && (M.d(1), (M = null)),
        T & 32 &&
          f !== (f = "item " + x[7].status + " svelte-t9ym7a") &&
          q(e, "class", f));
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
    h,
    d = n[1] ? "ONLINE" : "OFFLINE",
    m,
    _,
    g,
    p,
    f,
    M = n[2] ? "ONLINE" : "OFFLINE",
    x,
    T,
    P,
    w,
    A,
    H = n[3].toUpperCase() + "",
    S,
    b,
    V,
    Z,
    ie,
    D,
    N = n[4] && ko(n),
    B = n[0] && Vo(n);
  return {
    c() {
      ((e = W("div")),
        (t = W("div")),
        (i = W("h3")),
        (i.textContent = "System Status"),
        (r = ae()),
        (s = W("button")),
        (a = Ve(o)),
        (l = ae()),
        (c = W("div")),
        (u = W("span")),
        (h = Ve("Backend: ")),
        (m = Ve(d)),
        (g = ae()),
        (p = W("span")),
        (f = Ve("Frontend: ")),
        (x = Ve(M)),
        (P = ae()),
        (w = W("span")),
        (A = Ve("WS: ")),
        (S = Ve(H)),
        (V = ae()),
        N && N.c(),
        (Z = ae()),
        B && B.c(),
        q(i, "class", "svelte-t9ym7a"),
        q(s, "class", "svelte-t9ym7a"),
        q(t, "class", "header svelte-t9ym7a"),
        q(u, "class", (_ = "badge " + Ti(n[1]) + " svelte-t9ym7a")),
        q(p, "class", (T = "badge " + Ti(n[2]) + " svelte-t9ym7a")),
        q(
          w,
          "class",
          (b = "badge " + Ti(n[3] === "connected") + " svelte-t9ym7a"),
        ),
        q(c, "class", "badges svelte-t9ym7a"),
        q(e, "class", "panel svelte-t9ym7a"));
    },
    m(X, $) {
      (qe(X, e, $),
        R(e, t),
        R(t, i),
        R(t, r),
        R(t, s),
        R(s, a),
        R(e, l),
        R(e, c),
        R(c, u),
        R(u, h),
        R(u, m),
        R(c, g),
        R(c, p),
        R(p, f),
        R(p, x),
        R(c, P),
        R(c, w),
        R(w, A),
        R(w, S),
        R(e, V),
        N && N.m(e, null),
        R(e, Z),
        B && B.m(e, null),
        ie || ((D = Ye(s, "click", n[6])), (ie = !0)));
    },
    p(X, [$]) {
      ($ & 1 && o !== (o = X[0] ? "−" : "+") && Mt(a, o),
        $ & 2 && d !== (d = X[1] ? "ONLINE" : "OFFLINE") && Mt(m, d),
        $ & 2 &&
          _ !== (_ = "badge " + Ti(X[1]) + " svelte-t9ym7a") &&
          q(u, "class", _),
        $ & 4 && M !== (M = X[2] ? "ONLINE" : "OFFLINE") && Mt(x, M),
        $ & 4 &&
          T !== (T = "badge " + Ti(X[2]) + " svelte-t9ym7a") &&
          q(p, "class", T),
        $ & 8 && H !== (H = X[3].toUpperCase() + "") && Mt(S, H),
        $ & 8 &&
          b !== (b = "badge " + Ti(X[3] === "connected") + " svelte-t9ym7a") &&
          q(w, "class", b),
        X[4] ?
          N ? N.p(X, $)
          : ((N = ko(X)), N.c(), N.m(e, Z))
        : N && (N.d(1), (N = null)),
        X[0] ?
          B ? B.p(X, $)
          : ((B = Vo(X)), B.c(), B.m(e, null))
        : B && (B.d(1), (B = null)));
    },
    i: pe,
    o: pe,
    d(X) {
      (X && Xe(e), N && N.d(), B && B.d(), (ie = !1), D());
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
class K_ extends ht {
  constructor(e) {
    (super(), ft(this, e, j_, Y_, ot, {}));
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
      ((e = W("button")),
        (e.textContent = `${n[8].label} `),
        q(e, "class", "svelte-14pwfh9"),
        Rt(e, "active", n[0] === n[8].id));
    },
    m(s, o) {
      (qe(s, e, o), t || ((i = Ye(e, "click", r)), (t = !0)));
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
    h,
    d,
    m = n[2] ? "ONLINE" : "OFFLINE",
    _,
    g,
    p,
    f,
    M = n[3].toUpperCase() + "",
    x,
    T,
    P,
    w,
    A,
    H,
    S,
    b,
    V,
    Z,
    ie,
    D,
    N,
    B,
    X,
    $,
    J,
    j,
    ee,
    Q,
    I,
    K,
    Y,
    ce,
    me = rn(n[4]),
    Me = [];
  for (let L = 0; L < me.length; L += 1) Me[L] = qo($o(n, me, L));
  ((S = new K_({})),
    (V = new L_({})),
    (ie = new w_({})),
    (N = new U_({})),
    (X = new F_({})),
    (J = new z_({})),
    (ee = new X_({})));
  const Pe = [eg, Q_, J_, Z_],
    Te = [];
  function $e(L, Ze) {
    return (
      L[0] === "dashboard" ? 0
      : L[0] === "vision" ? 1
      : L[0] === "raster" ? 2
      : L[0] === "guide" ? 3
      : -1
    );
  }
  return (
    ~(K = $e(n)) && (Y = Te[K] = Pe[K](n)),
    {
      c() {
        ((e = W("main")),
          (t = W("header")),
          (i = W("h1")),
          (i.textContent = "maazi.de | Roboto Control UI"),
          (r = ae()),
          (s = W("div")),
          (o = W("span")),
          (a = Ve("Backend: ")),
          (c = Ve(l)),
          (u = ae()),
          (h = W("span")),
          (d = Ve("Frontend: ")),
          (_ = Ve(m)),
          (g = ae()),
          (p = W("span")),
          (f = Ve("WS: ")),
          (x = Ve(M)),
          (T = ae()),
          (P = W("nav")));
        for (let L = 0; L < Me.length; L += 1) Me[L].c();
        ((w = ae()),
          (A = W("section")),
          (H = W("aside")),
          dt(S.$$.fragment),
          (b = ae()),
          dt(V.$$.fragment),
          (Z = ae()),
          dt(ie.$$.fragment),
          (D = ae()),
          dt(N.$$.fragment),
          (B = ae()),
          dt(X.$$.fragment),
          ($ = ae()),
          dt(J.$$.fragment),
          (j = ae()),
          dt(ee.$$.fragment),
          (Q = ae()),
          (I = W("div")),
          Y && Y.c(),
          q(i, "class", "svelte-14pwfh9"),
          q(o, "class", "badge svelte-14pwfh9"),
          Rt(o, "ok", n[1]),
          Rt(o, "bad", !n[1]),
          q(h, "class", "badge svelte-14pwfh9"),
          Rt(h, "ok", n[2]),
          Rt(h, "bad", !n[2]),
          q(p, "class", "badge svelte-14pwfh9"),
          Rt(p, "ok", n[3] === "connected"),
          Rt(p, "bad", n[3] !== "connected"),
          q(s, "class", "statusbar svelte-14pwfh9"),
          q(P, "class", "svelte-14pwfh9"),
          q(t, "class", "topbar svelte-14pwfh9"),
          q(H, "class", "sidebar svelte-14pwfh9"),
          q(I, "class", "workspace svelte-14pwfh9"),
          q(A, "class", "content svelte-14pwfh9"),
          q(e, "class", "app svelte-14pwfh9"));
      },
      m(L, Ze) {
        (qe(L, e, Ze),
          R(e, t),
          R(t, i),
          R(t, r),
          R(t, s),
          R(s, o),
          R(o, a),
          R(o, c),
          R(s, u),
          R(s, h),
          R(h, d),
          R(h, _),
          R(s, g),
          R(s, p),
          R(p, f),
          R(p, x),
          R(t, T),
          R(t, P));
        for (let xe = 0; xe < Me.length; xe += 1) Me[xe] && Me[xe].m(P, null);
        (R(e, w),
          R(e, A),
          R(A, H),
          ct(S, H, null),
          R(H, b),
          ct(V, H, null),
          R(H, Z),
          ct(ie, H, null),
          R(H, D),
          ct(N, H, null),
          R(H, B),
          ct(X, H, null),
          R(H, $),
          ct(J, H, null),
          R(H, j),
          ct(ee, H, null),
          R(A, Q),
          R(A, I),
          ~K && Te[K].m(I, null),
          (ce = !0));
      },
      p(L, [Ze]) {
        if (
          ((!ce || Ze & 2) &&
            l !== (l = L[1] ? "ONLINE" : "OFFLINE") &&
            Mt(c, l),
          (!ce || Ze & 2) && Rt(o, "ok", L[1]),
          (!ce || Ze & 2) && Rt(o, "bad", !L[1]),
          (!ce || Ze & 4) &&
            m !== (m = L[2] ? "ONLINE" : "OFFLINE") &&
            Mt(_, m),
          (!ce || Ze & 4) && Rt(h, "ok", L[2]),
          (!ce || Ze & 4) && Rt(h, "bad", !L[2]),
          (!ce || Ze & 8) && M !== (M = L[3].toUpperCase() + "") && Mt(x, M),
          (!ce || Ze & 8) && Rt(p, "ok", L[3] === "connected"),
          (!ce || Ze & 8) && Rt(p, "bad", L[3] !== "connected"),
          Ze & 17)
        ) {
          me = rn(L[4]);
          let Se;
          for (Se = 0; Se < me.length; Se += 1) {
            const ve = $o(L, me, Se);
            Me[Se] ?
              Me[Se].p(ve, Ze)
            : ((Me[Se] = qo(ve)), Me[Se].c(), Me[Se].m(P, null));
          }
          for (; Se < Me.length; Se += 1) Me[Se].d(1);
          Me.length = me.length;
        }
        let xe = K;
        ((K = $e(L)),
          K !== xe &&
            (Y &&
              (ec(),
              at(Te[xe], 1, 1, () => {
                Te[xe] = null;
              }),
              tc()),
            ~K ?
              ((Y = Te[K]),
              Y || ((Y = Te[K] = Pe[K](L)), Y.c()),
              nt(Y, 1),
              Y.m(I, null))
            : (Y = null)));
      },
      i(L) {
        ce ||
          (nt(S.$$.fragment, L),
          nt(V.$$.fragment, L),
          nt(ie.$$.fragment, L),
          nt(N.$$.fragment, L),
          nt(X.$$.fragment, L),
          nt(J.$$.fragment, L),
          nt(ee.$$.fragment, L),
          nt(Y),
          (ce = !0));
      },
      o(L) {
        (at(S.$$.fragment, L),
          at(V.$$.fragment, L),
          at(ie.$$.fragment, L),
          at(N.$$.fragment, L),
          at(X.$$.fragment, L),
          at(J.$$.fragment, L),
          at(ee.$$.fragment, L),
          at(Y),
          (ce = !1));
      },
      d(L) {
        (L && Xe(e),
          Pi(Me, L),
          ut(S),
          ut(V),
          ut(ie),
          ut(N),
          ut(X),
          ut(J),
          ut(ee),
          ~K && Te[K].d());
      },
    }
  );
}
function ng(n, e, t) {
  let i, r, s;
  (Gt(n, bn, (h) => t(1, (i = h))),
    Gt(n, Wi, (h) => t(2, (r = h))),
    Gt(n, Pr, (h) => t(3, (s = h))));
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
      const h = await fetch("/api/vision/nodes/status", { cache: "no-store" });
      (bn.set(h.ok), Yi.set(h.ok ? null : `${h.status} ${h.statusText}`));
    } catch (h) {
      (bn.set(!1), Yi.set(String(h)));
    }
  }
  return (
    ri(() => {
      const h = () => {
          (Wi.set(!0), Yt("frontend", "network", "success", "Browser online"));
        },
        d = () => {
          (Wi.set(!1), Yt("frontend", "network", "error", "Browser offline"));
        };
      return (
        Wi.set(navigator.onLine),
        window.addEventListener("online", h),
        window.addEventListener("offline", d),
        c(),
        (a = setInterval(c, 1500)),
        () => {
          (window.removeEventListener("online", h),
            window.removeEventListener("offline", d));
        }
      );
    }),
    Jo(() => {
      clearInterval(a);
    }),
    [o, i, r, s, l, (h) => t(0, (o = h.id))]
  );
}
class ig extends ht {
  constructor(e) {
    (super(), ft(this, e, ng, tg, ot, {}));
  }
}
new ig({ target: document.getElementById("app") });
