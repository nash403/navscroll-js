import NavScroll from "./navscroll";
import defaults, {setDefaults} from "./default-props";

const install = function(Vue, options) {
    if (options) setDefaults(options);
    Vue.directive("navscroll", NavScroll);
    Vue.prototype.$scrollTo = NavScroll.scrollTo;
};

NavScroll.install = install;

if (typeof window !== "undefined" && window.Vue) {
    window.NavScroll = NavScroll;
    Vue.use(install);
}

export default NavScroll;
