import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../estilos/estilonav.css'; 
import logoImage from '../assets/iconos/fondoinicio.jpg';
import portalImage from '../assets/iconos/transparencia.png';
import otroBotonImage from '../assets/iconos/logoinicio.png';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // Estado para navegación fija

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 50); // Cambiar la clase cuando se desplaza más de 50px

    // Cambiar a fija cuando se pasa el alto de la imagen
    const imageContainer = document.querySelector('.image-container');
    const imageHeight = imageContainer ? imageContainer.offsetHeight : 0;

    if (scrollTop > imageHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setExpanded(false);

  return (
    <>
      <div className="image-container">
        <img src={logoImage} alt="Logo" className="header-logo" />
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
        <a 
          href="https://portal.alcaldialaunion.gob.sv"
          target="_blank" 
          rel="noopener noreferrer"
          className="bottom-left-button"
        >
          <img 
            src={otroBotonImage} // Cambia por la imagen de tu nuevo botón
            alt="Otro Botón" 
            className="otro-boton" 
          />
        </a>
      </div>
 <Navbar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${isFixed ? 'fixed' : ''}`} // Agregar clase fija
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink to="/" className="nav-link" activeClassName="active" onClick={closeNav}>Inicio</NavLink>
            </Nav.Item>
            <NavDropdown title="Comunidades" id="comunidades-dropdown">
              <NavDropdown.Item as={NavLink} to="/comunidades/consultas-generales" onClick={closeNav}>Clinica</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/comunidades/bebeteca" onClick={closeNav}>Bebetecas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/comunidades/cda" onClick={closeNav}>CDA</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/comunidades/becas-universitarias" onClick={closeNav}>Becas Universitarias</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/comunidades/parques" onClick={closeNav}>Parque La Familia</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/comunidades/consultas-veterinarias" onClick={closeNav}>Veterinarias</NavDropdown.Item>
            </NavDropdown>
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
    </>
  );
};

export default NavbarComponent;
