import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stiloglobal.css';
import noticia1Icon from '../assets/iconos/noticia1-icon.jpeg'; 
import noticia2Icon from '../assets/iconos/noticia2-icon.jpeg';
import noticia3Icon from '../assets/iconos/noticia3-icon.jpeg';

function AlbumNoticias() {
  return (
    <div className="container-fluid p-0 album-noticias">
      <h2 className="text-center mb-4 text-white">NOTICIAS RECIENTES</h2>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card border-light position-relative" style={{ height: '370px' }}>
            <img src={noticia1Icon} alt="Noticia 1" className="card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'none', padding: '10px' }}>
              <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'white' }}>Noticia</h5>
              <p className="card-text" style={{ fontSize: '1rem', marginBottom: '5px', color: 'white' }}>Playas Negras</p>
              <Link to="/noticias" className="btn btn-primary mt-2" style={{ fontSize: '0.9rem' }}>Leer más</Link>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card border-light position-relative" style={{ height: '370px' }}>
            <img src={noticia2Icon} alt="Noticia 2" className="card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'none', padding: '10px' }}>
              <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'white' }}>Noticia</h5>
              <p className="card-text" style={{ fontSize: '1rem', marginBottom: '5px', color: 'white' }}>Playa el Esteron</p>
              <Link to="/noticias" className="btn btn-primary mt-2" style={{ fontSize: '0.9rem' }}>Leer más</Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card border-light position-relative" style={{ height: '370px' }}>
            <img src={noticia3Icon} alt="Noticia 3" className="card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'none', padding: '10px' }}>
              <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'white' }}>Noticia</h5>
              <p className="card-text" style={{ fontSize: '1rem', marginBottom: '5px', color: 'white' }}>La Unión, Parque la Familia</p>
              <Link to="/noticias" className="btn btn-primary mt-2" style={{ fontSize: '0.9rem' }}>Leer más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumNoticias;







