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
    t.a = function (e) {
      return o;
    };let o = { container: "body", duration: 600, easing: "ease", offset: 0, onScrollOffsetX: void 0, onScrollOffsetY: void 0, cancelable: !0, onDone: null, onCancel: null, stopPropagation: !0, anchor: !0, hash: null, scrollX: !1, scrollY: !0, clickToScroll: !0, clickedNavItem: null, navItems: [], alwaysTrack: !1, activeClass: "active", itemClass: "scroll-item" };t.b = e => o = Object.assign({}, o, e);
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
      t && Object(r.b)(t), e.directive("navscroll", o.a), e.prototype.$scrollTo = o.a.scrollTo;
    };o.a.install = a, "undefined" != typeof window && window.Vue && (window.NavScroll = o.a, Vue.use(a)), t.default = o.a;
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      for (let t = 0; t < w.length; ++t) if (w[t].el === e) return w.splice(t, 1), !0;return !1;
    }function r(e) {
      for (let t = 0; t < w.length; ++t) if (w[t].el === e) return w[t];
    }function a(e) {
      let t = r(e);return t || (w.push(t = { el: e, binding: {} }), t);
    }function l(e) {
      e.preventDefault();const t = a(this).binding.value,
            n = Object(v.a)(),
            o = event.currentTarget,
            r = void 0 === t.stopPropagation ? n.stopPropagation : t.stopPropagation,
            l = t.onDone && "function" == typeof t.onDone ? t.onDone : n.onDone;if (r && e.stopPropagation(), "string" == typeof t) return Object(f.a)(t, { onDone: l, clickedNavItem: o, navItems: g });t.onDone = l, t.clickedNavItem = o, t.navItems = g, t.trackingFn = i, Object(f.a)(t.el || t.element, t);
    }function i(e, t) {
      let n;const o = Object(v.a)(),
            r = t || a(m).binding.value;let l = d.a.$(r.container || o.container),
          i = r.onScrollOffsetY || 2 * Math.round((window.innerHeight || document.documentElement.clientHeight) / 3),
          c = r.onScrollOffsetX || 2 * Math.round((window.innerWidth || document.documentElement.clientWidth) / 3),
          s = void 0 === r.activeClass ? o.activeClass : r.activeClass,
          u = void 0 === r.scrollX ? o.scrollX : r.scrollX,
          f = void 0 === r.scrollY ? o.scrollY : r.scrollY;l && (g.forEach(e => {
        e.classList.remove(s);const t = e.hash ? e.hash.substr(1) : e.dataset.href,
              o = document.getElementById(t);if (!o) return;let r = d.a.cumulativeOffset(o);f && l.scrollTop >= r.top - i && (n = e), u && l.scrollLeft >= r.left - c && (n = e);
      }), n !== b && (b = n), n && n.classList.add(s));
    }function c(e, t, n) {
      let r = d.a.$(t || m),
          i = n || p;g.forEach(e => o(e)), g = Array.prototype.slice.call(r.getElementsByClassName(i));const c = a(r).binding,
            s = c.value;(void 0 === s.clickToScroll ? Object(v.a)().clickToScroll : s.clickToScroll) ? g.forEach(e => {
        let t = Object.assign({}, c);t.value = Object.assign({}, t.value, { el: e.hash }), a(e).binding = t, d.a.on(e, "click", l);
      }) : g.forEach(e => {
        d.a.off(e, "click", l);
      });
    }function s(e, t) {
      a(e).binding = t;const n = t.value,
            o = Object(v.a)();if (p = t.arg) {
        m = e;const t = window.MutationObserver || window.WebKitMutationObserver;(h = new t(c)).observe(e, { childList: !0, subtree: !0 }), c(null, e, p);
      } else (void 0 === n.clickToScroll ? n.clickToScroll : o.clickToScroll) ? d.a.on(e, "click", l) : d.a.off(e, "click", l);
    }function u(e) {
      let t = a(e).binding;if (t.arg) {
        g.forEach(e => {
          d.a.off(e, "click", l), o(e);
        }), g = [], p = void 0, h = void 0, m = void 0;let e = d.a.$(t.value.container || defaultOpts.container);if (!e) return;d.a.off(e, "scroll", i);
      } else o(e), d.a.off(e, "click", l);
    }var f = n(4),
        d = n(1),
        v = n(0);let p,
        h,
        m,
        b,
        w = [],
        g = [],
        y = { bind(e, t) {
        s(e, t);
      }, unbind(e) {
        u(e);
      }, update(e, t) {
        s(e, t);
      }, utils: d.a, getDefaults: v.a, setDefaults: v.b, scrollTo: f.a, initScrollHandler: function initScrollHandler(e) {
        e || (e = a(m).binding.value);let t = d.a.$(e.container || defaultOpts.container);if (!t) return console.warn(`[navscroll-js]: Could not attach scroll handler to the container "${e.container || defaultOpts.container}" because it was not found in the DOM. Make sure it is in the DOM and then attach the \`onScroll\` handler yourself to it.`);a(t).binding.value = e, d.a.on(t, "scroll", i, { passive: !0 });
      }, onScroll: i, bindings: w, navigationItems: g, initNavItems: c };t.a = y;
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      e && (window.history.pushState ? window.history.pushState(null, null, e) : window.location.hash = e);
    }var r = n(5),
        a = n.n(r),
        l = n(1),
        i = n(0);const c = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
          s = (() => {
      function e(e) {
        let t = e.scrollTop;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollTop), t;
      }function t(e) {
        let t = e.scrollLeft;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollLeft), t;
      }function n(e) {
        if (N) return r();P || (P = e), X = e - P, Y = Math.min(X / v, 1), Y = $(Y), s(d, A + F * Y, L + M * Y), X < v ? window.AFRequestID = window.requestAnimationFrame(n) : r();
      }function r() {
        N || s(d, I, C), P = !1, j && o(T), D && !E && u(k, S), N && w && w(x), !N && b && b(), l.a.off(d, c, q), setTimeout(() => {
          l.a.on(d, "scroll", E, { passive: !0 });
        }, 100);
      }function s(e, t, n) {
        y && (e.scrollTop = t), g && (e.scrollLeft = n), "body" === e.tagName.toLowerCase() && (y && (document.documentElement.scrollTop = t), g && (document.documentElement.scrollLeft = n));
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
          w,
          g,
          y,
          O,
          k,
          T,
          j,
          S,
          D,
          E,
          L,
          C,
          A,
          I,
          M,
          F,
          N,
          x,
          $,
          P,
          X,
          Y,
          q = e => {
        m && (x = e, N = !0);
      };return function (o, r, s = {}) {
        if ("object" == typeof r ? s = r : "number" == typeof r && (s.duration = r), !(f = l.a.$(o))) return console.warn(`[navscroll-js]: Trying to scroll to element "${o}" that is not on the page. Make sure it is set in the DOM.`);const P = Object(i.a)();if (!(d = l.a.$(s.container || P.container))) return console.warn(`[navscroll-js]: Scrolling container "${s.container || P.container}" is not present on the page.`);v = s.duration || P.duration, p = s.easing || P.easing, h = s.offset || P.offset, m = !1 !== s.cancelable, b = s.onDone || P.onDone, w = s.onCancel || P.onCancel, g = void 0 === s.scrollX ? P.scrollX : s.scrollX, y = void 0 === s.scrollY ? P.scrollY : s.scrollY, O = void 0 === s.activeClass ? P.activeClass : s.activeClass, k = s.clickedNavItem || P.clickedNavItem, T = k ? k.hash || k.dataset.href : s.hash || P.hash, j = void 0 === s.anchor ? P.anchor : s.anchor, S = s.navItems || P.navItems, D = void 0 === s.alwaysTrack ? P.alwaysTrack : s.alwaysTrack, E = "function" == typeof s.trackingFn ? s.trackingFn : P.trackingFn;let X = l.a.cumulativeOffset(f);return A = e(d), I = X.top - d.offsetTop - h, L = t(d), C = X.left - d.offsetLeft - h, N = !1, F = I - A, M = C - L, p = l.a.cubicBezierArrayFrom(p), $ = a.a.apply(a.a, p), F || M ? (D || (l.a.off(d, "scroll", E), window.cancelAnimationFrame(window.AFRequestID), u(k, S)), l.a.on(d, c, q, { passive: !0 }), window.requestAnimationFrame(n), () => {
          x = null, N = !0;
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
    }function i(e, t, n, o, r) {
      var l,
          i,
          c = 0;do {
        (l = a(i = t + (n - t) / 2, o, r) - e) > 0 ? n = i : t = i;
      } while (Math.abs(l) > f && ++c < d);return i;
    }function c(e, t, n, o) {
      for (var r = 0; r < s; ++r) {
        var i = l(t, n, o);if (0 === i) return t;t -= (a(t, n, o) - e) / i;
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
            d = l(f, e, n);return d >= u ? c(t, f, e, n) : 0 === d ? f : i(t, o, o + p, e, n);
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