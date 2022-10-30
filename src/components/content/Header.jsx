import React from 'react';
import SearchBar from '../layouts/SearchBar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center'><SearchBar/></div>
      <Navbar/>
    </>
  );
}

export default Header;
