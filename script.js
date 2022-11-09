const button = document.querySelector('button');
button.classList.add('newGrid');

const container = document.querySelector('div');


for (i = 1; i <= 256; i++) {
const gridSqr = document.createElement('div');
gridSqr.classList.add('box');
container.appendChild(gridSqr);
gridSqr.addEventListener('mouseover', () => {
  gridSqr.classList.add('coloring');

})
};

let val = 0;




function clickNew(e) {

  const userNum = Number(prompt('Enter the number of squares you\'d like per side of your new grid.'));
  numSquared = userNum * userNum;
  
  const body = document.querySelector('body'); 
  let newContainer = document.createElement('div');
  newContainer = document.querySelector('div');
  body.appendChild(newContainer);

  console.log(val);
  if (val === 0) {
    const container = document.querySelector('.container');
    container.remove();

  } else if (val >= 1) {
    newContainer = document.querySelector('.container');
    newContainer.remove();
  }
  
    if (userNum < 100) {
      
      const body = document.querySelector('body');
      const newContainer = document.createElement('div');
      newContainer.classList.add('container');
      body.appendChild(newContainer);

      for (i = 1; i <= numSquared; i++) {
        const gridSqr = document.createElement('div');

        gridSqr.classList.add('newBox');
        newContainer.appendChild(gridSqr);
        gridSqr.addEventListener('mouseover', () => {
          gridSqr.classList.add('coloring');
        })
        };
    } else if (userNum >= 100) {
      const body = document.querySelector('body');
      const newContainer = document.createElement('div');
      newContainer.classList.add('container');
      body.appendChild(newContainer);
    
  };
    val += 1;

  return e;
  
  
}
button.addEventListener('click', clickNew)




