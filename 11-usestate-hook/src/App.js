import React, {useState} from "react";
import './App.css';
// import { useState } from 'react';

function App() {
  const [count,changeState] = useState(0);

  function increase(){
    changeState(count+1);
  }
  function decrease(){
    changeState(count-1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
