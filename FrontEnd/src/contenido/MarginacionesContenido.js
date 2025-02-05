import React, { useState } from 'react';
import "../estilos/acordeon.css";

const MarginacionesContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del Trámite:</strong> Marginaciones (MG), Reposiciones (RP)</p>
          <p><strong>Costo:</strong> $3.68 </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Solicitud escrita dirigida al Registro del Estado Familiar, especificando el tipo de marginación solicitada (MG). </li>
          <li>b. Documentos probatorios (MG), (RP).</li>
          </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
         1. Documentos probatorios que respalden la modificación (MG). <br/>
         2. Copia del DUI del solicitante (MG),(RP). <br/>
         3. Se realiza a solicitud de la parte interesada.
         4. Llenado de formulario y solicitud (RP).
         5. Partida certificada por Notario o Microfilm emitidopor RNPN (RP)

        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li>Solicitar la corrección con los documentos de respaldo.</li>
          <li>Pagar el costo del trámite.</li>
          <li>Esperar la resolución del caso.</li>
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

export default MarginacionesContenido;

