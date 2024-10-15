import React, { useState } from 'react';
import "../estilos/acordeon.css";

const LegalesAcordeon = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'General',
      content: (
        <div>
          <p><strong>Nombre del servicio:</strong> Diligencia de jurisdicción voluntaria de rectificación por omisión o errores en partidas del Registro Civil</p>
          <p><strong>Costo:</strong> $5.00</p>
          <p><strong>Tiempo de espera:</strong> 3 días hábiles después de recibido el documento.</p>
        </div>
      ),
    },
    {
      title: 'Requisitos para realizar el trámite',
      content: (
        <ul>
          <li>a. Las diligencias deberán presentarse en original y dos copias.</li>
          <li>b. Las hojas debidamente foliadas, en orden cronológico, incorporando cada acta su fecha en forma correlativa, las cuales deberán cumplir con las formalidades de ley artículo 51 Ley de Notariado y 180 Ley Procesal de Familia.</li>
          <li>c. Deben relacionarse las generales completas de los comparecientes (solicitante, apoderado, testigo), conforme a Documento Único de Identidad, del cual deberá anexarse fotocopia para efecto de confrontación de información. En caso de que el solicitante carezca de dicho documento, deberá identificarlo como la ley determina, artículos 32 ordinal 4º y 5º, 51 Ley del Notariado.</li>
          <li>d. Al entregar las diligencias deberá proporcionar un número de teléfono y asignar a las personas que pueden retirar la documentación.</li>
          <li>e. Quien retire las diligencias deberá presentar Documento Único de Identidad.</li>
          <li>f. No se podrán proseguir estas diligencias vía notarial en caso de menores de edad u otras personas naturales incapaces. Artículo 2 de la Ley del Ejercicio Notarial y Jurisdicción Voluntaria y de otras Diligencias- En adelante LENJVOD.</li>
          <li>g. Si compareciere por medio de apoderado, debe cumplirse con lo establecido en los artículos 2 de la Ley del Ejercicio Notarial de la Jurisdicción Voluntaria y otras Diligencias y 69 inciso 3º del Código Procesal Civil y Mercantil, cumpliendo con el principio de literalidad en la cláusula especial; en el caso de las rectificaciones deberá identificarse la partida a rectificar con todos sus datos y consignar el error u omisión a subsanar.</li>
          <li>h. Los nombres y apellidos de los solicitantes y/o personas sobre quienes recae la rectificación, deben consignarse en el acta de solicitud conforme al Documento Único de Identidad, si lo tuvieren. En el caso de los “conocidos por” estos deberán hacerse constar solamente cuando en la respectiva certificación de partida de nacimiento se encuentre la marginación relativa al juicio o diligencias de identidad, artículo 32 Ord. 5º Ley de Notariado, 23 LTREFYRPM.</li>
          <li>i. Cuando se solicite la modificación del nombre o apellidos de uno de los padres del interesado (cambio de nombre o apellido distinto; agregar un nombre y un apellido en razón de la omisión), o de la fecha de nacimiento, deberá anexarse prueba documental, juntamente con la certificación de partida de nacimiento que determine la filiación (indispensable artículo 195 Código de Familia), no siendo suficiente con la declaración de testigos. Ej.: Constancia de nacimiento en hospital, certificado de nacimiento en el extranjero, constancia de partera, fe de bautizo, hoja de plantares de recién nacido, declaración jurada de la persona de donde proviene el error, etc. Artículos 195, 196 inciso 3º, 201 Código de Familia; artículo 26LTREFTRPM, Artículo 11 LENJVOD, Artículos 318, 321 y 331 CPCM.</li>
        </ul>
      ),
    },
    {
      title: 'Documentación requerida',
      content: (
        <p>
          Se deberá presentar prueba documental si se solicita la modificación del nombre o apellidos de uno de los padres del interesado.
        </p>
      ),
    },
    {
      title: 'Pasos a seguir',
      content: (
        <ul>
          <li>Entregar la documentación en Sindicatura Municipal.</li>
          <li>Transcurrido el plazo estipulado, pagar la tasa correspondiente.</li>
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
      <h2 className="titulo">Trámites Legales</h2>
      
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

export default LegalesAcordeon;

