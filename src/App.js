import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './componentes/NavbarComponent';
import Footer from './componentes/Footer';
import Servicios from './pages/Servicios';
import Noticias from './pages/Noticias';
import Tramites from './pages/Tramites';
import Bebeteca from './pages/Bebeteca';
import CDA from './pages/CDA';
import BecasUniversitarias from './pages/BecasUniversitarias';
import ConsultasGenerales from './pages/ConsultasGenerales';
import ConsultasVeterinarias from './pages/ConsultasVeterinarias';
import MapaOriente from './pages/MapaOriente';
import AlcaldiaLaUnion from './pages/AlcaldiaLaUnion';
import DistritoMeanguera from './pages/DistritoMeanguera';
import DistritoConchagua from './pages/DistritoConchagua';
import DistritoElCarmen from './pages/DistritoElCarmen';
import DistritoIntipuca from './pages/DistritoIntipuca';
import DistritoSanAlejo from './pages/DistritoSanAlejo';
import DistritoYucuaiquin from './pages/DistritoYucuaiquin';
import DistritoYayantique from './pages/DistritoYayantique';

const App = () => (
  <Router>
    <div className="App">
      {/* Barra de navegación */}
      <NavbarComponent />

      {/* Rutas de la aplicación */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MapaOriente />} />
          <Route path="/mapa-oriente" element={<MapaOriente />} />
          <Route path="/alcaldia-la-union" element={<AlcaldiaLaUnion />} />
          <Route path="/meanguera" element={<DistritoMeanguera />} />
          <Route path="/conchagua" element={<DistritoConchagua />} />
          <Route path="/el-carmen" element={<DistritoElCarmen />} />
          <Route path="/intipuca" element={<DistritoIntipuca />} />
          <Route path="/san-alejo" element={<DistritoSanAlejo />} />
          <Route path="/yucuaiquin" element={<DistritoYucuaiquin />} />
          <Route path="/yayantique" element={<DistritoYayantique />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/tramites" element={<Tramites />} />

          {/* Rutas de las opciones de Comunidades */}
          <Route path="/comunidades/bebeteca" element={<Bebeteca />} />
          <Route path="/comunidades/cda" element={<CDA />} />
          <Route path="/comunidades/becas-universitarias" element={<BecasUniversitarias />} />
          <Route path="/comunidades/consultas-generales" element={<ConsultasGenerales />} />
          <Route path="/comunidades/consultas-veterinarias" element={<ConsultasVeterinarias />} />
          {/* Página no encontrada */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
);

export default App;

