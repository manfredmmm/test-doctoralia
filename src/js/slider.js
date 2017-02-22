//import $ from './jquery';

// --------------------------------------------------------------------------------
// Slider
// --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const timer = 2500;
  let currentSlide = 0;
  const nSlides = document.getElementsByClassName('js-slider__image').length;

  const getPreviousIndex = () => {
    let previousIdx = currentSlide - 1;
    if (previousIdx < 0) {
      previousIdx = nSlides - 1;
    }
    return previousIdx;
  };

  const getSlide = n => document.getElementsByClassName('js-slider__image')[n];
  const getText = n => document.getElementsByClassName('js-slide__item')[n];

  const nextSlide = () => {
    getSlide(getPreviousIndex()).classList.remove('previous');
    getSlide(currentSlide).classList.remove('current');
    getText(currentSlide).classList.remove('current');
    currentSlide = (currentSlide + 1) % nSlides;
  };

  const showSlide = () => {
    getSlide(getPreviousIndex()).classList.add('previous');
    getSlide(currentSlide).classList.add('current');
    getText(currentSlide).classList.add('current');
  };

  const showOverlay = () => {
    getSlide(getPreviousIndex())
      .getElementsByClassName('slider__overlay')[0].classList.remove('current');
    getSlide(currentSlide)
      .getElementsByClassName('slider__overlay')[0].classList.add('current');
  };

  const slideNeedsOverlay = () => {
    const classes = getSlide(currentSlide).getElementsByClassName('slider__overlay')[0].classList;
    // TODO find class on list
    console.log(classes);
    return !(classes.find(className => className === 'current').length > 0);
  };

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

/*
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
*/
