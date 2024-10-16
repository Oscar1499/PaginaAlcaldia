import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaHome, FaBuilding, FaUserFriends, FaHammer, FaCross, FaArchive } from 'react-icons/fa'; 

const TramitesContenido = () => {
  return (
    <div className="tramites-wrapper">
      <div className="header">
        <h1>Trámites</h1>
      </div>
      <div className="botones-container">
        <Link to="/tramites-legales" className="tramite-boton">
          <FaFileContract className="icon" />
          Trámites legales
        </Link>
        <Link to="/constancias" className="tramite-boton">
          <FaArchive className="icon" />
          Constancias
        </Link>
        <Link to="/empresariales" className="tramite-boton">
          <FaBuilding className="icon" />
          Empresariales
        </Link>
        <Link to="/registro-familiar" className="tramite-boton">
          <FaUserFriends className="icon" />
          Registro familiar
        </Link>
        <Link to="/inmuebles" className="tramite-boton">
          <FaHome className="icon" />
          Inmuebles
        </Link>
        <Link to="/tramites-construccion" className="tramite-boton">
          <FaHammer className="icon" /> {/* Ícono para Trámites de Construcción */}
          Trámites de construcción
        </Link>
        <Link to="/tramites-cementerio" className="tramite-boton">
          <FaCross className="icon" /> {/* Ícono para Trámites de Cementerio */}
          Trámites cementerio
        </Link>
        <Link to="/tramites-delegacion" className="tramite-boton">
          <FaFileContract className="icon" />
          Trámites de Delegación
        </Link>
      </div>
    </div>
  );
};

export default TramitesContenido;

