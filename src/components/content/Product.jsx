import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import { dbConsult } from '../../utilFunctions/utilFunctions';
import ItemDetailContainer from './ItemDetailContainer';

export const Product = () => {
const [product, setProduct] = useState([]);
const {id} = useParams()

useEffect(() => {
  dbConsult("../json/products.json").then(products => {
    const product = products.find(productoArray => productoArray.id == id)
    setProduct(product)
  })
}, []);

  return (
    <>
      <ItemDetailContainer product={product}/> 
    </>
  );
}

export default Product;
