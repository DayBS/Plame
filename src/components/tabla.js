import React from 'react';
import { Link } from 'react-router-dom';

const Tabla = () => {
  // Generar las filas y columnas con números
  const renderRows = () => {
    const rows = [];
    // Crear 11 filas
    for (let i = 0; i < 11; i++) {
      // Crear una fila con 7 columnas, mostrando el número de celda
      rows.push(
        <tr key={i}>
          {/* Generar las columnas */}
          {renderColumns(i)}
        </tr>
      );
    }
    return rows;
  };

  // Función para generar las columnas
  const renderColumns = (rowIndex) => {
    const columns = [];
    for (let j = 0; j < 7; j++) {
      if (rowIndex !== 0 && j === 0) {
        // Si no es la primera fila y es la primera columna, mostrar "Área X"
        columns.push(<td style={{ border: '1px solid black', borderCollapse: 'collapse' }} key={j}>Área {rowIndex}</td>);
      } else {
        // Calcular el número de la celda para las otras columnas
        const cellNumber = rowIndex * 7 + j;
        // Agregar una celda a la columna con el número
        columns.push(<td style={{ border: '1px solid black', borderCollapse: 'collapse' }} key={j}>{cellNumber}</td>);
      }
    }
    return columns;
  };

  return (
    <div>
      <Link to="/">
        <button className="App-button">Atras</button>
      </Link>

      <h2>Tabla</h2>

      {/* Crear la tabla */}
      <table>
        <tbody>
          {/* Llamar a la función para generar las filas */}
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;