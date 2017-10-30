!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NavScroll=e():n.NavScroll=e()}(this,function(){return function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=n,e.c=o,e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=2)}([function(n,e,o){"use strict";function t(n){var e={};for(var o in n)!function(o){var t=r(n[o]);e[o]={type:t,default:t===Array||t===Object?function(){return n[o]}:n[o]}}(o);return e}function r(n){switch(function(n){return Object.prototype.toString.call(n).slice(8,-1)}(n)){case"Object":return Object;case"Array":return Array;case"String":return String;case"Number":return Number;case"Boolean":return Boolean;case"RegExp":return RegExp;case"Undefined":case"Null":default:return null}}o.d(e,"c",function(){return a}),e.a=function(n){return i},o.d(e,"b",function(){return c});var i={container:"body",duration:600,easing:"ease",offset:0,onScrollOffsetX:void 0,onScrollOffsetY:void 0,cancelable:!0,onDone:null,onCancel:null,stopPropagation:!0,anchor:!0,hash:null,scrollX:!1,scrollY:!0,clickToScroll:!0,clickedNavItem:null,navItems:[],alwaysTrack:!1,activeClass:"active",itemSelector:".scroll-item"},a=function(n){return i=Object.assign({},i,n)},c=function(n){return t(n?n:i)}},function(n,e,o){"use strict";var t=o(6),r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,i)}catch(n){}e.a={$:function(n){return"string"!=typeof n?n:document.querySelector(n)},on:function(n,e,o){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var i=0;i<e.length;i++)n.addEventListener(e[i],o,!!r&&t)},off:function(n,e,o){e instanceof Array||(e=[e]);for(var t=0;t<e.length;t++)n.removeEventListener(e[t],o)},cumulativeOffset:function(n){var e=0,o=0;do{e+=n.offsetTop||0,o+=n.offsetLeft||0,n=n.offsetParent}while(n);return{top:e,left:o}},cubicBezierArrayFrom:function(n){return Array.isArray(n)?n:"string"==typeof n?t.a[n]?t.a[n]:n.split(","):t.a.ease}}},function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(3),r=o(0),i=function(n,e){e&&Object(r.c)(e),n.directive("navscroll",t.a),n.component("navscroll",t.a),n.prototype.$scrollTo=t.a.scrollTo};t.a.install=i,"undefined"!=typeof window&&window.Vue&&(window.NavScroll=t.a,Vue.use(i)),e.default=t.a},function(n,e,o){"use strict";function t(n,e){var o=void 0,t=Object(m.a)(),r=e||s(S).binding.value,i=p.a.$(r.container||t.container),a=r.onScrollOffsetY||2*Math.round((window.innerHeight||document.documentElement.clientHeight)/3),c=r.onScrollOffsetX||2*Math.round((window.innerWidth||document.documentElement.clientWidth)/3),l=void 0===r.activeClass?t.activeClass:r.activeClass,u=void 0===r.scrollX?t.scrollX:r.scrollX,f=void 0===r.scrollY?t.scrollY:r.scrollY;i&&(h.forEach(function(n){n.classList.remove(l);var e=n.hash?n.hash.substr(1):n.dataset.href,t=document.getElementById(e);if(t){var r=p.a.cumulativeOffset(t);f&&i.scrollTop>=r.top-a&&(o=n),u&&i.scrollLeft>=r.left-c&&(o=n)}}),o!==O&&(O=o),o&&o.classList.add(l))}function r(n,e){s(n).binding=e;var o=e.value,t=Object(m.a)();(g=e.arg)?i(n,g="."+g):(void 0===o.clickToScroll?o.clickToScroll:t.clickToScroll)?p.a.on(n,"click",u):p.a.off(n,"click",u)}function i(n,e,o){var t=s(S=n).binding;!t.arg&&(t.arg=e),o&&(t.value=Object.assign({},o));var r=window.MutationObserver||window.WebKitMutationObserver;(w=new r(c)).observe(n,{childList:!0,subtree:!0}),c(null,n,e)}function a(n){n||(n=s(S).binding.value);var e=p.a.$(n.container||defaultOpts.container);if(!e)return console.warn('[navscroll-js]: Could not attach scroll handler to the container "'+(n.container||defaultOpts.container)+'" because it was not found in the DOM. Make sure it is in the DOM and then attach the `onScroll` handler yourself to it.');s(e).binding.value=n,p.a.on(e,"scroll",t,{passive:!0})}function c(n,e,o){(function(n){return"object"===("undefined"==typeof HTMLElement?"undefined":y(HTMLElement))?n instanceof HTMLElement:n&&"object"===(void 0===n?"undefined":y(n))&&null!==n&&1===n.nodeType&&"string"==typeof n.nodeName})(e)||(e=null);var t=p.a.$(e||S),r=o||g;if(t){h.forEach(function(n){return d(n)}),h=Array.prototype.slice.call(t.querySelectorAll(r));var i=s(t).binding,a=i.value;if(void 0===a.clickToScroll?Object(m.a)().clickToScroll:a.clickToScroll)return h.forEach(function(n){var e=Object.assign({},i);e.value=Object.assign({},e.value,{el:n.hash}),s(n).binding=e,p.a.on(n,"click",u)});h.forEach(function(n){p.a.off(n,"click",u)})}}function l(n){var e=s(n).binding;if(e.arg){h.forEach(function(n){p.a.off(n,"click",u),d(n)}),h=[],g=void 0,w=void 0,S=void 0;var o=p.a.$(e.value.container||defaultOpts.container);if(!o)return;p.a.off(o,"scroll",t)}else d(n),p.a.off(n,"click",u)}function u(n){n.preventDefault();var e=s(this).binding.value,o=Object(m.a)(),r=event.currentTarget,i=void 0===e.stopPropagation?o.stopPropagation:e.stopPropagation,a=e.onDone&&"function"==typeof e.onDone?e.onDone:o.onDone;if(i&&n.stopPropagation(),"string"==typeof e)return Object(v.a)(e,{onDone:a,clickedNavItem:r,navItems:h});e.onDone=a,e.clickedNavItem=r,e.navItems=h,e.trackingFn=t,Object(v.a)(e.el||e.element,e)}function s(n){var e=f(n);return e||(b.push(e={el:n,binding:{}}),e)}function f(n){for(var e=0;e<b.length;++e)if(b[e].el===n)return b[e]}function d(n){for(var e=0;e<b.length;++e)if(b[e].el===n)return b.splice(e,1),!0;return!1}var v=o(4),p=o(1),m=o(0),y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b=[],h=[],g=void 0,w=void 0,S=void 0,O=void 0;e.a={scrollTo:v.a,onScroll:t,initScrollHandler:a,setDefaults:m.c,getDefaults:m.a,setNavigationItems:function(n,e){return c(0,p.a.$(n),e)},utils:p.a,bindings:b,navigationItems:h,bind:function(n,e){r(n,e)},unbind:function(n){l(n)},update:function(n,e){r(n,e)},props:Object(m.b)(),template:'\n    <nav class="navscroll-js">\n      <slot></slot>\n    </nav>\n  ',mounted:function(){i(this.$el,this.itemSelector,this.$props),a(),t()},updated:function(){c(0,p.a.$(this.$el),this.itemSelector)},beforeDestroy:function(){l(this.$el)}}},function(n,e,o){"use strict";function t(n){n&&(window.history.pushState?window.history.pushState(null,null,n):window.location.hash=n)}var r=o(5),i=o.n(r),a=o(1),c=o(0),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],s=function(){function n(n){var e=n.scrollTop;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function e(n){var e=n.scrollLeft;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function o(n){if(x)return r();Y||(Y=n),q=n-Y,H=Math.min(q/p,1),H=X(H),s(v,N+$*H,D+C*H),q<p?window.AFRequestID=window.requestAnimationFrame(o):r()}function r(){x||s(v,I,M),Y=!1,T&&t(k),L&&!A&&f(j,E),x&&g&&g(F),!x&&h&&h(),a.a.off(v,u,P),setTimeout(function(){a.a.on(v,"scroll",A,{passive:!0})},100)}function s(n,e,o){S&&(n.scrollTop=e),w&&(n.scrollLeft=o),"body"===n.tagName.toLowerCase()&&(S&&(document.documentElement.scrollTop=e),w&&(document.documentElement.scrollLeft=o))}function f(n,e){e.forEach(function(n){n.classList.remove(O)}),n&&n.classList.add(O)}var d=void 0,v=void 0,p=void 0,m=void 0,y=void 0,b=void 0,h=void 0,g=void 0,w=void 0,S=void 0,O=void 0,j=void 0,k=void 0,T=void 0,E=void 0,L=void 0,A=void 0,D=void 0,M=void 0,N=void 0,I=void 0,C=void 0,$=void 0,x=void 0,F=void 0,P=function(n){b&&(F=n,x=!0)},X=void 0,Y=void 0,q=void 0,H=void 0;return function(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===r?"undefined":l(r))?s=r:"number"==typeof r&&(s.duration=r),!(d=a.a.$(t)))return console.warn('[navscroll-js]: Trying to scroll to element "'+t+'" that is not on the page. Make sure it is set in the DOM.');var Y=Object(c.a)();if(!(v=a.a.$(s.container||Y.container)))return console.warn('[navscroll-js]: Scrolling container "'+(s.container||Y.container)+'" is not present on the page.');p=s.duration||Y.duration,m=s.easing||Y.easing,y=s.offset||Y.offset,b=!1!==s.cancelable,h=s.onDone||Y.onDone,g=s.onCancel||Y.onCancel,w=void 0===s.scrollX?Y.scrollX:s.scrollX,S=void 0===s.scrollY?Y.scrollY:s.scrollY,O=void 0===s.activeClass?Y.activeClass:s.activeClass,j=s.clickedNavItem||Y.clickedNavItem,k=j?j.hash||j.dataset.href:s.hash||Y.hash,T=void 0===s.anchor?Y.anchor:s.anchor,E=s.navItems||Y.navItems,L=void 0===s.alwaysTrack?Y.alwaysTrack:s.alwaysTrack,A="function"==typeof s.trackingFn?s.trackingFn:Y.trackingFn;var q=a.a.cumulativeOffset(d);return N=n(v),I=q.top-v.offsetTop-y,D=e(v),M=q.left-v.offsetLeft-y,x=!1,$=I-N,C=M-D,m=a.a.cubicBezierArrayFrom(m),X=i.a.apply(i.a,m),$||C?(L||(a.a.off(v,"scroll",A),window.cancelAnimationFrame(window.AFRequestID),f(j,E)),a.a.on(v,u,P,{passive:!0}),window.requestAnimationFrame(o),function(){F=null,x=!0}):void 0}}();e.a=s},function(n,e){function o(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function r(n){return 3*n}function i(n,e,i){return((o(e,i)*n+t(e,i))*n+r(e))*n}function a(n,e,i){return 3*o(e,i)*n*n+2*t(e,i)*n+r(e)}function c(n,e,o,t,r){var a,c,l=0;do{(a=i(c=e+(o-e)/2,t,r)-n)>0?o=c:e=c}while(Math.abs(a)>f&&++l<d);return c}function l(n,e,o,t){for(var r=0;r<u;++r){var c=a(e,o,t);if(0===c)return e;e-=(i(e,o,t)-n)/c}return e}var u=4,s=.001,f=1e-7,d=10,v=11,p=1/(v-1),m="function"==typeof Float32Array;n.exports=function(n,e,o,t){function r(e){for(var t=0,r=1,i=v-1;r!==i&&u[r]<=e;++r)t+=p;var f=t+(e-u[--r])/(u[r+1]-u[r])*p,d=a(f,n,o);return d>=s?l(e,f,n,o):0===d?f:c(e,t,t+p,n,o)}if(!(0<=n&&n<=1&&0<=o&&o<=1))throw new Error("bezier x values must be in [0, 1] range");var u=m?new Float32Array(v):new Array(v);if(n!==e||o!==t)for(var f=0;f<v;++f)u[f]=i(f*p,n,o);return function(a){return n===e&&o===t?a:0===a?0:1===a?1:i(r(a),e,t)}}},function(n,e,o){"use strict";e.a={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}}])});