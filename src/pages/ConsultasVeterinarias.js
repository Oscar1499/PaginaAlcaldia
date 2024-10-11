import React from 'react';
import ConsultasVeterinariasSlider from '../componentes/ConsultasVeterinariasSlider';
import ConsultasVeterinariasContenido from '../componentes/ConsultasVeterinariasContenido';
const ConsultasVeterinarias = () => {
  return (
    <div className="page-content">
    <ConsultasVeterinariasSlider />
    <ConsultasVeterinariasContenido />
    </div>
  );
};

export default ConsultasVeterinarias;
