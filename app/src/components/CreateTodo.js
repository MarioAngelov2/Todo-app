import React from "react";
import { useState } from "react";

import '../style/CreateTodo.css'

function CreateTodo({ taskCreateHandler }) {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    taskCreateHandler(task);
    setTask("");
  };

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form className="create-todo" onSubmit={onSubmit}>
      <input
        type="text"
        name="todoName"
        value={task}
        onChange={onChange}
        placeholder="Enter text..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateTodo;
