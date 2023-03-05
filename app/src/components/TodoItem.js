import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import DateTime from "./DateTime";

import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
import styles from "../components/TodoItem.module.css";

function TodoItem({ todo }) {
  const { taskDeleteHandler, toggleTodo } = useContext(TodoContext);

  return (
    <IconContext.Provider value={{size: '30px'}}>
    <li>
      <span
        className={todo.isCompleted ? styles.completed : ""}
        onClick={() => toggleTodo(todo._id)}
        >
        {todo.title}
      </span>
      <TiDeleteOutline onClick={() => taskDeleteHandler(todo._id)} />
    </li>
        <DateTime />
    </IconContext.Provider>
  );
}

export default TodoItem;
