
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditTags from "./EditTag";
import AddtagForm from "./AddTag";
import Swal from "sweetalert2";

const Admintags = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedtag, setSelectedtag] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [tags, settags] = useState([]);

  const handleEdit = (tag) => {
    setSelectedtag(tag);
    setShowEditForm(true);
  };

  const fetchtagsData = async () => {
    try {
      const response = await axios.get("https://real-client-project-back.onrender.com/api/tag");
      settags(response.data.tags);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchtagsData();
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
        await axios.delete(`https://real-client-project-back.onrender.com/api/tag/${deletedId}`);
        settags((prevtags) =>
          prevtags.filter((tag) => tag._id !== deletedId)
        );
      } catch (error) {
        console.error("Error deleting data:", error.message);
      }
    }
  };
  const handleAddtag = (newtag) => {

    settags((prevtags) => [...prevtags, newtag]);

    setShowAddForm(false);
  };

  return (
    <>
      <div className="subCategories-card-container">
        <div className="subCategoires-tables">
          <table>
            <thead>
              <th>Name</th>
              <th>Action</th>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <AdmintagsCard
                  key={tag._id}
                  tag={tag}
                  showEditForm={showEditForm}
                  setShowEditForm={setShowEditForm}
                  onEdit={() => handleEdit(tag)}
                  onDelete={() => handleDelete(tag._id)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className={`edit-formContent-modal ${showEditForm ? "active" : ""}`}>
          {showEditForm && (
            <EditTags
              tag={selectedtag}
              onClose={() => setShowEditForm(false)}
            />
          )}
          <br/>
          <button type="button" onClick={(e) => { e.preventDefault(); setShowAddForm(true); }} className="show-add-product-form-button-in-admin-product">
            Add a Tag
          </button>
          {showAddForm && (
            <AddtagForm
              onClose={() => setShowAddForm(false)}
              onAddtag={handleAddtag}
            />
          )}
        </div>
      </div>
    </>
  );
};

export const AdmintagsCard = ({
  tag,
  showEditForm,
  onEdit,
  onDelete,
}) => {
  const handleEditClick = () => {
    onEdit();
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <tr
      className={`tags-card ${showEditForm ? "edit-formContent-open" : ""}`}
      key={tag._id}
    >
      <td>{tag.name}</td>
      <td>
        <div className="button-container">
          <button onClick={handleEditClick} className="admin-edit--button">
            Edit
          </button>
          <button onClick={handleDeleteClick} className="admin-edit--button">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};


export default Admintags;
