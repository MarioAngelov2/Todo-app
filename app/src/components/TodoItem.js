import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import { TiDeleteOutline } from "react-icons/ti";
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
      <TiDeleteOutline className="deleteIcon" onClick={() => taskDeleteHandler(todo._id)} />
    </li>
  );
}

export default TodoItem;
