import React, { Component } from 'react'

class ControlButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            started : false
        }
    }
    changeButtonState = () =>{
        this.setState(prevState => {
            return {
                started : !prevState.started
            }
        },()=>{
            this.props.userInteractionCallback(this.state.started)
        })
    }
    render() {
        return (
            <button onClick={this.changeButtonState}>
                Start
            </button>
        )
    }
}

export default ControlButton
