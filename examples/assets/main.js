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


Vue.use(window.NavScroll);

let NavigationExample1 = {
  props: ['entries', ...Object.keys(NavScroll.getDefaults())],
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
  props: ['entries', ...Object.keys(NavScroll.getDefaults())],
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
  props: ['entries', ...Object.keys(NavScroll.getDefaults())],
  mounted() {
    NavScroll.initObserver(this.$refs.wrapper, '.item', this.$props);
  },
  updated() {
    NavScroll.initObserver(this.$refs.wrapper, '.item', this.$props);
  },
  beforeDestroy() {
    NavScroll.unbindObserver(this.$props);
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

/***/ })
/******/ ]);