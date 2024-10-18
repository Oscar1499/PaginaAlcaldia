import React, { useState } from 'react';
import '../estilos/consultasgenerales.css';
import Actividad1 from '../assets/iconos/bebetecaslider3.jpeg'; 
import Actividad2 from '../assets/iconos/bebetecaslider2.jpg'; 
import Actividad3 from '../assets/iconos/bebetecaslider1.jpeg'; 

const ConsultasVeterinariasContenido = () => {
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
      <h1 className="text-center">Servicios Veterinarios en La Unión</h1>
      <p className="lead text-center">
        Accede a una variedad de servicios veterinarios para cuidar la salud de tus mascotas.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad1} alt="Consulta Veterinaria" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Consulta Veterinaria General</h2>
              <p className="card-text">
                Atención médica integral para el diagnóstico y tratamiento de diversas afecciones en mascotas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad2} alt="Nutrición Animal" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Nutrición Animal</h2>
              <p className="card-text">
                Asesoría sobre alimentación adecuada y hábitos saludables para tus animales.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Actividad3} alt="Salud Preventiva" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Salud Preventiva</h2>
              <p className="card-text">
                Vacunaciones y chequeos regulares para prevenir enfermedades en tus mascotas.
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
                <li>Ser propietario de la mascota.</li>
                <li>Presentar identificación válida (DUI) del dueño.</li>
                <li>Recibo de servicios públicos como comprobante de domicilio.</li>
              </ul>

              <p><strong>Pasos para acceder a los servicios:</strong></p>
              <ol>
                <li>Completar el formulario de solicitud en línea o en la clínica.</li>
                <li>Presentar los documentos requeridos en el momento de la cita.</li>
                <li>Esperar la confirmación y programación de la consulta.</li>
              </ol>

              <p><strong>Documentación requerida:</strong></p>
              <ul>
                <li>Fotocopia del DUI del dueño.</li>
                <li>Fotografía reciente tamaño cédula del propietario.</li>
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
              <strong>Servicios Veterinarios Especializados</strong>
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
                <li>Consulta de Ginecología Veterinaria: Atención integral para la salud reproductiva de las hembras.</li>
                <li>Consulta de Dermatología: Diagnóstico y tratamiento de problemas de piel.</li>
                <li>Servicios de Cirugía: Procedimientos quirúrgicos para mascotas.</li>
                <li>Odontología Veterinaria: Atención dental y limpieza.</li>
                <li>Atención de Emergencias: Servicios para casos urgentes en cualquier momento.</li>
              </ul>
              <p><strong>¿Cómo agendar una cita?</strong></p>
              <ul>
                <li>Acércate a las oficinas de la clínica veterinaria o contáctanos por teléfono.</li>
                <li>Agendar cita brindando datos generales: Nombre del dueño, nombre de la mascota y número de contacto.</li>
                <li>Recibirás una llamada para confirmar la fecha y hora de tu cita.</li>
              </ul>
              <p><strong>¡Cuidamos de tus mascotas y su bienestar!</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Explorar Más Recursos */}
      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg">Explorar Más Recursos Veterinarios</button>
      </div>
    </div>
  );
};

export default ConsultasVeterinariasContenido;
