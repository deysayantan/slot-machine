import React, { Component } from 'react'
import { SlotContainerStyles } from '../styles/AppStyle'
import Slot from './Slot'
import ControlButton from './ControlButton'
import {connect} from 'react-redux'
import {setUserInteraction,setSlotRunningStatus} from '../../action'
import ResultWindow from './ResultWindow'
class SlotContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startSlot : false,
        }
        this.timer = null
    }
    componentDidMount(){
        const payload = {
            "userActed" : false
        }
        this.props.setSlotRunningStatus(false)
        this.props.setUserInteraction(payload)
        this.timer = setTimeout(()=>{
            this.startStopSlot(true)
        }, 5000);
    }
    updateUserInteraction = (flag) => {
        this.startStopSlot(flag)
        clearTimeout(this.timer)
        if(!flag){
            this.timer = setTimeout(()=>{
                const payload = {
                    "userActed" : false
                }
                this.props.setUserInteraction(payload)
                this.startStopSlot(true)
            }, 5000);
        }
    }
    resetSlotMachine = () =>{
        clearTimeout(this.timer)
        this.startStopSlot(false)
        this.timer = setTimeout(()=>{
            const payload = {
                "userActed" : false
            }
            this.props.setUserInteraction(payload)
            this.startStopSlot(true)
        }, 5000);
    }
    startStopSlot = (flag) =>{
        this.props.setSlotRunningStatus(flag)
        this.setState({
            startSlot : flag
        })
    }
    render() {
        return (
            <div style={SlotContainerStyles.container}>
                <Slot 
                    resetSlotMachine={this.resetSlotMachine}
                    userInteraction={this.state.startSlot} 
                />
                <ControlButton 
                    slotStatus={this.state.startSlot}
                    userInteractionCallback={this.updateUserInteraction} 
                />
                <ResultWindow />
            </div>
        )
    }
}

const mapStateToProps = ({ userInteraction,slotRunning }) => ({
    userInteraction,
    slotRunning
});

const mapDispatchToProps = dispatch => ({
    setUserInteraction: (payload) => dispatch(setUserInteraction(payload)),
    setSlotRunningStatus : flag => dispatch(setSlotRunningStatus(flag))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SlotContainer);
