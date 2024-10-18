import React, { useState } from 'react';
import '../estilos/consultasgenerales.css';
import Actividad1 from '../assets/iconos/bebetecaslider1.jpeg'; 
import Actividad2 from '../assets/iconos/bebetecaslider2.jpg'; 
import Actividad3 from '../assets/iconos/bebetecaslider3.jpeg'; 

const ConsultasGeneralesContenido = () => {
  const [isOpenGeneralInfo, setIsOpenGeneralInfo] = useState(false);
  const [isOpenSpecialized, setIsOpenSpecialized] = useState(false);

  const toggleGeneralInfo = () => {
    setIsOpenGeneralInfo(!isOpenGeneralInfo);
  };

  const toggleSpecialized = () => {
    setIsOpenSpecialized(!isOpenSpecialized);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Servicios de Salud en La Unión</h1>
      <p className="lead text-center">
        Accede a una variedad de servicios de salud para ti y tu familia.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad1} alt="Psicología" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Psicología</h2>
              <p className="card-text">
                Consulta con profesionales para el manejo de la salud mental y emocional.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad2} alt="Nutrición" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Nutrición</h2>
              <p className="card-text">
                Asesoría nutricional para mejorar hábitos alimenticios y bienestar general.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad3} alt="Medicina General" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Medicina General</h2>
              <p className="card-text">
                Atención médica integral para el diagnóstico y tratamiento de diversas afecciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Acordeón para requisitos */}
      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${isOpenGeneralInfo ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleGeneralInfo}
              aria-expanded={isOpenGeneralInfo ? 'true' : 'false'}
              aria-controls="collapseOne"
            >
              <strong>¿Cómo acceder a los servicios y requisitos?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${isOpenGeneralInfo ? 'show' : ''}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p><strong>Requisitos para acceder a los servicios:</strong></p>
              <ul>
                <li>Ser residente en el municipio de La Unión.</li>
                <li>Presentar una identificación válida (DUI).</li>
                <li>Recibo de servicios públicos como comprobante de domicilio.</li>
              </ul>

              <p><strong>Pasos para acceder a los servicios:</strong></p>
              <ol>
                <li>Completar el formulario de solicitud en línea o en la sede.</li>
                <li>Presentar los documentos requeridos en el momento de la cita.</li>
                <li>Esperar la confirmación y programación de la consulta.</li>
              </ol>

              <p><strong>Documentación requerida:</strong></p>
              <ul>
                <li>Fotocopia del DUI del solicitante.</li>
                <li>Fotografía reciente tamaño cédula.</li>
                <li>Formulario con los datos personales y de contacto.</li>
              </ul>

              <p><strong>¡Es fácil y accesible!</strong> Contáctanos para más información.</p>
            </div>
          </div>
        </div>

        {/* Acordeón para Servicios Especializados */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${isOpenSpecialized ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleSpecialized}
              aria-expanded={isOpenSpecialized ? 'true' : 'false'}
              aria-controls="collapseTwo"
            >
              <strong>Servicios Especializados</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${isOpenSpecialized ? 'show' : ''}`}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p><strong>Servicios ofrecidos:</strong></p>
              <ul>
                <li>Consultas de Ginecología: Atención integral para la salud reproductiva.</li>
                <li>Enfermería: Servicios de atención básica y seguimiento de pacientes.</li>
                <li>Electrocardiogramas: Exámenes para evaluar la salud cardiovascular.</li>
                <li>Citología: Exámenes preventivos para la detección temprana de enfermedades.</li>
                <li>Atención psicológica individual y consejería terapéutica, priorizando casos de violencia contra las mujeres.</li>
                <li>Psicología especializada para niñas, mujeres de todas las edades y niños de 6 a 17 años.</li>
              </ul>
              <p><strong>¿Cómo agendar una cita?</strong></p>
              <ul>
                <li>Acércate a las oficinas del Departamento de Casa de la Mujer o contáctanos por teléfono.</li>
                <li>Agendar cita brindando datos generales: Nombre completo, edad y número de contacto.</li>
                <li>Recibirás una llamada para confirmar la fecha y hora de tu cita.</li>
              </ul>
              <p><strong>¡Cuidamos de tu salud y bienestar!</strong></p>
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

export default ConsultasGeneralesContenido;

