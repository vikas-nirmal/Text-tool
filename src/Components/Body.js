import React, { useState } from "react";
import "./Body.css";

export default function Body() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
}

const handleCopyClick =()=>{
    let ntext = document.getElementById("myBox");
    ntext.select();
    ntext.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(ntext.value);
}

const handleSpaceClick =()=>{
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
}

const handleClearClick =()=>{
    let newText = ''
    setText(newText);
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div className="body-cont">
      <div className="container">
        <label className="body-label">Enter Text below!</label>
        <textarea
          className="txt-area"
          onChange={handleOnChange}
          value={text}
          id="myBox"
        ></textarea>
        </div>
        <div className="btn-flex">
        <button className="btn-primary" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn-primary" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn-primary" onClick={handleCopyClick}>
          Copy text
        </button>
        <button className="btn-primary" onClick={handleSpaceClick}>
          Remove spaces
        </button>
        <button className="btn-primary" onClick={handleClearClick}>
          Clear
        </button>
        </div>
      
      <div className="container">
          <h1>Your text Summary!</h1>
          <p>{0.008 * text.split(" ").length} Time to read</p>
          <p>{text.split(" ").length} words , {text.length} Characters</p>
      </div>
    </div>
  );
}
