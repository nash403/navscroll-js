(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NavScroll"] = factory();
	else
		root["NavScroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setDefaults; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaults;
/* unused harmony export getVueComponentProps */
/* unused harmony export _getVueComponentProps */
var defaults = {
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
  * Amount of space between top / left side of screen and the section to
  * highlight.
  *
  * @default 0
  * @type {Number}
  */
  offset: 0,
  /**
  * Threshold amount of space between left side of screen and the section to
  * highlight (for the onScroll handler) from which the section will be marked as the current one.
  *
  * @default (2/3 of the X axis of the screen, calculated each time onScroll is called)
  * @type {Number}
  */
  onScrollOffsetX: undefined,
  /**
  * Threshold amount of space between top side of screen and the section to
  * highlight (for the onScroll handler) from which the section will be marked as the current one.
  *
  * @default (2/3 of the Y axis of the screen, calculated each time onScroll is called)
  * @type {Number}
  */
  onScrollOffsetY: undefined,
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

var setDefaults = function setDefaults(options) {
  return defaults = Object.assign({}, defaults, options);
};

function getDefaults(options) {
  return defaults;
}

var getVueComponentProps = function getVueComponentProps(params) {
  return params ? _getVueComponentProps(params) : _getVueComponentProps(defaults);
};

function _getVueComponentProps(params) {
  var props = {};

  var _loop = function _loop(prop) {
    var type = getType(params[prop]);
    props[prop] = {
      type: type,
      default: type === Array || type === Object ? function () {
        return params[prop];
      } : params[prop]
    };
  };

  for (var prop in params) {
    _loop(prop);
  }
  return props;
}

function getType(value) {
  var type = function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
  };

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_easings__ = __webpack_require__(6);


// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {}

/* harmony default export */ __webpack_exports__["a"] = ({
    $: function $(selector) {
        if (typeof selector !== "string") {
            return selector;
        }
        return document.querySelector(selector);
    },
    on: function on(element, events, handler) {
        var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { passive: false };

        if (!(events instanceof Array)) {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            element.addEventListener(events[i], handler, supportsPassive ? opts : false);
        }
    },
    off: function off(element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            element.removeEventListener(events[i], handler);
        }
    },
    cumulativeOffset: function cumulativeOffset(element) {
        var top = 0;
        var left = 0;

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
    cubicBezierArrayFrom: function cubicBezierArrayFrom(easing) {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navscroll__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(0);



var install = function install(Vue, options) {
    if (options) Object(__WEBPACK_IMPORTED_MODULE_1__default_props__["b" /* setDefaults */])(options);
    Vue.directive("navscroll", __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);
    Vue.prototype.$scrollTo = __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].scrollTo;
};

__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */].install = install;

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = __WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */];
    Vue.use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__navscroll__["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onScroll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollTo__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var bindings = []; // store binding data

var navigationItems = [];
var navItemsClassName = void 0; // store the class name used to find the navigation items
var observer = void 0; // mutation observer that will observe DOM changes
var elementWrapper = void 0; // element that wraps the navigation items
var lastActiveItem = void 0;

/* harmony default export */ __webpack_exports__["a"] = ({
  // `binding.value` will be the options object for the scrollTo fn
  bind: function bind(el, binding) {
    onBindOrUpdate(el, binding);
  },
  unbind: function unbind(el) {
    onUnbind(el);
  },
  update: function update(el, binding) {
    onBindOrUpdate(el, binding);
  },

  scrollTo: __WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */],
  onScroll: onScroll,
  initScrollHandler: initScrollHandler,
  setDefaults: __WEBPACK_IMPORTED_MODULE_2__default_props__["b" /* setDefaults */],
  getDefaults: __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */],
  initNavItems: initNavItems,
  utils: __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */],
  bindings: bindings,
  navigationItems: navigationItems
});

// If the `navItems` option is set it will not be taken into account
// The `navigationItems` variable has to be set prior to a call to onScroll
function onScroll(event, opts) {
  var currentItem = void 0;

  var defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  var options = opts || getBinding(elementWrapper).binding.value;

  var container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
  var offsetY = options.onScrollOffsetY || Math.round((window.innerHeight || document.documentElement.clientHeight) / 3) * 2;
  var offsetX = options.onScrollOffsetX || Math.round((window.innerWidth || document.documentElement.clientWidth) / 3) * 2;
  var activeClass = options.activeClass === undefined ? defaultOpts.activeClass : options.activeClass;
  var x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
  var y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;

  if (!container) return;

  navigationItems.forEach(function (item) {
    item.classList.remove(activeClass);

    var targetDiscriminator = item.hash ? item.hash.substr(1) : item.dataset.href;
    var targetElement = document.getElementById(targetDiscriminator);
    if (!targetElement) {
      // Return silently if target is not present to avoid polluting the console with warnings
      return;
    }

    var cumulativeOffset = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cumulativeOffset(targetElement);
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

function initScrollHandler(options) {
  if (!options) options = getBinding(elementWrapper).binding.value;
  var container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
  if (!container) {
    return console.warn("[navscroll-js]: Could not attach scroll handler to the container \"" + (options.container || defaultOpts.container) + "\" because it was not found in the DOM. Make sure it is in the DOM and then attach the `onScroll` handler yourself to it.");
  }
  getBinding(container).binding.value = options;
  __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(container, 'scroll', onScroll, { passive: true });
}

function onBindOrUpdate(el, binding) {
  getBinding(el).binding = binding;

  var options = binding.value;
  var defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
  navItemsClassName = binding.arg;

  if (navItemsClassName) {
    // wrapper mode: the directive's element is an ancestor of the navigation items

    elementWrapper = el;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    // Watch for DOM changes in the element wrapper
    observer = new MutationObserver(initNavItems);
    observer.observe(el, {
      childList: true,
      subtree: true
    });
    initNavItems(null, el, navItemsClassName);
  } else {
    // item mode: the element directive is the navigation item

    if (options.clickToScroll === undefined ? options.clickToScroll : defaultOpts.clickToScroll) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(el, "click", handleClick);
    } else {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
    }
  }
}

function initNavItems(DOMMutations, el, itemsClassName) {
  // TODO optimize this fn and only perfom operations based on what changed in the DOMMutations object

  // see https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  function isElement(o) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
    o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
  }

  if (!isElement(el)) el = null;

  var wrapper = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(el || elementWrapper);
  var className = itemsClassName || navItemsClassName;

  if (!wrapper) return;

  navigationItems.forEach(function (item) {
    return deleteBinding(item);
  });
  navigationItems = Array.prototype.slice.call(wrapper.getElementsByClassName(className));

  var wrapperBinding = getBinding(wrapper).binding;
  var options = wrapperBinding.value;

  if (options.clickToScroll === undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])().clickToScroll : options.clickToScroll) {
    navigationItems.forEach(function (item) {
      var binding = Object.assign({}, wrapperBinding);
      binding.value = Object.assign({}, binding.value, { el: item.hash });
      getBinding(item).binding = binding;
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(item, 'click', handleClick);
    });
    return;
  }
  navigationItems.forEach(function (item) {
    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(item, 'click', handleClick);
  });
}

