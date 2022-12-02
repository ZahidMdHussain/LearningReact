import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import "./app.css";
import CreateArea from "./CreateArea";
// import Notes from "../notes"

function App() {
  const [notes,addNotes] = useState([])
  function addToApp(myNote){
     addNotes(prevValue => {
      if (myNote.title === "" || myNote.content === "")
      return [...prevValue];
      else
      return [...prevValue, myNote]
    })
  }
  function deleteNotes(id){
    addNotes((prevValue)=> {
      return prevValue.filter((noteItem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
    <Header />
    <CreateArea onAdd={addToApp}/>
    <div className="container">
    {notes.map ((item,index) => {
      return <Note onDelete={deleteNotes} key={index} id={index} title={item.title} content={item.content} />
    })}
    </div>
    <Footer />
  </>
  );
}

export default App;
