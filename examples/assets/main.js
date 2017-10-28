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
/******/ 	__webpack_require__.p = "/examples/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_easings__ = __webpack_require__(7);


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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_scrollto_directive__ = __webpack_require__(4);




new Vue({
  el: '#app',
  directives: {
    'scroll-to': __WEBPACK_IMPORTED_MODULE_1__src_scrollto_directive__["a" /* default */]
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
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollTo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);



let bindings = []; // store binding data

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
    let event = e;
    event.preventDefault();
    let options = getBinding(this).binding.value;

    if (options.stopPropagation === undefined) event.stopPropagation();else options.stopPropagation && event.stopPropagation();

    const hrefDefault = options.hrefDefault === undefined ? true : options.hrefDefault;
    const hash = event.currentTarget.hash;
    const targetEl = event.currentTarget;
    const userOnDone = options.onDone && typeof options.onDone === "function" ? options.onDone : false;

    const onDone = !!hrefDefault ? () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["b" /* setLocationHash */])(hash);

        if (options.activeClass !== undefined) {
            targetEl.classList.add(typeof options.activeClass === "string" ? options.activeClass : 'active');
        }

        if (userOnDone) userOnDone();
    } : userOnDone;

    if (typeof options === "string") {
        return Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options, { onDone });
    }
    options.onDone = onDone;
    Object(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(options.el || options.element || event.currentTarget.hash, options);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    // `binding` will be the options object for the scrollTo fn
    bind(el, binding) {
        getBinding(el).binding = binding;
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].on(el, "click", handleClick);
    },
    unbind(el) {
        deleteBinding(el);
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].off(el, "click", handleClick);
    },
    update(el, binding) {
        getBinding(el).binding = binding;
    },
    scrollTo: __WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */],
    bindings
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaults */
/* unused harmony export setDefaults */
/* harmony export (immutable) */ __webpack_exports__["b"] = setLocationHash;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_easing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bezier_easing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);



const abortEvents = [// Events that can cancel the scrollTo fn
"mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];

let defaults = {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    scrollX: false,
    scrollY: true
};

function setDefaults(options) {
    defaults = Object.assign({}, defaults, options);
}

function setLocationHash(hash) {
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

        container = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].$(options.container || defaults.container);
        duration = options.duration || defaults.duration;
        easing = options.easing || defaults.easing;
        offset = options.offset || defaults.offset;
        cancelable = options.cancelable !== false;
        onDone = options.onDone || defaults.onDone;
        onCancel = options.onCancel || defaults.onCancel;
        x = options.scrollX === undefined ? defaults.scrollX : options.scrollX;
        y = options.scrollY === undefined ? defaults.scrollY : options.scrollY;

        let cumulativeOffset = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].cumulativeOffset(targetElement);

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
/* 6 */
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
/* 7 */
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