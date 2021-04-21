import React from 'react';
import Square from './Square';
import { boardSquare } from './common';
export default class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
  }
  renderRow() {
    return boardSquare.map((item) => {
      const squareList = item.map((i) => this.renderSquare(i))
      return <div key={'row' + item[0]} className="board-row">
        {squareList}
      </div>
    });
  }
  render() {
    return (
      <div> {this.renderRow()}</div>
    );
  }
}