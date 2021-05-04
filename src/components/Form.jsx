import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isreg === false && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">
        {props.isreg === false ? "register" : "login"}
      </button>
    </form>
  );
}

export default Form;
