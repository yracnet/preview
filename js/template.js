(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);

const onScroll = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const otNavbar = document.querySelector('.ot-navbar');
  console.log('scrollTop:', scrollTop);
  if (scrollTop > 5) {
    otNavbar.classList.add('ot-light');
    otNavbar.classList.remove('ot-dark');
  } else {
    otNavbar.classList.remove('ot-light');
    otNavbar.classList.add('ot-dark');
  }
};
window.addEventListener('scroll', onScroll, false);
// Scroll Init
onScroll();

const nextIcon = '<i class="fa fa-long-arrow-right"/>';
const prevIcon = '<i class="fa fa-long-arrow-left"/>';
$(document).ready(function () {
  $('.ot-owl-team .owl-carousel').owlCarousel({
    items: 4,
    nav: true,
    loop: true,
    margin: 31,
    dots: false,
    mouseDrag: false,
    responsiveClass: true,
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $('.ot-owl-portfolio .owl-carousel').owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    dots: false,
    margin: 30,
    mouseDrag: false,
    responsiveClass: true,
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  $('.ot-owl-testimonial .owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    margin: 30,
    mouseDrag: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});