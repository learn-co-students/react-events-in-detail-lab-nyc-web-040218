import React from 'react';

class CoordinatesButton extends React.Component {
    constructor(props){
        super(props);
    }

    getCoordinates = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr);
    }

    render() {
        return (
            <button onClick={this.getCoordinates}>Click Me!</button>
        )
    }
}

export default CoordinatesButton;