var ql = Object.defineProperty;
var Yl = (n, e, t) =>
  e in n ?
    ql(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
  : (n[e] = t);
var qr = (n, e, t) => Yl(n, typeof e != "symbol" ? e + "" : e, t);
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
function Ko(n) {
  return n();
}
function aa() {
  return Object.create(null);
}
function Ht(n) {
  n.forEach(Ko);
}
function Zo(n) {
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
function jl(n) {
  return Object.keys(n).length === 0;
}
function Jo(n, ...e) {
  if (n == null) {
    for (const i of e) i(void 0);
    return ve;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Hs(n) {
  let e;
  return (Jo(n, (t) => (e = t))(), e);
}
function Gt(n, e, t) {
  n.$$.on_destroy.push(Jo(e, t));
}
function R(n, e) {
  n.appendChild(e);
}
function $e(n, e, t) {
  n.insertBefore(e, t || null);
}
function We(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Jn(n, e) {
  for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
}
function k(n) {
  return document.createElement(n);
}
function Ve(n) {
  return document.createTextNode(n);
}
function ce() {
  return Ve(" ");
}
function Kl() {
  return Ve("");
}
function Ye(n, e, t, i) {
  return (n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i));
}
function $(n, e, t) {
  t == null ?
    n.removeAttribute(e)
  : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Kt(n) {
  return n === "" ? null : +n;
}
function Zl(n) {
  return Array.from(n.childNodes);
}
function St(n, e) {
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
function Mt(n, e, t) {
  n.classList.toggle(e, !!t);
}
let qi;
function Xi(n) {
  qi = n;
}
function Qo() {
  if (!qi) throw new Error("Function called outside component initialization");
  return qi;
}
function si(n) {
  Qo().$$.on_mount.push(n);
}
function el(n) {
  Qo().$$.on_destroy.push(n);
}
const Ai = [],
  mn = [];
let Ci = [];
const la = [],
  Jl = Promise.resolve();
let Rs = !1;
function Ql() {
  Rs || ((Rs = !0), Jl.then(tl));
}
function ni(n) {
  Ci.push(n);
}
const Yr = new Set();
let oi = 0;
function tl() {
  if (oi !== 0) return;
  const n = qi;
  do {
    try {
      for (; oi < Ai.length; ) {
        const e = Ai[oi];
        (oi++, Xi(e), ec(e.$$));
      }
    } catch (e) {
      throw ((Ai.length = 0), (oi = 0), e);
    }
    for (Xi(null), Ai.length = 0, oi = 0; mn.length; ) mn.pop()();
    for (let e = 0; e < Ci.length; e += 1) {
      const t = Ci[e];
      Yr.has(t) || (Yr.add(t), t());
    }
    Ci.length = 0;
  } while (Ai.length);
  for (; la.length; ) la.pop()();
  ((Rs = !1), Yr.clear(), Xi(n));
}
function ec(n) {
  if (n.fragment !== null) {
    (n.update(), Ht(n.before_update));
    const e = n.dirty;
    ((n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(ni));
  }
}
function tc(n) {
  const e = [],
    t = [];
  (Ci.forEach((i) => (n.indexOf(i) === -1 ? e.push(i) : t.push(i))),
    t.forEach((i) => i()),
    (Ci = e));
}
const Rr = new Set();
let Zn;
function nc() {
  Zn = { r: 0, c: [], p: Zn };
}
function ic() {
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
function Vt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function dt(n) {
  n && n.c();
}
function ct(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  (i && i.m(e, t),
    ni(() => {
      const s = n.$$.on_mount.map(Ko).filter(Zo);
      (n.$$.on_destroy ? n.$$.on_destroy.push(...s) : Ht(s),
        (n.$$.on_mount = []));
    }),
    r.forEach(ni));
}
function ut(n, e) {
  const t = n.$$;
  t.fragment !== null &&
    (tc(t.after_update),
    Ht(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function rc(n, e) {
  (n.$$.dirty[0] === -1 && (Ai.push(n), Ql(), n.$$.dirty.fill(0)),
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
              (!c.skip_bound && c.bound[f] && c.bound[f](_), u && rc(n, f)),
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
      const f = Zl(e.target);
      (c.fragment && c.fragment.l(f), f.forEach(We));
    } else c.fragment && c.fragment.c();
    (e.intro && nt(n.$$.fragment), ct(n, e.target, e.anchor), tl());
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
    if (!Zo(t)) return ve;
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
      !jl(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const sc = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(sc);
const li = [];
function Et(n, e = ve) {
  let t;
  const i = new Set();
  function r(a) {
    if (ot(n, a) && ((n = a), t)) {
      const l = !li.length;
      for (const c of i) (c[1](), li.push(c, n));
      if (l) {
        for (let c = 0; c < li.length; c += 2) li[c][0](li[c + 1]);
        li.length = 0;
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
const nl = Et(0),
  il = Et(0),
  bn = Et(!1),
  Wi = Et(!0),
  Yi = Et(null),
  rl = Et([]),
  ca = 250;
function jt(n, e, t = "info", i = "") {
  const s = {
    ts: new Date().toLocaleTimeString(),
    source: n,
    action: e,
    status: t,
    details: i,
  };
  rl.update((o) => {
    const a = [s, ...o];
    return (a.length > ca && (a.length = ca), a);
  });
}
async function Zt(n, e, t = {}) {
  jt("frontend", n, "pending", `${t.method || "GET"} ${e}`);
  try {
    const i = await fetch(e, t),
      r = i.ok;
    return (
      e.includes("/api/") &&
        (bn.set(r || i.status < 500),
        r || Yi.set(`${i.status} ${i.statusText}`)),
      jt("backend", n, r ? "success" : "error", `${i.status} ${i.statusText}`),
      i
    );
  } catch (i) {
    throw (
      e.includes("/api/") && (bn.set(!1), Yi.set(String(i))),
      jt("backend", n, "error", String(i)),
      i
    );
  }
}
const ac = Et(null),
  oc = Et(null),
  lc = Et(0),
  sl = Et([]),
  al = Et(null),
  ol = Et([]),
  cc = Et(null),
  ks = Et(null),
  Vs = Et(null),
  Ws = Et(null);
function uc(n) {
  (n.type === "spot" && (ac.set(n.x), oc.set(n.y)),
    n.type === "focus" && lc.set(n.value),
    n.type === "yolo_boxes" && sl.set(n.boxes),
    n.type === "segmentation_mask" && al.set(n.mask),
    n.type === "pose_keypoints" && ol.set(n.points));
}
async function hc() {
  try {
    const e = await (await Zt("vision_frame_poll", "/api/vision/frame")).json();
    if ((cc.set(e), e.status === "no_frame" || e.status === "no_node")) return;
    (ks.set(e.frame),
      Vs.set(e.results),
      Ws.set(e.model),
      nl.set(e.fps ?? 0),
      il.set(e.latency ?? 0));
  } catch {}
}
const Xs = Et(null);
function fc(n) {
  n.type === "raster_done" && Xs.set(n.map);
}
const Pr = Et("disconnected"),
  $s = Et(0);
let Bt,
  Cs = [];
function ll() {
  if (
    Bt &&
    (Bt.readyState === WebSocket.OPEN || Bt.readyState === WebSocket.CONNECTING)
  )
    return;
  const n = window.location.protocol === "https:" ? "wss" : "ws",
    e = window.location.host;
  ((Bt = new WebSocket(`${n}://${e}/api/ws`)),
    jt("frontend", "ws_connect", "pending", `${n}://${e}/api/ws`),
    (Bt.onopen = () => {
      for (
        Pr.set("connected"),
          bn.set(!0),
          jt("backend", "ws_connect", "success", "WebSocket verbunden");
        Cs.length > 0 && Bt.readyState === WebSocket.OPEN;
      ) {
        const t = Cs.shift();
        (Bt.send(t), jt("frontend", "ws_send_queued", "info", t));
      }
    }),
    (Bt.onclose = () => {
      (Pr.set("disconnected"),
        bn.set(!1),
        jt("backend", "ws_close", "error", "WebSocket getrennt"));
    }),
    (Bt.onerror = () => {
      (bn.set(!1), jt("backend", "ws_error", "error", "WebSocket-Fehler"));
    }),
    (Bt.onmessage = (t) => {
      const i = JSON.parse(t.data);
      (uc(i),
        fc(i),
        jt("backend", "ws_message", "info", i.type || "unknown"),
        i.type === "current" && $s.set(i.value));
    }));
}
function Ls(n) {
  const e = JSON.stringify(n);
  ((!Bt || Bt.readyState === WebSocket.CLOSED) && ll(),
    Bt && Bt.readyState === WebSocket.OPEN ?
      (Bt.send(e), jt("frontend", "ws_send", "info", n.type || "unknown"))
    : (Cs.push(e), jt("frontend", "ws_queue", "pending", n.type || "unknown")));
}
function dc(n) {
  let e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p, h;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "Motor Control"),
        (i = ce()),
        (r = k("label")),
        (s = Ve("Servo Angle: ")),
        (o = Ve(n[0])),
        (a = Ve("°")),
        (l = ce()),
        (c = k("input")),
        (u = ce()),
        (f = k("label")),
        (f.textContent = "Stepper Position (mm)"),
        (d = ce()),
        (m = k("input")),
        (_ = ce()),
        (g = k("button")),
        (g.textContent = "Move"),
        $(r, "for", "servo-angle"),
        $(c, "id", "servo-angle"),
        $(c, "type", "range"),
        $(c, "min", "0"),
        $(c, "max", "180"),
        $(f, "for", "stepper-pos"),
        $(m, "id", "stepper-pos"),
        $(m, "type", "number"),
        $(e, "class", "panel svelte-kgftxi"));
    },
    m(M, x) {
      ($e(M, e, x),
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
            Ye(c, "change", n[4]),
            Ye(c, "input", n[4]),
            Ye(c, "change", n[2]),
            Ye(m, "input", n[5]),
            Ye(g, "click", n[3]),
          ]),
          (p = !0)));
    },
    p(M, [x]) {
      (x & 1 && St(o, M[0]),
        x & 1 && Qe(c, M[0]),
        x & 2 && Kt(m.value) !== M[1] && Qe(m, M[1]));
    },
    i: ve,
    o: ve,
    d(M) {
      (M && We(e), (p = !1), Ht(h));
    },
  };
}
function pc(n, e, t) {
  let i = 90,
    r = 0;
  function s() {
    Ls({ type: "servo_move", angle: i });
  }
  function o() {
    Ls({ type: "stepper_move", pos: r });
  }
  function a() {
    ((i = Kt(this.value)), t(0, i));
  }
  function l() {
    ((r = Kt(this.value)), t(1, r));
  }
  return [i, r, s, o, a, l];
}
class mc extends ft {
  constructor(e) {
    (super(), ht(this, e, pc, dc, ot, {}));
  }
}
function _c(n) {
  let e,
    t,
    i,
    r,
    s,
    o = n[0].toFixed(2) + "",
    a;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "Sensor Live"),
        (i = ce()),
        (r = k("p")),
        (s = Ve("Current: ")),
        (a = Ve(o)),
        $(e, "class", "panel svelte-kgftxi"));
    },
    m(l, c) {
      ($e(l, e, c), R(e, t), R(e, i), R(e, r), R(r, s), R(r, a));
    },
    p(l, [c]) {
      c & 1 && o !== (o = l[0].toFixed(2) + "") && St(a, o);
    },
    i: ve,
    o: ve,
    d(l) {
      l && We(e);
    },
  };
}
function gc(n, e, t) {
  let i = 0;
  const r = $s.subscribe((s) => t(0, (i = s)));
  return (si(() => () => r()), [i]);
}
class vc extends ft {
  constructor(e) {
    (super(), ht(this, e, gc, _c, ot, {}));
  }
}
function xc(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "Sensor Graph"),
        (i = ce()),
        (r = k("canvas")),
        $(r, "width", "300"),
        $(r, "height", "150"),
        $(e, "class", "panel svelte-kgftxi"));
    },
    m(s, o) {
      ($e(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: ve,
    i: ve,
    o: ve,
    d(s) {
      (s && We(e), n[1](null));
    },
  };
}
function Mc(n, e, t) {
  let i,
    r,
    s = [];
  si(() => {
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
class Sc extends ft {
  constructor(e) {
    (super(), ht(this, e, Mc, xc, ot, {}));
  }
}
function Ec(n) {
  let e, t, i, r, s, o, a;
  return (
    (t = new mc({})),
    (r = new vc({})),
    (o = new Sc({})),
    {
      c() {
        ((e = k("div")),
          dt(t.$$.fragment),
          (i = ce()),
          dt(r.$$.fragment),
          (s = ce()),
          dt(o.$$.fragment),
          $(e, "class", "grid svelte-1udxs04"));
      },
      m(l, c) {
        ($e(l, e, c),
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
        (l && We(e), ut(t), ut(r), ut(o));
      },
    }
  );
}
function yc(n) {
  return (si(() => ll()), []);
}
class Tc extends ft {
  constructor(e) {
    (super(), ht(this, e, yc, Ec, ot, {}));
  }
}
function bc(n) {
  let e, t, i, r, s;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "Camera"),
        (i = ce()),
        (r = k("img")),
        oa(r.src, (s = n[0])) || $(r, "src", s),
        $(r, "alt", "camera stream"),
        $(r, "class", "svelte-kxb172"),
        $(e, "class", "panel svelte-kxb172"));
    },
    m(o, a) {
      ($e(o, e, a), R(e, t), R(e, i), R(e, r));
    },
    p(o, [a]) {
      a & 1 && !oa(r.src, (s = o[0])) && $(r, "src", s);
    },
    i: ve,
    o: ve,
    d(o) {
      o && We(e);
    },
  };
}
function Ac(n, e, t) {
  let { url: i = "/video" } = e;
  return (
    (n.$$set = (r) => {
      "url" in r && t(0, (i = r.url));
    }),
    [i]
  );
}
class wc extends ft {
  constructor(e) {
    (super(), ht(this, e, Ac, bc, ot, { url: 0 }));
  }
}
function Rc(n) {
  let e;
  return {
    c() {
      ((e = k("canvas")),
        $(e, "width", "640"),
        $(e, "height", "480"),
        $(e, "class", "svelte-xfekda"));
    },
    m(t, i) {
      ($e(t, e, i), n[1](e));
    },
    p: ve,
    i: ve,
    o: ve,
    d(t) {
      (t && We(e), n[1](null));
    },
  };
}
function Cc(n, e, t) {
  let i,
    r = [],
    s = null,
    o = [];
  (sl.subscribe((c) => (r = c)),
    al.subscribe((c) => (s = c)),
    ol.subscribe((c) => (o = c)));
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
class Lc extends ft {
  constructor(e) {
    (super(), ht(this, e, Cc, Rc, ot, {}));
  }
}
function Pc(n) {
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
      ((e = k("div")),
        (t = k("div")),
        (i = Ve("FPS: ")),
        (s = Ve(r)),
        (o = ce()),
        (a = k("div")),
        (l = Ve("Latency: ")),
        (u = Ve(c)),
        (f = Ve(" ms")),
        $(e, "class", "perf svelte-1d8pabv"));
    },
    m(d, m) {
      ($e(d, e, m),
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
      (m & 1 && r !== (r = d[0].toFixed(1) + "") && St(s, r),
        m & 2 && c !== (c = d[1].toFixed(1) + "") && St(u, c));
    },
    i: ve,
    o: ve,
    d(d) {
      d && We(e);
    },
  };
}
function Dc(n, e, t) {
  let i, r;
  return (
    Gt(n, nl, (s) => t(0, (i = s))),
    Gt(n, il, (s) => t(1, (r = s))),
    [i, r]
  );
}
class Uc extends ft {
  constructor(e) {
    (super(), ht(this, e, Dc, Pc, ot, {}));
  }
}
const wn = Et([]);
function Ic(n, e, t, i, r = "object") {
  wn.update((s) => [
    ...s,
    { type: "box", box: { x: n, y: e, w: t, h: i }, class: r },
  ]);
}
function Nc(n, e = "object") {
  wn.update((t) => [...t, { type: "mask", points: n, class: e }]);
}
function Fc(n, e = "person") {
  wn.update((t) => [...t, { type: "keypoints", points: n, class: e }]);
}
function Oc(n, e, t, i) {
  wn.update((r) => ((r[n].points[e].x = t), (r[n].points[e].y = i), r));
}
function Bc(n) {
  let e, t, i;
  return {
    c() {
      ((e = k("canvas")),
        $(e, "width", "1280"),
        $(e, "height", "720"),
        $(e, "class", "svelte-1pdvpkz"));
    },
    m(r, s) {
      ($e(r, e, s),
        n[3](e),
        t || ((i = [Ye(e, "click", n[1]), Ye(e, "dblclick", n[2])]), (t = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(r) {
      (r && We(e), n[3](null), (t = !1), Ht(i));
    },
  };
}
function zc(n, e, t) {
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
    (s.length > 2 && Nc(s), (s = []), l());
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
class Gc extends ft {
  constructor(e) {
    (super(), ht(this, e, zc, Bc, ot, {}));
  }
}
function Hc(n) {
  let e, t, i;
  return {
    c() {
      ((e = k("canvas")),
        $(e, "width", "1280"),
        $(e, "height", "720"),
        $(e, "class", "svelte-uet3hy"));
    },
    m(r, s) {
      ($e(r, e, s),
        n[4](e),
        t ||
          ((i = [Ye(e, "mousedown", n[1]), Ye(e, "mouseup", n[2])]), (t = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(r) {
      (r && We(e), n[4](null), (t = !1), Ht(i));
    },
  };
}
function kc(n, e, t) {
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
    Ic(a, l, M, x);
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
class Vc extends ft {
  constructor(e) {
    (super(), ht(this, e, kc, Hc, ot, {}));
  }
}
function Wc(n) {
  let e, t, i;
  return {
    c() {
      ((e = k("canvas")),
        $(e, "width", "1280"),
        $(e, "height", "720"),
        $(e, "class", "svelte-1pdvpkz"));
    },
    m(r, s) {
      ($e(r, e, s),
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
    p: ve,
    i: ve,
    o: ve,
    d(r) {
      (r && We(e), n[6](null), (t = !1), Ht(i));
    },
  };
}
const jr = 6;
function Xc(n, e, t) {
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
    (o.push({ x, y: T, score: 1 }), o.length === 17 && (Fc(o), (o = [])), d());
  }
  function c(h) {
    const M = r.getBoundingClientRect(),
      x = h.clientX - M.left,
      T = h.clientY - M.top;
    i.forEach((P, w) => {
      P.type === "keypoints" &&
        P.points.forEach((A, I) => {
          const S = A.x - x,
            b = A.y - T;
          S * S + b * b < jr * jr && (a = { annIndex: w, pointIndex: I });
        });
    });
  }
  function u(h) {
    if (!a) return;
    const M = r.getBoundingClientRect(),
      x = h.clientX - M.left,
      T = h.clientY - M.top;
    (Oc(a.annIndex, a.pointIndex, x, T), d());
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
          P = h[x];
        !T ||
          !P ||
          (s.beginPath(), s.moveTo(T.x, T.y), s.lineTo(P.x, P.y), s.stroke());
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
class $c extends ft {
  constructor(e) {
    (super(), ht(this, e, Xc, Wc, ot, {}));
  }
}
function qc(n) {
  let e, t, i, r, s, o, a, l, c, u, f;
  return (
    (r = new Uc({})),
    (o = new Gc({})),
    (l = new Vc({})),
    (u = new $c({})),
    {
      c() {
        ((e = k("div")),
          (t = k("canvas")),
          (i = ce()),
          dt(r.$$.fragment),
          (s = ce()),
          dt(o.$$.fragment),
          (a = ce()),
          dt(l.$$.fragment),
          (c = ce()),
          dt(u.$$.fragment),
          $(t, "class", "svelte-1cq807x"),
          $(e, "class", "vision-container svelte-1cq807x"));
      },
      m(d, m) {
        ($e(d, e, m),
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
        (d && We(e), n[5](null), ut(r), ut(o), ut(l), ut(u));
      },
    }
  );
}
function Yc(n, e, t) {
  let i, r, s;
  (Gt(n, Ws, (p) => t(2, (i = p))),
    Gt(n, Vs, (p) => t(3, (r = p))),
    Gt(n, ks, (p) => t(4, (s = p))));
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
      const [P, w, A, I] = h[T];
      u.strokeRect(P, w, A, I);
    }
  }
  function m(p) {
    const h = p.length,
      M = p[0].length,
      x = u.createImageData(M, h);
    let T = 0;
    for (let P = 0; P < h; P++)
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
class jc extends ft {
  constructor(e) {
    (super(), ht(this, e, Yc, qc, ot, {}));
  }
}
function Kc(n) {
  let e, t, i, r, s, o, a;
  return (
    (t = new wc({})),
    (r = new Lc({})),
    (o = new jc({})),
    {
      c() {
        ((e = k("div")),
          dt(t.$$.fragment),
          (i = ce()),
          dt(r.$$.fragment),
          (s = ce()),
          dt(o.$$.fragment),
          $(e, "class", "vision-container svelte-1g74rqe"));
      },
      m(l, c) {
        ($e(l, e, c),
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
        (l && We(e), ut(t), ut(r), ut(o));
      },
    }
  );
}
function Zc(n) {
  let e;
  return (si(() => ((e = setInterval(hc, 100)), () => clearInterval(e))), []);
}
class Jc extends ft {
  constructor(e) {
    (super(), ht(this, e, Zc, Kc, ot, {}));
  }
}
function Qc(n) {
  let e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p, h, M, x, T, P, w;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "Raster Scan"),
        (i = ce()),
        (r = k("label")),
        (r.textContent = "X Range"),
        (s = ce()),
        (o = k("input")),
        (a = ce()),
        (l = k("input")),
        (c = ce()),
        (u = k("label")),
        (u.textContent = "Y Range"),
        (f = ce()),
        (d = k("input")),
        (m = ce()),
        (_ = k("input")),
        (g = ce()),
        (p = k("label")),
        (p.textContent = "Step"),
        (h = ce()),
        (M = k("input")),
        (x = ce()),
        (T = k("button")),
        (T.textContent = "Start"),
        $(r, "for", "x0"),
        $(o, "id", "x0"),
        $(o, "type", "number"),
        $(l, "id", "x1"),
        $(l, "type", "number"),
        $(u, "for", "y0"),
        $(d, "id", "y0"),
        $(d, "type", "number"),
        $(_, "id", "y1"),
        $(_, "type", "number"),
        $(p, "for", "step"),
        $(M, "id", "step"),
        $(M, "type", "number"),
        $(e, "class", "panel"));
    },
    m(A, I) {
      ($e(A, e, I),
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
    p(A, [I]) {
      (I & 1 && Kt(o.value) !== A[0] && Qe(o, A[0]),
        I & 2 && Kt(l.value) !== A[1] && Qe(l, A[1]),
        I & 4 && Kt(d.value) !== A[2] && Qe(d, A[2]),
        I & 8 && Kt(_.value) !== A[3] && Qe(_, A[3]),
        I & 16 && Kt(M.value) !== A[4] && Qe(M, A[4]));
    },
    i: ve,
    o: ve,
    d(A) {
      (A && We(e), (P = !1), Ht(w));
    },
  };
}
function eu(n, e, t) {
  let i = 0,
    r = 50,
    s = 0,
    o = 50,
    a = 1;
  function l() {
    Ls({ type: "raster_start", x_range: [i, r], y_range: [s, o], step: a });
  }
  function c() {
    ((i = Kt(this.value)), t(0, i));
  }
  function u() {
    ((r = Kt(this.value)), t(1, r));
  }
  function f() {
    ((s = Kt(this.value)), t(2, s));
  }
  function d() {
    ((o = Kt(this.value)), t(3, o));
  }
  function m() {
    ((a = Kt(this.value)), t(4, a));
  }
  return [i, r, s, o, a, l, c, u, f, d, m];
}
class tu extends ft {
  constructor(e) {
    (super(), ht(this, e, eu, Qc, ot, {}));
  }
}
function nu(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "Heatmap"),
        (i = ce()),
        (r = k("canvas")),
        $(r, "class", "svelte-1biaxg0"),
        $(e, "class", "panel svelte-1biaxg0"));
    },
    m(s, o) {
      ($e(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: ve,
    i: ve,
    o: ve,
    d(s) {
      (s && We(e), n[1](null));
    },
  };
}
function iu(n, e, t) {
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
class ru extends ft {
  constructor(e) {
    (super(), ht(this, e, iu, nu, ot, {}));
  }
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const qs = "160",
  su = 0,
  ua = 1,
  au = 2,
  cl = 1,
  ou = 2,
  En = 3,
  Gn = 0,
  Xt = 1,
  dn = 2,
  Fn = 0,
  Li = 1,
  ha = 2,
  fa = 3,
  da = 4,
  lu = 5,
  jn = 100,
  cu = 101,
  uu = 102,
  pa = 103,
  ma = 104,
  hu = 200,
  fu = 201,
  du = 202,
  pu = 203,
  Ps = 204,
  Ds = 205,
  mu = 206,
  _u = 207,
  gu = 208,
  vu = 209,
  xu = 210,
  Mu = 211,
  Su = 212,
  Eu = 213,
  yu = 214,
  Tu = 0,
  bu = 1,
  Au = 2,
  Dr = 3,
  wu = 4,
  Ru = 5,
  Cu = 6,
  Lu = 7,
  Ys = 0,
  Pu = 1,
  Du = 2,
  On = 0,
  Uu = 1,
  Iu = 2,
  Nu = 3,
  Fu = 4,
  Ou = 5,
  Bu = 6,
  ul = 300,
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
  tn = 1006,
  zu = 1007,
  ji = 1008,
  Bn = 1009,
  Gu = 1010,
  Hu = 1011,
  js = 1012,
  hl = 1013,
  In = 1014,
  Nn = 1015,
  Ki = 1016,
  fl = 1017,
  dl = 1018,
  Qn = 1020,
  ku = 1021,
  un = 1023,
  Vu = 1024,
  Wu = 1025,
  ei = 1026,
  Ii = 1027,
  Xu = 1028,
  pl = 1029,
  $u = 1030,
  ml = 1031,
  _l = 1033,
  Zr = 33776,
  Jr = 33777,
  Qr = 33778,
  es = 33779,
  ga = 35840,
  va = 35841,
  xa = 35842,
  Ma = 35843,
  gl = 36196,
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
  qu = 36283,
  za = 36284,
  Ga = 36285,
  Ha = 36286,
  vl = 3e3,
  ti = 3001,
  Yu = 3200,
  ju = 3201,
  xl = 0,
  Ku = 1,
  rn = "",
  Lt = "srgb",
  An = "srgb-linear",
  Ks = "display-p3",
  zr = "display-p3-linear",
  Ur = "linear",
  lt = "srgb",
  Ir = "rec709",
  Nr = "p3",
  ci = 7680,
  ka = 519,
  Zu = 512,
  Ju = 513,
  Qu = 514,
  Ml = 515,
  eh = 516,
  th = 517,
  nh = 518,
  ih = 519,
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
function Wt(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function rh(n, e) {
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
    return Math.acos(Wt(i, -1, 1));
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
      P = r[2],
      w = r[5],
      A = r[8];
    return (
      (s[0] = o * g + a * M + l * P),
      (s[3] = o * p + a * x + l * w),
      (s[6] = o * h + a * T + l * A),
      (s[1] = c * g + u * M + f * P),
      (s[4] = c * p + u * x + f * w),
      (s[7] = c * h + u * T + f * A),
      (s[2] = d * g + m * M + _ * P),
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
const rs = new ke();
function Sl(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return !0;
  return !1;
}
function Or(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function sh() {
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
  ah = new Set([An, zr]),
  tt = {
    enabled: !0,
    _workingColorSpace: An,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(n) {
      if (!ah.has(n))
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
      return n === rn ? Ur : sr[n].transfer;
    },
  };
function Pi(n) {
  return n < 0.04045 ?
      n * 0.0773993808
    : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function ss(n) {
  return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let ui;
class El {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      (ui === void 0 && (ui = Or("canvas")),
        (ui.width = e.width),
        (ui.height = e.height));
      const i = ui.getContext("2d");
      (e instanceof ImageData ?
        i.putImageData(e, 0, 0)
      : i.drawImage(e, 0, 0, e.width, e.height),
        (t = ui));
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
      for (let o = 0; o < s.length; o++) s[o] = Pi(s[o] / 255) * 255;
      return (i.putImageData(r, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ?
          (t[i] = Math.floor(Pi(t[i] / 255) * 255))
        : (t[i] = Pi(t[i]));
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
let oh = 0;
class yl {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: oh++ }),
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
      El.getDataURL(n)
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
let lh = 0;
class Jt extends Fi {
  constructor(
    e = Jt.DEFAULT_IMAGE,
    t = Jt.DEFAULT_MAPPING,
    i = cn,
    r = cn,
    s = tn,
    o = ji,
    a = un,
    l = Bn,
    c = Jt.DEFAULT_ANISOTROPY,
    u = rn,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: lh++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.source = new yl(e)),
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
        (this.colorSpace = u === ti ? Lt : rn)),
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
    if (this.mapping !== ul) return e;
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
      this.colorSpace === Lt ? ti : vl
    );
  }
  set encoding(e) {
    ($i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === ti ? Lt : rn));
  }
}
Jt.DEFAULT_IMAGE = null;
Jt.DEFAULT_MAPPING = ul;
Jt.DEFAULT_ANISOTROPY = 1;
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
        P = (h + 1) / 2,
        w = (u + d) / 4,
        A = (f + g) / 4,
        I = (_ + p) / 4;
      return (
        x > T && x > P ?
          x < 0.01 ?
            ((i = 0), (r = 0.707106781), (s = 0.707106781))
          : ((i = Math.sqrt(x)), (r = w / i), (s = A / i))
        : T > P ?
          T < 0.01 ?
            ((i = 0.707106781), (r = 0), (s = 0.707106781))
          : ((r = Math.sqrt(T)), (i = w / r), (s = I / r))
        : P < 0.01 ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
        : ((s = Math.sqrt(P)), (i = A / s), (r = I / s)),
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
class ch extends Fi {
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
      (i.colorSpace = i.encoding === ti ? Lt : rn)),
      (i = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: tn,
          depthBuffer: !0,
          stencilBuffer: !1,
          depthTexture: null,
          samples: 0,
        },
        i,
      )),
      (this.texture = new Jt(
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
      (this.texture.source = new yl(t)),
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
class ii extends ch {
  constructor(e = 1, t = 1, i = {}) {
    (super(e, t, i), (this.isWebGLRenderTarget = !0));
  }
}
class Tl extends Jt {
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
class uh extends Jt {
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
        const P = Math.sqrt(x),
          w = Math.atan2(P, h * M);
        ((p = Math.sin(p * w) / P), (a = Math.sin(a * w) / P));
      }
      const T = a * M;
      if (
        ((l = l * p + d * T),
        (c = c * p + m * T),
        (u = u * p + _ * T),
        (f = f * p + g * T),
        p === 1 - a)
      ) {
        const P = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        ((l *= P), (c *= P), (u *= P), (f *= P));
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
    return 2 * Math.acos(Math.abs(Wt(this.dot(e), -1, 1)));
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
class z {
  constructor(e = 0, t = 0, i = 0) {
    ((z.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i));
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
    return Math.acos(Wt(i, -1, 1));
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
const os = new z(),
  ja = new Ji();
class Qi {
  constructor(
    e = new z(1 / 0, 1 / 0, 1 / 0),
    t = new z(-1 / 0, -1 / 0, -1 / 0),
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
      hi.subVectors(e.a, Gi),
      fi.subVectors(e.b, Gi),
      di.subVectors(e.c, Gi),
      Rn.subVectors(fi, hi),
      Cn.subVectors(di, fi),
      Vn.subVectors(hi, di));
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
        !ls(t, hi, fi, di, or) ||
          ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ls(t, hi, fi, di, or))
      ) ?
        !1
      : (lr.crossVectors(Rn, Cn),
        (t = [lr.x, lr.y, lr.z]),
        ls(t, hi, fi, di, or));
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
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
  ],
  sn = new z(),
  ar = new Qi(),
  hi = new z(),
  fi = new z(),
  di = new z(),
  Rn = new z(),
  Cn = new z(),
  Vn = new z(),
  Gi = new z(),
  or = new z(),
  lr = new z(),
  Wn = new z();
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
const hh = new Qi(),
  Hi = new z(),
  cs = new z();
class Zs {
  constructor(e = new z(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : hh.setFromPoints(e).getCenter(i);
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
const vn = new z(),
  us = new z(),
  cr = new z(),
  Ln = new z(),
  hs = new z(),
  ur = new z(),
  fs = new z();
class fh {
  constructor(e = new z(), t = new z(0, 0, -1)) {
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
class yt {
  constructor(e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p) {
    ((yt.prototype.isMatrix4 = !0),
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
    return new yt().fromArray(this.elements);
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
      r = 1 / pi.setFromMatrixColumn(e, 0).length(),
      s = 1 / pi.setFromMatrixColumn(e, 1).length(),
      o = 1 / pi.setFromMatrixColumn(e, 2).length();
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
    return this.compose(dh, e, ph);
  }
  lookAt(e, t, i) {
    const r = this.elements;
    return (
      qt.subVectors(e, t),
      qt.lengthSq() === 0 && (qt.z = 1),
      qt.normalize(),
      Pn.crossVectors(i, qt),
      Pn.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (qt.x += 1e-4) : (qt.z += 1e-4),
        qt.normalize(),
        Pn.crossVectors(i, qt)),
      Pn.normalize(),
      hr.crossVectors(qt, Pn),
      (r[0] = Pn.x),
      (r[4] = hr.x),
      (r[8] = qt.x),
      (r[1] = Pn.y),
      (r[5] = hr.y),
      (r[9] = qt.y),
      (r[2] = Pn.z),
      (r[6] = hr.z),
      (r[10] = qt.z),
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
      P = i[15],
      w = r[0],
      A = r[4],
      I = r[8],
      S = r[12],
      b = r[1],
      W = r[5],
      Y = r[9],
      oe = r[13],
      D = r[2],
      N = r[6],
      X = r[10],
      K = r[14],
      q = r[3],
      j = r[7],
      Z = r[11],
      te = r[15];
    return (
      (s[0] = o * w + a * b + l * D + c * q),
      (s[4] = o * A + a * W + l * N + c * j),
      (s[8] = o * I + a * Y + l * X + c * Z),
      (s[12] = o * S + a * oe + l * K + c * te),
      (s[1] = u * w + f * b + d * D + m * q),
      (s[5] = u * A + f * W + d * N + m * j),
      (s[9] = u * I + f * Y + d * X + m * Z),
      (s[13] = u * S + f * oe + d * K + m * te),
      (s[2] = _ * w + g * b + p * D + h * q),
      (s[6] = _ * A + g * W + p * N + h * j),
      (s[10] = _ * I + g * Y + p * X + h * Z),
      (s[14] = _ * S + g * oe + p * K + h * te),
      (s[3] = M * w + x * b + T * D + P * q),
      (s[7] = M * A + x * W + T * N + P * j),
      (s[11] = M * I + x * Y + T * X + P * Z),
      (s[15] = M * S + x * oe + T * K + P * te),
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
      P = _ * f * l - u * g * l - _ * a * d + o * g * d + u * a * p - o * f * p,
      w = t * M + i * x + r * T + s * P;
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
      (e[12] = P * A),
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
      P = i.x,
      w = i.y,
      A = i.z;
    return (
      (r[0] = (1 - (g + h)) * P),
      (r[1] = (m + T) * P),
      (r[2] = (_ - x) * P),
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
    let s = pi.set(r[0], r[1], r[2]).length();
    const o = pi.set(r[4], r[5], r[6]).length(),
      a = pi.set(r[8], r[9], r[10]).length();
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
const pi = new z(),
  an = new yt(),
  dh = new z(0, 0, 0),
  ph = new z(1, 1, 1),
  Pn = new z(),
  hr = new z(),
  qt = new z(),
  Ka = new yt(),
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
        ((this._y = Math.asin(Wt(a, -1, 1))),
          Math.abs(a) < 0.9999999 ?
            ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
          : ((this._x = Math.atan2(d, c)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Wt(u, -1, 1))),
          Math.abs(u) < 0.9999999 ?
            ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
          : ((this._y = Math.atan2(-f, s)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Wt(d, -1, 1))),
          Math.abs(d) < 0.9999999 ?
            ((this._y = Math.atan2(-f, m)), (this._z = Math.atan2(-o, c)))
          : ((this._y = 0), (this._z = Math.atan2(l, s))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Wt(f, -1, 1))),
          Math.abs(f) < 0.9999999 ?
            ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(l, s)))
          : ((this._x = 0), (this._z = Math.atan2(-o, c))));
        break;
      case "YZX":
        ((this._z = Math.asin(Wt(l, -1, 1))),
          Math.abs(l) < 0.9999999 ?
            ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
          : ((this._x = 0), (this._y = Math.atan2(a, m))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Wt(o, -1, 1))),
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
class bl {
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
let mh = 0;
const Ja = new z(),
  mi = new Ji(),
  xn = new yt(),
  fr = new z(),
  ki = new z(),
  _h = new z(),
  gh = new Ji(),
  Qa = new z(1, 0, 0),
  eo = new z(0, 1, 0),
  to = new z(0, 0, 1),
  vh = { type: "added" },
  xh = { type: "removed" };
class It extends Fi {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: mh++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = It.DEFAULT_UP.clone()));
    const e = new z(),
      t = new Gr(),
      i = new Ji(),
      r = new z(1, 1, 1);
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
        modelViewMatrix: { value: new yt() },
        normalMatrix: { value: new ke() },
      }),
      (this.matrix = new yt()),
      (this.matrixWorld = new yt()),
      (this.matrixAutoUpdate = It.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new bl()),
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
    return (mi.setFromAxisAngle(e, t), this.quaternion.multiply(mi), this);
  }
  rotateOnWorldAxis(e, t) {
    return (mi.setFromAxisAngle(e, t), this.quaternion.premultiply(mi), this);
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
      ki.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ?
        xn.lookAt(ki, fr, this.up)
      : xn.lookAt(fr, ki, this.up),
      this.quaternion.setFromRotationMatrix(xn),
      r &&
        (xn.extractRotation(r.matrixWorld),
        mi.setFromRotationMatrix(xn),
        this.quaternion.premultiply(mi.invert())));
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
          e.dispatchEvent(vh))
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
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(xh)),
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
      this.matrixWorld.decompose(ki, e, _h),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(ki, gh, e),
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
It.DEFAULT_UP = new z(0, 1, 0);
It.DEFAULT_MATRIX_AUTO_UPDATE = !0;
It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const on = new z(),
  Mn = new z(),
  ds = new z(),
  Sn = new z(),
  _i = new z(),
  gi = new z(),
  no = new z(),
  ps = new z(),
  ms = new z(),
  _s = new z();
let dr = !1;
class ln {
  constructor(e = new z(), t = new z(), i = new z()) {
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
    (_i.subVectors(r, i), gi.subVectors(s, i), ps.subVectors(e, i));
    const l = _i.dot(ps),
      c = gi.dot(ps);
    if (l <= 0 && c <= 0) return t.copy(i);
    ms.subVectors(e, r);
    const u = _i.dot(ms),
      f = gi.dot(ms);
    if (u >= 0 && f <= u) return t.copy(r);
    const d = l * f - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return ((o = l / (l - u)), t.copy(i).addScaledVector(_i, o));
    _s.subVectors(e, s);
    const m = _i.dot(_s),
      _ = gi.dot(_s);
    if (_ >= 0 && m <= _) return t.copy(s);
    const g = m * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return ((a = c / (c - _)), t.copy(i).addScaledVector(gi, a));
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
      t.copy(i).addScaledVector(_i, o).addScaledVector(gi, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Al = {
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
    if (((e = rh(e, 1)), (t = Wt(t, 0, 1)), (i = Wt(i, 0, 1)), t === 0))
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
    const i = Al[e.toLowerCase()];
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
    return ((this.r = Pi(e.r)), (this.g = Pi(e.g)), (this.b = Pi(e.b)), this);
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
      Math.round(Wt(Ut.r * 255, 0, 255)) * 65536 +
        Math.round(Wt(Ut.g * 255, 0, 255)) * 256 +
        Math.round(Wt(Ut.b * 255, 0, 255))
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
const Ut = new je();
je.NAMES = Al;
let Mh = 0;
class er extends Fi {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Mh++ }),
      (this.uuid = Zi()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Li),
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
      (this.stencilFail = ci),
      (this.stencilZFail = ci),
      (this.stencilZPass = ci),
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
      this.blending !== Li && (i.blending = this.blending),
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
      this.stencilFail !== ci && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== ci && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== ci && (i.stencilZPass = this.stencilZPass),
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
class wl extends er {
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
const xt = new z(),
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
class Rl extends pn {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Cl extends pn {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class zn extends pn {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let Sh = 0;
const en = new yt(),
  vs = new It(),
  vi = new z(),
  Yt = new Qi(),
  Vi = new Qi(),
  Rt = new z();
class ai extends Fi {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Sh++ }),
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
        (this.index = new (Sl(e) ? Cl : Rl)(e, 1))
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
    return (en.makeRotationFromQuaternion(e), this.applyMatrix4(en), this);
  }
  rotateX(e) {
    return (en.makeRotationX(e), this.applyMatrix4(en), this);
  }
  rotateY(e) {
    return (en.makeRotationY(e), this.applyMatrix4(en), this);
  }
  rotateZ(e) {
    return (en.makeRotationZ(e), this.applyMatrix4(en), this);
  }
  translate(e, t, i) {
    return (en.makeTranslation(e, t, i), this.applyMatrix4(en), this);
  }
  scale(e, t, i) {
    return (en.makeScale(e, t, i), this.applyMatrix4(en), this);
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
      this.boundingBox.getCenter(vi).negate(),
      this.translate(vi.x, vi.y, vi.z),
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
          new z(-1 / 0, -1 / 0, -1 / 0),
          new z(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          (Yt.setFromBufferAttribute(s),
            this.morphTargetsRelative ?
              (Rt.addVectors(this.boundingBox.min, Yt.min),
              this.boundingBox.expandByPoint(Rt),
              Rt.addVectors(this.boundingBox.max, Yt.max),
              this.boundingBox.expandByPoint(Rt))
            : (this.boundingBox.expandByPoint(Yt.min),
              this.boundingBox.expandByPoint(Yt.max)));
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
        this.boundingSphere.set(new z(), 1 / 0));
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((Yt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          (Vi.setFromBufferAttribute(a),
            this.morphTargetsRelative ?
              (Rt.addVectors(Yt.min, Vi.min),
              Yt.expandByPoint(Rt),
              Rt.addVectors(Yt.max, Vi.max),
              Yt.expandByPoint(Rt))
            : (Yt.expandByPoint(Vi.min), Yt.expandByPoint(Vi.max)));
        }
      Yt.getCenter(i);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        (Rt.fromBufferAttribute(e, s),
          (r = Math.max(r, i.distanceToSquared(Rt))));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            (Rt.fromBufferAttribute(a, c),
              l && (vi.fromBufferAttribute(e, c), Rt.add(vi)),
              (r = Math.max(r, i.distanceToSquared(Rt))));
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
    for (let b = 0; b < a; b++) ((c[b] = new z()), (u[b] = new z()));
    const f = new z(),
      d = new z(),
      m = new z(),
      _ = new Ke(),
      g = new Ke(),
      p = new Ke(),
      h = new z(),
      M = new z();
    function x(b, W, Y) {
      (f.fromArray(r, b * 3),
        d.fromArray(r, W * 3),
        m.fromArray(r, Y * 3),
        _.fromArray(o, b * 2),
        g.fromArray(o, W * 2),
        p.fromArray(o, Y * 2),
        d.sub(f),
        m.sub(f),
        g.sub(_),
        p.sub(_));
      const oe = 1 / (g.x * p.y - p.x * g.y);
      isFinite(oe) &&
        (h
          .copy(d)
          .multiplyScalar(p.y)
          .addScaledVector(m, -g.y)
          .multiplyScalar(oe),
        M.copy(m)
          .multiplyScalar(g.x)
          .addScaledVector(d, -p.x)
          .multiplyScalar(oe),
        c[b].add(h),
        c[W].add(h),
        c[Y].add(h),
        u[b].add(M),
        u[W].add(M),
        u[Y].add(M));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: i.length }]);
    for (let b = 0, W = T.length; b < W; ++b) {
      const Y = T[b],
        oe = Y.start,
        D = Y.count;
      for (let N = oe, X = oe + D; N < X; N += 3)
        x(i[N + 0], i[N + 1], i[N + 2]);
    }
    const P = new z(),
      w = new z(),
      A = new z(),
      I = new z();
    function S(b) {
      (A.fromArray(s, b * 3), I.copy(A));
      const W = c[b];
      (P.copy(W),
        P.sub(A.multiplyScalar(A.dot(W))).normalize(),
        w.crossVectors(I, W));
      const oe = w.dot(u[b]) < 0 ? -1 : 1;
      ((l[b * 4] = P.x),
        (l[b * 4 + 1] = P.y),
        (l[b * 4 + 2] = P.z),
        (l[b * 4 + 3] = oe));
    }
    for (let b = 0, W = T.length; b < W; ++b) {
      const Y = T[b],
        oe = Y.start,
        D = Y.count;
      for (let N = oe, X = oe + D; N < X; N += 3)
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
      const r = new z(),
        s = new z(),
        o = new z(),
        a = new z(),
        l = new z(),
        c = new z(),
        u = new z(),
        f = new z();
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
      (Rt.fromBufferAttribute(e, t),
        Rt.normalize(),
        e.setXYZ(t, Rt.x, Rt.y, Rt.z));
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
    const t = new ai(),
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
const io = new yt(),
  Xn = new fh(),
  _r = new Zs(),
  ro = new z(),
  xi = new z(),
  Mi = new z(),
  Si = new z(),
  xs = new z(),
  gr = new z(),
  vr = new Ke(),
  xr = new Ke(),
  Mr = new Ke(),
  so = new z(),
  ao = new z(),
  oo = new z(),
  Sr = new z(),
  Er = new z();
class Tn extends It {
  constructor(e = new ai(), t = new wl()) {
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
          for (let T = M, P = x; T < P; T += 3) {
            const w = a.getX(T),
              A = a.getX(T + 1),
              I = a.getX(T + 2);
            ((r = yr(this, h, e, i, c, u, f, w, A, I)),
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
          for (let T = M, P = x; T < P; T += 3) {
            const w = T,
              A = T + 1,
              I = T + 2;
            ((r = yr(this, h, e, i, c, u, f, w, A, I)),
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
function Eh(n, e, t, i, r, s, o, a) {
  let l;
  if (
    (e.side === Xt ?
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
  (n.getVertexPosition(a, xi),
    n.getVertexPosition(l, Mi),
    n.getVertexPosition(c, Si));
  const u = Eh(n, e, t, i, xi, Mi, Si, Sr);
  if (u) {
    (r &&
      (vr.fromBufferAttribute(r, a),
      xr.fromBufferAttribute(r, l),
      Mr.fromBufferAttribute(r, c),
      (u.uv = ln.getInterpolation(Sr, xi, Mi, Si, vr, xr, Mr, new Ke()))),
      s &&
        (vr.fromBufferAttribute(s, a),
        xr.fromBufferAttribute(s, l),
        Mr.fromBufferAttribute(s, c),
        (u.uv1 = ln.getInterpolation(Sr, xi, Mi, Si, vr, xr, Mr, new Ke())),
        (u.uv2 = u.uv1)),
      o &&
        (so.fromBufferAttribute(o, a),
        ao.fromBufferAttribute(o, l),
        oo.fromBufferAttribute(o, c),
        (u.normal = ln.getInterpolation(Sr, xi, Mi, Si, so, ao, oo, new z())),
        u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1)));
    const f = { a, b: l, c, normal: new z(), materialIndex: 0 };
    (ln.getNormal(xi, Mi, Si, f.normal), (u.face = f));
  }
  return u;
}
class tr extends ai {
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
    function _(g, p, h, M, x, T, P, w, A, I, S) {
      const b = T / A,
        W = P / I,
        Y = T / 2,
        oe = P / 2,
        D = w / 2,
        N = A + 1,
        X = I + 1;
      let K = 0,
        q = 0;
      const j = new z();
      for (let Z = 0; Z < X; Z++) {
        const te = Z * W - oe;
        for (let Q = 0; Q < N; Q++) {
          const G = Q * b - Y;
          ((j[g] = G * M),
            (j[p] = te * x),
            (j[h] = D),
            c.push(j.x, j.y, j.z),
            (j[g] = 0),
            (j[p] = 0),
            (j[h] = w > 0 ? 1 : -1),
            u.push(j.x, j.y, j.z),
            f.push(Q / A),
            f.push(1 - Z / I),
            (K += 1));
        }
      }
      for (let Z = 0; Z < I; Z++)
        for (let te = 0; te < A; te++) {
          const Q = d + te + N * Z,
            G = d + te + N * (Z + 1),
            V = d + (te + 1) + N * (Z + 1),
            se = d + (te + 1) + N * Z;
          (l.push(Q, G, se), l.push(G, V, se), (q += 6));
        }
      (a.addGroup(m, q, S), (m += q), (d += K));
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
function yh(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function Ll(n) {
  return n.getRenderTarget() === null ?
      n.outputColorSpace
    : tt.workingColorSpace;
}
const Th = { clone: Ni, merge: Ot };
var bh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ah = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ri extends er {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = bh),
      (this.fragmentShader = Ah),
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
      (this.uniformsGroups = yh(e.uniformsGroups)),
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
class Pl extends It {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new yt()),
      (this.projectionMatrix = new yt()),
      (this.projectionMatrixInverse = new yt()),
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
class nn extends Pl {
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
const Ei = -90,
  yi = 1;
class wh extends It {
  constructor(e, t, i) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const r = new nn(Ei, yi, e, t);
    ((r.layers = this.layers), this.add(r));
    const s = new nn(Ei, yi, e, t);
    ((s.layers = this.layers), this.add(s));
    const o = new nn(Ei, yi, e, t);
    ((o.layers = this.layers), this.add(o));
    const a = new nn(Ei, yi, e, t);
    ((a.layers = this.layers), this.add(a));
    const l = new nn(Ei, yi, e, t);
    ((l.layers = this.layers), this.add(l));
    const c = new nn(Ei, yi, e, t);
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
class Dl extends Jt {
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
class Rh extends ii {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const i = { width: e, height: e, depth: 1 },
      r = [i, i, i, i, i, i];
    (t.encoding !== void 0 &&
      ($i(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.",
      ),
      (t.colorSpace = t.encoding === ti ? Lt : rn)),
      (this.texture = new Dl(
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
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : tn));
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
      s = new ri({
        name: "CubemapFromEquirect",
        uniforms: Ni(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: Xt,
        blending: Fn,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Tn(r, s),
      a = t.minFilter;
    return (
      t.minFilter === ji && (t.minFilter = tn),
      new wh(1, 10, this).update(e, o),
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
const Ms = new z(),
  Ch = new z(),
  Lh = new ke();
class qn {
  constructor(e = new z(1, 0, 0), t = 0) {
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
    const r = Ms.subVectors(i, t).cross(Ch.subVectors(e, t)).normalize();
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
    const i = t || Lh.getNormalMatrix(e),
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
  Tr = new z();
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
function Ul() {
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
function Ph(n, e) {
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
class Hr extends ai {
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
          P = M + 1 + c * (h + 1),
          w = M + 1 + c * h;
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
var Dh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Uh = `#ifdef USE_ALPHAHASH
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
  Ih = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Nh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Fh = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Oh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Bh = `#ifdef USE_AOMAP
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
  zh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Gh = `#ifdef USE_BATCHING
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
  Hh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  kh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Vh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Wh = `float G_BlinnPhong_Implicit( ) {
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
  Xh = `#ifdef USE_IRIDESCENCE
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
  $h = `#ifdef USE_BUMPMAP
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
  qh = `#if NUM_CLIPPING_PLANES > 0
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
  Yh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  jh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Kh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Zh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Jh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Qh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  ef = `#if defined( USE_COLOR_ALPHA )
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
  tf = `#define PI 3.141592653589793
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
  nf = `#ifdef ENVMAP_TYPE_CUBE_UV
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
  rf = `vec3 transformedNormal = objectNormal;
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
  sf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  af = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  of = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  lf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  cf = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  uf = `
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
  hf = `#ifdef USE_ENVMAP
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
  ff = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  df = `#ifdef USE_ENVMAP
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
  pf = `#ifdef USE_ENVMAP
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
  mf = `#ifdef USE_ENVMAP
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
  _f = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  gf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  vf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  xf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Mf = `#ifdef USE_GRADIENTMAP
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
  Sf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Ef = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  yf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Tf = `varying vec3 vViewPosition;
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
  bf = `uniform bool receiveShadow;
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
  Af = `#ifdef USE_ENVMAP
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
  wf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Rf = `varying vec3 vViewPosition;
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
  Cf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Lf = `varying vec3 vViewPosition;
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
  Pf = `PhysicalMaterial material;
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
  Df = `struct PhysicalMaterial {
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
  Uf = `
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
  If = `#if defined( RE_IndirectDiffuse )
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
  Nf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Ff = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Of = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Bf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  zf = `#ifdef USE_LOGDEPTHBUF
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
  Gf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Hf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  kf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
  Vf = `#if defined( USE_POINTS_UV )
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
  Wf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Xf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  $f = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  qf = `#ifdef USE_MORPHNORMALS
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
  Yf = `#ifdef USE_MORPHTARGETS
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
  jf = `#ifdef USE_MORPHTARGETS
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
  Kf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
  Zf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
  Jf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Qf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ed = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  td = `#ifdef USE_NORMALMAP
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
  nd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  id = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  rd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  sd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  ad = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  od = `vec3 packNormalToRGB( const in vec3 normal ) {
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
  ld = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  cd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  ud = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  hd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  fd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  dd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  pd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  md = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  _d = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
  gd = `float getShadowMask() {
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
  vd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  xd = `#ifdef USE_SKINNING
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
  Md = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Sd = `#ifdef USE_SKINNING
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
  Ed = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  yd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Td = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  bd = `#ifndef saturate
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
  Ad = `#ifdef USE_TRANSMISSION
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
  wd = `#ifdef USE_TRANSMISSION
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
  Rd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
  Cd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
  Ld = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
  Pd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Dd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Ud = `uniform sampler2D t2D;
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
  Id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Nd = `#ifdef ENVMAP_TYPE_CUBE
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
  Fd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Od = `uniform samplerCube tCube;
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
  Bd = `#include <common>
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
  zd = `#if DEPTH_PACKING == 3200
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
  Gd = `#define DISTANCE
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
  Hd = `#define DISTANCE
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
  kd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Vd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Wd = `uniform float scale;
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
  Xd = `uniform vec3 diffuse;
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
  $d = `#include <common>
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
  qd = `uniform vec3 diffuse;
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
  Yd = `#define LAMBERT
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
  jd = `#define LAMBERT
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
  Kd = `#define MATCAP
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
  Zd = `#define MATCAP
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
  Jd = `#define NORMAL
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
  Qd = `#define NORMAL
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
  ep = `#define PHONG
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
  tp = `#define PHONG
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
  np = `#define STANDARD
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
  ip = `#define STANDARD
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
  rp = `#define TOON
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
  sp = `#define TOON
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
  ap = `uniform float size;
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
  op = `uniform vec3 diffuse;
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
  lp = `#include <common>
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
  cp = `uniform vec3 color;
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
  up = `uniform float rotation;
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
  hp = `uniform vec3 diffuse;
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
    alphahash_fragment: Dh,
    alphahash_pars_fragment: Uh,
    alphamap_fragment: Ih,
    alphamap_pars_fragment: Nh,
    alphatest_fragment: Fh,
    alphatest_pars_fragment: Oh,
    aomap_fragment: Bh,
    aomap_pars_fragment: zh,
    batching_pars_vertex: Gh,
    batching_vertex: Hh,
    begin_vertex: kh,
    beginnormal_vertex: Vh,
    bsdfs: Wh,
    iridescence_fragment: Xh,
    bumpmap_pars_fragment: $h,
    clipping_planes_fragment: qh,
    clipping_planes_pars_fragment: Yh,
    clipping_planes_pars_vertex: jh,
    clipping_planes_vertex: Kh,
    color_fragment: Zh,
    color_pars_fragment: Jh,
    color_pars_vertex: Qh,
    color_vertex: ef,
    common: tf,
    cube_uv_reflection_fragment: nf,
    defaultnormal_vertex: rf,
    displacementmap_pars_vertex: sf,
    displacementmap_vertex: af,
    emissivemap_fragment: of,
    emissivemap_pars_fragment: lf,
    colorspace_fragment: cf,
    colorspace_pars_fragment: uf,
    envmap_fragment: hf,
    envmap_common_pars_fragment: ff,
    envmap_pars_fragment: df,
    envmap_pars_vertex: pf,
    envmap_physical_pars_fragment: Af,
    envmap_vertex: mf,
    fog_vertex: _f,
    fog_pars_vertex: gf,
    fog_fragment: vf,
    fog_pars_fragment: xf,
    gradientmap_pars_fragment: Mf,
    lightmap_fragment: Sf,
    lightmap_pars_fragment: Ef,
    lights_lambert_fragment: yf,
    lights_lambert_pars_fragment: Tf,
    lights_pars_begin: bf,
    lights_toon_fragment: wf,
    lights_toon_pars_fragment: Rf,
    lights_phong_fragment: Cf,
    lights_phong_pars_fragment: Lf,
    lights_physical_fragment: Pf,
    lights_physical_pars_fragment: Df,
    lights_fragment_begin: Uf,
    lights_fragment_maps: If,
    lights_fragment_end: Nf,
    logdepthbuf_fragment: Ff,
    logdepthbuf_pars_fragment: Of,
    logdepthbuf_pars_vertex: Bf,
    logdepthbuf_vertex: zf,
    map_fragment: Gf,
    map_pars_fragment: Hf,
    map_particle_fragment: kf,
    map_particle_pars_fragment: Vf,
    metalnessmap_fragment: Wf,
    metalnessmap_pars_fragment: Xf,
    morphcolor_vertex: $f,
    morphnormal_vertex: qf,
    morphtarget_pars_vertex: Yf,
    morphtarget_vertex: jf,
    normal_fragment_begin: Kf,
    normal_fragment_maps: Zf,
    normal_pars_fragment: Jf,
    normal_pars_vertex: Qf,
    normal_vertex: ed,
    normalmap_pars_fragment: td,
    clearcoat_normal_fragment_begin: nd,
    clearcoat_normal_fragment_maps: id,
    clearcoat_pars_fragment: rd,
    iridescence_pars_fragment: sd,
    opaque_fragment: ad,
    packing: od,
    premultiplied_alpha_fragment: ld,
    project_vertex: cd,
    dithering_fragment: ud,
    dithering_pars_fragment: hd,
    roughnessmap_fragment: fd,
    roughnessmap_pars_fragment: dd,
    shadowmap_pars_fragment: pd,
    shadowmap_pars_vertex: md,
    shadowmap_vertex: _d,
    shadowmask_pars_fragment: gd,
    skinbase_vertex: vd,
    skinning_pars_vertex: xd,
    skinning_vertex: Md,
    skinnormal_vertex: Sd,
    specularmap_fragment: Ed,
    specularmap_pars_fragment: yd,
    tonemapping_fragment: Td,
    tonemapping_pars_fragment: bd,
    transmission_fragment: Ad,
    transmission_pars_fragment: wd,
    uv_pars_fragment: Rd,
    uv_pars_vertex: Cd,
    uv_vertex: Ld,
    worldpos_vertex: Pd,
    background_vert: Dd,
    background_frag: Ud,
    backgroundCube_vert: Id,
    backgroundCube_frag: Nd,
    cube_vert: Fd,
    cube_frag: Od,
    depth_vert: Bd,
    depth_frag: zd,
    distanceRGBA_vert: Gd,
    distanceRGBA_frag: Hd,
    equirect_vert: kd,
    equirect_frag: Vd,
    linedashed_vert: Wd,
    linedashed_frag: Xd,
    meshbasic_vert: $d,
    meshbasic_frag: qd,
    meshlambert_vert: Yd,
    meshlambert_frag: jd,
    meshmatcap_vert: Kd,
    meshmatcap_frag: Zd,
    meshnormal_vert: Jd,
    meshnormal_frag: Qd,
    meshphong_vert: ep,
    meshphong_frag: tp,
    meshphysical_vert: np,
    meshphysical_frag: ip,
    meshtoon_vert: rp,
    meshtoon_frag: sp,
    points_vert: ap,
    points_frag: op,
    shadow_vert: lp,
    shadow_frag: cp,
    sprite_vert: up,
    sprite_frag: hp,
  },
  he = {
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
  fn = {
    basic: {
      uniforms: Ot([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.fog,
      ]),
      vertexShader: Fe.meshbasic_vert,
      fragmentShader: Fe.meshbasic_frag,
    },
    lambert: {
      uniforms: Ot([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        he.lights,
        { emissive: { value: new je(0) } },
      ]),
      vertexShader: Fe.meshlambert_vert,
      fragmentShader: Fe.meshlambert_frag,
    },
    phong: {
      uniforms: Ot([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        he.lights,
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
        he.common,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.roughnessmap,
        he.metalnessmap,
        he.fog,
        he.lights,
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
        he.common,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.gradientmap,
        he.fog,
        he.lights,
        { emissive: { value: new je(0) } },
      ]),
      vertexShader: Fe.meshtoon_vert,
      fragmentShader: Fe.meshtoon_frag,
    },
    matcap: {
      uniforms: Ot([
        he.common,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Fe.meshmatcap_vert,
      fragmentShader: Fe.meshmatcap_frag,
    },
    points: {
      uniforms: Ot([he.points, he.fog]),
      vertexShader: Fe.points_vert,
      fragmentShader: Fe.points_frag,
    },
    dashed: {
      uniforms: Ot([
        he.common,
        he.fog,
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
      uniforms: Ot([he.common, he.displacementmap]),
      vertexShader: Fe.depth_vert,
      fragmentShader: Fe.depth_frag,
    },
    normal: {
      uniforms: Ot([
        he.common,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Fe.meshnormal_vert,
      fragmentShader: Fe.meshnormal_frag,
    },
    sprite: {
      uniforms: Ot([he.sprite, he.fog]),
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
        he.common,
        he.displacementmap,
        {
          referencePosition: { value: new z() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Fe.distanceRGBA_vert,
      fragmentShader: Fe.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ot([
        he.lights,
        he.fog,
        { color: { value: new je(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Fe.shadow_vert,
      fragmentShader: Fe.shadow_frag,
    },
  };
fn.physical = {
  uniforms: Ot([
    fn.standard.uniforms,
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
function fp(n, e, t, i, r, s, o) {
  const a = new je(0);
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
            new ri({
              name: "BackgroundCubeMaterial",
              uniforms: Ni(fn.backgroundCube.uniforms),
              vertexShader: fn.backgroundCube.vertexShader,
              fragmentShader: fn.backgroundCube.fragmentShader,
              side: Xt,
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
            new Hr(2, 2),
            new ri({
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
    (p.getRGB(br, Ll(n)), i.buffers.color.setClear(br.r, br.g, br.b, h, o));
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
function dp(n, e, t, i) {
  const r = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = i.isWebGL2 || s !== null,
    a = {},
    l = p(null);
  let c = l,
    u = !1;
  function f(D, N, X, K, q) {
    let j = !1;
    if (o) {
      const Z = g(K, X, N);
      (c !== Z && ((c = Z), m(c.object)),
        (j = h(D, K, X, q)),
        j && M(D, K, X, q));
    } else {
      const Z = N.wireframe === !0;
      (c.geometry !== K.id || c.program !== X.id || c.wireframe !== Z) &&
        ((c.geometry = K.id), (c.program = X.id), (c.wireframe = Z), (j = !0));
    }
    (q !== null && t.update(q, n.ELEMENT_ARRAY_BUFFER),
      (j || u) &&
        ((u = !1),
        I(D, N, X, K),
        q !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(q).buffer)));
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
  function g(D, N, X) {
    const K = X.wireframe === !0;
    let q = a[D.id];
    q === void 0 && ((q = {}), (a[D.id] = q));
    let j = q[N.id];
    j === void 0 && ((j = {}), (q[N.id] = j));
    let Z = j[K];
    return (Z === void 0 && ((Z = p(d())), (j[K] = Z)), Z);
  }
  function p(D) {
    const N = [],
      X = [],
      K = [];
    for (let q = 0; q < r; q++) ((N[q] = 0), (X[q] = 0), (K[q] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: N,
      enabledAttributes: X,
      attributeDivisors: K,
      object: D,
      attributes: {},
      index: null,
    };
  }
  function h(D, N, X, K) {
    const q = c.attributes,
      j = N.attributes;
    let Z = 0;
    const te = X.getAttributes();
    for (const Q in te)
      if (te[Q].location >= 0) {
        const V = q[Q];
        let se = j[Q];
        if (
          (se === void 0 &&
            (Q === "instanceMatrix" &&
              D.instanceMatrix &&
              (se = D.instanceMatrix),
            Q === "instanceColor" && D.instanceColor && (se = D.instanceColor)),
          V === void 0 || V.attribute !== se || (se && V.data !== se.data))
        )
          return !0;
        Z++;
      }
    return c.attributesNum !== Z || c.index !== K;
  }
  function M(D, N, X, K) {
    const q = {},
      j = N.attributes;
    let Z = 0;
    const te = X.getAttributes();
    for (const Q in te)
      if (te[Q].location >= 0) {
        let V = j[Q];
        V === void 0 &&
          (Q === "instanceMatrix" && D.instanceMatrix && (V = D.instanceMatrix),
          Q === "instanceColor" && D.instanceColor && (V = D.instanceColor));
        const se = {};
        ((se.attribute = V),
          V && V.data && (se.data = V.data),
          (q[Q] = se),
          Z++);
      }
    ((c.attributes = q), (c.attributesNum = Z), (c.index = K));
  }
  function x() {
    const D = c.newAttributes;
    for (let N = 0, X = D.length; N < X; N++) D[N] = 0;
  }
  function T(D) {
    P(D, 0);
  }
  function P(D, N) {
    const X = c.newAttributes,
      K = c.enabledAttributes,
      q = c.attributeDivisors;
    ((X[D] = 1),
      K[D] === 0 && (n.enableVertexAttribArray(D), (K[D] = 1)),
      q[D] !== N &&
        ((i.isWebGL2 ? n : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, N),
        (q[D] = N)));
  }
  function w() {
    const D = c.newAttributes,
      N = c.enabledAttributes;
    for (let X = 0, K = N.length; X < K; X++)
      N[X] !== D[X] && (n.disableVertexAttribArray(X), (N[X] = 0));
  }
  function A(D, N, X, K, q, j, Z) {
    Z === !0 ?
      n.vertexAttribIPointer(D, N, X, q, j)
    : n.vertexAttribPointer(D, N, X, K, q, j);
  }
  function I(D, N, X, K) {
    if (
      i.isWebGL2 === !1 &&
      (D.isInstancedMesh || K.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    x();
    const q = K.attributes,
      j = X.getAttributes(),
      Z = N.defaultAttributeValues;
    for (const te in j) {
      const Q = j[te];
      if (Q.location >= 0) {
        let G = q[te];
        if (
          (G === void 0 &&
            (te === "instanceMatrix" &&
              D.instanceMatrix &&
              (G = D.instanceMatrix),
            te === "instanceColor" && D.instanceColor && (G = D.instanceColor)),
          G !== void 0)
        ) {
          const V = G.normalized,
            se = G.itemSize,
            le = t.get(G);
          if (le === void 0) continue;
          const J = le.buffer,
            _e = le.type,
            ee = le.bytesPerElement,
            ge =
              i.isWebGL2 === !0 &&
              (_e === n.INT || _e === n.UNSIGNED_INT || G.gpuType === hl);
          if (G.isInterleavedBufferAttribute) {
            const qe = G.data,
              L = qe.stride,
              Ze = G.offset;
            if (qe.isInstancedInterleavedBuffer) {
              for (let Ee = 0; Ee < Q.locationSize; Ee++)
                P(Q.location + Ee, qe.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = qe.meshPerAttribute * qe.count);
            } else
              for (let Ee = 0; Ee < Q.locationSize; Ee++) T(Q.location + Ee);
            n.bindBuffer(n.ARRAY_BUFFER, J);
            for (let Ee = 0; Ee < Q.locationSize; Ee++)
              A(
                Q.location + Ee,
                se / Q.locationSize,
                _e,
                V,
                L * ee,
                (Ze + (se / Q.locationSize) * Ee) * ee,
                ge,
              );
          } else {
            if (G.isInstancedBufferAttribute) {
              for (let qe = 0; qe < Q.locationSize; qe++)
                P(Q.location + qe, G.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = G.meshPerAttribute * G.count);
            } else
              for (let qe = 0; qe < Q.locationSize; qe++) T(Q.location + qe);
            n.bindBuffer(n.ARRAY_BUFFER, J);
            for (let qe = 0; qe < Q.locationSize; qe++)
              A(
                Q.location + qe,
                se / Q.locationSize,
                _e,
                V,
                se * ee,
                (se / Q.locationSize) * qe * ee,
                ge,
              );
          }
        } else if (Z !== void 0) {
          const V = Z[te];
          if (V !== void 0)
            switch (V.length) {
              case 2:
                n.vertexAttrib2fv(Q.location, V);
                break;
              case 3:
                n.vertexAttrib3fv(Q.location, V);
                break;
              case 4:
                n.vertexAttrib4fv(Q.location, V);
                break;
              default:
                n.vertexAttrib1fv(Q.location, V);
            }
        }
      }
    }
    w();
  }
  function S() {
    Y();
    for (const D in a) {
      const N = a[D];
      for (const X in N) {
        const K = N[X];
        for (const q in K) (_(K[q].object), delete K[q]);
        delete N[X];
      }
      delete a[D];
    }
  }
  function b(D) {
    if (a[D.id] === void 0) return;
    const N = a[D.id];
    for (const X in N) {
      const K = N[X];
      for (const q in K) (_(K[q].object), delete K[q]);
      delete N[X];
    }
    delete a[D.id];
  }
  function W(D) {
    for (const N in a) {
      const X = a[N];
      if (X[D.id] === void 0) continue;
      const K = X[D.id];
      for (const q in K) (_(K[q].object), delete K[q]);
      delete X[D.id];
    }
  }
  function Y() {
    (oe(), (u = !0), c !== l && ((c = l), m(c.object)));
  }
  function oe() {
    ((l.geometry = null), (l.program = null), (l.wireframe = !1));
  }
  return {
    setup: f,
    reset: Y,
    resetDefaultState: oe,
    dispose: S,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: W,
    initAttributes: x,
    enableAttribute: T,
    disableUnusedAttributes: w,
  };
}
function pp(n, e, t, i) {
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
function mp(n, e, t) {
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
    P = x && T,
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
    floatVertexTextures: P,
    maxSamples: w,
  };
}
function _p(n) {
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
        for (let P = 0; P !== x; ++P) T[P] = t[P];
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
function gp(n) {
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
            const c = new Rh(l.height / 2);
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
class Il extends Pl {
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
const wi = 4,
  lo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Kn = 20,
  Ss = new Il(),
  co = new je();
let Es = null,
  ys = 0,
  Ts = 0;
const Yn = (1 + Math.sqrt(5)) / 2,
  Ti = 1 / Yn,
  uo = [
    new z(1, 1, 1),
    new z(-1, 1, 1),
    new z(1, 1, -1),
    new z(-1, 1, -1),
    new z(0, Yn, Ti),
    new z(0, Yn, -Ti),
    new z(Ti, 0, Yn),
    new z(-Ti, 0, Yn),
    new z(Yn, Ti, 0),
    new z(-Yn, Ti, 0),
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
        magFilter: tn,
        minFilter: tn,
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
      } = vp(s)),
        (this._blurMaterial = xp(s, e, t)));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Tn(this._lodPlanes[0], e);
    this._renderer.compile(t, Ss);
  }
  _sceneToCubeUV(e, t, i, r) {
    const a = new nn(90, 1, t, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      d = u.toneMapping;
    (u.getClearColor(co), (u.toneMapping = On), (u.autoClear = !1));
    const m = new wl({
        name: "PMREM.Background",
        side: Xt,
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
      const I = A / g,
        S = Math.exp((-I * I) / 2);
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
      P = 3 * T * (r > x - wi ? r - x + wi : 0),
      w = 4 * (this._cubeSize - T);
    (Ar(t, P, w, 3 * T, 2 * T), l.setRenderTarget(t), l.render(f, Ss));
  }
}
function vp(n) {
  const e = [],
    t = [],
    i = [];
  let r = n;
  const s = n - wi + 1 + lo.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    (o > n - wi ? (l = lo[o - n + wi - 1]) : o === 0 && (l = 0), i.push(l));
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
        I = w > 2 ? 0 : -1,
        S = [
          A,
          I,
          0,
          A + 2 / 3,
          I,
          0,
          A + 2 / 3,
          I + 1,
          0,
          A,
          I,
          0,
          A + 2 / 3,
          I + 1,
          0,
          A,
          I + 1,
          0,
        ];
      (M.set(S, g * _ * w), x.set(d, p * _ * w));
      const b = [w, w, w, w, w, w];
      T.set(b, h * _ * w);
    }
    const P = new ai();
    (P.setAttribute("position", new pn(M, g)),
      P.setAttribute("uv", new pn(x, p)),
      P.setAttribute("faceIndex", new pn(T, h)),
      e.push(P),
      r > wi && r--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function fo(n, e, t) {
  const i = new ii(n, e, t);
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
function xp(n, e, t) {
  const i = new Float32Array(Kn),
    r = new z(0, 1, 0);
  return new ri({
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
  return new ri({
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
  return new ri({
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
function Mp(n) {
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
function Sp(n) {
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
function Ep(n, e, t, i) {
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
    const p = new (Sl(d) ? Cl : Rl)(d, 1);
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
function yp(n, e, t, i) {
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
function Tp(n) {
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
function bp(n, e) {
  return n[0] - e[0];
}
function Ap(n, e) {
  return Math.abs(e[1]) - Math.abs(n[1]);
}
function wp(n, e, t) {
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
        let N = function () {
          (oe.dispose(), s.delete(u), u.removeEventListener("dispose", N));
        };
        var m = N;
        p !== void 0 && p.texture.dispose();
        const x = u.morphAttributes.position !== void 0,
          T = u.morphAttributes.normal !== void 0,
          P = u.morphAttributes.color !== void 0,
          w = u.morphAttributes.position || [],
          A = u.morphAttributes.normal || [],
          I = u.morphAttributes.color || [];
        let S = 0;
        (x === !0 && (S = 1), T === !0 && (S = 2), P === !0 && (S = 3));
        let b = u.attributes.position.count * S,
          W = 1;
        b > e.maxTextureSize &&
          ((W = Math.ceil(b / e.maxTextureSize)), (b = e.maxTextureSize));
        const Y = new Float32Array(b * W * 4 * g),
          oe = new Tl(Y, b, W, g);
        ((oe.type = Nn), (oe.needsUpdate = !0));
        const D = S * 4;
        for (let X = 0; X < g; X++) {
          const K = w[X],
            q = A[X],
            j = I[X],
            Z = b * W * 4 * X;
          for (let te = 0; te < K.count; te++) {
            const Q = te * D;
            (x === !0 &&
              (o.fromBufferAttribute(K, te),
              (Y[Z + Q + 0] = o.x),
              (Y[Z + Q + 1] = o.y),
              (Y[Z + Q + 2] = o.z),
              (Y[Z + Q + 3] = 0)),
              T === !0 &&
                (o.fromBufferAttribute(q, te),
                (Y[Z + Q + 4] = o.x),
                (Y[Z + Q + 5] = o.y),
                (Y[Z + Q + 6] = o.z),
                (Y[Z + Q + 7] = 0)),
              P === !0 &&
                (o.fromBufferAttribute(j, te),
                (Y[Z + Q + 8] = o.x),
                (Y[Z + Q + 9] = o.y),
                (Y[Z + Q + 10] = o.z),
                (Y[Z + Q + 11] = j.itemSize === 4 ? o.w : 1)));
          }
        }
        ((p = { count: g, texture: oe, size: new Ke(b, W) }),
          s.set(u, p),
          u.addEventListener("dispose", N));
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
        const P = g[T];
        ((P[0] = T), (P[1] = d[T]));
      }
      g.sort(Ap);
      for (let T = 0; T < 8; T++)
        T < _ && g[T][1] ?
          ((a[T][0] = g[T][0]), (a[T][1] = g[T][1]))
        : ((a[T][0] = Number.MAX_SAFE_INTEGER), (a[T][1] = 0));
      a.sort(bp);
      const p = u.morphAttributes.position,
        h = u.morphAttributes.normal;
      let M = 0;
      for (let T = 0; T < 8; T++) {
        const P = a[T],
          w = P[0],
          A = P[1];
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
function Rp(n, e, t, i) {
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
class Nl extends Jt {
  constructor(e, t, i, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : ei), u !== ei && u !== Ii))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    (i === void 0 && u === ei && (i = In),
      i === void 0 && u === Ii && (i = Qn),
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
const Fl = new Jt(),
  Ol = new Nl(1, 1);
Ol.compareFunction = Ml;
const Bl = new Tl(),
  zl = new uh(),
  Gl = new Dl(),
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
function Tt(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return !1;
  return !0;
}
function bt(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function kr(n, e) {
  let t = go[e];
  t === void 0 && ((t = new Int32Array(e)), (go[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function Cp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), (t[0] = e));
}
function Lp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Tt(t, e)) return;
    (n.uniform2fv(this.addr, e), bt(t, e));
  }
}
function Pp(n, e) {
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
    if (Tt(t, e)) return;
    (n.uniform3fv(this.addr, e), bt(t, e));
  }
}
function Dp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Tt(t, e)) return;
    (n.uniform4fv(this.addr, e), bt(t, e));
  }
}
function Up(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Tt(t, e)) return;
    (n.uniformMatrix2fv(this.addr, !1, e), bt(t, e));
  } else {
    if (Tt(t, i)) return;
    (Mo.set(i), n.uniformMatrix2fv(this.addr, !1, Mo), bt(t, i));
  }
}
function Ip(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Tt(t, e)) return;
    (n.uniformMatrix3fv(this.addr, !1, e), bt(t, e));
  } else {
    if (Tt(t, i)) return;
    (xo.set(i), n.uniformMatrix3fv(this.addr, !1, xo), bt(t, i));
  }
}
function Np(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Tt(t, e)) return;
    (n.uniformMatrix4fv(this.addr, !1, e), bt(t, e));
  } else {
    if (Tt(t, i)) return;
    (vo.set(i), n.uniformMatrix4fv(this.addr, !1, vo), bt(t, i));
  }
}
function Fp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), (t[0] = e));
}
function Op(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Tt(t, e)) return;
    (n.uniform2iv(this.addr, e), bt(t, e));
  }
}
function Bp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Tt(t, e)) return;
    (n.uniform3iv(this.addr, e), bt(t, e));
  }
}
function zp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Tt(t, e)) return;
    (n.uniform4iv(this.addr, e), bt(t, e));
  }
}
function Gp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), (t[0] = e));
}
function Hp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Tt(t, e)) return;
    (n.uniform2uiv(this.addr, e), bt(t, e));
  }
}
function kp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Tt(t, e)) return;
    (n.uniform3uiv(this.addr, e), bt(t, e));
  }
}
function Vp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Tt(t, e)) return;
    (n.uniform4uiv(this.addr, e), bt(t, e));
  }
}
function Wp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r));
  const s = this.type === n.SAMPLER_2D_SHADOW ? Ol : Fl;
  t.setTexture2D(e || s, r);
}
function Xp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  (i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture3D(e || zl, r));
}
function $p(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  (i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTextureCube(e || Gl, r));
}
function qp(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  (i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2DArray(e || Bl, r));
}
function Yp(n) {
  switch (n) {
    case 5126:
      return Cp;
    case 35664:
      return Lp;
    case 35665:
      return Pp;
    case 35666:
      return Dp;
    case 35674:
      return Up;
    case 35675:
      return Ip;
    case 35676:
      return Np;
    case 5124:
    case 35670:
      return Fp;
    case 35667:
    case 35671:
      return Op;
    case 35668:
    case 35672:
      return Bp;
    case 35669:
    case 35673:
      return zp;
    case 5125:
      return Gp;
    case 36294:
      return Hp;
    case 36295:
      return kp;
    case 36296:
      return Vp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Wp;
    case 35679:
    case 36299:
    case 36307:
      return Xp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $p;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return qp;
  }
}
function jp(n, e) {
  n.uniform1fv(this.addr, e);
}
function Kp(n, e) {
  const t = Oi(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function Zp(n, e) {
  const t = Oi(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function Jp(n, e) {
  const t = Oi(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function Qp(n, e) {
  const t = Oi(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function em(n, e) {
  const t = Oi(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function tm(n, e) {
  const t = Oi(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function nm(n, e) {
  n.uniform1iv(this.addr, e);
}
function im(n, e) {
  n.uniform2iv(this.addr, e);
}
function rm(n, e) {
  n.uniform3iv(this.addr, e);
}
function sm(n, e) {
  n.uniform4iv(this.addr, e);
}
function am(n, e) {
  n.uniform1uiv(this.addr, e);
}
function om(n, e) {
  n.uniform2uiv(this.addr, e);
}
function lm(n, e) {
  n.uniform3uiv(this.addr, e);
}
function cm(n, e) {
  n.uniform4uiv(this.addr, e);
}
function um(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  Tt(i, s) || (n.uniform1iv(this.addr, s), bt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Fl, s[o]);
}
function hm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  Tt(i, s) || (n.uniform1iv(this.addr, s), bt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || zl, s[o]);
}
function fm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  Tt(i, s) || (n.uniform1iv(this.addr, s), bt(i, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Gl, s[o]);
}
function dm(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = kr(t, r);
  Tt(i, s) || (n.uniform1iv(this.addr, s), bt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Bl, s[o]);
}
function pm(n) {
  switch (n) {
    case 5126:
      return jp;
    case 35664:
      return Kp;
    case 35665:
      return Zp;
    case 35666:
      return Jp;
    case 35674:
      return Qp;
    case 35675:
      return em;
    case 35676:
      return tm;
    case 5124:
    case 35670:
      return nm;
    case 35667:
    case 35671:
      return im;
    case 35668:
    case 35672:
      return rm;
    case 35669:
    case 35673:
      return sm;
    case 5125:
      return am;
    case 36294:
      return om;
    case 36295:
      return lm;
    case 36296:
      return cm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return um;
    case 35679:
    case 36299:
    case 36307:
      return hm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dm;
  }
}
class mm {
  constructor(e, t, i) {
    ((this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Yp(t.type)));
  }
}
class _m {
  constructor(e, t, i) {
    ((this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = pm(t.type)));
  }
}
class gm {
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
function vm(n, e, t) {
  const i = n.name,
    r = i.length;
  for (bs.lastIndex = 0; ; ) {
    const s = bs.exec(i),
      o = bs.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === r))) {
      So(t, c === void 0 ? new mm(a, n, e) : new _m(a, n, e));
      break;
    } else {
      let f = t.map[a];
      (f === void 0 && ((f = new gm(a)), So(t, f)), (t = f));
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
      vm(s, o, this);
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
const xm = 37297;
let Mm = 0;
function Sm(n, e) {
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
function Em(n) {
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
      Sm(n.getShaderSource(e), o)
    );
  } else return r;
}
function ym(n, e) {
  const t = Em(e);
  return `vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Tm(n, e) {
  let t;
  switch (e) {
    case Uu:
      t = "Linear";
      break;
    case Iu:
      t = "Reinhard";
      break;
    case Nu:
      t = "OptimizedCineon";
      break;
    case Fu:
      t = "ACESFilmic";
      break;
    case Bu:
      t = "AgX";
      break;
    case Ou:
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
function bm(n) {
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
  ].filter(Ri).join(`
`);
}
function Am(n) {
  return [
    n.extensionClipCullDistance ?
      "#extension GL_ANGLE_clip_cull_distance : require"
    : "",
  ].filter(Ri).join(`
`);
}
function wm(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function Rm(n, e) {
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
function Ri(n) {
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
const Cm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Gs(n) {
  return n.replace(Cm, Pm);
}
const Lm = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function Pm(n, e) {
  let t = Fe[e];
  if (t === void 0) {
    const i = Lm.get(e);
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
const Dm =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ao(n) {
  return n.replace(Dm, Um);
}
function Um(n, e, t, i) {
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
function Im(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    n.shadowMapType === cl ? (e = "SHADOWMAP_TYPE_PCF")
    : n.shadowMapType === ou ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
    : n.shadowMapType === En && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Nm(n) {
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
function Fm(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap)
    switch (n.envMapMode) {
      case Ui:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Om(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case Ys:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Pu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Du:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Bm(n) {
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
function zm(n, e, t, i) {
  const r = n.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = Im(t),
    c = Nm(t),
    u = Fm(t),
    f = Om(t),
    d = Bm(t),
    m = t.isWebGL2 ? "" : bm(t),
    _ = Am(t),
    g = wm(s),
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
    ].filter(Ri).join(`
`)),
    h.length > 0 &&
      (h += `
`),
    (M = [
      m,
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      g,
    ].filter(Ri).join(`
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
    ].filter(Ri).join(`
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
      t.toneMapping !== On ? Fe.tonemapping_pars_fragment : "",
      t.toneMapping !== On ? Tm("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      Fe.colorspace_pars_fragment,
      ym("linearToOutputTexel", t.outputColorSpace),
      t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
      `
`,
    ].filter(Ri).join(`
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
    P = x + M + a,
    w = Eo(r, r.VERTEX_SHADER, T),
    A = Eo(r, r.FRAGMENT_SHADER, P);
  (r.attachShader(p, w),
    r.attachShader(p, A),
    t.index0AttributeName !== void 0 ?
      r.bindAttribLocation(p, 0, t.index0AttributeName)
    : t.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"),
    r.linkProgram(p));
  function I(Y) {
    if (n.debug.checkShaderErrors) {
      const oe = r.getProgramInfoLog(p).trim(),
        D = r.getShaderInfoLog(w).trim(),
        N = r.getShaderInfoLog(A).trim();
      let X = !0,
        K = !0;
      if (r.getProgramParameter(p, r.LINK_STATUS) === !1)
        if (((X = !1), typeof n.debug.onShaderError == "function"))
          n.debug.onShaderError(r, p, w, A);
        else {
          const q = yo(r, w, "vertex"),
            j = yo(r, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(p, r.VALIDATE_STATUS) +
              `

Program Info Log: ` +
              oe +
              `
` +
              q +
              `
` +
              j,
          );
        }
      else
        oe !== "" ?
          console.warn("THREE.WebGLProgram: Program Info Log:", oe)
        : (D === "" || N === "") && (K = !1);
      K &&
        (Y.diagnostics = {
          runnable: X,
          programLog: oe,
          vertexShader: { log: D, prefix: h },
          fragmentShader: { log: N, prefix: M },
        });
    }
    (r.deleteShader(w), r.deleteShader(A), (S = new Cr(r, p)), (b = Rm(r, p)));
  }
  let S;
  this.getUniforms = function () {
    return (S === void 0 && I(this), S);
  };
  let b;
  this.getAttributes = function () {
    return (b === void 0 && I(this), b);
  };
  let W = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (W === !1 && (W = r.getProgramParameter(p, xm)), W);
    }),
    (this.destroy = function () {
      (i.releaseStatesOfProgram(this),
        r.deleteProgram(p),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Mm++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = w),
    (this.fragmentShader = A),
    this
  );
}
let Gm = 0;
class Hm {
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
    return (i === void 0 && ((i = new km(e)), t.set(e, i)), i);
  }
}
class km {
  constructor(e) {
    ((this.id = Gm++), (this.code = e), (this.usedTimes = 0));
  }
}
function Vm(n, e, t, i, r, s, o) {
  const a = new bl(),
    l = new Hm(),
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
  function p(S, b, W, Y, oe) {
    const D = Y.fog,
      N = oe.geometry,
      X = S.isMeshStandardMaterial ? Y.environment : null,
      K = (S.isMeshStandardMaterial ? t : e).get(S.envMap || X),
      q = K && K.mapping === Br ? K.image.height : null,
      j = _[S.type];
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
    const Z =
        N.morphAttributes.position ||
        N.morphAttributes.normal ||
        N.morphAttributes.color,
      te = Z !== void 0 ? Z.length : 0;
    let Q = 0;
    (N.morphAttributes.position !== void 0 && (Q = 1),
      N.morphAttributes.normal !== void 0 && (Q = 2),
      N.morphAttributes.color !== void 0 && (Q = 3));
    let G, V, se, le;
    if (j) {
      const Nt = fn[j];
      ((G = Nt.vertexShader), (V = Nt.fragmentShader));
    } else
      ((G = S.vertexShader),
        (V = S.fragmentShader),
        l.update(S),
        (se = l.getVertexShaderID(S)),
        (le = l.getFragmentShaderID(S)));
    const J = n.getRenderTarget(),
      _e = oe.isInstancedMesh === !0,
      ee = oe.isBatchedMesh === !0,
      ge = !!S.map,
      qe = !!S.matcap,
      L = !!K,
      Ze = !!S.aoMap,
      Ee = !!S.lightMap,
      ye = !!S.bumpMap,
      Se = !!S.normalMap,
      pt = !!S.displacementMap,
      Oe = !!S.emissiveMap,
      y = !!S.metalnessMap,
      v = !!S.roughnessMap,
      O = S.anisotropy > 0,
      re = S.clearcoat > 0,
      ie = S.iridescence > 0,
      ae = S.sheen > 0,
      Te = S.transmission > 0,
      pe = O && !!S.anisotropyMap,
      xe = re && !!S.clearcoatMap,
      Ce = re && !!S.clearcoatNormalMap,
      Be = re && !!S.clearcoatRoughnessMap,
      ne = ie && !!S.iridescenceMap,
      et = ie && !!S.iridescenceThicknessMap,
      Xe = ae && !!S.sheenColorMap,
      De = ae && !!S.sheenRoughnessMap,
      Ae = !!S.specularMap,
      Me = !!S.specularColorMap,
      Ne = !!S.specularIntensityMap,
      Je = Te && !!S.transmissionMap,
      _t = Te && !!S.thicknessMap,
      Ge = !!S.gradientMap,
      ue = !!S.alphaMap,
      C = S.alphaTest > 0,
      fe = !!S.alphaHash,
      de = !!S.extensions,
      Le = !!N.attributes.uv1,
      we = !!N.attributes.uv2,
      it = !!N.attributes.uv3;
    let rt = On;
    return (
      S.toneMapped &&
        (J === null || J.isXRRenderTarget === !0) &&
        (rt = n.toneMapping),
      {
        isWebGL2: u,
        shaderID: j,
        shaderType: S.type,
        shaderName: S.name,
        vertexShader: G,
        fragmentShader: V,
        defines: S.defines,
        customVertexShaderID: se,
        customFragmentShaderID: le,
        isRawShaderMaterial: S.isRawShaderMaterial === !0,
        glslVersion: S.glslVersion,
        precision: m,
        batching: ee,
        instancing: _e,
        instancingColor: _e && oe.instanceColor !== null,
        supportsVertexTextures: d,
        outputColorSpace:
          J === null ? n.outputColorSpace
          : J.isXRRenderTarget === !0 ? J.texture.colorSpace
          : An,
        map: ge,
        matcap: qe,
        envMap: L,
        envMapMode: L && K.mapping,
        envMapCubeUVHeight: q,
        aoMap: Ze,
        lightMap: Ee,
        bumpMap: ye,
        normalMap: Se,
        displacementMap: d && pt,
        emissiveMap: Oe,
        normalMapObjectSpace: Se && S.normalMapType === Ku,
        normalMapTangentSpace: Se && S.normalMapType === xl,
        metalnessMap: y,
        roughnessMap: v,
        anisotropy: O,
        anisotropyMap: pe,
        clearcoat: re,
        clearcoatMap: xe,
        clearcoatNormalMap: Ce,
        clearcoatRoughnessMap: Be,
        iridescence: ie,
        iridescenceMap: ne,
        iridescenceThicknessMap: et,
        sheen: ae,
        sheenColorMap: Xe,
        sheenRoughnessMap: De,
        specularMap: Ae,
        specularColorMap: Me,
        specularIntensityMap: Ne,
        transmission: Te,
        transmissionMap: Je,
        thicknessMap: _t,
        gradientMap: Ge,
        opaque: S.transparent === !1 && S.blending === Li,
        alphaMap: ue,
        alphaTest: C,
        alphaHash: fe,
        combine: S.combine,
        mapUv: ge && g(S.map.channel),
        aoMapUv: Ze && g(S.aoMap.channel),
        lightMapUv: Ee && g(S.lightMap.channel),
        bumpMapUv: ye && g(S.bumpMap.channel),
        normalMapUv: Se && g(S.normalMap.channel),
        displacementMapUv: pt && g(S.displacementMap.channel),
        emissiveMapUv: Oe && g(S.emissiveMap.channel),
        metalnessMapUv: y && g(S.metalnessMap.channel),
        roughnessMapUv: v && g(S.roughnessMap.channel),
        anisotropyMapUv: pe && g(S.anisotropyMap.channel),
        clearcoatMapUv: xe && g(S.clearcoatMap.channel),
        clearcoatNormalMapUv: Ce && g(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: Be && g(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ne && g(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: et && g(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: Xe && g(S.sheenColorMap.channel),
        sheenRoughnessMapUv: De && g(S.sheenRoughnessMap.channel),
        specularMapUv: Ae && g(S.specularMap.channel),
        specularColorMapUv: Me && g(S.specularColorMap.channel),
        specularIntensityMapUv: Ne && g(S.specularIntensityMap.channel),
        transmissionMapUv: Je && g(S.transmissionMap.channel),
        thicknessMapUv: _t && g(S.thicknessMap.channel),
        alphaMapUv: ue && g(S.alphaMap.channel),
        vertexTangents: !!N.attributes.tangent && (Se || O),
        vertexColors: S.vertexColors,
        vertexAlphas:
          S.vertexColors === !0 &&
          !!N.attributes.color &&
          N.attributes.color.itemSize === 4,
        vertexUv1s: Le,
        vertexUv2s: we,
        vertexUv3s: it,
        pointsUvs: oe.isPoints === !0 && !!N.attributes.uv && (ge || ue),
        fog: !!D,
        useFog: S.fog === !0,
        fogExp2: D && D.isFogExp2,
        flatShading: S.flatShading === !0,
        sizeAttenuation: S.sizeAttenuation === !0,
        logarithmicDepthBuffer: f,
        skinning: oe.isSkinnedMesh === !0,
        morphTargets: N.morphAttributes.position !== void 0,
        morphNormals: N.morphAttributes.normal !== void 0,
        morphColors: N.morphAttributes.color !== void 0,
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
        flipSided: S.side === Xt,
        useDepthPacking: S.depthPacking >= 0,
        depthPacking: S.depthPacking || 0,
        index0AttributeName: S.index0AttributeName,
        extensionDerivatives: de && S.extensions.derivatives === !0,
        extensionFragDepth: de && S.extensions.fragDepth === !0,
        extensionDrawBuffers: de && S.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: de && S.extensions.shaderTextureLOD === !0,
        extensionClipCullDistance:
          de &&
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
      const Y = fn[b];
      W = Th.clone(Y.uniforms);
    } else W = S.uniforms;
    return W;
  }
  function P(S, b) {
    let W;
    for (let Y = 0, oe = c.length; Y < oe; Y++) {
      const D = c[Y];
      if (D.cacheKey === b) {
        ((W = D), ++W.usedTimes);
        break;
      }
    }
    return (W === void 0 && ((W = new zm(n, b, S, s)), c.push(W)), W);
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
  function I() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: P,
    releaseProgram: w,
    releaseShaderCache: A,
    programs: c,
    dispose: I,
  };
}
function Wm() {
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
function Xm(n, e) {
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
    (t.length > 1 && t.sort(f || Xm),
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
function $m() {
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
function qm() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new z(), color: new je() };
          break;
        case "SpotLight":
          t = {
            position: new z(),
            direction: new z(),
            color: new je(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new z(), color: new je(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new z(), skyColor: new je(), groundColor: new je() };
          break;
        case "RectAreaLight":
          t = {
            color: new je(),
            position: new z(),
            halfWidth: new z(),
            halfHeight: new z(),
          };
          break;
      }
      return ((n[e.id] = t), t);
    },
  };
}
function Ym() {
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
let jm = 0;
function Km(n, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (n.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (n.map ? 1 : 0)
  );
}
function Zm(n, e) {
  const t = new qm(),
    i = Ym(),
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
  for (let u = 0; u < 9; u++) r.probe.push(new z());
  const s = new z(),
    o = new yt(),
    a = new yt();
  function l(u, f) {
    let d = 0,
      m = 0,
      _ = 0;
    for (let Y = 0; Y < 9; Y++) r.probe[Y].set(0, 0, 0);
    let g = 0,
      p = 0,
      h = 0,
      M = 0,
      x = 0,
      T = 0,
      P = 0,
      w = 0,
      A = 0,
      I = 0,
      S = 0;
    u.sort(Km);
    const b = f === !0 ? Math.PI : 1;
    for (let Y = 0, oe = u.length; Y < oe; Y++) {
      const D = u[Y],
        N = D.color,
        X = D.intensity,
        K = D.distance,
        q = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        ((d += N.r * X * b), (m += N.g * X * b), (_ += N.b * X * b));
      else if (D.isLightProbe) {
        for (let j = 0; j < 9; j++)
          r.probe[j].addScaledVector(D.sh.coefficients[j], X);
        S++;
      } else if (D.isDirectionalLight) {
        const j = t.get(D);
        if (
          (j.color.copy(D.color).multiplyScalar(D.intensity * b), D.castShadow)
        ) {
          const Z = D.shadow,
            te = i.get(D);
          ((te.shadowBias = Z.bias),
            (te.shadowNormalBias = Z.normalBias),
            (te.shadowRadius = Z.radius),
            (te.shadowMapSize = Z.mapSize),
            (r.directionalShadow[g] = te),
            (r.directionalShadowMap[g] = q),
            (r.directionalShadowMatrix[g] = D.shadow.matrix),
            T++);
        }
        ((r.directional[g] = j), g++);
      } else if (D.isSpotLight) {
        const j = t.get(D);
        (j.position.setFromMatrixPosition(D.matrixWorld),
          j.color.copy(N).multiplyScalar(X * b),
          (j.distance = K),
          (j.coneCos = Math.cos(D.angle)),
          (j.penumbraCos = Math.cos(D.angle * (1 - D.penumbra))),
          (j.decay = D.decay),
          (r.spot[h] = j));
        const Z = D.shadow;
        if (
          (D.map &&
            ((r.spotLightMap[A] = D.map),
            A++,
            Z.updateMatrices(D),
            D.castShadow && I++),
          (r.spotLightMatrix[h] = Z.matrix),
          D.castShadow)
        ) {
          const te = i.get(D);
          ((te.shadowBias = Z.bias),
            (te.shadowNormalBias = Z.normalBias),
            (te.shadowRadius = Z.radius),
            (te.shadowMapSize = Z.mapSize),
            (r.spotShadow[h] = te),
            (r.spotShadowMap[h] = q),
            w++);
        }
        h++;
      } else if (D.isRectAreaLight) {
        const j = t.get(D);
        (j.color.copy(N).multiplyScalar(X),
          j.halfWidth.set(D.width * 0.5, 0, 0),
          j.halfHeight.set(0, D.height * 0.5, 0),
          (r.rectArea[M] = j),
          M++);
      } else if (D.isPointLight) {
        const j = t.get(D);
        if (
          (j.color.copy(D.color).multiplyScalar(D.intensity * b),
          (j.distance = D.distance),
          (j.decay = D.decay),
          D.castShadow)
        ) {
          const Z = D.shadow,
            te = i.get(D);
          ((te.shadowBias = Z.bias),
            (te.shadowNormalBias = Z.normalBias),
            (te.shadowRadius = Z.radius),
            (te.shadowMapSize = Z.mapSize),
            (te.shadowCameraNear = Z.camera.near),
            (te.shadowCameraFar = Z.camera.far),
            (r.pointShadow[p] = te),
            (r.pointShadowMap[p] = q),
            (r.pointShadowMatrix[p] = D.shadow.matrix),
            P++);
        }
        ((r.point[p] = j), p++);
      } else if (D.isHemisphereLight) {
        const j = t.get(D);
        (j.skyColor.copy(D.color).multiplyScalar(X * b),
          j.groundColor.copy(D.groundColor).multiplyScalar(X * b),
          (r.hemi[x] = j),
          x++);
      }
    }
    (M > 0 &&
      (e.isWebGL2 ?
        n.has("OES_texture_float_linear") === !0 ?
          ((r.rectAreaLTC1 = he.LTC_FLOAT_1), (r.rectAreaLTC2 = he.LTC_FLOAT_2))
        : ((r.rectAreaLTC1 = he.LTC_HALF_1), (r.rectAreaLTC2 = he.LTC_HALF_2))
      : n.has("OES_texture_float_linear") === !0 ?
        ((r.rectAreaLTC1 = he.LTC_FLOAT_1), (r.rectAreaLTC2 = he.LTC_FLOAT_2))
      : n.has("OES_texture_half_float_linear") === !0 ?
        ((r.rectAreaLTC1 = he.LTC_HALF_1), (r.rectAreaLTC2 = he.LTC_HALF_2))
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
      W.numPointShadows !== P ||
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
      (r.pointShadow.length = P),
      (r.pointShadowMap.length = P),
      (r.spotShadow.length = w),
      (r.spotShadowMap.length = w),
      (r.directionalShadowMatrix.length = T),
      (r.pointShadowMatrix.length = P),
      (r.spotLightMatrix.length = w + A - I),
      (r.spotLightMap.length = A),
      (r.numSpotLightShadowsWithMaps = I),
      (r.numLightProbes = S),
      (W.directionalLength = g),
      (W.pointLength = p),
      (W.spotLength = h),
      (W.rectAreaLength = M),
      (W.hemiLength = x),
      (W.numDirectionalShadows = T),
      (W.numPointShadows = P),
      (W.numSpotShadows = w),
      (W.numSpotMaps = A),
      (W.numLightProbes = S),
      (r.version = jm++));
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
        const P = r.directional[d];
        (P.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          P.direction.sub(s),
          P.direction.transformDirection(h),
          d++);
      } else if (T.isSpotLight) {
        const P = r.spot[_];
        (P.position.setFromMatrixPosition(T.matrixWorld),
          P.position.applyMatrix4(h),
          P.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          P.direction.sub(s),
          P.direction.transformDirection(h),
          _++);
      } else if (T.isRectAreaLight) {
        const P = r.rectArea[g];
        (P.position.setFromMatrixPosition(T.matrixWorld),
          P.position.applyMatrix4(h),
          a.identity(),
          o.copy(T.matrixWorld),
          o.premultiply(h),
          a.extractRotation(o),
          P.halfWidth.set(T.width * 0.5, 0, 0),
          P.halfHeight.set(0, T.height * 0.5, 0),
          P.halfWidth.applyMatrix4(a),
          P.halfHeight.applyMatrix4(a),
          g++);
      } else if (T.isPointLight) {
        const P = r.point[m];
        (P.position.setFromMatrixPosition(T.matrixWorld),
          P.position.applyMatrix4(h),
          m++);
      } else if (T.isHemisphereLight) {
        const P = r.hemi[p];
        (P.direction.setFromMatrixPosition(T.matrixWorld),
          P.direction.transformDirection(h),
          p++);
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Lo(n, e) {
  const t = new Zm(n, e),
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
function Jm(n, e) {
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
class Qm extends er {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Yu),
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
class e_ extends er {
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
const t_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  n_ = `uniform sampler2D shadow_pass;
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
function i_(n, e, t) {
  let i = new Js();
  const r = new Ke(),
    s = new Ke(),
    o = new Ct(),
    a = new Qm({ depthPacking: ju }),
    l = new e_(),
    c = {},
    u = t.maxTextureSize,
    f = { [Gn]: Xt, [Xt]: Gn, [dn]: dn },
    d = new ri({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ke() },
        radius: { value: 4 },
      },
      vertexShader: t_,
      fragmentShader: n_,
    }),
    m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new ai();
  _.setAttribute(
    "position",
    new pn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const g = new Tn(_, d),
    p = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = cl));
  let h = this.type;
  this.render = function (w, A, I) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const S = n.getRenderTarget(),
      b = n.getActiveCubeFace(),
      W = n.getActiveMipmapLevel(),
      Y = n.state;
    (Y.setBlending(Fn),
      Y.buffers.color.setClear(1, 1, 1, 1),
      Y.buffers.depth.setTest(!0),
      Y.setScissorTest(!1));
    const oe = h !== En && this.type === En,
      D = h === En && this.type !== En;
    for (let N = 0, X = w.length; N < X; N++) {
      const K = w[N],
        q = K.shadow;
      if (q === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (q.autoUpdate === !1 && q.needsUpdate === !1) continue;
      r.copy(q.mapSize);
      const j = q.getFrameExtents();
      if (
        (r.multiply(j),
        s.copy(q.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / j.x)),
            (r.x = s.x * j.x),
            (q.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / j.y)),
            (r.y = s.y * j.y),
            (q.mapSize.y = s.y))),
        q.map === null || oe === !0 || D === !0)
      ) {
        const te = this.type !== En ? { minFilter: zt, magFilter: zt } : {};
        (q.map !== null && q.map.dispose(),
          (q.map = new ii(r.x, r.y, te)),
          (q.map.texture.name = K.name + ".shadowMap"),
          q.camera.updateProjectionMatrix());
      }
      (n.setRenderTarget(q.map), n.clear());
      const Z = q.getViewportCount();
      for (let te = 0; te < Z; te++) {
        const Q = q.getViewport(te);
        (o.set(s.x * Q.x, s.y * Q.y, s.x * Q.z, s.y * Q.w),
          Y.viewport(o),
          q.updateMatrices(K, te),
          (i = q.getFrustum()),
          T(A, I, q.camera, K, this.type));
      }
      (q.isPointLightShadow !== !0 && this.type === En && M(q, I),
        (q.needsUpdate = !1));
    }
    ((h = this.type), (p.needsUpdate = !1), n.setRenderTarget(S, b, W));
  };
  function M(w, A) {
    const I = e.update(g);
    (d.defines.VSM_SAMPLES !== w.blurSamples &&
      ((d.defines.VSM_SAMPLES = w.blurSamples),
      (m.defines.VSM_SAMPLES = w.blurSamples),
      (d.needsUpdate = !0),
      (m.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new ii(r.x, r.y)),
      (d.uniforms.shadow_pass.value = w.map.texture),
      (d.uniforms.resolution.value = w.mapSize),
      (d.uniforms.radius.value = w.radius),
      n.setRenderTarget(w.mapPass),
      n.clear(),
      n.renderBufferDirect(A, null, I, d, g, null),
      (m.uniforms.shadow_pass.value = w.mapPass.texture),
      (m.uniforms.resolution.value = w.mapSize),
      (m.uniforms.radius.value = w.radius),
      n.setRenderTarget(w.map),
      n.clear(),
      n.renderBufferDirect(A, null, I, m, g, null));
  }
  function x(w, A, I, S) {
    let b = null;
    const W =
      I.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (W !== void 0) b = W;
    else if (
      ((b = I.isPointLight === !0 ? l : a),
      (n.localClippingEnabled &&
        A.clipShadows === !0 &&
        Array.isArray(A.clippingPlanes) &&
        A.clippingPlanes.length !== 0) ||
        (A.displacementMap && A.displacementScale !== 0) ||
        (A.alphaMap && A.alphaTest > 0) ||
        (A.map && A.alphaTest > 0))
    ) {
      const Y = b.uuid,
        oe = A.uuid;
      let D = c[Y];
      D === void 0 && ((D = {}), (c[Y] = D));
      let N = D[oe];
      (N === void 0 &&
        ((N = b.clone()), (D[oe] = N), A.addEventListener("dispose", P)),
        (b = N));
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
      I.isPointLight === !0 && b.isMeshDistanceMaterial === !0)
    ) {
      const Y = n.properties.get(b);
      Y.light = I;
    }
    return b;
  }
  function T(w, A, I, S, b) {
    if (w.visible === !1) return;
    if (
      w.layers.test(A.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && b === En)) &&
      (!w.frustumCulled || i.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, w.matrixWorld);
      const oe = e.update(w),
        D = w.material;
      if (Array.isArray(D)) {
        const N = oe.groups;
        for (let X = 0, K = N.length; X < K; X++) {
          const q = N[X],
            j = D[q.materialIndex];
          if (j && j.visible) {
            const Z = x(w, j, S, b);
            (w.onBeforeShadow(n, w, A, I, oe, Z, q),
              n.renderBufferDirect(I, null, oe, Z, w, q),
              w.onAfterShadow(n, w, A, I, oe, Z, q));
          }
        }
      } else if (D.visible) {
        const N = x(w, D, S, b);
        (w.onBeforeShadow(n, w, A, I, oe, N, null),
          n.renderBufferDirect(I, null, oe, N, w, null),
          w.onAfterShadow(n, w, A, I, oe, N, null));
      }
    }
    const Y = w.children;
    for (let oe = 0, D = Y.length; oe < D; oe++) T(Y[oe], A, I, S, b);
  }
  function P(w) {
    w.target.removeEventListener("dispose", P);
    for (const I in c) {
      const S = c[I],
        b = w.target.uuid;
      b in S && (S[b].dispose(), delete S[b]);
    }
  }
}
function r_(n, e, t) {
  const i = t.isWebGL2;
  function r() {
    let C = !1;
    const fe = new Ct();
    let de = null;
    const Le = new Ct(0, 0, 0, 0);
    return {
      setMask: function (we) {
        de !== we && !C && (n.colorMask(we, we, we, we), (de = we));
      },
      setLocked: function (we) {
        C = we;
      },
      setClear: function (we, it, rt, At, Nt) {
        (Nt === !0 && ((we *= At), (it *= At), (rt *= At)),
          fe.set(we, it, rt, At),
          Le.equals(fe) === !1 && (n.clearColor(we, it, rt, At), Le.copy(fe)));
      },
      reset: function () {
        ((C = !1), (de = null), Le.set(-1, 0, 0, 0));
      },
    };
  }
  function s() {
    let C = !1,
      fe = null,
      de = null,
      Le = null;
    return {
      setTest: function (we) {
        we ? ee(n.DEPTH_TEST) : ge(n.DEPTH_TEST);
      },
      setMask: function (we) {
        fe !== we && !C && (n.depthMask(we), (fe = we));
      },
      setFunc: function (we) {
        if (de !== we) {
          switch (we) {
            case Tu:
              n.depthFunc(n.NEVER);
              break;
            case bu:
              n.depthFunc(n.ALWAYS);
              break;
            case Au:
              n.depthFunc(n.LESS);
              break;
            case Dr:
              n.depthFunc(n.LEQUAL);
              break;
            case wu:
              n.depthFunc(n.EQUAL);
              break;
            case Ru:
              n.depthFunc(n.GEQUAL);
              break;
            case Cu:
              n.depthFunc(n.GREATER);
              break;
            case Lu:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          de = we;
        }
      },
      setLocked: function (we) {
        C = we;
      },
      setClear: function (we) {
        Le !== we && (n.clearDepth(we), (Le = we));
      },
      reset: function () {
        ((C = !1), (fe = null), (de = null), (Le = null));
      },
    };
  }
  function o() {
    let C = !1,
      fe = null,
      de = null,
      Le = null,
      we = null,
      it = null,
      rt = null,
      At = null,
      Nt = null;
    return {
      setTest: function (st) {
        C || (st ? ee(n.STENCIL_TEST) : ge(n.STENCIL_TEST));
      },
      setMask: function (st) {
        fe !== st && !C && (n.stencilMask(st), (fe = st));
      },
      setFunc: function (st, Ft, hn) {
        (de !== st || Le !== Ft || we !== hn) &&
          (n.stencilFunc(st, Ft, hn), (de = st), (Le = Ft), (we = hn));
      },
      setOp: function (st, Ft, hn) {
        (it !== st || rt !== Ft || At !== hn) &&
          (n.stencilOp(st, Ft, hn), (it = st), (rt = Ft), (At = hn));
      },
      setLocked: function (st) {
        C = st;
      },
      setClear: function (st) {
        Nt !== st && (n.clearStencil(st), (Nt = st));
      },
      reset: function () {
        ((C = !1),
          (fe = null),
          (de = null),
          (Le = null),
          (we = null),
          (it = null),
          (rt = null),
          (At = null),
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
    P = null,
    w = null,
    A = null,
    I = null,
    S = new je(0, 0, 0),
    b = 0,
    W = !1,
    Y = null,
    oe = null,
    D = null,
    N = null,
    X = null;
  const K = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1,
    j = 0;
  const Z = n.getParameter(n.VERSION);
  Z.indexOf("WebGL") !== -1 ?
    ((j = parseFloat(/^WebGL (\d)/.exec(Z)[1])), (q = j >= 1))
  : Z.indexOf("OpenGL ES") !== -1 &&
    ((j = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1])), (q = j >= 2));
  let te = null,
    Q = {};
  const G = n.getParameter(n.SCISSOR_BOX),
    V = n.getParameter(n.VIEWPORT),
    se = new Ct().fromArray(G),
    le = new Ct().fromArray(V);
  function J(C, fe, de, Le) {
    const we = new Uint8Array(4),
      it = n.createTexture();
    (n.bindTexture(C, it),
      n.texParameteri(C, n.TEXTURE_MIN_FILTER, n.NEAREST),
      n.texParameteri(C, n.TEXTURE_MAG_FILTER, n.NEAREST));
    for (let rt = 0; rt < de; rt++)
      i && (C === n.TEXTURE_3D || C === n.TEXTURE_2D_ARRAY) ?
        n.texImage3D(fe, 0, n.RGBA, 1, 1, Le, 0, n.RGBA, n.UNSIGNED_BYTE, we)
      : n.texImage2D(fe + rt, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, we);
    return it;
  }
  const _e = {};
  ((_e[n.TEXTURE_2D] = J(n.TEXTURE_2D, n.TEXTURE_2D, 1)),
    (_e[n.TEXTURE_CUBE_MAP] = J(
      n.TEXTURE_CUBE_MAP,
      n.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    i &&
      ((_e[n.TEXTURE_2D_ARRAY] = J(
        n.TEXTURE_2D_ARRAY,
        n.TEXTURE_2D_ARRAY,
        1,
        1,
      )),
      (_e[n.TEXTURE_3D] = J(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    ee(n.DEPTH_TEST),
    l.setFunc(Dr),
    Oe(!1),
    y(ua),
    ee(n.CULL_FACE),
    Se(Fn));
  function ee(C) {
    d[C] !== !0 && (n.enable(C), (d[C] = !0));
  }
  function ge(C) {
    d[C] !== !1 && (n.disable(C), (d[C] = !1));
  }
  function qe(C, fe) {
    return m[C] !== fe ?
        (n.bindFramebuffer(C, fe),
        (m[C] = fe),
        i &&
          (C === n.DRAW_FRAMEBUFFER && (m[n.FRAMEBUFFER] = fe),
          C === n.FRAMEBUFFER && (m[n.DRAW_FRAMEBUFFER] = fe)),
        !0)
      : !1;
  }
  function L(C, fe) {
    let de = g,
      Le = !1;
    if (C)
      if (
        ((de = _.get(fe)),
        de === void 0 && ((de = []), _.set(fe, de)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const we = C.texture;
        if (de.length !== we.length || de[0] !== n.COLOR_ATTACHMENT0) {
          for (let it = 0, rt = we.length; it < rt; it++)
            de[it] = n.COLOR_ATTACHMENT0 + it;
          ((de.length = we.length), (Le = !0));
        }
      } else
        de[0] !== n.COLOR_ATTACHMENT0 &&
          ((de[0] = n.COLOR_ATTACHMENT0), (Le = !0));
    else de[0] !== n.BACK && ((de[0] = n.BACK), (Le = !0));
    Le &&
      (t.isWebGL2 ?
        n.drawBuffers(de)
      : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de));
  }
  function Ze(C) {
    return p !== C ? (n.useProgram(C), (p = C), !0) : !1;
  }
  const Ee = {
    [jn]: n.FUNC_ADD,
    [cu]: n.FUNC_SUBTRACT,
    [uu]: n.FUNC_REVERSE_SUBTRACT,
  };
  if (i) ((Ee[pa] = n.MIN), (Ee[ma] = n.MAX));
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((Ee[pa] = C.MIN_EXT), (Ee[ma] = C.MAX_EXT));
  }
  const ye = {
    [hu]: n.ZERO,
    [fu]: n.ONE,
    [du]: n.SRC_COLOR,
    [Ps]: n.SRC_ALPHA,
    [xu]: n.SRC_ALPHA_SATURATE,
    [gu]: n.DST_COLOR,
    [mu]: n.DST_ALPHA,
    [pu]: n.ONE_MINUS_SRC_COLOR,
    [Ds]: n.ONE_MINUS_SRC_ALPHA,
    [vu]: n.ONE_MINUS_DST_COLOR,
    [_u]: n.ONE_MINUS_DST_ALPHA,
    [Mu]: n.CONSTANT_COLOR,
    [Su]: n.ONE_MINUS_CONSTANT_COLOR,
    [Eu]: n.CONSTANT_ALPHA,
    [yu]: n.ONE_MINUS_CONSTANT_ALPHA,
  };
  function Se(C, fe, de, Le, we, it, rt, At, Nt, st) {
    if (C === Fn) {
      h === !0 && (ge(n.BLEND), (h = !1));
      return;
    }
    if ((h === !1 && (ee(n.BLEND), (h = !0)), C !== lu)) {
      if (C !== M || st !== W) {
        if (
          ((x !== jn || w !== jn) &&
            (n.blendEquation(n.FUNC_ADD), (x = jn), (w = jn)),
          st)
        )
          switch (C) {
            case Li:
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
            case Li:
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
          (P = null),
          (A = null),
          (I = null),
          S.set(0, 0, 0),
          (b = 0),
          (M = C),
          (W = st));
      }
      return;
    }
    ((we = we || fe),
      (it = it || de),
      (rt = rt || Le),
      (fe !== x || we !== w) &&
        (n.blendEquationSeparate(Ee[fe], Ee[we]), (x = fe), (w = we)),
      (de !== T || Le !== P || it !== A || rt !== I) &&
        (n.blendFuncSeparate(ye[de], ye[Le], ye[it], ye[rt]),
        (T = de),
        (P = Le),
        (A = it),
        (I = rt)),
      (At.equals(S) === !1 || Nt !== b) &&
        (n.blendColor(At.r, At.g, At.b, Nt), S.copy(At), (b = Nt)),
      (M = C),
      (W = !1));
  }
  function pt(C, fe) {
    C.side === dn ? ge(n.CULL_FACE) : ee(n.CULL_FACE);
    let de = C.side === Xt;
    (fe && (de = !de),
      Oe(de),
      C.blending === Li && C.transparent === !1 ?
        Se(Fn)
      : Se(
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
        ee(n.SAMPLE_ALPHA_TO_COVERAGE)
      : ge(n.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Oe(C) {
    Y !== C && (C ? n.frontFace(n.CW) : n.frontFace(n.CCW), (Y = C));
  }
  function y(C) {
    (C !== su ?
      (ee(n.CULL_FACE),
      C !== oe &&
        (C === ua ? n.cullFace(n.BACK)
        : C === au ? n.cullFace(n.FRONT)
        : n.cullFace(n.FRONT_AND_BACK)))
    : ge(n.CULL_FACE),
      (oe = C));
  }
  function v(C) {
    C !== D && (q && n.lineWidth(C), (D = C));
  }
  function O(C, fe, de) {
    C ?
      (ee(n.POLYGON_OFFSET_FILL),
      (N !== fe || X !== de) && (n.polygonOffset(fe, de), (N = fe), (X = de)))
    : ge(n.POLYGON_OFFSET_FILL);
  }
  function re(C) {
    C ? ee(n.SCISSOR_TEST) : ge(n.SCISSOR_TEST);
  }
  function ie(C) {
    (C === void 0 && (C = n.TEXTURE0 + K - 1),
      te !== C && (n.activeTexture(C), (te = C)));
  }
  function ae(C, fe, de) {
    de === void 0 && (te === null ? (de = n.TEXTURE0 + K - 1) : (de = te));
    let Le = Q[de];
    (Le === void 0 && ((Le = { type: void 0, texture: void 0 }), (Q[de] = Le)),
      (Le.type !== C || Le.texture !== fe) &&
        (te !== de && (n.activeTexture(de), (te = de)),
        n.bindTexture(C, fe || _e[C]),
        (Le.type = C),
        (Le.texture = fe)));
  }
  function Te() {
    const C = Q[te];
    C !== void 0 &&
      C.type !== void 0 &&
      (n.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function pe() {
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
  function Xe() {
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
  function Ae() {
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
  function Ne(C) {
    se.equals(C) === !1 && (n.scissor(C.x, C.y, C.z, C.w), se.copy(C));
  }
  function Je(C) {
    le.equals(C) === !1 && (n.viewport(C.x, C.y, C.z, C.w), le.copy(C));
  }
  function _t(C, fe) {
    let de = f.get(fe);
    de === void 0 && ((de = new WeakMap()), f.set(fe, de));
    let Le = de.get(C);
    Le === void 0 && ((Le = n.getUniformBlockIndex(fe, C.name)), de.set(C, Le));
  }
  function Ge(C, fe) {
    const Le = f.get(fe).get(C);
    u.get(fe) !== Le &&
      (n.uniformBlockBinding(fe, Le, C.__bindingPointIndex), u.set(fe, Le));
  }
  function ue() {
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
      (P = null),
      (w = null),
      (A = null),
      (I = null),
      (S = new je(0, 0, 0)),
      (b = 0),
      (W = !1),
      (Y = null),
      (oe = null),
      (D = null),
      (N = null),
      (X = null),
      se.set(0, 0, n.canvas.width, n.canvas.height),
      le.set(0, 0, n.canvas.width, n.canvas.height),
      a.reset(),
      l.reset(),
      c.reset());
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: ee,
    disable: ge,
    bindFramebuffer: qe,
    drawBuffers: L,
    useProgram: Ze,
    setBlending: Se,
    setMaterial: pt,
    setFlipSided: Oe,
    setCullFace: y,
    setLineWidth: v,
    setPolygonOffset: O,
    setScissorTest: re,
    activeTexture: ie,
    bindTexture: ae,
    unbindTexture: Te,
    compressedTexImage2D: pe,
    compressedTexImage3D: xe,
    texImage2D: Ae,
    texImage3D: Me,
    updateUBOMapping: _t,
    uniformBlockBinding: Ge,
    texStorage2D: Xe,
    texStorage3D: De,
    texSubImage2D: Ce,
    texSubImage3D: Be,
    compressedTexSubImage2D: ne,
    compressedTexSubImage3D: et,
    scissor: Ne,
    viewport: Je,
    reset: ue,
  };
}
function s_(n, e, t, i, r, s, o) {
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
  function g(y, v, O, re) {
    let ie = 1;
    if (
      ((y.width > re || y.height > re) &&
        (ie = re / Math.max(y.width, y.height)),
      ie < 1 || v === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && y instanceof ImageBitmap)
      ) {
        const ae = v ? zs : Math.floor,
          Te = ae(ie * y.width),
          pe = ae(ie * y.height);
        f === void 0 && (f = _(Te, pe));
        const xe = O ? _(Te, pe) : f;
        return (
          (xe.width = Te),
          (xe.height = pe),
          xe.getContext("2d").drawImage(y, 0, 0, Te, pe),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              y.width +
              "x" +
              y.height +
              ") to (" +
              Te +
              "x" +
              pe +
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
          (y.minFilter !== zt && y.minFilter !== tn)
      );
  }
  function M(y, v) {
    return y.generateMipmaps && v && y.minFilter !== zt && y.minFilter !== tn;
  }
  function x(y) {
    n.generateMipmap(y);
  }
  function T(y, v, O, re, ie = !1) {
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
      const Te = ie ? Ur : tt.getTransfer(re);
      (O === n.FLOAT && (ae = n.RGBA32F),
        O === n.HALF_FLOAT && (ae = n.RGBA16F),
        O === n.UNSIGNED_BYTE && (ae = Te === lt ? n.SRGB8_ALPHA8 : n.RGBA8),
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
  function P(y, v, O) {
    return (
      (
        M(y, O) === !0 ||
          (y.isFramebufferTexture && y.minFilter !== zt && y.minFilter !== tn)
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
  function I(y) {
    const v = y.target;
    (v.removeEventListener("dispose", I), W(v));
  }
  function S(y) {
    const v = i.get(y);
    if (v.__webglInit === void 0) return;
    const O = y.source,
      re = d.get(O);
    if (re) {
      const ie = re[v.__cacheKey];
      (ie.usedTimes--,
        ie.usedTimes === 0 && b(y),
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
  function W(y) {
    const v = y.texture,
      O = i.get(y),
      re = i.get(v);
    if (
      (re.__webglTexture !== void 0 &&
        (n.deleteTexture(re.__webglTexture), o.memory.textures--),
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
        const Te = i.get(v[ie]);
        (Te.__webglTexture &&
          (n.deleteTexture(Te.__webglTexture), o.memory.textures--),
          i.remove(v[ie]));
      }
    (i.remove(v), i.remove(y));
  }
  let Y = 0;
  function oe() {
    Y = 0;
  }
  function D() {
    const y = Y;
    return (
      y >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            y +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (Y += 1),
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
  function X(y, v) {
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
        se(O, y, v);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, O.__webglTexture, n.TEXTURE0 + v);
  }
  function K(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      se(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, O.__webglTexture, n.TEXTURE0 + v);
  }
  function q(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      se(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, O.__webglTexture, n.TEXTURE0 + v);
  }
  function j(y, v) {
    const O = i.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      le(O, y, v);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, O.__webglTexture, n.TEXTURE0 + v);
  }
  const Z = { [Ns]: n.REPEAT, [cn]: n.CLAMP_TO_EDGE, [Fs]: n.MIRRORED_REPEAT },
    te = {
      [zt]: n.NEAREST,
      [_a]: n.NEAREST_MIPMAP_NEAREST,
      [Kr]: n.NEAREST_MIPMAP_LINEAR,
      [tn]: n.LINEAR,
      [zu]: n.LINEAR_MIPMAP_NEAREST,
      [ji]: n.LINEAR_MIPMAP_LINEAR,
    },
    Q = {
      [Zu]: n.NEVER,
      [ih]: n.ALWAYS,
      [Ju]: n.LESS,
      [Ml]: n.LEQUAL,
      [Qu]: n.EQUAL,
      [nh]: n.GEQUAL,
      [eh]: n.GREATER,
      [th]: n.NOTEQUAL,
    };
  function G(y, v, O) {
    if (
      (O ?
        (n.texParameteri(y, n.TEXTURE_WRAP_S, Z[v.wrapS]),
        n.texParameteri(y, n.TEXTURE_WRAP_T, Z[v.wrapT]),
        (y === n.TEXTURE_3D || y === n.TEXTURE_2D_ARRAY) &&
          n.texParameteri(y, n.TEXTURE_WRAP_R, Z[v.wrapR]),
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
          v.minFilter !== tn &&
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
  function V(y, v) {
    let O = !1;
    y.__webglInit === void 0 &&
      ((y.__webglInit = !0), v.addEventListener("dispose", A));
    const re = v.source;
    let ie = d.get(re);
    ie === void 0 && ((ie = {}), d.set(re, ie));
    const ae = N(v);
    if (ae !== y.__cacheKey) {
      (ie[ae] === void 0 &&
        ((ie[ae] = { texture: n.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (O = !0)),
        ie[ae].usedTimes++);
      const Te = ie[y.__cacheKey];
      (Te !== void 0 &&
        (ie[y.__cacheKey].usedTimes--, Te.usedTimes === 0 && b(v)),
        (y.__cacheKey = ae),
        (y.__webglTexture = ie[ae].texture));
    }
    return O;
  }
  function se(y, v, O) {
    let re = n.TEXTURE_2D;
    ((v.isDataArrayTexture || v.isCompressedArrayTexture) &&
      (re = n.TEXTURE_2D_ARRAY),
      v.isData3DTexture && (re = n.TEXTURE_3D));
    const ie = V(y, v),
      ae = v.source;
    t.bindTexture(re, y.__webglTexture, n.TEXTURE0 + O);
    const Te = i.get(ae);
    if (ae.version !== Te.__version || ie === !0) {
      t.activeTexture(n.TEXTURE0 + O);
      const pe = tt.getPrimaries(tt.workingColorSpace),
        xe = v.colorSpace === rn ? null : tt.getPrimaries(v.colorSpace),
        Ce =
          v.colorSpace === rn || pe === xe ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ce));
      const Be = h(v) && p(v.image) === !1;
      let ne = g(v.image, Be, !1, r.maxTextureSize);
      ne = Oe(v, ne);
      const et = p(ne) || a,
        Xe = s.convert(v.format, v.colorSpace);
      let De = s.convert(v.type),
        Ae = T(v.internalFormat, Xe, De, v.colorSpace, v.isVideoTexture);
      G(re, v, et);
      let Me;
      const Ne = v.mipmaps,
        Je = a && v.isVideoTexture !== !0 && Ae !== gl,
        _t = Te.__version === void 0 || ie === !0,
        Ge = P(v, ne, et);
      if (v.isDepthTexture)
        ((Ae = n.DEPTH_COMPONENT),
          a ?
            v.type === Nn ? (Ae = n.DEPTH_COMPONENT32F)
            : v.type === In ? (Ae = n.DEPTH_COMPONENT24)
            : v.type === Qn ? (Ae = n.DEPTH24_STENCIL8)
            : (Ae = n.DEPTH_COMPONENT16)
          : v.type === Nn &&
            console.error(
              "WebGLRenderer: Floating point depth texture requires WebGL2.",
            ),
          v.format === ei &&
            Ae === n.DEPTH_COMPONENT &&
            v.type !== js &&
            v.type !== In &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.",
            ),
            (v.type = In),
            (De = s.convert(v.type))),
          v.format === Ii &&
            Ae === n.DEPTH_COMPONENT &&
            ((Ae = n.DEPTH_STENCIL),
            v.type !== Qn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.",
              ),
              (v.type = Qn),
              (De = s.convert(v.type)))),
          _t &&
            (Je ?
              t.texStorage2D(n.TEXTURE_2D, 1, Ae, ne.width, ne.height)
            : t.texImage2D(
                n.TEXTURE_2D,
                0,
                Ae,
                ne.width,
                ne.height,
                0,
                Xe,
                De,
                null,
              )));
      else if (v.isDataTexture)
        if (Ne.length > 0 && et) {
          Je &&
            _t &&
            t.texStorage2D(n.TEXTURE_2D, Ge, Ae, Ne[0].width, Ne[0].height);
          for (let ue = 0, C = Ne.length; ue < C; ue++)
            ((Me = Ne[ue]),
              Je ?
                t.texSubImage2D(
                  n.TEXTURE_2D,
                  ue,
                  0,
                  0,
                  Me.width,
                  Me.height,
                  Xe,
                  De,
                  Me.data,
                )
              : t.texImage2D(
                  n.TEXTURE_2D,
                  ue,
                  Ae,
                  Me.width,
                  Me.height,
                  0,
                  Xe,
                  De,
                  Me.data,
                ));
          v.generateMipmaps = !1;
        } else
          Je ?
            (_t && t.texStorage2D(n.TEXTURE_2D, Ge, Ae, ne.width, ne.height),
            t.texSubImage2D(
              n.TEXTURE_2D,
              0,
              0,
              0,
              ne.width,
              ne.height,
              Xe,
              De,
              ne.data,
            ))
          : t.texImage2D(
              n.TEXTURE_2D,
              0,
              Ae,
              ne.width,
              ne.height,
              0,
              Xe,
              De,
              ne.data,
            );
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Je &&
            _t &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ge,
              Ae,
              Ne[0].width,
              Ne[0].height,
              ne.depth,
            );
          for (let ue = 0, C = Ne.length; ue < C; ue++)
            ((Me = Ne[ue]),
              v.format !== un ?
                Xe !== null ?
                  Je ?
                    t.compressedTexSubImage3D(
                      n.TEXTURE_2D_ARRAY,
                      ue,
                      0,
                      0,
                      0,
                      Me.width,
                      Me.height,
                      ne.depth,
                      Xe,
                      Me.data,
                      0,
                      0,
                    )
                  : t.compressedTexImage3D(
                      n.TEXTURE_2D_ARRAY,
                      ue,
                      Ae,
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
                  ue,
                  0,
                  0,
                  0,
                  Me.width,
                  Me.height,
                  ne.depth,
                  Xe,
                  De,
                  Me.data,
                )
              : t.texImage3D(
                  n.TEXTURE_2D_ARRAY,
                  ue,
                  Ae,
                  Me.width,
                  Me.height,
                  ne.depth,
                  0,
                  Xe,
                  De,
                  Me.data,
                ));
        } else {
          Je &&
            _t &&
            t.texStorage2D(n.TEXTURE_2D, Ge, Ae, Ne[0].width, Ne[0].height);
          for (let ue = 0, C = Ne.length; ue < C; ue++)
            ((Me = Ne[ue]),
              v.format !== un ?
                Xe !== null ?
                  Je ?
                    t.compressedTexSubImage2D(
                      n.TEXTURE_2D,
                      ue,
                      0,
                      0,
                      Me.width,
                      Me.height,
                      Xe,
                      Me.data,
                    )
                  : t.compressedTexImage2D(
                      n.TEXTURE_2D,
                      ue,
                      Ae,
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
                  ue,
                  0,
                  0,
                  Me.width,
                  Me.height,
                  Xe,
                  De,
                  Me.data,
                )
              : t.texImage2D(
                  n.TEXTURE_2D,
                  ue,
                  Ae,
                  Me.width,
                  Me.height,
                  0,
                  Xe,
                  De,
                  Me.data,
                ));
        }
      else if (v.isDataArrayTexture)
        Je ?
          (_t &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ge,
              Ae,
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
            Xe,
            De,
            ne.data,
          ))
        : t.texImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            Ae,
            ne.width,
            ne.height,
            ne.depth,
            0,
            Xe,
            De,
            ne.data,
          );
      else if (v.isData3DTexture)
        Je ?
          (_t &&
            t.texStorage3D(n.TEXTURE_3D, Ge, Ae, ne.width, ne.height, ne.depth),
          t.texSubImage3D(
            n.TEXTURE_3D,
            0,
            0,
            0,
            0,
            ne.width,
            ne.height,
            ne.depth,
            Xe,
            De,
            ne.data,
          ))
        : t.texImage3D(
            n.TEXTURE_3D,
            0,
            Ae,
            ne.width,
            ne.height,
            ne.depth,
            0,
            Xe,
            De,
            ne.data,
          );
      else if (v.isFramebufferTexture) {
        if (_t)
          if (Je) t.texStorage2D(n.TEXTURE_2D, Ge, Ae, ne.width, ne.height);
          else {
            let ue = ne.width,
              C = ne.height;
            for (let fe = 0; fe < Ge; fe++)
              (t.texImage2D(n.TEXTURE_2D, fe, Ae, ue, C, 0, Xe, De, null),
                (ue >>= 1),
                (C >>= 1));
          }
      } else if (Ne.length > 0 && et) {
        Je &&
          _t &&
          t.texStorage2D(n.TEXTURE_2D, Ge, Ae, Ne[0].width, Ne[0].height);
        for (let ue = 0, C = Ne.length; ue < C; ue++)
          ((Me = Ne[ue]),
            Je ?
              t.texSubImage2D(n.TEXTURE_2D, ue, 0, 0, Xe, De, Me)
            : t.texImage2D(n.TEXTURE_2D, ue, Ae, Xe, De, Me));
        v.generateMipmaps = !1;
      } else
        Je ?
          (_t && t.texStorage2D(n.TEXTURE_2D, Ge, Ae, ne.width, ne.height),
          t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, Xe, De, ne))
        : t.texImage2D(n.TEXTURE_2D, 0, Ae, Xe, De, ne);
      (M(v, et) && x(re),
        (Te.__version = ae.version),
        v.onUpdate && v.onUpdate(v));
    }
    y.__version = v.version;
  }
  function le(y, v, O) {
    if (v.image.length !== 6) return;
    const re = V(y, v),
      ie = v.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, y.__webglTexture, n.TEXTURE0 + O);
    const ae = i.get(ie);
    if (ie.version !== ae.__version || re === !0) {
      t.activeTexture(n.TEXTURE0 + O);
      const Te = tt.getPrimaries(tt.workingColorSpace),
        pe = v.colorSpace === rn ? null : tt.getPrimaries(v.colorSpace),
        xe =
          v.colorSpace === rn || Te === pe ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe));
      const Ce = v.isCompressedTexture || v.image[0].isCompressedTexture,
        Be = v.image[0] && v.image[0].isDataTexture,
        ne = [];
      for (let ue = 0; ue < 6; ue++)
        (!Ce && !Be ?
          (ne[ue] = g(v.image[ue], !1, !0, r.maxCubemapSize))
        : (ne[ue] = Be ? v.image[ue].image : v.image[ue]),
          (ne[ue] = Oe(v, ne[ue])));
      const et = ne[0],
        Xe = p(et) || a,
        De = s.convert(v.format, v.colorSpace),
        Ae = s.convert(v.type),
        Me = T(v.internalFormat, De, Ae, v.colorSpace),
        Ne = a && v.isVideoTexture !== !0,
        Je = ae.__version === void 0 || re === !0;
      let _t = P(v, et, Xe);
      G(n.TEXTURE_CUBE_MAP, v, Xe);
      let Ge;
      if (Ce) {
        Ne &&
          Je &&
          t.texStorage2D(n.TEXTURE_CUBE_MAP, _t, Me, et.width, et.height);
        for (let ue = 0; ue < 6; ue++) {
          Ge = ne[ue].mipmaps;
          for (let C = 0; C < Ge.length; C++) {
            const fe = Ge[C];
            v.format !== un ?
              De !== null ?
                Ne ?
                  t.compressedTexSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                    C,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    De,
                    fe.data,
                  )
                : t.compressedTexImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                    C,
                    Me,
                    fe.width,
                    fe.height,
                    0,
                    fe.data,
                  )
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                )
            : Ne ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                C,
                0,
                0,
                fe.width,
                fe.height,
                De,
                Ae,
                fe.data,
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                C,
                Me,
                fe.width,
                fe.height,
                0,
                De,
                Ae,
                fe.data,
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
              Me,
              ne[0].width,
              ne[0].height,
            )));
        for (let ue = 0; ue < 6; ue++)
          if (Be) {
            Ne ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                0,
                0,
                0,
                ne[ue].width,
                ne[ue].height,
                De,
                Ae,
                ne[ue].data,
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                0,
                Me,
                ne[ue].width,
                ne[ue].height,
                0,
                De,
                Ae,
                ne[ue].data,
              );
            for (let C = 0; C < Ge.length; C++) {
              const de = Ge[C].image[ue].image;
              Ne ?
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  C + 1,
                  0,
                  0,
                  de.width,
                  de.height,
                  De,
                  Ae,
                  de.data,
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  C + 1,
                  Me,
                  de.width,
                  de.height,
                  0,
                  De,
                  Ae,
                  de.data,
                );
            }
          } else {
            Ne ?
              t.texSubImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                0,
                0,
                0,
                De,
                Ae,
                ne[ue],
              )
            : t.texImage2D(
                n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                0,
                Me,
                De,
                Ae,
                ne[ue],
              );
            for (let C = 0; C < Ge.length; C++) {
              const fe = Ge[C];
              Ne ?
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  C + 1,
                  0,
                  0,
                  De,
                  Ae,
                  fe.image[ue],
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  C + 1,
                  Me,
                  De,
                  Ae,
                  fe.image[ue],
                );
            }
          }
      }
      (M(v, Xe) && x(n.TEXTURE_CUBE_MAP),
        (ae.__version = ie.version),
        v.onUpdate && v.onUpdate(v));
    }
    y.__version = v.version;
  }
  function J(y, v, O, re, ie, ae) {
    const Te = s.convert(O.format, O.colorSpace),
      pe = s.convert(O.type),
      xe = T(O.internalFormat, Te, pe, O.colorSpace);
    if (!i.get(v).__hasExternalTextures) {
      const Be = Math.max(1, v.width >> ae),
        ne = Math.max(1, v.height >> ae);
      ie === n.TEXTURE_3D || ie === n.TEXTURE_2D_ARRAY ?
        t.texImage3D(ie, ae, xe, Be, ne, v.depth, 0, Te, pe, null)
      : t.texImage2D(ie, ae, xe, Be, ne, 0, Te, pe, null);
    }
    (t.bindFramebuffer(n.FRAMEBUFFER, y),
      Se(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          re,
          ie,
          i.get(O).__webglTexture,
          0,
          ye(v),
        )
      : (ie === n.TEXTURE_2D ||
          (ie >= n.TEXTURE_CUBE_MAP_POSITIVE_X &&
            ie <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
        n.framebufferTexture2D(
          n.FRAMEBUFFER,
          re,
          ie,
          i.get(O).__webglTexture,
          ae,
        ),
      t.bindFramebuffer(n.FRAMEBUFFER, null));
  }
  function _e(y, v, O) {
    if (
      (n.bindRenderbuffer(n.RENDERBUFFER, y), v.depthBuffer && !v.stencilBuffer)
    ) {
      let re = a === !0 ? n.DEPTH_COMPONENT24 : n.DEPTH_COMPONENT16;
      if (O || Se(v)) {
        const ie = v.depthTexture;
        ie &&
          ie.isDepthTexture &&
          (ie.type === Nn ?
            (re = n.DEPTH_COMPONENT32F)
          : ie.type === In && (re = n.DEPTH_COMPONENT24));
        const ae = ye(v);
        Se(v) ?
          l.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            ae,
            re,
            v.width,
            v.height,
          )
        : n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            ae,
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
      const re = ye(v);
      (O && Se(v) === !1 ?
        n.renderbufferStorageMultisample(
          n.RENDERBUFFER,
          re,
          n.DEPTH24_STENCIL8,
          v.width,
          v.height,
        )
      : Se(v) ?
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
      for (let ie = 0; ie < re.length; ie++) {
        const ae = re[ie],
          Te = s.convert(ae.format, ae.colorSpace),
          pe = s.convert(ae.type),
          xe = T(ae.internalFormat, Te, pe, ae.colorSpace),
          Ce = ye(v);
        O && Se(v) === !1 ?
          n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            Ce,
            xe,
            v.width,
            v.height,
          )
        : Se(v) ?
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
  function ee(y, v) {
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
      X(v.depthTexture, 0));
    const re = i.get(v.depthTexture).__webglTexture,
      ie = ye(v);
    if (v.depthTexture.format === ei)
      Se(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          n.DEPTH_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
          ie,
        )
      : n.framebufferTexture2D(
          n.FRAMEBUFFER,
          n.DEPTH_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
        );
    else if (v.depthTexture.format === Ii)
      Se(v) ?
        l.framebufferTexture2DMultisampleEXT(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.TEXTURE_2D,
          re,
          0,
          ie,
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
  function ge(y) {
    const v = i.get(y),
      O = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      ee(v.__webglFramebuffer, y);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let re = 0; re < 6; re++)
        (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[re]),
          (v.__webglDepthbuffer[re] = n.createRenderbuffer()),
          _e(v.__webglDepthbuffer[re], y, !1));
    } else
      (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer),
        (v.__webglDepthbuffer = n.createRenderbuffer()),
        _e(v.__webglDepthbuffer, y, !1));
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function qe(y, v, O) {
    const re = i.get(y);
    (v !== void 0 &&
      J(
        re.__webglFramebuffer,
        y,
        y.texture,
        n.COLOR_ATTACHMENT0,
        n.TEXTURE_2D,
        0,
      ),
      O !== void 0 && ge(y));
  }
  function L(y) {
    const v = y.texture,
      O = i.get(y),
      re = i.get(v);
    (y.addEventListener("dispose", I),
      y.isWebGLMultipleRenderTargets !== !0 &&
        (re.__webglTexture === void 0 &&
          (re.__webglTexture = n.createTexture()),
        (re.__version = v.version),
        o.memory.textures++));
    const ie = y.isWebGLCubeRenderTarget === !0,
      ae = y.isWebGLMultipleRenderTargets === !0,
      Te = p(y) || a;
    if (ie) {
      O.__webglFramebuffer = [];
      for (let pe = 0; pe < 6; pe++)
        if (a && v.mipmaps && v.mipmaps.length > 0) {
          O.__webglFramebuffer[pe] = [];
          for (let xe = 0; xe < v.mipmaps.length; xe++)
            O.__webglFramebuffer[pe][xe] = n.createFramebuffer();
        } else O.__webglFramebuffer[pe] = n.createFramebuffer();
    } else {
      if (a && v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let pe = 0; pe < v.mipmaps.length; pe++)
          O.__webglFramebuffer[pe] = n.createFramebuffer();
      } else O.__webglFramebuffer = n.createFramebuffer();
      if (ae)
        if (r.drawBuffers) {
          const pe = y.texture;
          for (let xe = 0, Ce = pe.length; xe < Ce; xe++) {
            const Be = i.get(pe[xe]);
            Be.__webglTexture === void 0 &&
              ((Be.__webglTexture = n.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.",
          );
      if (a && y.samples > 0 && Se(y) === !1) {
        const pe = ae ? v : [v];
        ((O.__webglMultisampledFramebuffer = n.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          t.bindFramebuffer(n.FRAMEBUFFER, O.__webglMultisampledFramebuffer));
        for (let xe = 0; xe < pe.length; xe++) {
          const Ce = pe[xe];
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
            Xe = ye(y);
          (n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            Xe,
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
            _e(O.__webglDepthRenderbuffer, y, !0)),
          t.bindFramebuffer(n.FRAMEBUFFER, null));
      }
    }
    if (ie) {
      (t.bindTexture(n.TEXTURE_CUBE_MAP, re.__webglTexture),
        G(n.TEXTURE_CUBE_MAP, v, Te));
      for (let pe = 0; pe < 6; pe++)
        if (a && v.mipmaps && v.mipmaps.length > 0)
          for (let xe = 0; xe < v.mipmaps.length; xe++)
            J(
              O.__webglFramebuffer[pe][xe],
              y,
              v,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_CUBE_MAP_POSITIVE_X + pe,
              xe,
            );
        else
          J(
            O.__webglFramebuffer[pe],
            y,
            v,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_CUBE_MAP_POSITIVE_X + pe,
            0,
          );
      (M(v, Te) && x(n.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (ae) {
      const pe = y.texture;
      for (let xe = 0, Ce = pe.length; xe < Ce; xe++) {
        const Be = pe[xe],
          ne = i.get(Be);
        (t.bindTexture(n.TEXTURE_2D, ne.__webglTexture),
          G(n.TEXTURE_2D, Be, Te),
          J(
            O.__webglFramebuffer,
            y,
            Be,
            n.COLOR_ATTACHMENT0 + xe,
            n.TEXTURE_2D,
            0,
          ),
          M(Be, Te) && x(n.TEXTURE_2D));
      }
      t.unbindTexture();
    } else {
      let pe = n.TEXTURE_2D;
      if (
        ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) &&
          (a ?
            (pe = y.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.",
            )),
        t.bindTexture(pe, re.__webglTexture),
        G(pe, v, Te),
        a && v.mipmaps && v.mipmaps.length > 0)
      )
        for (let xe = 0; xe < v.mipmaps.length; xe++)
          J(O.__webglFramebuffer[xe], y, v, n.COLOR_ATTACHMENT0, pe, xe);
      else J(O.__webglFramebuffer, y, v, n.COLOR_ATTACHMENT0, pe, 0);
      (M(v, Te) && x(pe), t.unbindTexture());
    }
    y.depthBuffer && ge(y);
  }
  function Ze(y) {
    const v = p(y) || a,
      O = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let re = 0, ie = O.length; re < ie; re++) {
      const ae = O[re];
      if (M(ae, v)) {
        const Te =
            y.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D,
          pe = i.get(ae).__webglTexture;
        (t.bindTexture(Te, pe), x(Te), t.unbindTexture());
      }
    }
  }
  function Ee(y) {
    if (a && y.samples > 0 && Se(y) === !1) {
      const v = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture],
        O = y.width,
        re = y.height;
      let ie = n.COLOR_BUFFER_BIT;
      const ae = [],
        Te = y.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
        pe = i.get(y),
        xe = y.isWebGLMultipleRenderTargets === !0;
      if (xe)
        for (let Ce = 0; Ce < v.length; Ce++)
          (t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.RENDERBUFFER,
              null,
            ),
            t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglFramebuffer),
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.TEXTURE_2D,
              null,
              0,
            ));
      (t.bindFramebuffer(n.READ_FRAMEBUFFER, pe.__webglMultisampledFramebuffer),
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, pe.__webglFramebuffer));
      for (let Ce = 0; Ce < v.length; Ce++) {
        (ae.push(n.COLOR_ATTACHMENT0 + Ce), y.depthBuffer && ae.push(Te));
        const Be =
          pe.__ignoreDepthValues !== void 0 ? pe.__ignoreDepthValues : !1;
        if (
          (Be === !1 &&
            (y.depthBuffer && (ie |= n.DEPTH_BUFFER_BIT),
            y.stencilBuffer && (ie |= n.STENCIL_BUFFER_BIT)),
          xe &&
            n.framebufferRenderbuffer(
              n.READ_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.RENDERBUFFER,
              pe.__webglColorRenderbuffer[Ce],
            ),
          Be === !0 &&
            (n.invalidateFramebuffer(n.READ_FRAMEBUFFER, [Te]),
            n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [Te])),
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
        (n.blitFramebuffer(0, 0, O, re, 0, 0, O, re, ie, n.NEAREST),
          c && n.invalidateFramebuffer(n.READ_FRAMEBUFFER, ae));
      }
      if (
        (t.bindFramebuffer(n.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
        xe)
      )
        for (let Ce = 0; Ce < v.length; Ce++) {
          (t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.RENDERBUFFER,
              pe.__webglColorRenderbuffer[Ce],
            ));
          const Be = i.get(v[Ce]).__webglTexture;
          (t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglFramebuffer),
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + Ce,
              n.TEXTURE_2D,
              Be,
              0,
            ));
        }
      t.bindFramebuffer(n.DRAW_FRAMEBUFFER, pe.__webglMultisampledFramebuffer);
    }
  }
  function ye(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function Se(y) {
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
      ie = y.type;
    return (
      y.isCompressedTexture === !0 ||
        y.isVideoTexture === !0 ||
        y.format === Os ||
        (O !== An &&
          O !== rn &&
          (tt.getTransfer(O) === lt ?
            a === !1 ?
              e.has("EXT_sRGB") === !0 && re === un ?
                ((y.format = Os), (y.minFilter = tn), (y.generateMipmaps = !1))
              : (v = El.sRGBToLinear(v))
            : (re !== un || ie !== Bn) &&
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
    (this.resetTextureUnits = oe),
    (this.setTexture2D = X),
    (this.setTexture2DArray = K),
    (this.setTexture3D = q),
    (this.setTextureCube = j),
    (this.rebindTextures = qe),
    (this.setupRenderTarget = L),
    (this.updateRenderTargetMipmap = Ze),
    (this.updateMultisampleRenderTarget = Ee),
    (this.setupDepthRenderbuffer = ge),
    (this.setupFrameBufferTexture = J),
    (this.useMultisampledRTT = Se));
}
function a_(n, e, t) {
  const i = t.isWebGL2;
  function r(s, o = rn) {
    let a;
    const l = tt.getTransfer(o);
    if (s === Bn) return n.UNSIGNED_BYTE;
    if (s === fl) return n.UNSIGNED_SHORT_4_4_4_4;
    if (s === dl) return n.UNSIGNED_SHORT_5_5_5_1;
    if (s === Gu) return n.BYTE;
    if (s === Hu) return n.SHORT;
    if (s === js) return n.UNSIGNED_SHORT;
    if (s === hl) return n.INT;
    if (s === In) return n.UNSIGNED_INT;
    if (s === Nn) return n.FLOAT;
    if (s === Ki)
      return i ?
          n.HALF_FLOAT
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === ku) return n.ALPHA;
    if (s === un) return n.RGBA;
    if (s === Vu) return n.LUMINANCE;
    if (s === Wu) return n.LUMINANCE_ALPHA;
    if (s === ei) return n.DEPTH_COMPONENT;
    if (s === Ii) return n.DEPTH_STENCIL;
    if (s === Os)
      return ((a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null);
    if (s === Xu) return n.RED;
    if (s === pl) return n.RED_INTEGER;
    if (s === $u) return n.RG;
    if (s === ml) return n.RG_INTEGER;
    if (s === _l) return n.RGBA_INTEGER;
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
    if (s === gl)
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
    if (s === qu || s === za || s === Ga || s === Ha)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === ts) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === za) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Ga) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Ha) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return (
      s === Qn ?
        i ? n.UNSIGNED_INT_24_8
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : n[s] !== void 0 ? n[s]
      : null
    );
  }
  return { convert: r };
}
class o_ extends nn {
  constructor(e = []) {
    (super(), (this.isArrayCamera = !0), (this.cameras = e));
  }
}
class wr extends It {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const l_ = { type: "move" };
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
        (this._targetRay.linearVelocity = new z()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new z())),
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
        (this._grip.linearVelocity = new z()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new z())),
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
          this.dispatchEvent(l_)));
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
class c_ extends Fi {
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
      T = new Ke();
    let P = null;
    const w = new nn();
    (w.layers.enable(1), (w.viewport = new Ct()));
    const A = new nn();
    (A.layers.enable(2), (A.viewport = new Ct()));
    const I = [w, A],
      S = new o_();
    (S.layers.enable(1), S.layers.enable(2));
    let b = null,
      W = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (G) {
        let V = M[G];
        return (
          V === void 0 && ((V = new As()), (M[G] = V)),
          V.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (G) {
        let V = M[G];
        return (V === void 0 && ((V = new As()), (M[G] = V)), V.getGripSpace());
      }),
      (this.getHand = function (G) {
        let V = M[G];
        return (V === void 0 && ((V = new As()), (M[G] = V)), V.getHandSpace());
      }));
    function Y(G) {
      const V = x.indexOf(G.inputSource);
      if (V === -1) return;
      const se = M[V];
      se !== void 0 &&
        (se.update(G.inputSource, G.frame, c || o),
        se.dispatchEvent({ type: G.type, data: G.inputSource }));
    }
    function oe() {
      (r.removeEventListener("select", Y),
        r.removeEventListener("selectstart", Y),
        r.removeEventListener("selectend", Y),
        r.removeEventListener("squeeze", Y),
        r.removeEventListener("squeezestart", Y),
        r.removeEventListener("squeezeend", Y),
        r.removeEventListener("end", oe),
        r.removeEventListener("inputsourceschange", D));
      for (let G = 0; G < M.length; G++) {
        const V = x[G];
        V !== null && ((x[G] = null), M[G].disconnect(V));
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
        e.setPixelRatio(P),
        e.setSize(T.width, T.height, !1),
        i.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (G) {
      ((s = G),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (G) {
        ((a = G),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (G) {
        c = G;
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
      (this.setSession = async function (G) {
        if (((r = G), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener("select", Y),
            r.addEventListener("selectstart", Y),
            r.addEventListener("selectend", Y),
            r.addEventListener("squeeze", Y),
            r.addEventListener("squeezestart", Y),
            r.addEventListener("squeezeend", Y),
            r.addEventListener("end", oe),
            r.addEventListener("inputsourceschange", D),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (P = e.getPixelRatio()),
            e.getSize(T),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const V = {
              antialias: r.renderState.layers === void 0 ? g.antialias : !0,
              alpha: !0,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            ((m = new XRWebGLLayer(r, t, V)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (h = new ii(m.framebufferWidth, m.framebufferHeight, {
                format: un,
                type: Bn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: g.stencil,
              })));
          } else {
            let V = null,
              se = null,
              le = null;
            g.depth &&
              ((le = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (V = g.stencil ? Ii : ei),
              (se = g.stencil ? Qn : In));
            const J = { colorFormat: t.RGBA8, depthFormat: le, scaleFactor: s };
            ((f = new XRWebGLBinding(r, t)),
              (d = f.createProjectionLayer(J)),
              r.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (h = new ii(d.textureWidth, d.textureHeight, {
                format: un,
                type: Bn,
                depthTexture: new Nl(
                  d.textureWidth,
                  d.textureHeight,
                  se,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  V,
                ),
                stencilBuffer: g.stencil,
                colorSpace: e.outputColorSpace,
                samples: g.antialias ? 4 : 0,
              })));
            const _e = e.properties.get(h);
            _e.__ignoreDepthValues = d.ignoreDepthValues;
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
    function D(G) {
      for (let V = 0; V < G.removed.length; V++) {
        const se = G.removed[V],
          le = x.indexOf(se);
        le >= 0 && ((x[le] = null), M[le].disconnect(se));
      }
      for (let V = 0; V < G.added.length; V++) {
        const se = G.added[V];
        let le = x.indexOf(se);
        if (le === -1) {
          for (let _e = 0; _e < M.length; _e++)
            if (_e >= x.length) {
              (x.push(se), (le = _e));
              break;
            } else if (x[_e] === null) {
              ((x[_e] = se), (le = _e));
              break;
            }
          if (le === -1) break;
        }
        const J = M[le];
        J && J.connect(se);
      }
    }
    const N = new z(),
      X = new z();
    function K(G, V, se) {
      (N.setFromMatrixPosition(V.matrixWorld),
        X.setFromMatrixPosition(se.matrixWorld));
      const le = N.distanceTo(X),
        J = V.projectionMatrix.elements,
        _e = se.projectionMatrix.elements,
        ee = J[14] / (J[10] - 1),
        ge = J[14] / (J[10] + 1),
        qe = (J[9] + 1) / J[5],
        L = (J[9] - 1) / J[5],
        Ze = (J[8] - 1) / J[0],
        Ee = (_e[8] + 1) / _e[0],
        ye = ee * Ze,
        Se = ee * Ee,
        pt = le / (-Ze + Ee),
        Oe = pt * -Ze;
      (V.matrixWorld.decompose(G.position, G.quaternion, G.scale),
        G.translateX(Oe),
        G.translateZ(pt),
        G.matrixWorld.compose(G.position, G.quaternion, G.scale),
        G.matrixWorldInverse.copy(G.matrixWorld).invert());
      const y = ee + pt,
        v = ge + pt,
        O = ye - Oe,
        re = Se + (le - Oe),
        ie = ((qe * ge) / v) * y,
        ae = ((L * ge) / v) * y;
      (G.projectionMatrix.makePerspective(O, re, ie, ae, y, v),
        G.projectionMatrixInverse.copy(G.projectionMatrix).invert());
    }
    function q(G, V) {
      (V === null ?
        G.matrixWorld.copy(G.matrix)
      : G.matrixWorld.multiplyMatrices(V.matrixWorld, G.matrix),
        G.matrixWorldInverse.copy(G.matrixWorld).invert());
    }
    this.updateCamera = function (G) {
      if (r === null) return;
      ((S.near = A.near = w.near = G.near),
        (S.far = A.far = w.far = G.far),
        (b !== S.near || W !== S.far) &&
          (r.updateRenderState({ depthNear: S.near, depthFar: S.far }),
          (b = S.near),
          (W = S.far)));
      const V = G.parent,
        se = S.cameras;
      q(S, V);
      for (let le = 0; le < se.length; le++) q(se[le], V);
      (se.length === 2 ?
        K(S, w, A)
      : S.projectionMatrix.copy(w.projectionMatrix),
        j(G, S, V));
    };
    function j(G, V, se) {
      (se === null ?
        G.matrix.copy(V.matrixWorld)
      : (G.matrix.copy(se.matrixWorld),
        G.matrix.invert(),
        G.matrix.multiply(V.matrixWorld)),
        G.matrix.decompose(G.position, G.quaternion, G.scale),
        G.updateMatrixWorld(!0),
        G.projectionMatrix.copy(V.projectionMatrix),
        G.projectionMatrixInverse.copy(V.projectionMatrixInverse),
        G.isPerspectiveCamera &&
          ((G.fov = Bs * 2 * Math.atan(1 / G.projectionMatrix.elements[5])),
          (G.zoom = 1)));
    }
    ((this.getCamera = function () {
      return S;
    }),
      (this.getFoveation = function () {
        if (!(d === null && m === null)) return l;
      }),
      (this.setFoveation = function (G) {
        ((l = G),
          d !== null && (d.fixedFoveation = G),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = G));
      }));
    let Z = null;
    function te(G, V) {
      if (((u = V.getViewerPose(c || o)), (_ = V), u !== null)) {
        const se = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(h, m.framebuffer),
          e.setRenderTarget(h));
        let le = !1;
        se.length !== S.cameras.length && ((S.cameras.length = 0), (le = !0));
        for (let J = 0; J < se.length; J++) {
          const _e = se[J];
          let ee = null;
          if (m !== null) ee = m.getViewport(_e);
          else {
            const qe = f.getViewSubImage(d, _e);
            ((ee = qe.viewport),
              J === 0 &&
                (e.setRenderTargetTextures(
                  h,
                  qe.colorTexture,
                  d.ignoreDepthValues ? void 0 : qe.depthStencilTexture,
                ),
                e.setRenderTarget(h)));
          }
          let ge = I[J];
          (ge === void 0 &&
            ((ge = new nn()),
            ge.layers.enable(J),
            (ge.viewport = new Ct()),
            (I[J] = ge)),
            ge.matrix.fromArray(_e.transform.matrix),
            ge.matrix.decompose(ge.position, ge.quaternion, ge.scale),
            ge.projectionMatrix.fromArray(_e.projectionMatrix),
            ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),
            ge.viewport.set(ee.x, ee.y, ee.width, ee.height),
            J === 0 &&
              (S.matrix.copy(ge.matrix),
              S.matrix.decompose(S.position, S.quaternion, S.scale)),
            le === !0 && S.cameras.push(ge));
        }
      }
      for (let se = 0; se < M.length; se++) {
        const le = x[se],
          J = M[se];
        le !== null && J !== void 0 && J.update(le, V, c || o);
      }
      (Z && Z(G, V),
        V.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: V }),
        (_ = null));
    }
    const Q = new Ul();
    (Q.setAnimationLoop(te),
      (this.setAnimationLoop = function (G) {
        Z = G;
      }),
      (this.dispose = function () {}));
  }
}
function u_(n, e) {
  function t(p, h) {
    (p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix));
  }
  function i(p, h) {
    (h.color.getRGB(p.fogColor.value, Ll(n)),
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
        h.side === Xt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === Xt && p.normalScale.value.negate()),
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
          h.side === Xt && p.clearcoatNormalScale.value.negate())),
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
function h_(n, e, t, i) {
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
    const x = f();
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
      P = M.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, x);
    for (let w = 0, A = T.length; w < A; w++) {
      const I = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let S = 0, b = I.length; S < b; S++) {
        const W = I[S];
        if (m(W, w, S, P) === !0) {
          const Y = W.__offset,
            oe = Array.isArray(W.value) ? W.value : [W.value];
          let D = 0;
          for (let N = 0; N < oe.length; N++) {
            const X = oe[N],
              K = g(X);
            typeof X == "number" || typeof X == "boolean" ?
              ((W.__data[0] = X),
              n.bufferSubData(n.UNIFORM_BUFFER, Y + D, W.__data))
            : X.isMatrix3 ?
              ((W.__data[0] = X.elements[0]),
              (W.__data[1] = X.elements[1]),
              (W.__data[2] = X.elements[2]),
              (W.__data[3] = 0),
              (W.__data[4] = X.elements[3]),
              (W.__data[5] = X.elements[4]),
              (W.__data[6] = X.elements[5]),
              (W.__data[7] = 0),
              (W.__data[8] = X.elements[6]),
              (W.__data[9] = X.elements[7]),
              (W.__data[10] = X.elements[8]),
              (W.__data[11] = 0))
            : (X.toArray(W.__data, D),
              (D += K.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          n.bufferSubData(n.UNIFORM_BUFFER, Y, W.__data);
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
      const I = P[A];
      if (typeof w == "number" || typeof w == "boolean") {
        if (I !== w) return ((P[A] = w), !0);
      } else if (I.equals(w) === !1) return (I.copy(w), !0);
    }
    return !1;
  }
  function _(M) {
    const x = M.uniforms;
    let T = 0;
    const P = 16;
    for (let A = 0, I = x.length; A < I; A++) {
      const S = Array.isArray(x[A]) ? x[A] : [x[A]];
      for (let b = 0, W = S.length; b < W; b++) {
        const Y = S[b],
          oe = Array.isArray(Y.value) ? Y.value : [Y.value];
        for (let D = 0, N = oe.length; D < N; D++) {
          const X = oe[D],
            K = g(X),
            q = T % P;
          (q !== 0 && P - q < K.boundary && (T += P - q),
            (Y.__data = new Float32Array(
              K.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (Y.__offset = T),
            (T += K.storage));
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
  function h() {
    for (const M in r) n.deleteBuffer(r[M]);
    ((o = []), (r = {}), (s = {}));
  }
  return { bind: l, update: c, dispose: h };
}
class Hl {
  constructor(e = {}) {
    const {
      canvas: t = sh(),
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
      P = 0,
      w = 0,
      A = null,
      I = -1,
      S = null;
    const b = new Ct(),
      W = new Ct();
    let Y = null;
    const oe = new je(0);
    let D = 0,
      N = t.width,
      X = t.height,
      K = 1,
      q = null,
      j = null;
    const Z = new Ct(0, 0, N, X),
      te = new Ct(0, 0, N, X);
    let Q = !1;
    const G = new Js();
    let V = !1,
      se = !1,
      le = null;
    const J = new yt(),
      _e = new Ke(),
      ee = new z(),
      ge = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function qe() {
      return A === null ? K : 1;
    }
    let L = i;
    function Ze(E, U) {
      for (let B = 0; B < E.length; B++) {
        const H = E[B],
          F = t.getContext(H, U);
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
        t.addEventListener("webglcontextlost", ue, !1),
        t.addEventListener("webglcontextrestored", C, !1),
        t.addEventListener("webglcontextcreationerror", fe, !1),
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
    let Ee,
      ye,
      Se,
      pt,
      Oe,
      y,
      v,
      O,
      re,
      ie,
      ae,
      Te,
      pe,
      xe,
      Ce,
      Be,
      ne,
      et,
      Xe,
      De,
      Ae,
      Me,
      Ne,
      Je;
    function _t() {
      ((Ee = new Sp(L)),
        (ye = new mp(L, Ee, e)),
        Ee.init(ye),
        (Me = new a_(L, Ee, ye)),
        (Se = new r_(L, Ee, ye)),
        (pt = new Tp(L)),
        (Oe = new Wm()),
        (y = new s_(L, Ee, Se, Oe, ye, Me, pt)),
        (v = new gp(x)),
        (O = new Mp(x)),
        (re = new Ph(L, ye)),
        (Ne = new dp(L, Ee, re, ye)),
        (ie = new Ep(L, re, pt, Ne)),
        (ae = new Rp(L, ie, re, pt)),
        (Xe = new wp(L, ye, y)),
        (Be = new _p(Oe)),
        (Te = new Vm(x, v, O, Ee, ye, Ne, Be)),
        (pe = new u_(x, Oe)),
        (xe = new $m()),
        (Ce = new Jm(Ee, ye)),
        (et = new fp(x, v, O, Se, ae, d, l)),
        (ne = new i_(x, ae, ye)),
        (Je = new h_(L, pt, ye, Se)),
        (De = new pp(L, Ee, pt, ye)),
        (Ae = new yp(L, Ee, pt, ye)),
        (pt.programs = Te.programs),
        (x.capabilities = ye),
        (x.extensions = Ee),
        (x.properties = Oe),
        (x.renderLists = xe),
        (x.shadowMap = ne),
        (x.state = Se),
        (x.info = pt));
    }
    _t();
    const Ge = new c_(x, L);
    ((this.xr = Ge),
      (this.getContext = function () {
        return L;
      }),
      (this.getContextAttributes = function () {
        return L.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const E = Ee.get("WEBGL_lose_context");
        E && E.loseContext();
      }),
      (this.forceContextRestore = function () {
        const E = Ee.get("WEBGL_lose_context");
        E && E.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return K;
      }),
      (this.setPixelRatio = function (E) {
        E !== void 0 && ((K = E), this.setSize(N, X, !1));
      }),
      (this.getSize = function (E) {
        return E.set(N, X);
      }),
      (this.setSize = function (E, U, B = !0) {
        if (Ge.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((N = E),
          (X = U),
          (t.width = Math.floor(E * K)),
          (t.height = Math.floor(U * K)),
          B === !0 && ((t.style.width = E + "px"), (t.style.height = U + "px")),
          this.setViewport(0, 0, E, U));
      }),
      (this.getDrawingBufferSize = function (E) {
        return E.set(N * K, X * K).floor();
      }),
      (this.setDrawingBufferSize = function (E, U, B) {
        ((N = E),
          (X = U),
          (K = B),
          (t.width = Math.floor(E * B)),
          (t.height = Math.floor(U * B)),
          this.setViewport(0, 0, E, U));
      }),
      (this.getCurrentViewport = function (E) {
        return E.copy(b);
      }),
      (this.getViewport = function (E) {
        return E.copy(Z);
      }),
      (this.setViewport = function (E, U, B, H) {
        (E.isVector4 ? Z.set(E.x, E.y, E.z, E.w) : Z.set(E, U, B, H),
          Se.viewport(b.copy(Z).multiplyScalar(K).floor()));
      }),
      (this.getScissor = function (E) {
        return E.copy(te);
      }),
      (this.setScissor = function (E, U, B, H) {
        (E.isVector4 ? te.set(E.x, E.y, E.z, E.w) : te.set(E, U, B, H),
          Se.scissor(W.copy(te).multiplyScalar(K).floor()));
      }),
      (this.getScissorTest = function () {
        return Q;
      }),
      (this.setScissorTest = function (E) {
        Se.setScissorTest((Q = E));
      }),
      (this.setOpaqueSort = function (E) {
        q = E;
      }),
      (this.setTransparentSort = function (E) {
        j = E;
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
      (this.clear = function (E = !0, U = !0, B = !0) {
        let H = 0;
        if (E) {
          let F = !1;
          if (A !== null) {
            const me = A.texture.format;
            F = me === _l || me === ml || me === pl;
          }
          if (F) {
            const me = A.texture.type,
              be =
                me === Bn ||
                me === In ||
                me === js ||
                me === Qn ||
                me === fl ||
                me === dl,
              Re = et.getClearColor(),
              Pe = et.getClearAlpha(),
              ze = Re.r,
              Ue = Re.g,
              Ie = Re.b;
            be ?
              ((m[0] = ze),
              (m[1] = Ue),
              (m[2] = Ie),
              (m[3] = Pe),
              L.clearBufferuiv(L.COLOR, 0, m))
            : ((_[0] = ze),
              (_[1] = Ue),
              (_[2] = Ie),
              (_[3] = Pe),
              L.clearBufferiv(L.COLOR, 0, _));
          } else H |= L.COLOR_BUFFER_BIT;
        }
        (U && (H |= L.DEPTH_BUFFER_BIT),
          B &&
            ((H |= L.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          L.clear(H));
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
        (t.removeEventListener("webglcontextlost", ue, !1),
          t.removeEventListener("webglcontextrestored", C, !1),
          t.removeEventListener("webglcontextcreationerror", fe, !1),
          xe.dispose(),
          Ce.dispose(),
          Oe.dispose(),
          v.dispose(),
          O.dispose(),
          ae.dispose(),
          Ne.dispose(),
          Je.dispose(),
          Te.dispose(),
          Ge.dispose(),
          Ge.removeEventListener("sessionstart", Nt),
          Ge.removeEventListener("sessionend", st),
          le && (le.dispose(), (le = null)),
          Ft.stop());
      }));
    function ue(E) {
      (E.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (T = !0));
    }
    function C() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (T = !1));
      const E = pt.autoReset,
        U = ne.enabled,
        B = ne.autoUpdate,
        H = ne.needsUpdate,
        F = ne.type;
      (_t(),
        (pt.autoReset = E),
        (ne.enabled = U),
        (ne.autoUpdate = B),
        (ne.needsUpdate = H),
        (ne.type = F));
    }
    function fe(E) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        E.statusMessage,
      );
    }
    function de(E) {
      const U = E.target;
      (U.removeEventListener("dispose", de), Le(U));
    }
    function Le(E) {
      (we(E), Oe.remove(E));
    }
    function we(E) {
      const U = Oe.get(E).programs;
      U !== void 0 &&
        (U.forEach(function (B) {
          Te.releaseProgram(B);
        }),
        E.isShaderMaterial && Te.releaseShaderCache(E));
    }
    this.renderBufferDirect = function (E, U, B, H, F, me) {
      U === null && (U = ge);
      const be = F.isMesh && F.matrixWorld.determinant() < 0,
        Re = Vl(E, U, B, H, F);
      Se.setMaterial(H, be);
      let Pe = B.index,
        ze = 1;
      if (H.wireframe === !0) {
        if (((Pe = ie.getWireframeAttribute(B)), Pe === void 0)) return;
        ze = 2;
      }
      const Ue = B.drawRange,
        Ie = B.attributes.position;
      let vt = Ue.start * ze,
        $t = (Ue.start + Ue.count) * ze;
      (me !== null &&
        ((vt = Math.max(vt, me.start * ze)),
        ($t = Math.min($t, (me.start + me.count) * ze))),
        Pe !== null ?
          ((vt = Math.max(vt, 0)), ($t = Math.min($t, Pe.count)))
        : Ie != null &&
          ((vt = Math.max(vt, 0)), ($t = Math.min($t, Ie.count))));
      const wt = $t - vt;
      if (wt < 0 || wt === 1 / 0) return;
      Ne.setup(F, H, Re, B, Pe);
      let _n,
        mt = De;
      if (
        (Pe !== null && ((_n = re.get(Pe)), (mt = Ae), mt.setIndex(_n)),
        F.isMesh)
      )
        H.wireframe === !0 ?
          (Se.setLineWidth(H.wireframeLinewidth * qe()), mt.setMode(L.LINES))
        : mt.setMode(L.TRIANGLES);
      else if (F.isLine) {
        let He = H.linewidth;
        (He === void 0 && (He = 1),
          Se.setLineWidth(He * qe()),
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
      else if (F.isInstancedMesh) mt.renderInstances(vt, wt, F.count);
      else if (B.isInstancedBufferGeometry) {
        const He = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
          Vr = Math.min(B.instanceCount, He);
        mt.renderInstances(vt, wt, Vr);
      } else mt.render(vt, wt);
    };
    function it(E, U, B) {
      E.transparent === !0 && E.side === dn && E.forceSinglePass === !1 ?
        ((E.side = Xt),
        (E.needsUpdate = !0),
        ir(E, U, B),
        (E.side = Gn),
        (E.needsUpdate = !0),
        ir(E, U, B),
        (E.side = dn))
      : ir(E, U, B);
    }
    ((this.compile = function (E, U, B = null) {
      (B === null && (B = E),
        (p = Ce.get(B)),
        p.init(),
        M.push(p),
        B.traverseVisible(function (F) {
          F.isLight &&
            F.layers.test(U.layers) &&
            (p.pushLight(F), F.castShadow && p.pushShadow(F));
        }),
        E !== B &&
          E.traverseVisible(function (F) {
            F.isLight &&
              F.layers.test(U.layers) &&
              (p.pushLight(F), F.castShadow && p.pushShadow(F));
          }),
        p.setupLights(x._useLegacyLights));
      const H = new Set();
      return (
        E.traverse(function (F) {
          const me = F.material;
          if (me)
            if (Array.isArray(me))
              for (let be = 0; be < me.length; be++) {
                const Re = me[be];
                (it(Re, B, F), H.add(Re));
              }
            else (it(me, B, F), H.add(me));
        }),
        M.pop(),
        (p = null),
        H
      );
    }),
      (this.compileAsync = function (E, U, B = null) {
        const H = this.compile(E, U, B);
        return new Promise((F) => {
          function me() {
            if (
              (H.forEach(function (be) {
                Oe.get(be).currentProgram.isReady() && H.delete(be);
              }),
              H.size === 0)
            ) {
              F(E);
              return;
            }
            setTimeout(me, 10);
          }
          Ee.get("KHR_parallel_shader_compile") !== null ?
            me()
          : setTimeout(me, 10);
        });
      }));
    let rt = null;
    function At(E) {
      rt && rt(E);
    }
    function Nt() {
      Ft.stop();
    }
    function st() {
      Ft.start();
    }
    const Ft = new Ul();
    (Ft.setAnimationLoop(At),
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
          (p = Ce.get(E, M.length)),
          p.init(),
          M.push(p),
          J.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          G.setFromProjectionMatrix(J),
          (se = this.localClippingEnabled),
          (V = Be.init(this.clippingPlanes, se)),
          (g = xe.get(E, h.length)),
          g.init(),
          h.push(g),
          hn(E, U, 0, x.sortObjects),
          g.finish(),
          x.sortObjects === !0 && g.sort(q, j),
          this.info.render.frame++,
          V === !0 && Be.beginShadows());
        const B = p.state.shadowsArray;
        if (
          (ne.render(B, E, U),
          V === !0 && Be.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          et.render(g, E),
          p.setupLights(x._useLegacyLights),
          U.isArrayCamera)
        ) {
          const H = U.cameras;
          for (let F = 0, me = H.length; F < me; F++) {
            const be = H[F];
            ea(g, E, be, be.viewport);
          }
        } else ea(g, E, U);
        (A !== null &&
          (y.updateMultisampleRenderTarget(A), y.updateRenderTargetMipmap(A)),
          E.isScene === !0 && E.onAfterRender(x, E, U),
          Ne.resetDefaultState(),
          (I = -1),
          (S = null),
          M.pop(),
          M.length > 0 ? (p = M[M.length - 1]) : (p = null),
          h.pop(),
          h.length > 0 ? (g = h[h.length - 1]) : (g = null));
      }));
    function hn(E, U, B, H) {
      if (E.visible === !1) return;
      if (E.layers.test(U.layers)) {
        if (E.isGroup) B = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === !0 && E.update(U);
        else if (E.isLight) (p.pushLight(E), E.castShadow && p.pushShadow(E));
        else if (E.isSprite) {
          if (!E.frustumCulled || G.intersectsSprite(E)) {
            H && ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);
            const be = ae.update(E),
              Re = E.material;
            Re.visible && g.push(E, be, Re, B, ee.z, null);
          }
        } else if (
          (E.isMesh || E.isLine || E.isPoints) &&
          (!E.frustumCulled || G.intersectsObject(E))
        ) {
          const be = ae.update(E),
            Re = E.material;
          if (
            (H &&
              (E.boundingSphere !== void 0 ?
                (E.boundingSphere === null && E.computeBoundingSphere(),
                ee.copy(E.boundingSphere.center))
              : (be.boundingSphere === null && be.computeBoundingSphere(),
                ee.copy(be.boundingSphere.center)),
              ee.applyMatrix4(E.matrixWorld).applyMatrix4(J)),
            Array.isArray(Re))
          ) {
            const Pe = be.groups;
            for (let ze = 0, Ue = Pe.length; ze < Ue; ze++) {
              const Ie = Pe[ze],
                vt = Re[Ie.materialIndex];
              vt && vt.visible && g.push(E, be, vt, B, ee.z, Ie);
            }
          } else Re.visible && g.push(E, be, Re, B, ee.z, null);
        }
      }
      const me = E.children;
      for (let be = 0, Re = me.length; be < Re; be++) hn(me[be], U, B, H);
    }
    function ea(E, U, B, H) {
      const F = E.opaque,
        me = E.transmissive,
        be = E.transparent;
      (p.setupLightsView(B),
        V === !0 && Be.setGlobalState(x.clippingPlanes, B),
        me.length > 0 && kl(F, me, U, B),
        H && Se.viewport(b.copy(H)),
        F.length > 0 && nr(F, U, B),
        me.length > 0 && nr(me, U, B),
        be.length > 0 && nr(be, U, B),
        Se.buffers.depth.setTest(!0),
        Se.buffers.depth.setMask(!0),
        Se.buffers.color.setMask(!0),
        Se.setPolygonOffset(!1));
    }
    function kl(E, U, B, H) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
      const me = ye.isWebGL2;
      (le === null &&
        (le = new ii(1, 1, {
          generateMipmaps: !0,
          type: Ee.has("EXT_color_buffer_half_float") ? Ki : Bn,
          minFilter: ji,
          samples: me ? 4 : 0,
        })),
        x.getDrawingBufferSize(_e),
        me ? le.setSize(_e.x, _e.y) : le.setSize(zs(_e.x), zs(_e.y)));
      const be = x.getRenderTarget();
      (x.setRenderTarget(le),
        x.getClearColor(oe),
        (D = x.getClearAlpha()),
        D < 1 && x.setClearColor(16777215, 0.5),
        x.clear());
      const Re = x.toneMapping;
      ((x.toneMapping = On),
        nr(E, B, H),
        y.updateMultisampleRenderTarget(le),
        y.updateRenderTargetMipmap(le));
      let Pe = !1;
      for (let ze = 0, Ue = U.length; ze < Ue; ze++) {
        const Ie = U[ze],
          vt = Ie.object,
          $t = Ie.geometry,
          wt = Ie.material,
          _n = Ie.group;
        if (wt.side === dn && vt.layers.test(H.layers)) {
          const mt = wt.side;
          ((wt.side = Xt),
            (wt.needsUpdate = !0),
            ta(vt, B, H, $t, wt, _n),
            (wt.side = mt),
            (wt.needsUpdate = !0),
            (Pe = !0));
        }
      }
      (Pe === !0 &&
        (y.updateMultisampleRenderTarget(le), y.updateRenderTargetMipmap(le)),
        x.setRenderTarget(be),
        x.setClearColor(oe, D),
        (x.toneMapping = Re));
    }
    function nr(E, U, B) {
      const H = U.isScene === !0 ? U.overrideMaterial : null;
      for (let F = 0, me = E.length; F < me; F++) {
        const be = E[F],
          Re = be.object,
          Pe = be.geometry,
          ze = H === null ? be.material : H,
          Ue = be.group;
        Re.layers.test(B.layers) && ta(Re, U, B, Pe, ze, Ue);
      }
    }
    function ta(E, U, B, H, F, me) {
      (E.onBeforeRender(x, U, B, H, F, me),
        E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, E.matrixWorld),
        E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
        F.onBeforeRender(x, U, B, H, E, me),
        F.transparent === !0 && F.side === dn && F.forceSinglePass === !1 ?
          ((F.side = Xt),
          (F.needsUpdate = !0),
          x.renderBufferDirect(B, U, H, F, E, me),
          (F.side = Gn),
          (F.needsUpdate = !0),
          x.renderBufferDirect(B, U, H, F, E, me),
          (F.side = dn))
        : x.renderBufferDirect(B, U, H, F, E, me),
        E.onAfterRender(x, U, B, H, F, me));
    }
    function ir(E, U, B) {
      U.isScene !== !0 && (U = ge);
      const H = Oe.get(E),
        F = p.state.lights,
        me = p.state.shadowsArray,
        be = F.state.version,
        Re = Te.getParameters(E, F.state, me, U, B),
        Pe = Te.getProgramCacheKey(Re);
      let ze = H.programs;
      ((H.environment = E.isMeshStandardMaterial ? U.environment : null),
        (H.fog = U.fog),
        (H.envMap = (E.isMeshStandardMaterial ? O : v).get(
          E.envMap || H.environment,
        )),
        ze === void 0 &&
          (E.addEventListener("dispose", de),
          (ze = new Map()),
          (H.programs = ze)));
      let Ue = ze.get(Pe);
      if (Ue !== void 0) {
        if (H.currentProgram === Ue && H.lightsStateVersion === be)
          return (ia(E, Re), Ue);
      } else
        ((Re.uniforms = Te.getUniforms(E)),
          E.onBuild(B, Re, x),
          E.onBeforeCompile(Re, x),
          (Ue = Te.acquireProgram(Re, Pe)),
          ze.set(Pe, Ue),
          (H.uniforms = Re.uniforms));
      const Ie = H.uniforms;
      return (
        ((!E.isShaderMaterial && !E.isRawShaderMaterial) ||
          E.clipping === !0) &&
          (Ie.clippingPlanes = Be.uniform),
        ia(E, Re),
        (H.needsLights = Xl(E)),
        (H.lightsStateVersion = be),
        H.needsLights &&
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
        (H.currentProgram = Ue),
        (H.uniformsList = null),
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
      const B = Oe.get(E);
      ((B.outputColorSpace = U.outputColorSpace),
        (B.batching = U.batching),
        (B.instancing = U.instancing),
        (B.instancingColor = U.instancingColor),
        (B.skinning = U.skinning),
        (B.morphTargets = U.morphTargets),
        (B.morphNormals = U.morphNormals),
        (B.morphColors = U.morphColors),
        (B.morphTargetsCount = U.morphTargetsCount),
        (B.numClippingPlanes = U.numClippingPlanes),
        (B.numIntersection = U.numClipIntersection),
        (B.vertexAlphas = U.vertexAlphas),
        (B.vertexTangents = U.vertexTangents),
        (B.toneMapping = U.toneMapping));
    }
    function Vl(E, U, B, H, F) {
      (U.isScene !== !0 && (U = ge), y.resetTextureUnits());
      const me = U.fog,
        be = H.isMeshStandardMaterial ? U.environment : null,
        Re =
          A === null ? x.outputColorSpace
          : A.isXRRenderTarget === !0 ? A.texture.colorSpace
          : An,
        Pe = (H.isMeshStandardMaterial ? O : v).get(H.envMap || be),
        ze =
          H.vertexColors === !0 &&
          !!B.attributes.color &&
          B.attributes.color.itemSize === 4,
        Ue = !!B.attributes.tangent && (!!H.normalMap || H.anisotropy > 0),
        Ie = !!B.morphAttributes.position,
        vt = !!B.morphAttributes.normal,
        $t = !!B.morphAttributes.color;
      let wt = On;
      H.toneMapped &&
        (A === null || A.isXRRenderTarget === !0) &&
        (wt = x.toneMapping);
      const _n =
          B.morphAttributes.position ||
          B.morphAttributes.normal ||
          B.morphAttributes.color,
        mt = _n !== void 0 ? _n.length : 0,
        He = Oe.get(H),
        Vr = p.state.lights;
      if (V === !0 && (se === !0 || E !== S)) {
        const Qt = E === S && H.id === I;
        Be.setState(H, E, Qt);
      }
      let gt = !1;
      H.version === He.__version ?
        ((He.needsLights && He.lightsStateVersion !== Vr.state.version) ||
          He.outputColorSpace !== Re ||
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
          He.envMap !== Pe ||
          (H.fog === !0 && He.fog !== me) ||
          (He.numClippingPlanes !== void 0 &&
            (He.numClippingPlanes !== Be.numPlanes ||
              He.numIntersection !== Be.numIntersection)) ||
          He.vertexAlphas !== ze ||
          He.vertexTangents !== Ue ||
          He.morphTargets !== Ie ||
          He.morphNormals !== vt ||
          He.morphColors !== $t ||
          He.toneMapping !== wt ||
          (ye.isWebGL2 === !0 && He.morphTargetsCount !== mt)) &&
        (gt = !0)
      : ((gt = !0), (He.__version = H.version));
      let Hn = He.currentProgram;
      gt === !0 && (Hn = ir(H, U, F));
      let ra = !1,
        Bi = !1,
        Wr = !1;
      const Pt = Hn.getUniforms(),
        kn = He.uniforms;
      if (
        (Se.useProgram(Hn.program) && ((ra = !0), (Bi = !0), (Wr = !0)),
        H.id !== I && ((I = H.id), (Bi = !0)),
        ra || S !== E)
      ) {
        (Pt.setValue(L, "projectionMatrix", E.projectionMatrix),
          Pt.setValue(L, "viewMatrix", E.matrixWorldInverse));
        const Qt = Pt.map.cameraPosition;
        (Qt !== void 0 &&
          Qt.setValue(L, ee.setFromMatrixPosition(E.matrixWorld)),
          ye.logarithmicDepthBuffer &&
            Pt.setValue(
              L,
              "logDepthBufFC",
              2 / (Math.log(E.far + 1) / Math.LN2),
            ),
          (H.isMeshPhongMaterial ||
            H.isMeshToonMaterial ||
            H.isMeshLambertMaterial ||
            H.isMeshBasicMaterial ||
            H.isMeshStandardMaterial ||
            H.isShaderMaterial) &&
            Pt.setValue(L, "isOrthographic", E.isOrthographicCamera === !0),
          S !== E && ((S = E), (Bi = !0), (Wr = !0)));
      }
      if (F.isSkinnedMesh) {
        (Pt.setOptional(L, F, "bindMatrix"),
          Pt.setOptional(L, F, "bindMatrixInverse"));
        const Qt = F.skeleton;
        Qt &&
          (ye.floatVertexTextures ?
            (Qt.boneTexture === null && Qt.computeBoneTexture(),
            Pt.setValue(L, "boneTexture", Qt.boneTexture, y))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.",
            ));
      }
      F.isBatchedMesh &&
        (Pt.setOptional(L, F, "batchingTexture"),
        Pt.setValue(L, "batchingTexture", F._matricesTexture, y));
      const Xr = B.morphAttributes;
      if (
        ((Xr.position !== void 0 ||
          Xr.normal !== void 0 ||
          (Xr.color !== void 0 && ye.isWebGL2 === !0)) &&
          Xe.update(F, B, Hn),
        (Bi || He.receiveShadow !== F.receiveShadow) &&
          ((He.receiveShadow = F.receiveShadow),
          Pt.setValue(L, "receiveShadow", F.receiveShadow)),
        H.isMeshGouraudMaterial &&
          H.envMap !== null &&
          ((kn.envMap.value = Pe),
          (kn.flipEnvMap.value =
            Pe.isCubeTexture && Pe.isRenderTargetTexture === !1 ? -1 : 1)),
        Bi &&
          (Pt.setValue(L, "toneMappingExposure", x.toneMappingExposure),
          He.needsLights && Wl(kn, Wr),
          me && H.fog === !0 && pe.refreshFogUniforms(kn, me),
          pe.refreshMaterialUniforms(kn, H, K, X, le),
          Cr.upload(L, na(He), kn, y)),
        H.isShaderMaterial &&
          H.uniformsNeedUpdate === !0 &&
          (Cr.upload(L, na(He), kn, y), (H.uniformsNeedUpdate = !1)),
        H.isSpriteMaterial && Pt.setValue(L, "center", F.center),
        Pt.setValue(L, "modelViewMatrix", F.modelViewMatrix),
        Pt.setValue(L, "normalMatrix", F.normalMatrix),
        Pt.setValue(L, "modelMatrix", F.matrixWorld),
        H.isShaderMaterial || H.isRawShaderMaterial)
      ) {
        const Qt = H.uniformsGroups;
        for (let $r = 0, $l = Qt.length; $r < $l; $r++)
          if (ye.isWebGL2) {
            const sa = Qt[$r];
            (Je.update(sa, Hn), Je.bind(sa, Hn));
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.",
            );
      }
      return Hn;
    }
    function Wl(E, U) {
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
    function Xl(E) {
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
      (this.setRenderTargetTextures = function (E, U, B) {
        ((Oe.get(E.texture).__webglTexture = U),
          (Oe.get(E.depthTexture).__webglTexture = B));
        const H = Oe.get(E);
        ((H.__hasExternalTextures = !0),
          H.__hasExternalTextures &&
            ((H.__autoAllocateDepthBuffer = B === void 0),
            H.__autoAllocateDepthBuffer ||
              (Ee.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
                ),
                (H.__useRenderToTexture = !1)))));
      }),
      (this.setRenderTargetFramebuffer = function (E, U) {
        const B = Oe.get(E);
        ((B.__webglFramebuffer = U),
          (B.__useDefaultFramebuffer = U === void 0));
      }),
      (this.setRenderTarget = function (E, U = 0, B = 0) {
        ((A = E), (P = U), (w = B));
        let H = !0,
          F = null,
          me = !1,
          be = !1;
        if (E) {
          const Pe = Oe.get(E);
          Pe.__useDefaultFramebuffer !== void 0 ?
            (Se.bindFramebuffer(L.FRAMEBUFFER, null), (H = !1))
          : Pe.__webglFramebuffer === void 0 ? y.setupRenderTarget(E)
          : Pe.__hasExternalTextures &&
            y.rebindTextures(
              E,
              Oe.get(E.texture).__webglTexture,
              Oe.get(E.depthTexture).__webglTexture,
            );
          const ze = E.texture;
          (ze.isData3DTexture ||
            ze.isDataArrayTexture ||
            ze.isCompressedArrayTexture) &&
            (be = !0);
          const Ue = Oe.get(E).__webglFramebuffer;
          (E.isWebGLCubeRenderTarget ?
            (Array.isArray(Ue[U]) ? (F = Ue[U][B]) : (F = Ue[U]), (me = !0))
          : ye.isWebGL2 && E.samples > 0 && y.useMultisampledRTT(E) === !1 ?
            (F = Oe.get(E).__webglMultisampledFramebuffer)
          : Array.isArray(Ue) ? (F = Ue[B])
          : (F = Ue),
            b.copy(E.viewport),
            W.copy(E.scissor),
            (Y = E.scissorTest));
        } else
          (b.copy(Z).multiplyScalar(K).floor(),
            W.copy(te).multiplyScalar(K).floor(),
            (Y = Q));
        if (
          (Se.bindFramebuffer(L.FRAMEBUFFER, F) &&
            ye.drawBuffers &&
            H &&
            Se.drawBuffers(E, F),
          Se.viewport(b),
          Se.scissor(W),
          Se.setScissorTest(Y),
          me)
        ) {
          const Pe = Oe.get(E.texture);
          L.framebufferTexture2D(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            L.TEXTURE_CUBE_MAP_POSITIVE_X + U,
            Pe.__webglTexture,
            B,
          );
        } else if (be) {
          const Pe = Oe.get(E.texture),
            ze = U || 0;
          L.framebufferTextureLayer(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            Pe.__webglTexture,
            B || 0,
            ze,
          );
        }
        I = -1;
      }),
      (this.readRenderTargetPixels = function (E, U, B, H, F, me, be) {
        if (!(E && E.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let Re = Oe.get(E).__webglFramebuffer;
        if ((E.isWebGLCubeRenderTarget && be !== void 0 && (Re = Re[be]), Re)) {
          Se.bindFramebuffer(L.FRAMEBUFFER, Re);
          try {
            const Pe = E.texture,
              ze = Pe.format,
              Ue = Pe.type;
            if (
              ze !== un &&
              Me.convert(ze) !==
                L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            const Ie =
              Ue === Ki &&
              (Ee.has("EXT_color_buffer_half_float") ||
                (ye.isWebGL2 && Ee.has("EXT_color_buffer_float")));
            if (
              Ue !== Bn &&
              Me.convert(Ue) !==
                L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Ue === Nn &&
                (ye.isWebGL2 ||
                  Ee.has("OES_texture_float") ||
                  Ee.has("WEBGL_color_buffer_float"))
              ) &&
              !Ie
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            U >= 0 &&
              U <= E.width - H &&
              B >= 0 &&
              B <= E.height - F &&
              L.readPixels(U, B, H, F, Me.convert(ze), Me.convert(Ue), me);
          } finally {
            const Pe = A !== null ? Oe.get(A).__webglFramebuffer : null;
            Se.bindFramebuffer(L.FRAMEBUFFER, Pe);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (E, U, B = 0) {
        const H = Math.pow(2, -B),
          F = Math.floor(U.image.width * H),
          me = Math.floor(U.image.height * H);
        (y.setTexture2D(U, 0),
          L.copyTexSubImage2D(L.TEXTURE_2D, B, 0, 0, E.x, E.y, F, me),
          Se.unbindTexture());
      }),
      (this.copyTextureToTexture = function (E, U, B, H = 0) {
        const F = U.image.width,
          me = U.image.height,
          be = Me.convert(B.format),
          Re = Me.convert(B.type);
        (y.setTexture2D(B, 0),
          L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, B.flipY),
          L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha),
          L.pixelStorei(L.UNPACK_ALIGNMENT, B.unpackAlignment),
          U.isDataTexture ?
            L.texSubImage2D(
              L.TEXTURE_2D,
              H,
              E.x,
              E.y,
              F,
              me,
              be,
              Re,
              U.image.data,
            )
          : U.isCompressedTexture ?
            L.compressedTexSubImage2D(
              L.TEXTURE_2D,
              H,
              E.x,
              E.y,
              U.mipmaps[0].width,
              U.mipmaps[0].height,
              be,
              U.mipmaps[0].data,
            )
          : L.texSubImage2D(L.TEXTURE_2D, H, E.x, E.y, be, Re, U.image),
          H === 0 && B.generateMipmaps && L.generateMipmap(L.TEXTURE_2D),
          Se.unbindTexture());
      }),
      (this.copyTextureToTexture3D = function (E, U, B, H, F = 0) {
        if (x.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.",
          );
          return;
        }
        const me = E.max.x - E.min.x + 1,
          be = E.max.y - E.min.y + 1,
          Re = E.max.z - E.min.z + 1,
          Pe = Me.convert(H.format),
          ze = Me.convert(H.type);
        let Ue;
        if (H.isData3DTexture) (y.setTexture3D(H, 0), (Ue = L.TEXTURE_3D));
        else if (H.isDataArrayTexture || H.isCompressedArrayTexture)
          (y.setTexture2DArray(H, 0), (Ue = L.TEXTURE_2D_ARRAY));
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.",
          );
          return;
        }
        (L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, H.flipY),
          L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, H.premultiplyAlpha),
          L.pixelStorei(L.UNPACK_ALIGNMENT, H.unpackAlignment));
        const Ie = L.getParameter(L.UNPACK_ROW_LENGTH),
          vt = L.getParameter(L.UNPACK_IMAGE_HEIGHT),
          $t = L.getParameter(L.UNPACK_SKIP_PIXELS),
          wt = L.getParameter(L.UNPACK_SKIP_ROWS),
          _n = L.getParameter(L.UNPACK_SKIP_IMAGES),
          mt = B.isCompressedTexture ? B.mipmaps[F] : B.image;
        (L.pixelStorei(L.UNPACK_ROW_LENGTH, mt.width),
          L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, mt.height),
          L.pixelStorei(L.UNPACK_SKIP_PIXELS, E.min.x),
          L.pixelStorei(L.UNPACK_SKIP_ROWS, E.min.y),
          L.pixelStorei(L.UNPACK_SKIP_IMAGES, E.min.z),
          B.isDataTexture || B.isData3DTexture ?
            L.texSubImage3D(Ue, F, U.x, U.y, U.z, me, be, Re, Pe, ze, mt.data)
          : B.isCompressedArrayTexture ?
            (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.",
            ),
            L.compressedTexSubImage3D(
              Ue,
              F,
              U.x,
              U.y,
              U.z,
              me,
              be,
              Re,
              Pe,
              mt.data,
            ))
          : L.texSubImage3D(Ue, F, U.x, U.y, U.z, me, be, Re, Pe, ze, mt),
          L.pixelStorei(L.UNPACK_ROW_LENGTH, Ie),
          L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, vt),
          L.pixelStorei(L.UNPACK_SKIP_PIXELS, $t),
          L.pixelStorei(L.UNPACK_SKIP_ROWS, wt),
          L.pixelStorei(L.UNPACK_SKIP_IMAGES, _n),
          F === 0 && H.generateMipmaps && L.generateMipmap(Ue),
          Se.unbindTexture());
      }),
      (this.initTexture = function (E) {
        (E.isCubeTexture ? y.setTextureCube(E, 0)
        : E.isData3DTexture ? y.setTexture3D(E, 0)
        : E.isDataArrayTexture || E.isCompressedArrayTexture ?
          y.setTexture2DArray(E, 0)
        : y.setTexture2D(E, 0),
          Se.unbindTexture());
      }),
      (this.resetState = function () {
        ((P = 0), (w = 0), (A = null), Se.reset(), Ne.reset());
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
      this.outputColorSpace === Lt ? ti : vl
    );
  }
  set outputEncoding(e) {
    (console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.",
    ),
      (this.outputColorSpace = e === ti ? Lt : An));
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
class f_ extends Hl {}
f_.prototype.isWebGL1Renderer = !0;
class d_ extends It {
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
class p_ extends er {
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
      (this.normalMapType = xl),
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
class m_ extends It {
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
const ws = new yt(),
  Po = new z(),
  Do = new z();
class __ {
  constructor(e) {
    ((this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ke(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new yt()),
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
class g_ extends __ {
  constructor() {
    (super(new Il(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class v_ extends m_ {
  constructor(e, t) {
    (super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(It.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new It()),
      (this.shadow = new g_()));
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
function x_(n) {
  let e, t, i, r;
  return {
    c() {
      ((e = k("div")),
        (t = k("h2")),
        (t.textContent = "3D Heatmap"),
        (i = ce()),
        (r = k("div")),
        $(r, "class", "svelte-19prjrk"),
        $(e, "class", "panel svelte-19prjrk"));
    },
    m(s, o) {
      ($e(s, e, o), R(e, t), R(e, i), R(e, r), n[1](r));
    },
    p: ve,
    i: ve,
    o: ve,
    d(s) {
      (s && We(e), n[1](null));
    },
  };
}
function M_(n, e, t) {
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
    ((o = new d_()),
      (o.background = new je(1118481)),
      (a = new nn(45, 1, 0.1, 1e3)),
      a.position.set(0, -_, _ * 0.8),
      (l = new Hl({ antialias: !0 })),
      l.setSize(500, 500),
      t(0, (i.innerHTML = ""), i),
      i.appendChild(l.domElement));
    const p = new Hr(_, g, _ - 1, g - 1),
      h = p.attributes.position;
    for (let P = 0; P < h.count; P++) {
      const w = P % _,
        A = Math.floor(P / _),
        I = r[A][w] * 0.1;
      h.setZ(P, I);
    }
    h.needsUpdate = !0;
    const M = [];
    for (let P = 0; P < g; P++)
      for (let w = 0; w < _; w++) {
        const A = r[P][w],
          I = Math.min(1, A / 255),
          S = 1 - I;
        M.push(I, 0, S);
      }
    p.setAttribute("color", new zn(M, 3));
    const x = new p_({ vertexColors: !0, side: dn, wireframe: !1 });
    ((c = new Tn(p, x)), (c.rotation.x = -Math.PI / 2), o.add(c));
    const T = new v_(16777215, 1);
    (T.position.set(0, 0, 10), o.add(T), d());
  }
  function d() {
    ((u = requestAnimationFrame(d)), (c.rotation.z += 0.002), l.render(o, a));
  }
  el(() => {
    (u && cancelAnimationFrame(u), s(), l == null || l.dispose());
  });
  function m(_) {
    mn[_ ? "unshift" : "push"](() => {
      ((i = _), t(0, i));
    });
  }
  return [i, m];
}
class S_ extends ft {
  constructor(e) {
    (super(), ht(this, e, M_, x_, ot, {}));
  }
}
function E_(n) {
  let e, t, i, r, s, o, a;
  return (
    (t = new tu({})),
    (r = new ru({})),
    (o = new S_({})),
    {
      c() {
        ((e = k("div")),
          dt(t.$$.fragment),
          (i = ce()),
          dt(r.$$.fragment),
          (s = ce()),
          dt(o.$$.fragment),
          $(e, "class", "grid svelte-1udxs04"));
      },
      m(l, c) {
        ($e(l, e, c),
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
        (l && We(e), ut(t), ut(r), ut(o));
      },
    }
  );
}
class y_ extends ft {
  constructor(e) {
    (super(), ht(this, e, null, E_, ot, {}));
  }
}
function Uo(n, e, t) {
  const i = n.slice();
  return ((i[6] = e[t]), i);
}
function Io(n, e, t) {
  const i = n.slice();
  return ((i[9] = e[t]), i);
}
function No(n, e, t) {
  const i = n.slice();
  return ((i[12] = e[t]), i);
}
function Fo(n) {
  let e, t, i;
  function r() {
    return n[4](n[12]);
  }
  return {
    c() {
      ((e = k("button")),
        (e.textContent = `${n[12].label} `),
        Mt(e, "active", n[0] === n[12].id));
    },
    m(s, o) {
      ($e(s, e, o), t || ((i = Ye(e, "click", r)), (t = !0)));
    },
    p(s, o) {
      ((n = s), o & 3 && Mt(e, "active", n[0] === n[12].id));
    },
    d(s) {
      (s && We(e), (t = !1), i());
    },
  };
}
function Oo(n) {
  let e;
  return {
    c() {
      ((e = k("li")), (e.textContent = `${n[9]}`));
    },
    m(t, i) {
      $e(t, e, i);
    },
    p: ve,
    d(t) {
      t && We(e);
    },
  };
}
function Bo(n) {
  let e, t, i, r, s;
  return {
    c() {
      ((e = k("article")),
        (t = k("h4")),
        (t.textContent = `${n[6].title}`),
        (i = ce()),
        (r = k("p")),
        (r.textContent = `${n[6].text}`),
        (s = ce()),
        $(t, "class", "svelte-y0nt3a"),
        $(r, "class", "svelte-y0nt3a"),
        $(e, "class", "svelte-y0nt3a"));
    },
    m(o, a) {
      ($e(o, e, a), R(e, t), R(e, i), R(e, r), R(e, s));
    },
    p: ve,
    d(o) {
      o && We(e);
    },
  };
}
function T_(n) {
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
    P,
    w,
    A,
    I,
    S,
    b,
    W,
    Y,
    oe,
    D,
    N,
    X,
    K,
    q,
    j,
    Z,
    te = Vt(n[1]),
    Q = [];
  for (let J = 0; J < te.length; J += 1) Q[J] = Fo(No(n, te, J));
  let G = Vt(n[2]),
    V = [];
  for (let J = 0; J < G.length; J += 1) V[J] = Oo(Io(n, G, J));
  let se = Vt(n[3]),
    le = [];
  for (let J = 0; J < se.length; J += 1) le[J] = Bo(Uo(n, se, J));
  return {
    c() {
      ((e = k("section")),
        (t = k("h2")),
        (t.textContent = "Webapp-Erklärung (Basis)"),
        (i = ce()),
        (r = k("p")),
        (r.textContent = `Diese Seite ist eine textbasierte Einführung für neue Nutzer. Sie erklärt, was die App macht,\r
    wie man startet und wie man Probleme erkennt.`),
        (s = ce()),
        (o = k("h3")),
        (o.textContent = "Zweck der App"),
        (a = ce()),
        (l = k("p")),
        (l.textContent = `roboto verbindet Vision, Motion-Control und Sensorik in einer gemeinsamen Oberfläche.\r
    Die App kann sowohl als Analyse-Tool (Vision/Replay/Export) als auch als Steuerzentrale\r
    für Hardware (z. B. Motoren, Raster-Scan, Mobile Controller) genutzt werden.`),
        (c = ce()),
        (u = k("h3")),
        (u.textContent = "Tabs im Überblick"),
        (f = ce()),
        (d = k("ul")),
        (d.innerHTML =
          "<li><b>Dashboard</b>: Motorsteuerung + Live-Sensorik + Graph.</li> <li><b>Vision</b>: Kamera, Overlays, Annotation, Recorder/Replay.</li> <li><b>Raster</b>: Raster-Scan + Heatmap (2D/3D).</li> <li><b>Guide</b>: Diese Hilfeseite.</li>"),
        (m = ce()),
        (_ = k("nav")));
      for (let J = 0; J < Q.length; J += 1) Q[J].c();
      ((g = ce()),
        (p = k("h3")),
        (p.textContent = "System Status (wichtig)"),
        (h = ce()),
        (M = k("p")),
        (M.textContent = `Im linken Bereich zeigt die App live den Zustand von Backend, Frontend und WebSocket.\r
    Zusätzlich zeigt das Activity-Log jede Aktion und die Antwort vom Backend.`),
        (x = ce()),
        (T = k("h3")),
        (T.textContent = "Quickstart (für Nutzer)"),
        (P = ce()),
        (w = k("ol")));
      for (let J = 0; J < V.length; J += 1) V[J].c();
      ((A = ce()),
        (I = k("h3")),
        (I.textContent = "Fehler lesen & verstehen"),
        (S = ce()),
        (b = k("ul")),
        (b.innerHTML =
          "<li><b>Backend OFFLINE</b>: Server läuft nicht oder Port 8022 nicht erreichbar.</li> <li><b>WS DISCONNECTED</b>: WebSocket-Verbindung gestört; Echtzeitfunktionen eingeschränkt.</li> <li><b>Letzter Backend-Fehler</b>: Letzte konkrete API-Fehlermeldung (Status/Exception).</li>"),
        (W = ce()),
        (Y = k("h3")),
        (Y.textContent = "Hardware-Strategie (praxisnah)"),
        (oe = ce()),
        (D = k("p")),
        (D.textContent =
          "Nicht jeder Nutzer hat die gleiche Hardware. Deshalb empfiehlt sich ein modularer Einstieg:"),
        (N = ce()),
        (X = k("div")));
      for (let J = 0; J < le.length; J += 1) le[J].c();
      ((K = ce()),
        (q = k("h3")),
        (q.textContent = "Empfehlung für dein Projekt"),
        (j = ce()),
        (Z = k("p")),
        (Z.textContent = `Ja, es macht absolut Sinn, Alltags-Hardware zu unterstützen. Der beste Weg ist ein\r
    "Capability-Ansatz": Funktionen dynamisch aktivieren, je nachdem welche Hardware erkannt\r
    wurde. So können Einsteiger mit PC+Handy starten und Fortgeschrittene Duet3D/Arduino nutzen,\r
    ohne dass die App überfordert.`),
        $(t, "class", "svelte-y0nt3a"),
        $(r, "class", "svelte-y0nt3a"),
        $(o, "class", "svelte-y0nt3a"),
        $(l, "class", "svelte-y0nt3a"),
        $(u, "class", "svelte-y0nt3a"),
        $(d, "class", "svelte-y0nt3a"),
        $(p, "class", "svelte-y0nt3a"),
        $(M, "class", "svelte-y0nt3a"),
        $(T, "class", "svelte-y0nt3a"),
        $(w, "class", "svelte-y0nt3a"),
        $(I, "class", "svelte-y0nt3a"),
        $(b, "class", "svelte-y0nt3a"),
        $(Y, "class", "svelte-y0nt3a"),
        $(D, "class", "svelte-y0nt3a"),
        $(X, "class", "cards svelte-y0nt3a"),
        $(q, "class", "svelte-y0nt3a"),
        $(Z, "class", "svelte-y0nt3a"),
        $(e, "class", "guide svelte-y0nt3a"));
    },
    m(J, _e) {
      ($e(J, e, _e),
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
        R(e, _));
      for (let ee = 0; ee < Q.length; ee += 1) Q[ee] && Q[ee].m(_, null);
      (R(e, g), R(e, p), R(e, h), R(e, M), R(e, x), R(e, T), R(e, P), R(e, w));
      for (let ee = 0; ee < V.length; ee += 1) V[ee] && V[ee].m(w, null);
      (R(e, A),
        R(e, I),
        R(e, S),
        R(e, b),
        R(e, W),
        R(e, Y),
        R(e, oe),
        R(e, D),
        R(e, N),
        R(e, X));
      for (let ee = 0; ee < le.length; ee += 1) le[ee] && le[ee].m(X, null);
      (R(e, K), R(e, q), R(e, j), R(e, Z));
    },
    p(J, [_e]) {
      if (_e & 3) {
        te = Vt(J[1]);
        let ee;
        for (ee = 0; ee < te.length; ee += 1) {
          const ge = No(J, te, ee);
          Q[ee] ?
            Q[ee].p(ge, _e)
          : ((Q[ee] = Fo(ge)), Q[ee].c(), Q[ee].m(_, null));
        }
        for (; ee < Q.length; ee += 1) Q[ee].d(1);
        Q.length = te.length;
      }
      if (_e & 4) {
        G = Vt(J[2]);
        let ee;
        for (ee = 0; ee < G.length; ee += 1) {
          const ge = Io(J, G, ee);
          V[ee] ?
            V[ee].p(ge, _e)
          : ((V[ee] = Oo(ge)), V[ee].c(), V[ee].m(w, null));
        }
        for (; ee < V.length; ee += 1) V[ee].d(1);
        V.length = G.length;
      }
      if (_e & 8) {
        se = Vt(J[3]);
        let ee;
        for (ee = 0; ee < se.length; ee += 1) {
          const ge = Uo(J, se, ee);
          le[ee] ?
            le[ee].p(ge, _e)
          : ((le[ee] = Bo(ge)), le[ee].c(), le[ee].m(X, null));
        }
        for (; ee < le.length; ee += 1) le[ee].d(1);
        le.length = se.length;
      }
    },
    i: ve,
    o: ve,
    d(J) {
      (J && We(e), Jn(Q, J), Jn(V, J), Jn(le, J));
    },
  };
}
function b_(n, e, t) {
  let i = "guide";
  return [
    i,
    [
      { id: "dashboard", label: "Dashboard" },
      { id: "vision", label: "Vision" },
      { id: "raster", label: "Raster" },
      { id: "guide", label: "Guide" },
    ],
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
    (l) => t(0, (i = l.id)),
  ];
}
class A_ extends ft {
  constructor(e) {
    (super(), ht(this, e, b_, T_, ot, {}));
  }
}
function w_(n) {
  let e, t, i, r, s, o, a, l, c;
  return {
    c() {
      ((e = k("div")),
        (t = k("h3")),
        (t.textContent = "Vision Model"),
        (i = ce()),
        (r = k("select")),
        (s = k("option")),
        (s.textContent = "YOLO (Boxes)"),
        (o = k("option")),
        (o.textContent = "Segmenter (Masken)"),
        (a = k("option")),
        (a.textContent = "Pose (Keypoints)"),
        (s.__value = "yolo"),
        Qe(s, s.__value),
        (o.__value = "segmenter"),
        Qe(o, o.__value),
        (a.__value = "pose"),
        Qe(a, a.__value),
        $(r, "class", "svelte-r2nhty"),
        n[0] === void 0 && ni(() => n[2].call(r)),
        $(e, "class", "panel svelte-r2nhty"));
    },
    m(u, f) {
      ($e(u, e, f),
        R(e, t),
        R(e, i),
        R(e, r),
        R(r, s),
        R(r, o),
        R(r, a),
        Un(r, n[0], !0),
        l || ((c = [Ye(r, "change", n[2]), Ye(r, "change", n[1])]), (l = !0)));
    },
    p(u, [f]) {
      f & 1 && Un(r, u[0]);
    },
    i: ve,
    o: ve,
    d(u) {
      (u && We(e), (l = !1), Ht(c));
    },
  };
}
function R_(n, e, t) {
  let i = "yolo";
  async function r() {
    await Zt("set_model", "/api/vision/model", {
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
class C_ extends ft {
  constructor(e) {
    (super(), ht(this, e, R_, w_, ot, {}));
  }
}
function L_(n) {
  let e, t, i, r, s, o, a, l, c, u, f, d, m, _, g, p, h, M;
  return {
    c() {
      ((e = k("div")),
        (t = k("h3")),
        (t.textContent = "Vision Backend"),
        (i = ce()),
        (r = k("select")),
        (s = k("option")),
        (s.textContent = "ONNX Runtime"),
        (o = k("option")),
        (o.textContent = "TensorRT"),
        (a = k("option")),
        (a.textContent = "OpenVINO"),
        (l = k("option")),
        (l.textContent = "SNPE (Remote)"),
        (c = ce()),
        (u = k("h3")),
        (u.textContent = "Vision Profil"),
        (f = ce()),
        (d = k("select")),
        (m = k("option")),
        (m.textContent = "NVIDIA Jetson"),
        (_ = k("option")),
        (_.textContent = "Intel CPU/iGPU"),
        (g = k("option")),
        (g.textContent = "Desktop/Laptop"),
        (p = k("option")),
        (p.textContent = "Mobile Vision Node"),
        (s.__value = "onnx"),
        Qe(s, s.__value),
        (o.__value = "tensorrt"),
        Qe(o, o.__value),
        (a.__value = "openvino"),
        Qe(a, a.__value),
        (l.__value = "snpe"),
        Qe(l, l.__value),
        $(r, "class", "svelte-r2nhty"),
        n[0] === void 0 && ni(() => n[4].call(r)),
        (m.__value = "jetson"),
        Qe(m, m.__value),
        (_.__value = "intel"),
        Qe(_, _.__value),
        (g.__value = "desktop"),
        Qe(g, g.__value),
        (p.__value = "mobile"),
        Qe(p, p.__value),
        $(d, "class", "svelte-r2nhty"),
        n[1] === void 0 && ni(() => n[5].call(d)),
        $(e, "class", "panel svelte-r2nhty"));
    },
    m(x, T) {
      ($e(x, e, T),
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
            Ye(r, "change", n[4]),
            Ye(r, "change", n[2]),
            Ye(d, "change", n[5]),
            Ye(d, "change", n[3]),
          ]),
          (h = !0)));
    },
    p(x, [T]) {
      (T & 1 && Un(r, x[0]), T & 2 && Un(d, x[1]));
    },
    i: ve,
    o: ve,
    d(x) {
      (x && We(e), (h = !1), Ht(M));
    },
  };
}
function P_(n, e, t) {
  let i = "onnx",
    r = "desktop";
  async function s() {
    await Zt("set_backend", "/api/vision/backend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ backend: i }),
    });
  }
  async function o() {
    await Zt("set_profile", "/api/vision/profile", {
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
class D_ extends ft {
  constructor(e) {
    (super(), ht(this, e, P_, L_, ot, {}));
  }
}
function zo(n, e, t) {
  const i = n.slice();
  return ((i[5] = e[t]), i);
}
function Go(n) {
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
      ((e = k("div")),
        (t = k("button")),
        (r = Ve(i)),
        (s = ce()),
        (a = Ve(o)),
        (l = ce()),
        (c = k("span")),
        (f = Ve(u)),
        (m = ce()),
        $(t, "class", "svelte-z2n7q3"),
        Mt(t, "selected", n[5].active),
        $(c, "class", (d = "status " + n[5].status + " svelte-z2n7q3")),
        $(e, "class", "node"),
        Mt(e, "active", n[5].active));
    },
    m(h, M) {
      ($e(h, e, M),
        R(e, t),
        R(t, r),
        R(t, s),
        R(t, a),
        R(e, l),
        R(e, c),
        R(c, f),
        R(e, m),
        _ || ((g = Ye(t, "click", p)), (_ = !0)));
    },
    p(h, M) {
      ((n = h),
        M & 1 && i !== (i = n[5].name + "") && St(r, i),
        M & 1 && o !== (o = n[5].remote ? " (Remote)" : "") && St(a, o),
        M & 1 && Mt(t, "selected", n[5].active),
        M & 1 &&
          u !==
            (u =
              n[5].status === "offline" ? "🔴 offline"
              : n[5].status === "degraded" ? "🟡 degraded"
              : "🟢 healthy") &&
          St(f, u),
        M & 1 &&
          d !== (d = "status " + n[5].status + " svelte-z2n7q3") &&
          $(c, "class", d),
        M & 1 && Mt(e, "active", n[5].active));
    },
    d(h) {
      (h && We(e), (_ = !1), g());
    },
  };
}
function U_(n) {
  let e,
    t = Vt(n[0]),
    i = [];
  for (let r = 0; r < t.length; r += 1) i[r] = Go(zo(n, t, r));
  return {
    c() {
      e = k("div");
      for (let r = 0; r < i.length; r += 1) i[r].c();
      $(e, "class", "nodes svelte-z2n7q3");
    },
    m(r, s) {
      $e(r, e, s);
      for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
    },
    p(r, [s]) {
      if (s & 3) {
        t = Vt(r[0]);
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = zo(r, t, o);
          i[o] ? i[o].p(a, s) : ((i[o] = Go(a)), i[o].c(), i[o].m(e, null));
        }
        for (; o < i.length; o += 1) i[o].d(1);
        i.length = t.length;
      }
    },
    i: ve,
    o: ve,
    d(r) {
      (r && We(e), Jn(i, r));
    },
  };
}
function I_(n, e, t) {
  let i = [],
    r;
  async function s() {
    const l = await Zt("load_nodes", "/api/vision/nodes");
    t(0, (i = await l.json()));
  }
  async function o(l) {
    (await Zt("select_node", "/api/vision/nodes/select", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ node_id: l }),
    }),
      s());
  }
  return (
    si(() => (s(), (r = setInterval(s, 2e3)), () => clearInterval(r))),
    [i, o, (l) => o(l.id)]
  );
}
class N_ extends ft {
  constructor(e) {
    (super(), ht(this, e, I_, U_, ot, {}));
  }
}
function F_(n) {
  let e, t, i, r, s, o;
  return {
    c() {
      ((e = k("div")),
        (t = k("button")),
        (t.textContent = "Start Recording"),
        (i = ce()),
        (r = k("button")),
        (r.textContent = "Stop Recording"),
        $(t, "class", "svelte-16qoqwn"),
        $(r, "class", "svelte-16qoqwn"),
        $(e, "class", "recorder svelte-16qoqwn"));
    },
    m(a, l) {
      ($e(a, e, l),
        R(e, t),
        R(e, i),
        R(e, r),
        s || ((o = [Ye(t, "click", n[0]), Ye(r, "click", n[1])]), (s = !0)));
    },
    p: ve,
    i: ve,
    o: ve,
    d(a) {
      (a && We(e), (s = !1), Ht(o));
    },
  };
}
function O_(n) {
  async function e() {
    await Zt("record_start", "/api/vision/record/start", { method: "POST" });
  }
  async function t() {
    await Zt("record_stop", "/api/vision/record/stop", { method: "POST" });
  }
  return [e, t];
}
class B_ extends ft {
  constructor(e) {
    (super(), ht(this, e, O_, F_, ot, {}));
  }
}
function Ho(n, e, t) {
  const i = n.slice();
  return ((i[6] = e[t]), i);
}
function ko(n) {
  let e,
    t = n[6] + "",
    i,
    r;
  return {
    c() {
      ((e = k("option")),
        (i = Ve(t)),
        (e.__value = r = n[6]),
        Qe(e, e.__value));
    },
    m(s, o) {
      ($e(s, e, o), R(e, i));
    },
    p(s, o) {
      (o & 1 && t !== (t = s[6] + "") && St(i, t),
        o & 1 && r !== (r = s[6]) && ((e.__value = r), Qe(e, e.__value)));
    },
    d(s) {
      s && We(e);
    },
  };
}
function z_(n) {
  let e,
    t,
    i,
    r,
    s,
    o,
    a = Vt(n[0]),
    l = [];
  for (let c = 0; c < a.length; c += 1) l[c] = ko(Ho(n, a, c));
  return {
    c() {
      ((e = k("div")), (t = k("select")));
      for (let c = 0; c < l.length; c += 1) l[c].c();
      ((i = ce()),
        (r = k("button")),
        (r.textContent = "Replay starten"),
        n[1] === void 0 && ni(() => n[3].call(t)));
    },
    m(c, u) {
      ($e(c, e, u), R(e, t));
      for (let f = 0; f < l.length; f += 1) l[f] && l[f].m(t, null);
      (Un(t, n[1], !0),
        R(e, i),
        R(e, r),
        s || ((o = [Ye(t, "change", n[3]), Ye(r, "click", n[2])]), (s = !0)));
    },
    p(c, [u]) {
      if (u & 1) {
        a = Vt(c[0]);
        let f;
        for (f = 0; f < a.length; f += 1) {
          const d = Ho(c, a, f);
          l[f] ? l[f].p(d, u) : ((l[f] = ko(d)), l[f].c(), l[f].m(t, null));
        }
        for (; f < l.length; f += 1) l[f].d(1);
        l.length = a.length;
      }
      u & 3 && Un(t, c[1]);
    },
    i: ve,
    o: ve,
    d(c) {
      (c && We(e), Jn(l, c), (s = !1), Ht(o));
    },
  };
}
function G_(n, e, t) {
  let i = [],
    r = null;
  async function s() {
    const c = await Zt("list_recordings", "/api/vision/recordings");
    t(0, (i = await c.json()));
  }
  async function o() {
    (await Zt("replay_load", "/api/vision/replay/load", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session: r }),
    }),
      a());
  }
  async function a() {
    const u = await (
      await Zt("replay_frame", "/api/vision/replay/frame")
    ).json();
    u &&
      (ks.set(u.frame),
      Vs.set(u.results),
      Ws.set(u.model),
      requestAnimationFrame(a));
  }
  si(() => {
    s();
  });
  function l() {
    ((r = Lr(this)), t(1, r), t(0, i));
  }
  return [i, r, o, l];
}
class H_ extends ft {
  constructor(e) {
    (super(), ht(this, e, G_, z_, ot, {}));
  }
}
function k_(n, e) {
  return Hs(wn)
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
function V_(n, e) {
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
function W_(n, e) {
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
function X_(n) {
  let e, t, i, r, s, o;
  return {
    c() {
      ((e = k("div")),
        (t = k("input")),
        (i = ce()),
        (r = k("button")),
        (r.textContent = "Export Frame"),
        $(t, "placeholder", "Dataset Name"));
    },
    m(a, l) {
      ($e(a, e, l),
        R(e, t),
        Qe(t, n[0]),
        R(e, i),
        R(e, r),
        s || ((o = [Ye(t, "input", n[2]), Ye(r, "click", n[1])]), (s = !0)));
    },
    p(a, [l]) {
      l & 1 && t.value !== a[0] && Qe(t, a[0]);
    },
    i: ve,
    o: ve,
    d(a) {
      (a && We(e), (s = !1), Ht(o));
    },
  };
}
function $_(n, e, t) {
  let i = "my_dataset";
  async function r() {
    const a = await (
        await Zt("dataset_read_frame", "/api/vision/frame")
      ).json(),
      l = k_(a.width, a.height),
      c = W_(a.width, a.height),
      u = V_(a.width, a.height);
    await Zt("dataset_export", "/api/dataset/export", {
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
class q_ extends ft {
  constructor(e) {
    (super(), ht(this, e, $_, X_, ot, {}));
  }
}
function Vo(n, e, t) {
  const i = n.slice();
  return ((i[7] = e[t]), i);
}
function Wo(n) {
  let e, t, i;
  return {
    c() {
      ((e = k("div")),
        (t = Ve("Letzter Backend-Fehler: ")),
        (i = Ve(n[1])),
        $(e, "class", "error svelte-pv954r"));
    },
    m(r, s) {
      ($e(r, e, s), R(e, t), R(e, i));
    },
    p(r, s) {
      s & 2 && St(i, r[1]);
    },
    d(r) {
      r && We(e);
    },
  };
}
function Xo(n) {
  let e,
    t,
    i,
    r,
    s = n[2] ? "ONLINE" : "OFFLINE",
    o,
    a,
    l,
    c,
    u,
    f = n[3] ? "ONLINE" : "OFFLINE",
    d,
    m,
    _,
    g,
    p,
    h = n[4].toUpperCase() + "",
    M,
    x,
    T;
  function P(I, S) {
    return I[5].length === 0 ? j_ : Y_;
  }
  let w = P(n),
    A = w(n);
  return {
    c() {
      ((e = k("div")),
        (t = k("div")),
        (i = k("span")),
        (r = Ve("Backend: ")),
        (o = Ve(s)),
        (l = ce()),
        (c = k("span")),
        (u = Ve("Frontend: ")),
        (d = Ve(f)),
        (_ = ce()),
        (g = k("span")),
        (p = Ve("WS: ")),
        (M = Ve(h)),
        (T = ce()),
        A.c(),
        $(i, "class", (a = "badge " + bi(n[2]) + " svelte-pv954r")),
        $(c, "class", (m = "badge " + bi(n[3]) + " svelte-pv954r")),
        $(
          g,
          "class",
          (x = "badge " + bi(n[4] === "connected") + " svelte-pv954r"),
        ),
        $(t, "class", "badges svelte-pv954r"),
        $(e, "class", "log svelte-pv954r"));
    },
    m(I, S) {
      ($e(I, e, S),
        R(e, t),
        R(t, i),
        R(i, r),
        R(i, o),
        R(t, l),
        R(t, c),
        R(c, u),
        R(c, d),
        R(t, _),
        R(t, g),
        R(g, p),
        R(g, M),
        R(e, T),
        A.m(e, null));
    },
    p(I, S) {
      (S & 4 && s !== (s = I[2] ? "ONLINE" : "OFFLINE") && St(o, s),
        S & 4 &&
          a !== (a = "badge " + bi(I[2]) + " svelte-pv954r") &&
          $(i, "class", a),
        S & 8 && f !== (f = I[3] ? "ONLINE" : "OFFLINE") && St(d, f),
        S & 8 &&
          m !== (m = "badge " + bi(I[3]) + " svelte-pv954r") &&
          $(c, "class", m),
        S & 16 && h !== (h = I[4].toUpperCase() + "") && St(M, h),
        S & 16 &&
          x !== (x = "badge " + bi(I[4] === "connected") + " svelte-pv954r") &&
          $(g, "class", x),
        w === (w = P(I)) && A ?
          A.p(I, S)
        : (A.d(1), (A = w(I)), A && (A.c(), A.m(e, null))));
    },
    d(I) {
      (I && We(e), A.d());
    },
  };
}
function Y_(n) {
  let e,
    t = Vt(n[5]),
    i = [];
  for (let r = 0; r < t.length; r += 1) i[r] = qo(Vo(n, t, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1) i[r].c();
      e = Kl();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(r, s);
      $e(r, e, s);
    },
    p(r, s) {
      if (s & 32) {
        t = Vt(r[5]);
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = Vo(r, t, o);
          i[o] ?
            i[o].p(a, s)
          : ((i[o] = qo(a)), i[o].c(), i[o].m(e.parentNode, e));
        }
        for (; o < i.length; o += 1) i[o].d(1);
        i.length = t.length;
      }
    },
    d(r) {
      (r && We(e), Jn(i, r));
    },
  };
}
function j_(n) {
  let e;
  return {
    c() {
      ((e = k("div")),
        (e.textContent = "Noch keine Aktivität."),
        $(e, "class", "item muted svelte-pv954r"));
    },
    m(t, i) {
      $e(t, e, i);
    },
    p: ve,
    d(t) {
      t && We(e);
    },
  };
}
function $o(n) {
  let e,
    t,
    i = n[7].details + "",
    r;
  return {
    c() {
      ((e = k("span")), (t = Ve("— ")), (r = Ve(i)), $(e, "class", "details"));
    },
    m(s, o) {
      ($e(s, e, o), R(e, t), R(e, r));
    },
    p(s, o) {
      o & 32 && i !== (i = s[7].details + "") && St(r, i);
    },
    d(s) {
      s && We(e);
    },
  };
}
function qo(n) {
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
    M = n[7].details && $o(n);
  return {
    c() {
      ((e = k("div")),
        (t = k("span")),
        (i = Ve("[")),
        (s = Ve(r)),
        (o = Ve("]")),
        (a = ce()),
        (l = k("span")),
        (u = Ve(c)),
        (f = ce()),
        (d = k("span")),
        (_ = Ve(m)),
        (g = ce()),
        M && M.c(),
        (p = ce()),
        $(t, "class", "time svelte-pv954r"),
        $(l, "class", "src svelte-pv954r"),
        $(d, "class", "act"),
        $(e, "class", (h = "item " + n[7].status + " svelte-pv954r")));
    },
    m(x, T) {
      ($e(x, e, T),
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
      (T & 32 && r !== (r = x[7].ts + "") && St(s, r),
        T & 32 && c !== (c = x[7].source + "") && St(u, c),
        T & 32 && m !== (m = x[7].action + "") && St(_, m),
        x[7].details ?
          M ? M.p(x, T)
          : ((M = $o(x)), M.c(), M.m(e, p))
        : M && (M.d(1), (M = null)),
        T & 32 &&
          h !== (h = "item " + x[7].status + " svelte-pv954r") &&
          $(e, "class", h));
    },
    d(x) {
      (x && We(e), M && M.d());
    },
  };
}
function K_(n) {
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
    d = n[1] && Wo(n),
    m = n[0] && Xo(n);
  return {
    c() {
      ((e = k("div")),
        (t = k("div")),
        (i = k("h3")),
        (i.textContent = "System Status"),
        (r = ce()),
        (s = k("button")),
        (a = Ve(o)),
        (l = ce()),
        d && d.c(),
        (c = ce()),
        m && m.c(),
        $(i, "class", "svelte-pv954r"),
        $(s, "class", "svelte-pv954r"),
        $(t, "class", "header svelte-pv954r"),
        $(e, "class", "panel svelte-pv954r"));
    },
    m(_, g) {
      ($e(_, e, g),
        R(e, t),
        R(t, i),
        R(t, r),
        R(t, s),
        R(s, a),
        R(e, l),
        d && d.m(e, null),
        R(e, c),
        m && m.m(e, null),
        u || ((f = Ye(s, "click", n[6])), (u = !0)));
    },
    p(_, [g]) {
      (g & 1 && o !== (o = _[0] ? "−" : "+") && St(a, o),
        _[1] ?
          d ? d.p(_, g)
          : ((d = Wo(_)), d.c(), d.m(e, c))
        : d && (d.d(1), (d = null)),
        _[0] ?
          m ? m.p(_, g)
          : ((m = Xo(_)), m.c(), m.m(e, null))
        : m && (m.d(1), (m = null)));
    },
    i: ve,
    o: ve,
    d(_) {
      (_ && We(e), d && d.d(), m && m.d(), (u = !1), f());
    },
  };
}
function bi(n) {
  return n ? "ok" : "bad";
}
function Z_(n, e, t) {
  let i, r, s, o, a;
  (Gt(n, Yi, (u) => t(1, (i = u))),
    Gt(n, bn, (u) => t(2, (r = u))),
    Gt(n, Wi, (u) => t(3, (s = u))),
    Gt(n, Pr, (u) => t(4, (o = u))),
    Gt(n, rl, (u) => t(5, (a = u))));
  let l = !0;
  return [l, i, r, s, o, a, () => t(0, (l = !l))];
}
class J_ extends ft {
  constructor(e) {
    (super(), ht(this, e, Z_, K_, ot, {}));
  }
}
function Yo(n, e, t) {
  const i = n.slice();
  return ((i[8] = e[t]), i);
}
function jo(n) {
  let e, t, i;
  function r() {
    return n[5](n[8]);
  }
  return {
    c() {
      ((e = k("button")),
        (e.textContent = `${n[8].label} `),
        $(e, "class", "svelte-h517e4"),
        Mt(e, "active", n[0] === n[8].id));
    },
    m(s, o) {
      ($e(s, e, o), t || ((i = Ye(e, "click", r)), (t = !0)));
    },
    p(s, o) {
      ((n = s), o & 17 && Mt(e, "active", n[0] === n[8].id));
    },
    d(s) {
      (s && We(e), (t = !1), i());
    },
  };
}
function Q_(n) {
  let e, t;
  return (
    (e = new A_({})),
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
    (e = new y_({})),
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
  let e, t;
  return (
    (e = new Jc({})),
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
function ng(n) {
  let e, t;
  return (
    (e = new Tc({})),
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
function ig(n) {
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
    P,
    w,
    A,
    I,
    S,
    b,
    W,
    Y,
    oe,
    D,
    N,
    X,
    K,
    q,
    j,
    Z,
    te,
    Q,
    G,
    V,
    se,
    le,
    J = Vt(n[4]),
    _e = [];
  for (let L = 0; L < J.length; L += 1) _e[L] = jo(Yo(n, J, L));
  ((S = new D_({})),
    (W = new C_({})),
    (oe = new N_({})),
    (N = new B_({})),
    (K = new H_({})),
    (j = new q_({})),
    (te = new J_({})));
  const ee = [ng, tg, eg, Q_],
    ge = [];
  function qe(L, Ze) {
    return (
      L[0] === "dashboard" ? 0
      : L[0] === "vision" ? 1
      : L[0] === "raster" ? 2
      : L[0] === "guide" ? 3
      : -1
    );
  }
  return (
    ~(V = qe(n)) && (se = ge[V] = ee[V](n)),
    {
      c() {
        ((e = k("main")),
          (t = k("header")),
          (i = k("h1")),
          (i.textContent = "maazi.de | Roboto Control UI"),
          (r = ce()),
          (s = k("div")),
          (o = k("span")),
          (a = Ve("Backend: ")),
          (c = Ve(l)),
          (u = ce()),
          (f = k("span")),
          (d = Ve("Frontend: ")),
          (_ = Ve(m)),
          (g = ce()),
          (p = k("span")),
          (h = Ve("WS: ")),
          (x = Ve(M)),
          (T = ce()),
          (P = k("nav")));
        for (let L = 0; L < _e.length; L += 1) _e[L].c();
        ((w = ce()),
          (A = k("section")),
          (I = k("aside")),
          dt(S.$$.fragment),
          (b = ce()),
          dt(W.$$.fragment),
          (Y = ce()),
          dt(oe.$$.fragment),
          (D = ce()),
          dt(N.$$.fragment),
          (X = ce()),
          dt(K.$$.fragment),
          (q = ce()),
          dt(j.$$.fragment),
          (Z = ce()),
          dt(te.$$.fragment),
          (Q = ce()),
          (G = k("div")),
          se && se.c(),
          $(i, "class", "svelte-h517e4"),
          $(o, "class", "badge svelte-h517e4"),
          Mt(o, "ok", n[1]),
          Mt(o, "bad", !n[1]),
          $(f, "class", "badge svelte-h517e4"),
          Mt(f, "ok", n[2]),
          Mt(f, "bad", !n[2]),
          $(p, "class", "badge svelte-h517e4"),
          Mt(p, "ok", n[3] === "connected"),
          Mt(p, "bad", n[3] !== "connected"),
          $(s, "class", "statusbar svelte-h517e4"),
          $(P, "class", "svelte-h517e4"),
          $(t, "class", "topbar svelte-h517e4"),
          $(I, "class", "sidebar svelte-h517e4"),
          $(G, "class", "workspace svelte-h517e4"),
          $(A, "class", "content svelte-h517e4"),
          $(e, "class", "app svelte-h517e4"));
      },
      m(L, Ze) {
        ($e(L, e, Ze),
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
          R(t, P));
        for (let Ee = 0; Ee < _e.length; Ee += 1) _e[Ee] && _e[Ee].m(P, null);
        (R(e, w),
          R(e, A),
          R(A, I),
          ct(S, I, null),
          R(I, b),
          ct(W, I, null),
          R(I, Y),
          ct(oe, I, null),
          R(I, D),
          ct(N, I, null),
          R(I, X),
          ct(K, I, null),
          R(I, q),
          ct(j, I, null),
          R(I, Z),
          ct(te, I, null),
          R(A, Q),
          R(A, G),
          ~V && ge[V].m(G, null),
          (le = !0));
      },
      p(L, [Ze]) {
        if (
          ((!le || Ze & 2) &&
            l !== (l = L[1] ? "ONLINE" : "OFFLINE") &&
            St(c, l),
          (!le || Ze & 2) && Mt(o, "ok", L[1]),
          (!le || Ze & 2) && Mt(o, "bad", !L[1]),
          (!le || Ze & 4) &&
            m !== (m = L[2] ? "ONLINE" : "OFFLINE") &&
            St(_, m),
          (!le || Ze & 4) && Mt(f, "ok", L[2]),
          (!le || Ze & 4) && Mt(f, "bad", !L[2]),
          (!le || Ze & 8) && M !== (M = L[3].toUpperCase() + "") && St(x, M),
          (!le || Ze & 8) && Mt(p, "ok", L[3] === "connected"),
          (!le || Ze & 8) && Mt(p, "bad", L[3] !== "connected"),
          Ze & 17)
        ) {
          J = Vt(L[4]);
          let ye;
          for (ye = 0; ye < J.length; ye += 1) {
            const Se = Yo(L, J, ye);
            _e[ye] ?
              _e[ye].p(Se, Ze)
            : ((_e[ye] = jo(Se)), _e[ye].c(), _e[ye].m(P, null));
          }
          for (; ye < _e.length; ye += 1) _e[ye].d(1);
          _e.length = J.length;
        }
        let Ee = V;
        ((V = qe(L)),
          V !== Ee &&
            (se &&
              (nc(),
              at(ge[Ee], 1, 1, () => {
                ge[Ee] = null;
              }),
              ic()),
            ~V ?
              ((se = ge[V]),
              se || ((se = ge[V] = ee[V](L)), se.c()),
              nt(se, 1),
              se.m(G, null))
            : (se = null)));
      },
      i(L) {
        le ||
          (nt(S.$$.fragment, L),
          nt(W.$$.fragment, L),
          nt(oe.$$.fragment, L),
          nt(N.$$.fragment, L),
          nt(K.$$.fragment, L),
          nt(j.$$.fragment, L),
          nt(te.$$.fragment, L),
          nt(se),
          (le = !0));
      },
      o(L) {
        (at(S.$$.fragment, L),
          at(W.$$.fragment, L),
          at(oe.$$.fragment, L),
          at(N.$$.fragment, L),
          at(K.$$.fragment, L),
          at(j.$$.fragment, L),
          at(te.$$.fragment, L),
          at(se),
          (le = !1));
      },
      d(L) {
        (L && We(e),
          Jn(_e, L),
          ut(S),
          ut(W),
          ut(oe),
          ut(N),
          ut(K),
          ut(j),
          ut(te),
          ~V && ge[V].d());
      },
    }
  );
}
function rg(n, e, t) {
  let i, r, s;
  (Gt(n, bn, (f) => t(1, (i = f))),
    Gt(n, Wi, (f) => t(2, (r = f))),
    Gt(n, Pr, (f) => t(3, (s = f))));
  let o = "guide",
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
    si(() => {
      const f = () => {
          (Wi.set(!0), jt("frontend", "network", "success", "Browser online"));
        },
        d = () => {
          (Wi.set(!1), jt("frontend", "network", "error", "Browser offline"));
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
    el(() => {
      clearInterval(a);
    }),
    [o, i, r, s, l, (f) => t(0, (o = f.id))]
  );
}
class sg extends ft {
  constructor(e) {
    (super(), ht(this, e, rg, ig, ot, {}));
  }
}
new sg({ target: document.getElementById("app") });
