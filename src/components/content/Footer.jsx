import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="w-100 footer position-relative">
        <div className="row m-0 d-flex justify-content-center">
          <div className='col-7'>
            <div className='row'>
              <div className="col-4 my-3">
                <h6 className='text-white m-0 pb-4 text-center text-decoration-underline'>Información útil</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Aldolfo Alsina 2256</li>
                  <li className="list-group-item">Lunes a Viernes de 09:00 a 18:00, Sábados de 09:00 a 13:00</li>
                  <li className="list-group-item"><Link to={"#"}>Términos y Condiciones</Link></li>
                </ul>
              </div>
              <div className="col-4 my-3">
                <h6 className='text-white m-0 pb-4 text-center text-decoration-underline'>Contacto</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Teléfono: +54 11 2311-5503</li>
                  <li className="list-group-item">ju4nm3PcComponentes@gmail.com</li>
                  <li className="list-group-item">juanmeotero@gmail.com</li>
                </ul>
              </div>
              <div className="col-4 my-3">
                <h6 className='text-white m-0 pb-4 text-center text-decoration-underline'>Redes</h6>
                <ul className="d-flex justify-content-evenly align-items-center">
                  <li className="fs-4"><Link to={"#"}><i className="fa-brands fa-instagram"></i></Link></li>
                  <li className="fs-4"><Link to={"#"}><i className="fa-brands fa-twitter"></i></Link></li>
                  <li className="fs-4"><Link to={"#"}><i className="fa-brands fa-facebook"></i></Link></li>
                  <li className="fs-4"><Link to={"#"}><i className="fa-brands fa-twitch"></i></Link></li>
                  <li className="fs-4"><Link to={"#"}><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
              </div>
            </div>           
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12 text-center copyright m-0"><h6 className='text-white m-0 p-4'>Copyright 2022 - Otero, Juan Martín</h6></div>
        </div>
      </div>
      
    </>
  );
}

export default Footer;
