import scrollTo, { setLocationHash } from "./scrollTo";
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

    const event = e;
    // element on which the click event was registered
    const targetEl = event.currentTarget;
    // hash of the element it is a `<a>`
    const hash = targetEl.hash;
    // stop propagation or not
    const stop = (options.stopPropagation === undefined) ? defaultOpts.stopPropagation : options.stopPropagation;
    // keep default behavior of anchor link and update window.location
    const keepHrefDefault = (options.anchor === undefined) ? defaultOpts.anchor : options.anchor;
    // class to add to clicked element when scrolling is done
    const activeClass = (options.activeClass === undefined) ? defaultOpts.activeClass : options.activeClass;
    // callback called when scrolling is done
    const userOnDone = (options.onDone && typeof options.onDone === "function") ? options.onDone : defaultOpts.onDone

    if (stop) event.stopPropagation()

    const onDone = keepHrefDefault ? () => {
      setLocationHash(hash)
      targetEl.classList.add(activeClass)
      if (userOnDone) userOnDone()
    } : userOnDone

    if (typeof options === "string") {
      return scrollTo(options, {onDone});
    }

    options.onDone = onDone
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
