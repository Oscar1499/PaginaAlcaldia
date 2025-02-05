import React, { useState } from 'react';
import "../estilos/acordeon.css";

const InscripcionDefuncionesContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong> Inscripción de Defunciones </p>
          <p><strong>Costo:</strong> $3.68 </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Cualquier pariente por consanguinidad o afinidad de un fallecido, o persona que, por razón de su cargo, profesión u
              oficio, o vecindad, tuviere conocimiento del fallecimiento de una persona, en el plazo máximo de cuarenta y cinco días
              hábiles siguientes de dicho conocimiento, deberá informarlo al registrador del estado familiar competente, para que asiente 
              la inscripción de defunción en base al art 78 LREF.</li>
        </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
         1. Esquela del Instituto de médicina Legal, constancia o certificado médico expedida y firmada por el médico que atendió o 
         reconoció el cadaver.<br/>
         2. Copia de DUI del fallecido, el informante y un testigo en caso aplicare.
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li>Cuando no fuere posible obtener constancia médica de la muerte, el deceso deberá probarse al registrador del
              estado familiar a través del documento resultante de la autopsia o del levantamiento del cadáver con relación a a determinación del cuerpo sin vida, o en su caso, mediante la declaración de un testigo mayor de dieciocho
              en base a la hábiles siguientes de dicho conocimiento, deberá informarlo al
              años que haya visto el cadáver, quien en todo caso deberá identificarse de acuerdo con lo establecido en la presente ley.
          </li>
          <li>No existe limitaciones en cuanto a que el testigo sea familiar de la persona fallecida..</li>
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

export default InscripcionDefuncionesContenido;

