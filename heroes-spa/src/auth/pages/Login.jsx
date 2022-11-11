import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/marvel", { replace: true });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
