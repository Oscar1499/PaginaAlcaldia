import React from 'react';
import BecasUniversitariasSlider from "../componentes/BecasUniversitariasSlider"
import BecasUniversitariasContenido from "../componentes/BecasUniversitariasContenido"

const BecasUniversitarias = () => {
  return (
    <div className="page-content">
     <BecasUniversitariasSlider />
     <BecasUniversitariasContenido />
    </div>
  );
};

export default BecasUniversitarias;
