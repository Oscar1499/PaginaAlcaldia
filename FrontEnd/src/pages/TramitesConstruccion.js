import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaRoad, FaBuilding, FaTrashAlt } from 'react-icons/fa'; 

const TramitesConstruccion = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Trámites de Construcción</h1>
      </div> 
      <div className="botones-container">
        <Link to="/permiso-construccion" className="tramite-boton">
          <FaFileContract className="icon" />
          Permiso de construcción o legalización
        </Link>
        <Link to="/facilidad-proyecto" className="tramite-boton">
          <FaRoad className="icon" />
          Facilidad de vialidad de un proyecto 
        </Link>
        <Link to="/recepcion-proyectos" className="tramite-boton">
          <FaBuilding className="icon" />
          Recepción de obra de proyectos
        </Link>
        <Link to="/demolicion-naturaleza" className="tramite-boton">
          <FaTrashAlt className="icon" />
          Demolición de cualquier naturaleza
        </Link>
      </div>
    </div>
  );
};

export default TramitesConstruccion;

