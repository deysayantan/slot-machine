import React, { Component } from 'react'
import {connect} from 'react-redux'
import prizeDecisionMaker from '../../Helper/PrizeDecisionMaker'
import {ResultContainerStyles} from '../styles/AppStyle'
class ResultWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldAppear : false,
            endingCombination:[]
        }
        this.timer = null
    }  
    componentDidUpdate(prevProps,prevStates){
        if(prevProps.slotRunning.slotRunning !== this.props.slotRunning.slotRunning){
            if(this.props.slotRunning.slotRunning){
                clearTimeout(this.timer)
                this.setShouldAppear(false)
            }
            if(!this.props.slotRunning.slotRunning && this.props.userInteraction.userActed){
                clearTimeout(this.timer)
                this.setShouldAppear(true)
                const endingCombination = this.props.result.result
                this.setState({endingCombination})
            }
        }
    }
    setShouldAppear = (flag) => {
        this.setState({
            shouldAppear : flag
        })
    }
    render() {
        return (
            <>
                { this.state.shouldAppear && 
                <div style={ResultContainerStyles.resultContainer}>
                    <span style={ResultContainerStyles.resultWin}>
                        {prizeDecisionMaker(this.state.endingCombination)}
                    </span>
                    <span style={ResultContainerStyles.playAgain}>Press "START" to play again</span>
                </div>
                }
            </>
        )
    }
}


const mapStateToProps = state => state;


export default connect(
    mapStateToProps,
    null
)(ResultWindow);
