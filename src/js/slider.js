import $ from './jquery';

// --------------------------------------------------------------------------------
// Slider
// --------------------------------------------------------------------------------
$(() => {
  // Variables:
  // Each 2500ms we will see what we have to show;
  // image (imageOverlay) or move
  const timer = 2500;
  let currentSlide = 0;
  const nSlides = $('.js-slider__image').length;

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
  const getSlide = n => $(`.js-slider__image:nth-child(${n + 1})`);
  const getText = n => $(`.js-slide__item:nth-child(${n + 1})`);

  // Get next slide (li item)
  // and remove the current/previous classes
  // update currentSlide index (between 1 and 4)
  const nextSlide = () => {
    getSlide(getPreviousIndex()).removeClass('previous');
    getSlide(currentSlide).removeClass('current');
    getText(currentSlide).removeClass('current');
    currentSlide = (currentSlide + 1) % nSlides;
  };

  // Show the current slide
  // and add current/previous classes
  const showSlide = () => {
    getSlide(getPreviousIndex()).addClass('previous');
    getSlide(currentSlide).addClass('current');
    getText(currentSlide).addClass('current');
  };

  // Show overlay image for current slide
  // and add/remove for current and previous overlay img
  const showOverlay = () => {
    getSlide(getPreviousIndex()).find('.slider__overlay').removeClass('current');
    getSlide(currentSlide).find('.slider__overlay').addClass('current');
  };

  // True if the current slide needs overlay
  // = if the current slide doesn't have any img with current class (overlay)
  const slideNeedsOverlay = () => !getSlide(currentSlide).find('.slider__overlay').hasClass('current');

  // Carousel function called each 2500ms
  const carousel = () => {
    // Show overlay?
    if (slideNeedsOverlay()) {
      showOverlay();
    } else {
      // Normal behaviour
      nextSlide();
      showSlide();
    }
  };

  setInterval(carousel, timer);
});
