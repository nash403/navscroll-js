import NavScroll from "./navscroll";
import { setDefaults } from "./scrollTo";

const install = function(Vue, options) {
    if (options) setDefaults(options);
    Vue.directive("scroll-to", NavScroll);
    Vue.prototype.$scrollTo = NavScroll.scrollTo;
};

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = NavScroll;
    window.NavScroll.setDefaults = setDefaults;
    Vue.use(install);
}

NavScroll.install = install;
export default NavScroll;
