import React, { useState } from "react";
import Todo from "./Todo";
import Todoform from "./TodoForm";

function TodoList(props) {
  //Hook
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //enhance Validation Joi but not now
    if (!todo.text || /^\s.$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    //console.log(todo, ...todos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    //enhance Validation Joi but not now
    if (!newValue || /^\s.$/.test(newValue)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <div>
      <h1>Whats the Plan for Today</h1>
      <Todoform onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
