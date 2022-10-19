import {Link} from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
      <Link className="nav-link text-center" to="/Cart"><i className="fa-solid fa-cart-shopping h4"></i></Link>
      
    </>
  );
};

export default CartWidget;
