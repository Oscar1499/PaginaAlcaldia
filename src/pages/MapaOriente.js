import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import '../estilos/estilomapa.css'; // Importa el archivo CSS

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/iconos/alcaldia-icon2.png.png'), // Icono personalizado 2x
  iconUrl: require('../assets/iconos/alcaldia-icon.png.png'), // Icono personalizado
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Sombra por defecto
});

const MapaOriente = () => {
  const position = [13.3171, -87.9434]; // Coordenadas de La Unión
  const navigate = useNavigate();

  const handleMarkerClick = () => {
    navigate('/alcaldia-la-union');
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
        <Popup>
          Alcaldía Municipal de La Unión
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaOriente;
