import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "David",
    email: "dpmeta@gmail.com",
  };

  //   test("debe de regresar la información por defecto", () => {
  //     const { result } = renderHook(() => useForm(initialForm));
  //     // console.log(result.current);
  //     expect(result.current).toEqual({
  //       name: initialForm.name,
  //       email: initialForm.email,
  //       formState: initialForm,
  //       onInputChange: expect.any(Function),
  //       onResetForm: expect.any(Function),
  //     });
  //   });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const newValue = "Juan";

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de re-establecer el formulario con RESET", () => {
    const newValue = "David";

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
