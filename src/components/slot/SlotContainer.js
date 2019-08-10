import React, { Component } from 'react'
import { SlotContainerStyles } from '../styles/AppStyle'
import Slot from './Slot'
import ControlButton from './ControlButton'
class SlotContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startSlot : false,
        }
        this.timer = null
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.startStopSlot(true)
        }, 5000);
    }
    updateUserInteraction = (flag) => {
        // if button not pressed ,autoStared will become true after 5 sec
        this.startStopSlot(flag)
        clearTimeout(this.timer)
        if(!flag){
            this.timer = setTimeout(()=>{
                this.startStopSlot(true)
            }, 5000);
        }
    }
    resetSlotMachine = () =>{
        clearTimeout(this.timer)
        this.startStopSlot(false)
        this.timer = setTimeout(()=>{
            this.startStopSlot(true)
        }, 5000);
    }
    startStopSlot = (flag) =>{
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
            </div>
        )
    }
}

export default SlotContainer;
