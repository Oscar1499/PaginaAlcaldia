import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Tributario from './pages/Tributario';
import LicenciasMatriculas from './pages/LicenciasMatriculas';
import Juridicos from './pages/Juridicos';
import Cementerio from './pages/Cementerio';
import Parques from './pages/Parques';
import AlbumNoticias from './componentes/AlbumNoticias';
import PantallaCarga from './componentes/PantallaCarga';
import NoticiaDetalles from './pages/NoticiaDetalles';  
import TramitesContenido from './componentes/TramitesContenido';
import TramitesLegales from './pages/Legales';
import Constancias from './pages/Constancias';
import Empresariales from './pages/Empresariales';
import RegistroFamiliar from './pages/RegistroFamiliar';
import Inmuebles from './pages/Inmuebles';
import TramitesConstruccion from './pages/TramitesConstruccion';
import TramitesCementerio from './pages/TramitesCementerio';
import TramitesDelegacion from './pages/TramitesDelegacion';
import ScrollToTop from './componentes/ScrollToTop'; 
import Contactenos from './pages/Contactenos';
import Distritos from './pages/Distritos';
import Institucion from './pages/Institucion';
import DiligenciaVoluntaria from './pages/DiligenciaVoluntaria';
import DiligenciaSubsidiario from './pages/DiligenciaSubsidiario';
import AsociacionesComunales from './pages/AsociacionesComunales';
import TituloPropiedad from './pages/TituloPropiedad';
import ConstanciaCatastral from './pages/ConstanciaCatastral';
import ConstanciaInscripcion from './pages/ConstanciaInscripcion';
import ConstanciaCementerios from './pages/ConstanciaCementerios';
import ConstanciaMunicipal from './pages/ConstanciaMunicipal';
import ConstanciaVarias from './pages/ConstanciaVarias';
import PermisosPublicitarios from './pages/PermisosPublicitarios';
import Vialidades from './pages/Vialidades';
import LicenciaOperaciones from './pages/LicenciaOperaciones';
import RenovacionPermanencia from './pages/RenovacionPermanencia';
import LicenciaPublicitaria from './pages/LicenciaPublicitaria';
import EstadoCuenta from './pages/EstadoCuenta';
import SolvenciaGeneral from './pages/SolvenciaGeneral';
import PlanesPago from './pages/PlanesPago';
import ConceptoNegocio from './pages/ConceptoNegocio';
import CalificacionesOficio from './pages/CalificacionesOficio';
import InscripcionMandato from './pages/InscripcionMandato';
import TraspasosInmuebles from './pages/TraspasosInmuebles';
import TraspasoHerencia from './pages/TraspasoHerencia';
import EmisionCertificacionPartidas from './pages/EmisionCertificacionPartidas';
import EmisionAutenticaPartidas from './pages/EmisionAutenticaPartidas';
import CarnetIdentificacionPersonal from './pages/CarnetIdentificacionPersonal';
import ConstanciasFichasCedulas from './pages/ConstanciasFichasCedulas';
import RecepcionDocumentos from './pages/RecepcionDocumentos';
import AsentamientoNacimiento from './pages/AsentamientoNacimiento';
import AsentamientoDefuncion from './pages/AsentamientoDefuncion';
import ReposicionTitulo from './pages/ReposicionTitulo';
import PermisoConstruccion from './pages/PermisoConstruccion';
import FacilidadProyecto from './pages/FacilidadProyecto';
import RecepcionProyectos from './pages/RecepcionProyectos';
import DemolicionNaturaleza from './pages/DemolicionNaturaleza';
import Denuncia from './pages/Denuncia';
import Mediacion from './pages/Mediacion';
import ApelacionEsquela from './pages/ApelacionEsquela';
import DevolucionDecomisos from './pages/DevolucionDecomisos';
import RegresarButton from './componentes/RegresarButton';




