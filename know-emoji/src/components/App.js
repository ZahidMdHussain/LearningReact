import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";
import '../App.css';

function App() {
  return (
    <div>
      <h1>
        <span>😆emojipedia😀</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((card) => {
          return (
            <Entry
              key={card.id}
              emoji={card.emoji}
              name={card.name}
              meaning={card.meaning}
            />
          );
        })}
      </dl>
      <footer>
        <h5>copyright &copy; Zahid</h5>
      </footer>
    </div>
  );
}

export default App;
