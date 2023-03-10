import "./App.css";

import { TodoContext } from "./context/TodoContext";

import useTodosApi from "./hooks/useTodosApi";
import useFetch from "./hooks/useFetch";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useFetch(
    "http://localhost:3030/jsonstore/todos",
    []
  );

  const { createTodo, deleteTodo } = useTodosApi();

  const taskCreateHandler = (newTodo) => {
    createTodo(newTodo).then((title) => {
      setTasks((state) => [...state, title]);
    });
  };

  const taskDeleteHandler = (todoId) => {
    deleteTodo(todoId).then(() => {
      setTasks((state) => state.filter((x) => x._id != todoId));
    });
  };

  const toggleTodo = async (taskId) => {
    setTasks((state) =>
      state.map((x) =>
        x._id === taskId ? { ...x, isCompleted: !x.isCompleted } : x
      )
    );
  };

  return (
    <TodoContext.Provider value={{ taskDeleteHandler, toggleTodo }}>
      <div className="App">
        <header>
          <h1>GET IT DONE</h1>
        </header>
        <main>
          <CreateTodo taskCreateHandler={taskCreateHandler} />
          <TodoList tasks={tasks} />
        </main>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
