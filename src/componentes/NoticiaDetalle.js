import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';  // Importamos el componente de Carousel de Bootstrap

const NoticiaDetalle = () => {
  const { id } = useParams();  // Obtener el ID de la noticia de la URL
  const [evento, setEvento] = useState(null);
  const [imagenes, setImagenes] = useState([]);  // Estado para almacenar las imágenes del carrusel

  useEffect(() => {
    // Obtener los datos del evento por ID y las imágenes relacionadas
    const obtenerEvento = async () => {
      try {
        const responseEvento = await axios.get(`http://localhost:5000/api/eventos/detalle/${id}`);
        const responseImagenes = await axios.get(`http://localhost:5000/api/galerias/${id}`);  // Obtener las imágenes relacionadas con el evento

        setEvento(responseEvento.data);
        setImagenes(responseImagenes.data);  // Guardamos las imágenes en el estado
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    obtenerEvento();
  }, [id]);

  if (!evento) {
    return <div>Cargando...</div>;  // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">{evento.nombre}</h1>
      <p className="text-muted text-center">{new Date(evento.fecha).toLocaleDateString()}</p>

      {/* Carrusel de imágenes */}
      <Carousel className="mb-4">
        {imagenes.length > 0 ? (
          imagenes.map((imagen, index) => (
            <Carousel.Item key={index}>
              <img
                src={imagen.url || "https://via.placeholder.com/600"}
                alt={`Imagen ${index + 1}`}
                className="d-block w-100 mx-auto"  // Centramos la imagen y ajustamos el ancho
                style={{ height: '400px', objectFit: 'cover' }}  // Ajustamos el tamaño estándar de las imágenes
              />
            </Carousel.Item>
          ))
        ) : (
          <div>No hay imágenes disponibles</div>
        )}
      </Carousel>

      <p>{evento.objetivo}</p>
      <p>{evento.descripcion_completa}</p>  {/* Mostrar la descripción completa */}
    </div>
  );
};

export default NoticiaDetalle;
