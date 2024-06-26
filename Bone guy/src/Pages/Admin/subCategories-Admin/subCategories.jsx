import React, { useEffect, useState } from "react";
import axios from "axios";
import "./subcategories.css";
import EditSubCategories from "./EditSubCategories";
import AddSubCategoryForm from "./AddSubCategories";
import Swal from "sweetalert2";

const AdminSubCategories = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEdit = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setShowEditForm(true);
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const fetchSubCategoriesData = async () => {
    try {
      const response = await axios.get("https://real-client-project-back.onrender.com/api/subcategory");
      setSubCategories(response.data.subCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSubCategoriesData();
  }, [showEditForm, showAddForm]);

  const handleDelete = async (deletedId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
    try {
      await axios.delete(`https://real-client-project-back.onrender.com/api/subcategory/${deletedId}`);
      setSubCategories((prevSubCategories) =>
        prevSubCategories.filter((subCategory) => subCategory._id !== deletedId)
      );
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  }
  };
  const handleAddSubCategory = (newSubCategory) => {
 
    setSubCategories((prevSubCategories) => [...prevSubCategories, newSubCategory]);
  
    setShowAddForm(false);
  };

  return (
    <>
      <div className="subCategories-card-container">
        <div className="subCategoires-tables">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>icon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.map((subCategory) => (
              <AdminSubCategoriesCard
                key={subCategory._id}
                subCategory={subCategory}
                showEditForm={showEditForm}
                setShowEditForm={setShowEditForm}
                onEdit={() => handleEdit(subCategory)}
                onDelete={() => handleDelete(subCategory._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className={`edit-formContent-modal ${showEditForm ? "active" : ""}`}>
        {showEditForm && (
          <EditSubCategories
            subCategory={selectedSubCategory}
            onClose={() => setShowEditForm(false)}
          />
        )}
        <br/>
        <button onClick={handleAdd} className="add-button">
          Add
        </button>
        {showAddForm && (
          <AddSubCategoryForm
            onClose={() => setShowAddForm(false)}
            onAddSubCategory={handleAddSubCategory}
          />
        )}
      </div>
      </div>
    </>
  );
};

export const AdminSubCategoriesCard = ({
  subCategory,
  showEditForm,
  onEdit,
  setShowEditForm,
  onDelete,
}) => {
  const handleEditClick = () => {
    onEdit();
    setShowEditForm(true);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <tr
      className={`subcategories-card ${
        showEditForm ? "edit-formContent-open" : ""
      }`}
      key={subCategory._id}
    >
      <td>{subCategory.name}</td>
      <td>
        <img
          src={`https://real-client-project-back.onrender.com/${subCategory.icon}`}
          alt="Category-icon"
          className="images-admin"
        />
      </td>
      <td>
        <div className="button-container">
                <button onClick={handleEditClick} className="admin-edit--button">
          <p>Edit</p>
        </button>
        <button onClick={handleDeleteClick} className="admin-edit--button">
          <p>Delete</p>
        </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminSubCategories
