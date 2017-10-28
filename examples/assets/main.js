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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navscroll__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__navscroll__);




new Vue({
  el: '#app',
  directives: {
    'scroll-to': __WEBPACK_IMPORTED_MODULE_1__navscroll___default.a
  },
  data() {
    return {
      entries: Array.from(new Array(10), (_, i) => i).map(i => `entry-${i}`),
      activeClass: 'active-position'
    };
  },
  mounted() {
    this.$refs.entries[0].classList.add(this.activeClass);
  },
  methods: {
    innerOnDone(entryIndex) {
      // remove active class on all elements but the current active one
      this.$refs.entries.forEach((e, i) => i !== entryIndex && e.classList.remove(this.activeClass));
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
    }, t.p = "/", t(t.s = 3);
  }([function (e, t, n) {
    "use strict";
    t.b = function (e) {
      l = Object.assign({}, l, e);
    }, t.c = function (e) {
      e && (window.history.pushState ? window.history.pushState(null, null, e) : window.location.hash = e);
    };var o = n(5),
        r = n.n(o),
        a = n(1),
        i = n(2);const c = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];let l = Object.assign({}, i.a);const u = (() => {
      function e(e) {
        let t = e.scrollTop;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollTop), t;
      }function t(e) {
        let t = e.scrollLeft;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollLeft), t;
      }function n(e) {
        if (D) return o();T || (T = e), C = e - T, E = Math.min(C / f, 1), E = S(E), i(s, j + x * E, w + A * E), C < f ? window.requestAnimationFrame(n) : o();
      }function o() {
        D || i(s, O, h), T = !1, a.a.off(s, c, N), D && y && y(L), !D && b && b();
      }function i(e, t, n) {
        g && (e.scrollTop = t), m && (e.scrollLeft = n), "body" === e.tagName.toLowerCase() && (g && (document.documentElement.scrollTop = t), m && (document.documentElement.scrollLeft = n));
      }let u,
          s,
          f,
          d,
          p,
          v,
          b,
          y,
          m,
          g,
          w,
          h,
          j,
          O,
          A,
          x,
          D,
          L,
          S,
          T,
          C,
          E,
          N = e => {
        v && (L = e, D = !0);
      };return function (o, i, T = {}) {
        if ("object" == typeof i ? T = i : "number" == typeof i && (T.duration = i), !(u = a.a.$(o))) return console.warn(`[navscroll-js]: Trying to scroll to element "${o}" that is not on the page. Make sure it is set in the DOM.`);s = a.a.$(T.container || l.container), f = T.duration || l.duration, d = T.easing || l.easing, p = T.offset || l.offset, v = !1 !== T.cancelable, b = T.onDone || l.onDone, y = T.onCancel || l.onCancel, m = void 0 === T.scrollX ? l.scrollX : T.scrollX, g = void 0 === T.scrollY ? l.scrollY : T.scrollY;let C = a.a.cumulativeOffset(u);return j = e(s), O = C.top - s.offsetTop + p, w = t(s), h = C.left - s.offsetLeft + p, D = !1, x = O - j, A = h - w, d = a.a.cubicBezierArrayFrom(d), S = r.a.apply(r.a, d), x || A ? (a.a.on(s, c, N, { passive: !0 }), window.requestAnimationFrame(n), () => {
          L = null, D = !0;
        }) : void 0;
      };
    })();t.a = u;
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
    function o(e) {
      switch ((e => Object.prototype.toString.call(e).slice(8, -1))(e)) {case "Object":
          return Object;case "Array":
          return Array;case "String":
          return String;case "Number":
          return Number;case "Boolean":
          return Boolean;case "RegExp":
          return RegExp;case "Undefined":case "Null":default:
          return null;}
    }let r = { container: "body", duration: 600, easing: "ease", offset: 0, cancelable: !0, onDone: !1, onCancel: !1, scrollX: !1, scrollY: !0, stopPropagation: !0, anchor: !0, activeClass: "active", clickToScroll: !0 };t.a = r;!function (e) {
      let t = {};for (let n in e) {
        let r = o(e[n]);t[n] = { type: r, default: r === Array || r === Object ? () => e[n] : e[n] };
      }
    }(r);
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = n(4),
        r = n(0);const a = function a(e, t) {
      t && Object(r.b)(t), e.directive("scroll-to", o.a), e.prototype.$scrollTo = o.a.scrollTo;
    };"undefined" != typeof window && window.Vue && (window.NavScroll = o.a, window.NavScroll.setDefaults = r.b, Vue.use(a)), o.a.install = a, t.default = o.a;
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      for (let t = 0; t < s.length; ++t) if (s[t].el === e) return s.splice(t, 1), !0;return !1;
    }function r(e) {
      for (let t = 0; t < s.length; ++t) if (s[t].el === e) return s[t];
    }function a(e) {
      let t = r(e);return t || (s.push(t = { el: e, binding: {} }), t);
    }function i(e) {
      e.preventDefault();const t = a(this).binding.value,
            n = e,
            o = n.currentTarget,
            r = o.hash,
            i = void 0 === t.stopPropagation ? u.a.stopPropagation : t.stopPropagation,
            l = void 0 === t.anchor ? u.a.anchor : t.anchor,
            s = void 0 === t.activeClass ? u.a.activeClass : t.activeClass,
            f = t.onDone && "function" == typeof t.onDone ? t.onDone : u.a.onDone;i && n.stopPropagation();const d = l ? () => {
        Object(c.c)(r), o.classList.add(s), f && f();
      } : f;if ("string" == typeof t) return Object(c.a)(t, { onDone: d });t.onDone = d, Object(c.a)(t.el || t.element || r, t);
    }var c = n(0),
        l = n(1),
        u = n(2);let s = [];t.a = { bind(e, t) {
        a(e).binding = t, l.a.on(e, "click", i);
      }, unbind(e) {
        o(e), l.a.off(e, "click", i);
      }, update(e, t) {
        a(e).binding = t;
      }, scrollTo: c.a, bindings: s };
  }, function (e, t) {
    function n(e, t) {
      return 1 - 3 * t + 3 * e;
    }function o(e, t) {
      return 3 * t - 6 * e;
    }function r(e) {
      return 3 * e;
    }function a(e, t, a) {
      return ((n(t, a) * e + o(t, a)) * e + r(t)) * e;
    }function i(e, t, a) {
      return 3 * n(t, a) * e * e + 2 * o(t, a) * e + r(t);
    }function c(e, t, n, o, r) {
      var i,
          c,
          l = 0;do {
        (i = a(c = t + (n - t) / 2, o, r) - e) > 0 ? n = c : t = c;
      } while (Math.abs(i) > f && ++l < d);return c;
    }function l(e, t, n, o) {
      for (var r = 0; r < u; ++r) {
        var c = i(t, n, o);if (0 === c) return t;t -= (a(t, n, o) - e) / c;
      }return t;
    }var u = 4,
        s = .001,
        f = 1e-7,
        d = 10,
        p = 11,
        v = 1 / (p - 1),
        b = "function" == typeof Float32Array;e.exports = function (e, t, n, o) {
      function r(t) {
        for (var o = 0, r = 1, a = p - 1; r !== a && u[r] <= t; ++r) o += v;var f = o + (t - u[--r]) / (u[r + 1] - u[r]) * v,
            d = i(f, e, n);return d >= s ? l(t, f, e, n) : 0 === d ? f : c(t, o, o + v, e, n);
      }if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");var u = b ? new Float32Array(p) : new Array(p);if (e !== t || n !== o) for (var f = 0; f < p; ++f) u[f] = a(f * v, e, n);return function (i) {
        return e === t && n === o ? i : 0 === i ? 0 : 1 === i ? 1 : a(r(i), t, o);
      };
    };
  }, function (e, t, n) {
    "use strict";
    t.a = { ease: [.25, .1, .25, 1], linear: [0, 0, 1, 1], "ease-in": [.42, 0, 1, 1], "ease-out": [0, 0, .58, 1], "ease-in-out": [.42, 0, .58, 1] };
  }]);
});

/***/ })
/******/ ]);