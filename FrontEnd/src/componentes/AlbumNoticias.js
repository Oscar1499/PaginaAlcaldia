import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stiloglobal.css';

function AlbumNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener las noticias desde la API
  const fetchNoticias = async () => {
    try {
      setCargando(true);
      const response = await fetch("https://servicios.alcaldialaunion.gob.sv/api.php");
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      // Filtrar solo los items de tipo "Noticias" (asumiendo que así se identifica)
      const noticiasFiltradas = data.filter(item => item.tipo === "Noticias");
      // Ordenar las noticias de manera descendente según la fecha
      noticiasFiltradas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
      // Seleccionar solo las 3 últimas noticias
      const ultimasTres = noticiasFiltradas.slice(0, 3);
      setNoticias(ultimasTres);
    } catch (err) {
      console.error("Error al obtener las noticias:", err);
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  if (cargando) {
    return <div className="text-center">Cargando noticias...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="container-fluid p-0 album-noticias">
      <h2 className="text-center mb-4 text-white">NOTICIAS RECIENTES</h2>
      <div className="row">
        {noticias.map((noticia, index) => (
          <div className="col-md-4 mb-4" key={noticia.id_evento || index}>
            <div className="card border-light position-relative" style={{ height: '370px' }}>
              <img 
                src={noticia.imagen_destacada || "https://via.placeholder.com/300x200"} 
                alt={noticia.nombre}
                className="card-img-top"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'none', padding: '10px' }}>
                <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'white' }}>
                  {noticia.nombre}
                </h5>
                <p className="card-text" style={{ fontSize: '1rem', marginBottom: '5px', color: 'white' }}>
                  {noticia.objetivo && noticia.objetivo.length > 100 
                    ? noticia.objetivo.substring(0, 100) + "..." 
                    : noticia.objetivo}
                </p>
                <Link to={`/noticiaDetalles/${noticia.id_evento}`} className="btn btn-primary mt-2" style={{ fontSize: '0.9rem' }}>
                  Más Noticias
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumNoticias;
