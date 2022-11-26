import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import "./app.css";
import Notes from "../notes"

function App() {
  return (
    <>
    <Header />
    <div className="container">
    {Notes.map((item) => {
        return (
          <Note key={item.key} title={item.title} content={item.content} />
        );
      })}
      </div>
    <Footer />
  </>
  );
}

export default App;
