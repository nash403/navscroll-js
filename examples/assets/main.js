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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaults;
/* unused harmony export _getVueComponentProps */
let defaults = {
  /**
   * The scrollable container.
   * It can be a selector string or the HTML element itself
   *
   * @default 'body'
   * @type {String|HTMLElement}
   */
  container: "body",
  /**
   * Selector that will be used to recognize the navigation items inside the navigation wrapper.
   *
   * @default  'scroll-item'
   * @type {String}
   */
  itemSelector: ".scroll-item",
  /**
   * Class that will be applied to the menu item after the scroll animation.
   *
   * @default  'active'
   * @type {String}
   */
  activeClass: "active",
  /**
   * The target element/selector for the scrollTo method. Only used when registering
   * click handlers on the nav items. If the option is not set, registration will use
   * the href or the dataset.href of the registered nav item.
   * Alias: 'element'
   *
   * @default null
   * @type {String|HTMLElement}
   */
  el: null,
  /**
   * The duration of the scroll animation
   *
   * @default 600
   * @type {Number}
   */
  duration: 600,
  /**
   * Your custom easing value for the click to scroll functionality.
   * It must be:
   * - a string with 4 values separated by commas in a cubic bezier format (ex: '.5,0,.35,1').
   * - a string value among one of the following values:
   *       'ease', 'linear', 'ease-in', 'ease-out' or 'ease-in-out'
   * - an array of 4 values in a cubic bezier format (ex: [0.5, 0, 0.35, 1]).
   *
   * @example ".5,0,.35,1"
   * @default 'ease'
   * @type {String|Array}
   */
  easing: "ease",
  /**
   * Whether to scroll on the X axis
   *
   * @default false
   * @type {Boolean}
   */
  scrollX: false,
  /**
   * Whether to scroll on the Y axis
   *
   * @default true
   * @type {Boolean}
   */
  scrollY: true,
  /**
   * Amount of space between top / left side of screen and the section to
   * highlight.
   *
   * @default 0
   * @type {Number}
   */
  offset: 0,
  /**
   * Threshold amount of space between left side of screen and the section to
   * highlight as the current one (for the onScroll handler).
   *
   * @default (2/3 of the X axis of the screen, calculated each time onScroll is called)
   * @type {Number}
   */
  onScrollOffsetX: undefined,
  /**
   * Threshold amount of space between top side of screen and the section to
   * highlight as the current one (for the onScroll handler).
   *
   * @default (2/3 of the Y axis of the screen, calculated each time onScroll is called)
   * @type {Number}
   */
  onScrollOffsetY: undefined,
  /**
   * Defines whether to track section changes when
   * clicking an item to scroll to its section. If set to true,
   * the scrolling listener will always keep track and change the active class
   * to the current section while scrolling, if false, the scrolling handler will be
   * removed temporarily from the scrolling container and the active class will be
   * immediately applied to the clicked menu item, ignoring the passed sections
   * until the scrolling is over.
   *
   * @default false
   * @type {Boolean}
   */
  alwaysTrack: false,
  /**
   * Allow the scroll animation to be cancelled.
   * In that case, events like 'keyup' or 'touchmove' will cancel the animation
   * and scroll the content immediately to the target.
   *
   * @default 0
   * @type {Boolean}
   */
  cancelable: true,
  /**
   * Whether to stop the propagation of the click event on a menu item
   *
   * @default true
   * @type {Boolean}
   */
  stopPropagation: true,
  /**
   * Callback called when scrolling is finished.
   * Also called when the scroll animation is cancelled (right after the onCancel callback).
   *
   * @default null
   * @type {Function}
   */
  onDone: null,
  /**
   * Callback called when the scroll animation is cancelled.
   *
   * @default null
   * @type {Function}
   */
  onCancel: null,
  /**
   * Whether to update window.location.hash when a link menu item with a href is clicked
   *
   * @default true
   * @type {Boolean}
   */
  anchor: true,
  /**
   * Hash of the target section.
   * It will be applyed to window.location.hash if the `anchor` option is set to true.
   *
   * NOTE: If the clicked item or if the `clickedNavItem` option is set and the element has
   * a href or a data-href attribute, this attribute it will have priority to this option.
   *
   * @default null
   * @type {String}
   */
  hash: null,
  /**
   * Enables/disables the scrolling when clicking in a menu item.
   * Disable if you'd like to handle the scrolling by your own.
   *
   * @default true
   * @type {Boolean}
   */
  clickToScroll: true,
  /**
   * The reference to the navigation element that was clicked to trigger the scroll.
   *
   * @default null
   * @type {HTMLElement}
   */
  clickedNavItem: null,
  /**
   * An array of navigation elements that can be clicked to trigger
   * a scroll to their target section.
   *
   * @default []
   * @type {Array<HTMLElement>}
   */
  navItems: []
};

