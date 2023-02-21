import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //create new todo and add it in state 
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos)
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmitHandler={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
