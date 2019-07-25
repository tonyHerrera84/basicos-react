import React, {Fragment} from 'react';
// import PrimerComponente from './components/PrimerComponente';
// import ComponteFuncional from './components/ComponteFuncional';
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Products'
import './App.css';

function App() {
  // const empleado = {
  //   nombre: 'Oscar',
  //   trabajo: 'Fotografo'
  // }
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <Productos />
      <Footer fecha = {fecha} />
      {/* <div className="App">
        <header className="App-header">
          {empleado.nombre}, {empleado.trabajo}
          <PrimerComponente />
          <ComponteFuncional />
        </header>
      </div> */}
    </Fragment>
  );
}

export default App;
