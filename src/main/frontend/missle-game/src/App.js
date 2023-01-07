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
        {current.firstName} <br></br>
        {current.lastName} <br></br>
        {current.description} <br></br>
    </>
  );
}

export default App;
