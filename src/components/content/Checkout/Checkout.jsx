import React, {useState, useContext}  from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutThanks from './CheckoutThanks';
import { cartContext } from '../../../context/CartContext';

const Checkout = () => {
  const [checkoutValidation, setCheckoutValidation] = useState(true);
  const {cart, clearProducts} = useContext(cartContext)

  function toggleValidation() {
    setCheckoutValidation(!checkoutValidation)
    clearProducts(cart)
  }

  const app = (checkoutValidation) ? <><CheckoutForm toggleValidation={toggleValidation}/></> : <><CheckoutThanks /></>
  
  return app
}

export default Checkout;
