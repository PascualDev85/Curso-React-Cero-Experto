import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/useTodos";

jest.mock("../../hooks/useTodos");

describe("Pruebas en <TodoAdd />", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Aprender React",
        done: false,
      },
      {
        id: 2,
        description: "Aprender Testing",
        done: true,
      },
    ],
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    todosCount: 2,
    pendingTodosCount: 1,
  });

  test("debe hacer el match con el snapshot", () => {
    const { container } = render(<TodoApp />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el componente correctamente ", () => {
    render(<TodoApp />);

    expect(screen.getByText("Aprender React")).toBeTruthy();
    expect(screen.getByText("Aprender Testing")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

    // console.log(screen.getByRole("textbox").name);

    // screen.debug();
  });
});
