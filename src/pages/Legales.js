import React from 'react';
import { Link } from 'react-router-dom'; 
import '../estilos/tramitescontenido.css';
import { FaFileContract, FaBuilding, FaUserFriends, FaArchive } from 'react-icons/fa'; 


const TramitesLegales = () => {
  return (
    
 <div className="tramites-wrapper">
     <div className="page-content"></div>
      <div className="header">
        <h1>Trámites Legales</h1>
      </div> 
        
        <div className="botones-container">
        
          <Link to="/diligencia-voluntaria" className="tramite-boton">
            <FaFileContract className="icon" />
            Diligencias de jurisdicción voluntaria 
          </Link>
          <Link to="/diligencia-subsidiario" className="tramite-boton">
            <FaArchive className="icon" />
            Diligencia de establecimiento subsidiario
          </Link>
          <Link to="/asociaciones-comunales" className="tramite-boton">
            <FaBuilding className="icon" />
            Constitución de Asociaciones Comunales
          </Link>
          <Link to="/titulo-propiedad" className="tramite-boton">
            <FaUserFriends className="icon" />
            Titulo de propiedad
          </Link>
          
        </div>
      </div>
  
  );
};

export default TramitesLegales;