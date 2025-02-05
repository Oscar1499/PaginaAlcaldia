import React, { useState } from 'react';
import "../estilos/acordeon.css";

const AsentamientoNContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong> Inscripción de Nacimiento</p>
          <p><strong>Costo:</strong> Gratis </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>      
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Se debe de informar en un plazo máximo de 45 días en base al art 51, Art 48 LREF.</li>
        </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
          1. Ficha médica del nacimiento emitida por Sistema Nacional Integrado de Salud (PREREGISTRO NUI).<br/>
          2. Copia de DUI de ambos padres si aplicare.
        </p>
        
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li>La persona informante deberá, demostrar la ocurrencia del nacimiento al registrador del estado
              familiar, mediante la declaración de un testigo, mayor de dieciocho años de edad, que pueda dar fé
              conforme a lo dispuesto en esta ley.</li>
          <li>No existen limitaciones en cuanto a que el testigo sea familiar
              de la madre o padre del recién nacido.</li>
          <li>La declaración del testigo sobre el hecho del nacimiento no garantizará la veracidad de esta, por
              tanto, podrá impugnarse en la instancia judicial correspondiente..</li>
          <li>La declaración testimonial deberá agregarse a los anexos del respectivo asiento.</li>
          <li>Así mismo, deberá presentarse al recién nacido para que se impriman sus huellas plantares; el
              documento en que esto se efectúe deberá ser parte de los anexos de la inscripción.</li>
        </ul>
      ),
    },
    {
      title: 'Horarios de atención',
      content: (
        <p>
          Lunes a Viernes, de 8:00 a.m. a 12:00 m. y de 1:00 p.m. a 4:00 p.m.
        </p>
      ),
    },
  ];

  return (
    <div className="acordeon">
      {/* Título con clase "titulo" */}
      <h2 className="titulo">Trámites</h2>
      
      {/* Mapeo de secciones */}
      {sections.map((section, index) => (
        <div key={index} className={`acordeon-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="acordeon-title" onClick={() => handleToggle(index)}>
            {section.title}
            <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}></span>
          </div>
          {activeIndex === index && (
            <div className="acordeon-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AsentamientoNContenido;

