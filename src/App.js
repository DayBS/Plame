import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

import Pagina1 from './components/inicioSesion';
import Pagina2 from './components/seleccionMatriz';
import Pagina3 from './components/tabla';

function App() {
  const [mostrarContenidoPrincipal, setMostrarContenidoPrincipal] = useState(true);

  return (
    <Router>
    <div className="AppWithBackground">
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
                      <h1>Matriz de Calidad del Plan de Mejora </h1>
                      <div className='cuadrosTexto'>
                        Bienvenido. Esta aplicacion permite revisar y llenar una matriz dedicada 
                        a la calidad del plan de mejora de las distintas carreras de la 
                        Universidad Mayor de San Simon.
                      </div>
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
            <Route
              path="/tabla"
              element={<Pagina3 onToggle={() => setMostrarContenidoPrincipal(false)} />}
            />
          </Routes>
        </header>
      </div>
      </div>
    </Router>
  );
}

export default App;
