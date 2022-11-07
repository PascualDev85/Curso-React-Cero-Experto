
import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({value}) => {
    
    console.log('render');
    // cuando cambia el estado el componente se vuelve ejecutar
    // si hay una llamada asincrona se vuelve a disparar con el useEffect

    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        // console.log(e);
        
        //VALIDA LAS DOS MANERAS (handleAdd y handleSubtract)
        setCounter((c) => c + 1)
        
    }

    const handleSubtract = () => {
        setCounter(counter - 1)
    }

    // const handleReset = () => {
    //     setCounter(value);
    // }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        <button onClick={handleAdd}> + 1</button>
        <button onClick={() => setCounter(value) }> Reset</button>
        <button aria-label="btn-reset" onClick={handleSubtract}> - 1 </button>
        </>
  )
}

CounterApp.protoTypes = {
    value: PropTypes.number.isRequired
}
