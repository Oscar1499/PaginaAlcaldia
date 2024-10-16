import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaHandshake, FaGavel, FaUndo } from 'react-icons/fa'; 

const TramitesDelegacion = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Trámites de Delegación</h1>
      </div> 
      <div className="botones-container">
        <Link to="/denuncia" className="tramite-boton">
          <FaFileContract className="icon" />
          Denuncia
        </Link>
        <Link to="/mediacion" className="tramite-boton">
          <FaHandshake className="icon" />
          Mediación
        </Link>
        <Link to="/apelacion-esquelas" className="tramite-boton">
          <FaGavel className="icon" />
          Apelación de esquela
        </Link>
        <Link to="/devolucion-decomisos" className="tramite-boton">
          <FaUndo className="icon" />
          Devolución de decomisos
        </Link>
      </div>
    </div>
  );
};

export default TramitesDelegacion;
