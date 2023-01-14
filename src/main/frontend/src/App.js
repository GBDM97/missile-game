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
            body2: ""
        };
      }

    click = () => {
        if (this.state.click === 0){
            this.setState({click: 1});
            this.setState({initX: this.state.mouseX});
            this.setState({initY: this.state.mouseY});
            this.setState({firstPoint: "flex"});
        }
        if (this.state.click === 1){
            this.setState({click: 0});
            this.setState({targetX: this.state.mouseX});
            this.setState({targetY: this.state.mouseY});
            this.setState({secPoint: "flex"});
            this.setState({body1: "initX:" + this.state.initX + ", initY:" + this.state.initY
                                + ", targetX:" + this.state.targetX + ", targetY:" + this.state.targetY})
        }
    }

    handleMouseMove = (event) => {
            this.setState({mouseX: event.clientX});
            this.setState({mouseY: event.clientY});
    }
    
    componentDidMount(){
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    sendMissle = () => {
        
        alert(this.state.body1)
        axios.post('http://localhost:8080/api/v1/createOrLocate', this.state.body1)
        .then((res) => {alert(res)});
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