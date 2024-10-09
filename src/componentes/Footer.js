import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4 className="footer-heading">Redes Sociales</h4>
            <div className="d-flex flex-column">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <h4 className="footer-heading">Contacto</h4>
            <p>Email: <a href="mailto:info@alcaldia.com" className="footer-link">info@alcaldia.com</a></p>
            <p>Teléfono: <a href="tel:+1234567890" className="footer-link">+1 234 567 890</a></p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Alcaldía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
