import '../App.css';
import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function createCard(Contact){
  return (<Card
        key={Contact.id}
        Key={Contact.id}
        name={Contact.name}
        img={Contact.imgURL}
        tel={Contact.phone}
        mail={Contact.email}
      />);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsRmrBwU-CT2ZkHcSFapeBnfOg4ZhHh7Ykg&usqp=CAU" />
      
      {/* Map to loop through */}

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
