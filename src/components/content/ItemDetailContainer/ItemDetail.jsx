import ItemDetailHeader from './ItemDetailHeader';
import ItemDetailFeatures from './ItemDetailFeatures';

 //DETALLE DEL PRODUCTO, es decir, la estructura.

const ItemDetail = ({productDB}) => {
  return (
    <>
    <ItemDetailHeader productDB={productDB}/>
    <ItemDetailFeatures {...productDB[1]}/>
    </>
  );
}

export default ItemDetail;
