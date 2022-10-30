import React from 'react';

const Carrousel = () => {
  return (
    <>
      <div className='container-fluid border border-2 p-0 mb-1 border-white rounded-1 mt-2'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-otero.appspot.com/o/Img-Carrousel%2Fassassins.jpg?alt=media&token=d7abe53f-bc5a-4d3b-942d-46fbbf083742" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-otero.appspot.com/o/Img-Carrousel%2Fbattlefield.jpg?alt=media&token=1261971e-758f-4263-9ec5-932acb33ffea" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-otero.appspot.com/o/Img-Carrousel%2Fblizzard.jpg?alt=media&token=3e30295e-6296-4268-913b-7f78c9994286" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-otero.appspot.com/o/Img-Carrousel%2Fcyberpunk.jpg?alt=media&token=f7a184eb-6c7e-43d0-8c7e-c39749c334f1" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-otero.appspot.com/o/Img-Carrousel%2Flotr.jpg?alt=media&token=0f718317-5f79-4d61-8727-9ad34f4f120f" className="d-block w-100" alt="..." />
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
