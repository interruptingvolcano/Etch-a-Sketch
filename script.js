
const container = document.querySelector('div');


for (i = 1; i <= 256; i++) {
const gridSqr = document.createElement('div');
gridSqr.classList.add('box');
container.appendChild(gridSqr);
gridSqr.addEventListener('mouseover', () => {
  gridSqr.classList.add('coloring');

})
}
