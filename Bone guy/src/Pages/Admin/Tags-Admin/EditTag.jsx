import React, { useState, useEffect } from "react";
import axios from "axios";
import './EditTag.css'

const EditTags = ({ tag, onClose }) => {
  const [editedtag, setEditedtag] = useState({
    name: "",
  });

 
  console.log("Initial state:", tag);

  // Update state when tag prop changes
  useEffect(() => {
    setEditedtag({
      name: tag.name,
   
    });
  }, [tag]);

  const handleChange = (e) => {
    console.log("Target:", e.target);

      setEditedtag((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    
  };

 
  console.log("Edited state:", editedtag);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmation = window.confirm("Are you sure you want to save changes?");
    if (!confirmation) {
      return;
    }
    try {
      if (!tag || !tag._id) {
        console.error("Invalid tag:", tag);
        throw new Error("Invalid tag");
      }

      console.log("tag ID to be updated:", tag._id);

  
      const response = await axios.patch(
        `http://localhost:4000/api/tag/${tag._id}`,
        editedtag,
      );

      console.log("tag updated successfully", response.data);
    } catch (error) {
      console.error(
        "Failed to update tag",
        error.response ? error.response.data : error.message
      );
    }

    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className="edit-tag-form">
      <label>
        <b>Name:</b>
        <input
          type="text"
          name="name"
          value={editedtag.name}
          onChange={handleChange}
        />
      </label>
      <div className="button-container">
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default EditTags;
