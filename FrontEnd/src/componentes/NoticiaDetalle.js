import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const NoticiaDetalle = () => {
  const { id } = useParams(); // Obtener el ID de la noticia de la URL
  const [evento, setEvento] = useState(null);
  const [imagenes, setImagenes] = useState([]); // Estado para almacenar las imágenes del carrusel

  // Datos estáticos de noticias
  const noticias = [
    {
      id: 1,
      nombre: "Inauguración de parque en el barrio central",
      fecha: "2024-10-01",
      objetivo: "Un nuevo espacio recreativo para las familias de La Unión.",
      descripcion_completa: "El parque cuenta con áreas verdes, juegos infantiles y espacios para el esparcimiento de toda la familia. Este proyecto busca promover la convivencia y la recreación en un ambiente seguro y limpio.",
      imagenes: [
        { url: "https://via.placeholder.com/600" },
        { url: "https://via.placeholder.com/600" },
      ],
    },
    {
      id: 2,
      nombre: "Capacitación a emprendedores locales",
      fecha: "2024-10-05",
      objetivo: "Apoyo a los emprendedores para fomentar el desarrollo económico.",
      descripcion_completa: "Se brindaron capacitaciones en temas de finanzas, marketing y administración para ayudar a los emprendedores locales a fortalecer sus negocios y contribuir al crecimiento económico de la región.",
      imagenes: [{ url: "https://via.placeholder.com/600" }],
    },
    {
      id: 3,
      nombre: "Jornada de limpieza en el río principal",
      fecha: "2024-10-10",
      objetivo: "Un esfuerzo conjunto para mantener la ciudad limpia.",
      descripcion_completa: "En colaboración con voluntarios y organizaciones locales, se realizó una jornada de limpieza en el río principal para reducir la contaminación y preservar el ecosistema local.",
      imagenes: [{ url: "https://via.placeholder.com/600" }],
    },
    {
      id: 4,
      nombre: "Festival de arte y cultura",
      fecha: "2024-10-15",
      objetivo: "Un evento cultural para destacar el talento local.",
      descripcion_completa: "Este festival reunió a artistas locales en una jornada de música, pintura y teatro, permitiendo a la comunidad disfrutar y apoyar el talento emergente en un evento único en su tipo.",
      imagenes: [
        { url: "https://via.placeholder.com/600" },
        { url: "https://via.placeholder.com/600" },
      ],
    },
    {
      id: 5,
      nombre: "Campaña de salud para la comunidad",
      fecha: "2024-10-20",
      objetivo: "Servicios médicos gratuitos para los residentes de La Unión.",
      descripcion_completa: "La alcaldía ofreció consultas médicas, exámenes y medicamentos gratuitos para promover el bienestar y garantizar el acceso a la salud en la comunidad.",
      imagenes: [{ url: "https://via.placeholder.com/600" }],
    },
    {
      id: 6,
      nombre: "Reparación de calles en el centro",
      fecha: "2024-10-25",
      objetivo: "Mejorando la infraestructura vial para todos.",
      descripcion_completa: "Se están realizando trabajos de reparación y mantenimiento en las calles del centro de La Unión para mejorar la seguridad y la movilidad de los residentes y visitantes.",
      imagenes: [{ url: "https://via.placeholder.com/600" }],
    },
  ];

  useEffect(() => {
    // Encontrar la noticia correspondiente al ID
    const eventoSeleccionado = noticias.find((noticia) => noticia.id === parseInt(id));
    if (eventoSeleccionado) {
      setEvento(eventoSeleccionado);
      setImagenes(eventoSeleccionado.imagenes);
    }
  }, [id]);

  if (!evento) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
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
                src={imagen.url || "https://via.placeholder.com/600"}
                alt={`Imagen ${index + 1}`}
                className="d-block w-100 mx-auto"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))
        ) : (
          <div>No hay imágenes disponibles</div>
        )}
      </Carousel>

      <p>{evento.objetivo}</p>
      <p>{evento.descripcion_completa}</p> {/* Mostrar la descripción completa */}
    </div>
  );
};

export default NoticiaDetalle;
