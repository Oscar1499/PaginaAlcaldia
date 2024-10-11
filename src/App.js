import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './componentes/NavbarComponent';
import Layout from './componentes/Layout';
import Footer from './componentes/Footer';
import HomePage from './pages/HomePage'; 
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
import PortalTransparencia from './pages/PortalTransparencia';
import ServiciosDestacados from './componentes/ServiciosDestacados';
import RegistroFamiliar from './pages/RegistroFamiliar';
import Tributario from './pages/Tributario';
import LicenciasMatriculas from './pages/LicenciasMatriculas';
import Juridicos from './pages/Juridicos';
import Cementerio from './pages/Cementerio';
import Parques from './pages/Parques';
import AlbumNoticias from './componentes/AlbumNoticias';
import PantallaCarga from './componentes/PantallaCarga';


const App = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Muestra la pantalla de carga al navegar
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false); // Oculta la pantalla de carga después de 1 segundo
        }, 1000); // Cambia 1000 por el tiempo que desees

        return () => clearTimeout(timer); // Limpia el timer al desmontar
    }, [location]); // Se activa cada vez que cambia la ruta

    return (
        <div className="App">
            {/* Barra de navegación */}
            <NavbarComponent />

            {/* Pantalla de carga */}
            {loading && <PantallaCarga />}

            {/* Layout principal */}
            <Layout>
                <Routes>
                    {/* Página de Inicio */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/servicios-destacados" element={<ServiciosDestacados />} />
                    <Route path="/" exact component={AlbumNoticias} />
                    <Route path="/noticia1" element={<Noticias />} />
                    <Route path="/noticia2" element={<Noticias />} />
                    <Route path="/noticia3" element={<Noticias />} />
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
                    <Route path="/comunidades/parques" element={<Parques />} />
                    <Route path="/comunidades/consultas-veterinarias" element={<ConsultasVeterinarias />} />

                    {/* Rutas de servicios destacados */}
                    <Route path="/registro-familiar" element={<RegistroFamiliar />} />
                    <Route path="/tributario" element={<Tributario />} />
                    <Route path="/licencias-matriculas" element={<LicenciasMatriculas />} />
                    <Route path="/juridicos" element={<Juridicos />} />
                    <Route path="/cementerio" element={<Cementerio />} />

                    {/* Ruta para el Portal de Transparencia */}
                    <Route path="/portaltransparencia" element={<PortalTransparencia />} />

                    {/* Página no encontrada */}
                    <Route path="*" element={<h2>Página no encontrada</h2>} />
                </Routes>
            </Layout>

            {/* Footer */}
            <Footer />
        </div>
    );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;


