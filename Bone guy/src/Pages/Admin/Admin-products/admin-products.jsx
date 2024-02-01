import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../../Components/Admin-content-card/Admin-product-card.jsx";

const AdminProducts = () => {
  const [admin_products, setAdminProducts] = useState([]);
  const [sub_categories, setAdminSubCategories] = useState([]);
  const [new_sub_categories, setNewSubCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [new_tags, setNewTags] = useState([]);
  const [new_product_body, setNewProductBody] = useState({});
  const [loading, setLoading] = useState(true);
  const [show_add_product, setShowAddProduct] = useState(false);

  const fetchAdminProducts = useCallback(async () => {
    try {
      console.log("fetching products in admin products");
      const admin_products_response = await axios.get("http://localhost:4000/api/product/");
      if(admin_products_response.data.length === 0) {
        console.error("admin products array is empty");
      } else {
        setAdminProducts(admin_products_response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finished fetching products in admin products");
      setLoading(false);
    }
  }, []);

  const fetchAdminSubCategories = useCallback(async () => {
    try {
      const admin_sub_categories_response = await axios.get("http://localhost:4000/api/subcategory/");
      // console.log("this is subcategories in admin product: ", admin_sub_categories_response);
      if(admin_sub_categories_response.data.length === 0) {
        console.error("admin subcategories array is empty");
      } else {
        setAdminSubCategories(admin_sub_categories_response.data.subCategories); //it is sent like this from the backend .subCategories
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchAdminTags = useCallback(async () => {
    try {
      const admin_tags_response = await axios.get("http://localhost:4000/api/tag/");
      // console.log("this is tags in admin product: ", admin_tags_response);
      if(admin_tags_response.data.length === 0) {
        console.error("admin tags array is empty");
      } else {
        setTags(admin_tags_response.data.tags); //it is sent like this from the backend .tags
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdminProducts();
    fetchAdminSubCategories();
    fetchAdminTags();
  }, []);

  const handleProductAdd = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        `http://localhost:4000/api/product/`,
        new_product_body,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      fetchAdminProducts();
    } catch (error) {
      console.error(error);
    }
  }

  const handleProductDelete = async (product) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/product/${product._id}`
      );
      fetchAdminProducts();
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type } = e.target; //name and value of target input
    if(type === "number") { //------------------------------------------------1
      setNewProductBody((previous_data) => ({
        ...previous_data,
        [name]: parseFloat(value), //[name] automatically changes to the name of the input, the [] here are put for any dynamic value, like {} in jsx
      }));
    } else if (type === "checkbox") { //------------------------------------------------1
      if (name === "sub_categories") { //------------------------------------------------2 checkbox
        if (e.target.checked) { //------------------------------------------------3 subcategories
          var new_sub_categories_temp = new_sub_categories;
          new_sub_categories_temp.push(value);
          setNewSubCategories(new_sub_categories_temp);
          setNewProductBody((previous_data) => ({
            ...previous_data,
            [name]: new_sub_categories,
          }))
        } else { //------------------------------------------------3 subcategories
          var edited_subcategories = new_sub_categories.filter(category => category !== value);
          // console.log("this is edited categories in admin product: ", edited_subcategories);
          setNewSubCategories(edited_subcategories); //setting it for the next subcategory check
          // console.log("this is new categories in admin product in handler: ", new_sub_categories);
          setNewProductBody((previous_data) => ({
            ...previous_data,
            [name]: edited_subcategories,
          }))
        }
      } else if (name === "tags") { //------------------------------------------------2 checkbox
        if (e.target.checked) { //------------------------------------------------3 tags
          var new_tags_temp = new_tags;
          new_tags_temp.push(value);
          setNewTags(new_tags_temp);
          setNewProductBody((previous_data) => ({
            ...previous_data,
            [name]: new_tags,
          }));
        } else { //------------------------------------------------3 tags
          var edited_tags = new_tags.filter(tag => tag !== value);
          setNewTags(edited_tags); // setting it for the next check
          setNewProductBody((previous_data) => ({
            ...previous_data,
            [name]: edited_tags,
          }));
        }
      }
    } else if (type === "radio") { //------------------------------------------------1
      if (e.target.checked) {  //------------------------------------------------2 radio
        setNewProductBody((previous_data) => ({
          ...previous_data,
          [name]: true,
        }));
      } else { //------------------------------------------------2 radio
        setNewProductBody((previous_data) => ({
          ...previous_data,
          [name]: false,
        }));
      }
    } else if (type === "file") { //------------------------------------------------1
      var images_files = e.target.files;
      setNewProductBody((previous_data) => ({
        ...previous_data,
        [name]: images_files[0],
      }));
    } else { //------------------------------------------------1
      setNewProductBody((previous_data) => ({
        ...previous_data,
        [name]: value, //[name] automatically changes to the name of the input, the [] here are put for any dynamic value, like {} in jsx
      }));
    };
  };

  const handleCategoryChange = (e) => {
    console.log("this is target and target value in category change handler: ", e.target, e.target.value);
    const { name, value } = e.target;
    setNewProductBody((previous_data) => ({
      ...previous_data,
      [name]: value,
    }));
  }

  return (
    <section className="admin-products-main">
      {console.log("this is loading in admin products: ", loading)} {console.log("this is admin products in admin products: ", admin_products)}
      {!loading ? (admin_products && admin_products.length > 0 ? (admin_products.map((product, index) => (
        <ProductCard key={index} sub_categories={sub_categories} tags={tags} product={product} handleProductDelete={handleProductDelete} fetchAdminProducts={fetchAdminProducts} />
      ))) : (<p>no products found</p>)):(<p className="admin-products-loading">Loading Products</p>)}
      {/* {console.log("this is new categories in admin product: ", new_sub_categories)} */}
      <button type="button" className="show-add-product-form-button-in-admin-product" onClick={() => setShowAddProduct(true)}>Add A New Product</button>
      {show_add_product && (
        <form className="admin-products-form" onSubmit={handleProductAdd} encType="multipart/form-data">
        <label className="admin-products-input">
          Product Name:
        <input type="text" name="name" onBlur={handleInputChange} required />
        </label>
        <label className="admin-products-input">
          Product SubCategories:
          {sub_categories.map((category, index) => (
            <p key={index} className="sub-category-checkbox-in-admin-products">
              {category.name}
              <input key={index} name="sub_categories" type="checkbox" onChange={handleInputChange} value={category._id} />
            </p>
          ))}
        </label>
        <label className="admin-products-input">
          Product Tags:
          {tags.map((tag, index) => (
            <p key={index} className="tag-checkbox-in-admin-products">
              {tag.name} 
              <input key={index} name="tags" type="checkbox" onChange={handleInputChange} value={tag._id} />
            </p>
          ))}
        </label>
        <label className="admin-products-input">
          Product Description:
        <input type="text" name="description" onBlur={handleInputChange} required />
        </label>
        <label className="admin-products-input">
          Product Price:
        <input type="number" name="price" onBlur={handleInputChange} required />
        </label>
        <label className="admin-products-input">
          Product Image:
        <input type="file" name="image" onChange={handleInputChange} required />
        </label>
        <label className="admin-products-input">
          Product Featured:
        <input type="radio" name="featured" onChange={handleInputChange} />
        </label>
        <label htmlFor="category" className="admin-products-input">
          Product Category:
        </label>
        <select id="category" name="category" onChange={handleCategoryChange} required>
        <option>Dogs</option>
        <option>Cats and Dogs</option>
        </select>
        <label className="admin-products-input">
          Product Quantity:
        <input type="number" name="quantity" onBlur={handleInputChange} />
        </label>
        <label className="admin-products-input">
          Product Weight:
        <input type="number" name="weight" onBlur={handleInputChange} />
        </label>
        <button type="submit" className="admin-product-submit-button">Add Product</button>
        <button type="reset" className="admin-product-cancel-button" onClick={() => setShowAddProduct(false)}>Cancel</button>
      </form>
      )}
    </section>
  );
};

export default AdminProducts;