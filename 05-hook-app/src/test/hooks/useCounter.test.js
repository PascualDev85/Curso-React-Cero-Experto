import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset, incrementBy, decrementBy } =
      result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    expect(incrementBy).toEqual(expect.any(Function));
    expect(decrementBy).toEqual(expect.any(Function));
  });

  test("debe tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, counter } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });

  test("debe incrementar el counter", () => {
    const { result } = renderHook(() => useCounter());
    const { incrementBy, counter } = result.current;

    act(() => {
      incrementBy(5);
    });

    expect(result.current.counter).toBe(15);
  });
  test("debe decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrementBy, counter } = result.current;

    act(() => {
      decrementBy();
      decrementBy(2);
    });

    expect(result.current.counter).toBe(97);
  });
  test("debe de realizar reset del counter", () => {
    const { result } = renderHook(() => useCounter());
    const { reset, decrementBy, counter } = result.current;

    act(() => {
      decrementBy(2);
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
