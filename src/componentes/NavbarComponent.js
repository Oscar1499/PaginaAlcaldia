import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Alcaldía</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/comunidades">Comunidades</Nav.Link> {/*  */}
          <Nav.Link href="/servicios">Servicios</Nav.Link>
          <Nav.Link href="/noticias">Noticias</Nav.Link>
          <Nav.Link href="/tramites">Trámites</Nav.Link>
          <Nav.Link href="/portal-transparencia">Portal de Transparencia</Nav.Link> {/**/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;


