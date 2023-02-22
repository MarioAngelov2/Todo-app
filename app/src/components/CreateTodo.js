import React from "react";
import { useState } from "react";

function CreateTodo() {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setTask("");
  };

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form className="create-todo" onSubmit={onSubmit}>
        <input
          type="text"
          name="todoName"
          placeholder="Enter text..."
          value={task}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateTodo;
