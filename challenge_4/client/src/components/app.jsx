import React, { Component } from 'react';

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

  updateBoard () {
  }

  render () {

    return (
      <div id="board">
        {this.state.board.map((item, i) => (
          
        ))}
      </div>
    );
  }
}

export default App;