// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends React.Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrementTimer = () => {
        let newSecondsLeft = this.state.secondsLeft -1
        this.setState ={
            secondsLeft: newSecondsLeft
        }
    }

    render(){
        if(this.state.secondsLeft !== 0){
            return(
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }else {
            return <p>Boom!</p>
        }   
    }
}