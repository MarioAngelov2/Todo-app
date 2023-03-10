const url = "http://localhost:3030/jsonstore/todos";

const useTodosApi = () => {

  const deleteTodo = (todoId) => {
    return fetch(`${url}/${todoId}`, {
      method: "DELETE"
    }).then(res => res.json())
  }

  const createTodo = (title) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({ title }),
    }).then((res) => res.json());
  };

  return { createTodo, deleteTodo };
};

export default useTodosApi;
