// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props);
    }

    handleClick = (event) => {
        const coordinates = [event.pageX, event.pageY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}