import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  // reutilizamos el Custom hook useForm
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newDescription = description.trim();

    if (newDescription <= 1 || newDescription > 50) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: newDescription,
      done: false,
    };

    onNewTodo && onNewTodo(newTodo);

    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Introdcir tarea"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-2 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
