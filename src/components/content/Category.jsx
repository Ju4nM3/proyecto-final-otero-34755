import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { dbConsult } from '../../utilFunctions/utilFunctions';
import { Link } from 'react-router-dom';


const Category = () => {
  const [categories, setCategories] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    dbConsult("../json/products.json").then(products => {
      const filterProduct = products.filter(product => product.categoryId == parseInt(id))
      const cardProduct = filterProduct.map(product =>
        <div className="card mb-3 cardProduct p-0" key={product.id}>
          <img src={"../img/" + product.img} alt={product.product} className="img-fluid p-0 rounded p-1" />
          <div className="card-body text-center">
            <h6 className="card-title">{product.product}</h6>
            <h6 className="card-subtitle text-muted">${product.value}</h6>
          </div>
          <Link to={"/product/" + product.id}><button className='btn btn-dark w-100 border-0'>Ver producto</button></Link>
        </div>
      )
      setCategories(cardProduct)
    })
  }, [id]);

  return (
    <>
      <div className='container d-flex justify-content-center my-3'>
        <div className='row container-fluid d-flex ms-4'>
          {categories}
        </div>
      </div>
    </>
  );
}

export default Category;
