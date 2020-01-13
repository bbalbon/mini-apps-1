let globalCounter = 'O';

let squares = document.getElementsByClassName('square');

const placePiece = function () {
    if (globalCounter === 'O') {
        this.textContent = 'X';
        globalCounter = 'X';
    } else {
        this.textContent = 'O';
        globalCounter = 'O';
    }
}

const resetBoard = function () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', placePiece);
}