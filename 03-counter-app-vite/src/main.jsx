import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWordlApp }  from './HelloWordlApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
{/* <HelloWordlApp /> */}
{/* <FirstApp title="Hola soy, Goku"/> */}
{/* // si queremos mandar un boolean bastaría con pasar solo por ej: title sólo */}
{/* /> */}
<CounterApp value={10} />
</React.StrictMode>
);