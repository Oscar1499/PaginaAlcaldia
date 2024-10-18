// src/components/RegresarButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/regresarboton.css';

const RegresarButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navega a la página anterior
    };

    return (
        <button onClick={handleBack} className="regresar-button">
            <i className="fas fa-arrow-left"></i>
        </button>
    );
};

export default RegresarButton;


