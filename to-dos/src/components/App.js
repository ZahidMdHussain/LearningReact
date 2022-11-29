import './App.css';
import React, { useState } from "react";
import Itemlist from "./Itemlist";
import InputArea from "./InputArea"

function App() {
  const [finalText,addText] = useState([]);

  function addToList(inputText){
    addText (prevValue => {
      if(inputText==="")
      return [...prevValue]
      else
      return [...prevValue,inputText]
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addToList} />
      <div>
        <ul>
          {finalText.map((items,index) => {
            return <Itemlist key={index} id= {index} items={items}/>
          })}
        </ul>
      </div>
    </div>
  );
}


export default App;