function onUnbind(el) {
  var binding = getBinding(el).binding;
  if (binding.arg) {
    navigationItems.forEach(function (item) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(item, 'click', handleClick);
      deleteBinding(item);
    });
    navigationItems = [];
    navItemsClassName = undefined;
    observer = undefined;
    elementWrapper = undefined;
    var container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(binding.value.container || defaultOpts.container);
    if (!container) return;
    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, 'scroll', onScroll);
  } else {
    deleteBinding(el);
    __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
  }
}

function handleClick(e) {
  e.preventDefault();

  var options = getBinding(this).binding.value;
  var defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();

  var clickedElement = event.currentTarget;
  var stop = options.stopPropagation === undefined ? defaultOpts.stopPropagation : options.stopPropagation;
  var onDone = options.onDone && typeof options.onDone === "function" ? options.onDone : defaultOpts.onDone;

  if (stop) e.stopPropagation();

  if (typeof options === "string") {
    return Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options, { onDone: onDone, clickedNavItem: clickedElement, navItems: navigationItems });
  }

  options.onDone = onDone;
  options.clickedNavItem = clickedElement;
  options.navItems = navigationItems;
  options.trackingFn = onScroll;
  Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options.el || options.element, options);
}

function getBinding(el) {
  var binding = findBinding(el);

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
  for (var i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      return bindings[i];
    }
  }
}

