import $ from './jquery';

// --------------------------------------------------------------------------------
// Activation First Class table
// --------------------------------------------------------------------------------

$(() => {
  const toogleCheckbox = (event) => {
    const value = $(event.currentTarget).find('.checkbox');

    $(event.currentTarget).toggleClass('checked');
    value.is(':checked') ? value.prop('checked', false) : value.prop('checked', true);
  };

  $('.js-enable__spec').on('click', (event) => {
    const notCheckbox = event.target.className !== 'checkbox';

    notCheckbox ? toogleCheckbox(event) : $(event.currentTarget).toggleClass('checked');
  });

  $('.js-first-class').on('click', (event) => {
    const activated = $('.specs').find('input:checked').length;
    activated > 0 ? console.log('Sending form') : event.preventDefault();
  });
});
