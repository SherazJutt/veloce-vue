/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const X = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ze = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, Ue = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), k = Object.assign, h = Array.isArray, Be = (e) => oe(e) === "[object Map]", Je = (e) => oe(e) === "[object Set]", y = (e) => typeof e == "function", S = (e) => typeof e == "string", ne = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", de = Object.prototype.toString, oe = (e) => de.call(e), Ke = (e) => oe(e) === "[object Object]", We = (e, t) => !Object.is(e, t);
let ue;
const B = () => ue || (ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function J(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = S(o) ? Qe(o) : J(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (S(e) || N(e))
    return e;
}
const qe = /;(?![^(]*\))/g, Ye = /:([^]+)/, Ge = /\/\*[^]*?\*\//g;
function Qe(e) {
  const t = {};
  return e.replace(Ge, "").split(qe).forEach((n) => {
    if (n) {
      const o = n.split(Ye);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function K(e) {
  let t = "";
  if (S(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const o = K(e[n]);
      o && (t += o + " ");
    }
  else if (N(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const he = (e) => !!(e && e.__v_isRef === !0), ge = (e) => S(e) ? e : e == null ? "" : h(e) || N(e) && (e.toString === de || !y(e.toString)) ? he(e) ? ge(e.value) : JSON.stringify(e, _e, 2) : String(e), _e = (e, t) => he(t) ? _e(e, t.value) : Be(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[W(o, r) + " =>"] = s, n),
    {}
  )
} : Je(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => W(n))
} : ne(t) ? W(t) : N(t) && !h(t) && !Ke(t) ? String(t) : t, W = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ne(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let f, me = 0, I, F;
function Ze(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = F, F = e;
    return;
  }
  e.next = I, I = e;
}
function et() {
  me++;
}
function tt() {
  if (--me > 0)
    return;
  if (F) {
    let t = F;
    for (F = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; I; ) {
    let t = I;
    for (I = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function nt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ot(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), be(o), rt(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function st(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ye(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ye(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === M) || (e.globalVersion = M, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !st(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = f, o = D;
  f = e, D = !0;
  try {
    nt(e);
    const s = e.fn(e._value);
    (t.version === 0 || We(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    f = n, D = o, ot(e), e.flags &= -3;
  }
}
function be(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      be(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rt(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let D = !0;
const Ee = [];
function se() {
  Ee.push(D), D = !1;
}
function re() {
  const e = Ee.pop();
  D = e === void 0 ? !0 : e;
}
let M = 0;
class it {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ct {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!f || !D || f === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== f)
      n = this.activeLink = new it(f, this), f.deps ? (n.prevDep = f.depsTail, f.depsTail.nextDep = n, f.depsTail = n) : f.deps = f.depsTail = n, Ne(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = f.depsTail, n.nextDep = void 0, f.depsTail.nextDep = n, f.depsTail = n, f.deps === n && (f.deps = o);
    }
    return process.env.NODE_ENV !== "production" && f.onTrack && f.onTrack(
      k(
        {
          effect: f
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, M++, this.notify(t);
  }
  notify(t) {
    et();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            k(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      tt();
    }
  }
}
function Ne(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ne(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ne)
);
function Se(e) {
  return Z(e) ? Se(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Z(e) {
  return !!(e && e.__v_isReadonly);
}
function q(e) {
  return !!(e && e.__v_isShallow);
}
function ee(e) {
  return e ? !!e.__v_raw : !1;
}
function w(e) {
  const t = e && e.__v_raw;
  return t ? w(t) : e;
}
function ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
class lt {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ct(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = M - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    f !== this)
      return Ze(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ye(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Xe("Write operation failed: computed value is readonly");
  }
}
function ut(e, t, n = !1) {
  let o, s;
  y(e) ? o = e : (o = e.get, s = e.set);
  const r = new lt(o, s, n);
  return process.env.NODE_ENV, r;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const O = [];
function at(e) {
  O.push(e);
}
function ft() {
  O.pop();
}
let Y = !1;
function T(e, ...t) {
  if (Y) return;
  Y = !0, se();
  const n = O.length ? O[O.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = pt();
  if (o)
    ce(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var c, l;
          return (l = (c = r.toString) == null ? void 0 : c.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Me(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...dt(s)), console.warn(...r);
  }
  re(), Y = !1;
}
function pt() {
  let e = O[O.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function dt(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ht(n));
  }), t;
}
function ht({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Me(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...gt(e.props), r] : [s + r];
}
function gt(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ve(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ve(e, t, n) {
  return S(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = ve(e, w(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = w(t), n ? t : [`${e}=`, t]);
}
const De = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function ce(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    we(s, t, n);
  }
}
function we(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const u = t.proxy, _ = process.env.NODE_ENV !== "production" ? De[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let i = 0; i < b.length; i++)
          if (b[i](e, u, _) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      se(), ce(r, null, 10, [
        e,
        u,
        _
      ]), re();
      return;
    }
  }
  _t(e, n, s, o, c);
}
function _t(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = De[t];
    if (n && at(n), T(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ft(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const d = [];
let E = -1;
const C = [];
let v = null, V = 0;
const mt = /* @__PURE__ */ Promise.resolve();
let te = null;
const yt = 100;
function bt(e) {
  let t = E + 1, n = d.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = d[o], r = $(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Et(e) {
  if (!(e.flags & 1)) {
    const t = $(e), n = d[d.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $(n) ? d.push(e) : d.splice(bt(t), 0, e), e.flags |= 1, Oe();
  }
}
function Oe() {
  te || (te = mt.then(ke));
}
function Nt(e) {
  h(e) ? C.push(...e) : v && e.id === -1 ? v.splice(V + 1, 0, e) : e.flags & 1 || (C.push(e), e.flags |= 1), Oe();
}
function St(e) {
  if (C.length) {
    const t = [...new Set(C)].sort(
      (n, o) => $(n) - $(o)
    );
    if (C.length = 0, v) {
      v.push(...t);
      return;
    }
    for (v = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), V = 0; V < v.length; V++) {
      const n = v[V];
      process.env.NODE_ENV !== "production" && Ve(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    v = null, V = 0;
  }
}
const $ = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ke(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Ve(e, n) : pe;
  try {
    for (E = 0; E < d.length; E++) {
      const n = d[E];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ce(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; E < d.length; E++) {
      const n = d[E];
      n && (n.flags &= -2);
    }
    E = -1, d.length = 0, St(e), te = null, (d.length || C.length) && ke(e);
  }
}
function Ve(e, t) {
  const n = e.get(t) || 0;
  if (n > yt) {
    const o = t.i, s = o && Le(o.type);
    return we(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const G = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (B().__VUE_HMR_RUNTIME__ = {
  createRecord: Q(vt),
  rerender: Q(Dt),
  reload: Q(wt)
});
const j = /* @__PURE__ */ new Map();
function vt(e, t) {
  return j.has(e) ? !1 : (j.set(e, {
    initialDef: z(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function z(e) {
  return je(e) ? e.__vccOpts : e;
}
function Dt(e, t) {
  const n = j.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, z(o.type).render = t), o.renderCache = [], o.job.flags & 8 || o.update();
  }));
}
function wt(e, t) {
  const n = j.get(e);
  if (!n) return;
  t = z(t), ae(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], c = z(r.type);
    let l = G.get(c);
    l || (c !== n.initialDef && ae(c, t), G.set(c, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Et(() => {
      r.job.flags & 8 || (r.parent.update(), l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(c);
  }
  Nt(() => {
    G.clear();
  });
}
function ae(e, t) {
  k(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Q(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let x, P = [];
function xe(e, t) {
  var n, o;
  x = e, x ? (x.enabled = !0, P.forEach(({ event: s, args: r }) => x.emit(s, ...r)), P = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    xe(r, t);
  }), setTimeout(() => {
    x || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, P = []);
  }, 3e3)) : P = [];
}
let A = null, Ot = null;
const kt = (e) => e.__isTeleport;
function Ce(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ce(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Vt(e, t) {
  return y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    k({ name: e.name }, t, { setup: e })
  ) : e;
}
B().requestIdleCallback;
B().cancelIdleCallback;
const xt = Symbol.for("v-ndc"), Ct = {};
process.env.NODE_ENV !== "production" && (Ct.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Tt = {}, Te = (e) => Object.getPrototypeOf(e) === Tt, Rt = (e) => e.__isSuspense, Re = Symbol.for("v-fgt"), It = Symbol.for("v-txt"), Ft = Symbol.for("v-cmt"), H = [];
let g = null;
function $t(e = !1) {
  H.push(g = e ? null : []);
}
function At() {
  H.pop(), g = H[H.length - 1] || null;
}
function Pt(e) {
  return e.dynamicChildren = g || ze, At(), g && g.push(e), e;
}
function Ht(e, t, n, o, s, r) {
  return Pt(
    Fe(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function Lt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Mt = (...e) => $e(
  ...e
), Ie = ({ key: e }) => e ?? null, L = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? S(e) || ie(e) || y(e) ? { i: A, r: e, k: t, f: !!n } : e : null);
function Fe(e, t = null, n = null, o = 0, s = null, r = e === Re ? 0 : 1, c = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ie(t),
    ref: t && L(t),
    scopeId: Ot,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: A
  };
  return l ? (le(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= S(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && T("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !c && // has current parent block
  g && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && g.push(u), u;
}
const jt = process.env.NODE_ENV !== "production" ? Mt : $e;
function $e(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === xt) && (process.env.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Ft), Lt(e)) {
    const l = U(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && le(l, n), !r && g && (l.shapeFlag & 6 ? g[g.indexOf(e)] = l : g.push(l)), l.patchFlag = -2, l;
  }
  if (je(e) && (e = e.__vccOpts), t) {
    t = zt(t);
    let { class: l, style: u } = t;
    l && !S(l) && (t.class = K(l)), N(u) && (ee(u) && !h(u) && (u = k({}, u)), t.style = J(u));
  }
  const c = S(e) ? 1 : Rt(e) ? 128 : kt(e) ? 64 : N(e) ? 4 : y(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && ee(e) && (e = w(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Fe(
    e,
    t,
    n,
    o,
    s,
    c,
    r,
    !0
  );
}
function zt(e) {
  return e ? ee(e) || Te(e) ? k({}, e) : e : null;
}
function U(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: c, children: l, transition: u } = e, _ = t ? Bt(s || {}, t) : s, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Ie(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(L(t)) : [r, L(t)] : L(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && c === -1 && h(l) ? l.map(Ae) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Re ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && U(e.ssContent),
    ssFallback: e.ssFallback && U(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && Ce(
    b,
    u.clone(b)
  ), b;
}
function Ae(e) {
  const t = U(e);
  return h(e.children) && (t.children = e.children.map(Ae)), t;
}
function Ut(e = " ", t = 0) {
  return jt(It, null, e, t);
}
function le(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), le(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !Te(t) && (t._ctx = A);
  else y(t) ? (t = { default: t, _ctx: A }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ut(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Bt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = K([t.class, o.class]));
      else if (s === "style")
        t.style = J([t.style, o.style]);
      else if (Ue(s)) {
        const r = t[s], c = o[s];
        c && r !== c && !(h(r) && r.includes(c)) && (t[s] = r ? [].concat(r, c) : c);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
let Pe = null;
const Jt = () => Pe || A;
{
  const e = B(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((c) => c(r)) : s[0](r);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => He = n
  );
}
let He = !1;
process.env.NODE_ENV;
const Kt = /(?:^|[-_])\w/g, Wt = (e) => e.replace(Kt, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Le(e, t = !0) {
  return y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Me(e, t, n = !1) {
  let o = Le(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const c in r)
        if (r[c] === t)
          return c;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Wt(o) : n ? "App" : "Anonymous";
}
function je(e) {
  return y(e) && "__vccOpts" in e;
}
const fe = (e, t) => {
  const n = ut(e, t, He);
  if (process.env.NODE_ENV !== "production") {
    const o = Jt();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function qt() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(i) {
      if (!N(i))
        return null;
      if (i.__isVue)
        return ["div", e, "VueInstance"];
      if (ie(i)) {
        se();
        const a = i.value;
        return re(), [
          "div",
          {},
          ["span", e, b(i)],
          "<",
          l(a),
          ">"
        ];
      } else {
        if (Se(i))
          return [
            "div",
            {},
            ["span", e, q(i) ? "ShallowReactive" : "Reactive"],
            "<",
            l(i),
            `>${Z(i) ? " (readonly)" : ""}`
          ];
        if (Z(i))
          return [
            "div",
            {},
            ["span", e, q(i) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(i),
            ">"
          ];
      }
      return null;
    },
    hasBody(i) {
      return i && i.__isVue;
    },
    body(i) {
      if (i && i.__isVue)
        return [
          "div",
          {},
          ...r(i.$)
        ];
    }
  };
  function r(i) {
    const a = [];
    i.type.props && i.props && a.push(c("props", w(i.props))), i.setupState !== X && a.push(c("setup", i.setupState)), i.data !== X && a.push(c("data", w(i.data)));
    const p = u(i, "computed");
    p && a.push(c("computed", p));
    const m = u(i, "inject");
    return m && a.push(c("injected", m)), a.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: i }]
    ]), a;
  }
  function c(i, a) {
    return a = k({}, a), Object.keys(a).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        i
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(a).map((p) => [
          "div",
          {},
          ["span", o, p + ": "],
          l(a[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(i, a = !0) {
    return typeof i == "number" ? ["span", t, i] : typeof i == "string" ? ["span", n, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : N(i) ? ["object", { object: a ? w(i) : i }] : ["span", n, String(i)];
  }
  function u(i, a) {
    const p = i.type;
    if (y(p))
      return;
    const m = {};
    for (const R in i.ctx)
      _(p, R, a) && (m[R] = i.ctx[R]);
    return m;
  }
  function _(i, a, p) {
    const m = i[p];
    if (h(m) && m.includes(a) || N(m) && a in m || i.extends && _(i.extends, a, p) || i.mixins && i.mixins.some((R) => _(R, a, p)))
      return !0;
  }
  function b(i) {
    return q(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yt() {
  qt();
}
process.env.NODE_ENV !== "production" && Yt();
const Gt = /* @__PURE__ */ Vt({
  __name: "Button",
  props: {
    label: {},
    primary: { type: Boolean, default: !1 },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = fe(() => ({
      "storybook-button": !0,
      "storybook-button--primary": n.primary,
      "storybook-button--secondary": !n.primary,
      [`storybook-button--${n.size || "medium"}`]: !0
    })), r = fe(() => ({
      backgroundColor: n.backgroundColor
    })), c = () => {
      o("click", 1);
    };
    return (l, u) => ($t(), Ht("button", {
      type: "button",
      class: K(s.value),
      onClick: c,
      style: J(r.value)
    }, ge(e.label), 7));
  }
});
export {
  Gt as Button
};
//# sourceMappingURL=index.js.map
