import React, { useState } from 'react';
import axios from 'axios';
import "./AddSubCategory.css";
const AddSubCategoryForm = ({ onAddSubCategory,onClose }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [productIds, setProductIds] = useState([]); 


  const handleAddSubCategory = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/subcategory', {
        name,
        icon,
        products: productIds, 
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
    onClose();
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
      <button type="button" onClick={onClose}>
          Cancel
        </button>
    </div>
  );
};

export default AddSubCategoryForm;
