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
heading.textContent = 'Sketchie';

title.appendChild(heading);

//add input box and button

let topMenu = document.createElement('div');
topMenu.classList.add('topMenu');
container.appendChild(topMenu);

let setSize = document.createElement('button');
setSize.classList.add('setSize');
setSize.textContent = 'set size';
topMenu.appendChild(setSize);

let input = document.createElement('input');
input.classList.add('input');
input.setAttribute('type', 'text')
input.setAttribute('placeholder', '# squares per side');
// input.setAttribute('value', '16');
topMenu.appendChild(input);

let reset = document.createElement('button');
reset.classList.add('reset');
reset.textContent = 'clear';
topMenu.appendChild(reset);



let content = document.createElement('div');
content.classList.add('content')
container.appendChild(content);
let board = document.createElement('div');
board.classList.add('board')
content.appendChild(board);

//add buttons

let buttons = document.createElement('div');
buttons.classList.add('buttons');
content.appendChild(buttons);

let black = document.createElement('button');
black.classList.add('black');
black.textContent = 'black'
buttons.appendChild(black);

let blue = document.createElement('button');
blue.classList.add('blue');
blue.textContent = 'blue';
buttons.appendChild(blue);

let red = document.createElement('button');
red.classList.add('red');
red.textContent = 'red';
buttons.appendChild(red);

let green = document.createElement('button');
green.classList.add('green');
green.textContent = 'green';
buttons.appendChild(green);

let random = document.createElement('button');
random.classList.add('random');
random.textContent = 'random';
buttons.appendChild(random);

let eraser = document.createElement('button');
eraser.classList.add('eraser');
eraser.textContent = 'eraser';
buttons.appendChild(eraser);

let footer = document.createElement('footer');
footer.textContent = '2022 © interruptingvolcano via Odin Project';
content.appendChild(footer);


//create Board
let color = 'gray';

function createBoard(size) {
  if (size >= 2 && size <= 100) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    amount = size * size;

    for (let i = 0; i < amount; i++) {
      let square = document.createElement('div');
      square.style.backgroundColor = 'white';
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

setSize.addEventListener('click', ()=>  {changeSize(input.value)});

black.addEventListener('click', ()=> {
  changeColor('black');
  black.style.color = 'gray';
  blue.style.color = 'white';
  red.style.color = 'white';
  green.style.color = 'white';
  random.style.color = 'white';
  eraser.style.color = 'white';

});

blue.addEventListener('click', ()=> {
  changeColor('blue');
  blue.style.color = '#92b4eb';
  black.style.color = 'white';
  red.style.color = 'white';
  green.style.color = 'white';
  random.style.color = 'white';
  eraser.style.color = 'white';

});

red.addEventListener('click', ()=> {
  changeColor('red');
  red.style.color = 'red';
  black.style.color = 'white';
  blue.style.color = 'white';
  green.style.color = 'white';
  random.style.color = 'white';
  eraser.style.color = 'white';

});

green.addEventListener('click', ()=> {
  changeColor('green');
  green.style.color = 'green';
  black.style.color = 'white';
  blue.style.color = 'white';
  red.style.color = 'white';
  random.style.color = 'white';
  eraser.style.color = 'white';

});

eraser.addEventListener('click', ()=> {
  changeColor('white');
  eraser.style.color = 'mistyrose';
  black.style.color = 'white';
  blue.style.color = 'white';
  red.style.color = 'white';
  green.style.color = 'white';
  random.style.color = 'white';
});

random.addEventListener('click', ()=> {
  changeColor('random');
  random.style.color = 'yellow';
  black.style.color = 'white';
  blue.style.color = 'white';
  red.style.color = 'white';
  green.style.color = 'white';
  eraser.style.color = 'white';

});



let colorToggle = document.createElement('div');
colorToggle.classList.add('colorToggle');
title.appendChild(colorToggle);
colorToggle.textContent = 'Ready to draw. Click anywhere to stop.'
body.addEventListener('click', (e)=> {
  if (e.target.tagName !== 'BUTTON') {
  click = !click;
    if (click) {
      colorToggle.textContent = 'Ready to draw. Click anywhere to stop.'
    } else {
      colorToggle.textContent = 'Drawing stopped. Click anywhere to start.'

    }
}
});

reset.addEventListener('click', ()=> {
  location.reload();
  
});






