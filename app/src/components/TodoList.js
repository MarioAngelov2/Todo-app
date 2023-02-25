import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((x) => {
        return <TodoItem key={x._id} todo={x}/>;
      })}
    </ul>
  );
}

export default TodoList;
