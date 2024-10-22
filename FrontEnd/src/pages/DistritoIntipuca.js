import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import intipuca1 from '../assets/iconos/intipuca1.jpg'; // Asegúrate de tener la imagen
import intipuca2 from '../assets/iconos/intipuca2.jpg'; // Asegúrate de tener la imagen
import intipuca3 from '../assets/iconos/intipuca3.jpg'; // Asegúrate de tener la imagen
import '../estilos/distritosglobal.css';

const DistritoIntipuca = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de Intipucá</h1>
        <p className="text-center mb-4">
          Intipucá es un hermoso municipio del departamento de La Unión, conocido por su rica cultura, tradiciones y su ambiente acogedor.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={intipuca1}
              alt="Intipucá 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de Intipucá</h3>
              <p>Explora la belleza natural de Intipucá.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={intipuca2}
              alt="Intipucá 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que caracterizan a Intipucá.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={intipuca3}
              alt="Intipucá 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que resaltan la identidad de Intipucá.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  Intipucá tiene una rica historia que se remonta a la época colonial, siendo un punto de encuentro cultural y comercial en la región.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de Intipucá es variada, con platos típicos como los tamales de elote y las pupusas, que son imperdibles para los visitantes.
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
                  Intipucá celebra diversas festividades, destacando las fiestas patronales que son una mezcla de fe, música y baile, creando un ambiente festivo y familiar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran las hermosas montañas de Intipucá, perfectas para el senderismo y la observación de la naturaleza.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de Intipucá. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoIntipuca;

