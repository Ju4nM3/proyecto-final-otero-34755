import React from 'react';

const Carrousel = () => {
  return (
    <>
      <div className='container-fluid border border-2 p-0 mb-1 border-white rounded-1'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/assassins.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/blizzard.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/lotr.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/battlefield.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/cyberpunk.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
    </>
  );
}

export default Carrousel;
