import React, { Component } from 'react'

class ControlButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            started : false,
            label : "Start"
        }
    }
    componentDidUpdate(prevProps,prevStates){
        if(prevProps.slotStatus !== this.props.slotStatus){
            this.setState({
                label:this.props.slotStatus ? "Stop": "Start",
                started:this.props.slotStatus
            })
        }
    }
    changeButtonState = () =>{
        this.setState(prevState => {
            return {
                started : !prevState.started,
                label: !prevState.started ? "Stop" : "Start"
            }
        },()=>{
            this.props.userInteractionCallback(this.state.started)
        })
    }
    render() {
        return (
            <button onClick={this.changeButtonState}>
                {this.state.label}
            </button>
        )
    }
}

export default ControlButton
