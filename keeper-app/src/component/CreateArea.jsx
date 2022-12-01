import React, {useState} from "react";

function CreateArea(props) {
    const [myNote,getNote] = useState({
        title:"",
        content:""
    })
    function getNewNotes(event){
        const {name,value} = event.target;
        getNote(prevValue => {
            return {...prevValue,[name]:value}
        });
    }
    function mySubmit(event){
        event.preventDefault();
        getNote({
            title:"",
            content:""
        });
    }


    return (
        <div>
          <form onSubmit={mySubmit}>
            <input
              onChange={getNewNotes}
              name="title"
              placeholder="Title"
              value={myNote.title}
            />
            <textarea
              onChange={getNewNotes}
              name="content"
              placeholder="Take a note..."
              rows="3"
              value={myNote.content}
            />
            <button onClick={() => {
                props.onAdd(myNote)
            }}>
              Add
            </button>
          </form>
        </div>
      );
}

export default CreateArea;