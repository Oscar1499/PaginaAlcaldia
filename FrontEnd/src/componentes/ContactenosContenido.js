import React, { useState } from 'react';
import axios from 'axios';
import '../estilos/contactenos.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const ContactenosContenido = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/contact', formData);
      console.log('Respuesta del servidor:', response.data);
      alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar tu mensaje. Intenta nuevamente más tarde.');
    }
  };
 
  return (
    <div className="contactenos-contenido">
      <h1>Contáctenos</h1>

      <div className="contact-form-container">
        <div className="contact-info-left">
          <div className="contact-info-item">
            <FaEnvelope />
            <span>correo@alcaldialaunion.gob.sv</span>
          </div>
          <div className="contact-info-item">
            <FaPhone />
            <span>+503 26097000</span>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <span>Avenida Gral Cabañas, La Unión</span>
          </div>
          <div className="social-icons">
            <div className="social-title"></div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:correo@alcaldialaunion.gob.sv" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Solicitud</h2>
          <div className="form-group">
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Nombre" 
              required 
              className="rounded-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              value={formData.correo} 
              onChange={handleChange} 
              placeholder="Correo Electrónico" 
              required 
              className="rounded-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
              placeholder="Teléfono" 
              required 
              className="rounded-input"
            />
          </div>
          <div className="form-group">
            <textarea 
              id="mensaje" 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              placeholder="Mensaje" 
              rows="4" 
              required 
              className="rounded-input"
            />
          </div>
          <button type="submit" className="btn-submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default ContactenosContenido;



