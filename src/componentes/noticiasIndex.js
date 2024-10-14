import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
const NoticiasIndex = () => {
  const [eventos, setEventos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const eventosPorPagina = 6;
  const maximoPaginas = 5;
  const maxCaracteres = 200;

  // Función para obtener todos los eventos
  const obtenerEventos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/eventos");
      setEventos(response.data);
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  };

  // Función para obtener eventos filtrados por tipo
  const obtenerEventosFiltrados = async (tipo) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/eventos/${tipo}`
      ); // Filtrar por tipo
      setEventos(response.data); // Guardar los eventos filtrados
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  };

  useEffect(() => {
    if (filtro === "") {
      obtenerEventos();
    } else {
      obtenerEventosFiltrados(filtro);
    }
  }, [filtro]);

  // Lógica para obtener los eventos de la página actual
  const indiceUltimoEvento = paginaActual * eventosPorPagina;
  const indicePrimerEvento = indiceUltimoEvento - eventosPorPagina;
  const eventosPaginados = eventos.slice(
    indicePrimerEvento,
    indiceUltimoEvento
  );

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
      <Pagination.Prev
        key="prev"
        onClick={() => cambiarPagina(paginaActual - 1)}
      />
    );
  }

  for (let numero = rangoInicio; numero <= rangoFin; numero++) {
    paginador.push(
      <Pagination.Item
        key={numero}
        active={numero === paginaActual}
        onClick={() => cambiarPagina(numero)}
      >
        {numero}
      </Pagination.Item>
    );
  }

  if (paginaActual < totalPaginas) {
    paginador.push(
      <Pagination.Next
        key="next"
        onClick={() => cambiarPagina(paginaActual + 1)}
      />
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Eventos y Noticias</h1>

      {/* Pestañas de filtro */}
      <Tabs
        id="controlled-tab-example"
        activeKey={filtro}
        onSelect={(k) => setFiltro(k)}
        className="mb-4"
      >
        <Tab eventKey="" title="Todos">
          {/* Se muestran todos los eventos */}
        </Tab>
        <Tab eventKey="Noticias" title="Noticias">
          {/* Se muestran las noticias */}
        </Tab>
        <Tab eventKey="Eventos" title="Eventos">
          {/* Se muestran los eventos */}
        </Tab>
      </Tabs>

      {/* Mostrar eventos paginados */}
      <div className="row">
        {eventosPaginados.map((evento, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={index}>
            <div className="card h-100 d-flex flex-column position-relative">
              {/* Mostrar la imagen si está disponible */}
              <img
                src={
                  evento.imagen_destacada || "https://via.placeholder.com/200"
                }
                alt={evento.nombre}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              {/* Fecha del evento en la parte superior derecha de la imagen */}
              <div
                className="position-absolute top-0 end-0 bg-light text-dark p-1 rounded"
                style={{ margin: "10px", opacity: 0.8 }}
              >
                {new Date(evento.fecha).toLocaleDateString()}
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                {/* Convertir el título en un enlace usando Link */}
                <Link
                  to={`/noticiaDetalles/${evento.id_evento}`}
                  className="card-title h6 text-primary text-decoration-none"
                >
                  {evento.nombre}
                </Link>

                {/* Limitar el texto a 200 caracteres */}
                <p className="card-text flex-grow-1">
                  {evento.objetivo.length > maxCaracteres
                    ? evento.objetivo.substring(0, maxCaracteres) + "..."
                    : evento.objetivo}
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
