import React, { useState } from 'react';
import "../estilos/acordeon.css";

const Acordeon = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong> Inscripción de Uniones No Matrimoniales </p>
          <p hidden ><strong>Costo:</strong> $3.68 </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. El juez que declare la existencia de la unión no matrimonial remitirá por medio
              de oficio al registrador del estado familiar competente la certificación de la sentencia 
              que declare la existencia de la unión, en el plazo de cinco días hábiles siguientes a aquél 
              en que la resolución quedó firme. En base al art 72 LREF.</li>
              </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
          Certificación de Sentencia ejecutoriada por medio de oficio por el Juez competente.
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li></li>
        
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

export default Acordeon;

