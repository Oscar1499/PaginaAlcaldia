import React, { useState } from 'react';
import '../estilos/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  // Estado para el modo oscuro / modo claro
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar entre tema oscuro y claro
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className={darkMode ? 'dark' : 'light'}>
      <div className="footer-container">
        <div className="footer-left">
          <h2>
            Alcaldia la Union Sur 
            {/* Botón para cambiar entre luna y sol */}
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
  );
};

export default Footer;









