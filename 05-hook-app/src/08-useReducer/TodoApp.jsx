import { useTodos } from "../hooks/";
import { TodoAdd, TodoList } from "./components/";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd
            // recibir recibiría el TODO, función de flecha le pasaría el TODO
            // onNewTodo={(todo) => handleNewTodo(todo)}
            // o también se puede pasar directamente la función en el mismo orden este caso
            onNewTodo={handleNewTodo}
          />
        </div>
      </div>
    </>
  );
};
