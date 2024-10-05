// src/pages/MapaOriente.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

// Esto es para que los iconos del marcador se muestren correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapaOriente = () => {
  const position = [13.3171, -87.9434]; // Coordenadas de La Unión
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleMarkerClick = () => {
    navigate('/alcaldia-la-union'); // Redirige a AlcaldiaLaUnion.js
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} eventHandlers={{ click: handleMarkerClick }}> {/* Añade el evento de click */}
        <Popup>
          Alcaldía Municipal de La Unión
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaOriente;




