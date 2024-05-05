import React, { useState, useEffect } from "react";
import axios from "axios";

import "./EditSubCategories.css";

const EditSubCategories = ({ subCategory, onClose }) => {
  const [editedSubCategory, setEditedSubCategory] = useState({
    name: "",
    icon: "",
  });


  console.log("Initial state:", subCategory);

  // Update state when subCategory prop changes
  useEffect(() => {
    setEditedSubCategory({
      name: subCategory.name,
      icon: subCategory.icon,
    });
  }, [subCategory]);

  const handleChange = (e) => {
    console.log("Target:", e.target);
    if (e.target.type === "file" && e.target.files.length > 0) {
      setEditedSubCategory((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setEditedSubCategory((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };


  console.log("Edited state:", editedSubCategory);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!subCategory || !subCategory._id) {
        console.error("Invalid subCategory:", subCategory);
        throw new Error("Invalid subCategory");
      }

      console.log("subCategory ID to be updated:", subCategory._id);

      const formData = new FormData();
      formData.append("name", editedSubCategory.name);

      if (editedSubCategory.icon instanceof File) {
        formData.append("icon", editedSubCategory.icon);
      }

      const response = await axios.patch(
        `https://real-client-project-back.onrender.com/api/subcategory/${subCategory._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Subcategory updated successfully", response.data);
    } catch (error) {
      console.error(
        "Failed to update subCategory",
        error.response ? error.response.data : error.message
      );
    }

    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className="edit-formSubCategory">
      <label>
        name:
        <input
          type="text"
          name="name"
          value={editedSubCategory.name}
          onChange={handleChange}
        />
      </label>

      <label>
        icon
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="icon"
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

export default EditSubCategories;
