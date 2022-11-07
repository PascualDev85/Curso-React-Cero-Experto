import { useCounter, useFetch } from "../hooks";
import { API } from "../services/api";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  // cuidado hay que inicializar primero este Hook sino da error (Uncaught ReferenceError: Cannot access 'counter' before initialization)
  const { counter, incrementBy, decrementBy } = useCounter(1);

  console.log("counter", counter);
  const { data, isLoading, hasError } = useFetch(`${API.url}${counter}`);

  console.log({ data, isLoading, hasError });

  // una opción
  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  // desestructuramos data para obtener la información que necesitamos ya que viene en forma de [{}]. Si no viene nada, data es undefined al hacer la doble negación se convierte en true y se ejecuta la data en la posción[0]
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        className="btn btn-primary"
        onClick={() => decrementBy()}
        disabled={isLoading || counter === 1}
      >
        Back Quote
      </button>
      <button
        className="btn btn-primary"
        onClick={() => incrementBy()}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
