import Carrousel from '../../layouts/Carrousel';
import ItemList from './ItemList';

const ItemListContainer = () => {

  return (
    <>
    <Carrousel/>
        <div className='container d-flex justify-content-center my-3'>
          <div className='row container d-flex ms-4'>
            <ItemList/>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
