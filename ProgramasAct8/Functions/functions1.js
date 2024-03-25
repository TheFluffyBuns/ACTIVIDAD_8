const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  para.textContent = names[randomIndex];
}

chooseName(); // Run the function once to print a random name

// Don't edit the code below here!

const section = document.querySelector('section');
section.innerHTML = ' ';
section.appendChild(para);