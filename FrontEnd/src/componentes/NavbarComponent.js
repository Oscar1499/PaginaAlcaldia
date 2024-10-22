import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Importa NavLink
import '../estilos/estilonav.css'; 
import logoImage from '../assets/iconos/logoinicio.jpg';
import portalImage from '../assets/iconos/transparencia.png';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false); // Estado para controlar si el menú está colapsado

  // Función para cerrar el menú cuando se selecciona una opción
  const closeNav = () => setExpanded(false);

  return (
    <>
      {/* Contenedor fijo para la imagen y el navbar */}
      <div className="fixed-header">
        {/* Imagen del banner */}
        <div className="image-container">
          <img src={logoImage} alt="Logo" className="header-logo" />
          {/* Botón en la esquina superior derecha */}
          <a 
            href="https://portal.alcaldialaunion.gob.sv/transparencia" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={portalImage} 
              alt="Portal de Transparencia" 
              className="portal-button" 
            />
          </a>
        </div>
     
        {/* Barra de navegación */}
        <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} className="navbar-custom" bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Usamos NavLink para navegación interna */}
              <Nav.Item>
                <NavLink to="/" className="nav-link" activeClassName="active" onClick={closeNav}>Inicio</NavLink>
              </Nav.Item>

              {/* Dropdown para las comunidades */}
              <NavDropdown title="Comunidades" id="comunidades-dropdown">
                <NavDropdown.Item as={NavLink} to="/comunidades/consultas-generales" onClick={closeNav}>Clinica</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/comunidades/bebeteca" onClick={closeNav}>Bebetecas</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/comunidades/cda" onClick={closeNav}>CDA</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/comunidades/becas-universitarias" onClick={closeNav}>Becas Universitarias</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/comunidades/parques" onClick={closeNav}>Parque La Familia</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/comunidades/consultas-veterinarias" onClick={closeNav}>Veterinarias</NavDropdown.Item>
              </NavDropdown>

              {/* Otros enlaces del menú */}
              <Nav.Item>
                <NavLink to="/noticias" className="nav-link" activeClassName="active" onClick={closeNav}>Noticias</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/servicios" className="nav-link" activeClassName="active" onClick={closeNav}>Servicios</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/tramites" className="nav-link" activeClassName="active" onClick={closeNav}>Trámites</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/distritos" className="nav-link" activeClassName="active" onClick={closeNav}>Distritos</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/institucion" className="nav-link" activeClassName="active" onClick={closeNav}>Institución</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/contactenos" className="nav-link" activeClassName="active" onClick={closeNav}>Contáctenos</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;










