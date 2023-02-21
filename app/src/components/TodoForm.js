import React from "react";
import { useState } from "react";

function TodoForm({ onSubmitHandler }) {
  const [input, setInput] = useState("");

  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    //generate random id up to 10000
    onSubmitHandler({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    
    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add to do..."
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
