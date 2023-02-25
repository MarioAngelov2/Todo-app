import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { taskDeleteHandler } = useContext(TodoContext);

  return (
    <li>
      {todo.title}
      <button onClick={() => taskDeleteHandler(todo._id)}>x</button>
    </li>
  );
}

export default TodoItem;
