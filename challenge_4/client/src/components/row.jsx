import React, { Component } from 'react';
import Square from './square.jsx';

const Row = (props) => (
  <tr className="row">
    {props.boardRow.map((column, i) => (
      <Square key={i} column={column} columnIndex={i} rowIndex={props.rowIndex} updateBoard={props.updateBoard}/>
    ))}
  </tr>
)

export default Row;