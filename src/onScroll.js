import _ from "./utils";
import defaults from "./default-props";

const scrollHandler = () => {
  let container; // the scrolling container
  let offset; // offset to be added (subtracted)
  let navItems; // the navigation items array including the clicked one
  let activeClass; // class of the current navigation item
  let x; // scroll on x axis
  let y; // scroll on y axis
  let lastActiveItem;

  // See this SO answer
  // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
  // function isElementVisible(el) {
  //   let rect     = el.getBoundingClientRect(),
  //       vWidth   = window.innerWidth || document.documentElement.clientWidth,
  //       vHeight  = window.innerHeight || document.documentElement.clientHeight,
  //       efp      = function (x, y) { return document.elementFromPoint(x, y) };

  //   // Return false if it's not in the viewport
  //   if (rect.right < 0 || rect.bottom < 0
  //           || rect.left > vWidth || rect.top > vHeight)
  //       return false;

  //   // Return true if any of its four corners are visible
  //   return (
  //         el.contains(efp(rect.left,  rect.top))
  //     ||  el.contains(efp(rect.right, rect.top))
  //     ||  el.contains(efp(rect.right, rect.bottom))
  //     ||  el.contains(efp(rect.left,  rect.bottom))
  //   );
  // }

  function onScroll(event, options = {}) {
    let currentItem;
    // let currentItemPos = {};
    let returnValue = null;

    const defaultOpts = defaults();

    container = _.$(options.container || defaultOpts.container);
    offset = options.offset || defaultOpts.offset;
    navItems = options.navItems || defaultOpts.navItems;
    activeClass = (options.activeClass === undefined) ? defaultOpts.activeClass : options.activeClass;
    x = options.scrollX === undefined ? defaultOpts.scrollX : options.scrollX;
    y = options.scrollY === undefined ? defaultOpts.scrollY : options.scrollY;

    if (!container) return ;
    console.log('here', container)

    // const distanceFromTop = window.pageYOffset;
    // const distanceFromLeft = window.pageXOffset;
    // const middleY = Math.round((window.innerHeight || document.documentElement.clientHeight) / 2)
    // const middleX = Math.round((window.innerWidth || document.documentElement.clientWidth) / 2)

    // récup options or default

    navItems.forEach((item) => {
      item.classList.remove(activeClass);

      const targetElement = document.getElementById(item.hash.substr(1));
      if (!targetElement) {
        // Return silently if target is not present to avoid polluting the console with warnings
        return ;
      }
      // const isVisible = isElementVisible(targetElement)

      // if (isVisible) {
        // if (currentItem) {
        //   const targetRect = targetElement.getBoundingClientRect()
        //   const targetTop = targetRect.top
        //   const targetLeft = targetRect.left
        //   const currentItemTop = currentItemPos.top
        //   const currentItemLeft = currentItemPos.left

          // if (y && targetTop < currentItemTop && targetTop < middleY) {
          //   currentItem = targetElement
          //   currentItemPos = {top: targetTop, left: targetLeft}
          // }
          // if (x && targetLeft < currentItemLeft && targetLeft < middleX) {
          //   currentItem = targetElement
          //   currentItemPos = {top: targetTop, left: targetLeft}
          // }
      //   } else {
      //     currentItem = targetElement
      //     currentItemPos = {top: targetTop, left: targetLeft}
      //   }
      // }

      let cumulativeOffset = _.cumulativeOffset(targetElement);

      if (x && container.scrollTop >= cumulativeOffset.top - offset) {
        currentItem = item;
      }
      if (y && container.scrollLeft >= cumulativeOffset.left - offset) {
        currentItem = item;
      }
    });

    if (currentItem !== lastActiveItem) {
      if (lastActiveItem) returnValue = {event, currentItem, lastActiveItem};
      lastActiveItem = currentItem;
    }

    if (currentItem) currentItem.classList.add(activeClass);

    return returnValue
  }

  return onScroll;
};

const _scrollHandler = scrollHandler();
export default _scrollHandler;
