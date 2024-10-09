import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {}
      <main className="content-container">
        {children} {/* Aquí se renderiza el contenido de las rutas */}
      </main>
    </div>
  );
};

export default Layout;

