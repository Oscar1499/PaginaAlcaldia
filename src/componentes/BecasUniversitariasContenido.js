import React, { useState } from 'react';
import '../estilos/becasuniversitarias.css';
import Beca1Image from '../assets/iconos/bebetecaslider1.jpeg'; 
import Beca2Image from '../assets/iconos/bebetecaslider2.jpg'; 
import Beca3Image from '../assets/iconos/bebetecaslider3.jpeg'; 
import Beca4Image from '../assets/iconos/bebetecaslider3.jpeg'; 
import Beca5Image from '../assets/iconos/bebetecaslider1.jpeg'; 
import Beca6Image from '../assets/iconos/bebetecaslider3.jpeg'; 

const BecaContenido = () => {
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
      <h1 className="text-center">Tipos de Becas Universitarias en La Unión</h1>
      <p className="lead text-center">
        Aquí encontrarás información sobre los diferentes tipos de becas universitarias disponibles en La Unión.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Beca1Image} alt="Beca Académica" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Beca Académica</h2>
              <p className="card-text">Apoyo financiero para estudiantes con alto rendimiento académico.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Beca2Image} alt="Beca Deportiva" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Beca Deportiva</h2>
              <p className="card-text">Beneficios para estudiantes destacados en actividades deportivas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Beca3Image} alt="Beca Cultural" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Beca Cultural</h2>
              <p className="card-text">Apoyo para estudiantes que participan en actividades culturales y artísticas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Beca4Image} alt="Beca de Necesidad Económica" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Beca de Necesidad Económica</h2>
              <p className="card-text">Ayuda financiera para estudiantes con bajos recursos económicos.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Beca5Image} alt="Beca de Excelencia" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Beca de Excelencia</h2>
              <p className="card-text">Reconocimiento y apoyo para estudiantes que sobresalen en diversas áreas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Beca6Image} alt="Beca de Investigación" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Beca de Investigación</h2>
              <p className="card-text">Apoyo a estudiantes que realizan proyectos de investigación en su área de estudio.</p>
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
              <p><strong>Misión:</strong> Facilitar el acceso a la educación superior a los jóvenes de La Unión, promoviendo su desarrollo académico y profesional.</p>
              <p><strong>Visión:</strong> Ser un modelo en la inclusión educativa, garantizando que todos los jóvenes tengan la oportunidad de acceder a estudios universitarios.</p>
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
              <strong>Requisitos para Obtener una Beca Universitaria</strong>
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
                <li>Ser residente en La Unión.</li>
                <li>Tener un promedio académico mínimo de 75% (para becas académicas).</li>
                <li>Presentar una carta de solicitud dirigida a la alcaldía.</li>
                <li>Documentación que acredite situación económica (si aplica).</li>
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

export default BecaContenido;
