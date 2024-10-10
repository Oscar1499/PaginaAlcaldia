import React, { useState, useEffect } from 'react';
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
          <div className="footer-middle">
            <h3>Servicios</h3>
            <ul>
              <li>Servicios Generales</li>
              <li>Servicios Mercado</li>
              <li>Bienestar Animal</li>
              <li>Servicios Cementerio</li>
            </ul>
          </div>
          <div className="footer-middle">
            <h3>Tramites</h3>
            <ul>
              <li>Inmuebles</li>
              <li>Constancias</li>
              <li>Cementerios</li>
              <li>Registros</li>
            </ul>
          </div>
          <div className="footer-middle">
            <h3>Contactanos</h3>
            <ul>
              <li>Nosotros</li>
              <li>Portal</li>
              <li>Contacto</li>
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










