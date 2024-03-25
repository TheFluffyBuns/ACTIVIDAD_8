const btn = document.querySelector('.off');

btn.addEventListener('click', function() {
  if (btn.textContent === 'Off') {
    btn.textContent = 'On';
  } else {
    btn.textContent = 'Off';
  }
});