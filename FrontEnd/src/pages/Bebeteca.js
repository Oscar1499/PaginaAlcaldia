import React from 'react';
import BebetecaSlider from '../componentes/BebetecaSlider';
import BebetecaContenido from '../componentes/BebetecaContenido';
import '../estilos/bebeteca.css';
const Bebeteca = () => {
  return (
    <div className="page-content">
      <div className="bebeteca-container">
        <BebetecaSlider />
        <BebetecaContenido />
      </div>
    </div>
  );
};


export default Bebeteca;
