import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import yayantique1 from '../assets/iconos/yayantique1.jpg'; // Asegúrate de tener la imagen
import yayantique2 from '../assets/iconos/yayantique2.jpeg'; // Asegúrate de tener la imagen
import yayantique3 from '../assets/iconos/yayantique3.jpg'; // Asegúrate de tener la imagen
import '../estilos/distritosglobal.css';

const DistritoYayantique = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de Yayantique</h1>
        <p className="text-center mb-4">
          Yayantique es un encantador municipio del departamento de La Unión, conocido por su cultura vibrante y su impresionante entorno natural.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yayantique1}
              alt="Yayantique 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de Yayantique</h3>
              <p>Explora la belleza natural de Yayantique.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yayantique2}
              alt="Yayantique 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que enriquecen a Yayantique.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yayantique3}
              alt="Yayantique 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiestas Tradicionales</h3>
              <p>Celebraciones que destacan la identidad de Yayantique.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  Yayantique tiene una rica historia que refleja la influencia de diversas culturas a lo largo del tiempo, con un legado que se celebra en sus festividades.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de Yayantique es diversa, con platillos tradicionales que incluyen tamales, pupusas y un sinfín de sabores que enamoran a los visitantes.
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
                  Yayantique celebra una serie de festividades que reflejan su identidad cultural, llenas de música, danza y tradiciones que unen a la comunidad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran los paisajes montañosos y ríos que ofrecen oportunidades para el ecoturismo y la aventura al aire libre.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de Yayantique. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoYayantique;

