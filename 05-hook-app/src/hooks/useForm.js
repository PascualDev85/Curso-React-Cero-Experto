import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState({
    initialForm,
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    // Destructuramos el formState para  obtener email, username, password
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
