import scrollTo, { setLocationHash } from "./scrollTo";
import _ from "./utils";

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
    let event = e
    event.preventDefault();
    let options = getBinding(this).binding.value;

    if (options.stopPropagation === undefined) event.stopPropagation()
    else options.stopPropagation && event.stopPropagation()


    const hrefDefault = options.hrefDefault === undefined ? true : options.hrefDefault
    const onDone = hrefDefault ? () => {
      setLocationHash(event.currentTarget.hash)
    } : false

    if (typeof options === "string") {
      return scrollTo(options, {onDone});
    }
    options.onDone = onDone
    scrollTo(options.el || options.element || event.currentTarget.hash, options);
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
