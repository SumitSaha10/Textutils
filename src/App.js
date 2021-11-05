import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import React, { useState } from 'react'
import Alert from './components/Alert'
import About from './components/About'
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  //State for dark mode
  const [styling, setStyling] = useState({
    color: "black",
    backgroundColor: "white"
  })
  //State for alert
  const [alert, setAlert] = useState(null)
  const showAlert = (type,messege,disType)=>{
    setAlert({
        type: type,
      messege: messege,
      dMes: {
        dislplay : disType
      }
     })

     setTimeout(() => {
      setAlert(null)
     }, 1500);
  } 
//function for dark theme
  const setDarkTheme  = ()=>{
    if (styling.color === 'black') {
        setStyling({
            color: 'white',
            backgroundColor: '#5a5555'
          })
          //calling show alert function to show alert messege
         showAlert('Succes','Dark Mode has been enable',"block")
         //For disappearing alert messege after implementation
        
         
        document.body.style.backgroundColor = '#5a5555';
    } else {
        setStyling({
            color: 'black',
            backgroundColor: 'white'
          })
           //calling show alert function to show alert messege
          showAlert('Succes','Lite Mode has been enable',"block")
          //For disappearing alert messege after implementation
         
           
          document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
     <Navbar title = "TextUtils" styles = {styling}/>
     <hr/>
       <Alert displayMessege = {alert}/>
       <Switch>
          <Route exact path="/about">
            <About styles = {styling}/>
          </Route>
          <Route exact path="/contact">
            <Contact styles = {styling}/>
          </Route>
          <Route exact path="/">
          <Section styles = {styling} toggle = {setDarkTheme} showAlert = {showAlert}/>
          </Route>
        </Switch>
       
        </Router>
    </>
    
  );
}

export default App;
