// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  click = (event) => {
    //event.persist();
    //console.log(event)
    //console.log(event.clientX)
    //debugger
    // console.log(event.currentTarget)
    // this.renderText(event)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  // renderText = (event) => {
  //   console.log(event.currentTarget)
  // }


  render() {
    return (
      <button onClick={this.click}>Click Me</button>
    )
  }
};
