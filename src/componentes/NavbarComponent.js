import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Alcaldía</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <NavDropdown title="Comunidades" id="comunidades-dropdown">
            <NavDropdown.Item href="/comunidades/bebeteca">Bebeteca</NavDropdown.Item>
            <NavDropdown.Item href="/comunidades/cda">CDA</NavDropdown.Item>
            <NavDropdown.Item href="/comunidades/becas-universitarias">Becas Universitarias</NavDropdown.Item>
            <NavDropdown.Item href="/comunidades/consultas-generales">Consultas Generales</NavDropdown.Item>
            <NavDropdown.Item href="/comunidades/consultas-veterinarias">Consultas Veterinarias</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/servicios">Servicios</Nav.Link>
          <Nav.Link href="/noticias">Noticias</Nav.Link>
          <Nav.Link href="/tramites">Trámites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
