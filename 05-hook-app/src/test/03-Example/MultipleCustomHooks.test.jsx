import { fireEvent, render, screen } from "@testing-library/react";

import { MultipleCustomHooks } from "../../03-examples";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

// mock de useFetch
jest.mock("../../hooks/useFetch");
// mock de useCounter
jest.mock("../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  // desde aquí se puede hacer un mock de useCounter en todas los test
  const mockIncrementBy = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    incrementBy: mockIncrementBy,
  });

  beforeEach(() => {
    // limpiamos el mock de cada una de las pruebas
    jest.clearAllMocks();
  });

  test("debe mostrar el compononente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking Bad Quotes"));

    const nextQuoteButton = screen.getByRole("button", { name: "Next Quote" });
    // console.log(nextQuoteButton.disabled);
    expect(nextQuoteButton.disabled).toBeTruthy();

    const backQuoteButton = screen.getByRole("button", { name: "Back Quote" });
    // console.log(backQuoteButton.disabled);
    expect(backQuoteButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test("debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "David", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("David")).toBeTruthy();

    const nextQuoteButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextQuoteButton.disabled).toBeFalsy();

    const backQuoteButton = screen.getByRole("button", { name: "Back Quote" });
    expect(backQuoteButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test("debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "David", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextQuoteButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nextQuoteButton);

    expect(mockIncrementBy).toHaveBeenCalled();
  });
});
