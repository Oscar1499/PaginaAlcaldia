// PantallaCarga.js
import React from 'react';
import '../estilos/pantallacarga.css'; 
const PantallaCarga = () => {
    return (
        <div className="loader">
            <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
        </div>
    );
};

export default PantallaCarga;
