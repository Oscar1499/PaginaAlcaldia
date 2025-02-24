import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoticiasIndex = () => {
  const [eventos, setEventos] = useState([]); // Estado para almacenar los eventos
  const [filtro, setFiltro] = useState(""); // Estado para filtrar noticias o eventos
  const [paginaActual, setPaginaActual] = useState(1); // Estado para la paginación
  const [cargando, setCargando] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de errores
  const eventosPorPagina = 6; // Número de eventos por página
  const maximoPaginas = 5; // Máximo de botones en la paginación
  const maxCaracteres = 200; // Máximo de caracteres en la descripción

  // Función para obtener los eventos desde la API
  const fetchEventos = async () => {
    try {
      setCargando(true); // Activar estado de carga
      const response = await fetch("https://servicios.alcaldialaunion.gob.sv/api.php");
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      setEventos(data); // Guardar los eventos
    } catch (error) {
      console.error("Error al obtener los eventos:", error.message);
      setError(error.message); // Manejar errores
    } finally {
      setCargando(false); // Desactivar estado de carga
    }
  };

  // Hook para cargar los datos al montar el componente
  useEffect(() => {
    fetchEventos();
  }, []);

  // Filtrar eventos según el filtro seleccionado (Noticias o Eventos)
  const eventosFiltrados = filtro
    ? eventos.filter((evento) => evento.tipo === filtro)
    : eventos;

  // Lógica para obtener los eventos de la página actual
  const indiceUltimoEvento = paginaActual * eventosPorPagina;
  const indicePrimerEvento = indiceUltimoEvento - eventosPorPagina;
  const eventosPaginados = eventosFiltrados.slice(indicePrimerEvento, indiceUltimoEvento);

  // Función para manejar el cambio de página
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  // Calcular los botones de paginación
  const totalPaginas = Math.ceil(eventosFiltrados.length / eventosPorPagina);
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
      <Pagination.Next key="next" onClick={() => cambiarPagina(paginaActual + 1)} />
    );
  }

  if (cargando) {
    return <div className="text-center">Cargando eventos...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Eventos y Noticias</h1>

      {/* Pestañas de filtro */}
      <Tabs
        id="controlled-tab-example"
        activeKey={filtro}
        onSelect={(k) => {
          setFiltro(k);
          setPaginaActual(1); // Reiniciar a la página 1 al cambiar filtro
        }}
        className="mb-4"
      >
        <Tab eventKey="" title="Todos"></Tab>
        <Tab eventKey="Noticias" title="Noticias"></Tab>
        <Tab eventKey="Eventos" title="Eventos"></Tab>
      </Tabs>

      {/* Mostrar eventos paginados */}
      <div className="row">
        {eventosPaginados.map((evento, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={index}>
            <div className="card h-100 d-flex flex-column position-relative">
              <img
                src={evento.imagen_destacada || "https://via.placeholder.com/200"}
                alt={evento.nombre}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 end-0 bg-light text-dark p-1 rounded"
                style={{ margin: "10px", opacity: 0.8 }}
              >
                {new Date(evento.fecha).toLocaleDateString()}
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                <Link
                  to={`/noticiaDetalles/${evento.id_evento}`}
                  className="card-title h6 text-primary text-decoration-none"
                >
                  {evento.nombre}
                </Link>
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
