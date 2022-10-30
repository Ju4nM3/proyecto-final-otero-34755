import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <div className="card mb-3 p-3 w-50 d-flex align-items-center">
          <p className='fs-4 text-danger'>No existen elementos en el carrito</p>
          <Link to="/" className=''><button className='btn btn-dark w-100'>Ir al Home</button></Link>
        </div>
      </div>
    </>
  );
}

export default memo (CartEmpty);
