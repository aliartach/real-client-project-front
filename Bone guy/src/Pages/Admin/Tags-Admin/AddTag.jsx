import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const AddtagForm = ({ onAddtag, onClose }) => {
  const [name, setName] = useState('');
  const [productIds, setProductIds] = useState([]);
  const [admin_products, setAdminProducts] = useState([]);

  const fetchAdminProducts = useCallback(async () => {
    try {
      console.log("fetching products in admin tags");
      const admin_products_response = await axios.get("https://real-client-project-back.onrender.com/api/product/");
      if (admin_products_response.data.length === 0) {
        console.error("admin products array is empty");
      } else {
        setAdminProducts(admin_products_response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finished fetching products in admin tags");
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

  const handleAddtag = async () => {
    try {
      const response = await axios.post('https://real-client-project-back.onrender.com/api/tag', {
        name,
        products: productIds,
      });

      console.log('tag added successfully:', response.data);
      if (onAddtag) {
        onAddtag(response.data);
      }


      setName('');

      setProductIds([]);

    } catch (error) {
      console.error('Error adding tag:', error.message);

    }
    onClose();
  };

  return (
    <div className="add-Tag">
      <label>
        <b>Tag Name:</b>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label className="admin-edit-tag">
        <p><b>Products:</b></p>
        {admin_products.map((product, index) => (
          <ul>
            <li key={index}>
              {product.name}
              <input key={index} name="products" type="checkbox" value={product._id} onClick={handleAddProductId} />
            </li>
          </ul>
        ))}
      </label>
      <br />
      <div className="button-container">
        <button onClick={handleAddtag}>Add tag</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddtagForm;