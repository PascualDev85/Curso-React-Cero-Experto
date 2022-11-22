import { useState } from "react";

export const useForm = (initialForm = {}, validateForm) => {
  const [formState, setFormState] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });

    // setear errores
    setErrors(validateForm(formState));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    errors,
    onInputChange,
    onResetForm,
  };
};
