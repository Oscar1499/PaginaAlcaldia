import React from 'react';
import ConsultasGeneralesSlider from "../componentes/ConsultasGeneralesSlider"
import ConsultasGeneralesContenido from '../componentes/ConsultasGeneralesContenido';
const ConsultasGenerales = () => {
  return (
    <div className="page-content">
      <ConsultasGeneralesSlider />
      <ConsultasGeneralesContenido />
</div>
  );
};

export default ConsultasGenerales;
