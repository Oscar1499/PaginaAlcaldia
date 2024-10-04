import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './componentes/NavbarComponent';
import Footer from './componentes/Footer';
import HomePage from './pages/HomePage';
import Comunidades from './pages/Comunidades'; 
import Servicios from './pages/Servicios'; 
import Noticias from './pages/Noticias'; 
import Tramites from './pages/Tramites'; 
import PortaldeTransparencia from './pages/PortaldeTransparencia'; 

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comunidades" element={<Comunidades />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/tramites" element={<Tramites />} />
      <Route path="/portaldeTransparencia" element={<PortaldeTransparencia />} /> {/*  */}
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
