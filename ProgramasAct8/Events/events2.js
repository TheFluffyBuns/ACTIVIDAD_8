const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

document.addEventListener('keydown', function(event) {
  const step = 10;
  switch(event.key) {
    case 'w':
      y -= step;
      break;
    case 'a':
      x -= step;
      break;
    case 's':
      y += step;
      break;
    case 'd':
      x += step;
      break;
  }
  drawCircle(x, y, size);
});