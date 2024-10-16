import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaClipboardCheck, FaExchangeAlt, FaUserShield } from 'react-icons/fa'; 

const Inmuebles = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Trámites Inmuebles</h1>
      </div> 
      <div className="botones-container">
        <Link to="/calificaciones-oficio" className="tramite-boton">
          <FaFileContract className="icon" />
          Calificaciones de oficio de inmuebles
        </Link>
        <Link to="/inscripcion-mandato" className="tramite-boton">
          <FaClipboardCheck className="icon" />
          Inscripción de inmueble por comodato
        </Link>
        <Link to="/traspasos-inmuebles" className="tramite-boton">
          <FaExchangeAlt className="icon" />
          Traspasos de inmuebles
        </Link>
        <Link to="/traspaso-herencia" className="tramite-boton">
          <FaUserShield className="icon" />
          Traspasos de inmuebles por herencia
        </Link>
      </div>
    </div>
  );
};

export default Inmuebles;

