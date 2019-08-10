import React, { Component } from 'react'
import Banana from '../../Assets/banana.jpg'
import Orange from '../../Assets/orange.jpg'
import Strawberry from '../../Assets/strawberry.jpg'
import Monkey from '../../Assets/monkey.jpg'
import { Styles } from '../styles/AppStyle';
const options = [1,2,3,4]
class Slot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label : this.sample(options),
            chosenImage : null
        }
    }
    componentDidMount(){
        this.chooseImage()
        this.startInterval(5000)
    }
    componentDidUpdate(prevProps,prevStates){
        if(prevProps.userInteraction !== this.props.userInteraction){
            clearInterval(this.interval)
            console.log(`${this.props.serial} ::: ${this.state.label}`)
            if(this.props.userInteraction){
                this.startInterval(50)
                setTimeout(()=> {
                    clearInterval(this.interval)
                },10000) 
            }
            else{
                this.startInterval(5000)
                console.log("called")
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
                    label:this.sample(options)
                },()=>{
                    this.chooseImage()
                })
            }
        ,msec)
    }
    sample = arr => arr[Math.floor(Math.random() * arr.length)];
    chooseImage = () => {
        let image;
        switch(this.state.label){
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
        this.setState({
            chosenImage: image
        })
    }
    render() {
        return (
            <img src={this.state.chosenImage} alt="icon" style={Styles.image} />
        )
    }
}

export default Slot;


