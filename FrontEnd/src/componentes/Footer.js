import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importa Link para las redirecciones
import '../estilos/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleScroll = () => {
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    setShowButton(footerRect.top <= window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer className={darkMode ? 'dark' : 'light'}>
        <div className="footer-container">
          <div className="footer-left">
            <h2>
              Alcaldia la Union Sur 
              <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? "☀️" : "🌙"} 
              </button>
            </h2>
            <p>Contactanos en redes sociales.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:someone@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Sección Servicios */}
          <div className="footer-middle">
            <h3>Servicios</h3>
            <ul>
              <li><Link to="/servicios-generales">Servicios Generales</Link></li>
              <li><Link to="/servicios-mercado">Servicios Mercado</Link></li>
              <li><Link to="/bienestar-animal">Bienestar Animal</Link></li>
              <li><Link to="/servicios-cementerio">Servicios Cementerio</Link></li>
            </ul>
          </div>

          {/* Sección Trámites */}
          <div className="footer-middle">
            <h3>Trámites</h3>
            <ul>
              <li><Link to="/inmuebles">Inmuebles</Link></li>
              <li><Link to="/constancias">Constancias</Link></li>
              <li><Link to="/tramites-cementerio">Cementerios</Link></li>
              <li><Link to="/registro-familiar">Registros</Link></li>
            </ul>
          </div>

          {/* Sección Contáctanos */}
          <div className="footer-middle">
            <h3>Contáctanos</h3>
            <ul>
              <li><Link to="/institucion">Nosotros</Link></li>
              <li><Link to="/portal">Contacto</Link></li>
              <li>
                <a 
                  href="https://portal.alcaldialaunion.gob.sv/transparencia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Portal
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Alcaldia Union Sur</p>
        </div>
      </footer>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;










