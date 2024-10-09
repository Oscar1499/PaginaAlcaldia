import { Link } from 'react-router-dom';
import '../stiloglobal.css';

import registroFamiliarIcon from '../assets/iconos/registro-familiar-icon.png';
import tributarioIcon from '../assets/iconos/tributario-icon.png';
import licenciasIcon from '../assets/iconos/licencias-icon.png';
import juridicosIcon from '../assets/iconos/juridicos-icon.png';
import cementerioIcon from '../assets/iconos/cementerio-icon.png';


function ServiciosDestacados() {
  return (
    <div className="servicios-destacados">
      <h2>SERVICIOS DESTACADOS</h2>
      <div className="iconos-servicios">
        <Link to="/registro-familiar" className="icono">
          <img src={registroFamiliarIcon} alt="Registro Familiar" className="icono-imagen" />
          <p>Registro Familiar</p>
        </Link>
        <Link to="/tributario" className="icono">
          <img src={tributarioIcon} alt="Tributario" className="icono-imagen" />
          <p>Tributario</p>
        </Link>
        <Link to="/licencias-matriculas" className="icono">
          <img src={licenciasIcon} alt="Licencias y Matrículas" className="icono-imagen" />
          <p>Licencias, Matrículas</p>
        </Link>
        <Link to="/juridicos" className="icono">
          <img src={juridicosIcon} alt="Jurídicos" className="icono-imagen" />
          <p>Jurídicos</p>
        </Link>
        <Link to="/cementerio" className="icono">
          <img src={cementerioIcon} alt="Cementerio" className="icono-imagen" />
          <p>Cementerio</p>
        </Link>
      </div>
    </div>
  );
}

export default ServiciosDestacados;
