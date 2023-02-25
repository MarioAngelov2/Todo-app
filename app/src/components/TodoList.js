import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((x) => {
        return <TodoItem key={x._id} todoId={x._id} title={x.title} />;
      })}
    </ul>
  );
}

export default TodoList;
