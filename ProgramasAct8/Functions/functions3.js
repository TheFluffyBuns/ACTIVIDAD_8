const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseName(namesArray) {
  const randomIndex = random(0, namesArray.length - 1);
  return namesArray[randomIndex];
}

para.textContent = chooseName(names);

const section = document.querySelector('section');
section.innerHTML = ' ';
section.appendChild(para);