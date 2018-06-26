// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay
    )
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delay Button</button>
    );
  }
}

 DelayedButton.propTypes = propTypes;
 DelayedButton.defaultProps = defaultProps;