const setDefaults = options => defaults = Object.assign({}, defaults, options);
/* harmony export (immutable) */ __webpack_exports__["c"] = setDefaults;


function getDefaults(options) {
  return defaults;
}

const getVueComponentProps = params => params ? _getVueComponentProps(params) : _getVueComponentProps(defaults);
/* harmony export (immutable) */ __webpack_exports__["b"] = getVueComponentProps;


function _getVueComponentProps(params) {
  let props = {};
  for (let prop in params) {
    let type = getType(params[prop]);
    props[prop] = {
      type,
      default: type === Array || type === Object ? () => params[prop] : params[prop]
    };
  }
  return props;
}

function getType(value) {
  const type = obj => Object.prototype.toString.call(obj).slice(8, -1);

  switch (type(value)) {
    case "Object":
      return Object;
    case "Array":
      return Array;
    case "String":
      return String;
    case "Number":
      return Number;
    case "Boolean":
      return Boolean;
    case "RegExp":
      return RegExp;
    case "Undefined":
    case "Null":
    default:
      return null;
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_easings__ = __webpack_require__(9);


// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, "passive", {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

/* harmony default export */ __webpack_exports__["a"] = ({
  $(selector) {
    if (typeof selector !== "string") {
      return selector;
    }
    return document.querySelector(selector);
  },
  on(element, events, handler, opts = { passive: false }) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(events[i], handler, supportsPassive ? opts : false);
    }
  },
  off(element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (let i = 0; i < events.length; i++) {
      element.removeEventListener(events[i], handler);
    }
  },
  cumulativeOffset(element) {
    let top = 0;
    let left = 0;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return {
      top: top,
      left: left
    };
  },
  cubicBezierArrayFrom(easing) {
    if (Array.isArray(easing)) return easing;
    if (typeof easing === "string") {
      if (__WEBPACK_IMPORTED_MODULE_0__default_easings__["a" /* default */][easing]) return __WEBPACK_IMPORTED_MODULE_0__default_easings__["a" /* default */][easing];
      return easing.split(",").map(v => +v);
    }
    return __WEBPACK_IMPORTED_MODULE_0__default_easings__["a" /* default */]["ease"];
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(5);




Vue.use(__WEBPACK_IMPORTED_MODULE_1____["a" /* default */]);

let NavigationExample1 = {
  props: ["entries", ...Object.keys(__WEBPACK_IMPORTED_MODULE_1____["a" /* default */].getDefaults())],
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
  props: ["entries", ...Object.keys(__WEBPACK_IMPORTED_MODULE_1____["a" /* default */].getDefaults())],
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
  props: ["entries", ...Object.keys(__WEBPACK_IMPORTED_MODULE_1____["a" /* default */].getDefaults())],
  mounted() {
    __WEBPACK_IMPORTED_MODULE_1____["a" /* default */].initObserver(this.$refs.wrapper, ".item", this.$props);
  },
  updated() {
    __WEBPACK_IMPORTED_MODULE_1____["a" /* default */].initObserver(this.$refs.wrapper, ".item", this.$props);
  },
  beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_1____["a" /* default */].unbindObserver(this.$props);
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
    return "&#" + i.charCodeAt(0) + ";";
  });
}

new Vue({
  el: "#app",
  components: {
    "nav-ex1": NavigationExample1,
    "nav-ex2": NavigationExample2,
    "nav-ex3": NavigationExample3
  },
  data() {
    return {
      sidebar: "nav-ex1",
      entriesArray: Array.from(new Array(4), (_, i) => i),
      container: "#scrollable-content",
      activeClass: "active-position",
      preClass: "",
      codes: {
        "nav-ex1": format(NavigationExample1.template),
        "nav-ex2": format(NavigationExample2.template),
        "nav-ex3": format(NavigationExample3.template)
      },

      alwaysTrack: false,
      duration: 600,
      offset: 60,
      easing: ".5,0,.35,1",
      anchor: false,
      cancelable: true,
      scrollAxis: "y"
    };
  },
  computed: {
    entries() {
      return Array.from(this.entriesArray, (_, i) => i).map(i => `entry-${i}`);
    },

    prop() {
      return {
        entries: this.entries,
        container: "#scrollable-content",
        activeClass: "active-position",
        alwaysTrack: this.alwaysTrack,
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
        anchor: this.anchor,
        cancelable: this.cancelable,
        scrollX: this.scrollAxis === "x",
        scrollY: this.scrollAxis === "y"
      };
    },

    code() {
      return this.codes[this.sidebar];
    }
  },
  methods: {
    toggleOptions(ev) {
      let optionsEl = this.$refs.options;
      optionsEl.classList.toggle("visible");
      optionsEl.style.bottom = "initial";
      optionsEl.style.top = `${ev.srcElement.getBoundingClientRect().top}px`;
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navscroll__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(0);



const install = function install(Vue, options) {
  if (options) Object(__WEBPACK_IMPORTED_MODULE_1__default_props__["c" /* setDefaults */])(options);
  Vue.directive("navscroll", __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);
  Vue.component("navscroll", __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);
  Vue.prototype.$scrollTo = __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].scrollTo;
};

__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].install = install;

if (typeof window !== "undefined" && window.Vue) {
  window.NavScroll = __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */];
  Vue.use(install);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onScroll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollTo__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(0);




let bindings = []; // store binding data

let navigationItems = [];
let navItemsClassName; // store the class name used to find the navigation items
let observer; // mutation observer that will observe DOM changes
let elementWrapper; // element that wraps the navigation items
let lastActiveItem;

/* harmony default export */ __webpack_exports__["a"] = ({
  scrollTo: __WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */],
  onScroll,
  initObserver,
  unbindObserver,
  setDefaults: __WEBPACK_IMPORTED_MODULE_2__default_props__["c" /* setDefaults */],
  getDefaults: __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */],
  bindings,
  utils: __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */],
  navigationWrapper: elementWrapper,
  navigationItems,
  navItemsClassName,
  getVueComponentProps: __WEBPACK_IMPORTED_MODULE_2__default_props__["b" /* getVueComponentProps */],

  /**
   * `v-navscroll` directive definition
   */
  // `binding.value` will be the options object.
  // Presence of the argument tells whether the binded element is a wrapper or a clickable item
  bind(el, binding) {
    bindDirective(el, binding);
  },
  update(el, binding) {
    bindDirective(el, binding);
  },
  unbind(el) {
    onUnbind(el);
  },

  /**
   * `navscroll` component definition. `this.$props` will be the options object.
   */
  props: Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["b" /* getVueComponentProps */])(),
  render(h) {
    return h('nav', {
      class: 'navscroll-js'
    }, this.$slots.default);
  },

  mounted() {
    onBind(this.$el, this.$props, true);
  },
  updated() {
    onBind(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(this.$el), this.$props, true);
  },
  beforeDestroy() {
    onUnbind(this.$el);
  }
});

