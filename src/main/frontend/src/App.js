import React, { Component } from 'react';
import './App.css'
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initX: 0,
            initY: 0,
            mouseX: 0,
            mouseY: 0,
            targetX: 0,
            targetY: 0,
            click: 0,
            firstPoint: "none",
            secPoint: "none",
            body1: "",
            body2: "",
            missles:[],
        };
      }

    click = () => {
        if (this.state.click === 0){
            this.setState({
                click: 1,
                initX: window.event.clientX,
                initY: window.event.clientY,
                firstPoint: "flex"});
        }else{
            this.setState({
            targetX: window.event.clientX,
            targetY: window.event.clientY,
            click: 0,
            secPoint: "flex"});
            this.sendMissle();
        }  
    }

    handleMouseMove = (event) => {
            this.setState({mouseX: event.clientX, mouseY: event.clientY});
            
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    sendMissle = () => {
        let obj = Object.assign({initX:this.state.initX, initY: this.state.initY, targetX:window.event.clientX, targetY:window.event.clientY})
        console.log("sending: " + obj)
        axios.post('http://localhost:8080/api/v1/createOrLocate', obj)
        .then((res) => {
            this.setState(state => ({missles:[...state.missles, res.data.id]}), () => {console.log(this.state.missles)});
        }, 
        );
    }

    arrayTest = () => {
    }

    render() {
    return (
      <div>
        <div className='mainView' onClick={this.click}>{this.state.mouseX}{" | "}{this.state.mouseY}</div>
        <img src={require("./media/missle1.png")} alt="missle1"/>
            <div style={{display: this.state.firstPoint,
                    height: "3px",
                    width: "3px",
                    backgroundColor: "white",
                    position: "absolute",
                    top: this.state.initY,
                    left: this.state.initX}}>
            </div>
            <div style={{display: this.state.secPoint,
                    height: "3px",
                    width: "3px",
                    backgroundColor: "limeGreen",
                    position: "absolute",
                    top: this.state.targetY,
                    left: this.state.targetX}}>
            </div>
        <button className='send' onClick={this.sendMissle}>Send</button>
      </div>
    );}}

export default App;