import React from 'react';
import Brand from './Brand';
import CartWidget from './CartWidget';

const Form = ({SearchingPlaceholder}) => {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center my-2 row'>
        <div className='col-2 m-0 p-0'><Brand/></div>
        <form className="d-flex col-9 justify-content-center">
          <input className="form-control" type="text" placeholder={SearchingPlaceholder} />
          <button className="btn btn-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className='col-1 m-0 p-0'><CartWidget/></div>
      </div>
    </>
  );
}

export default Form;
