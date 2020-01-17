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

  render () {
    return (
      <div id="main">
        <h1>Welcome to Connect 4!</h1>
        <h3 id="turncounter">It is the {this.state.turn === 1 ? 'YELLOW' : 'BLACK'} player's turn</h3>
        <table id="board">
        <tbody>
          {this.state.board.map((row, i) => (
            <Row key={i} rowIndex={i} boardRow={row} updateBoard={this.updateBoard.bind(this)} turn={this.state.turn} checkMove={this.isValidMove.bind(this)}/>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;