import React from "react";
import ReactDOM from "react-dom";

class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = function(event) {
    event.persist();
    setTimeout(function() {
      this.props.onDelayedClick(event);
    }.bind(this), this.props.delay);
  }

  // handleClick = (event) {
  //   event.persist();
  //   setTimeout(() => {
  //     this.props.onDelayedClick(event);
  //   }, this.props.delay);
  // }

//   handleClick = (event) => {
//     event.persist();
//     setTimeout(() => {
//       this.props.onDelayedClick(event);
//     }, this.props.delay);
// }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}></button>
    );
  }
}

export default DelayedButton;
    // In the components/DelayedButton.js file, create a DelayedButton React component
    // This component takes two props: onDelayedClick (a function), and delay (a number). (These props are only passed in the test suite, you will have errors in the browser)
    // When the button is clicked, we want to persist the event so we can pass it to the this.props.onDelayedClick() in a setTimeout() block. The setTimeout() will be set to this.props.delay.
