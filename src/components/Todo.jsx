import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Todoform from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  //Hook
  const [edit, setEdit] = useState({ id: null, text: "" });

  const submitUpdate = (text) => {
    updateTodo(edit.id, edit.text);
    setEdit({ id: null, text: "" });
  };
  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => updateTodo({ id: todo.id, text: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
