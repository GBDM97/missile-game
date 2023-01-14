import './App.css';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [mouseX, setMouseX] = React.useState();
  const [mouseY, setMouseY] = React.useState();
  const [currentStyle, setStyle] = React.useState();
  const [currentStyle2, setStyle2] = React.useState({display: "none"});
  const [currentC, setC] = React.useState(1);
  const [currentStyle3, setStyle3] = React.useState({display: "none"});
  const [currentBlow, setBlow] = React.useState(false);

  var id;
  async function createMissle() {
      var body = ({initX:getValue.initX(), initY:initY, targetX:mouseX, targetY:mouseY});
      axios.post('http://localhost:8080/api/v1/createOrLocate', body)
      .then((res) => {id = res.data.id; alert(id);
          for (; res.data.blowUp === false;) {
              var body2 = {id:id};
              axios.post('http://localhost:8080/api/v1/createOrLocate', body2)
              
                alert("rendering")
                App();
                  setStyle3({
                    width: "50px",
                    height: "2px",
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: res.data.currentX,
                    left: res.data.currentY,
                });
              
          }
      })
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
        <div className='mainView' onClick={sendMissle}>
        <div style={currentStyle}></div>
        <div style={currentStyle2}></div>
        <img src={require("./media/missle1.png")} alt="missle1"/>
        </div>
    </>
  );
}

export default App;
