import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  //   console.log(algo);

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);
  //   console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return false;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RFT Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <pre> {JSON.stringify(todo)} </pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
