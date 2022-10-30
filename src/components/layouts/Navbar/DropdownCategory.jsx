import React from 'react';
import { Link } from 'react-router-dom';

const DropdownCategory = () => {
  return (
    <>
      <div className="list-group list-group-flush col-3">
        <Link to="/category/pc-desktop" className="list-group-item list-group-item-action">PC's de Escritorio</Link>
        <Link to="/category/all-in-one" className="list-group-item list-group-item-action">Pc's All in one</Link>
        <Link to="/category/mini-pc" className="list-group-item list-group-item-action">PC's Mini</Link>
        <Link to="/category/notebooks" className="list-group-item list-group-item-action">Notebooks</Link>
      </div>
      <div className="list-group list-group-flush col-3">
        <Link to="/category/processors" className="list-group-item list-group-item-action">Procesadores</Link>
        <Link to="/category/motherboards" className="list-group-item list-group-item-action">Motherboards</Link>
        <Link to="/category/memory-ram" className="list-group-item list-group-item-action">Memoria Ram</Link>
        <Link to="/Category/graphics" className="list-group-item list-group-item-action">Placas de Video</Link>
      </div>
      <div className="list-group list-group-flush col-3">
        <Link to="/category/case" className="list-group-item list-group-item-action">Gabinetes</Link>
        <Link to="/category/power-supply" className="list-group-item list-group-item-action">Fuentes de Poder</Link>
        <Link to="/category/periferics" className="list-group-item list-group-item-action">Periféricos</Link>
        <Link to="/category/storage" className="list-group-item list-group-item-action">Almacenamiento</Link>
      </div>
      <div className="list-group list-group-flush col-3">
        <Link to="/category/cooling" className="list-group-item list-group-item-action">Refrigeración PC</Link>
        <Link to="/category/gamer-chairs-and-desktops" className="list-group-item list-group-item-action">Sillas y Escritorios Gamer</Link>
        <Link to="/category/networks" className="list-group-item list-group-item-action">Conectividad y Redes</Link>
        <Link to="/category/screens" className="list-group-item list-group-item-action">Monitores</Link>
      </div>
    </>
  );
}

export default DropdownCategory;
