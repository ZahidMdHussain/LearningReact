import React, {useState} from "react";
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
  const [myTime, newTime] = useState(time);

  function getTime() {
    newTime(new Date().toLocaleTimeString());
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{myTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
