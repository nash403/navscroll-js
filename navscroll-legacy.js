(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["navscroll"] = factory();
	else
		root["navscroll"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaults */
/* harmony export (immutable) */ __webpack_exports__["b"] = setDefaults;
/* harmony export (immutable) */ __webpack_exports__["c"] = setLocationHash;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bezier_easing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var abortEvents = [// Events that can cancel the scrollTo fn
"mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];

var defaults = __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */];

function setDefaults(options) {
    defaults = Object.assign({}, defaults, options);
}

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

        timeElapsed < duration ? window.requestAnimationFrame(step) : done();
    }

    function done() {
        if (!abort) topLeft(container, targetY, targetX);
        timeStart = false;

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

        container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaults.container);
        duration = options.duration || defaults.duration;
        easing = options.easing || defaults.easing;
        offset = options.offset || defaults.offset;
        cancelable = options.cancelable !== false;
        onDone = options.onDone || defaults.onDone;
        onCancel = options.onCancel || defaults.onCancel;
        x = options.scrollX === undefined ? defaults.scrollX : options.scrollX;
        y = options.scrollY === undefined ? defaults.scrollY : options.scrollY;

        var cumulativeOffset = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cumulativeOffset(targetElement);

        initialY = scrollTop(container);
        targetY = cumulativeOffset.top - container.offsetTop + offset;

        initialX = scrollLeft(container);
        targetX = cumulativeOffset.left - container.offsetLeft + offset;

        abort = false;

        diffY = targetY - initialY;
        diffX = targetX - initialX;

        easing = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cubicBezierArrayFrom(easing);

        easingFn = __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default.a.apply(__WEBPACK_IMPORTED_MODULE_0_bezier_easing___default.a, easing);

        if (!diffY && !diffX) return;

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
/* unused harmony export VueNavScrollProps */
/* unused harmony export getVueComponentProps */
var defaults = {
  /**
  * The scrollable container.
  * It can be a selector string or the HTML element itself
  *
  * @default 'body'
  * @type {String|HTMLElement}
  */
  container: "body",
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
  * @default "ease"
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
  * @default false
  * @type {Function|Boolean}
  */
  onDone: false,
  /**
  * Callback called when the scroll animation is cancelled.
  *
  * @default false
  * @type {Function|Boolean}
  */
  onCancel: false,
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
  * Class that will be applied in the menu item.
  *
  * @default  'active'
  * @type {String}
  */
  activeClass: 'active',
  /**
  * Enables/disables the scrolling when clicking in a menu item.
  * Disable if you'd like to handle the scrolling by your own.
  *
  * @default true
  * @type {Boolean}
  */
  clickToScroll: true
};

// /**
// * Defines if the plugin should track the section change when
// * clicking an item to scroll to its section. If set to true,
// * it will always keep track and change the active class to the
// * current section while scrolling, if false, the active class
// * will be immediately applied to the clicked menu item, ignoring
// * the passed sections until the scrolling is over.
// *
// * @default false
// * @type {Boolean}
// */
// alwaysTrack: {
//   type: Boolean,
//   default: false,
// },

/* harmony default export */ __webpack_exports__["a"] = (defaults);
var VueNavScrollProps = getVueComponentProps(defaults);

function getVueComponentProps(params) {
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollto_directive__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrollTo__ = __webpack_require__(0);



var install = function install(Vue, options) {
    if (options) Object(__WEBPACK_IMPORTED_MODULE_1__scrollTo__["b" /* setDefaults */])(options);
    Vue.directive("scroll-to", __WEBPACK_IMPORTED_MODULE_0__scrollto_directive__["a" /* default */]);
    Vue.prototype.$scrollTo = __WEBPACK_IMPORTED_MODULE_0__scrollto_directive__["a" /* default */].scrollTo;
};

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = __WEBPACK_IMPORTED_MODULE_0__scrollto_directive__["a" /* default */];
    window.NavScroll.setDefaults = __WEBPACK_IMPORTED_MODULE_1__scrollTo__["b" /* setDefaults */];
    Vue.use(install);
}

__WEBPACK_IMPORTED_MODULE_0__scrollto_directive__["a" /* default */].install = install;
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__scrollto_directive__["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollTo__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_props__ = __webpack_require__(2);




var bindings = []; // store binding data

function deleteBinding(el) {
    for (var i = 0; i < bindings.length; ++i) {
        if (bindings[i].el === el) {
            bindings.splice(i, 1);
            return true;
        }
    }
    return false;
}

function findBinding(el) {
    for (var i = 0; i < bindings.length; ++i) {
        if (bindings[i].el === el) {
            return bindings[i];
        }
    }
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

function handleClick(e) {
    e.preventDefault();

    var options = getBinding(this).binding.value;

    var event = e;
    // element on which the click event was registered
    var targetEl = event.currentTarget;
    // hash of the element it is a `<a>`
    var hash = targetEl.hash;
    // stop propagation or not
    var stop = options.stopPropagation === undefined ? __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */].stopPropagation : options.stopPropagation;
    // keep default behavior of anchor link and update window.location
    var keepHrefDefault = options.anchor === undefined ? __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */].anchor : options.anchor;
    // class to add to clicked element when scrolling is done
    var activeClass = options.activeClass === undefined ? __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */].activeClass : options.activeClass;
    // callback called when scrolling is done
    var userOnDone = options.onDone && typeof options.onDone === "function" ? options.onDone : __WEBPACK_IMPORTED_MODULE_2__default_props__["a" /* default */].onDone;

    if (stop) event.stopPropagation();

    var onDone = keepHrefDefault ? function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["c" /* setLocationHash */])(hash);
        targetEl.classList.add(activeClass);
        if (userOnDone) userOnDone();
    } : userOnDone;

    if (typeof options === "string") {
        return Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options, { onDone: onDone });
    }

    options.onDone = onDone;
    Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options.el || options.element || hash, options);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    // `binding` will be the options object for the scrollTo fn
    bind: function bind(el, binding) {
        getBinding(el).binding = binding;
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(el, "click", handleClick);
    },
    unbind: function unbind(el) {
        deleteBinding(el);
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
    },
    update: function update(el, binding) {
        getBinding(el).binding = binding;
    },

    scrollTo: __WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */],
    bindings: bindings
});

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