import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  // 1 sería para el estado de las tareas y el segundo nombrar esa función
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    // console.log(newTodo);

    // crear la acción
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };

    // mandar la accion al reducer
    dispatchTodo(action);
  };

  const handleDeleteTodo = (todoId) => {
    // console.log({todoId});
    dispatchTodo({
      type: "[TODO] Delete Todo",
      payload: todoId,
    });
  };

  const handleToggleTodo = (todoId) => {
    // console.log({todoId});
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: todoId,
    });
  };

  return {
    todos,

    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
