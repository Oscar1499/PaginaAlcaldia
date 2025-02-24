import React, { useState, useEffect, useCallback } from 'react';
import SlideEventos from '../componentes/SlideEventos'; 
import '../estilos/estilonav.css'; 
import '../stiloglobal.css';
import ServiciosDestacados from '../componentes/ServiciosDestacados';  
import AlbumNoticias from '../componentes/AlbumNoticias';
import MapaOriente from '../pages/MapaOriente';
import '../estilos/homepage.css';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('servicios-y-noticias');

  const handleScroll = useCallback(() => {
    const sections = ['servicios-y-noticias', 'mapa'];
    const scrollY = window.scrollY;

    let foundSection = currentSection;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, height } = element.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const isInView = scrollY >= sectionTop - window.innerHeight / 2 && scrollY < sectionTop + height;

        if (isInView) {
          foundSection = section;
        }
      }
    });

    if (foundSection !== currentSection) {
      setCurrentSection(foundSection);
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="page-content">
      <SlideEventos />

      <section id="servicios-y-noticias" className={`section-container ${currentSection === 'servicios-y-noticias' ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section-title">Servicios y Noticias</h2>
        <ServiciosDestacados />
        <AlbumNoticias />
      </section>

      <section id="mapa" className={`map-section ${currentSection === 'mapa' ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section-title">Mapa Interactivo</h2>
        <MapaOriente />
      </section>
    </div>
  );
};

export default HomePage;