import React, { useState } from 'react';
import axios from 'axios'; 
import '../stiloglobal.css';

const ContactenosContenido = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [showContactInfo, setShowContactInfo] = useState(true); // Estado para controlar la visibilidad

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

  const toggleSection = () => {
    setShowContactInfo(!showContactInfo); // Alternar la sección mostrada
  };

  return (
    <div className="contactenos-contenido">
      <h1>Contáctenos</h1>
      <p>
        Si tiene alguna consulta, comentario o sugerencia, no dude en ponerse en contacto con nosotros. 
        Su opinión es muy importante para nosotros y nos ayudará a mejorar nuestros servicios.
      </p>

      <button className="toggle-button" onClick={toggleSection}>
        {showContactInfo ? 'Mostrar Formulario' : 'Mostrar Información de Contacto'}
      </button>

      {showContactInfo ? (
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <p><strong>Teléfono:</strong> +503 7889-8924</p>
          <p><strong>Email:</strong> contacto@alcaldialaunion.gob.sv</p>
          <p><strong>Dirección:</strong> Avenida Gral Cabañas, La Unión, El Salvador</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Formulario de Contacto</h2>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              value={formData.correo} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              rows="4" 
              required 
            />
          </div>
          <button type="submit" className="btn-submit">Enviar Mensaje</button>
        </form>
      )}
    </div>
  );
};

export default ContactenosContenido;

