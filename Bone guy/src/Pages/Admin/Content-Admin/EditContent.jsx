import React, { useState } from "react";
import axios from "axios";

import "./EditContent.css";
const EditContent = ({ content, onClose }) => {
  const [editedContent, setEditedContent] = useState({
    firstDescription: content.firstDescription,
    featuredDescription: content.featuredDescription,
    storyDescription: content.storyDescription,
    imageCat: content.imageCat,
    imageDog: content.imageDog,
  });
 
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setEditedContent((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0], 
      }));
    } else {
      setEditedContent((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Content ID to be updated:", content._id);
    const confirmation = window.confirm("Are you sure you want to save changes?");
    if (!confirmation) {
      return;
    }

const formData = new FormData();
    formData.append("featuredDescription", editedContent.featuredDescription);
    formData.append("firstDescription", editedContent.firstDescription);
    formData.append("storyDescription", editedContent.storyDescription);
    if (editedContent.imageCat) {
      formData.append("imageCat", editedContent.imageCat);
    }
    if (editedContent.imageDog) {
      formData.append("imageDog", editedContent.imageDog);
    }

    try {
      const response = await axios.patch(
        `https://real-client-project-back.onrender.com/api/content/${content._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("content updated successfully", response.data);

 
    } catch (error) {
      console.error(
        "Failed to update Content",
        error.response ? error.response.data : error.message
      );
    }

    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className="edit-formContent">
    <label><b>
        First Description:</b>
        <input
          type="text"
          name="firstDescription"
          value={editedContent.firstDescription}
          onChange={handleChange}
        />
      </label>
      <label><b>
        Featured Description:</b>
        <input
          type="text"
          name="featuredDescription"
          value={editedContent.featuredDescription}
          onChange={handleChange}
        />
      </label>
      
      <label><b>
        Story Description:</b>
        <input
          type="text"
          name="storyDescription"
          value={editedContent.storyDescription}
          onChange={handleChange}
        />
      </label>
      <label><b>
        image Cat:</b>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="imageCat"
        />
      </label>
      <label><b>
        image Dog:</b>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="imageDog"
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
