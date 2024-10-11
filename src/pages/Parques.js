import React from 'react';
import ParquesContenido from "../componentes/ParquesContenido";
import ParqueSlider from "../componentes/ParquesSlider";

const Parques = () => {
  return (
    <div className="page-content">
      <ParqueSlider />
     <ParquesContenido />
    </div>
  );
};

export default Parques;