import React, { Component } from 'react';
import Square from './square.jsx';

const Row = (props) => (
  <tr className="row">
    {props.boardRow.map((columnValue, i) => (
      <Square key={i} column={columnValue} columnIndex={i} rowIndex={props.rowIndex} updateBoard={props.updateBoard} turn={props.turn}/>
    ))}
  </tr>
)

export default Row;