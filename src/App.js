import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const toggleMode = (palette) =>{
    if(mode !== "p1" && palette === "p1"){
      setMode("p1");
      document.body.style.backgroundColor = "#0B2447";
      console.log("p1");
      setBgCol("#A5D7E8");
      setTxtCol("white");
    }
    else if(mode !== "p2" && palette === "p2"){
      document.body.style.backgroundColor = "#F9F5EB";
      setMode("p2");
      console.log("p2");
      setBgCol("#002B5B");
      setTxtCol("black");
    }
    else if(mode !== "p3" && palette === "p3"){
      document.body.style.backgroundColor = "#191825";
      setMode("p3");
      console.log("p3");
      setBgCol("#FFA3FD");
      setTxtCol("white");
    }
  }

  const [bgCol, setBgCol] = useState("#ffffff");

  const [alert, setAlert] = useState(null);

  const [txtCol, setTxtCol] = useState("#000000");

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [mode, setMode] = useState("light");

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode} bgCol={bgCol}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} txtCol={txtCol}/>

      {/* <Routes> */}
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} txtCol={txtCol}/>}/> */}
      {/* </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
