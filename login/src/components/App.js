import React from "react";
import Form from "./Form";
import "./App.css"

var userIsRegistered = false;

function App(props) {
  return (<>
    <h1>Login to proceed</h1>
    <div className="container">
      {userIsRegistered ? (
        <Form buttontype={"Login"} screen={false} />
      ) : (
        <Form buttontype={"Register"} screen={true} />
      )}
    </div></>
  );
}

export default App;
