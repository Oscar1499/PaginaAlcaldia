import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import conchagua1 from '../assets/iconos/conchagua1.jpg'; // Asegúrate de tener la imagen
import conchagua2 from '../assets/iconos/conchagua2.jpg'; // Asegúrate de tener la imagen
import conchagua3 from '../assets/iconos/conchagua3.webp'; // Asegúrate de tener la imagen
import '../estilos/distritosglobal.css';

const DistritoConchagua = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de Conchagua</h1>
        <p className="text-center mb-4">
          Conchagua es un municipio del departamento de La Unión, conocido por sus hermosos paisajes costeros y su rica cultura.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={conchagua1}
              alt="Conchagua 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de Conchagua</h3>
              <p>Descubre la belleza de la costa de Conchagua.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={conchagua2}
              alt="Conchagua 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que definen a Conchagua.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={conchagua3}
              alt="Conchagua 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que resaltan la identidad de Conchagua.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  Conchagua tiene una rica historia que se remonta a tiempos precolombinos. Su desarrollo ha estado ligado a la agricultura y la pesca, convirtiéndose en un punto estratégico en la región.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de Conchagua es famosa por sus platos de mariscos frescos, donde destacan el ceviche y la sopa de mariscos, que son un deleite para los visitantes.
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
                  Conchagua celebra diversas festividades, siendo las fiestas patronales en honor a su santo patrón las más destacadas, llenas de música, baile y color.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran las playas de Conchagua, que son perfectas para disfrutar del sol y la naturaleza, así como el mirador que ofrece vistas panorámicas del océano.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de Conchagua. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoConchagua;

