let globalCounter = 'O';

let gameBoard = [[],[],[]];

let squares = document.getElementsByClassName('square');

//Single Event Handler
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
        checkWinCondition(...coordinates, this);
    }
}

// Add event listener to all square elements
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', placePiece);
}

// Resets the board
const resetBoard = function () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        squares[i].style = '';
    }
    gameBoard = [[], [], []];
}

// Gets coordinates and updates the 2-D matrix
const addToGameBoard = function (id) {
    switch (id) {
        case 'topleft' : gameBoard[0][0] = this.textContent; return [0, 0];
        case 'topmiddle' : gameBoard[0][1] = this.textContent; return [0, 1];
        case 'topright' : gameBoard[0][2] = this.textContent; return [0, 2];
        case 'midleft' : gameBoard[1][0] = this.textContent; return [1, 0];
        case 'midmiddle' : gameBoard[1][1] = this.textContent; return [1, 1];
        case 'midright' : gameBoard[1][2] = this.textContent; return [1, 2];
        case 'bottomleft' : gameBoard[2][0] = this.textContent; return [2, 0];
        case 'bottommiddle' : gameBoard[2][1] = this.textContent; return [2, 1];
        case 'bottomright' : gameBoard[2][2] = this.textContent; return [2, 2];
    }
}

// Checks the various win conditions after a piece is placed
const checkWinCondition = function (row, column, player) {
    if (checkRowWin(row) || checkColumnWin(column) || checkMajorDiagonalWin() || checkMinorDiagonalWin()) {
        alert('YOU WIN!');
        globalCounter = (player === 'X') ? 'O' : 'X';
        player.style ='background-color:yellow;';
    }
}

const checkRowWin = function (row) {
    let cache = {};
    for (let i = 0; i < gameBoard[row].length; i++) {
        let item = gameBoard[row][i];
        if (item) {
            cache.hasOwnProperty(item) ? cache[item] ++ : cache[item] = 1;
        }
    }
    return cache['X'] > 2 || cache['O'] > 2;
}

const checkColumnWin = function (column) {
    let cache = {};
    for (let i = 0; i < gameBoard.length; i++) {
        let position = gameBoard[i][column];
        if (position) {
            cache.hasOwnProperty(position) ? cache[position] ++ : cache[position] = 1;
        }
    }
    return cache['X'] > 2 || cache['O'] > 2;
}

const checkMajorDiagonalWin = function () {
    let left = (gameBoard[0][0] === undefined) ? null : gameBoard[0][0];
    let middle = (gameBoard[1][1] === undefined) ? null : gameBoard[1][1];
    let right = (gameBoard[2][2] === undefined) ? null : gameBoard[2][2];
    if (left && middle && right) {
        return ((left === 'X' && middle === 'X' && right === 'X') || (left === 'O' && middle === 'O' && right === 'O'));
    }
}

const checkMinorDiagonalWin = function () {
    let left = (gameBoard[2][0] === undefined) ? null : gameBoard[2][0];
    let middle = (gameBoard[1][1] === undefined) ? null : gameBoard[1][1];
    let right = (gameBoard[0][2] === undefined) ? null : gameBoard[0][2];
    if (left && middle && right) {
        return ((left === 'X' && middle === 'X' && right === 'X') || (left === 'O' && middle === 'O' && right === 'O'));
    }
}
