import React, { useState } from "react";
import "./TODO.css";

const TODO = ({ addTodo }) => {
  const [tododata, settododata] = useState("");

  const getvalue = (e) => {
    settododata(e.target.value);
  };

  const submitValue = (e) => {
    e.preventDefault();
    if (tododata) {
      addTodo(tododata);
      e.target.reset();
      settododata("");
    } else {
      alert("Empty");
    }
  };

  return (
    <div className="container p-5">
      <form className="d-flex flex-row" onSubmit={submitValue}>
        <input
          type="text"
          onBlur={(e) => getvalue(e)}
          className="form-control pr-3"
        ></input>
        <button type="submit" className="btn btn-primary p-1">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TODO;
