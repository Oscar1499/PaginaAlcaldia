import React, { useState } from 'react';
import "../estilos/acordeon.css";

const CarnetMenoridadContenido = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del trámite:</strong> Carné de Minoridad</p>
          <p><strong>Costo:</strong> $5.00</p>
          <p><strong>Tiempo de espera:</strong> 5 días hábiles, en base a la LREF.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Debe estar acompañado por al menos uno de sus padres o representante legal.</li>
          <li>b. El menor debe tener entre 7 y 17 años..</li>
          <li>c. Ley de identificacion personal para los menores de dieciocho años de edad decreto #589.</li>
       </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
          1. Certificación de partida de nacimiento reciente. <br/>
          2  Debe de residir dentro del municipio. <br/>
          3. Debe de cumplir con la minoría de edad de 10 a 17 añosde edad.<br/>
          4. Acompañarse con uno de suspadres o responsable.
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li> Acudir a la Alcaldía con el menor y la documentación requerida.</li>
          <li>Presentar la partida de nacimiento y la copia del DUI del acompañante.</li>
          <li>Entregar la fotografía tamaño pasaporte.</li>
          <li>Realizar el pago del trámite en caja.</li>
          <li>Esperar la emisión del carné, el cual se entrega en el mismo día o en un máximo de 3 días hábiles.</li>
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

export default CarnetMenoridadContenido;

