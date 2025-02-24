import React, { useState } from 'react';
import '../estilos/bebeteca.css';
import Actividad1 from '../assets/iconos/bebetecaslider1.jpeg'; 
import Actividad2 from '../assets/iconos/bebetecaslider2.jpg'; 
import Actividad3 from '../assets/iconos/bebetecaslider3.jpeg'; 

const BebetecaContenido = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Bienvenido a la Bebeteca</h1>
      <p className="lead text-center">
        Aquí encontrarás una variedad de recursos y actividades para los más pequeños.
      </p>
      <div className="row">
       
   
       
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad1} alt="Cuentos y Lecturas" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Juegos Ludicos</h2>
              <p className="card-text">
               Se fomenta el desarrollo sensorial y motor através de actividades de exploración y juegos diseñados para potenciar las habilidades fisicas y la coordinación de los niños.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad2} alt="Juegos Interactivos" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Lectura de Cuentos</h2>
              <p className="card-text">
                Se desarrolla el crecimiento cognitivo y lingüístico.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad3} alt="Actividades Creativas" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Desarrollo Círculo Familiar</h2>
              <p className="card-text">
                Brinda fortalecimiento en su rol, en el proceso de aprendizaje y desarrollo del niño.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad1} alt="Cuentos y Lecturas" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Visitas Escolares</h2>
              <p className="card-text">
                Actividades de canto, juegos lúdicos, lectura de cuentos entre otras actividades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Acordeón */}
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
              <strong>¿Cómo registrarse y requisitos?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p><strong>Requisitos para registrarse:</strong></p>
              <ul>
                <li>Llenar hoja de inscripción (proporcionada en la bebeteca).</li>
                <li>Registro de nacimiento del niño o niña.</li>
              </ul>

              <p><strong>Pasos para registrarse:</strong></p>
              <ol>
                <li>Completar el formulario.</li>
                <li>Presentar los documentos requeridos en nuestra sede (partida de nacimiento).</li>
              </ol>

              <p><strong>Documentación requerida:</strong></p>
              <ul>
                <li>Fotocopia de DUI del padre, madre o responsable.</li>
                <li>Fotocopia de DUI de una persona extra que pueda retirar al menor.</li>
                <li>Complementar ficha de inscripción con los datos solicitados.</li>
              </ul>

              <p><strong>¡Es fácil y rápido!</strong> No dudes en contactarnos para más detalles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Otra sección de requisitos y documentos necesarios */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p><strong>Documentación adicional:</strong></p>
            <ul>
              <li>Fotocopia de DUI del padre, madre o responsable.</li>
              <li>Fotocopia de DUI de una persona adicional que pueda retirar al menor.</li>
              <li>Fotografía reciente del alumno tamaño cédula.</li>
              <li>Formulario completo con los datos del niño y contacto de los padres.</li>
            </ul>
            <p><strong>Pasos para completar la inscripción:</strong></p>
            <ol>
              <li>Presentar los documentos en la sede de la Bebeteca.</li>
              <li>Confirmar la inscripción con un recibo de registro.</li>
              <li>Recibir el acceso a la plataforma para explorar los recursos.</li>
            </ol>
            <p><strong>¡No olvides todos los documentos para asegurar tu lugar!</strong></p>
          </div>
        </div>
      </div>

      {/* Botón de Explorar Más Recursos, ahora debajo del acordeón */}
      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg">Explorar Más Recursos</button>
      </div>
    </div>
  );
};

export default BebetecaContenido;



