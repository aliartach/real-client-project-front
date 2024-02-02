import { useState, useEffect } from "react";
import instance from "../../api";
import { Link } from "react-router-dom";
import './FetchedProducts.css'

const FetchedProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1


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

  const togglePopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(!isPopupVisible);
    // Reset quantity to 1 when opening the popup
    setQuantity(1);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const incrementQuantity = () => {
    // Increase quantity by 1
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    // Ensure quantity does not go below 1
    if (quantity > 1) {
      // Decrease quantity by 1
      setQuantity(quantity - 1);
    }
  };

  const handlePopupClick = (event) => {
    // Prevent closing the popup when clicking inside it
    event.stopPropagation();
  };


  return (
    <>
      <div className="product-card-wrapper">
        {products.map((product) => (
          <Link key={product._id} to='' className="product-card-outer-container" onClick={() => togglePopup(product)}>
            <div className='product-card-container'>
              <div className="product-card-container-img">
                <img src={`${instance.defaults.baseURL}/${product.image}`} alt="product" />
              </div>
              <div className="product-card-text">
                <p className=""><b>{`${product.price}$`}</b></p>
                <p className="">{product.description.substring(0, 30) + (product.description.length > 30 ? '...' : '')}</p>
              </div>
            </div></Link>
        ))}
      </div>

      {isPopupVisible && (
        <div className="product-card-overlay" onClick={closePopup}>
          <div className="product-card-popup" onClick={handlePopupClick}>
            <div className="product-card-pop-wrapper">
              <div className='product-card-pop-container'>
                <div className="product-card-pop-container-img">
                  <img src={`${instance.defaults.baseURL}/${selectedProduct.image}`} alt="product" />
                </div>
                <div className="product-card-pop-text">
                  <p className=""><b>Price: </b>{`${selectedProduct.price}$`}</p>
                  <p className=""><b>Description: </b>{selectedProduct.description}</p>
                  <p className=""><b>Weight: </b>{selectedProduct.weight}</p>
                  <p className=""><b>Name: </b>{selectedProduct.name}</p>
                  <p className=""><b>Quantity: </b>
                    <button onClick={decrementQuantity}>-</button>
                    {quantity}
                    <button onClick={incrementQuantity}>+</button>
                  </p>
                  <div className="quantity-controls">
                  </div>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FetchedProducts;

