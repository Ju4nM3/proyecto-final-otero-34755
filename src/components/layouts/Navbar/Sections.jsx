import {Link} from 'react-router-dom'
import Dropdown from './Dropdown';

const Sections = () => {
  return (
    <>
      <li className="nav-item d-flex align-items-center mx-2 dropdown position-static">
        <Dropdown/>
      </li>
      <li className="nav-item d-flex align-items-center mx-2">
        <Link className="nav-link border-0 text-white" to="/about">Nosotros</Link>
      </li>
      <li className="nav-item d-flex align-items-center mx-2">
        <Link className="nav-link border-0 text-white" to="contact">Contacto</Link>
      </li> 
    </>
  );
}

export default Sections;
