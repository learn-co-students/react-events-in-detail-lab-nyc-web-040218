import React from 'react';

class DelayedButton extends React.Component {
    constructor(props){
        super(props);
    }

    myFunc = (e) => {
        e.persist();
        setTimeout( () => {
            this.props.onDelayedClick(e);
        }, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.myFunc}></button>
        )
    }
}

export default DelayedButton;