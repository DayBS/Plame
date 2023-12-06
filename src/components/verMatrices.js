import React from 'react';
import { Link } from 'react-router-dom';

const verMatrices = ({ onToggle }) => (
  <div>
    <h2>Solo vista de matrices</h2>
    <p>Contenido del invitado</p>
    
    <Link to="/">
      <button className="App-button">Volver a la Página Principal</button>
    </Link>
  </div>
);

export default verMatrices;