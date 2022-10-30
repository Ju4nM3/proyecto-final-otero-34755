import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getProduct } from '../../../utilFunctions/firebase';
import { useParams } from 'react-router-dom';

// ACÁ SE IMPORTA EL ITEMDETAIL, PASANDO COMO PARÁMETRO EL PRODUCTO, QUE FILTRAREMOS EN ESTE ARCHIVO CON EL ID.

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    getProduct(id).then(prod => {
      setProductDetail(prod)
    })
  }, [])

  if (productDetail.length != 0) {
  return (
    <div>
      <ItemDetail productDB={productDetail}/>
    </div>
  );
}}

export default ItemDetailContainer;
