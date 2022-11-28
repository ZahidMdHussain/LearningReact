import './App.css';
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function changeText(event) {
    setName(event.target.value);
  }
  const [finalName, finalNameSet] = useState("");
  function addChangeText(event) {
    finalNameSet(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {finalName}</h1>
      <form onSubmit={addChangeText}>
        <input
          onChange={changeText}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}


export default App;
