import $ from './jquery';

// --------------------------------------------------------------------------------
// Activation First Class table
// --------------------------------------------------------------------------------

$(() => {
  // Toggle row class (checked) and change input checked property
  const toogleCheckbox = (event) => {
    const value = $(event.currentTarget).find('.checkbox');
    $(event.currentTarget).toggleClass('checked');
    value.is(':checked') ?
      value.prop('checked', false) :
      value.prop('checked', true);
  };

  $('.js-enable__spec').on('click', (event) => {
    // Custom toggle on row click
    event.target.className !== 'checkbox' ?
      toogleCheckbox(event) :
      $(event.currentTarget).toggleClass('checked');
  });

  $('.js-first-class').on('click', (event) => {
    // Confirm if some input is checked
    $('.specs').find('input:checked').length > 0 ?
      console.log('Sending form') :
      event.preventDefault();
  });
});
