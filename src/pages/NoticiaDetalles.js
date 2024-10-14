import React from 'react';

// Importamos el componente de detalle de noticia
import NoticiaDetalle from "../componentes/NoticiaDetalle";

const NoticiaDetalles = () => {
  return (
    <div className="page-content">
      {/* Mostramos el detalle de la noticia */}
      <NoticiaDetalle />
    </div>
  );
};

export default NoticiaDetalles;
