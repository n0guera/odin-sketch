const gridContainer = document.querySelector('#grid-container');
gridContainer.style.cssText = 'display: grid; height: 850px; width: 850px; grid-template-columns: repeat(16, auto); grid-template-rows: repeat(16, auto);'
grid();

const sizeButton = document.querySelector('#size-button');
sizeButton.addEventListener('click', userSize);

function grid() {
    for (let i = 0; i < 256; i++) {
        let pixels = document.createElement('div');
        pixels.classList.add('grid-square');
        gridContainer.appendChild(pixels);
    }
    const gridSquares = document.querySelectorAll('.grid-square');
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener('mouseover', color);
    }
}

function userSize() {
    let size = prompt('Enter a new size for the grid (max is 100)');
    if (size > 100) return;
    gridContainer.style.cssText = `display: grid; height: 850px; width: 850px; grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`;
    gridContainer.replaceChildren();
    for (let i = 0; i < (size * size); i++) {
        let pixels = document.createElement('div');
        pixels.classList.add('grid-square');
        gridContainer.appendChild(pixels);
    }
    const gridSquares = document.querySelectorAll('.grid-square');
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener('mouseover', color);
    }
}

function color() {
    this.style.cssText = 'background-color: black';
}