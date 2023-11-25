import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

import Pagina1 from './components/inicioSesion';
import Pagina2 from './components/seleccionMatriz';

function App() {
  const [mostrarContenidoPrincipal, setMostrarContenidoPrincipal] = useState(true);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {mostrarContenidoPrincipal && (
                    <div>
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1>Bienvenido </h1>
                      <Link to="/inicioSesion">
                        <button className="App-button">Inicio de Sesion</button>
                      </Link>
                      <Link to="/seleccionMatriz">
                        <button className="App-button">Seleccion de matrices</button>
                      </Link>
                    </div>
                  )}
                </div>
              }
            />
            <Route
              path="/inicioSesion"
              element={<Pagina1 onToggle={() => setMostrarContenidoPrincipal(false)} />}
            />
            <Route
              path="/seleccionMatriz"
              element={<Pagina2 onToggle={() => setMostrarContenidoPrincipal(false)} />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
