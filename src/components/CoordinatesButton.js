// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // onReceiveCoordinates: 0
        }
    }
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);

    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Coords</button>

            </div>
        );
    }

}
export default CoordinatesButton
