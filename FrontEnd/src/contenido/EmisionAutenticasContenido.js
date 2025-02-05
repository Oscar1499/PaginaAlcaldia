import React, { useState } from 'react';
import "../estilos/acordeon.css";

const EmisionAutenticasContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del Trámites:</strong> Emisión de Autenticas</p>
          <p><strong>Costo:</strong> $9.98 </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a.   Se deberá presentar prueba documental si se solicita la modificación del nombre o apellidos de uno de los padres del interesado.</li>
          <li>b. Indicar antes de solciitar cualquier documento que se necesite ser emitido en
              el Registro del Estado Familiar con estas caracteristicas: FIRMA DEL
              REGISTRADOR, FIRMA DEL SECRETARIO MUNICIPAL, FIRMA DE ALCALDE. </li>
            </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
        1. Documento original a autenticar.
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li> 1. Presentar el documento en escritorio.</li>
          <li> 2. Indicar el tipo de firma requerida.</li>
          <li> 3. Pagar el costo del trámite.</li>
          <li> 4. Esperar la autenticación.</li>
       
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

export default EmisionAutenticasContenido;