function bindDirective(el, binding) {
  const options = Object.assign({}, binding.value);
  options.isWrapper = !!binding.arg;
  if (options.isWrapper) options.itemSelector = `.${binding.arg}`;
  onBind(el, options, options.isWrapper);
}

function onBind(el, options, isWrapper) {
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  options.isWrapper = isWrapper;

  if (isWrapper) {
    // wrapper mode
    initObserver(el, options.itemSelector, options);
  } else {
    // item mode
    getBinding(el).binding = options;
    if (options.clickToScroll === undefined ? options.clickToScroll : defaultOpts.clickToScroll) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(el, "click", handleClick);
    } else {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
    }
  }
}

function onUnbind(el) {
  let options = getBinding(el).binding;
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();

  if (options.isWrapper) {
    unbindObserver(options);
  } else {
    unbindElement(el);
  }
}

function initObserver(wrapper, itemSelector, options) {
  let binding;
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();

  elementWrapper = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(wrapper);
  navItemsClassName = itemSelector || defaultOpts.itemSelector;
  if (!elementWrapper) return;

  binding = getBinding(elementWrapper).binding = Object.assign({}, getBinding(elementWrapper).binding, options, { isWrapper: true });

  if (!initScrollContainer(binding)) return;

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  // Watch for DOM changes in the element wrapper
  observer = new MutationObserver(watcher);
  observer.observe(elementWrapper, {
    childList: true,
    subtree: true
  });
  watcher();

  function watcher(DOMMutations) {
    // TODO optimize this fn and only perfom operations based on what changed in the DOMMutations object (see addedNodes & removedNodes properties)

    if (!elementWrapper) return;

    navigationItems.forEach(item => unbindElement(item));
    navigationItems = [].slice.call(elementWrapper.querySelectorAll(navItemsClassName));

    if (binding.clickToScroll === undefined ? defaultOpts.clickToScroll : binding.clickToScroll) {
      navigationItems.forEach(item => {
        let targetEl = binding.el || binding.element || item.hash || item.dataset.href;
        getBinding(item).binding = Object.assign({}, binding, { el: targetEl });
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(item, "click", handleClick);
      });
    } else {
      navigationItems.forEach(item => {
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(item, "click", handleClick);
      });
    }

    onScroll();
  }
}

