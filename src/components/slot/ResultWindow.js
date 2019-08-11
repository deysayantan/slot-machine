import React, { Component } from 'react'
import {connect} from 'react-redux'
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
                this.timer = setTimeout(()=>{
                   this.setShouldAppear(false)
                }, 3000);
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
            <div>
                {this.state.shouldAppear && <div>Prize {JSON.stringify(this.state.endingCombination)}</div>}
            </div>
        )
    }
}


const mapStateToProps = state => state;


export default connect(
    mapStateToProps,
    null
)(ResultWindow);
