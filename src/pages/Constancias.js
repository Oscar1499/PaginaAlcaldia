import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaFileAlt, FaGrav, FaCity, FaClipboardList } from 'react-icons/fa'; 

const Constancias = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Constancias</h1>
      </div> 
      <div className="botones-container">
        <Link to="/constancia-catastral" className="tramite-boton">
          <FaFileContract className="icon" />
          Constancia Catastral
        </Link>
        <Link to="/constancia-inscripcion" className="tramite-boton">
          <FaFileAlt className="icon" />
          Constancia Inscripción
        </Link>
        <Link to="/constancia-cementerios" className="tramite-boton">
          <FaGrav className="icon" />
          Constancia Cementerios
        </Link>
        <Link to="/constancia-municipal" className="tramite-boton">
          <FaCity className="icon" />
          Constancia Municipal
        </Link>
        <Link to="/constancia-varias" className="tramite-boton">
          <FaClipboardList className="icon" />
          Constancia ANDA
        </Link>
      </div>
    </div>
  );
};

export default Constancias;

