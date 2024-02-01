
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditTags from "./EditTag";
import AddtagForm from "./AddTag";

const Admintags = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedtag, setSelectedtag] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [tags, settags] = useState([]);

  const handleEdit = (tag) => {
    setSelectedtag(tag);
    setShowEditForm(true);
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const fetchtagsData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tag");
      settags(response.data.tags);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchtagsData();
  }, [showEditForm, showAddForm]);

  const handleDelete = async (deletedId) => {
    try {
      await axios.delete(`http://localhost:4000/api/tag/${deletedId}`);
      settags((prevtags) =>
        prevtags.filter((tag) => tag._id !== deletedId)
      );
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
  const handleAddtag = (newtag) => {
 
    settags((prevtags) => [...prevtags, newtag]);
  
    setShowAddForm(false);
  };

  return (
    <>
       <h1 className="adminPanel-title">Tag</h1>
      <div className="subCategories-card-container">
        <button onClick={handleAdd} className="add-button">
          Add
        </button>
        <div className="subCategoires-tables">
        <table>
          <thead>
            <tr>
              <th>Name</th>
           
              <th>Action</th>
            </tr>
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


export default Admintags;
