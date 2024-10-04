import './App.css';
// import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   // Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  // const [theAlert, setTheAlert] = useState(null)

  // const showAlert = (message, type)=> {
  //   setTheAlert({ 
  //   msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setTheAlert(null)
  //   }, 2000);
  // }
  const backgroundColorRemove = ()=> {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-secondary")
  }

  const toggleMode = (cls)=> {
    backgroundColorRemove()
    document.body.classList.add(`bg-${cls}`)
    if(mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor= "#0d2e4e"
      // showAlert("Dark mode has been enable", "Success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor= "white"
      // showAlert("Light mode has been enable", "Success")
    }
  }
  return(
    <>
    <Navbar tittle= "TextForm" mainPage="About" mode={mode} toggleMode={toggleMode}/>
  {/* <Alert alert={theAlert} /> */}
  <div className="cointainer my-3">
  <TextForm heading= "Enter the text to analyze below " mode={mode}/>
  </div>
  
 
  </>
  );
}
export default App;
