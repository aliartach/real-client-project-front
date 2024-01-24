import React, { useState } from 'react';
import axios from 'axios';


const EditContent = ({ content, onClose }) => {
  const [editedContent, setEditedContent] = useState({
    
     firstDescription:content.firstDescription,
              featuredDescription:content.featuredDescription,
              storyDescription:content.storyDescription,
              imageCat:content.imageCat,
              imageDog:content.imageDog
  });

  const handleChange = (e) => {
    setEditedContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Content ID to be updated:', content.id);

    const formData = new FormData();
    formData.append('featuredDescription', editedContent.featuredDescription);
    formData.append('firstDescription', editedContent.firstDescription);
    formData.append('storyDescription', editedContent.storyDescription);
    formData.append('imageCat', editedContent.imageCat);
    formData.append('imageDog', editedContent.imageDog);
   

    try {
      const response = await axios.patch(`http://localhost:4000/api/content/${content.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('content updated successfully', response.data);
    } catch (error) {
      console.error('Failed to update Content', error.response ? error.response.data : error.message);
    }

    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className='edit-formContent'>
      <label>
        featuredDescription:
        <input type="text" name="featuredDescription" value={editedContent.featuredDescription} onChange={handleChange} />
      </label>
      <label>
        firstDescription:
        <input type="text" name="firstDescription" value={editedContent.firstDescription} onChange={handleChange} />
      </label>
      <label>
        storyDescription:
        <input type="text" name="storyDescription" value={editedContent.storyDescription} onChange={handleChange} />
      </label>
      <label>
        imageCat:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setEditedContent({ ...editedContent, image: e.target.files[0] })}
        />
      </label>
      <label>
        imageDog:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setEditedContent({ ...editedContent, image: e.target.files[0] })}
        />
      </label>
      <div className="button-container">
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditContent;