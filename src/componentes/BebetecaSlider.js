import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../estilos/bebeteca.css';
import imagen1 from '../assets/iconos/bebetecaslider1.jpeg'; 
import imagen2 from '../assets/iconos/bebetecaslider2.jpg'; 
import imagen3 from '../assets/iconos/bebetecaslider3.jpeg'; 


const BebetecaSlider = () => {
    return (
        <div className="slider-container"> {/* Contenedor que ocupa el 40% del ancho */}
            <Carousel className="carousel-rtl" interval={3000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagen1} alt="Primera imagen" />
                    <Carousel.Caption>
                        {/* Puedes agregar contenido aquí si lo necesitas */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagen2} alt="Segunda imagen" />
                    <Carousel.Caption>
                        {/* Puedes agregar contenido aquí si lo necesitas */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagen3} alt="Tercera imagen" />
                    <Carousel.Caption>
                        {/* Puedes agregar contenido aquí si lo necesitas */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BebetecaSlider;


