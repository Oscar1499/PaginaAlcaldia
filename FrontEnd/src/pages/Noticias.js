import React from 'react';

// Cambiamos el nombre del componente para seguir las convenciones de React
import NoticiasIndex from "../componentes/noticiasIndex.js";

const Noticias = () => {
  return (
    <div className="page-content">
      {/* Usamos el componente con la primera letra en mayúscula */}
      <NoticiasIndex />
    </div>
  );
};

export default Noticias;
