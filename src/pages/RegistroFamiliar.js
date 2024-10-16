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
          Emisión certificación de partidas
        </Link>
        <Link to="/vialidades" className="tramite-boton">
          <FaClipboardCheck className="icon" />
          Emisión de auténtica de partidas
        </Link>
        <Link to="/licencia-operaciones" className="tramite-boton">
          <FaIdCard className="icon" />
          Carné de identificación personal
        </Link>
        <Link to="/renovacion-permanencia" className="tramite-boton">
          <FaFileAlt className="icon" />
          Constancias y/o fichas de cédulas
        </Link>
        <Link to="/recepcion-documentos" className="tramite-boton">
          <FaInbox className="icon" />
          Recepción de documentos, actos o hechos jurídicos
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

