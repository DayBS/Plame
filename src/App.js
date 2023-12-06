import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

import Pagina1 from './components/inicioSesion';
import Pagina2 from './components/seleccionMatriz';

function App() {
  const [mostrarContenidoPrincipal, setMostrarContenidoPrincipal] = useState(true);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación (puedes implementar tu propia lógica aquí)
    // Por ahora, solo establecemos el usuario como autenticado de forma ficticia
    setUsuarioAutenticado(true);
  };

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
                        <h1 className='App-title'>
                          Matriz de Calidad del Plan de Mejora
                        </h1>
                        <div className='cuadrosTexto'>
                          Bienvenido. Esta aplicación permite revisar y llenar una matriz dedicada
                          a la calidad del plan de mejora de las distintas carreras de la
                          Universidad Mayor de San Simón.
                        </div>
                        <Link to="/inicioSesion">
                          <button className="App-button">Inicio de Sesión</button>
                        </Link>
                        <Link to="/seleccionMatriz">
                          <button className="App-button">Selección de Matrices</button>
                        </Link>
                        <div className='cuadrosContacto'>
                          **Para solicitar una cuenta, por favor contactarse con la unidad responsable.
                        </div>
                      </div>
                    )}
                    {usuarioAutenticado && <Navigate to="/seleccionMatriz" />}
                  </div>
                }
              />
              <Route
                path="/inicioSesion"
                element={
                  <Pagina1
                    onToggle={() => setMostrarContenidoPrincipal(false)}
                    onLogin={handleLogin}
                  />
                }
              />
              <Route
                path="/seleccionMatriz"
                element={
                  <Pagina2
                    onToggle={() => setMostrarContenidoPrincipal(false)}
                    onLogin={handleLogin}
                  />
                }
              />
            </Routes>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
