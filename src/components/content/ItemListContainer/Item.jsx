import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ variable }) => {
  return (
    <>
      <img src={variable[1].img} alt={variable[1].product} className="img-fluid p-0 rounded p-1" />
      <div className="card-body text-center">
        <h6 className="card-title h-75 text-color-light text-white">{variable[1].product}</h6>
        <h6 className="card-subtitle mt-3 text-light">${variable[1].value}</h6>
      </div>
      <Link to={"/product/" + variable[0]}><button className='btn btn-dark w-100 border-0 mt-3'>Ver producto</button></Link>
    </>
  );
}

export default Item;
