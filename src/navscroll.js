import scrollTo from "./scrollTo";
import _ from "./utils";
import defaults from "./default-props";

let bindings = []; // store binding data

let navigationItems = [];
let navItemsClassName; // store the class name used to find the navigation items
let observer; // mutation observer that will observe DOM changes
let elementWrapper; // container element that wraps the navigation items

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
    scrollTo(options.el || options.element, options);
}

function onBindOrUpdate(el, binding) {
  getBinding(el).binding = binding;

  const options =  binding.value;
  const defaultOpts = defaults()
  navItemsClassName = binding.arg

  if (navItemsClassName) {
    // wrapper mode: the element directive is the container of the navigation items

    elementWrapper = el
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    // Watch for DOM changes in the element wrapper
    observer = new MutationObserver(initNavItems);
    observer.observe(el, {
        childList: true,
        subtree: true
    });
    initNavItems();
  } else {
    // item mode: the element directive is the navigation item

    if (options.clickToScroll === undefined ? options.clickToScroll : defaultOpts.clickToScroll) {
      _.on(el, "click", handleClick);
    } else {
      _.off(el, "click", handleClick);
    }
  }
}

function initNavItems(DOMMutations) {
  // TODO optimize this fn and only perfom operations based on what changed in the DOMMutations object
  navigationItems.forEach(item => deleteBinding(item))
  navigationItems = Array.prototype.slice.call(elementWrapper.getElementsByClassName(navItemsClassName));

  const wrapperBinding = getBinding(elementWrapper).binding;
  const options = wrapperBinding.value;

  if (options.clickToScroll === undefined ? defaults().clickToScroll : options.clickToScroll) {
    navigationItems.forEach((item) => {
      let binding = Object.assign({}, wrapperBinding)
      binding.value = Object.assign({}, binding.value, {el: item.hash})
      getBinding(item).binding = binding
      _.on(item, 'click', handleClick);
    });
  } else {
    navigationItems.forEach((item) => {
      _.off(item, 'click', handleClick);
    });
  }
}

function onUnbind(el) {
  let binding = getBinding(el).binding
  if (binding.arg) {
    navigationItems.forEach(item => {
      _.off(item, 'click', handleClick)
      deleteBinding(item)
    })
    navigationItems = []
    navItemsClassName = undefined;
    observer = undefined;
    elementWrapper = undefined;
  } else {
    deleteBinding(el);
    _.off(el, "click", handleClick);
  }
}

export default {
    // `binding.value` will be the options object for the scrollTo fn
    bind(el, binding) {
        onBindOrUpdate(el, binding)
    },
    unbind(el) {
        onUnbind(el)
    },
    update(el, binding) {
      onBindOrUpdate(el, binding)
    },
    scrollTo,
    bindings
};