function initScrollContainer(options) {
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  let container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
  if (!container) {
    return console.warn(`[navscroll-js]: Could not attach scroll handler to the container "${options.container || defaultOpts.container}" because it was not found. Make sure it is in the DOM and then call \`initObserver(wrapper, itemSelector, options)\` yourself with options.container properly set.`);
  }
  getBinding(container).binding = options;
  __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(container, "scroll", onScroll, {
    passive: true
  });
  return true;
}

function handleClick(e) {
  e.preventDefault();

  const options = getBinding(this).binding || {};
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();

  const clickedElement = e.currentTarget;
  const stop = options.stopPropagation === undefined ? defaultOpts.stopPropagation : options.stopPropagation;

  if (stop) e.stopPropagation();

  if (typeof options === "string") {
    return Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options, {
      clickedNavItem: clickedElement,
      navItems: navigationItems
    });
  }

  options.clickedNavItem = clickedElement;
  options.navItems = navigationItems;
  options.trackingFn = onScroll;
  Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options.el || options.element, options);
}

function onScroll(event) {
  let currentItem;

  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  const options = getBinding(elementWrapper).binding;

  let container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
  let offsetY = options.onScrollOffsetY || Math.round((window.innerHeight || document.documentElement.clientHeight) / 3) * 2;
  let offsetX = options.onScrollOffsetX || Math.round((window.innerWidth || document.documentElement.clientWidth) / 3) * 2;
  let activeClass = options.activeClass === undefined ? defaultOpts.activeClass : options.activeClass;
  let x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
  let y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;

  if (!container) return;

  navigationItems.forEach(item => {
    item.classList.remove(activeClass);

    const targetDiscriminator = item.hash ? item.hash.substr(1) : item.dataset.href;
    const targetElement = document.getElementById(targetDiscriminator);
    if (!targetElement) return;

    let cumulativeOffset = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cumulativeOffset(targetElement);
    if (y && container.scrollTop >= cumulativeOffset.top - offsetY) {
      currentItem = item;
    }
    if (x && container.scrollLeft >= cumulativeOffset.left - offsetX) {
      currentItem = item;
    }
  });

  if (currentItem !== lastActiveItem) {
    lastActiveItem = currentItem;
  }

  if (currentItem) currentItem.classList.add(activeClass);
}

