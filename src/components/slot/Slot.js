import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';
import Banana from '../../Assets/banana.jpg'
import Orange from '../../Assets/orange.jpg'
import Strawberry from '../../Assets/strawberry.jpg'
import Monkey from '../../Assets/monkey.jpg'
import { Styles } from '../styles/AppStyle';
import {saveResult} from '../../action'

const options = [1,2,3,4]
class Slot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label1 : this.sample(options),
            label2 : this.sample(options),
            label3 : this.sample(options),
            chosenImageSlot1 : null,
            chosenImageSlot2 : null,
            chosenImageSlot3 : null,
        }
        this.timer = null
    }
    componentDidMount(){
        this.chooseImage(1)
        this.chooseImage(2)
        this.chooseImage(3)
    }
    componentDidUpdate(prevProps,prevStates){
        if(prevProps.userInteraction !== this.props.userInteraction){
            if(this.props.userInteraction){
                this.startInterval(50)
                this.timer = setTimeout(()=>{
                    clearInterval(this.interval)
                    this.props.resetSlotMachine()
                }, 10000);
            }
            else{
                clearInterval(this.interval)
                clearTimeout(this.timer)
            }     
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    startInterval = (msec) => {
        this.interval = setInterval(
            () => {
                this.setState({
                    label1:this.sample(options),
                    label2:this.sample(options),
                    label3:this.sample(options)
                },()=>{
                    const arr = [this.state.label1,this.state.label2,this.state.label3]
                    const payload = {
                        "value":arr
                    }
                    this.props.saveResult(payload)
                    this.chooseImage(1)
                    this.chooseImage(2)
                    this.chooseImage(3)
                })
            }
        ,msec)
    }
    sample = arr => arr[Math.floor(Math.random() * arr.length)];
    chooseImage = (id) => {
        if(id === 1){
            let image = this.selectSlotImage(this.state.label1)
            this.setState({
                chosenImageSlot1: image
            })
        }else if(id === 2){
            let image = this.selectSlotImage(this.state.label2)
            this.setState({
                chosenImageSlot2: image
            })
        }else if(id === 3){
            let image = this.selectSlotImage(this.state.label3)
            this.setState({
                chosenImageSlot3: image
            })
        }
    }
    selectSlotImage = (id) => {
        let image;
        switch(id){
            case 1:
                image = Banana
                break;
            case 2:
                image = Orange
                break;
            case 3:
                image = Monkey
                break;
            case 4:
                image = Strawberry
                break;
            default:
                image = null
                break;
        }
        return image
    }
    render() {
        return (
            <Fragment>
                <img src={this.state.chosenImageSlot1} alt="icon" style={Styles.image} />
                <img src={this.state.chosenImageSlot2} alt="icon" style={Styles.image} />
                <img src={this.state.chosenImageSlot3} alt="icon" style={Styles.image} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ result }) => ({
    result,
});

const mapDispatchToProps = dispatch => ({
    saveResult: (payload) => dispatch(saveResult(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Slot);


