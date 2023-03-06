const gridContainer = document.querySelector('#grid-container');
grid();

function grid() {
    for (let i = 0; i < 256; i++) {
        let pixels = document.createElement('div');
        pixels.classList.add('grid-square');
        gridContainer.appendChild(pixels);
    }
    const gridSquares = document.querySelectorAll('.grid-square');
    for ( let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener('mouseover', color);
    }
}

function color() {
    this.style.cssText = 'background-color: black';
}