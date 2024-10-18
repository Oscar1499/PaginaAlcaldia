import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Mueve el scroll al principio de la página
    }, [pathname]); // Se ejecuta cada vez que cambie la ruta

    return null;
};

export default ScrollToTop;
