let defaults = {
  /**
  * The scrollable container.
  * It can be a selector string or the HTML element itself
  *
  * @default 'body'
  * @type {String|HTMLElement}
  */
  container: 'body',
  /**
  * The duration of the scroll animation
  *
  * @default 600
  * @type {Number}
  */
  duration: 600,
  /**
  * Your custom easing value for the click to scroll functionality.
  * It must be:
  * - a string with 4 values separated by commas in a cubic bezier format.
  * - a string value among one of the following values:
  *       'ease', 'linear', 'ease-in', 'ease-out' or 'ease-in-out'
  * - an array of 4 values in a cubic bezier format
  *
  * @example ".5,0,.35,1"
  * @default 'ease'
  * @type {String|Array}
  */
  easing: "ease",
  /**
  * Amount of space between top / left side of screen and the section to
  * highlight.
  *
  * @default 0
  * @type {Number}
  */
  offset: 0,
  /**
  * Threshold amount of space between left side of screen and the section to
  * highlight as the current one (for the onScroll handler).
  *
  * @default (2/3 of the X axis of the screen, calculated each time onScroll is called)
  * @type {Number}
  */
  onScrollOffsetX: undefined,
  /**
  * Threshold amount of space between top side of screen and the section to
  * highlight as the current one (for the onScroll handler).
  *
  * @default (2/3 of the Y axis of the screen, calculated each time onScroll is called)
  * @type {Number}
  */
  onScrollOffsetY: undefined,
  /**
  * Allow the scroll animation to be cancelled.
  * In that case, events like 'keyup' or 'touchmove' will cancel the animation
  * and scroll the content immediately to the target.
  *
  * @default 0
  * @type {Boolean}
  */
  cancelable: true,
  /**
  * Callback called when scrolling is finished.
  * Also called when the scroll animation is cancelled (right after the onCancel callback).
  *
  * @default null
  * @type {Function}
  */
  onDone: null,
  /**
  * Callback called when the scroll animation is cancelled.
  *
  * @default null
  * @type {Function}
  */
  onCancel: null,
  /**
  * Whether to stop the propagation of the click event on a menu item
  *
  * @default true
  * @type {Boolean}
  */
  stopPropagation: true,
  /**
  * Whether to update window.location.hash when a link menu item with a href is clicked
  *
  * @default true
  * @type {Boolean}
  */
  anchor: true,
  /**
  * Hash of the target section.
  * It will be applyed to window.location.hash if the `anchor` option is set to true.
  *
  * NOTE: If the clicked item or if the `clickedNavItem` option is set and the element has
  * a href or a data-href attribute, this attribute it will have priority to this option.
  *
  * @default null
  * @type {String}
  */
  hash: null,
  /**
  * Whether to scroll on the X axis
  *
  * @default false
  * @type {Boolean}
  */
  scrollX: false,
  /**
  * Whether to scroll on the Y axis
  *
  * @default true
  * @type {Boolean}
  */
  scrollY: true,
  /**
  * Enables/disables the scrolling when clicking in a menu item.
  * Disable if you'd like to handle the scrolling by your own.
  *
  * @default true
  * @type {Boolean}
  */
  clickToScroll: true,
  /**
  * The reference to the navigation element that was clicked to trigger the scroll.
  *
  * @default null
  * @type {HTMLElement}
  */
  clickedNavItem: null,
  /**
  * An array of navigation elements that can be clicked to trigger
  * a scroll to their target section.
  *
  * @default []
  * @type {Array<HTMLElement>}
  */
  navItems: [],
  /**
  * Defines whether to track section changes when
  * clicking an item to scroll to its section. If set to true,
  * the scrolling listener will always keep track and change the active class
  * to the current section while scrolling, if false, the scrolling handler will be
  * removed temporarily from the scrolling container and the active class will be
  * immediately applied to the clicked menu item, ignoring the passed sections
  * until the scrolling is over.
  *
  * @default false
  * @type {Boolean}
  */
  alwaysTrack: false,
  /**
  * Class that will be applied to the menu item after the scroll animation.
  *
  * @default  'active'
  * @type {String}
  */
  activeClass: 'active',
  /**
  * Selector that will be used to recognize the navigation items inside the navigation wrapper.
  *
  * @default  'scroll-item'
  * @type {String}
  */
  itemSelector: '.scroll-item',
};


export const setDefaults = (options) => defaults = Object.assign({}, defaults, options);

export default function getDefaults(options) { return defaults; }

export const getVueComponentProps = (params) => params ? _getVueComponentProps(params) : _getVueComponentProps(defaults)

export function _getVueComponentProps(params) {
  let props = {}
  for (let prop in params) {
    let type = getType(params[prop]);
    props[prop] = {
      type,
      default: (type === Array || type === Object) ? () => params[prop] : params[prop]
    }
  }
  return props
}

function getType(value) {
  const type = (obj) => Object.prototype.toString.call(obj).slice(8, -1);

  switch (type(value)) {
    case 'Object':
      return Object;
    case 'Array':
      return Array;
    case 'String':
      return String;
    case 'Number':
      return Number;
    case 'Boolean':
      return Boolean;
    case 'RegExp':
      return RegExp;
    case 'Undefined':
    case 'Null':
    default:
      return null
  }
}
