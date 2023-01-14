import './App.css';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  const [mouseX, setMouseX] = React.useState();
  const [mouseY, setMouseY] = React.useState();
  const [initX, setInitX] = React.useState();
  const [initY, setInitY] = React.useState();
  const [currentStyle, setStyle] = React.useState();
  const [currentStyle2, setStyle2] = React.useState();
  const [currentC, setC] = React.useState(1);
  const [currentStyle3, setStyle3] = React.useState({width: "50px", height: "2px", backgroundColor: "transparent", position: "absolute"});
  const [currentBlow, setBlow] = React.useState(false);

  var id;
  async function createMissle() {
    var body = ({initX:initX, initY:initY, targetX:mouseX, targetY:mouseY});
    axios.post('http://localhost:8080/api/v1/createOrLocate', body)
    .then((res) => {id = res.data; alert(id)});


    // for (; currentBlow === false;) {
    //   var body2 = {id:currentId, initX:initX, inity:initY, targetX:targetX, targetY:targetY};
    //   axios.post('http://localhost:8080/api/v1/createOrLocate', body2)
    //   .then((res) => {
    //     setCurrentX(res.data.currentX);
    //     setCurrentY(res.data.currentY);
    //     setBlow(res.data.blowUp)
    //     setStyle3({
    //       width: "50px",
    //       height: "2px",
    //       backgroundColor: "transparent",
    //       position: "absolute",
    //       top: currentX,
    //       left: currentY,
    //     });
    //   });
    // }
  }
  const continuee = () => {
    createMissle();
  }
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
        backgroundColor: "white",
        position: "absolute",
        top: mouseY,
        left: mouseX});
        continuee();
      }else{}
  }
    
    useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
      
    };

    window.addEventListener('mousemove', handleMouseMove)})

  return (
    <>
        {/* <button style={{color: "white", cursor: "pointer"}} onClick={sendMissle}>SEND</button> */}
        <div className='mainView' onClick={sendMissle}>
        <div style={currentStyle}></div>
        <div style={currentStyle2}></div>
        <img src={require("./media/missle1.png")} alt="missle1" style={currentStyle3}/>
        </div>
    </>
  );
}

export default App;
