import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import yucuaiquin1 from '../assets/iconos/yucuaiquin1.jpg';
import yucuaiquin2 from '../assets/iconos/yucuaiquin2.jpg';
import yucuaiquin3 from '../assets/iconos/yucuaiquin3.jpg';
import '../estilos/distritosglobal.css';

const DistritoYucuaiquin = () => {
  return (
    <div className="page-content">
      <Container className="mt-5">
        <h1 className="text-center mb-4">Distrito de Yucuaiquín</h1>
        <p className="text-center mb-4">
          Yucuaiquín es un municipio del departamento de La Unión, conocido por su hermosa naturaleza y cultura local.
        </p>

        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yucuaiquin1}
              alt="Yucuaiquín 1"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Paisaje de Yucuaiquín</h3>
              <p>Un vistazo a la belleza natural de Yucuaiquín.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yucuaiquin2}
              alt="Yucuaiquín 2"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Cultura Local</h3>
              <p>Las tradiciones que hacen única a Yucuaiquín.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yucuaiquin3}
              alt="Yucuaiquín 3"
              style={{ height: '60vh', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fiesta Tradicional</h3>
              <p>Celebraciones que resaltan la herencia cultural.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Historia</Card.Title>
                <Card.Text>
                  Yucuaiquín fue fundado en el siglo XIX y ha sido un lugar de gran importancia cultural y económica en la región oriental de El Salvador. Su historia está marcada por la riqueza de su cultura local y el espíritu acogedor de su gente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Gastronomía</Card.Title>
                <Card.Text>
                  La gastronomía de Yucuaiquín es un deleite para los sentidos. Platos típicos como la pupusa, el atol de elote y el tamal de elote son solo algunas de las delicias que se pueden disfrutar.
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
                  Yucuaiquín celebra varias festividades a lo largo del año, destacando las fiestas patronales en honor a su santo patrón, donde la música, el baile y la comida son parte esencial de la celebración.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">Lugares de Interés</Card.Title>
                <Card.Text>
                  Entre los lugares de interés se encuentran las bellas montañas que rodean el pueblo y la iglesia central, que es un punto de encuentro importante para la comunidad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="text-center mt-5">
          <p>&copy; 2024 Distrito de Yucuaiquín. Todos los derechos reservados.</p>
        </footer>
      </Container>
    </div>
  );
};

export default DistritoYucuaiquin;




