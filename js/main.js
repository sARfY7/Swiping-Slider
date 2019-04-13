window.onload = function() {
  var slide = document.querySelectorAll(".slide");
  var parentSlider = slide[0].parentNode;
  var slideLength = slide.length;
  var currentSlide = 0;
  var nextSlide = currentSlide + 1;
  slide[currentSlide].classList += " animate";
  setInterval(function() {
    slide[nextSlide].classList += " animate";
    setTimeout(function() {
      slide[currentSlide].classList = "slide";
      parentSlider.appendChild(slide[currentSlide]);
      currentSlide = nextSlide;
      nextSlide = currentSlide === slideLength - 1 ? 0 : currentSlide + 1;
    }, 1000);
  }, 2000);
};
