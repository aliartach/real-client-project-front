import React, { useState } from "react";
import axios from "axios";
import "./Edit-product.css";

const Editproduct = ({ product, tags, sub_categories, setProductEditStatus, fetchAdminProducts }) => {

  const product_sub_categories_ids = []; //since we populated subcategories, we use this array to save our sub categories ids only as strings instead of objects
  product.sub_categories.map((category) => {
    product_sub_categories_ids.push(category._id);
  });
  
  const product_tags_ids = [];
  product.tags.map((tag) => {
    product_tags_ids.push(tag._id);
  });

  const [edited_product, setEditedproduct] = useState(product);
  const [new_sub_categories, setNewSubCategories] = useState(product_sub_categories_ids); // we initialize it as ids
  const [new_tags, setNewTags] = useState(product_tags_ids);

  const handleProductEdit = async (edited_product) => {
    try {
      await axios.patch(
        `http://localhost:4000/api/product/${product._id}`,
        edited_product,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        } 
      );
      fetchAdminProducts();
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type } = e.target; //name and value of target input
    if(type === "number") { //------------------------------------------------1
      setEditedproduct((previous_data) => ({
        ...previous_data,
        [name]: parseFloat(value), //[name] automatically changes to the name of the input, the [] here are put for any dynamic value, like {} in jsx
      }));
    } else if (type === "checkbox") { //------------------------------------------------1
      if (name === "sub_categories") { //------------------------------------------------2 checkbox
        if (e.target.checked) { //------------------------------------------------3 subcategories
          var new_sub_categories_temp = new_sub_categories;
          new_sub_categories_temp.push(value);
          setNewSubCategories(new_sub_categories_temp);
          setEditedproduct((previous_data) => ({
            ...previous_data,
            [name]: new_sub_categories,
          }))
        } else { //------------------------------------------------3 subcategories
          var edited_subcategories = new_sub_categories.filter(category => category !== value);
          // console.log("this is edited categories in admin product: ", edited_subcategories);
          setNewSubCategories(edited_subcategories); //setting it for the next subcategory check
          // console.log("this is new categories in admin product in handler: ", new_sub_categories);
          setEditedproduct((previous_data) => ({
            ...previous_data,
            [name]: edited_subcategories,
          }))
        }
      } else if (name === "tags") { //------------------------------------------------2 checkbox
        if (e.target.checked) { //------------------------------------------------3 tags
          var new_tags_temp = new_tags;
          new_tags_temp.push(value);
          setNewTags(new_tags_temp);
          setEditedproduct((previous_data) => ({
            ...previous_data,
            [name]: new_tags,
          }));
        } else { //------------------------------------------------3 tags
          var edited_tags = new_tags.filter(tag => tag !== value);
          setNewTags(edited_tags); // setting it for the next check
          setEditedproduct((previous_data) => ({
            ...previous_data,
            [name]: edited_tags,
          }));
        }
      }
    } else if (type === "radio") { //------------------------------------------------1
      if (e.target.value === "featured") {  //------------------------------------------------2 radio
        console.log("entered radio of featured checked");
        setEditedproduct((previous_data) => ({
          ...previous_data,
          [name]: true,
        }));
      } else { //------------------------------------------------2 radio
        setEditedproduct((previous_data) => ({
          ...previous_data,
          [name]: false,
        }));
      }
    } else if (type === "file") { //------------------------------------------------1
      var images_files = e.target.files;
      setEditedproduct((previous_data) => ({
        ...previous_data,
        [name]: images_files[0],
      }));
    } else { //------------------------------------------------1
      setEditedproduct((previous_data) => ({
        ...previous_data,
        [name]: value, //[name] automatically changes to the name of the input, the [] here are put for any dynamic value, like {} in jsx
      }));
    };
  };

  const handleCategoryChange = (e) => {
    console.log("this is target and target value in category change handler: ", e.target, e.target.value);
    const { name, value } = e.target;
    setEditedproduct((previous_data) => ({
      ...previous_data,
      [name]: value,
    }));
  }

  return (
        <form className="admin-product-edit-form" onSubmit={(e) => {e.preventDefault(); handleProductEdit(edited_product);}} encType="multipart/form-data">
          <label className="admin-product-edit-input">
            Product Name:
          <input type="text" name="name" defaultValue={edited_product.name} onBlur={handleInputChange} />
          </label>
          <label className="admin-product-edit-input">
            Product SubCategories:
            {/* .some is a method that takes an array and checks for a condition returning a boolean value of true once the condition is met true for one of the items, and false if no item matches the condition, it also accepts more optional arguments you can search about  */}
            {sub_categories.map((category, index) => ( edited_product.sub_categories.some(product_sub_category => product_sub_category._id === category._id) ?
              (<p key={index} className="sub-category-checkbox-in-admin-product-edit">
                {category.name}
                <input key={index} name="sub_categories" type="checkbox" onClick={handleInputChange} value={category._id} defaultChecked />
              </p>) : (<p key={index} className="sub-category-checkbox-in-admin-product-edit">
                {category.name}
                <input key={index} name="sub_categories" type="checkbox" onClick={handleInputChange} value={category._id} />
              </p>)
            ))}
          </label>
          <label className="admin-product-edit-input">
            Product Tags:
            {tags.map((tag, index) => ( edited_product.tags.some(product_tag => product_tag._id === tag._id) ?
              (<p key={index} className="tag-checkbox-in-admin-product-edit">
                {tag.name} 
                <input key={index} name="tags" type="checkbox" onClick={handleInputChange} value={tag._id} defaultChecked />
              </p>) : (<p key={index} className="tag-checkbox-in-admin-product-edit">
                {tag.name} 
                <input key={index} name="tags" type="checkbox" onClick={handleInputChange} value={tag._id} />
              </p>)
            ))}
          </label>
          <label className="admin-product-edit-input">
            Product Description:
          <input type="text" name="description" defaultValue={edited_product.description} onBlur={handleInputChange} />
          </label>
          <label className="admin-product-edit-input">
            Product Price:
          <input type="number" name="price" defaultValue={edited_product.price} onBlur={handleInputChange} />
          </label>
          <label className="admin-product-edit-input">
            Product Image:
          <input type="file" name="image" onChange={handleInputChange} />
          </label>
          <label className="admin-product-edit-input">
            Product Featured:
          <input type="radio" name="featured" value={"featured"} onChange={handleInputChange} />
          </label>
          <label className="admin-product-edit-input">
            Product Not Featured:
          <input type="radio" name="featured" value={"not"} onChange={handleInputChange} />
          </label>
          <label htmlFor="category" className="admin-product-edit-input">
            Product Category:
          </label>
          <select id="category" name="category" onChange={handleCategoryChange} >
          <option value={""}>Choose a Category</option>
          <option>Dogs</option>
          <option>Cats and Dogs</option>
          </select>
          <label className="admin-product-edit-input">
            Product Quantity:
          <input type="number" name="quantity" defaultValue={edited_product.quantity} onBlur={handleInputChange} />
          </label>
          <label className="admin-product-edit-input">
            Product Weight:
          <input type="number" name="weight" defaultValue={edited_product.weight} onBlur={handleInputChange} />
          </label>
          <button type="submit" className="admin-product-edit-submit-button">Approve</button>
          <button type="reset" className="admin-product-edit-cancel-button" onClick={() => setProductEditStatus(false)}>Close</button>
        </form>
  );
};

export default Editproduct;
