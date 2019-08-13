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
        this.props.setSlotRunningStatus(false)
        this.props.setUserInteraction(false)
        this.timer = setTimeout(()=>{
            this.props.setUserInteraction(true)
            this.startStopSlot(true)
        }, 5000);
    }
    updateUserInteraction = (flag) => {
        clearTimeout(this.timer)
        this.startStopSlot(flag)
        // if(!flag){
        //     this.timer = setTimeout(()=>{
        //         this.props.setUserInteraction(false)
        //         this.startStopSlot(true)
        //     }, 5000);
        // }
    }
    resetSlotMachine = () =>{
        clearTimeout(this.timer)
        this.startStopSlot(false)
        // this.timer = setTimeout(()=>{
        //     this.props.setUserInteraction(false)
        //     this.startStopSlot(true)
        // }, 5000);
    }
    startStopSlot = (flag) =>{
        this.props.setSlotRunningStatus(flag)
        this.setState({
            startSlot : flag
        })
    }
    render() {
        return (
            <div>
                <div style={SlotContainerStyles.container}>
                    <Slot 
                        resetSlotMachine={this.resetSlotMachine}
                        userInteraction={this.state.startSlot} 
                    />
                </div>
                <div style={SlotContainerStyles.itemContainer}>
                    <ControlButton 
                        slotStatus={this.state.startSlot}
                        userInteractionCallback={this.updateUserInteraction} 
                    />
                </div>
                <div style={SlotContainerStyles.itemContainer}>
                    <ResultWindow />
                </div>
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
