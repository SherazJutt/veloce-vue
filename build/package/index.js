import * as Xe from "vue";
import { defineComponent as O, createBlock as E, createElementBlock as U, openBlock as A, unref as c, normalizeClass as we, withCtx as S, Fragment as ut, renderList as Nt, createVNode as Q, createTextVNode as Me, toDisplayString as Ye, inject as Pt, provide as Bt, watch as K, getCurrentScope as Tt, onScopeDispose as jt, getCurrentInstance as ce, ref as R, nextTick as je, computed as z, toValue as ie, toHandlerKey as Rt, camelize as pt, toRef as Vt, onUnmounted as qt, toRefs as le, h as J, Comment as Lt, mergeProps as ee, cloneVNode as Ft, renderSlot as B, onMounted as Gt, createCommentVNode as Ee, withKeys as Dt, isRef as Se, reactive as Qe, createElementVNode as q, resolveDynamicComponent as Ut, createApp as Ht } from "vue";
const Wt = {
  key: 1,
  class: "px-3 py-6 text-center text-gray-500"
}, nn = /* @__PURE__ */ O({
  __name: "Accordion",
  props: {
    defaultOpen: { type: Boolean },
    items: {},
    allowMultiple: { type: Boolean },
    border: { type: Boolean }
  },
  setup(e) {
    const o = e;
    return (t, r) => o.items.length ? (A(), E(c(Vo), {
      key: 0,
      type: o.allowMultiple ? "multiple" : "single",
      class: we([{ border: o.border }, "w-full"]),
      collapsible: "",
      "default-value": o.defaultOpen ? o.items[0]?.value : void 0
    }, {
      default: S(() => [
        (A(!0), U(ut, null, Nt(o.items, (n) => (A(), E(c(_r), {
          key: n.value,
          value: n.value
        }, {
          default: S(() => [
            Q(c(Or), { class: "px-2 py-3" }, {
              default: S(() => [
                Me(Ye(n.title), 1)
              ]),
              _: 2
            }, 1024),
            Q(c(kr), { class: "px-2 pb-3" }, {
              default: S(() => [
                Me(Ye(n.content), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["value"]))), 128))
      ]),
      _: 1
    }, 8, ["type", "class", "default-value"])) : (A(), U("div", Wt, "No items to show"));
  }
});
function et(e) {
  return typeof e == "string" ? `'${e}'` : new Kt().serialize(e);
}
const Kt = /* @__PURE__ */ (function() {
  class e {
    #e = /* @__PURE__ */ new Map();
    compare(t, r) {
      const n = typeof t, a = typeof r;
      return n === "string" && a === "string" ? t.localeCompare(r) : n === "number" && a === "number" ? t - r : String.prototype.localeCompare.call(this.serialize(t, !0), this.serialize(r, !0));
    }
    serialize(t, r) {
      if (t === null) return "null";
      switch (typeof t) {
        case "string":
          return r ? t : `'${t}'`;
        case "bigint":
          return `${t}n`;
        case "object":
          return this.$object(t);
        case "function":
          return this.$function(t);
      }
      return String(t);
    }
    serializeObject(t) {
      const r = Object.prototype.toString.call(t);
      if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), t);
      const n = t.constructor, a = n === Object || n === void 0 ? "" : n.name;
      if (a !== "" && globalThis[a] === n) return this.serializeBuiltInType(a, t);
      if (typeof t.toJSON == "function") {
        const s = t.toJSON();
        return a + (s !== null && typeof s == "object" ? this.$object(s) : `(${this.serialize(s)})`);
      }
      return this.serializeObjectEntries(a, Object.entries(t));
    }
    serializeBuiltInType(t, r) {
      const n = this["$" + t];
      if (n) return n.call(this, r);
      if (typeof r?.entries == "function") return this.serializeObjectEntries(t, r.entries());
      throw new Error(`Cannot serialize ${t}`);
    }
    serializeObjectEntries(t, r) {
      const n = Array.from(r).sort((s, i) => this.compare(s[0], i[0]));
      let a = `${t}{`;
      for (let s = 0; s < n.length; s++) {
        const [i, l] = n[s];
        a += `${this.serialize(i, !0)}:${this.serialize(l)}`, s < n.length - 1 && (a += ",");
      }
      return a + "}";
    }
    $object(t) {
      let r = this.#e.get(t);
      return r === void 0 && (this.#e.set(t, `#${this.#e.size}`), r = this.serializeObject(t), this.#e.set(t, r)), r;
    }
    $function(t) {
      const r = Function.prototype.toString.call(t);
      return r.slice(-15) === "[native code] }" ? `${t.name || ""}()[native]` : `${t.name}(${t.length})${r.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(t) {
      let r = "[";
      for (let n = 0; n < t.length; n++) r += this.serialize(t[n]), n < t.length - 1 && (r += ",");
      return r + "]";
    }
    $Date(t) {
      try {
        return `Date(${t.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(t) {
      return `ArrayBuffer[${new Uint8Array(t).join(",")}]`;
    }
    $Set(t) {
      return `Set${this.$Array(Array.from(t).sort((r, n) => this.compare(r, n)))}`;
    }
    $Map(t) {
      return this.serializeObjectEntries("Map", t.entries());
    }
  }
  for (const o of ["Error", "RegExp", "URL"]) e.prototype["$" + o] = function(t) {
    return `${o}(${t})`;
  };
  for (const o of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + o] = function(t) {
    return `${o}[${t.join(",")}]`;
  };
  for (const o of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + o] = function(t) {
    return `${o}[${t.join("n,")}${t.length > 0 ? "n" : ""}]`;
  };
  return e;
})();
function ye(e, o) {
  return e === o || et(e) === et(o);
}
function xe(e, o) {
  const t = typeof e == "string" && !o ? `${e}Context` : o, r = Symbol(t);
  return [(s) => {
    const i = Pt(r, s);
    if (i || i === null) return i;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (Bt(r, s), s)];
}
function Jt(e) {
  return e == null;
}
function Zt(e, o) {
  return Jt(e) ? !1 : Array.isArray(e) ? e.some((t) => ye(t, o)) : ye(e, o);
}
function Re(e) {
  return e ? e.flatMap((o) => o.type === ut ? Re(o.children) : [o]) : [];
}
const Xt = ["INPUT", "TEXTAREA"];
function Yt(e, o, t, r = {}) {
  if (!o || r.enableIgnoredElement && Xt.includes(o.nodeName)) return null;
  const { arrowKeyOptions: n = "both", attributeName: a = "[data-reka-collection-item]", itemsArray: s = [], loop: i = !0, dir: l = "ltr", preventScroll: d = !0, focus: f = !1 } = r, [y, w, x, h, k, v] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], _ = x || h, N = y || w;
  if (!k && !v && (!_ && !N || n === "vertical" && N || n === "horizontal" && _)) return null;
  const C = t ? Array.from(t.querySelectorAll(a)) : s;
  if (!C.length) return null;
  d && e.preventDefault();
  let $ = null;
  return N || _ ? $ = ft(C, o, {
    goForward: _ ? h : l === "ltr" ? y : w,
    loop: i
  }) : k ? $ = C.at(0) || null : v && ($ = C.at(-1) || null), f && $?.focus(), $;
}
function ft(e, o, t, r = e.length) {
  if (--r === 0) return null;
  const n = e.indexOf(o), a = t.goForward ? n + 1 : n - 1;
  if (!t.loop && (a < 0 || a >= e.length)) return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ft(e, i, t, r) : i : null;
}
const [mt] = xe("ConfigProvider");
function Qt(e) {
  return Tt() ? (jt(e), !0) : !1;
}
const gt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const eo = (e) => typeof e < "u", to = Object.prototype.toString, oo = (e) => to.call(e) === "[object Object]";
function Ie(e) {
  return Array.isArray(e) ? e : [e];
}
function ro(e, o, t) {
  return K(
    e,
    o,
    {
      ...t,
      immediate: !0
    }
  );
}
const ht = gt ? window : void 0;
function Ve(e) {
  var o;
  const t = ie(e);
  return (o = t?.$el) != null ? o : t;
}
function no(...e) {
  const o = [], t = () => {
    o.forEach((i) => i()), o.length = 0;
  }, r = (i, l, d, f) => (i.addEventListener(l, d, f), () => i.removeEventListener(l, d, f)), n = z(() => {
    const i = Ie(ie(e[0])).filter((l) => l != null);
    return i.every((l) => typeof l != "string") ? i : void 0;
  }), a = ro(
    () => {
      var i, l;
      return [
        (l = (i = n.value) == null ? void 0 : i.map((d) => Ve(d))) != null ? l : [ht].filter((d) => d != null),
        Ie(ie(n.value ? e[1] : e[0])),
        Ie(c(n.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ie(n.value ? e[3] : e[2])
      ];
    },
    ([i, l, d, f]) => {
      if (t(), !i?.length || !l?.length || !d?.length)
        return;
      const y = oo(f) ? { ...f } : f;
      o.push(
        ...i.flatMap(
          (w) => l.flatMap(
            (x) => d.map((h) => r(w, x, h, y))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    a(), t();
  };
  return Qt(t), s;
}
function ao(e) {
  return JSON.parse(JSON.stringify(e));
}
function bt(e, o, t, r = {}) {
  var n, a, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: d,
    deep: f = !1,
    defaultValue: y,
    shouldEmit: w
  } = r, x = ce(), h = t || x?.emit || ((n = x?.$emit) == null ? void 0 : n.bind(x)) || ((s = (a = x?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(x?.proxy));
  let k = d;
  o || (o = "modelValue"), k = k || `update:${o.toString()}`;
  const v = (C) => i ? typeof i == "function" ? i(C) : ao(C) : C, _ = () => eo(e[o]) ? v(e[o]) : y, N = (C) => {
    w ? w(C) && h(k, C) : h(k, C);
  };
  if (l) {
    const C = _(), $ = R(C);
    let T = !1;
    return K(
      () => e[o],
      (V) => {
        T || (T = !0, $.value = v(V), je(() => T = !1));
      }
    ), K(
      $,
      (V) => {
        !T && (V !== e[o] || f) && N(V);
      },
      { deep: f }
    ), $;
  } else
    return z({
      get() {
        return _();
      },
      set(C) {
        N(C);
      }
    });
}
function so(e) {
  const o = mt({ dir: R("ltr") });
  return z(() => e?.value || o.dir?.value || "ltr");
}
function io(e) {
  const o = ce(), t = o?.type.emits, r = {};
  return t?.length || console.warn(`No emitted event found. Please check component: ${o?.type.__name}`), t?.forEach((n) => {
    r[Rt(pt(n))] = (...a) => e(n, ...a);
  }), r;
}
function Z() {
  const e = ce(), o = R(), t = z(() => ["#text", "#comment"].includes(o.value?.$el.nodeName) ? o.value?.$el.nextElementSibling : Ve(o)), r = Object.assign({}, e.exposed), n = {};
  for (const s in e.props) Object.defineProperty(n, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(r).length > 0) for (const s in r) Object.defineProperty(n, s, {
    enumerable: !0,
    configurable: !0,
    get: () => r[s]
  });
  Object.defineProperty(n, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = n;
  function a(s) {
    o.value = s, s && (Object.defineProperty(n, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = n);
  }
  return {
    forwardRef: a,
    currentRef: o,
    currentElement: t
  };
}
function vt(e) {
  const o = ce(), t = Object.keys(o?.type.props ?? {}).reduce((n, a) => {
    const s = (o?.type.props[a]).default;
    return s !== void 0 && (n[a] = s), n;
  }, {}), r = Vt(e);
  return z(() => {
    const n = {}, a = o?.vnode.props ?? {};
    return Object.keys(a).forEach((s) => {
      n[pt(s)] = a[s];
    }), Object.keys({
      ...t,
      ...n
    }).reduce((s, i) => (r.value[i] !== void 0 && (s[i] = r.value[i]), s), {});
  });
}
function lo(e, o) {
  const t = vt(e), r = o ? io(o) : {};
  return z(() => ({
    ...t.value,
    ...r
  }));
}
let co = 0;
function yt(e, o = "reka") {
  if ("useId" in Xe) return `${o}-${Xe.useId?.()}`;
  const t = mt({ useId: void 0 });
  return t.useId ? `${o}-${t.useId()}` : `${o}-${++co}`;
}
function uo(e, o) {
  const t = R(e);
  function r(a) {
    return o[t.value][a] ?? t.value;
  }
  return {
    state: t,
    dispatch: (a) => {
      t.value = r(a);
    }
  };
}
function po(e, o) {
  const t = R({}), r = R("none"), n = R(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = o.value?.ownerDocument.defaultView ?? ht, { state: l, dispatch: d } = uo(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), f = (v) => {
    if (gt) {
      const _ = new CustomEvent(v, {
        bubbles: !1,
        cancelable: !1
      });
      o.value?.dispatchEvent(_);
    }
  };
  K(e, async (v, _) => {
    const N = _ !== v;
    if (await je(), N) {
      const C = r.value, $ = he(o.value);
      v ? (d("MOUNT"), f("enter"), $ === "none" && f("after-enter")) : $ === "none" || $ === "undefined" || t.value?.display === "none" ? (d("UNMOUNT"), f("leave"), f("after-leave")) : _ && C !== $ ? (d("ANIMATION_OUT"), f("leave")) : (d("UNMOUNT"), f("after-leave"));
    }
  }, { immediate: !0 });
  const y = (v) => {
    const _ = he(o.value), N = _.includes(CSS.escape(v.animationName)), C = l.value === "mounted" ? "enter" : "leave";
    if (v.target === o.value && N && (f(`after-${C}`), d("ANIMATION_END"), !n.value)) {
      const $ = o.value.style.animationFillMode;
      o.value.style.animationFillMode = "forwards", s = i?.setTimeout(() => {
        o.value?.style.animationFillMode === "forwards" && (o.value.style.animationFillMode = $);
      });
    }
    v.target === o.value && _ === "none" && d("ANIMATION_END");
  }, w = (v) => {
    v.target === o.value && (r.value = he(o.value));
  }, x = K(o, (v, _) => {
    v ? (t.value = getComputedStyle(v), v.addEventListener("animationstart", w), v.addEventListener("animationcancel", y), v.addEventListener("animationend", y)) : (d("ANIMATION_END"), s !== void 0 && i?.clearTimeout(s), _?.removeEventListener("animationstart", w), _?.removeEventListener("animationcancel", y), _?.removeEventListener("animationend", y));
  }, { immediate: !0 }), h = K(l, () => {
    const v = he(o.value);
    r.value = l.value === "mounted" ? v : "none";
  });
  return qt(() => {
    x(), h();
  }), { isPresent: z(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function he(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var fo = O({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: o, expose: t }) {
    const { present: r, forceMount: n } = le(e), a = R(), { isPresent: s } = po(r, a);
    t({ present: s });
    let i = o.default({ present: s.value });
    i = Re(i || []);
    const l = ce();
    if (i && i?.length > 1) {
      const d = l?.parent?.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((f) => `  - ${f}`).join(`
`)
      ].join(`
`));
    }
    return () => n.value || r.value || s.value ? J(o.default({ present: s.value })[0], { ref: (d) => {
      const f = Ve(d);
      return typeof f?.hasAttribute > "u" || (f?.hasAttribute("data-reka-popper-content-wrapper") ? a.value = f.firstElementChild : a.value = f), f;
    } }) : null;
  }
});
const mo = O({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: o, slots: t }) {
    return () => {
      if (!t.default) return null;
      const r = Re(t.default()), n = r.findIndex((l) => l.type !== Lt);
      if (n === -1) return r;
      const a = r[n];
      delete a.props?.ref;
      const s = a.props ? ee(o, a.props) : o, i = Ft({
        ...a,
        props: {}
      }, s);
      return r.length === 1 ? i : (r[n] = i, r);
    };
  }
}), go = [
  "area",
  "img",
  "input"
], te = O({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: o, slots: t }) {
    const r = e.asChild ? "template" : e.as;
    return typeof r == "string" && go.includes(r) ? () => J(r, o) : r !== "template" ? () => J(e.as, o, { default: t.default }) : () => J(mo, o, { default: t.default });
  }
}), [wt, ho] = xe("CollapsibleRoot");
var bo = /* @__PURE__ */ O({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:open"],
  setup(e, { expose: o, emit: t }) {
    const r = e, a = bt(r, "open", t, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: s, unmountOnHide: i } = le(r);
    return ho({
      contentId: "",
      disabled: s,
      open: a,
      unmountOnHide: i,
      onOpenToggle: () => {
        s.value || (a.value = !a.value);
      }
    }), o({ open: a }), Z(), (l, d) => (A(), E(c(te), {
      as: l.as,
      "as-child": r.asChild,
      "data-state": c(a) ? "open" : "closed",
      "data-disabled": c(s) ? "" : void 0
    }, {
      default: S(() => [B(l.$slots, "default", { open: c(a) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), vo = bo, yo = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["contentFound"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = wt();
    n.contentId ||= yt(void 0, "reka-collapsible-content");
    const a = R(), { forwardRef: s, currentElement: i } = Z(), l = R(0), d = R(0), f = z(() => n.open.value), y = R(f.value), w = R();
    K(() => [f.value, a.value?.present], async () => {
      await je();
      const h = i.value;
      if (!h) return;
      w.value = w.value || {
        transitionDuration: h.style.transitionDuration,
        animationName: h.style.animationName
      }, h.style.transitionDuration = "0s", h.style.animationName = "none";
      const k = h.getBoundingClientRect();
      d.value = k.height, l.value = k.width, y.value || (h.style.transitionDuration = w.value.transitionDuration, h.style.animationName = w.value.animationName);
    }, { immediate: !0 });
    const x = z(() => y.value && n.open.value);
    return Gt(() => {
      requestAnimationFrame(() => {
        y.value = !1;
      });
    }), no(i, "beforematch", (h) => {
      requestAnimationFrame(() => {
        n.onOpenToggle(), r("contentFound");
      });
    }), (h, k) => (A(), E(c(fo), {
      ref_key: "presentRef",
      ref: a,
      present: h.forceMount || c(n).open.value,
      "force-mount": !0
    }, {
      default: S(({ present: v }) => [Q(c(te), ee(h.$attrs, {
        id: c(n).contentId,
        ref: c(s),
        "as-child": t.asChild,
        as: h.as,
        hidden: v ? void 0 : c(n).unmountOnHide.value ? "" : "until-found",
        "data-state": x.value ? void 0 : c(n).open.value ? "open" : "closed",
        "data-disabled": c(n).disabled?.value ? "" : void 0,
        style: {
          "--reka-collapsible-content-height": `${d.value}px`,
          "--reka-collapsible-content-width": `${l.value}px`
        }
      }), {
        default: S(() => [!c(n).unmountOnHide.value || v ? B(h.$slots, "default", { key: 0 }) : Ee("v-if", !0)]),
        _: 2
      }, 1040, [
        "id",
        "as-child",
        "as",
        "hidden",
        "data-state",
        "data-disabled",
        "style"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), wo = yo, xo = /* @__PURE__ */ O({
  __name: "CollapsibleTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const o = e;
    Z();
    const t = wt();
    return (r, n) => (A(), E(c(te), {
      type: r.as === "button" ? "button" : void 0,
      as: r.as,
      "as-child": o.asChild,
      "aria-controls": c(t).contentId,
      "aria-expanded": c(t).open.value,
      "data-state": c(t).open.value ? "open" : "closed",
      "data-disabled": c(t).disabled?.value ? "" : void 0,
      disabled: c(t).disabled?.value,
      onClick: c(t).onOpenToggle
    }, {
      default: S(() => [B(r.$slots, "default")]),
      _: 3
    }, 8, [
      "type",
      "as",
      "as-child",
      "aria-controls",
      "aria-expanded",
      "data-state",
      "data-disabled",
      "disabled",
      "onClick"
    ]));
  }
}), ko = xo;
function _o({ type: e, defaultValue: o, modelValue: t }) {
  const r = t || o;
  return t !== void 0 || o !== void 0 ? Array.isArray(r) ? "multiple" : "single" : e ?? "single";
}
function Co({ type: e, defaultValue: o, modelValue: t }) {
  return e || _o({
    type: e,
    defaultValue: o,
    modelValue: t
  });
}
function Ao({ type: e, defaultValue: o }) {
  return o !== void 0 ? o : e === "single" ? void 0 : [];
}
function $o(e, o) {
  const t = z(() => Co(e)), r = bt(e, "modelValue", o, {
    defaultValue: Ao(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  function n(s) {
    if (t.value === "single") r.value = ye(s, r.value) ? void 0 : s;
    else {
      const i = Array.isArray(r.value) ? [...r.value || []] : [r.value].filter(Boolean);
      if (Zt(i, s)) {
        const l = i.findIndex((d) => ye(d, s));
        i.splice(l, 1);
      } else i.push(s);
      r.value = i;
    }
  }
  const a = z(() => t.value === "single");
  return {
    modelValue: r,
    changeModelValue: n,
    isSingle: a
  };
}
const [ke, So] = xe("AccordionRoot");
var Io = /* @__PURE__ */ O({
  __name: "AccordionRoot",
  props: {
    collapsible: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    type: {
      type: String,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, r = o, { dir: n, disabled: a, unmountOnHide: s } = le(t), i = so(n), { modelValue: l, changeModelValue: d, isSingle: f } = $o(t, r), { forwardRef: y, currentElement: w } = Z();
    return So({
      disabled: a,
      direction: i,
      orientation: t.orientation,
      parentElement: w,
      isSingle: f,
      collapsible: t.collapsible,
      modelValue: l,
      changeModelValue: d,
      unmountOnHide: s
    }), (x, h) => (A(), E(c(te), {
      ref: c(y),
      "as-child": x.asChild,
      as: x.as
    }, {
      default: S(() => [B(x.$slots, "default", { modelValue: c(l) })]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), zo = Io, Ne = /* @__PURE__ */ (function(e) {
  return e.Open = "open", e.Closed = "closed", e;
})(Ne || {});
const [qe, Oo] = xe("AccordionItem");
var Mo = /* @__PURE__ */ O({
  __name: "AccordionItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    value: {
      type: String,
      required: !0
    },
    unmountOnHide: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e, { expose: o }) {
    const t = e, r = ke(), n = z(() => r.isSingle.value ? t.value === r.modelValue.value : Array.isArray(r.modelValue.value) && r.modelValue.value.includes(t.value)), a = z(() => r.disabled.value || t.disabled), s = z(() => a.value ? "" : void 0), i = z(() => n.value ? Ne.Open : Ne.Closed);
    o({
      open: n,
      dataDisabled: s
    });
    const { currentRef: l, currentElement: d } = Z();
    Oo({
      open: n,
      dataState: i,
      disabled: a,
      dataDisabled: s,
      triggerId: "",
      currentRef: l,
      currentElement: d,
      value: z(() => t.value)
    });
    function f(y) {
      const w = y.target;
      if (Array.from(r.parentElement.value?.querySelectorAll("[data-reka-collection-item]") ?? []).findIndex((k) => k === w) === -1) return null;
      Yt(y, w, r.parentElement.value, {
        arrowKeyOptions: r.orientation,
        dir: r.direction.value,
        focus: !0
      });
    }
    return (y, w) => (A(), E(c(vo), {
      "data-orientation": c(r).orientation,
      "data-disabled": s.value,
      "data-state": i.value,
      disabled: a.value,
      open: n.value,
      as: t.as,
      "as-child": t.asChild,
      "unmount-on-hide": c(r).unmountOnHide.value,
      onKeydown: Dt(f, [
        "up",
        "down",
        "left",
        "right",
        "home",
        "end"
      ])
    }, {
      default: S(() => [B(y.$slots, "default", { open: n.value })]),
      _: 3
    }, 8, [
      "data-orientation",
      "data-disabled",
      "data-state",
      "disabled",
      "open",
      "as",
      "as-child",
      "unmount-on-hide"
    ]));
  }
}), Eo = Mo, No = /* @__PURE__ */ O({
  __name: "AccordionContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const o = e, t = ke(), r = qe();
    return Z(), (n, a) => (A(), E(c(wo), {
      role: "region",
      "as-child": o.asChild,
      as: n.as,
      "force-mount": o.forceMount,
      "aria-labelledby": c(r).triggerId,
      "data-state": c(r).dataState.value,
      "data-disabled": c(r).dataDisabled.value,
      "data-orientation": c(t).orientation,
      style: {
        "--reka-accordion-content-width": "var(--reka-collapsible-content-width)",
        "--reka-accordion-content-height": "var(--reka-collapsible-content-height)"
      },
      onContentFound: a[0] || (a[0] = (s) => c(t).changeModelValue(c(r).value.value))
    }, {
      default: S(() => [B(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "force-mount",
      "aria-labelledby",
      "data-state",
      "data-disabled",
      "data-orientation"
    ]));
  }
}), Po = No, Bo = /* @__PURE__ */ O({
  __name: "AccordionHeader",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h3"
    }
  },
  setup(e) {
    const o = e, t = ke(), r = qe();
    return Z(), (n, a) => (A(), E(c(te), {
      as: o.as,
      "as-child": o.asChild,
      "data-orientation": c(t).orientation,
      "data-state": c(r).dataState.value,
      "data-disabled": c(r).dataDisabled.value
    }, {
      default: S(() => [B(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-orientation",
      "data-state",
      "data-disabled"
    ]));
  }
}), To = Bo, jo = /* @__PURE__ */ O({
  __name: "AccordionTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const o = e, t = ke(), r = qe();
    r.triggerId ||= yt(void 0, "reka-accordion-trigger");
    function n() {
      const a = t.isSingle.value && r.open.value && !t.collapsible;
      r.disabled.value || a || t.changeModelValue(r.value.value);
    }
    return (a, s) => (A(), E(c(ko), {
      id: c(r).triggerId,
      ref: c(r).currentRef,
      "data-reka-collection-item": "",
      as: o.as,
      "as-child": o.asChild,
      "aria-disabled": c(r).disabled.value || void 0,
      "aria-expanded": c(r).open.value || !1,
      "data-disabled": c(r).dataDisabled.value,
      "data-orientation": c(t).orientation,
      "data-state": c(r).dataState.value,
      disabled: c(r).disabled.value,
      onClick: n
    }, {
      default: S(() => [B(a.$slots, "default")]),
      _: 3
    }, 8, [
      "id",
      "as",
      "as-child",
      "aria-disabled",
      "aria-expanded",
      "data-disabled",
      "data-orientation",
      "data-state",
      "disabled"
    ]));
  }
}), Ro = jo;
const Vo = /* @__PURE__ */ O({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = lo(e, o);
    return (a, s) => (A(), E(c(zo), ee({ "data-slot": "accordion" }, c(n)), {
      default: S(() => [
        B(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qo(e) {
  if (!Se(e))
    return Qe(e);
  const o = new Proxy({}, {
    get(t, r, n) {
      return c(Reflect.get(e.value, r, n));
    },
    set(t, r, n) {
      return Se(e.value[r]) && !Se(n) ? e.value[r].value = n : e.value[r] = n, !0;
    },
    deleteProperty(t, r) {
      return Reflect.deleteProperty(e.value, r);
    },
    has(t, r) {
      return Reflect.has(e.value, r);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Qe(o);
}
function Lo(e) {
  return qo(z(e));
}
function Le(e, ...o) {
  const t = o.flat(), r = t[0];
  return Lo(() => Object.fromEntries(typeof r == "function" ? Object.entries(le(e)).filter(([n, a]) => !r(ie(a), n)) : Object.entries(le(e)).filter((n) => !t.includes(n[0]))));
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function xt(e) {
  var o, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (o = 0; o < n; o++) e[o] && (t = xt(e[o])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function kt() {
  for (var e, o, t = 0, r = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (o = xt(e)) && (r && (r += " "), r += o);
  return r;
}
const Fe = "-", Fo = (e) => {
  const o = Do(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Fe);
      return i[0] === "" && i.length !== 1 && i.shift(), _t(i, o) || Go(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = t[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, _t = (e, o) => {
  if (e.length === 0)
    return o.classGroupId;
  const t = e[0], r = o.nextPart.get(t), n = r ? _t(e.slice(1), r) : void 0;
  if (n)
    return n;
  if (o.validators.length === 0)
    return;
  const a = e.join(Fe);
  return o.validators.find(({
    validator: s
  }) => s(a))?.classGroupId;
}, tt = /^\[(.+)\]$/, Go = (e) => {
  if (tt.test(e)) {
    const o = tt.exec(e)[1], t = o?.substring(0, o.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Do = (e) => {
  const {
    theme: o,
    classGroups: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    Pe(t[n], r, n, o);
  return r;
}, Pe = (e, o, t, r) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? o : ot(o, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Uo(n)) {
        Pe(n(r), o, t, r);
        return;
      }
      o.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([a, s]) => {
      Pe(s, ot(o, a), t, r);
    });
  });
}, ot = (e, o) => {
  let t = e;
  return o.split(Fe).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Uo = (e) => e.isThemeGetter, Ho = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (a, s) => {
    t.set(a, s), o++, o > e && (o = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = t.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return n(a, s), s;
    },
    set(a, s) {
      t.has(a) ? t.set(a, s) : n(a, s);
    }
  };
}, Be = "!", Te = ":", Wo = Te.length, Ko = (e) => {
  const {
    prefix: o,
    experimentalParseClassName: t
  } = e;
  let r = (n) => {
    const a = [];
    let s = 0, i = 0, l = 0, d;
    for (let h = 0; h < n.length; h++) {
      let k = n[h];
      if (s === 0 && i === 0) {
        if (k === Te) {
          a.push(n.slice(l, h)), l = h + Wo;
          continue;
        }
        if (k === "/") {
          d = h;
          continue;
        }
      }
      k === "[" ? s++ : k === "]" ? s-- : k === "(" ? i++ : k === ")" && i--;
    }
    const f = a.length === 0 ? n : n.substring(l), y = Jo(f), w = y !== f, x = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: w,
      baseClassName: y,
      maybePostfixModifierPosition: x
    };
  };
  if (o) {
    const n = o + Te, a = r;
    r = (s) => s.startsWith(n) ? a(s.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const n = r;
    r = (a) => t({
      className: a,
      parseClassName: n
    });
  }
  return r;
}, Jo = (e) => e.endsWith(Be) ? e.substring(0, e.length - 1) : e.startsWith(Be) ? e.substring(1) : e, Zo = (e) => {
  const o = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let a = [];
    return r.forEach((s) => {
      s[0] === "[" || o[s] ? (n.push(...a.sort(), s), a = []) : a.push(s);
    }), n.push(...a.sort()), n;
  };
}, Xo = (e) => ({
  cache: Ho(e.cacheSize),
  parseClassName: Ko(e),
  sortModifiers: Zo(e),
  ...Fo(e)
}), Yo = /\s+/, Qo = (e, o) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = o, s = [], i = e.trim().split(Yo);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const f = i[d], {
      isExternal: y,
      modifiers: w,
      hasImportantModifier: x,
      baseClassName: h,
      maybePostfixModifierPosition: k
    } = t(f);
    if (y) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!k, _ = r(v ? h.substring(0, k) : h);
    if (!_) {
      if (!v) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (_ = r(h), !_) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const N = a(w).join(":"), C = x ? N + Be : N, $ = C + _;
    if (s.includes($))
      continue;
    s.push($);
    const T = n(_, v);
    for (let V = 0; V < T.length; ++V) {
      const ne = T[V];
      s.push(C + ne);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function er() {
  let e = 0, o, t, r = "";
  for (; e < arguments.length; )
    (o = arguments[e++]) && (t = Ct(o)) && (r && (r += " "), r += t);
  return r;
}
const Ct = (e) => {
  if (typeof e == "string")
    return e;
  let o, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (o = Ct(e[r])) && (t && (t += " "), t += o);
  return t;
};
function tr(e, ...o) {
  let t, r, n, a = s;
  function s(l) {
    const d = o.reduce((f, y) => y(f), e());
    return t = Xo(d), r = t.cache.get, n = t.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = Qo(l, t);
    return n(l, f), f;
  }
  return function() {
    return a(er.apply(null, arguments));
  };
}
const I = (e) => {
  const o = (t) => t[e] || [];
  return o.isThemeGetter = !0, o;
}, At = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $t = /^\((?:(\w[\w-]*):)?(.+)\)$/i, or = /^\d+\/\d+$/, rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ar = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, sr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ir = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Y = (e) => or.test(e), b = (e) => !!e && !Number.isNaN(Number(e)), D = (e) => !!e && Number.isInteger(Number(e)), ze = (e) => e.endsWith("%") && b(e.slice(0, -1)), G = (e) => rr.test(e), lr = () => !0, cr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nr.test(e) && !ar.test(e)
), St = () => !1, dr = (e) => sr.test(e), ur = (e) => ir.test(e), pr = (e) => !u(e) && !p(e), fr = (e) => oe(e, Ot, St), u = (e) => At.test(e), W = (e) => oe(e, Mt, cr), Oe = (e) => oe(e, vr, b), rt = (e) => oe(e, It, St), mr = (e) => oe(e, zt, ur), be = (e) => oe(e, Et, dr), p = (e) => $t.test(e), ae = (e) => re(e, Mt), gr = (e) => re(e, yr), nt = (e) => re(e, It), hr = (e) => re(e, Ot), br = (e) => re(e, zt), ve = (e) => re(e, Et, !0), oe = (e, o, t) => {
  const r = At.exec(e);
  return r ? r[1] ? o(r[1]) : t(r[2]) : !1;
}, re = (e, o, t = !1) => {
  const r = $t.exec(e);
  return r ? r[1] ? o(r[1]) : t : !1;
}, It = (e) => e === "position" || e === "percentage", zt = (e) => e === "image" || e === "url", Ot = (e) => e === "length" || e === "size" || e === "bg-size", Mt = (e) => e === "length", vr = (e) => e === "number", yr = (e) => e === "family-name", Et = (e) => e === "shadow", wr = () => {
  const e = I("color"), o = I("font"), t = I("text"), r = I("font-weight"), n = I("tracking"), a = I("leading"), s = I("breakpoint"), i = I("container"), l = I("spacing"), d = I("radius"), f = I("shadow"), y = I("inset-shadow"), w = I("text-shadow"), x = I("drop-shadow"), h = I("blur"), k = I("perspective"), v = I("aspect"), _ = I("ease"), N = I("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], T = () => [...$(), p, u], V = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", "contain", "none"], g = () => [p, u, l], L = () => [Y, "full", "auto", ...g()], Ge = () => [D, "none", "subgrid", p, u], De = () => ["auto", {
    span: ["full", D, p, u]
  }, D, p, u], ue = () => [D, "auto", p, u], Ue = () => ["auto", "min", "max", "fr", p, u], Ce = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...g()], H = () => [Y, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], m = () => [e, p, u], He = () => [...$(), nt, rt, {
    position: [p, u]
  }], We = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ke = () => ["auto", "cover", "contain", hr, fr, {
    size: [p, u]
  }], Ae = () => [ze, ae, W], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    p,
    u
  ], j = () => ["", b, ae, W], pe = () => ["solid", "dashed", "dotted", "double"], Je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => [b, ze, nt, rt], Ze = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    p,
    u
  ], fe = () => ["none", b, p, u], me = () => ["none", b, p, u], $e = () => [b, p, u], ge = () => [Y, "full", ...g()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [G],
      breakpoint: [G],
      color: [lr],
      container: [G],
      "drop-shadow": [G],
      ease: ["in", "out", "in-out"],
      font: [pr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [G],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [G],
      shadow: [G],
      spacing: ["px", b],
      text: [G],
      "text-shadow": [G],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Y, u, p, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [b, u, p, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: T()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ne()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ne()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ne()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [D, "auto", p, u]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Y, "full", "auto", i, ...g()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [b, Y, "auto", "initial", "none", u]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", b, p, u]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", b, p, u]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [D, "first", "last", "none", p, u]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ge()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: De()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ge()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: De()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Ue()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Ue()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Ce(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...X(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...X()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ce()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Ce()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...X(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...X()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: g()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: F()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": g()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": g()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...H()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...H()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...H()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ae, W]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, p, Oe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ze, u]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gr, u, o]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, p, u]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [b, "none", p, Oe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...g()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p, u]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", p, u]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: m()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: m()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...pe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [b, "from-font", "auto", p, W]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: m()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [b, "auto", p, u]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: g()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p, u]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", p, u]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: He()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: We()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Ke()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, D, p, u],
          radial: ["", p, u],
          conic: [D, p, u]
        }, br, mr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: m()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Ae()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Ae()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Ae()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: m()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: m()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: m()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: P()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": P()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": P()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": P()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": P()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": P()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": P()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": P()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": P()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": P()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": P()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": P()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": P()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": P()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": P()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: j()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": j()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": j()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": j()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": j()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": j()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": j()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": j()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": j()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": j()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": j()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...pe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...pe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: m()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": m()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": m()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": m()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": m()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": m()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": m()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": m()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": m()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: m()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...pe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [b, p, u]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", b, ae, W]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: m()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          ve,
          be
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: m()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, ve, be]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": m()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: j()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: m()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [b, W]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": m()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": j()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": m()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, ve, be]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": m()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b, p, u]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Je(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Je()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [b]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": M()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": m()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": m()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": M()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": m()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": m()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": M()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": m()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": m()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": M()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": m()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": m()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": M()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": m()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": m()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": M()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": m()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": m()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": M()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": m()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": m()
      }],
      "mask-image-radial": [{
        "mask-radial": [p, u]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": m()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": m()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": $()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [b]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": M()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": m()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": m()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: He()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: We()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Ke()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", p, u]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          p,
          u
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ze()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [b, p, u]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [b, p, u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          ve,
          be
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": m()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", b, p, u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b, p, u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", b, p, u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b, p, u]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", b, p, u]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          p,
          u
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ze()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [b, p, u]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [b, p, u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", b, p, u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b, p, u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", b, p, u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b, p, u]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b, p, u]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", b, p, u]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", p, u]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [b, "initial", p, u]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, p, u]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [b, p, u]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", N, p, u]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [k, p, u]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": T()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: fe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": fe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": fe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": fe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": me()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: $e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": $e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": $e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [p, u, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: T()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ge()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ge()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ge()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ge()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: m()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: m()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p, u]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", p, u]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...m()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [b, ae, W, Oe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...m()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, xr = /* @__PURE__ */ tr(wr);
function _e(...e) {
  return xr(kt(e));
}
const kr = /* @__PURE__ */ O({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const o = e, t = Le(o, "class");
    return (r, n) => (A(), E(c(Po), ee({
      class: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      "data-slot": "accordion-content"
    }, c(t)), {
      default: S(() => [
        q("div", {
          class: we(c(_e)("pt-0 pb-4", o.class))
        }, [
          B(r.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), _r = /* @__PURE__ */ O({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const o = e, t = Le(o, "class"), r = vt(t);
    return (n, a) => (A(), E(c(Eo), ee({
      class: c(_e)("border-b last:border-b-0", o.class),
      "data-slot": "accordion-item"
    }, c(r)), {
      default: S(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Cr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Ar = (e) => {
  const o = Cr(e);
  return o.charAt(0).toUpperCase() + o.slice(1);
}, $r = (...e) => e.filter((o, t, r) => !!o && o.trim() !== "" && r.indexOf(o) === t).join(" ").trim(), st = (e) => e === "";
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var se = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = ({
  name: e,
  iconNode: o,
  absoluteStrokeWidth: t,
  "absolute-stroke-width": r,
  strokeWidth: n,
  "stroke-width": a,
  size: s = se.width,
  color: i = se.stroke,
  ...l
}, { slots: d }) => J(
  "svg",
  {
    ...se,
    ...l,
    width: s,
    height: s,
    stroke: i,
    "stroke-width": st(t) || st(r) || t === !0 || r === !0 ? Number(n || a || se["stroke-width"]) * 24 / Number(s) : n || a || se["stroke-width"],
    class: $r(
      "lucide",
      l.class,
      ...e ? [`lucide-${at(Ar(e))}-icon`, `lucide-${at(e)}`] : ["lucide-icon"]
    )
  },
  [...o.map((f) => J(...f)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = (e, o) => (t, { slots: r, attrs: n }) => J(
  Sr,
  {
    ...n,
    ...t,
    iconNode: o,
    name: e
  },
  r
);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = Ir("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Or = /* @__PURE__ */ O({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const o = e, t = Le(o, "class");
    return (r, n) => (A(), E(c(To), { class: "flex" }, {
      default: S(() => [
        Q(c(Ro), ee({
          class: c(_e)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", o.class),
          "data-slot": "accordion-trigger"
        }, c(t)), {
          default: S(() => [
            B(r.$slots, "default"),
            B(r.$slots, "icon", {}, () => [
              Q(c(zr), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), it = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, lt = kt, Mr = (e, o) => (t) => {
  var r;
  if (o?.variants == null) return lt(e, t?.class, t?.className);
  const { variants: n, defaultVariants: a } = o, s = Object.keys(n).map((d) => {
    const f = t?.[d], y = a?.[d];
    if (f === null) return null;
    const w = it(f) || it(y);
    return n[d][w];
  }), i = t && Object.entries(t).reduce((d, f) => {
    let [y, w] = f;
    return w === void 0 || (d[y] = w), d;
  }, {}), l = o == null || (r = o.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: y, className: w, ...x } = f;
    return Object.entries(x).every((h) => {
      let [k, v] = h;
      return Array.isArray(v) ? v.includes({
        ...a,
        ...i
      }[k]) : {
        ...a,
        ...i
      }[k] === v;
    }) ? [
      ...d,
      y,
      w
    ] : d;
  }, []);
  return lt(e, s, l, t?.class, t?.className);
}, de = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [r, n] of o)
    t[r] = n;
  return t;
}, Er = {}, Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function Pr(e, o) {
  return A(), U("svg", Nr, [...o[0] || (o[0] = [
    q("path", {
      fill: "currentColor",
      d: "m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
    }, null, -1)
  ])]);
}
const Br = /* @__PURE__ */ de(Er, [["render", Pr]]), Tr = {}, jr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function Rr(e, o) {
  return A(), U("svg", jr, [...o[0] || (o[0] = [
    q("path", {
      fill: "currentColor",
      d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
    }, null, -1)
  ])]);
}
const Vr = /* @__PURE__ */ de(Tr, [["render", Rr]]), qr = {}, Lr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function Fr(e, o) {
  return A(), U("svg", Lr, [...o[0] || (o[0] = [
    q("path", {
      fill: "currentColor",
      d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
      opacity: "0.25"
    }, null, -1),
    q("path", {
      fill: "currentColor",
      d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
    }, [
      q("animateTransform", {
        type: "rotate",
        attributeName: "transform",
        dur: "0.75s",
        repeatCount: "indefinite",
        values: "0 12 12;360 12 12"
      })
    ], -1)
  ])]);
}
const Gr = /* @__PURE__ */ de(qr, [["render", Fr]]), Dr = {}, Ur = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "-5 -8 24 24"
};
function Hr(e, o) {
  return A(), U("svg", Ur, [...o[0] || (o[0] = [
    q("path", {
      fill: "currentColor",
      d: "m7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364z"
    }, null, -1)
  ])]);
}
const Wr = /* @__PURE__ */ de(Dr, [["render", Hr]]), Kr = {}, Jr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function Zr(e, o) {
  return A(), U("svg", Jr, [...o[0] || (o[0] = [
    q("g", { fill: "none" }, [
      q("path", {
        fill: "currentColor",
        "fill-opacity": "0.16",
        d: "M10.575 5.217L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"
      }),
      q("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "10",
        "stroke-width": "1.5",
        d: "M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"
      })
    ], -1)
  ])]);
}
const Xr = /* @__PURE__ */ de(Kr, [["render", Zr]]), ct = /* @__PURE__ */ O({
  __name: "index",
  props: {
    icon: {},
    fallbackIcon: {},
    class: {},
    size: {}
  },
  setup(e) {
    const o = e, t = z(() => o.size ?? 24), r = z(() => {
      const n = o.icon, a = o.fallbackIcon ? o.fallbackIcon : "alert";
      return dt[n] ?? dt[a];
    });
    return (n, a) => (A(), E(Ut(r.value), {
      class: we(["shrink-0", o.class]),
      width: t.value,
      height: t.value
    }, null, 8, ["class", "width", "height"]));
  }
}), dt = {
  check: Br,
  close: Vr,
  loading: Gr,
  "chevron-down": Wr,
  alert: Xr
}, Yr = /* @__PURE__ */ O({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    loading: { type: Boolean },
    icon: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const o = e;
    return (t, r) => (A(), E(c(te), {
      disabled: o.disabled || o.loading,
      class: we(c(_e)(c(Qr)({ variant: e.variant, size: e.size }), o.class)),
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: S(() => [
        B(t.$slots, "default"),
        o.icon && !o.loading ? (A(), E(c(ct), {
          key: 0,
          icon: o.icon,
          class: "size-5 text-current duration-200"
        }, null, 8, ["icon"])) : Ee("", !0),
        o.loading ? (A(), E(c(ct), {
          key: 1,
          icon: "loading",
          class: "size-5 text-current duration-200"
        })) : Ee("", !0)
      ]),
      _: 3
    }, 8, ["disabled", "class", "as", "as-child"]));
  }
}), Qr = Mr("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), an = (e) => ({
  install() {
    if (!e || !e.colors) {
      console.warn("No config provided for the theme settings");
      return;
    }
    en(e.colors);
  }
}), en = (e) => {
  const o = document.documentElement;
  for (const t in e)
    e[t] && o.style.setProperty(`--ui-color-${t}`, e[t]);
}, tn = /* @__PURE__ */ O({
  __name: "App",
  setup(e) {
    return (o, t) => (A(), U("div", null, [
      t[1] || (t[1] = q("h1", { class: "text-3xl font-bold underline" }, "Hello World", -1)),
      Q(c(Yr), null, {
        default: S(() => [...t[0] || (t[0] = [
          Me("Click me", -1)
        ])]),
        _: 1
      })
    ]));
  }
}), on = Ht(tn);
on.mount("#app");
export {
  nn as Accordion,
  Yr as Button,
  an as config
};
//# sourceMappingURL=index.js.map
