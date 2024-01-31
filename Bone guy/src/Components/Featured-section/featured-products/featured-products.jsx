import  {useState, useEffect} from 'react';
import axios from 'axios';
import FeaturedProductsCarousel from '../Featured-products-carousel/featured-products-carousel.jsx'
import './featured-products.css';

const Featured = () => {

  const [featured_products, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchFeaturedProducts = async() => {
      try{
        const featured_products_response = await axios.get(
          "http://localhost:4000/api/product/featured"
        );
        // console.log("this is response in featured products:", featured_products_response);
        if(featured_products_response.data.length > 0) {
          setFeaturedProducts(featured_products_response.data);
        } else {
          console.error("No featured products found");
        }
      } catch (error) {
        console.error("error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  // console.log("this is featured products in featured products page:", featured_products);

  return (
      (!loading) ?
      (<section className='featured-products-section'>
        <img src='./src/assets/Dog-jump.png' alt='' className='jumping-dog' />
        <section className='featured-whole-section-description'>
        <h1 className='featured-products-heading'>
          FEATURED PRODUCTS
        </h1>
        <div className='featured-product-description'>
          Our treats are made with high-quality ingredients, ensuring that your pets get all the nutrients they need while enjoying a delicious snack. <br />
          <section className='second-paragraph-description'>
          Whether you have a small or large pet, we have a treat that will be perfect for them. Our treats come in various flavors, including chicken, beef, and salmon, ensuring that your pet will find something they love.
          </section>
        </div>
        <button className='discover-more-button'>
          <p>DISCOVER MORE</p> <img src='./src/assets/flipped-paw.png' className='flipped-paw-icon' alt='paw icon' />
        </button>
        </section>
        <FeaturedProductsCarousel featured_products = {featured_products} />
      </section>) : (<p className='loading'>Loading...</p>)
  );
};

export default Featured;