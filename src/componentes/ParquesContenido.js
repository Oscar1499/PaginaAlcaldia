import React, { useState } from 'react';
import '../estilos/parques.css';
import Parque1Image from '../assets/iconos/bebetecaslider3.jpeg'; 
import Parque2Image from '../assets/iconos/bebetecaslider1.jpeg'; 
import Parque3Image from '../assets/iconos/bebetecaslider3.jpeg'; 
import Parque4Image from '../assets/iconos/bebetecaslider3.jpeg'; 
import Parque5Image from '../assets/iconos/bebetecaslider2.jpg'; 
import Parque6Image from '../assets/iconos/bebetecaslider1.jpeg'; 

const ParqueContenido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRequisitos, setIsOpenRequisitos] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleRequisitosAccordion = () => {
    setIsOpenRequisitos(!isOpenRequisitos);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Parque La Familia en La Unión</h1>
      <p className="lead text-center">
        Descubre todo lo que ofrece el Parque La Familia, un lugar ideal para disfrutar en familia.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Parque1Image} alt="Área de Juegos" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Área de Juegos</h2>
              <p className="card-text">Diversas estructuras para el entretenimiento de los más pequeños.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Parque2Image} alt="Zonas Verdes" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Zonas Verdes</h2>
              <p className="card-text">Espacios naturales para relajarse y disfrutar de un día al aire libre.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Parque3Image} alt="Senderos para Caminar" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Senderos para Caminar</h2>
              <p className="card-text">Caminos seguros para pasear y disfrutar de la naturaleza.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Parque4Image} alt="Área de Picnic" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Área de Picnic</h2>
              <p className="card-text">Zonas habilitadas para disfrutar de comidas al aire libre.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Parque5Image} alt="Eventos y Actividades" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Eventos y Actividades</h2>
              <p className="card-text">Actividades recreativas y eventos comunitarios a lo largo del año.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Parque6Image} alt="Seguridad y Bienestar" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Seguridad y Bienestar</h2>
              <p className="card-text">Un ambiente seguro para disfrutar en familia y con amigos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Acordeón para Misión y Visión */}
      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleAccordion}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls="collapseOne"
            >
              <strong>Misión y Visión</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p><strong>Misión:</strong> Proporcionar un espacio recreativo y de esparcimiento que fomente la convivencia familiar y comunitaria.</p>
              <p><strong>Visión:</strong> Ser el parque de referencia en La Unión, promoviendo el bienestar y la felicidad de las familias.</p>
            </div>
          </div>
        </div>

        {/* Acordeón para Requisitos de Uso del Parque */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${isOpenRequisitos ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleRequisitosAccordion}
              aria-expanded={isOpenRequisitos ? 'true' : 'false'}
              aria-controls="collapseTwo"
            >
              <strong>Requisitos para Usar el Parque</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${isOpenRequisitos ? 'show' : ''}`}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p><strong>Requisitos necesarios:</strong></p>
              <ul>
                <li>Respetar las normas del parque.</li>
                <li>Mantener el área limpia y ordenada.</li>
                <li>Disfrutar de manera responsable y respetuosa.</li>
              </ul>
              <p><strong>¡Contribuye a mantener el parque en buen estado!</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Explorar Más Recursos */}
      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg">Explorar Más Recursos</button>
      </div>
    </div>
  );
};

export default ParqueContenido;

