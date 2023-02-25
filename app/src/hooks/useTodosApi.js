const url = "http://localhost:3030/jsonstore/todos";

const useTodosApi = () => {
  const createTodo = (title) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({ title }),
    }).then((res) => res.json());
  };

  return { createTodo };
};

export default useTodosApi;
