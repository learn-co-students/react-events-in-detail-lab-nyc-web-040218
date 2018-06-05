import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.persist();
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay);
  }

  render() {
    return(
      <button onClick={this.handleClick}>Click Delay</button>
    )
  }
}

export default DelayedButton;
