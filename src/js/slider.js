// --------------------------------------------------------------------------------
// Slider
// --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Variables:
  // Each 2500ms we will see what we have to show;
  // image (imageOverlay) or move
  const timer = 2500;
  let currentSlide = 0;
  const nSlides = document.getElementsByClassName('js-slider__image').length;

  // Get previous index
  // returns previous index
  const getPreviousIndex = () => {
    let previousIdx = currentSlide - 1;
    if (previousIdx < 0) {
      previousIdx = nSlides - 1;
    }
    return previousIdx;
  };

  // Get Slide (slider) or text (slides): Both are list item
  // For slider: it contains two images (normal and overlayImage)
  // For slides: it contains two spans
  const getSlide = n => document.getElementsByClassName('js-slider__image')[n];
  const getText = n => document.getElementsByClassName('js-slide__item')[n];

  // Get next slide (li item)
  // and remove the current/previous classes
  // update currentSlide index (between 1 and 4)
  const nextSlide = () => {
    getSlide(getPreviousIndex()).classList.remove('previous');
    getSlide(currentSlide).classList.remove('current');
    getText(currentSlide).classList.remove('current');
    currentSlide = (currentSlide + 1) % nSlides;
  };

  // Show the current slide
  // and add current/previous classes
  const showSlide = () => {
    getSlide(getPreviousIndex()).classList.add('previous');
    getSlide(currentSlide).classList.add('current');
    getText(currentSlide).classList.add('current');
  };

  // Show overlay image for current slide
  // and add/remove for current and previous overlay img
  const showOverlay = () => {
    getSlide(getPreviousIndex())
      .getElementsByClassName('slider__overlay')[0].classList.remove('current');
    getSlide(currentSlide)
      .getElementsByClassName('slider__overlay')[0].classList.add('current');
  };

  // True if the current slide needs overlay
  // = if the current slide doesn't have any img with current class (overlay)
  const slideNeedsOverlay = () => !(getSlide(currentSlide).getElementsByClassName('current').length > 0);

  // Carousel function called each 2500ms
  const carousel = () => {
    if (slideNeedsOverlay()) {
      // Show overlay?
      showOverlay();
    } else {
      // Normal behaviour
      nextSlide();
      showSlide();
    }
  };

  setInterval(carousel, timer);
});
