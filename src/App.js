import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const empleado = {
    nombre: 'Oscar',
    trabajo: 'Fotografo'
  }
  return (
    <div className="App">
      <header className="App-header">
        {empleado.nombre}, {empleado.trabajo}
      </header>
    </div>
  );
}

export default App;
