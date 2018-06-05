import React from 'react';

class CoordinatesButton extends React.Component {
    getCoordinates = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        onReceiveCoordinates(x,y);
    }
    render() {
        return (
            <button onClick={this.getCoordinates}>Click Me!</button>
        )
    }
}

export default CoordinatesButton;