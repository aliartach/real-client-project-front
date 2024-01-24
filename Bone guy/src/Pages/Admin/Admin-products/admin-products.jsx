import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import './admin-products.css';

const AdminProducts = () => {
  const [admin_products, setAdminProducts] = useState([]);
  const [sub_categories, setAdminSubCategories] = useState([]);
  const [new_sub_categories, setNewAdminSubCategories] = useState([]);
  const [sub_category_checked, setSubCategoryChecked] = useState({});
  const [tags, setTags] = useState([]);
  const [tag_checked, setTagChecked] = useState({});
  const [new_tags, setNewTags] = useState([]);
  const [new_image, setNewImage] = useState([]);
  const [featured_checked, setFeaturedChecked] = useState(false);
  const [selected_category, setSelectedCategory] = useState("Dogs");
  const [new_product_body, setNewProductBody] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAdminProducts = useCallback(async () => {
    try {
      const admin_products_response = await axios.get("http://localhost:4000/api/product/");
      if(admin_products_response.data.length === 0) {
        console.error("admin products array is empty");
      } else {
        setAdminProducts(admin_products_response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
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

  const handleProductAdd = async () => {

    try {
      await axios.post(
        `http://localhost:4000/api/product/${product._id}`,
        new_product_body
      );
      fetchAdminProducts();
    } catch (error) {
      console.error(error);
    }
  }

  const handleProductEdit = async (product, name, sub_categories, tags, description, price, image, featured, category, quantity, weight) => {
    const edited_product = {
      name,
      sub_categories,
      tags,
      description,
      price,
      image,
      featured,
      category,
      quantity,
      weight,
    }
    try {
      await axios.patch(
        `http://localhost:4000/api/product/${product._id}`,
        edited_product
      );
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
    const { name, value } = e.target; //name and value of target input
    setNewProductBody((previous_data) => ({
      ...previous_data,
      [name]: value, //[name] automatically changes to the name of the input, the [] here are put for any dynamic value, like {} in jsx
    }));
  };

  const handleSubCategoryCheckboxChange = (e) => {
    if (!sub_category_checked[e.target.key]) {
      setSubCategoryChecked((previous_data) => ({ //adding a new property to the checked object with the target id being the key for each checked boolean value
        ...previous_data,
        [e.target.key]: true,
      }));
      if (e.target.value !== "null") {
        setNewAdminSubCategories((previous_data) => {previous_data.push(e.target.value)})
        setNewProductBody((previous_data) => ({
          ...previous_data,
          [e.target.name]: new_sub_categories, // [] since e.target.name is a dynamic value
        }));
      }
    } else {
      setSubCategoryChecked((previous_data) => ({
        ...previous_data,
        [e.target.key]: false,
      }));
    }
  }

  const handleTagsCheckboxChange = (e) => {
    if (!tag_checked[e.target.key]) {
      setTagChecked((previous_data) => ({
        ...previous_data,
        [e.target.key]: true,
      }));
      if (e.target.value !== "null") {
        setNewTags((previous_data) => {previous_data.push(e.target.value)})
        setNewProductBody((previous_data) => ({
          ...previous_data,
          [e.target.name]: new_tags, // [] since e.target.name is a dynamic value
        }));
      }
    } else {
      setTagChecked((previous_data) => ({
        ...previous_data,
        [e.target.key]: false,
      }));
    }
  }

  const handleFeaturedChange = (e) => { //make it onclick
    if (!featured_checked) {
      setFeaturedChecked(true);
      setNewProductBody((previous_data) => ({
        ...previous_data,
        [e.target.name]: true, // [] since e.target.name is a dynamic value
      }));
    } else {
      setFeaturedChecked(false);
      setNewProductBody((previous_data) => ({
        ...previous_data,
        [e.target.name]: false, // [] since e.target.name is a dynamic value
      }));
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setNewProductBody((previous_data) => ({
      ...previous_data,
      [e.target.name]: selected_category,
    }));
  }

  const handleImageCreate = (e) => {
    if (e.target.files.length > 0) {
      setNewImage(e.target.files[0]);
      setNewProductBody((previous_data) => ({
        ...previous_data,
        [e.target.name]: new_image,
      }));
    }
  }

  return (
    <section className="admin-products-main">
      <form className="admin-products-form" onSubmit={handleProductAdd}>
        <label className="admin-products-input">
          Product Name:
        <input type="text" name="name" onBlur={handleInputChange} />
        </label>
        <label className="admin-products-input">
          Product SubCategories:
          {sub_categories.map((category, _id) => (
            <p key={_id} className="sub-category-checkbox-in-admin-products">
              {category.name}
              <input key={_id} name="sub_categories" type="checkbox" checked={sub_category_checked[_id]} onChange={handleSubCategoryCheckboxChange} value={sub_category_checked[_id] ? category.name : "null"} />
            </p>
          ))}
        </label>
        <label className="admin-products-input">
          Product Tags:
          {tags.map((tag, _id) => (
            <p key={_id} className="tag-checkbox-in-admin-products">
              {tag.name}
              <input key={_id} name="tags" type="checkbox" checked={tag_checked[_id]} onChange={handleTagsCheckboxChange} value={tag_checked[_id] ? tag.name : "null"} />
            </p>
          ))}
        </label>
        <label className="admin-products-input">
          Product Description:
        <input type="text" name="description" onBlur={handleInputChange} />
        </label>
        <label className="admin-products-input">
          Product Price:
        <input type="number" name="price" onBlur={handleInputChange} />
        </label>
        <label className="admin-products-input">
          Product Image:
        <input type="file" name="image" onChange={handleImageCreate} />
        </label>
        <label className="admin-products-input">
          Product Featured:
        <input type="radio" name="featured" checked={featured_checked} onChange={handleFeaturedChange} />
        </label>
        <label htmlFor="category" className="admin-products-input">
          Product Category:
        </label>
        <select id="category" name="category" value={selected_category} onChange={handleCategoryChange}>
        <option value="Dogs">Dogs</option>
        <option value="Cats and Dogs">Cats and Dogs</option>
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
      </form>
    </section>
  );
};

export default AdminProducts;