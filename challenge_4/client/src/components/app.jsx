import React, { Component } from 'react';
import Row from './row.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]],
      turn: 1
    }
  }

  updateBoard (x, y, value) {
    const newBoard = this.state.board;
    newBoard[x][y] = value;
    const newValue = value === 1 ? 2 : 1;
    this.setState({
      board: newBoard,
      turn: newValue
    })
  }

  isValidMove (x, y) {
    if (this.state.board[x+1] === undefined) {
      return true;
    } else if (this.state.board[x+1][y] !== 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWin (rowIndex, columnIndex, player) {
    if (this.checkRowWin(rowIndex, player) || this.checkColumnWin(columnIndex, player) || this.checkMajorDiagonalWin(player) || this.checkMinorDiagonalWin(player)) {
      alert('YOU WIN');
      setTimeout(() => {
        window.location.reload(true);
      }, 500)
    }
  }

  checkColumnWin (columnIndex, player) {
    let count = 0;
    for (let i = 0; i < this.state.board.length; i++) {
      let row = this.state.board[i];
      row[columnIndex] === player ? count ++ : count = 0;
      if (count === 4) {
        return true;
      }
    }
  }

  checkRowWin (rowIndex, player) {
    let count = 0;
    let row = this.state.board[rowIndex];
    for (let i = 0; i < row.length; i++) {
      row[i] === player ? count ++ : count = 0;
      if (count === 4) {
        return true;
      }
    }
  }

  checkMajorDiagonalWin (player) {
    let count = 0;
    for (let i = -2; i < 7; i++) {
      let column = i;
      for (let j = 0; j < 6; j++) {
        if (column >= 0) {
          if (this.state.board[j][column] === player) {
            count ++;
          } else {
            count = 0;
          }
          if (count === 4) {
            return true;
          }
        }
        column ++;
      }
    }
  }

  checkMinorDiagonalWin (player) {
    let count = 0;
    for (let i = -2; i < 7; i++) {
      let column = i;
      for (let j = 5; j >= 0; j--) {
        if (column >= 0) {
          if (this.state.board[j][column] === player) {
            count ++;
          } else {
            count = 0;
          }
          if (count === 4) {
            return true;
          }
        }
        column ++;
      }
    }
  }


  render () {
    return (
      <div id="main">
        <h1>Welcome to Connect 4!</h1>
        <h3 id="turncounter">It is the {this.state.turn === 1 ? 'YELLOW' : 'BLACK'} player's turn</h3>
        <table id="board">
          <tbody>
            {this.state.board.map((row, i) => (
              <Row key={i} rowIndex={i} boardRow={row} updateBoard={this.updateBoard.bind(this)} turn={this.state.turn} checkMove={this.isValidMove.bind(this)} checkWin={this.checkWin.bind(this)}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;