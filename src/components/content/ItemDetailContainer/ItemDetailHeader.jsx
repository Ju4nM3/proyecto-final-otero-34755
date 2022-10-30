import {useState, useContext} from 'react';
import { cartContext } from '../../../context/CartContext';

const ItemDetailHeader = ({productDB}) => {
  const [counter, setCounter] = useState(1);
  const {addProduct} = useContext(cartContext) 
  
  const productCounter = (operacion) => {
    
    if(operacion === "+"){
      if(counter < productDB[1].stock){
        setCounter(counter + 1)
      }
    }
    else {
      if(counter > 1){
        setCounter(counter - 1)
    }
   }
  }
  
  return (
    <>
      <div className="container card my-3 border-0 bg-transparent" key={productDB[0]}>
        <div className="row gx-5 d-flex position-relative">
          <div className="col-4 d-flex align-items-center">
            <img src={productDB[1].img} className="border img-thumbnail border-2 rounded" alt={productDB[1].product}/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h3 className="card-title">{productDB[1].product}</h3>
              <h4 className="card-subtitle text-muted">{productDB[1].model}</h4>
              <h3 className="card-subtitle my-3">${productDB[1].value}</h3>
            </div>
            <div className='card-body d-flex'>
              <p className='card-text bg-light p-2 rounded'>{counter}</p>
            </div>
            <div className='card-body d-flex w-25 position-absolute bottom-0 align-items-center'>
              
              <button className='btn btn-success my-1 mx-1' onClick={() => productCounter("-")}>-</button>
              <button className='btn btn-danger' onClick={()=> addProduct(productDB, counter)}>Agregar al carrito</button>
              <button className='btn btn-success my-1 mx-1' onClick={() => productCounter("+")}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailHeader;
