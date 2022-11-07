import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Tu nombre"
        name="username"
        autoComplete="off"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="david@gmail.com"
        name="email"
        autoComplete="off"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        autoComplete="off"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
