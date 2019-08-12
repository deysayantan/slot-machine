import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setUserInteraction} from '../../action'
export class ControlButton extends Component {
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

        this.props.setUserInteraction(true)

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

const mapStateToProps = ({ userInteraction }) => ({
    userInteraction,
});

const mapDispatchToProps = dispatch => ({
    setUserInteraction: (payload) => dispatch(setUserInteraction(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ControlButton);
