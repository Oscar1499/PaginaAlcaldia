import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import '../estilos/estilomapa.css'; // archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap


// Ajusta el icono predeterminado de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/iconos/alcaldia-icon2.png.png'), // Icono personalizado 2x
  iconUrl: require('../assets/iconos/alcaldia-icon.png.png'), // Icono personalizado
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Sombra por defecto
});

const MapaOriente = () => {
  const navigate = useNavigate();

  const handleMarkerClick = (url) => {
    navigate(url);
  };

  // Coordenadas de los municipios
  const municipios = [
    { name: 'Alcaldía de La Unión', position: [13.336010, -87.841909], url: '/alcaldia-la-union', description: 'Descripción de la Alcaldía de La Unión.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'Yucuaiquín', position: [13.5480, -88.0020], url: '/yucuaiquin', description: 'Descripción de Yucuaiquín.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'Yayantique', position: [13.4479, -88.0220], url: '/yayantique', description: 'Descripción de Yayantique.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'San Alejo', position: [13.4296, -87.9603], url: '/san-alejo', description: 'Descripción de San Alejo.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'Conchagua', position: [13.3072, -87.8616], url: '/conchagua', description: 'Descripción de Conchagua.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'El Carmen', position: [13.3550, -87.9970], url: '/el-carmen', description: 'Descripción de El Carmen.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'Meanguera', position: [13.1894, -87.7090], url: '/meanguera', description: 'Descripción de Meanguera.', image: require('../assets/iconos/noticia1-icon.jpeg') },
    { name: 'Intipucá', position: [13.1967, -88.0542], url: '/intipuca', description: 'Descripción de Intipucá.', image: require('../assets/iconos/noticia1-icon.jpeg') },
  ];

  return (
    <div className='map-container'>
      <MapContainer 
        center={[13.136073, -87.941909]} 
        zoom={10} 
        style={{ height: "100vh", width: "100%" }}
        scrollWheelZoom={false}  // Desactiva el zoom con la rueda del mouse
        dragging={true}          // Permite arrastrar el mapa
        touchZoom={false}        // Desactiva el zoom en pantallas táctiles
        doubleClickZoom={false}  // Desactiva el zoom al hacer doble clic
        zoomControl={false}      // Desactiva los controles de zoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {municipios.map((municipio, idx) => (
          <Marker
            key={idx}
            position={municipio.position}
            eventHandlers={{ click: () => handleMarkerClick(municipio.url) }}
            title={municipio.name}
          >
            <Tooltip direction="top" offset={[0, 0]} opacity={1}>
              <div className="tooltip-container p-2">
                <strong className="d-block mb-1">{municipio.name}</strong>
                <img 
                  src={municipio.image} 
                  alt={municipio.name} 
                  className="img-fluid mb-1" // Clase de Bootstrap para imágenes responsivas
                  style={{ height: '60px' }} // Ajusta la altura según sea necesario
                />
                <small>{municipio.description}</small>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaOriente;




