import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import img1 from '../assets/iconos/01_Banner.jpg'; 
import img2 from '../assets/iconos/02_Banner.jpg';
import img3 from '../assets/iconos/03_Banner.jpg'; 

const SimpleSlideComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar cuando el usuario ha hecho scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Puedes ajustar el valor según lo que necesites
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`simple-slide-container ${isScrolled ? 'scrolled' : ''}`}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Slide 1"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Slide 2"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Slide 3"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SimpleSlideComponent;
