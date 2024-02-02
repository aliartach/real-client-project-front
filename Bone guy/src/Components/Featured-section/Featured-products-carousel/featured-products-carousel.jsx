import React, { useState } from "react";
import './featured-products-carousel.css';

const FeaturedProductsCarousel = ({ featured_products }) => {
  const [activeStartingIndex, setActiveStartingIndex] = useState(0);

  const nextSlide = () => {
    setActiveStartingIndex((prevStartingIndex) => (prevStartingIndex + 4) % featured_products.length);
  };

  const previousSlide = () => {
    setActiveStartingIndex((prevStartingIndex) => (prevStartingIndex - 4 + featured_products.length) % featured_products.length);
  };

  const renderCarouselCards = () => {
    const displayedProducts = featured_products.slice(activeStartingIndex, activeStartingIndex + 4);

    // If there are not enough products in the current set, fill the remaining slots from the beginning
    const remainingProducts = featured_products.slice(0, Math.max(0, 4 - displayedProducts.length));

    return [...displayedProducts, ...remainingProducts].map((product, index) => (
      <li
        key={index}
        className={`featured-product-in-carousel${(index >= activeStartingIndex && index < activeStartingIndex + 4) ? ("-active") : ("")}`}
      >
        <img className="featured-product-image" src={`http://localhost:4000/${product.image}`} alt="product picture" />
        <p className="featured-product-name">
          {product.name}
        </p>
        <p className="featured-product-price">
          {product.price}
        </p>
      </li>
    ));
  };

  return (
    <menu className="featured-products-carousel">
      <button onClick={previousSlide} className="previous-featured-products-carousel-button"><img src={"./src/assets/previous-button.png"} alt="previous" /></button>
      <ul className="featured-products-carousel-cards">
        {renderCarouselCards()}
      </ul>
      <button onClick={nextSlide} className="next-featured-products-carousel-button"><img src={"./src/assets/next-button.png"} alt="next" /></button>
    </menu>
  );
};

export default FeaturedProductsCarousel;
