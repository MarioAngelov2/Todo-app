import "./App.css";

import useTodosApi from "./hooks/useTodosApi";
import useFetch from "./hooks/useFetch";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useFetch(
    "http://localhost:3030/jsonstore/todos",
    []
  );

  const { createTodo } = useTodosApi();

  const taskCreateHandler = (newTodo) => {
    createTodo(newTodo).then((title) => {
      setTasks((state) => [...state, title]);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>TODO App</h1>
      </header>
      <main>
        <TodoList tasks={tasks} />
        <CreateTodo taskCreateHandler={taskCreateHandler} />
      </main>
    </div>
  );
}

export default App;
