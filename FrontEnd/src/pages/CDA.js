import React from 'react';
import CDAContenido from "../componentes/CDAContenido";
import CDASlider from "../componentes/CDASlider";

const CDA = () => {
  return (
    <div className="page-content">
      <CDASlider />
     <CDAContenido />
    </div>
  );
};

export default CDA;
