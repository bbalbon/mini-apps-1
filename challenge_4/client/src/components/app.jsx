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
              [0, 0, 0, 0, 0, 0, 0]]
    }
  }

  updateBoard (x, y, value) {
    newBoard = this.state.board;
    newBoard[x][y] = value;
    this.setState({
      board: newBoard
    })
  }

  render () {
    return (
      <div>
        <h1>Welcome to Connect 4!</h1>
        <table id="board">
        <tbody>
          {this.state.board.map((row, i) => (
            <Row key={i} rowIndex={i} boardRow={row} updateBoard={this.updateBoard.bind(this)}/>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;