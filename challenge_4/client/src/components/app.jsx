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

  render () {
    return (
      <div>
        <h1>Welcome to Connect 4!</h1>
        <table id="board">
        <tbody>
          {this.state.board.map((row, i) => (
            <Row key={i} rowIndex={i} boardRow={row} updateBoard={this.updateBoard.bind(this)} turn={this.state.turn}/>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;