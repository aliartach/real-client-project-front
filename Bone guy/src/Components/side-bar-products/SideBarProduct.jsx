import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SideBarProduct.css";

const DropdownSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SubCategories, setSubCategories] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const featured_products_response = await axios.get(
          "http://localhost:4000/api/product/"
        );
        if (featured_products_response.data.length > 0) {
          setProducts(featured_products_response.data);
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

  useEffect(() => {
    const handleTags = () => {
      const seenIds = new Set();
      const uniqueTags = products.flatMap((product) =>
        product.tags.filter((tag) => {
          if (!seenIds.has(tag.id)) {
            seenIds.add(tag.id);
            return true;
          }
          return false;
        })
      );
      setTags(uniqueTags);
    };

    const handleSubCategories = () => {
      const seenIds = new Set();
      const uniqueSubCategories = products.flatMap((product) =>
        product.sub_categories.filter((sub) => {
          if (!seenIds.has(sub.id)) {
            seenIds.add(sub.id);
            return true;
          }
          return false;
        })
      );
      setSubCategories(uniqueSubCategories);
    };

    handleTags();
    handleSubCategories();
  }, [products]);

  console.log(products);
  console.log(tags);
  console.log(SubCategories);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <section className="sideBarProduct">
      <div className="dropdown-container">
        <p className="toggle-button" onClick={toggleDropdown1}>
          Categories
        </p>

        {isOpen1 && (
          <div className="dropdown-content">
            <input
              type="checkbox"
              value={"cats and dogs"}
              name={"cat and dogs"}
            />
           cats and dogs 
           <br/>
            <input
              type="checkbox"
              value={"dogs"}
              name={"dogs"}
            />
           dogs
            
          </div>
        )}
      </div>

      <div className="dropdown-container">
        <p className="toggle-button" onClick={toggleDropdown2}>
          Sub Categories
        </p>
      </div>
      {isOpen2 && (
        <div className="dropdown-content">
          {SubCategories &&
            SubCategories.length > 0 &&
            SubCategories.map((sub) => (
              <div key={sub._id}>
                <input type="checkbox" value={sub.name} name={sub.name} />
                {sub.name}
              </div>
            ))}
        </div>
      )}

      <div className="dropdown-container">
        <p className="toggle-button" onClick={toggleDropdown3}>
          Tags
        </p>

        {isOpen3 && (
          <div className="dropdown-content">
            {tags.map((tag) => (
              <div key={tag.name}>
                <input type="checkbox" value={tag._id} name={tag.name} />
                {tag.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DropdownSection;
