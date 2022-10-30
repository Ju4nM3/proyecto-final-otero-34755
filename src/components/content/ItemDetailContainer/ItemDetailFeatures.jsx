const ItemDetailFeatures = ({firstFeature, secondFeature, thirdFeature, fourthFeature, fifthFeature, sixthFeature, seventhFeature, eigthFeature, ninethFeature, tenthFeature}) => {
  return (
    <>
      <div className="container card my-5 border-0 bg-transparent">
        <div className="row gx-5">
          <div className="col-12">
            <h4 className=''>Especificaciones:</h4>
            <div className='card-body row'>
              <ul className='col-6'>     
                <li className="pb-2"><p className="card-text">{firstFeature}</p></li>
                <li className="pb-2"><p className="card-text">{secondFeature}</p></li>
                <li className="pb-2"><p className="card-text">{thirdFeature}</p></li>
                <li className="pb-2"><p className="card-text">{fourthFeature}</p></li>
                <li className="pb-2"><p className="card-text">{fifthFeature}</p></li>
              </ul>
              <ul className='col-6 d-flex flex-column'>
                <li className="pb-2"><p className="card-text">{sixthFeature}</p></li>
                <li className="pb-2"><p className="card-text">{seventhFeature}</p></li>
                <li className="pb-2"><p className="card-text">{eigthFeature}</p></li>
                <li className="pb-2"><p className="card-text">{ninethFeature}</p></li>
                <li className="pb-2"><p className="card-text">{tenthFeature}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailFeatures;
