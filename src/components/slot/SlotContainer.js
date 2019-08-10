import React, { Component } from 'react'
import { SlotContainerStyles } from '../styles/AppStyle'
import Slot from './Slot'
import ControlButton from './ControlButton'
class SlotContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInteraction : false
        }
    }
    updateUserInteraction = () => {
        this.setState({
            userInteraction : !this.state.userInteraction
        })
    }
    render() {
        return (
            <div style={SlotContainerStyles.container}>
                <Slot serial="slot1" userInteraction={this.state.userInteraction} />
                <Slot serial="slot2" userInteraction={this.state.userInteraction} />
                <Slot serial="slot3" userInteraction={this.state.userInteraction} />
                <ControlButton 
                    userInteractionCallback={this.updateUserInteraction} 
                />
            </div>
        )
    }
}

export default SlotContainer;
