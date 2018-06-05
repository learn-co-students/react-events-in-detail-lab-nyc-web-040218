import React from 'react';

class CoordinatesButton extends React.Component{
  clickHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render(){
    return(
      <button onClick={this.clickHandler}>Button</button>
    )
  }
}

export default CoordinatesButton;
