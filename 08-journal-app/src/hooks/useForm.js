import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  // cada vez que cambie el formstate se vuelve a activar el createValidator
  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    // iterar cada una de las validaciones que tengo en Register
    for (const formField of Object.keys(formValidations)) {
      // console.log(formField);
      // destructuring función de validaciones y errorMessage
      const [fn, errorMessage] = formValidations[formField];

      // esto quiero decir que comprobamos todas las validaciones que estan fn si es correcto será null y si no será el mensaje de error
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
  };
};
