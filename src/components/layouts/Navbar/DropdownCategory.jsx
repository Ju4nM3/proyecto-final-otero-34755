import React from 'react';
import { Link } from 'react-router-dom';

const DropdownCategory = ({}) => {
  return (
    <>
      <div className="list-group list-group-flush col-3">
        <Link to="/Category/1" className="list-group-item list-group-item-action">PC's de Escritorio</Link>
        <Link to="/Category/2" className="list-group-item list-group-item-action">Pc's All in one</Link>
        <Link to="/Category/3" className="list-group-item list-group-item-action">PC's Mini</Link>
        <Link to="/Category/4" className="list-group-item list-group-item-action">Notebooks</Link>
      </div>
      <div className="list-group list-group-flush col-3">
        <Link to="/Category/5" className="list-group-item list-group-item-action">Procesadores</Link>
        <Link to="/Category/6" className="list-group-item list-group-item-action">Motherboards</Link>
        <Link to="/Category/7" className="list-group-item list-group-item-action">Memoria Ram</Link>
        <Link to="/Category/8" className="list-group-item list-group-item-action">Placas de Video</Link>
      </div>
      <div className="list-group list-group-flush col-3">
        <Link to="/Category/9" className="list-group-item list-group-item-action">Gabinetes</Link>
        <Link to="/Category/10" className="list-group-item list-group-item-action">Fuentes de Poder</Link>
        <Link to="/Category/11" className="list-group-item list-group-item-action">Periféricos</Link>
        <Link to="/Category/12" className="list-group-item list-group-item-action">Almacenamiento</Link>
      </div>
      <div className="list-group list-group-flush col-3">
        <Link to="/Category/13" className="list-group-item list-group-item-action">Refrigeración PC</Link>
        <Link to="/Category/14" className="list-group-item list-group-item-action">Sillas y Escritorios Gamer</Link>
        <Link to="/Category/15" className="list-group-item list-group-item-action">Conectividad y Redes</Link>
        <Link to="/Category/16" className="list-group-item list-group-item-action">Monitores</Link>
      </div>
    </>
  );
}

export default DropdownCategory;
