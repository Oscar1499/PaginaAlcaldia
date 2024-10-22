import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import meanguera1 from '../assets/iconos/meanguera1.jpeg'; // Asegúrate de tener la imagen
import meanguera2 from '../assets/iconos/meanguera2.jpg'; // Asegúrate de tener la imagen
import meanguera3 from '../assets/iconos/meanguera3.jpg'; // Asegúrate de tener la imagen
import '../estilos/distritosglobal.css';

const DistritoMeanguera = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de Meanguera</h1>
        <p className="text-center mb-4">
          Meanguera es un pintoresco municipio del departamento de La Unión, famoso por su rica historia, tradiciones culturales y belleza natural.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meanguera1}
              alt="Meanguera 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de Meanguera</h3>
              <p>Descubre la impresionante belleza de Meanguera.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meanguera2}
              alt="Meanguera 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que definen a Meanguera.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meanguera3}
              alt="Meanguera 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que resaltan la identidad de Meanguera.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  Meanguera tiene una rica historia que se remonta a la época colonial, siendo un punto estratégico en el comercio y la agricultura.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de Meanguera destaca por sus platillos típicos, como las pupusas y los tamales, que son un deleite para los paladares.
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
                  Meanguera celebra diversas festividades, incluyendo las fiestas patronales que combinan fe, música y color en un ambiente festivo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran las montañas y los paisajes naturales que ofrecen oportunidades para el ecoturismo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de Meanguera. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoMeanguera;

