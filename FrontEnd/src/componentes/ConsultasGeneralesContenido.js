import React, { useState } from 'react';
import '../estilos/consultasgenerales.css';
import Actividad1 from '../assets/iconos/bebetecaslider1.jpeg'; 
import Actividad2 from '../assets/iconos/bebetecaslider2.jpg'; 
import Actividad3 from '../assets/iconos/bebetecaslider3.jpeg'; 
import { Modal, Button, Accordion, Card } from 'react-bootstrap';

const ConsultasGeneralesContenido = () => {
  const [showHorarioModal, setShowHorarioModal] = useState(false);
  const [showRequisitosModal, setShowRequisitosModal] = useState(false);

  const handleHorarioModalClose = () => setShowHorarioModal(false);
  const handleHorarioModalShow = () => setShowHorarioModal(true);

  const handleRequisitosModalClose = () => setShowRequisitosModal(false);
  const handleRequisitosModalShow = () => setShowRequisitosModal(true);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 text-primary">Servicios de Salud en La Unión</h1>
      <p className="lead text-center mb-5">
        Accede a una variedad de servicios de salud para ti y tu familia.
      </p>

      {/* Coordinación con Instituciones y Escuelas */}
      <section className="mb-5">
        <h2 className="text-secondary mb-3">Coordinación con Instituciones y Escuelas para Apoyo</h2>
        <p>
          Con el objetivo de proporcionar un mejor apoyo a la comunidad educativa, contamos con alianzas estratégicas con diversas instituciones:
        </p>
        <ul className="list-group mb-3">
          <li className="list-group-item">CONAPINA</li>
          <li className="list-group-item">ISDEMU</li>
          <li className="list-group-item">Centros Educativos</li>
          <li className="list-group-item">Clínica de la Playa</li>
        </ul>
        <p><strong>Programas disponibles:</strong></p>
        <ul className="list-group mb-3">
          <li className="list-group-item">Charlas psicológicas a los alumnos</li>
          <li className="list-group-item">Capacitación a los maestros</li>
        </ul>
      </section>

                    {/* Carrusel de Imágenes */}
          <section className="mb-5">
            <div className="row">
              {/* Actividad 1 - Psicología Infantil */}
              <div className="col-md-4 mb-3">
                <div className="card shadow-lg">
                  <img src={Actividad1} className="card-img-top" alt="Psicología Infantil" />
                  <div className="card-body">
                    <h5 className="card-title">Psicología Infantil</h5>
                    <p className="card-text">Atención psicológica especializada para el bienestar emocional de los niños.</p>
                  </div>
                </div>
              </div>

              {/* Actividad 2 - Terapia Familiar */}
              <div className="col-md-4 mb-3">
                <div className="card shadow-lg">
                  <img src={Actividad2} className="card-img-top" alt="Terapia Familiar" />
                  <div className="card-body">
                    <h5 className="card-title">Terapia Familiar</h5>
                    <p className="card-text">Sesiones de terapia para fortalecer las relaciones familiares y la comunicación.</p>
                  </div>
                </div>
              </div>

              {/* Actividad 3 - Estimulación Temprana */}
              <div className="col-md-4 mb-3">
                <div className="card shadow-lg">
                  <img src={Actividad3} className="card-img-top" alt="Estimulación Temprana" />
                  <div className="card-body">
                    <h5 className="card-title">Estimulación Temprana</h5>
                    <p className="card-text">Desarrollo de habilidades cognitivas, motoras y emocionales en niños pequeños.</p>
                  </div>
                </div>
              </div>

              {/* Actividad 4 - Orientación y Consejería */}
              <div className="col-md-4 mb-3">
                <div className="card shadow-lg">
                  <img src={Actividad1} className="card-img-top" alt="Orientación y Consejería" />
                  <div className="card-body">
                    <h5 className="card-title">Orientación y Consejería</h5>
                    <p className="card-text">Apoyo en la toma de decisiones y gestión de emociones en padres y niños.</p>
                  </div>
                </div>
              </div>

              {/* Actividad 5 - Tratamientos Psicológicos Especializados */}
              <div className="col-md-4 mb-3">
                <div className="card shadow-lg">
                  <img src={Actividad2} className="card-img-top" alt="Tratamientos Psicológicos" />
                  <div className="card-body">
                    <h5 className="card-title">Tratamientos Psicológicos Especializados</h5>
                    <p className="card-text">Tratamientos enfocados en niños con trastornos emocionales o psicológicos graves.</p>
                  </div>
                </div>
              </div>

              {/* Actividad 6 - Terapia del Lenguaje Infantil */}
              <div className="col-md-4 mb-3">
                <div className="card shadow-lg">
                  <img src={Actividad3} className="card-img-top" alt="Terapia del Lenguaje Infantil" />
                  <div className="card-body">
                    <h5 className="card-title">Terapia del Lenguaje Infantil</h5>
                    <p className="card-text">Tratamiento especializado para mejorar el habla y la comunicación en los más pequeños.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

       {/* Sección de Información Importante */}
       <section className="mb-5">
        <h2 className="text-dark mb-4">Información Importante</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Cómo acceder a los servicios y requisitos?</Accordion.Header>
            <Accordion.Body>
              <Button variant="outline-dark" onClick={handleRequisitosModalShow}>Ver Requisitos</Button>
              <Modal show={showRequisitosModal} onHide={handleRequisitosModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Requisitos para Bebeteca</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li><strong>Edad:</strong> Tener entre 3 meses hasta 7 años de edad.</li>
                    <li><strong>Documentación:</strong> Partida de nacimiento.</li>
                    <li><strong>Salud:</strong> Tarjeta de vacunación, constancia si tiene problemas de salud.</li>
                    <li><strong>Otros:</strong> Copia de DUI del responsable y tiempo disponible para toda la jornada.</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleRequisitosModalClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Horarios de Atención</Accordion.Header>
            <Accordion.Body>
              <Button variant="outline-dark" onClick={handleHorarioModalShow}>Ver Horarios</Button>
              <Modal show={showHorarioModal} onHide={handleHorarioModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Horarios de Atención de Bebeteca</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p><strong>De lunes a viernes de 8:00 a 4:00</strong></p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleHorarioModalClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Servicios de Atención en la Bebeteca */}
      <section>
        <h2 className="text-secondary mb-3">Servicios de Atención</h2>
        <ul className="list-group mb-3">
          <li className="list-group-item">Desarrollo personal y social</li>
          <li className="list-group-item">Lectura de cuentos</li>
          <li className="list-group-item">Comunicación y expresión</li>
          <li className="list-group-item">Habilidades motoras</li>
          <li className="list-group-item">Juegos lúdicos</li>
        </ul>
        <p><strong>Visitas especiales:</strong></p>
        <ul className="list-group">
          <li className="list-group-item">Visitas de los Kider</li>
          <li className="list-group-item">Círculos de familia</li>
        </ul>
      </section>

    
    </div>
  );
};

export default ConsultasGeneralesContenido;
