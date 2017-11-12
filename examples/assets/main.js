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




Vue.use(__WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a);

let NavigationExample1 = {
  props: ['entries', ...Object.keys(__WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.getDefaults())],
  template: `
    <navscroll class="nav-scroll-items entries"
      :container="container"
      :item-selector="'.item'"
      :active-class="activeClass"
      :always-track="alwaysTrack"
      :duration="duration"
      :offset="offset"
      :easing="easing"
      :anchor="anchor"
      :cancelable="cancelable"
      :scrollX="scrollX"
      :scrollY="scrollY">

      <a
        v-for="(entry,i) of entries" :key="i"
        :href="'#'+entry+'-target'"
        class="entry item">

          <span class="entry-name">Go to Table {{entry}}</span>
      </a>
    </navscroll>
  `
};

let NavigationExample2 = {
  props: ['entries', ...Object.keys(__WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.getDefaults())],
  template: `
    <nav class="nav-scroll-items entries"
      v-navscroll:item="{
        container, activeClass, alwaysTrack, duration,
        offset, easing, anchor, cancelable, scrollX, scrollY
      }">

      <a
        v-for="(entry,i) of entries" :key="i"
        :href="'#'+entry+'-target'"
        class="entry item">

          <span class="entry-name">Go to Table {{entry}}</span>
      </a>
    </nav>
  `
};

let NavigationExample3 = {
  props: ['entries', ...Object.keys(__WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.getDefaults())],
  mounted() {
    __WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.initObserver(this.$refs.wrapper, '.item', this.$props);
  },
  updated() {
    __WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.initObserver(this.$refs.wrapper, '.item', this.$props);
  },
  beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_1__dist_navscroll___default.a.unbindObserver(this.$props);
  },
  template: `
    <nav id="nav-wrapper" ref="wrapper" class="nav-scroll-items entries">

      <a
        v-for="(entry,i) of entries" :key="i"
        :href="'#'+entry+'-target'"
        class="entry item"
        v-navscroll="{
          container, activeClass, offset, alwaysTrack, duration,
          offset, easing, anchor, cancelable, scrollX, scrollY
        }">

          <span class="entry-name">Go to Table {{entry}}</span>
      </a>
    </nav>
  `
};

function format(str) {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
}

