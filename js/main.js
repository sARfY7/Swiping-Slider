// window.onload = function() {
//   var slide = document.querySelectorAll(".slide");
//   var parentSlider = slide[0].parentNode;
//   var slideLength = slide.length;
//   var currentSlide = 0;
//   var nextSlide = currentSlide + 1;
//   slide[currentSlide].classList += " animate";
//   setInterval(function() {
//     slide[nextSlide].classList += " animate";
//     setTimeout(function() {
//       slide[currentSlide].classList = "slide";
//       parentSlider.appendChild(slide[currentSlide]);
//       currentSlide = nextSlide;
//       nextSlide = currentSlide === slideLength - 1 ? 0 : currentSlide + 1;
//     }, 1000);
//   }, 2000);
// };

var swipeSlider = (function() {
  "use strict";

  // Private Slider Metadata
  var slideLength = null;
  var currentSlide = 0;
  var nextSlide = currentSlide + 1;

  // Methods Object
  const methods = {};

  // Private Methods
  const getSlides = function(container) {
    const slideContainer = document.querySelector(container);
    const slides = slideContainer.querySelectorAll(".slide");
    slideLength = slides.length;
    const result = { slideContainer, slides };
    return result;
  };

  const startSlider = function(container, slides) {
    setInterval(function() {
      slides[nextSlide].classList += " animate";
      setTimeout(function() {
        slides[currentSlide].classList = "slide";
        container.appendChild(slides[currentSlide]);
        currentSlide = nextSlide;
        nextSlide = currentSlide === slideLength - 1 ? 0 : currentSlide + 1;
      }, 1000);
    }, 2000);
  };

  // Public Methods
  methods.initiate = function(selector) {
    const { slideContainer, slides } = getSlides(selector);
    slides[currentSlide].classList += " animate";
    startSlider(slideContainer, slides);
  };

  // Exposing Public Methods
  return methods;
})();
