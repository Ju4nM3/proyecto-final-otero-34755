import React, {useContext, useState, useEffect} from 'react';
import { cartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart, removeProduct, clearProducts} = useContext(cartContext)
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    const cartProduct = cart.map(product =>
    <div className="row g-0" key={product.id}>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <img src={product.img} className="img-fluid rounded w-75" alt={product.product}/>
      </div>
      <div className="col-10 d-flex">
        <div className="card-body row d-flex justify-content-center align-items-center">
          <p className="card-title text-black col-4">{product.product}</p>
          <p className="card-text text-black col-2 m-0 p-0 text-center">{product.value}$</p>
          <p className="card-text text-black col-2 m-0 p-0 text-center">{product.amount}</p>
          <p className="card-text text-black col-2 m-0 p-0 text-center">{product.amount * product.value}$</p>
          <p className="card-text text-black col-2 d-flex justify-content-center align-items-center"><button className='bg-transparent text-black border-0 m-0' onClick={()=> removeProduct(product)}>Eliminar</button></p>
        </div>
      </div>
      <div className='container-fluid border-bottom border-bottom-1 my-1'></div>
    </div>
    )
    setCurrentCart(cartProduct)
  }, [cart, removeProduct]);

  return (
    <>
    <div className="card mb-3 bg-white w-75 ">
      <div className="row g-0">
        <div className="col-2 d-flex justify-content-center align-items-center"></div>
        <div className="col-10 d-flex">
          <div className="card-body row d-flex justify-content-center align-items-center">
            <p className="card-title text-black col-4">Producto</p>
            <p className="card-text text-black col-2 m-0 p-0 text-center">Precio</p>
            <p className="card-text text-black col-2 m-0 p-0 text-center">Cantidad</p>
            <p className="card-text text-black col-2 m-0 p-0 text-center">Subtotal</p>
            <p className="card-text text-black col-2 d-flex justify-content-center align-items-center m-0">
              <button className='bg-transparent text-black border-0 m-0' onClick={()=> clearProducts(cart)}><i className="fa-regular fa-trash-can"></i></button></p>
          </div>
        </div>
        <div className='container-fluid border-bottom border-bottom-1 my-1'></div>
      </div>
      {currentCart}
      <div className="row g-0">
        <div className="col-2 d-flex justify-content-center align-items-center"></div>
        <div className="col-12 d-flex">
          <div className="card-body row d-flex justify-content-center align-items-center">
            <p className="col-4 card-text text-black px-5 m-0">Precio total: </p>
            <div className="col-5"></div>
            <div className="col-3 d-flex justify-content-center align-items-center m-0"><Link to={"/checkout"}><button className='bg-transparent text-black border-0 m-0'>Finalizar compra</button></Link></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cart;
