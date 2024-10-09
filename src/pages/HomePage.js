import React, { useState, useEffect, useCallback } from 'react';
import SlideEventos from '../componentes/SlideEventos'; 
import '../estilos/estilonav.css'; 
import '../stiloglobal.css';
import ServiciosDestacados from '../componentes/ServiciosDestacados';  
import AlbumNoticias from '../componentes/AlbumNoticias';
import MapaOriente from '../pages/MapaOriente';


const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('servicios-y-noticias');

  const handleScroll = useCallback(() => {
    const sections = ['servicios-y-noticias', 'mapa'];
    const scrollY = window.scrollY;

    let foundSection = currentSection;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) { // Verifica si el elemento existe
        const bounding = element.getBoundingClientRect();
        const sectionTop = bounding.top + window.scrollY;
        const isInView = scrollY >= sectionTop - window.innerHeight / 2 && scrollY < sectionTop + bounding.height;

        if (isInView) {
          foundSection = section;
        }
      }
    });

    setCurrentSection(foundSection);
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="page-content">
      <SlideEventos />

      <div id="servicios-y-noticias" className={`section-container ${currentSection === 'servicios-y-noticias' ? 'fade-in' : 'fade-out'}`}>
        <ServiciosDestacados />
        <AlbumNoticias />
      </div>

      <div id="mapa" className={`map-section ${currentSection === 'mapa' ? 'fade-in' : 'fade-out'}`}>
        <MapaOriente />
      </div>
    </div>
  );
};

export default HomePage;


