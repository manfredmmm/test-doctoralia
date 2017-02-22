// --------------------------------------------------------------------------------
// Activation First Class table
// --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Toggle row class (checked) and change input checked property
  const toogleCheckbox = (event) => {
    const row = event.currentTarget;
    const value = row.getElementsByClassName('checkbox')[0];
    row.classList.toggle('checked');
    value.checked ? value.checked = false : value.checked = true;
  };

  // Add listener for each table row
  const row = document.getElementsByClassName('js-enable__spec');
  for (let i = 0; i < row.length; i += 1) {
    row[i].addEventListener('click', (event) => {
      const notCheckbox = event.target.className !== 'checkbox';
      // Custom toggle on row click
      notCheckbox ? toogleCheckbox(event) : event.currentTarget.classList.toggle('checked');
    });
  }
});
