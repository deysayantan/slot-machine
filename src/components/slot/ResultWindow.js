import React, { Component } from 'react'
import {connect} from 'react-redux'
class ResultWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldAppear : false
        }
    }  
    componentDidUpdate(prevProps,prevStates){
        console.log("test")
        if(prevProps.userInteraction.userActed !== this.props.userInteraction.userActed){
            this.setState({
                shouldAppear : this.props.userInteraction.userActed
            })
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.shouldAppear && <div>Prize will be shown</div>}
            </div>
        )
    }
}


const mapStateToProps = state => state;


export default connect(
    mapStateToProps,
    null
)(ResultWindow);
