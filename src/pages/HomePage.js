import React from 'react';
import SlideEventos from '../componentes/SlideEventos'; 
import '../estilos/estilonav.css'; 
import '../stiloglobal.css';
import ServiciosDestacados from '../componentes/ServiciosDestacados';  


const HomePage = () => {
  return (
    <div className="page-content">
      <SlideEventos /> {/* Aquí se incluirá el componente SlideEventos */}
     {/* Aquí mostramos los íconos de la sección de noticias */}
     <ServiciosDestacados />
    </div>
  );
};

export default HomePage;
