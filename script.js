let click = true;

//add divs

let body = document.querySelector('body');

let container = document.createElement('div');
container.classList.add('flex-container');
body.appendChild(container);
let title = document.createElement('div');
title.classList.add('title');
container.appendChild(title);
let heading = document.createElement('h1');
heading.textContent = 'Sketchy-Sketch';
title.appendChild(heading);
let content = document.createElement('div');
content.classList.add('content')
container.appendChild(content);
let board = document.createElement('div');
board.classList.add('board')
content.appendChild(board);

//add buttons
let black = document.createElement('button');
black.classList.add('black');
black.textContent = 'Black'
content.appendChild(black);

let gray = document.createElement('button');
gray.classList.add('gray');
gray.textContent = 'Gray';
content.appendChild(gray);

let eraser = document.createElement('button');
eraser.classList.add('eraser');
eraser.textContent = 'Eraser';
content.appendChild(eraser);

let random = document.createElement('button');
random.classList.add('random');
random.textContent = 'Random';
content.appendChild(random);

let reset = document.createElement('button');
reset.classList.add('reset');
reset.textContent = 'Reset';
content.appendChild(reset);

let setSize = document.createElement('button');
setSize.classList.add('setSize');
setSize.textContent = 'Set Size';
container.appendChild(setSize);

let input = document.createElement('input');
input.classList.add('input');
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Set size of grid');
input.setAttribute('value', '16');
container.appendChild(input);



//create Board
let color = 'blue';

function createBoard(size) {
  if (size >= 2 && size <= 100) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    amount = size * size;

    for (let i = 0; i < amount; i++) {
      let square = document.createElement('div');
      square.style.backgroundColor = 'whitesmoke';
      board.appendChild(square);
      square.addEventListener('mouseover', colorSquare);
    }
  } else if (size < 2) {
    input.value = 'size is too small!'
  } else if (size > 100) {
    input.value = 'size is too large!'
  }


}
 createBoard(16);

function colorSquare() {
  if (click === true) {
    if (color === 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function changeSize(input) {
  createBoard(input);
  
}

setSize.addEventListener('click', ()=> {changeSize(input.value)});

black.addEventListener('click', ()=> {
  changeColor('black');
});

gray.addEventListener('click', ()=> {
  changeColor('gray');
});

eraser.addEventListener('click', ()=> {
  changeColor('white');
});

random.addEventListener('click', ()=> {
  changeColor('random');
});

reset.addEventListener('click', ()=> {
  location.reload();
});

let colorToggle = document.createElement('div');
colorToggle.classList.add('colorToggle');
title.appendChild(colorToggle);
colorToggle.textContent = 'Ready to color!'
body.addEventListener('click', ()=> {
  click = !click;
  if (click === true) {
    colorToggle.textContent = 'Ready to color!'
  } else if (click === false) {
    colorToggle.textContent = 'Click anywhere to turn coloring on.'
  }
});





