import './App.css';

import React, { useState } from "react";

function App() {
  const [inputText, getInputText] = useState("");
  const [finalText,addText] = useState([]);

  function enteredText(event){
    getInputText(event.target.value)
  }
  function addToList(){
    addText (prevValue => {
      if(inputText==="")
      return [...prevValue]
      else
      return [...prevValue,inputText]
    })
    getInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={enteredText} type="text" value={inputText} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {finalText.map(items => {
            return <li>{items}</li>
          })}
        </ul>
      </div>
    </div>
  );
}


export default App;
