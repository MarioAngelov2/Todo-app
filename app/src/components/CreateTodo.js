import React from "react";
import { useState } from "react";

import '../style/CreateTodo.css'

function CreateTodo({ taskCreateHandler }) {
  const [task, setTask] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault();

    setIsDisabled(true)
    taskCreateHandler(task);
    setTask("");
  };

  const onChange = (e) => {

    if (e.target.value !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
 
    setTask(e.target.value);
  };

  return (
    <div className="todo-container">
    <form className="create-todo" onSubmit={onSubmit}>
      <input
        type="text"
        name="todoName"
        value={task}
        onChange={onChange}
        placeholder="Enter text..."
      />
      <button disabled={isDisabled} type="submit">Add</button>
    </form>
    </div>
  );
}

export default CreateTodo;
