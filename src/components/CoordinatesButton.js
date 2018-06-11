import React from 'react';

class CoordinatesButton extends React.Component {
  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //
  //   // }
  // }

  handleClick = (event) => {
    debugger
    let xCoord = event.clientX;
    let yCoord = event.clientY;
    this.props.onReceiveCoordinates([xCoord, yCoord])
  }

  render(){
    return(
      <button onClick={this.handleClick}>Coordinate Button</button>
    )
  }
}


export default CoordinatesButton;
