import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutThanks = (props) => {
  return (
    <>
    <div className='container-fluid my-5'>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 d-flex flex-column align-items-center">
          <div className="container w-50">
            <div className="card text-white bg-primary mb-3">
              <h3 className="card-header text-center">Gracias por su compra</h3>
              <div className="card-body">
                <p className="card-title text-center">En breve nos contactaremos con usted.</p>
              </div>
            </div>
          </div>
          <Link to="/" className=''><button className='btn btn-success'>Ir al inicio</button></Link>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    </>
  );
}

export default CheckoutThanks;
