import React, { useState } from 'react';
import axios from 'axios';

const AddtagForm = ({ onAddtag,onClose }) => {
  const [name, setName] = useState('');
  const [productIds, setProductIds] = useState([]); 


  const handleAddtag = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/tag', {
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
        tag Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
   
      <label>
        Product IDs (comma-separated):
        <input type="text" value={productIds.join(',')} onChange={(e) => setProductIds(e.target.value.split(','))} />
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