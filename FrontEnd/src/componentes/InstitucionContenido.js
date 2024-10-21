import React from 'react';
import '../estilos/institucioncontenido.css';
import MapaOriente from '../pages/MapaOriente';
import img1 from '../assets/iconos/01_Banner.jpg';




const InstitucionContenido = () => {
  return (
    <div className="institucion-contenido">
      {/* Sección 1: Descripción de la Alcaldesa */}
      <section className="alcaldesa">
        <h2>Alcaldesa de La Unión Sur</h2>
        <div className="alcaldesa-info">
        <img src={img1} alt="Victoria Gutiérrez" className="alcaldesa-imagen" />
          <p>
            La Alcaldesa Victoria Gutiérrez cuenta con más de 10 años de experiencia en el servicio público. 
            Su compromiso con el desarrollo sostenible y la participación ciudadana ha llevado a implementar 
            importantes iniciativas que benefician a la comunidad, como el programa de desechos solidos, para los distintos distritos, etc.
          </p>
          <p>
            Ha liderado proyectos de infraestructura y programas para fortalecer la economía local, 
            destacándose por su enfoque en la transparencia y la innovación.
          </p>
        </div>
      </section>

      {/* Sección 2: Misión, Visión y Valores */}
      <section className="mision-vision-valores">
        <h2>Misión, Visión y Valores</h2>
        <div className="tarjetas">
          <div className="tarjeta">
            <h3>Misión</h3>
            <p>
              Garantizar la satisfacción de las necesidades de los ciudadanos mediante un gobierno 
              inclusivo y transparente, promoviendo el desarrollo sostenible.
            </p>
          </div>
          <div className="tarjeta">
            <h3>Visión</h3>
            <p>
              Convertirse en un modelo de gestión pública eficiente, destacándose por su orden y desarrollo local.
            </p>
          </div>
          <div className="tarjeta">
            <h3>Valores</h3>
            <ul>
              <li>Compromiso</li>
              <li>Transparencia</li>
              <li>Efectividad</li>
              <li>Probidad</li>
              <li>Solidaridad</li>
              <li>Temperancia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección 3: Nuevos Distritos */}
      <section className="nuevos-distritos">
        <h2>Nuevos Distritos de La Unión Sur</h2>
        <p>
          La Alcaldía ha crecido incorporando nuevos distritos para mejorar la gestión y los servicios. 
          Los nuevos distritos incluyen:
        </p>
        <ul>
          <li>Conchagua</li>
          <li>El Carmen</li>
          <li>Intipucá</li>
          <li>La Unión</li>
          <li>Meanguera del Golfo</li>
          <li>San Alejo</li>
          <li>Yayantique</li>
          <li>Yucuaiquín</li>
        </ul>
        <p>
          El 1 de junio de 2023, el presidente Nayib Bukele propuso la reducción de los concejos municipales a 44, 
          y esta propuesta fue aprobada por la Asamblea Legislativa el 13 de junio de 2023. La nueva ley, 
          ratificada el 14 de junio, transforma los antiguos 262 municipios en distritos dentro de los 44 nuevos municipios.
        </p>
        <div className="image-placeholder">
    
          <MapaOriente />
        </div>
      </section>
    </div>
  );
};

export default InstitucionContenido;
