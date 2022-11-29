import React, {useState} from "react";

function InputArea(props){
    const [inputText, getInputText] = useState("");
    function enteredText(event){
        getInputText(event.target.value);
    }

    return (
    <div className="form">
    <input onChange={enteredText} type="text" value={inputText} />
    <button onClick={() => {
        props.onAdd(inputText)
        getInputText("");
    }}>
      <span>Add</span>
    </button>
    </div>)
}

export default InputArea;