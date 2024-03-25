let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
}

while (i > 1) {
  if (isPrime(i)) {
    if (para.textContent) {
      para.textContent += ', ' + i;
    } else {
      para.textContent = i;
    }
  }
  i--;
}

const section = document.querySelector('section');
section.appendChild(para);