import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import sanAlejo1 from '../assets/iconos/sanAlejo1.jpg'; // Asegúrate de tener la imagen
import sanAlejo2 from '../assets/iconos/sanAlejo2.jpeg'; // Asegúrate de tener la imagen
import sanAlejo3 from '../assets/iconos/sanAlejo3.jpeg'; // Asegúrate de tener la imagen
import '../estilos/distritosglobal.css';

const DistritoSanAlejo = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de San Alejo</h1>
        <p className="text-center mb-4">
          San Alejo es un vibrante municipio del departamento de La Unión, conocido por su rica historia, tradiciones culturales y su entorno natural.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sanAlejo1}
              alt="San Alejo 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de San Alejo</h3>
              <p>Explora la belleza de la naturaleza en San Alejo.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sanAlejo2}
              alt="San Alejo 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que enriquecen a San Alejo.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sanAlejo3}
              alt="San Alejo 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que destacan la identidad de San Alejo.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  San Alejo tiene una historia rica y variada, con influencias de las culturas indígenas y coloniales que han dejado su huella en la comunidad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de San Alejo es diversa, destacando platos como el caldo de res y las empanadas, que son favoritos entre los locales y visitantes.
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
                  Las festividades en San Alejo son un reflejo de su identidad cultural, donde música, danza y religiosidad se entrelazan en las celebraciones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Los visitantes pueden disfrutar de hermosos paisajes, como los alrededores del río San Alejo y diversas áreas naturales que invitan a la aventura.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de San Alejo. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoSanAlejo;
