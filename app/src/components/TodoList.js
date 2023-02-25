import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, taskDeleteHandler }) {
  return (
    <ul>
      {tasks.map((x) => {
        return (
          <TodoItem
            key={x._id}
            todoId={x._id}
            title={x.title}
            taskDeleteHandler={taskDeleteHandler}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
