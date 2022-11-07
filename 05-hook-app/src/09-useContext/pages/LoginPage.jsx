import { useContext } from "react";
import { UserContext } from "../context/UserContex";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        onClick={() =>
          setUser({ id: 123, name: "David", email: "david@gmail.com" })
        }
        className="btn btn-primary"
      >
        Set User
      </button>
    </>
  );
};
