import './App.css';

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function showContact(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }
  function submitForm(event) {
    event.preventDefault();
  }

  const [movement,mouseStatus] = useState(false);
  function mouseOver(){
    mouseStatus(true)
  }
  function mouseOut() {
    mouseStatus(false);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={submitForm}>
        <input
          onChange={showContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={showContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={showContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button style={{backgroundColor:movement?"#21618C":"white", color:movement?"white":null}} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
      </form>
    </div>
  );
}

export default App;
