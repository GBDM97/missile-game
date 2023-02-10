import './App.css';
import React, { useCallback } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [mouseX, setMouseX] = React.useState();
  const [mouseY, setMouseY] = React.useState();
  const [initX, setInitX] = React.useState();
  const [initY, setInitY] = React.useState();
  const [currentStyle, setStyle] = React.useState();
  const [currentStyle2, setStyle2] = React.useState({display: "none"});
  const [currentC, setC] = React.useState(1);
  const [m1, setM1] = React.useState(Object.assign({id: null, initX:0, initY:0}));
  const [a1, assert1] = React.useState();
  const [a2, assert2] = React.useState();
  const [a3, assert3] = React.useState();
  const [a4, assert4] = React.useState();
  const [a5, assert5] = React.useState();
  const [a6, assert6] = React.useState();
  
  useEffect(() => {
    
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove)
  })
 

  const sendMissle = () => {
      if (currentC === 1) {
        setStyle({height: "3px",
          width: "3px",
          backgroundColor: "white",
          position: "absolute",
          top: mouseY,
          left: mouseX});
        setC(2);
        setInitX(mouseX);
        setInitY(mouseY);
  
      }else{}
      if (currentC === 2){
        setStyle2({height: "3px",
        width: "3px",
        backgroundColor: "limeGreen",
        position: "absolute",
        top: mouseY,
        left: mouseX});
        setC(1);
        createMissle();
      }else{}
  }

  let missiles = [];
  const createMissle = () => {
    let obj = Object.assign({initX:initX, initY:initY, targetX:window.event.clientX, targetY:window.event.clientY})
    console.log(obj)
    axios.post('http://localhost:8080/api/v1/createOrLocate', obj)
    .then((res) => {
        missiles = res.data;
        console.log(missiles);
        locate();
    })};
    
    const locate = () => {
        let obj2 = Object.assign({id: missiles.id})
        axios.post('http://localhost:8080/api/v1/createOrLocate', obj2)
        .then((res) =>{
            missiles = res.data;
            setM1(missiles);
            continuee();
        })
    }
    
    const continuee = () => {
        if(missiles.blowUp === false){setTimeout(locate, 10)} else{console.log("missle blewUp")};
    }
    
  return (
    <>
        <div className='mainView' onClick={sendMissle}>{m1.id}
          <div style={currentStyle}></div>
          <div style={currentStyle2}></div>
          <img src={require("./media/missle1.png")} alt="missle1" 
            // onClick={this.selectMissle(this.state.missle[0].id)}
            style={{
            position: 'absolute',
            top: m1.currentY - 5,
            left: m1.currentX - 15,
            transform: `rotate(${m1.currentDir}deg)`,
            transformOrigin: '17px 6.5px'
          }}/>
          <div style={{transform:`translateX(${m1.initX}px) translateY(${m1.initY}px)`,
                        height: '1px',
                        width: '1px',
                        justifyContent: 'center',
                        display: 'flex'}}>
              <div style={ {
                        position: 'relative',
                        height: '200vw',
                        width: '17px',
                        backgroundColor: 'purple',
                        transformOrigin: 'top left',
                        rotate: `${m1.currentDir}deg`,
                        display: 'flex',
                        justifyContent: 'center',
              }}>
                <img src={require("./media/missle1.png")} alt="missle1" className='missle1'/>
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
