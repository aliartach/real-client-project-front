import { useState, useEffect } from "react";
import instance from "../../api";
import { Link } from "react-router-dom";
import './FetchedProducts.css'

const FetchedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get('/api/product')
        console.log(response)
        if (response && response.data) {
          setProducts(response.data)
        }
      } catch (error) {
        console.error('Error fetching products', error.message)
      }
    }
    fetchProducts();
  }, [])
  return (
    <>
      <div className="product-card-wrapper">
        {products.map((product) => (
          <Link key={product._id} to='' className="product-card-outer-container" >
            <div className='product-card-container'>
              <img src={`${instance.defaults.baseURL}/${product.image}`} alt="product" />
              <div className="product-card-text">
                <p className="">{`${product.price}$`}</p>
                <p className="">{product.description.substring(0,30)}...</p>
              </div>
            </div></Link>
        ))}
      </div>
    </>
  );
}

export default FetchedProducts;