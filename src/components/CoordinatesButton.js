// Code CoordinatesButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])

  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords</button>
    );
  }
}
