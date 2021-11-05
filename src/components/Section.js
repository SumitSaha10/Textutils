import React, { useState } from "react";
import "./Section.css";
export default function Section(props) {
  const handleUpClick = () => {
    /*console.log("Uppercase was clicked" + text);*/
    /*setText("You have clicked uppercase button");*/
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Succes','Coverted to uppercase',"block");
  };
  //function for uppercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Succes','Coverted to lowercase',"block");
  };
  //function for lowercase
  const handleOnChange = (event) => {
    //console.log("handleOnChange was clicked");
    setText(event.target.value);
  };
  //function for clear text
  const handleClearText = () => {
    setText("");
    props.showAlert('Succes','Clear text',"block");
  };
  //function for copying text
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Succes','Copy to clipboard',"block");
  };
  const htmlParsar = () => {
    let parsar = "";
    let allow = 0;
    
      for (let i = 0; i < text.length; i++) {
        if (text[i]==="<") {
          allow=0;
          continue;
        }
        if (text[i]===">") {
          allow = 1;
          continue;
        }
        if (allow===1) {
          parsar+=text[i];
        }
        
     
    }
   
    setText(parsar);
    props.showAlert('Succes','Html parsing',"block");
  };
  const [text, setText] = useState("");
  /*const [darkmode, setDarkmode] = useState('Dark Mode');*/

  return (
    <div className="section" style={props.styles}>
      <h2>Write your text to analys</h2>
      <textarea style={props.styles} value={text} onChange={handleOnChange} name="" id="mybox" cols="25" rows="7"></textarea>
      <div className="btns">
        <button className="btn1" onClick={handleUpClick} disabled = {text.length===0}>
          Click to UpperCase
        </button>
        <button className="btn1" onClick={handleLoClick} disabled = {text.length===0}>
          Click to LowerCase
        </button>
        <button className="btn1" onClick={handleClearText} disabled = {text.length===0}>
          Clear
        </button>
        <button className="btn1" onClick={handleCopyText} disabled = {text.length===0}>
          Copy
        </button>
        <button className="btn1" onClick={htmlParsar} disabled = {text.length===0}>
          Html to Text
        </button>
        <button className="btn1" onClick={props.toggle}>
          {props.styles.color === "black" ? "Dark Mode" : "Lite Mode"}
        </button>
      </div>
      <h3>Your text Summary</h3>
      <p>
        {text.split(" ").length-1} words, {text.length} letters
      </p>
      <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
     
    </div>
    
  );
}
