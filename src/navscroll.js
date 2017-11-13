import scrollTo from "./scrollTo";
import _ from "./utils";
import defaults, {
  setDefaults,
  getVueComponentProps
} from "./default-props";

let bindings = []; // store binding data

let navigationItems = [];
let navItemsClassName; // store the class name used to find the navigation items
let observer; // mutation observer that will observe DOM changes
let elementWrapper; // element that wraps the navigation items
let lastActiveItem;

export default {
  scrollTo,
  onScroll,
  initObserver,
  unbindObserver,
  setDefaults,
  getDefaults: defaults,
  bindings,
  utils: _,
  navigationWrapper: elementWrapper,
  navigationItems,
  navItemsClassName,
  getVueComponentProps,

  /**
   * `v-navscroll` directive definition
   */
  // `binding.value` will be the options object.
  // Presence of the argument tells whether the binded element is a wrapper or a clickable item
  bind(el, binding) {
    bindDirective(el, binding)
  },
  update(el, binding) {
    bindDirective(el, binding)
  },
  unbind(el) {
    onUnbind(el)
  },

  /**
   * `navscroll` component definition. `this.$props` will be the options object.
   */
  props: getVueComponentProps(),
  template: `
    <nav class="navscroll-js">
      <slot></slot>
    </nav>
  `,
  mounted() {
    onBind(this.$el, this.$props, true)
  },
  updated() {
    onBind(_.$(this.$el), this.$props, true)
  },
  beforeDestroy() {
    onUnbind(this.$el)
  }
};

function bindDirective(el, binding) {
  const options = Object.assign({}, binding.value)
  options.isWrapper = !!binding.arg
  if (options.isWrapper) options.itemSelector = `.${binding.arg}`
  onBind(el, options, options.isWrapper)
}

function onBind(el, options, isWrapper) {
  const defaultOpts = defaults()
  options.isWrapper = isWrapper;

  if (isWrapper) {
    // wrapper mode
    initObserver(el, options.itemSelector, options)
  } else {
    // item mode
    getBinding(el).binding = options;
    if (options.clickToScroll === undefined ? options.clickToScroll : defaultOpts.clickToScroll) {
      _.on(el, "click", handleClick);
    } else {
      _.off(el, "click", handleClick);
    }
  }
}

function onUnbind(el) {
  let options = getBinding(el).binding
  const defaultOpts = defaults();

  if (options.isWrapper) {
    unbindObserver(options)
  } else {
    unbindElement(el);
  }
}

function initObserver(wrapper, itemSelector, options) {
  let binding;
  const defaultOpts = defaults();

  elementWrapper = _.$(wrapper)
  navItemsClassName = itemSelector || defaultOpts.itemSelector;
  if (!elementWrapper) return;

  binding = getBinding(elementWrapper).binding = Object.assign({},
    getBinding(elementWrapper).binding,
    options,
    {isWrapper:true}
  );

  if (!initScrollContainer(binding)) return ;

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  // Watch for DOM changes in the element wrapper
  observer = new MutationObserver(watcher);
  observer.observe(elementWrapper, {
    childList: true,
    subtree: true
  });
  watcher();


  function watcher(DOMMutations) {
    // TODO optimize this fn and only perfom operations based on what changed in the DOMMutations object (see addedNodes & removedNodes properties)

    if (!elementWrapper) return;

    navigationItems.forEach(item => unbindElement(item))
    navigationItems = [].slice.call(elementWrapper.querySelectorAll(navItemsClassName));

    if (binding.clickToScroll === undefined ? defaultOpts.clickToScroll : binding.clickToScroll) {
      navigationItems.forEach((item) => {
        let targetEl = binding.el || binding.element || item.hash || item.dataset.href;
        getBinding(item).binding =  Object.assign({}, binding, { el: targetEl })
        _.on(item, 'click', handleClick);
      });
    } else {
      navigationItems.forEach((item) => {
        _.off(item, 'click', handleClick);
      });
    }

    onScroll()
  }
}

function initScrollContainer(options) {
  const defaultOpts = defaults();
  let container = _.$(options.container || defaultOpts.container);
  if (!container) {
    return console.warn(
      `[navscroll-js]: Could not attach scroll handler to the container "${options.container || defaultOpts.container}" because it was not found. Make sure it is in the DOM and then call \`initObserver(wrapper, itemSelector, options)\` yourself with options.container properly set.`
    );
  }
  getBinding(container).binding = options
  _.on(container, 'scroll', onScroll, {
    passive: true
  })
  return true;
}

function handleClick(e) {
  e.preventDefault();

  const options = getBinding(this).binding || {};
  const defaultOpts = defaults()

  const clickedElement = event.currentTarget;
  const stop = (options.stopPropagation === undefined) ? defaultOpts.stopPropagation : options.stopPropagation;

  if (stop) e.stopPropagation()

  if (typeof options === "string") {
    return scrollTo(options, {
      clickedNavItem: clickedElement,
      navItems: navigationItems
    });
  }

  options.clickedNavItem = clickedElement
  options.navItems = navigationItems
  options.trackingFn = onScroll
  scrollTo(options.el || options.element, options);
}

export function onScroll(event) {
  let currentItem;

  const defaultOpts = defaults();
  const options = getBinding(elementWrapper).binding;

  let container = _.$(options.container || defaultOpts.container);
  let offsetY = options.onScrollOffsetY || Math.round((window.innerHeight || document.documentElement.clientHeight) / 3) * 2;
  let offsetX = options.onScrollOffsetX || Math.round((window.innerWidth || document.documentElement.clientWidth) / 3) * 2;
  let activeClass = (options.activeClass === undefined) ? defaultOpts.activeClass : options.activeClass;
  let x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
  let y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;

  if (!container) return;

  navigationItems.forEach((item) => {
    item.classList.remove(activeClass);

    const targetDiscriminator = item.hash ? item.hash.substr(1) : item.dataset.href
    const targetElement = document.getElementById(targetDiscriminator);
    if (!targetElement) return;

    let cumulativeOffset = _.cumulativeOffset(targetElement);
    if (y && container.scrollTop >= cumulativeOffset.top - offsetY) {
      currentItem = item;
    }
    if (x && container.scrollLeft >= cumulativeOffset.left - offsetX) {
      currentItem = item;
    }
  });

  if (currentItem !== lastActiveItem) {
    lastActiveItem = currentItem;
  }

  if (currentItem) currentItem.classList.add(activeClass);
}

function unbindElement(el) {
  deleteBinding(el);
  _.off(el, "click", handleClick);
}

function unbindObserver(options) {
  navigationItems.forEach(item => {
    unbindElement(item)
  })
  navigationItems = []
  navItemsClassName = undefined;
  deleteBinding(elementWrapper)
  elementWrapper = undefined;
  if (observer) {
    observer.disconnect()
    observer = undefined;
  }
  unbindScrollContainer(options)
}

function unbindScrollContainer(options) {
  const defaultOpts = defaults();
  let container = _.$(options.container || defaultOpts.container);
  if (container) {
    deleteBinding(container);
    _.off(container, 'scroll', onScroll)
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

function findBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      return bindings[i];
    }
  }
}

function deleteBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      bindings.splice(i, 1);
      return true;
    }
  }
  return false;
}
