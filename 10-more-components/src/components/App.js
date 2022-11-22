import '../App.css';
import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsRmrBwU-CT2ZkHcSFapeBnfOg4ZhHh7Ykg&usqp=CAU" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
