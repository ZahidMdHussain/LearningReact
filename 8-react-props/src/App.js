import React from "react"

function App(props) {
  return (
        <div>
          <h2>{props.name}</h2>
          <img src={props.img} alt="avatar_img" />
          <p>{props.tel}</p>
          <p>{props.mail}</p>
        </div>
      );
}

export default App;
