import React from "react";
import Inputs from "./Inputs";

function Form(props) {
  return (
    <form className="form">
      <Inputs type={"text"} placeholder={"Username"} />
      <Inputs type={"password"} placeholder={"Password"} />
      {props.screen && (
        <Inputs type={"password"} placeholder={"Confirm Password"} />
      )}
      <button type="submit">{props.buttontype}</button>
    </form>
  );
}

export default Form;
