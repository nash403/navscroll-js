import scrollTo from "./scrollTo";
import _ from "./utils";
import defaults from "./default-props";

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
    bindings.push(
        binding = {
            el: el,
            binding: {}
        }
    );

    return binding;
}

function handleClick(e) {
    e.preventDefault();

    const options = getBinding(this).binding.value;
    const defaultOpts = defaults()

    const clickedElement = event.currentTarget;
    // stop propagation or not
    const stop = (options.stopPropagation === undefined) ? defaultOpts.stopPropagation : options.stopPropagation;
    // callback called when scrolling is done
    const onDone = (options.onDone && typeof options.onDone === "function") ? options.onDone : defaultOpts.onDone

    if (stop) e.stopPropagation()

    if (typeof options === "string") {
      return scrollTo(options, {onDone, clickedNavItem: clickedElement, /* navItems: ... */ });
    }

    options.onDone = onDone
    options.clickedNavItem = clickedElement
    // options.navItems = ...
    scrollTo(options.el || options.element || hash, options);
}

export default {
    // `binding` will be the options object for the scrollTo fn
    bind(el, binding) {
        getBinding(el).binding = binding;
        _.on(el, "click", handleClick);
    },
    unbind(el) {
        deleteBinding(el);
        _.off(el, "click", handleClick);
    },
    update(el, binding) {
        getBinding(el).binding = binding;
    },
    scrollTo,
    bindings
};
