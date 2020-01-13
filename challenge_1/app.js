let globalCounter = 'O';

let gameBoard = [[],[],[]];

let squares = document.getElementsByClassName('square');

const placePiece = function () {
    if (!this.textContent) {
        if (globalCounter === 'O') {
            this.textContent = 'X';
            globalCounter = 'X';
        } else {
            this.textContent = 'O';
            globalCounter = 'O';
        }
        let add = addToGameBoard.bind(this);
        let coordinates = add(this.id);
        console.log(coordinates);
        checkWinCondition(coordinates);
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', placePiece);
}

const resetBoard = function () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
    gameBoard = [[], [], []];
}

const addToGameBoard = function (id) {
    switch (id) {
        case 'topleft' : gameBoard[0][0] = this.textContent; return [0, 0];
        case 'topmiddle' : gameBoard[0][1] = this.textContent; return [0, 1];
        case 'topright' : gameBoard[0][2] = this.textContent; return [0, 2];
        case 'midright' : gameBoard[1][0] = this.textContent; return [1, 0];
        case 'midmiddle' : gameBoard[1][1] = this.textContent; return [1, 1];
        case 'midright' : gameBoard[1][2] =this.textContent; return [1, 2];
        case 'bottomleft' : gameBoard[2][0] = this.textContent; return [2, 0];
        case 'bottommiddle' : gameBoard[2][1] = this.textContent; return [2, 1];
        case 'bottomright' : gameBoard[2][2] = this.textContent; return [2, 2];
    }
}

const checkWinCondition = function (rowAndColumn) {
    
}

const checkRowWin = function () {
    let cache = {};
    for (let i = 0; i < gameBoard.length; i++) {
        let row = gameBoard[i];
        for (let j = 0; j < row.length; j++) {

        }
    }
}

const checkColumnWin = function () {

}

const checkDiagonalWin = function () {

}
