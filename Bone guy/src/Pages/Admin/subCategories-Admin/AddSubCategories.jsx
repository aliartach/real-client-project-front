import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "./AddSubCategory.css";
const AddSubCategoryForm = ({ onAddSubCategory, onClose }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState(null);
  const [productIds, setProductIds] = useState([]); 
  const [admin_products, setAdminProducts] = useState([]);

  const fetchAdminProducts = useCallback(async () => {
    try {
      console.log("fetching products in admin sub categories");
      const admin_products_response = await axios.get("https://real-client-project-back.onrender.com/api/product/");
      if(admin_products_response.data.length === 0) {
        console.error("admin products array is empty");
      } else {
        setAdminProducts(admin_products_response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finished fetching products in admin subcategories");
    }
  }, []);

  useEffect(() => {
    fetchAdminProducts();
  }, []);

  const handleAddProductId = async (e) => {
    if (e.target.checked) {
      var new_products_temp = productIds;
      new_products_temp.push(e.target.value);
      setProductIds(new_products_temp);
    } else {
      var edited_products = productIds.filter(productId => productId !== e.target.value);
      setProductIds(edited_products); //setting it for the next subcategory check
    }
  }

  const handleAddSubCategory = async () => {
    try {
      const response = await axios.post('https://real-client-project-back.onrender.com/api/subcategory', {
        name,
        icon,
        products: productIds,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Subcategory added successfully:', response.data);
      if (onAddSubCategory) {
        onAddSubCategory(response.data);
      }


      setName('');
      setIcon(null);
      setProductIds([]);

    } catch (error) {
      console.error('Error adding subcategory:', error.message);

    }
    onClose();
  };

  return (
    <div className="addSubCategory-Form">
      <label>
        Subcategory Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Icon:
        <input type="file" onChange={(e) => setIcon(e.target.files[0])} />
      </label>
      <br />
      <label className="admin-products-input">
          Products:
          {admin_products.map((product, index) => (
            <p key={index} className="product-checkbox-in-admin-subcategories">
              {product.name}
              <input key={index} name="products" type="checkbox"  value={product._id} onClick={handleAddProductId} />
            </p>
          ))}
        </label>
      <br />
      <button onClick={handleAddSubCategory}>Add Subcategory</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default AddSubCategoryForm;
