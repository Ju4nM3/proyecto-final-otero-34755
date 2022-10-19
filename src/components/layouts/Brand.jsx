import React from 'react';
import {Link} from 'react-router-dom'

const Brand = () => {
  return (
    <>
      <Link className="navbar-brand" to="/">
        <div className='container-fluid text-center p-0'>
          <p className='logo text-light'>Ju<span className='logo-span-4 text-danger'>4</span>nM<span className='logo-span-3 text-danger'>3</span></p>
          <p className='slogan text-danger'>Gamers never quit a game</p>
        </div>
        
      </Link>
    </>
  );
}

export default Brand;
