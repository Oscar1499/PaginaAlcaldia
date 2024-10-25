import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Nav, Tab } from 'react-bootstrap';

const Servicios = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedServicio, setSelectedServicio] = useState(null);

  const servicios = {
    Salud: [
      {
        nombre: 'Atención Médica Primaria',
        descripcion: 'Clínicas municipales que ofrecen atención básica y programas de salud preventiva.',
        icono: 'fa-solid fa-stethoscope',
        unidad: 'Unidad de Salud Comunitaria',
        detalles: 'Ofrecemos atención primaria y servicios preventivos para la comunidad.',
        documentacion: 'Documento de identidad y registro en el sistema de salud municipal.'
      },
      {
        nombre: 'Control de Plagas',
        descripcion: 'Control de plagas en espacios públicos para garantizar la salubridad del municipio.',
        icono: 'fa-solid fa-bug',
        unidad: 'Unidad de Salud Ambiental',
        detalles: 'Jornadas de fumigación en zonas de riesgo para prevenir enfermedades.',
        documentacion: 'Solicitud de fumigación y registro de la zona a ser intervenida.'
      },
      {
        nombre: 'Campañas de Vacunación',
        descripcion: 'Programas de vacunación para prevenir enfermedades en la comunidad.',
        icono: 'fa-solid fa-syringe',
        unidad: 'Unidad de Salud Comunitaria',
        detalles: 'Campañas de vacunación gratuitas en puntos designados del municipio.',
        documentacion: 'Documento de identidad y formulario de consentimiento.'
      },
      {
        nombre: 'Asistencia Veterinaria',
        descripcion: 'Servicio de atención y rescate de animales en situación de emergencia.',
        icono: 'fa-solid fa-paw',
        unidad: 'Unidad de Bienestar Animal',
        detalles: 'Asistencia en rescate y atención veterinaria de emergencia para animales en riesgo.',
        documentacion: 'Reporte del lugar de la emergencia y contacto del reportante.'
      },
      {
        nombre: 'Servicios de Psicología',
        descripcion: 'Atención psicológica gratuita para la comunidad.',
        icono: 'fa-solid fa-brain',
        unidad: 'Unidad de Bienestar Social',
        detalles: 'Apoyo psicológico y terapias para ciudadanos en situación de vulnerabilidad.',
        documentacion: 'Documento de identidad y cita previa registrada.'
      },
      {
        nombre: 'Clínicas de Salud Preventiva',
        descripcion: 'Servicios de chequeo preventivo en salud.',
        icono: 'fa-solid fa-heartbeat',
        unidad: 'Unidad de Salud Comunitaria',
        detalles: 'Chequeos regulares para la prevención de enfermedades crónicas.',
        documentacion: 'Documento de identidad y ficha médica actualizada.'
      }
    ],
    Infraestructura: [
      {
        nombre: 'Alumbrado Público',
        descripcion: 'Instalación y mantenimiento de alumbrado en calles del municipio.',
        icono: 'fa-solid fa-lightbulb',
        unidad: 'Unidad de Obras Públicas',
        detalles: 'Iluminación de espacios públicos para mejorar la seguridad.',
        documentacion: 'Solicitud de alumbrado y ubicación de la zona a intervenir.'
      },
      {
        nombre: 'Mantenimiento de Parques y Jardines',
        descripcion: 'Cuidado de parques y áreas verdes municipales.',
        icono: 'fa-solid fa-tree',
        unidad: 'Unidad de Medio Ambiente',
        detalles: 'Mantenimiento de infraestructura recreativa y limpieza.',
        documentacion: 'Solicitud de mantenimiento y ubicación del parque.'
      },
      {
        nombre: 'Reparación de Calles',
        descripcion: 'Mantenimiento y reparación de calles municipales.',
        icono: 'fa-solid fa-road',
        unidad: 'Unidad de Infraestructura Vial',
        detalles: 'Reparación de vías públicas para mejorar el tránsito.',
        documentacion: 'Reporte de daños en la vía y autorización de la unidad responsable.'
      },
      {
        nombre: 'Recolección de Basura',
        descripcion: 'Servicio de recolección de residuos en zonas urbanas.',
        icono: 'fa-solid fa-trash-alt',
        unidad: 'Unidad de Servicios Municipales',
        detalles: 'Recogida semanal de residuos sólidos.',
        documentacion: 'Registro de ubicación y horario de recolección asignado.'
      },
      {
        nombre: 'Construcción de Infraestructura Pública',
        descripcion: 'Construcción de nuevas infraestructuras para la comunidad.',
        icono: 'fa-solid fa-building',
        unidad: 'Unidad de Obras Públicas',
        detalles: 'Construcción de espacios recreativos y educativos.',
        documentacion: 'Plan de construcción y permisos aprobados por la alcaldía.'
      },
      {
        nombre: 'Limpieza de Alcantarillado',
        descripcion: 'Limpieza de sistemas de drenaje y alcantarillado público.',
        icono: 'fa-solid fa-water',
        unidad: 'Unidad de Infraestructura Vial',
        detalles: 'Mantenimiento preventivo de sistemas de alcantarillado.',
        documentacion: 'Solicitud de limpieza y ubicación específica del drenaje.'
      }
    ],
    'Asistencia Social': [
      {
        nombre: 'Asistencia a Familias Vulnerables',
        descripcion: 'Apoyo a familias en condiciones de pobreza extrema.',
        icono: 'fa-solid fa-hands-helping',
        unidad: 'Unidad de Bienestar Social',
        detalles: 'Entrega de alimentos y apoyo económico.',
        documentacion: 'Estudio socioeconómico y documento de identidad de los beneficiarios.'
      },
      {
        nombre: 'Ayuda para Personas con Discapacidad',
        descripcion: 'Programa de apoyo para personas con discapacidad.',
        icono: 'fa-solid fa-wheelchair',
        unidad: 'Unidad de Bienestar Social',
        detalles: 'Asistencia médica y económica para personas con discapacidades.',
        documentacion: 'Certificado de discapacidad y documento de identidad.'
      },
      {
        nombre: 'Programas de Vivienda',
        descripcion: 'Apoyo en construcción y mejora de viviendas.',
        icono: 'fa-solid fa-home',
        unidad: 'Unidad de Vivienda Social',
        detalles: 'Asesoría y financiamiento en mejoras habitacionales.',
        documentacion: 'Documento de identidad y solicitud de ayuda habitacional.'
      },
      {
        nombre: 'Distribución de Ropa y Calzado',
        descripcion: 'Entrega de ropa y calzado a familias necesitadas.',
        icono: 'fa-solid fa-tshirt',
        unidad: 'Unidad de Bienestar Social',
        detalles: 'Distribución de donaciones de ropa y calzado.',
        documentacion: 'Registro de beneficiarios y documento de identidad.'
      },
      {
        nombre: 'Atención a Adultos Mayores',
        descripcion: 'Apoyo integral a la tercera edad.',
        icono: 'fa-solid fa-user',
        unidad: 'Unidad de Bienestar Social',
        detalles: 'Programas de atención y cuidados para adultos mayores.',
        documentacion: 'Documento de identidad y registro en programas de apoyo.'
      },
      {
        nombre: 'Servicios de Comedores Comunitarios',
        descripcion: 'Acceso a comedores comunitarios gratuitos.',
        icono: 'fa-solid fa-utensils',
        unidad: 'Unidad de Asistencia Social',
        detalles: 'Comidas diarias para personas en situación de vulnerabilidad.',
        documentacion: 'Registro en el comedor comunitario y documento de identidad.'
      }
    ]
  };

  const handleShowModal = (servicio) => {
    setSelectedServicio(servicio);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedServicio(null);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Servicios</h1>
      <p className="text-center mb-5">Descubre los servicios que la alcaldía ofrece organizados por categoría.</p>
      
      <Tab.Container defaultActiveKey="Salud">
        <Nav variant="pills" className="justify-content-center mb-4">
          {Object.keys(servicios).map((categoria, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={categoria}>{categoria}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {Object.entries(servicios).map(([categoria, serviciosList], index) => (
            <Tab.Pane eventKey={categoria} key={index}>
              <div className="row gy-4">
                {serviciosList.map((servicio, idx) => (
                  <div className="col-md-4 col-sm-6" key={idx}>
                    <div className="card shadow-sm border-0 h-100" onClick={() => handleShowModal(servicio)}>
                      <div className="card-body text-center">
                        <i className={`${servicio.icono} fa-3x mb-3 text-primary`}></i>
                        <h5 className="card-title mb-3">{servicio.nombre}</h5>
                        <p className="card-text">{servicio.descripcion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>

      {/* Modal de Detalle */}
      {selectedServicio && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedServicio.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Descripción:</strong> {selectedServicio.detalles}</p>
            <p><strong>Unidad Responsable:</strong> {selectedServicio.unidad}</p>
            <p><strong>Documentación Necesaria:</strong> {selectedServicio.documentacion}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Servicios;
