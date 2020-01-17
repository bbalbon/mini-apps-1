import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor () {
    this.setState({
      player: this.props.turn
    })
  }

  render () {
    const id= `${this.props.rowIndex}${this.props.columnIndex}`;
    const rowIndex = this.props.rowIndex;
    const columnIndex = this.props.columnIndex;
    const style = !this.state.player ? 'white' : this.state.player === 1 ? 'gold' : 'black';
    return  (
      <td className="square" id={`${id}`} style={{'backgroundColor': `${style}`}} onClick={() => {
        let valid = this.props.checkMove(rowIndex, columnIndex);
        if (valid && !this.state.player) {
          this.props.updateBoard(rowIndex, columnIndex, this.props.turn);
          this.props.checkWin(rowIndex, columnIndex, this.props.turn);
          this.toggleColor();
        }
      }}>
      </td>
    )
  }
}

export default Square;