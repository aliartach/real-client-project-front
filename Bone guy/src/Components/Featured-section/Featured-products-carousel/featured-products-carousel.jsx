import React, { useState } from "react";
import './featured-products-carousel.css';

const FeaturedProductsCarousel = ({ featured_products }) => {

  const [active_starting_index, setActiveStartingIndex] = useState([0]);

  const nextSlide = () => {
    setActiveStartingIndex((prevStartingIndex) => (prevStartingIndex + 4) % featured_products.length)
  };

  const previousSlide = () => {
    setActiveStartingIndex((prevStartingIndex) => (prevStartingIndex - 4 + featured_products.length) % featured_products.length)
  };
  // console.log("this is featured products in carousel: ", featured_products);
  return (
    <menu className="featured-products-carousel">
      <button onClick={previousSlide} className="previous-featured-products-carousel-button"><img src={"./src/assets/previous-button.png"} alt="previous"  /></button>
      <ul className="featured-products-carousel-cards">
        {
          featured_products.map((product, index) => (
            <li
              key={index}
              className={`featured-product-in-carousel${(index >= active_starting_index && index < active_starting_index + 4) ? ("-active") : ("")}`}
            >
              <img className="featured-product-image" src={`https://real-client-project-back.onrender.com/${product.image}`} alt="product picture" />
              <p className="featured-product-name">
                {product.name}
              </p>
              <p className="featured-product-price">
                {product.price}$
              </p>
            </li>
          ))
        }
      </ul>
      <button onClick={nextSlide} className="next-featured-products-carousel-button"><img src={"./src/assets/next-button.png"} alt="next" /></button>
    </menu>
  );
};

export default FeaturedProductsCarousel;