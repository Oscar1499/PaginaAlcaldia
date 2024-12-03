import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoticiasIndex = () => {
  const [eventos, setEventos] = useState([
    {
      id_evento: 1,
      nombre: "Inauguración de parque en el barrio central",
      objetivo: "Un nuevo espacio recreativo para las familias de La Unión.",
      imagen_destacada: "https://via.placeholder.com/200",
      fecha: "2024-10-01",
    },
    {
      id_evento: 2,
      nombre: "Capacitación a emprendedores locales",
      objetivo: "Apoyo a los emprendedores para fomentar el desarrollo económico.",
      imagen_destacada: "https://via.placeholder.com/200",
      fecha: "2024-10-05",
    },
    {
      id_evento: 3,
      nombre: "Jornada de limpieza en el río principal",
      objetivo: "Un esfuerzo conjunto para mantener la ciudad limpia.",
      imagen_destacada: "https://via.placeholder.com/200",
      fecha: "2024-10-10",
    },
    {
      id_evento: 4,
      nombre: "Festival de arte y cultura",
      objetivo: "Un evento cultural para destacar el talento local.",
      imagen_destacada: "https://via.placeholder.com/200",
      fecha: "2024-10-15",
    },
    {
      id_evento: 5,
      nombre: "Campaña de salud para la comunidad",
      objetivo: "Servicios médicos gratuitos para los residentes de La Unión.",
      imagen_destacada: "https://via.placeholder.com/200",
      fecha: "2024-10-20",
    },
    {
      id_evento: 6,
      nombre: "Reparación de calles en el centro",
      objetivo: "Mejorando la infraestructura vial para todos.",
      imagen_destacada: "https://via.placeholder.com/200",
      fecha: "2024-10-25",
    },
  ]);

  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const eventosPorPagina = 6;
  const maximoPaginas = 5;
  const maxCaracteres = 200;

  // Lógica para obtener los eventos de la página actual
  const indiceUltimoEvento = paginaActual * eventosPorPagina;
  const indicePrimerEvento = indiceUltimoEvento - eventosPorPagina;
  const eventosPaginados = eventos.slice(indicePrimerEvento, indiceUltimoEvento);

  // Función para manejar el cambio de página
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  // Calcular los botones de paginación
  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);
  const paginador = [];

  // Rango de paginación dinámico
  const rangoInicio = Math.max(1, paginaActual - Math.floor(maximoPaginas / 2));
  const rangoFin = Math.min(totalPaginas, rangoInicio + maximoPaginas - 1);

  if (paginaActual > 1) {
    paginador.push(
      <Pagination.Prev key="prev" onClick={() => cambiarPagina(paginaActual - 1)} />
    );
  }

  for (let numero = rangoInicio; numero <= rangoFin; numero++) {
    paginador.push(
      <Pagination.Item key={numero} active={numero === paginaActual} onClick={() => cambiarPagina(numero)}>
        {numero}
      </Pagination.Item>
    );
  }

  if (paginaActual < totalPaginas) {
    paginador.push(
      <Pagination.Next key="next" onClick={() => cambiarPagina(paginaActual + 1)} />
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Eventos y Noticias</h1>

      {/* Pestañas de filtro */}
      <Tabs id="controlled-tab-example" activeKey={filtro} onSelect={(k) => setFiltro(k)} className="mb-4">
        <Tab eventKey="" title="Todos"></Tab>
        <Tab eventKey="Noticias" title="Noticias"></Tab>
        <Tab eventKey="Eventos" title="Eventos"></Tab>
      </Tabs>

      {/* Mostrar eventos paginados */}
      <div className="row">
        {eventosPaginados.map((evento, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={index}>
            <div className="card h-100 d-flex flex-column position-relative">
              <img src={evento.imagen_destacada || "https://via.placeholder.com/200"} alt={evento.nombre} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
              <div className="position-absolute top-0 end-0 bg-light text-dark p-1 rounded" style={{ margin: "10px", opacity: 0.8 }}>
                {new Date(evento.fecha).toLocaleDateString()}
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={`/noticiaDetalles/${evento.id_evento}`} className="card-title h6 text-primary text-decoration-none">
                  {evento.nombre}
                </Link>
                <p className="card-text flex-grow-1">
                  {evento.objetivo.length > maxCaracteres ? evento.objetivo.substring(0, maxCaracteres) + "..." : evento.objetivo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Paginación */}
      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>{paginador}</Pagination>
        </div>
      )}
    </div>
  );
};

export default NoticiasIndex;
