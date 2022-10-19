import React from 'react';
import Form from '../layouts/Form';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center'><Form/></div>
      
      <Navbar/>
    </>
  );
}

export default Header;
