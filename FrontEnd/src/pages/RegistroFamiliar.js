import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaClipboardCheck, FaIdCard, FaFileAlt, FaInbox, FaBaby, FaSkullCrossbones } from 'react-icons/fa'; 

const RegistroFamiliar = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Trámites de Registro Familiar</h1>
      </div> 
      <div className="botones-container">
        <Link to="/permisos-publicitarios" className="tramite-boton">
          <FaFileContract className="icon" />
          Emisión de Certificaciones
        </Link>
        <Link to="/vialidades" className="tramite-boton">
          <FaClipboardCheck className="icon" />
          Emisión de Autenticas
        </Link>
        <Link to="/licencia-operaciones" className="tramite-boton">
          <FaIdCard className="icon" />
          Carné de Menoridad 
        </Link>
        <Link to="/renovacion-permanencia" className="tramite-boton">
          <FaFileAlt className="icon" />
          Constancias 
        </Link>
        <Link to="/recepcion-documentos" className="tramite-boton">
          <FaInbox className="icon" />
          Marginaciones y/o Resposiciones
        </Link>
        <Link to="/asentamiento-nacimiento" className="tramite-boton">
          <FaBaby className="icon" />
          Asentamiento de nacimiento
        </Link>
        <Link to="/asentamiento-defuncion" className="tramite-boton">
          <FaSkullCrossbones className="icon" />
          Asentamiento de defunción
        </Link>
      </div>
    </div>
  );
};

export default RegistroFamiliar;