function unbindElement(el) {
  deleteBinding(el);
  __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
}

function unbindObserver(options) {
  navigationItems.forEach(item => {
    unbindElement(item);
  });
  navigationItems = [];
  navItemsClassName = undefined;
  deleteBinding(elementWrapper);
  elementWrapper = undefined;
  if (observer) {
    observer.disconnect();
    observer = undefined;
  }
  unbindScrollContainer(options);
}

function unbindScrollContainer(options) {
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  let container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
  if (container) {
    deleteBinding(container);
    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, "scroll", onScroll);
  }
}

function getBinding(el) {
  let binding = findBinding(el);

  if (binding) {
    return binding;
  }

  // register new binding
  bindings.push(binding = {
    el: el,
    binding: {}
  });

  return binding;
}

function findBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      return bindings[i];
    }
  }
}

function deleteBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      bindings.splice(i, 1);
      return true;
    }
  }
  return false;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setLocationHash */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bezier_easing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(0);




const abortEvents = [
// Events that can cancel the scrollTo fn
"mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];

function setLocationHash(hash) {
  if (!hash) return;
  if (window.history.pushState) {
    window.history.pushState(null, null, hash);
  } else {
    window.location.hash = hash;
  }
}

const scroller = () => {
  let targetElement; // element to scroll to
  let container; // container to scroll
  let duration; // duration of the scrolling
  let easing; // easing to be used when scrolling
  let offset; // offset to be added (subtracted)
  let cancelable; // indicates if user can cancel the scroll or not.
  let onDone; // callback when scrolling is done
  let onCancel; // callback when scrolling is canceled / aborted
  let x; // scroll on x axis
  let y; // scroll on y axis
  let activeClass; // class of the current navigation item
  let clickedNavItem; // the navigation item that triggered the scrollTo
  let hash; // hash of the clicked item if it is a link
  let anchor; // whether to update the window.location.hash or not
  let navItems; // the navigation items array including the clicked one
  let alwaysTrack; // whether to keep listening to the scroll event on the container
  let trackingFn; // the scroll event listener on the container

  let initialX; // initial X of container
  let targetX; // target X of container
  let initialY; // initial Y of container
  let targetY; // target Y of container
  let diffX; // difference
  let diffY; // difference

  let abort; // is scrolling aborted

  let abortEv; // event that aborted scrolling
  let abortFn = e => {
    if (!cancelable) return;
    abortEv = e;
    abort = true;
  };
  let easingFn;

  let timeStart; // time when scrolling started
  let timeElapsed; // time elapsed since scrolling started

  let progress; // progress

  function scrollTop(container) {
    let scrollTop = container.scrollTop;

    if (container.tagName.toLowerCase() === "body") {
      // in firefox body.scrollTop always returns 0
      // thus if we are trying to get scrollTop on a body tag
      // we need to get it from the documentElement
      scrollTop = scrollTop || document.documentElement.scrollTop;
    }

    return scrollTop;
  }

  function scrollLeft(container) {
    let scrollLeft = container.scrollLeft;

    if (container.tagName.toLowerCase() === "body") {
      // in firefox body.scrollLeft always returns 0
      // thus if we are trying to get scrollLeft on a body tag
      // we need to get it from the documentElement
      scrollLeft = scrollLeft || document.documentElement.scrollLeft;
    }

    return scrollLeft;
  }

  function step(timestamp) {
    if (abort) return done();
    if (!timeStart) timeStart = timestamp;

    timeElapsed = timestamp - timeStart;

    progress = Math.min(timeElapsed / duration, 1);
    progress = easingFn(progress);

    topLeft(container, initialY + diffY * progress, initialX + diffX * progress);

    timeElapsed < duration ? window.AFRequestID = window.requestAnimationFrame(step) : done();
  }

  function done() {
    if (!abort) topLeft(container, targetY, targetX);
    timeStart = false;

    anchor && setLocationHash(hash);
    if (alwaysTrack && !trackingFn) {
      updateClassName(clickedNavItem, navItems);
    }
    if (abort && onCancel) onCancel(abortEv);
    if (onDone) onDone();
    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, abortEvents, abortFn);
    setTimeout(() => {
      // workaround to avoid the tracking function to be called right after we re-added it to the container
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(container, "scroll", trackingFn, { passive: true });
    }, 100);
  }

  function topLeft(element, top, left) {
    if (y) element.scrollTop = top;
    if (x) element.scrollLeft = left;
    if (element.tagName.toLowerCase() === "body") {
      // in firefox body.scrollTop doesn't scroll the page
      // thus if we are trying to scrollTop on a body tag
      // we need to scroll on the documentElement
      if (y) document.documentElement.scrollTop = top;
      if (x) document.documentElement.scrollLeft = left;
    }
  }

  function updateClassName(element, otherElements) {
    otherElements.forEach(elem => {
      elem.classList.remove(activeClass);
    });
    element && element.classList.add(activeClass);
  }

  function scrollTo(target, _duration, options = {}) {
    if (typeof _duration === "object") {
      options = _duration;
    } else if (typeof _duration === "number") {
      options.duration = _duration;
    }

    targetElement = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(target);

    if (!targetElement) {
      return console.warn(`[navscroll-js]: Trying to scroll to element "${target}" that is not on the page. Make sure it is set in the DOM.`);
    }

    const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
    container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
    if (!container) {
      return console.warn(`[navscroll-js]: Scrolling container "${options.container || defaultOpts.container}" is not present on the page.`);
    }
    duration = options.duration || defaultOpts.duration;
    easing = options.easing || defaultOpts.easing;
    offset = options.offset || defaultOpts.offset;
    cancelable = "cancelable" in options ? options.cancelable !== false : defaultOpts.cancelable;
    onDone = options.onDone || defaultOpts.onDone;
    onCancel = options.onCancel || defaultOpts.onCancel;
    x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
    y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;
    activeClass = options.activeClass === undefined ? defaultOpts.activeClass : options.activeClass;
    clickedNavItem = options.clickedNavItem || defaultOpts.clickedNavItem;
    hash = clickedNavItem ? clickedNavItem.hash || clickedNavItem.dataset.href : options.hash || defaultOpts.hash;
    anchor = options.anchor === undefined ? defaultOpts.anchor : options.anchor;
    navItems = options.navItems || defaultOpts.navItems;
    alwaysTrack = options.alwaysTrack === undefined ? defaultOpts.alwaysTrack : options.alwaysTrack;
    trackingFn = typeof options.trackingFn === "function" ? options.trackingFn : defaultOpts.trackingFn;

    let cumulativeOffset = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cumulativeOffset(targetElement);

    initialY = scrollTop(container);
    targetY = cumulativeOffset.top - container.offsetTop - offset;

    initialX = scrollLeft(container);
    targetX = cumulativeOffset.left - container.offsetLeft - offset;

    abort = false;

    diffY = targetY - initialY;
    diffX = targetX - initialX;

    easing = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cubicBezierArrayFrom(easing);

    easingFn = __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default.a.apply(__WEBPACK_IMPORTED_MODULE_0_bezier_easing___default.a, easing);

    if (!diffY && !diffX) return;

    if (!alwaysTrack) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, "scroll", trackingFn);
      window.cancelAnimationFrame(window.AFRequestID);
      updateClassName(clickedNavItem, navItems);
    }

    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(container, abortEvents, abortFn, { passive: true });

    window.requestAnimationFrame(step);

    return () => {
      abortEv = null;
      abort = true;
    };
  }

  return scrollTo;
};

const _scroller = scroller();
/* harmony default export */ __webpack_exports__["a"] = (_scroller);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  ease: [0.25, 0.1, 0.25, 1.0],
  linear: [0.0, 0.0, 1.0, 1.0],
  "ease-in": [0.42, 0.0, 1.0, 1.0],
  "ease-out": [0.0, 0.0, 0.58, 1.0],
  "ease-in-out": [0.42, 0.0, 0.58, 1.0]
});

/***/ })
/******/ ]);