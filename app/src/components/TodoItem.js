import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ title, todoId }) {
  const { taskDeleteHandler } = useContext(TodoContext);

  return (
    <li>
      {title}
      <button onClick={() => taskDeleteHandler(todoId)}>x</button>
    </li>
  );
}

export default TodoItem;
