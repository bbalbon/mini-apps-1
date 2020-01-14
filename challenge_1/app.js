//State to hold functionality
let state = {
    globalCounter: 'O',
    piecesPlaced: 0,
    squares: document.getElementsByClassName('square'),
    gameBoard: [[], [], []],
    Xwins: document.getElementById('xwins'),
    Owins: document.getElementById('owins')
}

//Single Event Handler and State Modifier
const placePiece = function () {
    if (!this.textContent) {
        if (state.globalCounter === 'O') {
            this.textContent = 'X';
            state.globalCounter = 'X';
        } else {
            this.textContent = 'O';
            state.globalCounter = 'O';
        }
        let coordinates = addToGameBoard.bind(this)(this.id);
        checkWinCondition(...coordinates, this);
        state.piecesPlaced ++;
    }
};

// Add event listener to all square elements
for (let i = 0; i < state.squares.length; i++) {
    state.squares[i].addEventListener('click', placePiece);
}

// Gets coordinates and updates the 2-D matrix
const addToGameBoard = function (id) {
    let row = parseInt(id.slice(0, 1));
    let column = parseInt(id.slice(1));

    state.gameBoard[row][column] = this.textContent;
    return[row, column];
};

// Checks the various win conditions after a piece is placed
const checkWinCondition = function (row, column, player) {
    if (checkRowWin(row) || checkColumnWin(column) || checkMajorDiagonalWin() || checkMinorDiagonalWin()) {
        alert('YOU WIN!');
        state.globalCounter = (player.textContent === 'X') ? 'O' : 'X';
        player.textContent === 'X' ? state.Xwins.textContent ++ : state.Owins.textContent ++ ;
        player.style ='background-color:yellow;';
    } else {
        if (state.piecesPlaced === 8) {
            alert('Cats Game!');
            resetBoard();
        }
    }
};

const checkRowWin = function (row) {
    let cache = {};
    for (let i = 0; i < state.gameBoard[row].length; i++) {
        let item = state.gameBoard[row][i];
        if (item) {
            cache.hasOwnProperty(item) ? cache[item] ++ : cache[item] = 1;
        }
    }
    return cache['X'] > 2 || cache['O'] > 2;
};

const checkColumnWin = function (column) {
    let cache = {};
    for (let i = 0; i < state.gameBoard.length; i++) {
        let position = state.gameBoard[i][column];
        if (position) {
            cache.hasOwnProperty(position) ? cache[position] ++ : cache[position] = 1;
        }
    }
    return cache['X'] > 2 || cache['O'] > 2;
};

const checkMajorDiagonalWin = function () {
    let left = (state.gameBoard[0][0] === undefined) ? null : state.gameBoard[0][0];
    let middle = (state.gameBoard[1][1] === undefined) ? null : state.gameBoard[1][1];
    let right = (state.gameBoard[2][2] === undefined) ? null : state.gameBoard[2][2];
    if (left && middle && right) {
        return ((left === 'X' && middle === 'X' && right === 'X') || (left === 'O' && middle === 'O' && right === 'O'));
    }
};

const checkMinorDiagonalWin = function () {
    let left = (state.gameBoard[2][0] === undefined) ? null : state.gameBoard[2][0];
    let middle = (state.gameBoard[1][1] === undefined) ? null : state.gameBoard[1][1];
    let right = (state.gameBoard[0][2] === undefined) ? null : state.gameBoard[0][2];
    if (left && middle && right) {
        return ((left === 'X' && middle === 'X' && right === 'X') || (left === 'O' && middle === 'O' && right === 'O'));
    }
};

// Resets the board
const resetBoard = function () {
    for (let i = 0; i < state.squares.length; i++) {
        state.squares[i].textContent = '';
        state.squares[i].style = '';
    }
    state.gameBoard = [[], [], []];
    state.piecesPlaced = 0;
};
