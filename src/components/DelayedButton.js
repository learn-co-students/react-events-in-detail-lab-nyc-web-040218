// Code DelayedButton Component Here


import React from 'react'

export default class DelayedButton extends React.Component{

  constructor(props){
    super(props)
  }

  handeClick = (e) =>{
    e.persist()
    setTimeout(()=>{
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render(){

    return(
      <button onClick={this.handeClick}>Delayed</button>
    )
  }
}
