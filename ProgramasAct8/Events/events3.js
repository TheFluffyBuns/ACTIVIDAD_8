const buttonBar = document.querySelector('.button-bar');

buttonBar.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const color = event.target.dataset.color;
    buttonBar.style.backgroundColor = color;
  }
});