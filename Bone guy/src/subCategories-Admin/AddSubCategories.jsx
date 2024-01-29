import React, { useState } from 'react';
import axios from 'axios';
import "./AddSubCategory.css"
const AddSubCategoryForm = ({ onAddSubCategory }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [productIds, setProductIds] = useState([]); 
  const [subcategories, setSubcategories] = useState([]);

  const handleAddSubCategory = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/subcategory', {
        name,
        icon,
        products: productIds, // Include the product IDs here
      });

      console.log('Subcategory added successfully:', response.data);
      if (onAddSubCategory) {
        onAddSubCategory(response.data);
      }

     
      setName('');
      setIcon('');
      setProductIds([]);
    
    } catch (error) {
      console.error('Error adding subcategory:', error.message);
     
    }
  };

  return (
    <div classname="addSubCategory-Form">
      <label>
        Subcategory Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Icon:
        <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
      </label>
      <br />
      <label>
        Product IDs (comma-separated):
        <input type="text" value={productIds.join(',')} onChange={(e) => setProductIds(e.target.value.split(','))} />
      </label>
      <br />
      <button onClick={handleAddSubCategory}>Add Subcategory</button>
    </div>
  );
};

export default AddSubCategoryForm;
