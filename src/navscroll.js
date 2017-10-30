import scrollTo from "./scrollTo";
import _ from "./utils";
import defaults, {setDefaults} from "./default-props";

let bindings = []; // store binding data

let navigationItems = [];
let navItemsClassName; // store the class name used to find the navigation items
let observer; // mutation observer that will observe DOM changes
let elementWrapper; // element that wraps the navigation items
let lastActiveItem;

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
  onScroll,
  initScrollHandler,
  setDefaults,
  getDefaults: defaults,
  initNavItems,
  utils: _,
  bindings,
  navigationItems,
};

// If the `navItems` option is set it will not be taken into account
// The `navigationItems` variable has to be set prior to a call to onScroll
export function onScroll(event, opts) {
  let currentItem;

  const defaultOpts = defaults();
  const options = opts || getBinding(elementWrapper).binding.value;

  let container = _.$(options.container || defaultOpts.container);
  let offsetY = options.onScrollOffsetY || Math.round((window.innerHeight || document.documentElement.clientHeight) / 3) * 2;
  let offsetX = options.onScrollOffsetX || Math.round((window.innerWidth || document.documentElement.clientWidth) / 3) * 2;
  let activeClass = (options.activeClass === undefined) ? defaultOpts.activeClass : options.activeClass;
  let x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
  let y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;

  if (!container) return ;

  navigationItems.forEach((item) => {
    item.classList.remove(activeClass);

    const targetDiscriminator = item.hash ? item.hash.substr(1) : item.dataset.href
    const targetElement = document.getElementById(targetDiscriminator);
    if (!targetElement) {
      // Return silently if target is not present to avoid polluting the console with warnings
      return ;
    }

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

function initScrollHandler(options) {
  if (!options) options = getBinding(elementWrapper).binding.value
  let container = _.$(options.container || defaultOpts.container);
  if (!container) {
    return console.warn(
      `[navscroll-js]: Could not attach scroll handler to the container "${options.container || defaultOpts.container}" because it was not found in the DOM. Make sure it is in the DOM and then attach the \`onScroll\` handler yourself to it.`
    );
  }
  getBinding(container).binding.value = options
  _.on(container, 'scroll', onScroll, { passive : true })
}

function onBindOrUpdate(el, binding) {
  getBinding(el).binding = binding;

  const options =  binding.value;
  const defaultOpts = defaults()
  navItemsClassName = binding.arg

  if (navItemsClassName) {
    // wrapper mode: the directive's element is an ancestor of the navigation items

    elementWrapper = el
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    // Watch for DOM changes in the element wrapper
    observer = new MutationObserver(initNavItems);
    observer.observe(el, {
        childList: true,
        subtree: true
    });
    initNavItems(null, el, navItemsClassName);

  } else {
    // item mode: the element directive is the navigation item

    if (options.clickToScroll === undefined ? options.clickToScroll : defaultOpts.clickToScroll) {
      _.on(el, "click", handleClick);
    } else {
      _.off(el, "click", handleClick);
    }
  }
}

function initNavItems(DOMMutations, el, itemsClassName) {
  // TODO optimize this fn and only perfom operations based on what changed in the DOMMutations object

  // see https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  function isElement(o){
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  if (!isElement(el)) el = null

  let wrapper = _.$(el || elementWrapper)
  let className = itemsClassName || navItemsClassName

  if (!wrapper) return ;

  navigationItems.forEach(item => deleteBinding(item))
  navigationItems = Array.prototype.slice.call(wrapper.getElementsByClassName(className));

  const wrapperBinding = getBinding(wrapper).binding;
  const options = wrapperBinding.value;

  if (options.clickToScroll === undefined ? defaults().clickToScroll : options.clickToScroll) {
    navigationItems.forEach((item) => {
      let binding = Object.assign({}, wrapperBinding)
      binding.value = Object.assign({}, binding.value, {el: item.hash})
      getBinding(item).binding = binding
      _.on(item, 'click', handleClick);
    });
    return ;
  }
  navigationItems.forEach((item) => {
    _.off(item, 'click', handleClick);
  });
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
    let container = _.$(binding.value.container || defaultOpts.container);
    if (!container) return ;
    _.off(container, 'scroll', onScroll)
  } else {
    deleteBinding(el);
    _.off(el, "click", handleClick);
  }
}

function handleClick(e) {
  e.preventDefault();

  const options = getBinding(this).binding.value;
  const defaultOpts = defaults()

  const clickedElement = event.currentTarget;
  const stop = (options.stopPropagation === undefined) ? defaultOpts.stopPropagation : options.stopPropagation;
  const onDone = (options.onDone && typeof options.onDone === "function") ? options.onDone : defaultOpts.onDone

  if (stop) e.stopPropagation()

  if (typeof options === "string") {
    return scrollTo(options, {onDone, clickedNavItem: clickedElement, navItems: navigationItems });
  }

  options.onDone = onDone
  options.clickedNavItem = clickedElement
  options.navItems = navigationItems
  options.trackingFn = onScroll
  scrollTo(options.el || options.element, options);
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