function deleteBinding(el) {
  for (var i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      bindings.splice(i, 1);
      return true;
    }
  }
  return false;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setLocationHash */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bezier_easing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var abortEvents = [// Events that can cancel the scrollTo fn
"mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];

function setLocationHash(hash) {
    if (!hash) return;
    if (window.history.pushState) {
        window.history.pushState(null, null, hash);
    } else {
        window.location.hash = hash;
    }
}

var scroller = function scroller() {
    var targetElement = void 0; // element to scroll to
    var container = void 0; // container to scroll
    var duration = void 0; // duration of the scrolling
    var easing = void 0; // easing to be used when scrolling
    var offset = void 0; // offset to be added (subtracted)
    var cancelable = void 0; // indicates if user can cancel the scroll or not.
    var onDone = void 0; // callback when scrolling is done
    var onCancel = void 0; // callback when scrolling is canceled / aborted
    var x = void 0; // scroll on x axis
    var y = void 0; // scroll on y axis
    var activeClass = void 0; // class of the current navigation item
    var clickedNavItem = void 0; // the navigation item that triggered the scrollTo
    var hash = void 0; // hash of the clicked item if it is a link
    var anchor = void 0; // whether to update the window.location.hash or not
    var navItems = void 0; // the navigation items array including the clicked one
    var alwaysTrack = void 0; // whether to keep listening to the scroll event on the container
    var trackingFn = void 0; // the scroll event listener on the container

    var initialX = void 0; // initial X of container
    var targetX = void 0; // target X of container
    var initialY = void 0; // initial Y of container
    var targetY = void 0; // target Y of container
    var diffX = void 0; // difference
    var diffY = void 0; // difference

    var abort = void 0; // is scrolling aborted

    var abortEv = void 0; // event that aborted scrolling
    var abortFn = function abortFn(e) {
        if (!cancelable) return;
        abortEv = e;
        abort = true;
    };
    var easingFn = void 0;

    var timeStart = void 0; // time when scrolling started
    var timeElapsed = void 0; // time elapsed since scrolling started

    var progress = void 0; // progress

    function scrollTop(container) {
        var scrollTop = container.scrollTop;

        if (container.tagName.toLowerCase() === "body") {
            // in firefox body.scrollTop always returns 0
            // thus if we are trying to get scrollTop on a body tag
            // we need to get it from the documentElement
            scrollTop = scrollTop || document.documentElement.scrollTop;
        }

        return scrollTop;
    }

    function scrollLeft(container) {
        var scrollLeft = container.scrollLeft;

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
        if (!abort && onDone) onDone();
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(container, abortEvents, abortFn);
        setTimeout(function () {
            // workaround to avoid the tracking function to be called right after we re-added it to the container
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(container, 'scroll', trackingFn, { passive: true });
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
        otherElements.forEach(function (elem) {
            elem.classList.remove(activeClass);
        });
        element && element.classList.add(activeClass);
    }

    function scrollTo(target, _duration) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if ((typeof _duration === "undefined" ? "undefined" : _typeof(_duration)) === "object") {
            options = _duration;
        } else if (typeof _duration === "number") {
            options.duration = _duration;
        }

        targetElement = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(target);

        if (!targetElement) {
            return console.warn("[navscroll-js]: Trying to scroll to element \"" + target + "\" that is not on the page. Make sure it is set in the DOM.");
        }

        var defaultOpts = Object(__WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */])();
        container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaultOpts.container);
        if (!container) {
            return console.warn("[navscroll-js]: Scrolling container \"" + (options.container || defaultOpts.container) + "\" is not present on the page.");
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
        hash = clickedNavItem ? clickedNavItem.hash || clickedNavItem.dataset.href : options.hash || defaultOpts.hash;
        anchor = options.anchor === undefined ? defaultOpts.anchor : options.anchor;
        navItems = options.navItems || defaultOpts.navItems;
        alwaysTrack = options.alwaysTrack === undefined ? defaultOpts.alwaysTrack : options.alwaysTrack;
        trackingFn = typeof options.trackingFn === 'function' ? options.trackingFn : defaultOpts.trackingFn;

        var cumulativeOffset = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cumulativeOffset(targetElement);

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

        return function () {
            abortEv = null;
            abort = true;
        };
    }

    return scrollTo;
};

var _scroller = scroller();
/* harmony default export */ __webpack_exports__["a"] = (_scroller);

/***/ }),
/* 5 */
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

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
  return 3.0 * aA1;
}

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;
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

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
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

module.exports = function bezier(mX1, mY1, mX2, mY2) {
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

  function getTForX(aX) {
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

  return function BezierEasing(x) {
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
/* 6 */
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
});