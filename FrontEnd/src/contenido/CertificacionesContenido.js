import React, { useState } from 'react';
import "../estilos/acordeon.css";

const CertificacionesContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong> Certificación de Partidas de
                     Nacimiento (CPN), Certificación Matrimonio (CM), Certificación de Partida de Defunción (CPD), 
                     Certificación de Unión No Matrimonial (CUNM),
                     Certificación Divorcios Históricos (CDH), 
                     Certificación de Cedula de Identidad (CCI). </p>
          <p><strong>Costo:</strong> $3.68</p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Presentar solicitud con datos personales (nombre, lugar y fecha de nacimiento)(CPN).</li>
          <li>b. Presentar solicitud con nombres completos de los contrayentes fecha y lugar (CM).</li>
          <li>c. Presentar solicitud con el nombre del fallecido, fecha y lugar del fallecimiento,
                 nombre de los padres o cónyuge (si aplica) (CPD).</li>
          <li>d. Presentar solicitud con los nombres de los convivientes, fecha y lugar de la unión (CUNM).</li>
          <li>e. Presentar solicitud con nombres completos de las partes involucradas, fecha y lugar del divorcio (CDH).</li>
          <li>e. Presentar solicitud con fecha exacta de emisión de cédula a solicitar, y nombre completo de los padres(CCI).</li>
         </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
          1. Copia del DUI del solicitante (CNP),(CM),(CPD),(CDH). <br/>
          2. Copia del DUI de ambos convivientes (CUNM).
        
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li>Presentarse a la Alcaldía con la documentación, en unidad de registro familiar (REF).</li>
          <li>Llenar la solicitud con los datos para cualquiera de su certificación.</li>
          <li>Pagar el arancel establecido, o costo del tramite.</li>
          <li>Esperar la entrega del documento.</li>
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

export default CertificacionesContenido;

