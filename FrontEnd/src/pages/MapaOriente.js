import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import '../estilos/estilomapa.css'; // archivo CSS
//import Slide from '../componentes/SlideEventos';  


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
    { name: 'Alcaldía de La Unión', position: [13.336010, -87.841909], url: '/alcaldia-la-union' },
    { name: 'Yucuaiquín', position: [13.5480, -88.0020], url: '/yucuaiquin' },
    { name: 'Yayantique', position: [13.4479, -88.0220], url: '/yayantique' },
    { name: 'San Alejo', position: [13.4296, -87.9603], url: '/san-alejo' },
    { name: 'Conchagua', position: [13.3072, -87.8616], url: '/conchagua' },
    { name: 'El Carmen', position: [13.3550, -87.9970], url: '/el-carmen' },
    { name: 'Meanguera', position: [13.1894, -87.7090], url: '/meanguera' },
    { name: 'Intipucá', position: [13.1967, -88.0542], url: '/intipuca' },
  ];

  return (
    <div className='map-container'>
    <MapContainer 
      center={[13.336073, -87.841909]} 
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
          <Popup>{municipio.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default MapaOriente;
