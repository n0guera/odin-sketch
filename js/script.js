const gridContainer = document.querySelector('#grid-container');

function grid() {
    for (let i = 0; i < 256; i++) {
        let gridSquares = document.createElement('div');
        gridSquares.classList.add('grid-square');
        gridContainer.appendChild(gridSquares);
    }
}
grid();