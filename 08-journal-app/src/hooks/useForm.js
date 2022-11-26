import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  // cada vez que cambie el formstate se vuelve a activar el createValidator
  useEffect(() => {
    createValidators();
  }, [formState]);

  // memorizar el valor que sólo debe cambiar si cambia el formState
  const isFormValid = useMemo(() => {
    // iterar sobre las propiedades del formValidation. Si formValidtion en la propiedad  es diferente a null que se salga
    for (const formField of Object.keys(formValidation)) {
      if (formValidation[formField] !== null) return false;
    }

    return true;
  }, [formValidation]);

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

    // iterar cada una de las validaciones que tengo en Register en formValidations
    for (const formField of Object.keys(formValidations)) {
      // console.log(formField);
      // destructuring función de validaciones y errorMessage
      const [fn, errorMessage] = formValidations[formField];

      // esto quiero decir que comprobamos todas las validaciones que estan fn si es correcto será null y si no será el mensaje de error
      // [`${formField}Valid`] propiedad computada
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
    // console.log(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};
