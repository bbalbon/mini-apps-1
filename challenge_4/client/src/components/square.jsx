import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  toggleColor() {
  }

  render () {
    const id= `${this.props.rowIndex}${this.props.columnIndex}`
    return  (
      <td className="square" id={`${id}`}>
      </td>
    )
  }
}

export default Square;