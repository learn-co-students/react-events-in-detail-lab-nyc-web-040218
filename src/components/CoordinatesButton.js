import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let xCoord = e.clientX
    let yCoord = e.clientY
    let coords = [xCoord, yCoord]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Coords</button>
    )
  }
}

export default CoordinatesButton;
