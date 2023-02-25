import React from "react";

function TodoItem({ title, taskDeleteHandler, todoId }) {
  return (
      <li>
        {title}
        <button onClick={() => taskDeleteHandler(todoId)}>x</button>
      </li>
  );
}

export default TodoItem;
