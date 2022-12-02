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
    const [inputStatus, getStatus] = useState(false);
    function showInput(){
      getStatus(true)
    }


    return (
        <div>
          <form onSubmit={mySubmit}>
          {inputStatus ?
            <input
              onChange={getNewNotes}
              name="title"
              placeholder="Title"
              value={myNote.title}
            />
          : null}
            <textarea
            onClick={showInput}
              onChange={getNewNotes}
              name="content"
              placeholder="Take a note..."
              // {inputStatus ? rows="3" : null}
              rows={inputStatus ? "3" : "1"}
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