const App = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Tiempo de carga del loader

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="App">
            {/* Componente para controlar el scroll */}
            <ScrollToTop />

            {/* Barra de navegación */}
            <NavbarComponent />

            {/* Pantalla de carga */}
            {loading && <PantallaCarga />}

            {/* Layout principal */}
            {!loading && ( // El contenido solo se muestra si loading es false
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
                        <Route path="/noticiaDetalles/:id" element={<NoticiaDetalles />} />
                        <Route path="/tramites" element={<Tramites />} />

                        {/* Rutas de las opciones de Tramites */}
                    

                        <Route path="/tramites" element={<TramitesContenido />} />
                        <Route path="/tramites-legales" element={<TramitesLegales />} />
                        <Route path="/constancias" element={<Constancias />} />
                        <Route path="/empresariales" element={<Empresariales />} />
                        <Route path="/registro-familiar" element={<RegistroFamiliar />} />
                        <Route path="/inmuebles" element={<Inmuebles />} />
                        <Route path="/tramites-construccion" element={<TramitesConstruccion />} />
                        <Route path="/tramites-cementerio" element={<TramitesCementerio />} />
                        <Route path="/tramites-delegacion" element={<TramitesDelegacion />} />
                    
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
                        {/* Ruta para Seccion de Tramites */}
                        <Route path="/" element={<TramitesLegales />} />
                        <Route path="/diligencia-voluntaria" element={<DiligenciaVoluntaria />} />
                        <Route path="/diligencia-subsidiario" element={<DiligenciaSubsidiario />} />
                        <Route path="/asociaciones-comunales" element={<AsociacionesComunales />} />
                        <Route path="/titulo-propiedad" element={<TituloPropiedad />} />
                        <Route path="/constancia-catastral" element={<ConstanciaCatastral />} />
                        <Route path="/constancia-inscripcion" element={<ConstanciaInscripcion />} />
                        <Route path="/constancia-cementerios" element={<ConstanciaCementerios />} />
                        <Route path="/constancia-municipal" element={<ConstanciaMunicipal />} />
                        <Route path="/constancia-varias" element={<ConstanciaVarias />} />
                        <Route path="/permisos-publicitarios" element={<PermisosPublicitarios />} />
                        <Route path="/vialidades" element={<Vialidades />} />
                        <Route path="/licencia-operaciones" element={<LicenciaOperaciones />} />
                        <Route path="/renovacion-permanencia" element={<RenovacionPermanencia />} />
                        <Route path="/licencia-publicitaria" element={<LicenciaPublicitaria />} />
                        <Route path="/estado-cuenta" element={<EstadoCuenta />} />
                        <Route path="/solvencia-general" element={<SolvenciaGeneral />} />
                        <Route path="/planes-pago" element={<PlanesPago />} />
                        <Route path="/concepto-negocio" element={<ConceptoNegocio />} />
                        <Route path="/calificaciones-oficio" element={<CalificacionesOficio />} />
                        <Route path="/inscripcion-mandato" element={<InscripcionMandato />} />
                        <Route path="/traspasos-inmuebles" element={<TraspasosInmuebles />} />
                        <Route path="/traspaso-herencia" element={<TraspasoHerencia />} />
                        <Route path="/emision-certificacion-partidas" element={<EmisionCertificacionPartidas />} />
                        <Route path="/emision-autentica-partidas" element={<EmisionAutenticaPartidas />} />
                        <Route path="/carnet-identificacion-personal" element={<CarnetIdentificacionPersonal />} />
                        <Route path="/constancias-fichas-cedulas" element={<ConstanciasFichasCedulas />} />
                        <Route path="/recepcion-documentos" element={<RecepcionDocumentos />} />
                        <Route path="/asentamiento-nacimiento" element={<AsentamientoNacimiento />} />
                        <Route path="/asentamiento-defuncion" element={<AsentamientoDefuncion />} />
                        <Route path="/reposicion-titulo" element={<ReposicionTitulo />} />
                        <Route path="/permiso-construccion" element={<PermisoConstruccion />} />
                        <Route path="/facilidad-proyecto" element={<FacilidadProyecto />} />
                        <Route path="/recepcion-proyectos" element={<RecepcionProyectos />} />
                        <Route path="/demolicion-naturaleza" element={<DemolicionNaturaleza />} />
                        <Route path="/denuncia" element={<Denuncia />} />
                        <Route path="/mediacion" element={<Mediacion />} />
                        <Route path="/apelacion-esquela" element={<ApelacionEsquela />} />
                        <Route path="/devolucion-decomisos" element={<DevolucionDecomisos />} />

                        {/* Ruta para Instituciones*/}
                        <Route path="/institucion" element={<Institucion />} />
                        {/* Ruta para distritos */}
                        <Route path="/distritos" element={<Distritos />} />
                        {/* Ruta para contactenos */}
                        <Route path="/contactenos" element={<Contactenos />} />
                        {/* Ruta para el Portal de Transparencia */}
                        <Route path="/portaltransparencia" element={<PortalTransparencia />} />

                        {/* Página no encontrada */}
                        <Route path="*" element={<h2>Página no encontrada</h2>} />
                        
                    </Routes>
                    <RegresarButton />
                </Layout>
            )}

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



