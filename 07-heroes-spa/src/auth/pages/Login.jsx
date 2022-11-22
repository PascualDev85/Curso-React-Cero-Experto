import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../heroes/hooks/useForm";
import { AuthContext } from "../context";

const validationsForm = (formState) => {
  let errors = {};

  if (formState.name.trim().length < 4 || formState.name.trim().length > 12) {
    errors.name = "Must be between 3 and 12 characters";
  } else if (!formState.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export const Login = () => {
  // destructuramos del contexto loginUser
  const { loginUser } = useContext(AuthContext);
  // console.log(useContext(AuthContext));

  const { name, password, onInputChange, errors } = useForm(
    {
      name: "",
      password: "",
    },
    validationsForm
  );

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    // creamos esta constante para que cuando se loguee vuelva al mismo lugar
    const lastPath = localStorage.getItem("lastPath") || "/";

    // seteamos el user en el contexto para introducir el name del user
    loginUser(name);

    // redirigimos al user al último lugar donde estaba
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onLogin} className="formLogin">
        <div className="mb-3">
          <label className="form-label">User</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onInputChange}
            // onBlur={onInputBlur}
            required
            autoComplete="off"
          />
          {errors.name && (
            <small className="text-danger m-0">{errors.name}</small>
          )}
          {errors.user && (
            <small className="text-danger d-flex m-0">{errors.user}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
            // onBlur={onInputBlur}
            required
            autoComplete="off"
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={errors.name || errors.password || errors.user}
        >
          Login
        </button>
      </form>
    </div>
  );
};
