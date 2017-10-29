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
  container: 'body',
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
  * - a string with 4 values separated by commas in a cubic bezier format.
  * - a string value among one of the following values:
  *       'ease', 'linear', 'ease-in', 'ease-out' or 'ease-in-out'
  * - an array of 4 values in a cubic bezier format
  *
  * @example ".5,0,.35,1"
  * @default 'ease'
  * @type {String|Array}
  */
  easing: "ease",
  /**
  * Amount of space between top of screen and the section to
  * highlight.
  *
  * @default 0
  * @type {Number}
  */
  offset: 0,
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
  * Callback called when scrolling is finished.
  * Also called when the scroll animation is cancelled.
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
  * Whether to stop the propagation of the click event on a menu item
  *
  * @default true
  * @type {Boolean}
  */
  stopPropagation: true,
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
  * If the `clickedNavItem` option is set and the element has a hash it will have priority
  * to this option.
  *
  * @default null
  * @type {String}
  */
  hash: null,
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
  navItems: [],
  /**
  * Defines whether to track section changes when
  * clicking an item to scroll to its section. If set to true,
  * the scrolling listener will always keep track and change the active class
  * to the current section while scrolling, if false, the scrolling handler provided
  * with the `trackingFn` option will be removed temporarily from the scrolling container
  * and the active class will be immediately applied to the clicked menu item, ignoring
  * the passed sections until the scrolling is over.
  *
  * @default false
  * @type {Boolean}
  */
  alwaysTrack: false,
  /**
  * Scrolling listener on the container that should be removed when
  * the `alwaysTrack` option is set to false.
  *
  * @default null
  * @type {Function}
  */
  trackingFn: null,
  /**
  * Class that will be applied in the menu item.
  *
  * @default  'active'
  * @type {String}
  */
  activeClass: 'active',
  /**
  * Class that will be used to recognize the click-to-scroll navigation items
  *
  * @default  'scroll-item'
  * @type {String}
  */
  itemClass: 'scroll-item'
};

const setDefaults = options => defaults = Object.assign({}, defaults, options);
/* harmony export (immutable) */ __webpack_exports__["b"] = setDefaults;


function getDefaults(options) {
  return defaults;
}

const getVueComponentProps = params => params ? _getVueComponentProps(params) : _getVueComponentProps(defaults);
/* unused harmony export getVueComponentProps */


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
    case 'Object':
      return Object;
    case 'Array':
      return Array;
    case 'String':
      return String;
    case 'Number':
      return Number;
    case 'Boolean':
      return Boolean;
    case 'RegExp':
      return RegExp;
    case 'Undefined':
    case 'Null':
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
            return easing.split(',');
        }
        return __WEBPACK_IMPORTED_MODULE_0__default_easings__["a" /* default */]['ease'];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(5);




new Vue({
  el: '#app',
  directives: {
    'navscroll': __WEBPACK_IMPORTED_MODULE_1__src__["a" /* default */]
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
    resetActiveClass(entryIndex) {
      this.$refs.entries.forEach((e, i) => e.classList.remove(this.activeClass));
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
    if (options) Object(__WEBPACK_IMPORTED_MODULE_1__default_props__["b" /* setDefaults */])(options);
    Vue.directive("scroll-to", __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);
    Vue.prototype.$scrollTo = __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].scrollTo;
};

__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].install = install;
__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].setDefaults = __WEBPACK_IMPORTED_MODULE_1__default_props__["b" /* setDefaults */];
__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].getDefaults = __WEBPACK_IMPORTED_MODULE_1__default_props__["a" /* default */];

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */];
    Vue.use(install);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollTo__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(0);




let bindings = []; // store binding data

let navigationItems = [];
let navItemsClassName; // store the class name used to find the navigation items
let observer; // mutation observer that will observe DOM changes
let elementWrapper; // container element that wraps the navigation items

function deleteBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      bindings.splice(i, 1);
      return true;
    }
  }
  return false;
}

function findBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      return bindings[i];
    }
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

