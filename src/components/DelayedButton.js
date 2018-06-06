// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  constructor(props){
    super(props)
  }

  click = (event) =>{
    event.persist();
    setTimeout(()=> {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.click}>Click</button>
    )
  }
};
export default DelayedButton;
