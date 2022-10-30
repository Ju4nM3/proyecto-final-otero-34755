import Item from "./Item";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import { getProducts } from "../../../utilFunctions/firebase";


const ItemList = (/* {variable} */) => {
  const [test, setTest] = useState([]);
  const {categoryId} = useParams()

  useEffect(() => {
    getProducts().then(productos => {
      const productos1 = () => {
        if (categoryId) {
          return productos.filter((product) => product[1].categoryId === categoryId);
        } else {
          return productos;
        }
      }

      const productos2 = productos1(categoryId).map(prod1 => 
        <div className="card mb-3 cardProduct p-0" key={prod1[0]}>
          <Item variable={prod1}/>
        </div>
        )

        setTest(productos2)
    })
  }, [categoryId]);  

  return (
    <>
    {test}
    </>
  );
}

export default ItemList;


