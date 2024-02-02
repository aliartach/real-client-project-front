import React, { useState, useEffect } from "react";
import instance from "../../api";
import { useLocation, Link } from "react-router-dom";
import "./FetchedProducts.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { TailSpin } from "react-loader-spinner";


const FetchedProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [SubCategories, setSubCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState(
    queryParams.getAll("category")
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState(
    queryParams.getAll("subCategory")
  );
  const [selectedTags, setSelectedTags] = useState(
    queryParams.getAll("tag")
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const queryParams = new URLSearchParams(location.search);
        const selectedCategoriesFromURL = queryParams.getAll("category");
        const selectedSubCategoriesFromURL = queryParams.getAll("subCategory");
        const selectedTagsFromURL = queryParams.getAll("tag");

        setSelectedCategories(selectedCategoriesFromURL);
        setSelectedSubCategories(selectedSubCategoriesFromURL);
        setSelectedTags(selectedTagsFromURL);

        const response = await instance.get("/api/product", {
          params: {
            category: selectedCategoriesFromURL.join(","),
            subCategory: selectedSubCategoriesFromURL.join(","),
            tag: selectedTagsFromURL.join(","),
          },
        });

        if (response && response.data) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  useEffect(() => {
    const handleTagsAndSubCategories = () => {
      const seenTagIds = new Set();
      const seenSubCategoryIds = new Set();

      const uniqueTags = products.flatMap((product) =>
        product.tags.filter((tag) => {
          if (!seenTagIds.has(tag._id)) {
            seenTagIds.add(tag._id);
            return true;
          }
          return false;
        })
      );

      const uniqueSubCategories = products.flatMap((product) =>
        product.sub_categories.filter((sub) => {
          if (!seenSubCategoryIds.has(sub._id)) {
            seenSubCategoryIds.add(sub._id);
            return true;
          }
          return false;
        })
      );

      setTags(uniqueTags);
      setSubCategories(uniqueSubCategories);
    };

    const handleCategories = () => {
      const seenIds = new Set();
      const uniqueCategories = products
        .map((product) => product.category)
        .filter((category) => {
          if (!seenIds.has(category)) {
            seenIds.add(category);
            return true;
          }
          return false;
        });
      setCategories(uniqueCategories);
    };

    handleTagsAndSubCategories();
    handleCategories();
  }, [products]);

  const filterProducts = () => {
    const filteredProducts = products.filter((product) => {
      const categoryFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const subCategoryFilter =
        selectedSubCategories.length === 0 ||
        product.sub_categories.some((sub) =>
          selectedSubCategories.includes(sub._id)
        );

      const tagFilter =
        selectedTags.length === 0 || product.tags.some((tag) =>
          selectedTags.includes(tag._id)
        );

      return categoryFilter && subCategoryFilter && tagFilter;
    });

    return filteredProducts;
  };

  const handleCheckboxChange = (type, value, checked) => {
    const updatedQueryParams = new URLSearchParams(location.search);

    switch (type) {
      case "category":
        setSelectedCategories((prev) => {
          const updatedCategories = checked
            ? [...prev, value]
            : prev.filter((c) => c !== value);
          updatedQueryParams.set("category", updatedCategories.join(","));
          return updatedCategories;
        });
        break;
      case "subCategory":
        setSelectedSubCategories((prev) => {
          const updatedSubCategories = checked
            ? [...prev, value]
            : prev.filter((s) => s !== value);
          updatedQueryParams.set("subCategory", updatedSubCategories.join(","));
          return updatedSubCategories;
        });
        break;
      case "tag":
        setSelectedTags((prev) => {
          const updatedTags = checked
            ? [...prev, value]
            : prev.filter((t) => t !== value);
          updatedQueryParams.set("tag", updatedTags.join(","));
          return updatedTags;
        });
        break;
      default:
        break;
    }

    window.history.pushState({}, "", `?${updatedQueryParams.toString()}`);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((s) => s !== subCategory)
        : [...prev, subCategory]
    );
  };

  const togglePopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(!isPopupVisible);
    setQuantity(1);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <h1 className="products-h1">Our Products</h1>
      <section className="fetched-products-section">
        <Sidebar>
          <Menu>
            <SubMenu label="Categories">
              {categories.map((category) => (
                <MenuItem key={category}>
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    onChange={(e) =>
                      handleCheckboxChange("category", category, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="label-product"
                  >
                    {category}
                  </label>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu label="Sub Categories" className="side">
              {SubCategories.map((subCategory) => (
                <MenuItem key={subCategory._id}>
                  <input
                    type="checkbox"
                    id={`subCategory-${subCategory._id}`}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "subCategory",
                        subCategory._id,
                        e.target.checked
                      )
                    }
                  />
                  <label
                    htmlFor={`subCategory-${subCategory._id}`}
                    onClick={() => handleSubCategoryClick(subCategory._id)}
                    className="label-product"
                  >
                    {subCategory.name}
                  </label>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu label="Tags" className="side">
              {tags.map((tag) => (
                <MenuItem key={tag._id}>
                  <input
                    type="checkbox"
                    id={`tag-${tag._id}`}
                    onChange={(e) =>
                      handleCheckboxChange("tag", tag._id, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={`tag-${tag._id}`}
                    onClick={() => handleTagClick(tag._id)}
                    className="label-product"
                  >
                    {tag.name}
                  </label>
                </MenuItem>
              ))}
            </SubMenu>
          </Menu>
        </Sidebar>

        <div className="product-card-wrapper">
          {loading ? (
            <TailSpin color="#59000d" radius={"8px"} />
          ) : filterProducts().length > 0 ? (
            filterProducts().map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="product-card-outer-container"
              >
                <div className="product-card-container">
                  <img
                    src={`${instance.defaults.baseURL}/${product.image}`}
                    alt="product"
                  />
                  <div className="product-card-text">
                    <p className="">{`${product.price}$`}</p>
                    <p className="">{product.description.substring(0, 30)}...</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No products to show</p>
          )}
        </div>

        {isPopupVisible && (
          <div className="product-card-overlay" onClick={closePopup}>
            <div className="product-card-popup" onClick={handlePopupClick}>
              <div className="product-card-pop-wrapper">
                <div className="product-card-pop-container">
                  <div className="product-card-pop-container-img">
                    <img
                      src={`${instance.defaults.baseURL}/${selectedProduct.image}`}
                      alt="product"
                    />
                  </div>
                  <div className="product-card-pop-text">
                    <p className="">
                      <b>Price: </b>
                      {`${selectedProduct.price}$`}
                    </p>
                    <p className="">
                      <b>Description: </b>
                      {selectedProduct.description}
                    </p>
                    <p className="">
                      <b>Weight: </b>
                      {selectedProduct.weight}
                    </p>
                    <p className="">
                      <b>Name: </b>
                      {selectedProduct.name}
                    </p>
                    <p className="">
                      <b>Quantity: </b>
                      <button onClick={decrementQuantity}>-</button>
                      {quantity}
                      <button onClick={incrementQuantity}>+</button>
                    </p>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {isPopupVisible && (
        <div className="product-card-overlay" onClick={closePopup}>
          <div className="product-card-popup" onClick={handlePopupClick}>
            <span onClick={closePopup}>{'\u00d7'}</span>
            <div className="product-card-pop-wrapper">
              <div className='product-card-pop-container'>
                <div className="product-card-pop-container-img">
                  <img src={`${instance.defaults.baseURL}/${selectedProduct.image}`} alt="product" />
                </div>
                <div className="product-card-pop-text">
                  <p><b>Price: </b>{`${selectedProduct.price}$`}</p>
                  <p><b>Description: </b>{selectedProduct.description}</p>
                  <p><b>Weight: </b>{selectedProduct.weight}</p>
                  <p><b>Name: </b>{selectedProduct.name}</p>
                  <p><b>Quantity: </b>
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
};

export default FetchedProducts;
