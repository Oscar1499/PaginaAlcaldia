import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './componentes/NavbarComponent';
import Footer from './componentes/Footer';
import HomePage from './componentes/HomePage';
import Servicios from './componentes/Servicios';
import Noticias from './componentes/Noticias';
import Tramites from './componentes/Tramites';

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/tramites" element={<Tramites />} />
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
    <Footer />
  </Router>
);



export default App;
