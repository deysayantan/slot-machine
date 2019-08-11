import React, { Component } from 'react'
import {connect} from 'react-redux'
class ResultWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldAppear : false
        }
        this.timer = null
    }  
    componentDidUpdate(prevProps,prevStates){
        
        if(prevProps.userInteraction.userActed !== this.props.userInteraction.userActed){
            console.log('componentDidUpdate1')
            if(this.props.slotRunning.slotRunning){
                console.log('componentDidUpdate2')
                //clearTimeout(this.timer)
                this.setShouldAppear(false)
            }
            if(this.props.userInteraction.userActed && !this.props.slotRunning.slotRunning){
                this.setShouldAppear(true)
                //clearTimeout(this.timer)
                //this.timer = setTimeout(()=>{
                   // this.setShouldAppear(false)
                //}, 3000);
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
                {JSON.stringify(this.props)}
                {this.state.shouldAppear && <div>Prize will be shown</div>}
            </div>
        )
    }
}


const mapStateToProps = ({ userInteraction,slotRunning }) => ({
    userInteraction,
    slotRunning
});


export default connect(
    mapStateToProps,
    null
)(ResultWindow);
