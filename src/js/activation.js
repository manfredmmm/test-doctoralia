// --------------------------------------------------------------------------------
// Activation First Class table
// --------------------------------------------------------------------------------
const domReady = function (callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ?
    callback() :
    document.addEventListener('DOMContentLoaded', callback);
};

domReady(() => {
  const toogleCheckbox = (event) => {
    const row = event.currentTarget;
    const value = row.getElementsByClassName('checkbox')[0];

    row.classList.toggle('checked');
    value.checked ? value.checked = false : value.checked = true;
  };

  const row = document.getElementsByClassName('js-enable__spec');

  for (let i = 0; i < row.length; i += 1) {
    row[i].addEventListener('click', (event) => {
      const notCheckbox = event.target.className !== 'checkbox';
      
      notCheckbox ? toogleCheckbox(event) : event.currentTarget.classList.toggle('checked');
    });
  }
});
