// your Bomb code here!
import React, {Component} from 'react'

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // decrement = () => {
    //     const minus1 = this.state.secondsLeft - 1
    //     this.setState({
    //         secondsLeft: minus1
    //     })
    // }
    render() {
        if(this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!` 
        }
    }
}

export default Bomb