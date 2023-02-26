import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import styles from "../components/TodoItem.module.css";

function TodoItem({ todo }) {
  const { taskDeleteHandler, toggleTodo } = useContext(TodoContext);

  return (
    <li>
      <span
        className={todo.isCompleted ? styles.completed : ""}
        onClick={() => toggleTodo(todo._id)}
      >
        {todo.title}
      </span>
      <button onClick={() => taskDeleteHandler(todo._id)}>x</button>
    </li>
  );
}

export default TodoItem;
