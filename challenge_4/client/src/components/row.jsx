import React, { Component } from 'react';
import Square from './square.jsx';

const Row = (props) => (
  <tr className="row">
    {props.boardRow.map((columnValue, i) => (
      <Square key={i} columnIndex={i} rowIndex={props.rowIndex} updateBoard={props.updateBoard} turn={props.turn} checkMove={props.checkMove}/>
    ))}
  </tr>
)

export default Row;