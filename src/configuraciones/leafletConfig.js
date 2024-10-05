// src/utils/leafletConfig.js
import L from 'leaflet';


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const alcaldiaIcon = new L.Icon({
  iconUrl: require('../assets/icons/alcaldia-icon.png'), 
  iconRetinaUrl: require('../assets/icons/alcaldia-icon@2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
