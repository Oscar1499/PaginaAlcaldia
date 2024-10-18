import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaRoad, FaBriefcase, FaClock, FaReceipt, FaCheckCircle, FaMoneyCheck, FaClipboardCheck } from 'react-icons/fa'; 

const Empresariales = () => {
  return (
    <div className="tramites-wrapper">
      <div className="page-content"></div>
      <div className="header">
        <h1>Trámites Empresariales</h1>
      </div> 
      <div className="botones-container">
        <Link to="/permisos-publicitarios" className="tramite-boton">
          <FaFileContract className="icon" />
          Permiso de instalación de elemento publicitario
        </Link>
        <Link to="/vialidades" className="tramite-boton">
          <FaRoad className="icon" />
          Vialidades
        </Link>
        <Link to="/licencia-operaciones" className="tramite-boton">
          <FaBriefcase className="icon" />
          Licencia de operaciones para empresas
        </Link>
        <Link to="/renovacion-permanencia" className="tramite-boton">
          <FaClock className="icon" />
          Renovación de permanencia
        </Link>
        <Link to="/licencia-publicitaria" className="tramite-boton">
          <FaFileContract className="icon" />
          Licencia de operaciones para empresa publicitaria
        </Link>
        <Link to="/estado-cuenta" className="tramite-boton">
          <FaReceipt className="icon" />
          Emisión de estados de cuenta
        </Link>
        <Link to="/solvencia-general" className="tramite-boton">
          <FaCheckCircle className="icon" />
          Emisión de solvencia municipales general
        </Link>
        <Link to="/planes-pago" className="tramite-boton">
          <FaMoneyCheck className="icon" />
          Emisión de planes de pago 
        </Link>
        <Link to="/concepto-negocio" className="tramite-boton">
          <FaClipboardCheck className="icon" />
          Concepto de negocio
        </Link>
      </div>
    </div>
  );
};

export default Empresariales;

