import React from "react";
import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add to do..."
          value={input}
          name="text"
          className="todo-input"
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
