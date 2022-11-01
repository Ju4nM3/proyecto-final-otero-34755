import React, {useContext, useState, useEffect} from 'react';
import Brand from './Brand';
import CartWidget from './CartWidget';
import { cartContext } from '../../context/CartContext';

const SearchBar = ({SearchingPlaceholder}) => {

  const {cart} = useContext(cartContext)
  const [price, setPrice] = useState(0);

  useEffect(() => {
    /* setCounter(cart.length) */

    
    let total=0
    const totalPrice = cart.map(mapeo => mapeo.value * mapeo.amount)

    totalPrice.forEach(function(a){total += a;});


   setPrice(total)
    
  }, [cart]);

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center my-2 row'>
        <div className='col-2 m-0 p-0'><Brand/></div>
        <form className="d-flex col-8 justify-content-center">
          <input className="form-control" type="text" placeholder={SearchingPlaceholder} />
          <button className="btn btn-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className='col-2 m-0 p-0 d-flex'><CartWidget/>$ {price}</div>
      </div>
    </>
  );
}

export default SearchBar;
