import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO App</h1>
      </header>
      <main>
        <CreateTodo />
      </main>
    </div>
  );
}

export default App;
