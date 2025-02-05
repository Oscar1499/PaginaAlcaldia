import React, { useState } from 'react';
import "../estilos/acordeon.css";

const ConstanciasContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong>  Constancia de Inexistencia (CI), Constancia de Solteria (CS).</p>
          <p><strong>Costo:</strong> $3.68 </p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Ser mayor de edad.</li>
          <li>b. Tener un interés legítimo en la solicitud.</li>
          <li>c. Contar con la documentación probatoria.</li>
           </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
         1. Presentar solicitud con datos personales como el nombre, lugar de nacimiento, fecha de nacimiento y
         nombre completo de los padres (CI). <br/>
         2. Certificación de partida de nacimiento reciente, copia de DUI (CS).
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li> Presentar la solicitud con los datos personales.</li>
          <li> Realizar el pago del trámite.</li>
          <li> Recibir la constancia.</li>
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

export default ConstanciasContenido;

