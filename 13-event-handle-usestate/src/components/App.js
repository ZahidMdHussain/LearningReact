import React, {useState} from "react";
import './App.css';

function App() {
    const [Heading, changeHeading] = useState("Hello");
    function onClicked() {
      changeHeading("Submitted");
    }
  
    const [Color, changeColor] = useState(false);
    function btnHover() {
      changeColor(true);
    }
    function btnOut() {
      changeColor(false);
    }
    
    return (
      <div className="container">
        <h1>{Heading}</h1>
        <input type="text" placeholder="What's your name?" />
        <button
          style={{ backgroundColor: Color ? "black" : "white" }}
          onClick={onClicked}
          onMouseOut={btnOut}
          onMouseOver={btnHover}
        >
          Submit
        </button>
      </div>
    );
}

export default App;
