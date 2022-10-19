import React from 'react';

const ProductDetail = ({product}) => {
  return (
    <>
      <div className="container card my-3 border-0 bg-transparent">
        <div className="row gx-5 d-flex position-relative">
          <div className="col-4 d-flex align-items-center">
            <img src={`../img/${product.img}`} className="border img-thumbnail border-2 rounded" alt={product.product}/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h3 className="card-title">{product.product}</h3>
              <h4 className="card-subtitle text-muted">{product.model}</h4>
              <h3 className="card-subtitle my-3">${product.value}</h3>
            </div>
            <div className='card-body d-flex flex-column w-25 position-absolute bottom-0'>
              <button className='btn btn-success my-1'>Comprar Ahora</button>
              <button className='btn btn-light my-1'>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container card my-5 border-0 bg-transparent">
        <div className="row gx-5">
          <div className="col-12">
            <h4 className=''>Especificaciones:</h4>
            <div className='card-body row'>
              <ul className='col-6'>     
                <li className="pb-2"><p className="card-text">{product.firstFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.secondFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.thirdFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.fourthFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.fifthFeature}</p></li>
              </ul>
              <ul className='col-6 d-flex flex-column'>
                <li className="pb-2"><p className="card-text">{product.sixthFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.seventhFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.eigthFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.ninethFeature}</p></li>
                <li className="pb-2"><p className="card-text">{product.tenthFeature}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
