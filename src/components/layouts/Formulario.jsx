import React from 'react';

const Formulario = () => {
  const formData = React.useRef()
  const formConsult = (e) => {
    e.preventDefault()
    const formData2 = new FormData(formData.current)
    console.log(Object.fromEntries(formData2))
  }

  return (
    <>
    <form onSubmit={formConsult} ref={formData}>
      <fieldset>
        <legend>Formulario de contacto</legend>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre</label>
          <input type="text" className="form-control" name="Name" aria-describedby="emailHelp" placeholder="Su nombre aquí" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo electrónico</label>
          <input type="email" className="form-control" name="Email" aria-describedby="emailHelp" placeholder="Su correo electrónico aquí" required />
          <small name="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">Número de teléfono</label>
          <input type="number" className="form-control" name="Cellphone" aria-describedby="emailHelp" placeholder="Su teléfono aquí" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1" className="form-label mt-4">País</label>
          <select className="form-select" name="Country" required>
            <option selected disabled>Selecciona tu país</option>
            <option>Argentina</option>
            <option>Bolivia</option>
            <option>Brasil</option>
            <option>Chile</option>
            <option>Colombia</option>
            <option>Ecuador</option>
            <option>Paraguay</option>
            <option>Perú</option>
            <option>Uruguay</option>
            <option>Venezuela</option>
            <option>Centroamérica</option>
            <option>Norteamérica</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Europa</option>
            <option>Oceanía</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea" className="form-label mt-4">Mensaje:</label>
          <textarea className="form-control" name="Message" rows={3} defaultValue={""} />
        </div>
        <div className="form-group">
          <label htmlFor="formFile" className="form-label mt-4">Adjuntar archivo:</label>
          <input className="form-control" type="file" name="File" />
        </div>
        <label htmlFor="" className="my-4">La información personal que nos envías a través de este formulario será procesada por Ju4nM3 para dar respuesta a tus consultas y/o solicitudes en base a los términos señalados en la Política de Privacidad del Sitio.</label>
        <div className="form-check my-4" required>
          <input className="form-check-input" type="checkbox" defaultValue name="Required" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Acepto que la información personal contenida en este formulario será de uso exclusivo de Ju4nM3, en base a los términos señalados en la Política de Privacidad y Términos y condiciones del sitio, y será procesada por la empresa para dar respuesta a mis consultas y/o solicitudes.
          </label>
        </div>
        <div className='container-fluid d-flex justify-content-center'>
          <button type="submit" className="btn btn-success">Enviar</button>
        </div>
        
      </fieldset>
    </form>      
    </>
  );
}

export default Formulario;
