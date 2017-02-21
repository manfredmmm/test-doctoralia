import $ from './jquery';

// --------------------------------------------------------------------------------
// Slider
// --------------------------------------------------------------------------------

$(() => {
  const timer = 2500;
  let currentSlide = 0;
  const nSlides = $('.js-slider__image').length;

  const getPreviousIndex = () => {
    let previousIdx = currentSlide - 1;
    if (previousIdx < 0) {
      previousIdx = nSlides - 1;
    }
    return previousIdx;
  };

  const getSlide = n => $(`.js-slider__image:nth-child(${n + 1})`);
  const getText = n => $(`.js-slide__item:nth-child(${n + 1})`);

  const nextSlide = () => {
    getSlide(getPreviousIndex()).removeClass('previous');
    getSlide(currentSlide).removeClass('current');
    getText(currentSlide).removeClass('current');
    currentSlide = (currentSlide + 1) % nSlides;
  };

  const showSlide = () => {
    getSlide(getPreviousIndex()).addClass('previous');
    getSlide(currentSlide).addClass('current');
    getText(currentSlide).addClass('current');
  };

  const showOverlay = () => {
    getSlide(getPreviousIndex()).find('.slider__overlay').removeClass('current');
    getSlide(currentSlide).find('.slider__overlay').addClass('current');
  };

  const slideNeedsOverlay = () => !getSlide(currentSlide).find('.slider__overlay').hasClass('current');

  const carousel = () => {
    if (slideNeedsOverlay()) {
      showOverlay();
    } else {
      nextSlide();
      showSlide();
    }
  };

  setInterval(carousel, timer);
  showSlide();
});
