// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
  click = (event) => {
    event.persist();
    setTimeout(function() {
      this.props.onDelayedClick(event);
    }.bind(this), this.props.delay);
  }

  render() {
    return (
      <button onClick={this.click}>Click Me</button>
    )
  }
};
