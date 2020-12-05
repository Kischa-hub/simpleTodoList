import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //Hook
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //EventsHandeler
  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handelChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Add a Task"
        name="text"
        value={input}
        className="todo-input"
        onChange={handelChange}
        ref={inputRef}
      />
      <button className="todo-button">Add Task</button>
    </form>
  );
}

export default TodoForm;
