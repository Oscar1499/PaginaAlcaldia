import React, { useState } from 'react';
import "../estilos/acordeon.css";

const InscripcionMatrimonioContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong> Inscripción de Matrimonio </p>
          <p hidden ><strong>Costo:</strong> $3.68 </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. El funcionario que autorice un matrimonio deberá dentro de los quince días hábiles siguientes 
              a su celebración, para su respectiva inscripción, remitir en físico o por medios
              tecnológicos al registrador del estado familiar competente certificación del acta de celebración
              del matrimonio civil, testimonio de escritura matriz del matrimonio civil o el registro consular 
              de matrimonio, según el art 63 LREF.
          </li>
           </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
          1. Testimonio de escritura pública de la celabración del matrimonio.
          2. En caso de haberse celebrado dentro la alcaldía o gobernación, PGR, debe de presentar acta de matrimonio.
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li>.</li>
          <li>.</li>
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

export default InscripcionMatrimonioContenido;

