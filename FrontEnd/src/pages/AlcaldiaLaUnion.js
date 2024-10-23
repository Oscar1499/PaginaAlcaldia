import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import laUnion1 from '../assets/iconos/laUnion1.jpeg'; 
import laUnion2 from '../assets/iconos/laUnion2.jpeg'; 
import laUnion3 from '../assets/iconos/laUnion3.jpeg'; 
import '../estilos/distritosglobal.css';

const AlcaldiaLaUnion = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de La Unión</h1>
        <p className="text-center mb-4">
          La Unión es un municipio vibrante y acogedor del departamento de La Unión, conocido por su rica historia, su diversidad cultural y sus impresionantes paisajes costeros.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={laUnion1}
              alt="La Unión 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de La Unión</h3>
              <p>Descubre la belleza natural de La Unión.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={laUnion2}
              alt="La Unión 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que caracterizan a La Unión.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={laUnion3}
              alt="La Unión 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que resaltan la identidad de La Unión.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  La Unión tiene una rica historia que se remonta a la época colonial, siendo un importante puerto y centro comercial en la región.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de La Unión es famosa por sus mariscos frescos y platos típicos como el ceviche y las empanadas de mariscos, que son imprescindibles para los visitantes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Tradiciones</Card.Title>
                <Card.Text>
                  La Unión celebra diversas festividades, destacando las fiestas patronales y eventos culturales que reflejan su herencia y comunidad vibrante.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran las hermosas playas, como Punta Mango y la Laguna de El Jocotal, ideales para el turismo y actividades al aire libre.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de La Unión. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default AlcaldiaLaUnion;

