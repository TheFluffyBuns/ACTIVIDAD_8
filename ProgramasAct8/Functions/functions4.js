const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

const isShort = name => name.length < 5;

const shortNames = names.filter(isShort);
para.textContent = shortNames;

const section = document.querySelector('section');
section.innerHTML = ' ';
section.appendChild(para);