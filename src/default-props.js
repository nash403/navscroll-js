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
  * Amount of space between top of screen and the section to
  * highlight.
  *
  * @default 0
  * @type {Number}
  */
  offset: 0,
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
  * Also called when the scroll animation is cancelled.
  *
  * @default false
  * @type {Function|Boolean}
  */
  onDone: false,
  /**
  * Callback called when the scroll animation is cancelled.
  *
  * @default false
  * @type {Function|Boolean}
  */
  onCancel: false,
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
  * Class that will be applied in the menu item.
  *
  * @default  'active'
  * @type {String}
  */
  activeClass: 'active',
  /**
  * Class that will be used to recognize the click-to-scroll navigation items
  *
  * @default  'scroll-item'
  * @type {String}
  */
  itemClass: 'scroll-item',
};

// /**
// * Defines if the plugin should track the section change when
// * clicking an item to scroll to its section. If set to true,
// * it will always keep track and change the active class to the
// * current section while scrolling, if false, the active class
// * will be immediately applied to the clicked menu item, ignoring
// * the passed sections until the scrolling is over.
// *
// * @default false
// * @type {Boolean}
// */
// alwaysTrack: {
//   type: Boolean,
//   default: false,
// },


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
