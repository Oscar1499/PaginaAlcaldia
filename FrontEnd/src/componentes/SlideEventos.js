import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/iconos/01_Banner.jpg';
import img2 from '../assets/iconos/02_Banner.jpg';
import img3 from '../assets/iconos/03_Banner.jpg';
import '../estilos/slider.css'; 

const SimpleSlideComponent = () => {
  const slides = [
    {
      img: img1,
   
    },
    {
      img: img2,
    
    },
    {
      img: img3,
   
    },
  ];


  const handleScroll = () => {
    const captions = document.querySelectorAll('.carousel-caption');

    captions.forEach((caption) => {
      const rect = caption.getBoundingClientRect();

      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        caption.classList.add('visible'); 
        caption.classList.remove('hidden'); 
      } else {
        caption.classList.remove('visible'); 
        caption.classList.add('hidden'); 
      }
    });
  };

  useEffect(() => {
   
    window.addEventListener('scroll', handleScroll);

   
    handleScroll();

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="slider-container">
      <Carousel fade interval={5000} controls={true} indicators={true} className="custom-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 slider-img" src={slide.img} alt={slide.alt} />
            <Carousel.Caption className="carousel-caption hidden">
              <h3>{slide.title}</h3>
              <p>{slide.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleSlideComponent;
