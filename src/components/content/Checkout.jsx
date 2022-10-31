import React /* {useContext} */ from 'react';
/* import { cartContext } from '../../context/CartContext'; */


const Checkout = () => {
  /* const {cart, clearProducts} = useContext(cartContext) */

  const checkoutData = React.useRef()
  const checkoutConsult = (e) => {
    const checkoutData2 = new FormData(checkoutData.current)
    console.log(Object.fromEntries(checkoutData2))
  }
  return (
    <>
    <div className='container-fluid my-5'>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <form onSubmit={checkoutConsult} ref={checkoutData}>
          <fieldset>
            <legend>Checkout</legend>
            <legend>Para finalizar ingrese sus datos:</legend>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre</label>
              <input type="text" className="form-control" name="Name" aria-describedby="emailHelp" placeholder="Su nombre aquí" required />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Apellido</label>
              <input type="text" className="form-control" name="Lastname" aria-describedby="emailHelp" placeholder="Su apellido aquí" required />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo electrónico</label>
              <input type="email" className="form-control" name="Email" aria-describedby="emailHelp" placeholder="Su correo electrónico aquí" required />
              <small name="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo electrónico con nadie.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Número de teléfono</label>
              <input type="number" className="form-control" name="Cellphone" aria-describedby="emailHelp" placeholder="Su teléfono aquí" required />
              <small name="emailHelp" className="form-text text-muted">Nunca compartiremos tu número de teléfono con nadie.</small>
            </div>
            <label htmlFor="" className="my-4">La información personal que nos envías a través de este formulario será procesada por Ju4nM3 para dar respuesta a tus consultas y/o solicitudes en base a los términos señalados en la Política de Privacidad del Sitio.</label>
            <div className="form-check my-4" required>
              <input className="form-check-input" type="checkbox" defaultValue name="Required" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
              Acepto que la información personal contenida en este formulario será de uso exclusivo de Ju4nM3, en base a los términos señalados en la Política de Privacidad y Términos y condiciones del sitio, y será procesada por la empresa para dar respuesta a mis consultas y/o solicitudes.
              </label>
            </div>
            <div className='container-fluid d-flex justify-content-center'>
              <button type="submit" className="btn btn-success">Confirmar compra</button>
            </div>
          </fieldset>
        </form>
        </div>
        <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