function handleClick(e) {
  e.preventDefault();

  const options = getBinding(this).binding.value;
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();

  const clickedElement = event.currentTarget;
  // stop propagation or not
  const stop = options.stopPropagation === undefined ? defaultOpts.stopPropagation : options.stopPropagation;
  // callback called when scrolling is done
  const onDone = options.onDone && typeof options.onDone === "function" ? options.onDone : defaultOpts.onDone;

  if (stop) e.stopPropagation();

  if (typeof options === "string") {
    return Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options, { onDone, clickedNavItem: clickedElement /* navItems: ... */ });
  }

  options.onDone = onDone;
  options.clickedNavItem = clickedElement;
  // options.navItems = ...
  Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options.el || options.element, options);
}

function onBindOrUpdate(el, binding) {
  getBinding(el).binding = binding;

  const options = binding.value;
  const defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  navItemsClassName = binding.arg;

  if (navItemsClassName) {
    // wrapper mode: the element directive is the container of the navigation items

    elementWrapper = el;
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    // Watch for DOM changes in the element wrapper
    observer = new MutationObserver(initNavItems);
    observer.observe(el, {
      childList: true,
      subtree: true
    });
    initNavItems();
  } else {
    // item mode: the element directive is the navigation item

    if (options.clickToScroll === undefined ? options.clickToScroll : defaultOpts.clickToScroll) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(el, "click", handleClick);
    } else {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
    }
  }
}

function initNavItems(DOMMutations) {
  // TODO optimize this fn and only perfom operations based on what changed in the DOMMutations object
  navigationItems.forEach(item => deleteBinding(item));
  navigationItems = Array.prototype.slice.call(elementWrapper.getElementsByClassName(navItemsClassName));

  const wrapperBinding = getBinding(elementWrapper).binding;
  const options = wrapperBinding.value;

  if (options.clickToScroll === undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])().clickToScroll : options.clickToScroll) {
    navigationItems.forEach(item => {
      let binding = Object.assign({}, wrapperBinding);
      binding.value = Object.assign({}, binding.value, { el: item.hash });
      getBinding(item).binding = binding;
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(item, 'click', handleClick);
    });
  } else {
    navigationItems.forEach(item => {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(item, 'click', handleClick);
    });
  }
}

function onUnbind(el) {
  let binding = getBinding(el).binding;
  if (binding.arg) {
    navigationItems.forEach(item => {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(item, 'click', handleClick);
      deleteBinding(item);
    });
    navigationItems = [];
    navItemsClassName = undefined;
    observer = undefined;
    elementWrapper = undefined;
  } else {
    deleteBinding(el);
    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  // `binding.value` will be the options object for the scrollTo fn
  bind(el, binding) {
    onBindOrUpdate(el, binding);
  },
  unbind(el) {
    onUnbind(el);
  },
  update(el, binding) {
    onBindOrUpdate(el, binding);
  },
  scrollTo: __WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */],
  bindings
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setLocationHash */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bezier_easing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(0);




const abortEvents = [// Events that can cancel the scrollTo fn
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
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(container, 'scroll', trackingFn, { passive: true });
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, abortEvents, abortFn);
        if (abort && onCancel) onCancel(abortEv);
        if (!abort && onDone) onDone();
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
        cancelable = options.cancelable !== false;
        onDone = options.onDone || defaultOpts.onDone;
        onCancel = options.onCancel || defaultOpts.onCancel;
        x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
        y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;
        activeClass = options.activeClass === undefined ? defaultOpts.activeClass : options.activeClass;
        clickedNavItem = options.clickedNavItem || defaultOpts.clickedNavItem;
        hash = clickedNavItem ? clickedNavItem.hash : options.hash || defaultOpts.hash;
        anchor = options.anchor === undefined ? defaultOpts.anchor : options.anchor;
        navItems = options.navItems || defaultOpts.navItems;
        alwaysTrack = options.alwaysTrack === undefined ? defaultOpts.alwaysTrack : options.alwaysTrack;
        trackingFn = typeof options.trackingFn === 'function' ? options.trackingFn : defaultOpts.trackingFn;

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
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, 'scroll', trackingFn);
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
  linear: [0.00, 0.0, 1.00, 1.0],
  "ease-in": [0.42, 0.0, 1.00, 1.0],
  "ease-out": [0.00, 0.0, 0.58, 1.0],
  "ease-in-out": [0.42, 0.0, 0.58, 1.0]
});

/***/ })
/******/ ]);