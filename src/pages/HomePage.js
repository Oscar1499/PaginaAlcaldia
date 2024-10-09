import React from 'react';
import SlideEventos from '../componentes/SlideEventos'; 
import '../estilos/estilonav.css'; 
import '../stiloglobal.css';
import ServiciosDestacados from '../componentes/ServiciosDestacados';  
import AlbumNoticias from '../componentes/AlbumNoticias';


const HomePage = () => {
  return (
    <div className="page-content">
      <SlideEventos /> {/* Aquí se incluirá el componente SlideEventos */}
     {/* Aquí mostramos los íconos de la sección de noticias */}
     <ServiciosDestacados />
     <AlbumNoticias />
    </div>
  );
};

export default HomePage;
