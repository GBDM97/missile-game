import './App.css';
import React from 'react';
import axios from 'axios';



function App() {
  const [current, set] = React.useState([]);
  async function fetchData() {
    axios.get('http://localhost:8080/api/employees')
    .then((res) => {set(res.data)});
  }
fetchData();

  return (
    <>
        {/* {current.firstName} <br></br>
        {current.lastName} <br></br>
        {current.description} <br></br> */}
        <div className="mainView">
          <div className='missle1'>
            <p style={{fontSize: "30px", 
                        color: "white", 
                        backgroundColor: "transparent", 
                        position: "absolute",
                        top: "-22.50px",
                        left: "-4px"}}>></p>
            <p style={{color: "white", position: "absolute"}}>></p>
          </div>
        </div>
    </>
  );
}

export default App;
