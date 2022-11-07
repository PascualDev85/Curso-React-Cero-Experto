import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "David",
    email: "david@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect se llamó");
  }, []);

  useEffect(() => {
    // console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambió");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
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
      {username === "David2" && <Message />}
    </>
  );
};
