import React, {useContext} from 'react';
import { cartContext } from '../../../context/CartContext';
import Cart from './Cart';
import CartEmpty from './CartEmpty';

const CartContainer = () => {
  const {cart} = useContext(cartContext)

  const app = (cart.length !== 0) ?<><div className="container d-flex justify-content-center my-5"><Cart/></div></> : <><CartEmpty/></>
  
  return app
}

export default CartContainer;
