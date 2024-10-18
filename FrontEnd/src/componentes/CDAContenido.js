import React, { useState } from 'react';
import '../estilos/cda.css';
import CDA1Image from '../assets/iconos/bebetecaslider1.jpeg'; 
import CDA2Image from '../assets/iconos/bebetecaslider2.jpg'; 
import CDA3Image from '../assets/iconos/bebetecaslider3.jpeg'; 
import CDA4Image from '../assets/iconos/bebetecaslider1.jpeg'; 
import CDA5Image from '../assets/iconos/bebetecaslider3.jpeg'; 
const CDAContenido = () => {
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
      <h1 className="text-center">Centros de Alcance (CDA)</h1>
      <p className="lead text-center">
        Aquí encontrarás información sobre los CDA disponibles en La Unión.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={CDA1Image} alt="CDA Las Maderas" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">CDA Las Maderas</h2>
              <p className="card-text">Ubicación: Las Maderas. Horarios: Lunes a Viernes, 8:00 AM - 4:00 PM.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={CDA2Image} alt="CDA Condadillo" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">CDA Condadillo</h2>
              <p className="card-text">Ubicación: Condadillo. Horarios: Lunes a Viernes, 8:00 AM - 4:00 PM.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={CDA3Image} alt="CDA Agua Escondida" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">CDA Agua Escondida</h2>
              <p className="card-text">Ubicación: Agua Escondida. Horarios: Lunes a Viernes, 8:00 AM - 4:00 PM.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={CDA4Image} alt="CDA La Unión Centro" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">CDA La Unión Centro</h2>
              <p className="card-text">Ubicación: Centro de La Unión. Horarios: Lunes a Viernes, 8:00 AM - 4:00 PM.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={CDA5Image} alt="CDA La Playa" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">CDA La Playa</h2>
              <p className="card-text">Ubicación: La Playa. Horarios: Lunes a Viernes, 8:00 AM - 4:00 PM.</p>
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
              <p><strong>Misión:</strong> Brindar atención integral y de calidad a la primera infancia, promoviendo su desarrollo físico, emocional y social.</p>
              <p><strong>Visión:</strong> Ser un referente en el cuidado y desarrollo de la niñez en La Unión, garantizando el bienestar y la inclusión de todos los niños y niñas.</p>
              <p><strong>Servicios que brindan:</strong></p>
              <ul>
                <li>Educación Inicial.</li>
                <li>Atención nutricional.</li>
                <li>Psicología y orientación familiar.</li>
                <li>Actividades recreativas y culturales.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acordeón para Requisitos */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${isOpenRequisitos ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleRequisitosAccordion}
              aria-expanded={isOpenRequisitos ? 'true' : 'false'}
              aria-controls="collapseTwo"
            >
              <strong>Requisitos para la Ciudadanía de La Unión</strong>
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
                <li>Residencia en el municipio de La Unión.</li>
                <li>Presentar una identificación válida (DUI).</li>
                <li>Registro de nacimiento del menor.</li>
              </ul>
              <p><strong>¡Asegúrate de tener todos los documentos listos!</strong></p>
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

export default CDAContenido;