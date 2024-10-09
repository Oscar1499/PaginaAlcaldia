import React from 'react';
import SlideEventos from '../componentes/SlideEventos'; // Ruta correcta hacia el componente SlideEventos
import '../estilos/estilonav.css'; // Asegúrate de que esta sea la ruta correcta para los estilos

const HomePage = () => {
  return (
    <div className="page-content">
      <SlideEventos /> {/* Aquí se incluirá el componente SlideEventos */}
   
    </div>
  );
};

export default HomePage;
