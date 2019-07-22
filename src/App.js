import React, {Fragment} from 'react';
import PrimerComponente from './components/PrimerComponente';
import ComponteFuncional from './components/ComponteFuncional';

import './App.css';

function App() {
  const empleado = {
    nombre: 'Oscar',
    trabajo: 'Fotografo'
  }
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          {empleado.nombre}, {empleado.trabajo}
          <PrimerComponente />
          <ComponteFuncional />
        </header>
      </div>
    </Fragment>
  );
}

export default App;
