import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import carmen1 from '../assets/iconos/carmen1.jpg'; // Asegúrate de tener la imagen
import carmen2 from '../assets/iconos/carmen2.jpg'; // Asegúrate de tener la imagen
import carmen3 from '../assets/iconos/carmen3.jpg'; // Asegúrate de tener la imagen
import '../estilos/distritosglobal.css';

const DistritoCarmen = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de El Carmen</h1>
        <p className="text-center mb-4">
          El Carmen es un encantador municipio del departamento de La Unión, conocido por su cultura vibrante y sus paisajes montañosos.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carmen1}
              alt="El Carmen 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de El Carmen</h3>
              <p>Admira la belleza natural de El Carmen.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carmen2}
              alt="El Carmen 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que enriquecen a El Carmen.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carmen3}
              alt="El Carmen 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que reflejan la identidad de El Carmen.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  El Carmen tiene una rica historia que se remonta a tiempos antiguos, con un desarrollo vinculado a la agricultura y el comercio, destacándose como un centro de intercambio en la región.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de El Carmen es reconocida por sus deliciosos platillos típicos, como las pupusas y los tamales, que son una delicia para los visitantes.
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
                  El Carmen celebra varias festividades, siendo las fiestas patronales en honor a su santo patrón las más destacadas, llenas de música, danza y alegría.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran las montañas de El Carmen, ideales para el ecoturismo, así como los senderos que ofrecen vistas impresionantes del paisaje.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de El Carmen. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoCarmen;
