'use strict';

// grabbing the class names from the data attributes
var navBar = $('.navbar'),
    data = navBar.data();

// booleans used to tame the scroll event listening a little..
var scrolling = false,
    scrolledPast = false;

// transition Into
function switchInto() {
  // update `scrolledPast` bool
  scrolledPast = true;
  // add/remove CSS classes
  navBar.removeClass(data.startcolor);
  navBar.removeClass(data.startsize);
  navBar.addClass(data.intocolor);
  navBar.addClass(data.intosize);
  console.log('into transition triggered!');
};

// transition Start
function switchStart() {
  // update `scrolledPast` bool
  scrolledPast = false;
  // add/remove CSS classes
  navBar.addClass(data.startcolor);
  navBar.addClass(data.startsize);
  navBar.removeClass(data.intocolor);
  navBar.removeClass(data.intosize);
  console.log('start transition triggered!');
}

// set `scrolling` to true when user scrolls
$(window).scroll(function () {
  return scrolling = true;
});

setInterval(function () {
  // when `scrolling` becomes true...
  if (scrolling) {
    // set it back to false
    scrolling = false;
    // check scroll position
    if ($(window).scrollTop() > 100) {
      // user has scrolled > 100px from top since last check
      if (!scrolledPast) {
        switchInto();
      }
    } else {
      // user has scrolled back <= 100px from top since last check
      if (scrolledPast) {
        switchStart();
      }
    }
  }
  // take a breath.. hold event listener from firing for 100ms
}, 100);