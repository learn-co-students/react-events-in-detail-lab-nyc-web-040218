
import React from 'react'

class CoordinatesButton extends React.Component {

  funkybiz = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.funkybiz}>Coords</button>
    )
  }
}

export default CoordinatesButton
