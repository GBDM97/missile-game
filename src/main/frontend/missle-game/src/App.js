import './App.css';
import React from 'react';
import axios from 'axios';



function App() {
  const [current, set] = React.useState([]);
  const [currentSt, setSt] = React.useState({backgroundColor: 'transparent', position:'absolute', top:'100px', right: '1330px'});
  async function fetchData() {
    axios.get('http://localhost:8080/api/employees')
    .then((res) => {set(res.data)});
  }
fetchData();
  let i = 1330
  const sendMissle = () => {
      
      let px = "px";
      let right = i + px;
      setSt({backgroundColor: 'transparent', position:'absolute', top:'100px', right: right })
      i = i - 1;
      if (i > 0){setTimeout(sendMissle, 100);}
  }
    
    

  return (
    <>
        <button style={{color: "white", cursor: "pointer"}} onClick={sendMissle}>SEND</button>
        <div className='mainView'>
        <img src={require("./media/missle1.png")} alt="missle1" style={currentSt}/>
        </div>
    </>
  );
}

export default App;
