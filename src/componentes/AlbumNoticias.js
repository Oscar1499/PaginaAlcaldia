import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import noticia1Icon from '../assets/iconos/noticia1-icon.jpeg'; // Imágenes de noticias
import noticia2Icon from '../assets/iconos/noticia2-icon.jpeg';
import noticia3Icon from '../assets/iconos/noticia3-icon.jpeg';

function AlbumNoticias() {
  return (
    <div className="container-fluid p-0 album-noticias"> {/* Cambié a container-fluid y eliminé el padding */}
      <h2 className="text-center mb-4 text-white">NOTICIAS RECIENTES</h2>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card border-light position-relative">
            <img src={noticia1Icon} alt="Noticia 1" className="card-img-top" />
            <div className="card-img-overlay">
              <h5 className="card-title">Noticia</h5>
              <p className="card-text">Playas Negras</p>
              <Link to="/noticia1" className="btn btn-primary">Leer más</Link>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card border-light position-relative">
            <img src={noticia2Icon} alt="Noticia 2" className="card-img-top" />
            <div className="card-img-overlay">
              <h5 className="card-title">Noticia </h5>
              <p className="card-text">Playa el Esteron</p>
              <Link to="/noticia2" className="btn btn-primary">Leer más</Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card border-light position-relative">
            <img src={noticia3Icon} alt="Noticia 3" className="card-img-top" />
            <div className="card-img-overlay">
              <h5 className="card-title">Noticia </h5>
              <p className="card-text">La Union, Parque la Familia</p>
              <Link to="/noticia3" className="btn btn-primary">Leer más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumNoticias;

