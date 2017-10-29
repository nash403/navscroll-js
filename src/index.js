import NavScroll from "./navscroll";
import defaults, { setDefaults } from "./default-props";

const install = function(Vue, options) {
    if (options) setDefaults(options);
    Vue.directive("scroll-to", NavScroll);
    Vue.prototype.$scrollTo = NavScroll.scrollTo;
};

NavScroll.install = install;
NavScroll.setDefaults = setDefaults;
NavScroll.getDefaults = defaults;

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = NavScroll;
    Vue.use(install);
}

export default NavScroll;
