/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/examples/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_navscroll__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_navscroll__);




new Vue({
  el: '#app',
  directives: {
    'navscroll': __WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a
  },
  data() {
    return {
      entries: Array.from(new Array(10), (_, i) => i).map(i => `entry-${i}`),
      activeClass: 'active-position'
    };
  },
  mounted() {
    this.$refs.entries[0].classList.add(this.activeClass);
    __WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.initScrollHandler();
  },
  methods: {
    resetActiveClass(entryIndex) {
      this.$refs.entries.forEach((e, i) => e.classList.remove(this.activeClass));
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.NavScroll = t() : e.NavScroll = t();
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/", t(t.s = 2);
  }([function (e, t, n) {
    "use strict";
    function o(e) {
      let t = {};for (let n in e) {
        let o = r(e[n]);t[n] = { type: o, default: o === Array || o === Object ? () => e[n] : e[n] };
      }return t;
    }function r(e) {
      switch ((e => Object.prototype.toString.call(e).slice(8, -1))(e)) {case "Object":
          return Object;case "Array":
          return Array;case "String":
          return String;case "Number":
          return Number;case "Boolean":
          return Boolean;case "RegExp":
          return RegExp;case "Undefined":case "Null":default:
          return null;}
    }t.a = function (e) {
      return a;
    };let a = { container: "body", duration: 600, easing: "ease", offset: 0, onScrollOffsetX: void 0, onScrollOffsetY: void 0, cancelable: !0, onDone: null, onCancel: null, stopPropagation: !0, anchor: !0, hash: null, scrollX: !1, scrollY: !0, clickToScroll: !0, clickedNavItem: null, navItems: [], alwaysTrack: !1, activeClass: "active", itemSelector: ".scroll-item" };t.c = e => a = Object.assign({}, a, e);t.b = e => o(e || a);
  }, function (e, t, n) {
    "use strict";
    var o = n(6);let r = !1;try {
      let e = Object.defineProperty({}, "passive", { get: function get() {
          r = !0;
        } });window.addEventListener("test", null, e);
    } catch (e) {}t.a = { $: e => "string" != typeof e ? e : document.querySelector(e), on(e, t, n, o = { passive: !1 }) {
        t instanceof Array || (t = [t]);for (let a = 0; a < t.length; a++) e.addEventListener(t[a], n, !!r && o);
      }, off(e, t, n) {
        t instanceof Array || (t = [t]);for (let o = 0; o < t.length; o++) e.removeEventListener(t[o], n);
      }, cumulativeOffset(e) {
        let t = 0,
            n = 0;do {
          t += e.offsetTop || 0, n += e.offsetLeft || 0, e = e.offsetParent;
        } while (e);return { top: t, left: n };
      }, cubicBezierArrayFrom: e => Array.isArray(e) ? e : "string" == typeof e ? o.a[e] ? o.a[e] : e.split(",") : o.a.ease };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = n(3),
        r = n(0);const a = function a(e, t) {
      t && Object(r.c)(t), e.directive("navscroll", o.a), e.component("navscroll", o.a), e.prototype.$scrollTo = o.a.scrollTo;
    };o.a.install = a, "undefined" != typeof window && window.Vue && (window.NavScroll = o.a, Vue.use(a)), t.default = o.a;
  }, function (e, t, n) {
    "use strict";
    function o(e, t) {
      let n;const o = Object(h.a)(),
            r = t || u(g).binding.value;let a = p.a.$(r.container || o.container),
          l = r.onScrollOffsetY || 2 * Math.round((window.innerHeight || document.documentElement.clientHeight) / 3),
          c = r.onScrollOffsetX || 2 * Math.round((window.innerWidth || document.documentElement.clientWidth) / 3),
          i = void 0 === r.activeClass ? o.activeClass : r.activeClass,
          s = void 0 === r.scrollX ? o.scrollX : r.scrollX,
          f = void 0 === r.scrollY ? o.scrollY : r.scrollY;a && (O.forEach(e => {
        e.classList.remove(i);const t = e.hash ? e.hash.substr(1) : e.dataset.href,
              o = document.getElementById(t);if (!o) return;let r = p.a.cumulativeOffset(o);f && a.scrollTop >= r.top - l && (n = e), s && a.scrollLeft >= r.left - c && (n = e);
      }), n !== y && (y = n), n && n.classList.add(i));
    }function r(e, t) {
      u(e).binding = t;const n = t.value,
            o = Object(h.a)();(m = t.arg) ? a(e, m = `.${m}`) : (void 0 === n.clickToScroll ? n.clickToScroll : o.clickToScroll) ? p.a.on(e, "click", s) : p.a.off(e, "click", s);
    }function a(e, t, n) {
      let o = u(g = e).binding;!o.arg && (o.arg = t), n && (o.value = Object.assign({}, n));const r = window.MutationObserver || window.WebKitMutationObserver;(b = new r(c)).observe(e, { childList: !0, subtree: !0 }), c(null, e, t);
    }function l(e) {
      e || (e = u(g).binding.value);let t = p.a.$(e.container || defaultOpts.container);if (!t) return console.warn(`[navscroll-js]: Could not attach scroll handler to the container "${e.container || defaultOpts.container}" because it was not found in the DOM. Make sure it is in the DOM and then attach the \`onScroll\` handler yourself to it.`);u(t).binding.value = e, p.a.on(t, "scroll", o, { passive: !0 });
    }function c(e, t, n) {
      (function (e) {
        return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
      })(t) || (t = null);let o = p.a.$(t || g),
          r = n || m;if (!o) return;O.forEach(e => d(e)), O = Array.prototype.slice.call(o.querySelectorAll(r));const a = u(o).binding,
            l = a.value;if (void 0 === l.clickToScroll ? Object(h.a)().clickToScroll : l.clickToScroll) return O.forEach(e => {
        let t = Object.assign({}, a);t.value = Object.assign({}, t.value, { el: e.hash }), u(e).binding = t, p.a.on(e, "click", s);
      });O.forEach(e => {
        p.a.off(e, "click", s);
      });
    }function i(e) {
      let t = u(e).binding;if (t.arg) {
        O.forEach(e => {
          p.a.off(e, "click", s), d(e);
        }), O = [], m = void 0, b = void 0, g = void 0;let e = p.a.$(t.value.container || defaultOpts.container);if (!e) return;p.a.off(e, "scroll", o);
      } else d(e), p.a.off(e, "click", s);
    }function s(e) {
      e.preventDefault();const t = u(this).binding.value,
            n = Object(h.a)(),
            r = event.currentTarget,
            a = void 0 === t.stopPropagation ? n.stopPropagation : t.stopPropagation,
            l = t.onDone && "function" == typeof t.onDone ? t.onDone : n.onDone;if (a && e.stopPropagation(), "string" == typeof t) return Object(v.a)(t, { onDone: l, clickedNavItem: r, navItems: O });t.onDone = l, t.clickedNavItem = r, t.navItems = O, t.trackingFn = o, Object(v.a)(t.el || t.element, t);
    }function u(e) {
      let t = f(e);return t || (w.push(t = { el: e, binding: {} }), t);
    }function f(e) {
      for (let t = 0; t < w.length; ++t) if (w[t].el === e) return w[t];
    }function d(e) {
      for (let t = 0; t < w.length; ++t) if (w[t].el === e) return w.splice(t, 1), !0;return !1;
    }var v = n(4),
        p = n(1),
        h = n(0);let m,
        b,
        g,
        y,
        w = [],
        O = [];t.a = { scrollTo: v.a, onScroll: o, initScrollHandler: l, setDefaults: h.c, getDefaults: h.a, setNavigationItems: (e, t) => c(0, p.a.$(e), t), utils: p.a, bindings: w, navigationItems: O, bind(e, t) {
        r(e, t);
      }, unbind(e) {
        i(e);
      }, update(e, t) {
        r(e, t);
      }, props: Object(h.b)(), template: `\n    <nav class="navscroll-js">\n      <slot></slot>\n    </nav>\n  `, mounted() {
        a(this.$el, this.itemSelector, this.$props), l(), o();
      }, updated() {
        c(0, p.a.$(this.$el), this.itemSelector);
      }, beforeDestroy() {
        i(this.$el);
      } };
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      e && (window.history.pushState ? window.history.pushState(null, null, e) : window.location.hash = e);
    }var r = n(5),
        a = n.n(r),
        l = n(1),
        c = n(0);const i = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
          s = (() => {
      function e(e) {
        let t = e.scrollTop;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollTop), t;
      }function t(e) {
        let t = e.scrollLeft;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollLeft), t;
      }function n(e) {
        if (C) return r();P || (P = e), X = e - P, Y = Math.min(X / v, 1), Y = F(Y), s(d, $ + I * Y, A + N * Y), X < v ? window.AFRequestID = window.requestAnimationFrame(n) : r();
      }function r() {
        C || s(d, M, D), P = !1, S && o(k), E && !L && u(j, T), C && g && g(x), !C && b && b(), l.a.off(d, i, q), setTimeout(() => {
          l.a.on(d, "scroll", L, { passive: !0 });
        }, 100);
      }function s(e, t, n) {
        w && (e.scrollTop = t), y && (e.scrollLeft = n), "body" === e.tagName.toLowerCase() && (w && (document.documentElement.scrollTop = t), y && (document.documentElement.scrollLeft = n));
      }function u(e, t) {
        t.forEach(e => {
          e.classList.remove(O);
        }), e && e.classList.add(O);
      }let f,
          d,
          v,
          p,
          h,
          m,
          b,
          g,
          y,
          w,
          O,
          j,
          k,
          S,
          T,
          E,
          L,
          A,
          D,
          $,
          M,
          N,
          I,
          C,
          x,
          F,
          P,
          X,
          Y,
          q = e => {
        m && (x = e, C = !0);
      };return function (o, r, s = {}) {
        if ("object" == typeof r ? s = r : "number" == typeof r && (s.duration = r), !(f = l.a.$(o))) return console.warn(`[navscroll-js]: Trying to scroll to element "${o}" that is not on the page. Make sure it is set in the DOM.`);const P = Object(c.a)();if (!(d = l.a.$(s.container || P.container))) return console.warn(`[navscroll-js]: Scrolling container "${s.container || P.container}" is not present on the page.`);v = s.duration || P.duration, p = s.easing || P.easing, h = s.offset || P.offset, m = !1 !== s.cancelable, b = s.onDone || P.onDone, g = s.onCancel || P.onCancel, y = void 0 === s.scrollX ? P.scrollX : s.scrollX, w = void 0 === s.scrollY ? P.scrollY : s.scrollY, O = void 0 === s.activeClass ? P.activeClass : s.activeClass, j = s.clickedNavItem || P.clickedNavItem, k = j ? j.hash || j.dataset.href : s.hash || P.hash, S = void 0 === s.anchor ? P.anchor : s.anchor, T = s.navItems || P.navItems, E = void 0 === s.alwaysTrack ? P.alwaysTrack : s.alwaysTrack, L = "function" == typeof s.trackingFn ? s.trackingFn : P.trackingFn;let X = l.a.cumulativeOffset(f);return $ = e(d), M = X.top - d.offsetTop - h, A = t(d), D = X.left - d.offsetLeft - h, C = !1, I = M - $, N = D - A, p = l.a.cubicBezierArrayFrom(p), F = a.a.apply(a.a, p), I || N ? (E || (l.a.off(d, "scroll", L), window.cancelAnimationFrame(window.AFRequestID), u(j, T)), l.a.on(d, i, q, { passive: !0 }), window.requestAnimationFrame(n), () => {
          x = null, C = !0;
        }) : void 0;
      };
    })();t.a = s;
  }, function (e, t) {
    function n(e, t) {
      return 1 - 3 * t + 3 * e;
    }function o(e, t) {
      return 3 * t - 6 * e;
    }function r(e) {
      return 3 * e;
    }function a(e, t, a) {
      return ((n(t, a) * e + o(t, a)) * e + r(t)) * e;
    }function l(e, t, a) {
      return 3 * n(t, a) * e * e + 2 * o(t, a) * e + r(t);
    }function c(e, t, n, o, r) {
      var l,
          c,
          i = 0;do {
        (l = a(c = t + (n - t) / 2, o, r) - e) > 0 ? n = c : t = c;
      } while (Math.abs(l) > f && ++i < d);return c;
    }function i(e, t, n, o) {
      for (var r = 0; r < s; ++r) {
        var c = l(t, n, o);if (0 === c) return t;t -= (a(t, n, o) - e) / c;
      }return t;
    }var s = 4,
        u = .001,
        f = 1e-7,
        d = 10,
        v = 11,
        p = 1 / (v - 1),
        h = "function" == typeof Float32Array;e.exports = function (e, t, n, o) {
      function r(t) {
        for (var o = 0, r = 1, a = v - 1; r !== a && s[r] <= t; ++r) o += p;var f = o + (t - s[--r]) / (s[r + 1] - s[r]) * p,
            d = l(f, e, n);return d >= u ? i(t, f, e, n) : 0 === d ? f : c(t, o, o + p, e, n);
      }if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");var s = h ? new Float32Array(v) : new Array(v);if (e !== t || n !== o) for (var f = 0; f < v; ++f) s[f] = a(f * p, e, n);return function (l) {
        return e === t && n === o ? l : 0 === l ? 0 : 1 === l ? 1 : a(r(l), t, o);
      };
    };
  }, function (e, t, n) {
    "use strict";
    t.a = { ease: [.25, .1, .25, 1], linear: [0, 0, 1, 1], "ease-in": [.42, 0, 1, 1], "ease-out": [0, 0, .58, 1], "ease-in-out": [.42, 0, .58, 1] };
  }]);
});

/***/ })
/******/ ]);