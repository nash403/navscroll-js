import NavScroll from "./navscroll";
import defaults from "./default-props";

const install = function(Vue, options) {
    if (options) setDefaults(options);
    Vue.directive("scroll-to", NavScroll);
    Vue.prototype.$scrollTo = NavScroll.scrollTo;
};

NavScroll.install = install;

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = NavScroll;
    Vue.use(install);
}

export default NavScroll;
