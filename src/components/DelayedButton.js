import React from 'react';

class DelayedButton extends React.Component {
handleClick = (event) => {
  event.persist();
  setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  // console.log('this is the', event);
  // console.log(this.props.onDelayedClick());
  // setTimeout(this.props.onDelayedClick(event), this.props.delay)
}

  render() {
    console.log(this.props.onDelayedClick); // UNDEFINED
    console.log(this.props.delay); // UNDEFINED
    return(
      <button onClick={this.handleClick}>Delay Button</button>

    )
  }
}

export default DelayedButton
