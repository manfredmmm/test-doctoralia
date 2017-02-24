// --------------------------------------------------------------------------------
// Activation First Class table
// --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Toggle row class (checked) and change input checked property
  const toogleCheckbox = (event) => {
    const row = event.currentTarget;
    const value = row.getElementsByClassName('checkbox')[0];
    row.classList.toggle('checked');
    value.checked ?
      value.checked = false :
      value.checked = true;
  };

  // Add listener for each row
  const row = document.getElementsByClassName('js-enable__spec');
  for (let i = 0; i < row.length; i += 1) {
    row[i].addEventListener('click', (event) => {
      // Custom toggle on row click
      event.target.className !== 'checkbox' ?
        toogleCheckbox(event) :
        event.currentTarget.classList.toggle('checked');
    });
  }

  // Add click listener to submit button
  const classSubmit = document.getElementsByClassName('js-first-class')[0];
  classSubmit.addEventListener('click', (event) => {
    // Confirm if some input is checked
    let activated = false;
    for (let i = 0; i < row.length; i += 1) {
      if (row[i].getElementsByClassName('checkbox')[0].checked) {
        activated = true;
      }
    }
    activated ?
      console.log('Sending form') :
      event.preventDefault();
  });
});