new Vue({
  el: '#app',
  components: {
    'nav-ex1': NavigationExample1,
    'nav-ex2': NavigationExample2,
    'nav-ex3': NavigationExample3
  },
  data() {
    return {
      sidebar: 'nav-ex1',
      entriesArray: Array.from(new Array(4), (_, i) => i),
      container: '#scrollable-content',
      activeClass: 'active-position',
      preClass: '',
      codes: {
        'nav-ex1': format(NavigationExample1.template),
        'nav-ex2': format(NavigationExample2.template),
        'nav-ex3': format(NavigationExample3.template)
      },

      alwaysTrack: false,
      duration: 600,
      offset: 60,
      easing: '.5,0,.35,1',
      anchor: false,
      cancelable: true,
      scrollAxis: 'y'
    };
  },
  computed: {
    entries() {
      return Array.from(this.entriesArray, (_, i) => i).map(i => `entry-${i}`);
    },

    prop() {
      return {
        entries: this.entries,
        container: '#scrollable-content',
        activeClass: 'active-position',
        alwaysTrack: this.alwaysTrack,
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
        anchor: this.anchor,
        cancelable: this.cancelable,
        scrollX: this.scrollAxis === 'x',
        scrollY: this.scrollAxis === 'y'
      };
    },

    code() {
      return this.codes[this.sidebar];
    }
  },
  methods: {
    toggleOptions(ev) {
      let optionsEl = this.$refs.options;
      optionsEl.classList.toggle('visible');
      optionsEl.style.bottom = 'initial';
      optionsEl.style.top = `${ev.srcElement.getBoundingClientRect().top}px`;
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
    };let a = { container: "body", itemSelector: ".scroll-item", activeClass: "active", el: null, duration: 600, easing: "ease", scrollX: !1, scrollY: !0, offset: 0, onScrollOffsetX: void 0, onScrollOffsetY: void 0, alwaysTrack: !1, cancelable: !0, stopPropagation: !0, onDone: null, onCancel: null, anchor: !0, hash: null, clickToScroll: !0, clickedNavItem: null, navItems: [] };t.c = e => a = Object.assign({}, a, e);t.b = e => o(e || a);
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
      }, cubicBezierArrayFrom: e => Array.isArray(e) ? e : "string" == typeof e ? o.a[e] ? o.a[e] : e.split(",").map(e => +e) : o.a.ease };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = n(3),
        r = n(0);const a = function a(e, t) {
      t && Object(r.c)(t), e.directive("navscroll", o.a), e.component("navscroll", o.a), e.prototype.$scrollTo = o.a.scrollTo;
    };o.a.install = a, "undefined" != typeof window && window.Vue && (window.NavScroll = o.a, Vue.use(a)), t.default = o.a;
  }, function (e, t, n) {
    "use strict";
    function o(e, t) {
      const n = Object.assign({}, t.value);n.isWrapper = !!t.arg, n.isWrapper && (n.itemSelector = `.${t.arg}`), r(e, n, n.isWrapper);
    }function r(e, t, n) {
      console.log("onBind", e, t, n);const o = Object(g.a)();t.isWrapper = n, n ? c(e, t.itemSelector, t) : (p(e).binding = t, (void 0 === t.clickToScroll ? t.clickToScroll : o.clickToScroll) ? h.a.on(e, "click", l) : h.a.off(e, "click", l));
    }function a(e) {
      let t = p(e).binding;Object(g.a)();console.log("onUnbind", e, t), t.isWrapper ? f(t) : u(e);
    }function c(e, t, n) {
      function o(e) {
        console.log("watcher", e, "with options", r, O, w), O && (console.log("navigationItems before", k, k.length), k.forEach(e => u(e)), k = [].slice.call(O.querySelectorAll(w)), console.log("navigationItems after", k, k.length), (void 0 === r.clickToScroll ? a.clickToScroll : r.clickToScroll) ? k.forEach(e => {
          let t = r.el || r.element || e.hash || e.dataset.href;p(e).binding = Object.assign({}, r, { el: t }), h.a.on(e, "click", l);
        }) : k.forEach(e => {
          h.a.off(e, "click", l);
        }), s());
      }console.log("initObserver", e, t, n);let r;const a = Object(g.a)();if (O = h.a.$(e), w = t || a.itemSelector, !O) return;if (r = p(O).binding = Object.assign({}, p(O).binding, n, { isWrapper: !0 }), !i(r)) return;const c = window.MutationObserver || window.WebKitMutationObserver;(y = new c(o)).observe(O, { childList: !0, subtree: !0 }), o();
    }function i(e) {
      console.log("initScrollContainer", e);const t = Object(g.a)();let n = h.a.$(e.container || t.container);return n ? (p(n).binding = e, h.a.on(n, "scroll", s, { passive: !0 }), !0) : console.warn(`[navscroll-js]: Could not attach scroll handler to the container "${e.container || t.container}" because it was not found. Make sure it is in the DOM and then call \`initObserver(wrapper, itemSelector, options)\` yourself with options.container properly set.`);
    }function l(e) {
      e.preventDefault();const t = p(this).binding || {},
            n = Object(g.a)(),
            o = event.currentTarget;if ((void 0 === t.stopPropagation ? n.stopPropagation : t.stopPropagation) && e.stopPropagation(), "string" == typeof t) return Object(b.a)(t, { clickedNavItem: o, navItems: k });t.clickedNavItem = o, t.navItems = k, t.trackingFn = s, Object(b.a)(t.el || t.element, t);
    }function s(e) {
      let t;const n = Object(g.a)(),
            o = p(O).binding;let r = h.a.$(o.container || n.container),
          a = o.onScrollOffsetY || 2 * Math.round((window.innerHeight || document.documentElement.clientHeight) / 3),
          c = o.onScrollOffsetX || 2 * Math.round((window.innerWidth || document.documentElement.clientWidth) / 3),
          i = void 0 === o.activeClass ? n.activeClass : o.activeClass,
          l = void 0 === o.scrollX ? n.scrollX : o.scrollX,
          s = void 0 === o.scrollY ? n.scrollY : o.scrollY;r && (k.forEach(e => {
        e.classList.remove(i);const n = e.hash ? e.hash.substr(1) : e.dataset.href,
              o = document.getElementById(n);if (!o) return;let u = h.a.cumulativeOffset(o);s && r.scrollTop >= u.top - a && (t = e), l && r.scrollLeft >= u.left - c && (t = e);
      }), t !== j && (j = t), t && t.classList.add(i));
    }function u(e) {
      m(e), h.a.off(e, "click", l);
    }function f(e) {
      console.log("unbindObserver", e), k.forEach(e => {
        u(e);
      }), k = [], w = void 0, m(O), O = void 0, y && (y.disconnect(), y = void 0), d(e);
    }function d(e) {
      const t = Object(g.a)();let n = h.a.$(e.container || t.container);n && (m(n), h.a.off(n, "scroll", s));
    }function p(e) {
      let t = v(e);return t || (S.push(t = { el: e, binding: {} }), t);
    }function v(e) {
      for (let t = 0; t < S.length; ++t) if (S[t].el === e) return S[t];
    }function m(e) {
      for (let t = 0; t < S.length; ++t) if (S[t].el === e) return S.splice(t, 1), !0;return !1;
    }var b = n(4),
        h = n(1),
        g = n(0);let w,
        y,
        O,
        j,
        S = [],
        k = [];t.a = { scrollTo: b.a, onScroll: s, initObserver: c, unbindObserver: f, setDefaults: g.c, getDefaults: g.a, bindings: S, utils: h.a, navigationWrapper: O, navigationItems: k, navItemsClassName: w, getVueComponentProps: g.b, bind(e, t) {
        o(e, t);
      }, update(e, t) {
        o(e, t);
      }, unbind(e) {
        a(e);
      }, props: Object(g.b)(), template: `\n    <nav class="navscroll-js">\n      <slot></slot>\n    </nav>\n  `, mounted() {
        r(this.$el, this.$props, !0);
      }, updated() {
        r(h.a.$(this.$el), this.$props, !0);
      }, beforeDestroy() {
        a(this.$el);
      } };
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      e && (window.history.pushState ? window.history.pushState(null, null, e) : window.location.hash = e);
    }var r = n(5),
        a = n.n(r),
        c = n(1),
        i = n(0);const l = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
          s = (() => {
      function e(e) {
        let t = e.scrollTop;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollTop), t;
      }function t(e) {
        let t = e.scrollLeft;return "body" === e.tagName.toLowerCase() && (t = t || document.documentElement.scrollLeft), t;
      }function n(e) {
        if (x) return r();P || (P = e), W = e - P, X = Math.min(W / p, 1), X = D(X), s(d, C + M * X, L + N * X), W < p ? window.AFRequestID = window.requestAnimationFrame(n) : r();
      }function r() {
        x || s(d, I, $), P = !1, k && o(S), E && !A && u(j, T), x && g && g(F), h && h(), c.a.off(d, l, Y), setTimeout(() => {
          c.a.on(d, "scroll", A, { passive: !0 });
        }, 100);
      }function s(e, t, n) {
        y && (e.scrollTop = t), w && (e.scrollLeft = n), "body" === e.tagName.toLowerCase() && (y && (document.documentElement.scrollTop = t), w && (document.documentElement.scrollLeft = n));
      }function u(e, t) {
        t.forEach(e => {
          e.classList.remove(O);
        }), e && e.classList.add(O);
      }let f,
          d,
          p,
          v,
          m,
          b,
          h,
          g,
          w,
          y,
          O,
          j,
          S,
          k,
          T,
          E,
          A,
          L,
          $,
          C,
          I,
          N,
          M,
          x,
          F,
          D,
          P,
          W,
          X,
          Y = e => {
        b && (F = e, x = !0);
      };return function (o, r, s = {}) {
        if ("object" == typeof r ? s = r : "number" == typeof r && (s.duration = r), !(f = c.a.$(o))) return console.warn(`[navscroll-js]: Trying to scroll to element "${o}" that is not on the page. Make sure it is set in the DOM.`);const P = Object(i.a)();if (!(d = c.a.$(s.container || P.container))) return console.warn(`[navscroll-js]: Scrolling container "${s.container || P.container}" is not present on the page.`);p = s.duration || P.duration, v = s.easing || P.easing, m = s.offset || P.offset, b = "cancelable" in s ? !1 !== s.cancelable : P.cancelable, h = s.onDone || P.onDone, g = s.onCancel || P.onCancel, w = void 0 === s.scrollX ? P.scrollX : s.scrollX, y = void 0 === s.scrollY ? P.scrollY : s.scrollY, O = void 0 === s.activeClass ? P.activeClass : s.activeClass, j = s.clickedNavItem || P.clickedNavItem, S = j ? j.hash || j.dataset.href : s.hash || P.hash, k = void 0 === s.anchor ? P.anchor : s.anchor, T = s.navItems || P.navItems, E = void 0 === s.alwaysTrack ? P.alwaysTrack : s.alwaysTrack, A = "function" == typeof s.trackingFn ? s.trackingFn : P.trackingFn;let W = c.a.cumulativeOffset(f);return C = e(d), I = W.top - d.offsetTop - m, L = t(d), $ = W.left - d.offsetLeft - m, x = !1, M = I - C, N = $ - L, v = c.a.cubicBezierArrayFrom(v), D = a.a.apply(a.a, v), M || N ? (E || (c.a.off(d, "scroll", A), window.cancelAnimationFrame(window.AFRequestID), u(j, T)), c.a.on(d, l, Y, { passive: !0 }), window.requestAnimationFrame(n), () => {
          F = null, x = !0;
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
    }function c(e, t, a) {
      return 3 * n(t, a) * e * e + 2 * o(t, a) * e + r(t);
    }function i(e, t, n, o, r) {
      var c,
          i,
          l = 0;do {
        (c = a(i = t + (n - t) / 2, o, r) - e) > 0 ? n = i : t = i;
      } while (Math.abs(c) > f && ++l < d);return i;
    }function l(e, t, n, o) {
      for (var r = 0; r < s; ++r) {
        var i = c(t, n, o);if (0 === i) return t;t -= (a(t, n, o) - e) / i;
      }return t;
    }var s = 4,
        u = .001,
        f = 1e-7,
        d = 10,
        p = 11,
        v = 1 / (p - 1),
        m = "function" == typeof Float32Array;e.exports = function (e, t, n, o) {
      function r(t) {
        for (var o = 0, r = 1, a = p - 1; r !== a && s[r] <= t; ++r) o += v;var f = o + (t - s[--r]) / (s[r + 1] - s[r]) * v,
            d = c(f, e, n);return d >= u ? l(t, f, e, n) : 0 === d ? f : i(t, o, o + v, e, n);
      }if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");var s = m ? new Float32Array(p) : new Array(p);if (e !== t || n !== o) for (var f = 0; f < p; ++f) s[f] = a(f * v, e, n);return function (c) {
        return e === t && n === o ? c : 0 === c ? 0 : 1 === c ? 1 : a(r(c), t, o);
      };
    };
  }, function (e, t, n) {
    "use strict";
    t.a = { ease: [.25, .1, .25, 1], linear: [0, 0, 1, 1], "ease-in": [.42, 0, 1, 1], "ease-out": [0, 0, .58, 1], "ease-in-out": [.42, 0, .58, 1] };
  }]);
});

/***/ })
/******/ ]);