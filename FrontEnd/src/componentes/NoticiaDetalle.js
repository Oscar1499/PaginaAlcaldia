import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const NoticiaDetalle = () => {
  const { id } = useParams(); // Obtener el ID de la noticia desde la URL
  const [evento, setEvento] = useState(null); // Estado para almacenar los detalles del evento
  const [imagenes, setImagenes] = useState([]); // Estado para almacenar las imágenes del evento
  const [cargando, setCargando] = useState(true); // Estado para controlar la carga de datos
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener los detalles del evento desde la API
  const fetchEventoDetalle = async () => {
    try {
      setCargando(true); // Activar estado de carga
      const response = await fetch(
        `https://servicios.alcaldialaunion.gob.sv/api.php?id_evento=${id}` // URL ajustada para el API
      );
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      setEvento(data); // Guardar los detalles del evento
      setImagenes(data.imagenes || []); // Guardar las imágenes si existen
    } catch (error) {
      console.error("Error al obtener los detalles del evento:", error.message);
      setError(error.message); // Manejar el error
    } finally {
      setCargando(false); // Desactivar estado de carga
    }
  };

  // Hook para obtener los datos cuando cambia el ID
  useEffect(() => {
    fetchEventoDetalle();
  }, [id]);

  if (cargando) {
    return <div className="text-center">Cargando...</div>; // Mostrar un mensaje mientras se cargan los datos
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>; // Mostrar el mensaje de error
  }

  if (!evento) {
    return <div className="text-center">No se encontró el evento.</div>; // Mostrar un mensaje si no hay datos
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">{evento.nombre}</h1>
      <p className="text-muted text-center">
        {new Date(evento.fecha).toLocaleDateString()}
      </p>

      {/* Carrusel de imágenes */}
      <Carousel className="mb-4">
        {imagenes.length > 0 ? (
          imagenes.map((imagen, index) => (
            <Carousel.Item key={index}>
              <img
                src={imagen || "https://via.placeholder.com/600"} // Ajuste para manejar imágenes vacías
                alt={`Imagen ${index + 1}`}
                className="d-block w-100 mx-auto"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))
        ) : (
          <div className="text-center">No hay imágenes disponibles</div>
        )}
      </Carousel>

      <p className="font-weight-bold">{evento.objetivo}</p>
      <p>{evento.descripcion_completa}</p> {/* Mostrar la descripción completa */}
    </div>
  );
};

export default NoticiaDetalle;
