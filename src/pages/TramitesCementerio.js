import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaHammer, FaCertificate } from 'react-icons/fa'; 

const TramitesCementerio = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Trámites Cementerio</h1>
      </div> 
      <div className="botones-container">
        <Link to="/reposicion-titulo" className="tramite-boton">
          <FaFileContract className="icon" />
          Reposición de títulos
        </Link>
        <Link to="/permiso-construccion" className="tramite-boton">
          <FaHammer className="icon" />
          Permiso de construcción
        </Link>
        <Link to="/certificacion-titulo" className="tramite-boton">
          <FaCertificate className="icon" />
          Certificaciones de títulos de propiedad
        </Link>
      </div>
    </div>
  );
};

export default TramitesCementerio;

