import React, { useState, useEffect } from "react";
import axios from 'axios';
import EditContent from "./EditContent";
import "./content.css"
const AdminContent = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [content, setContent] = useState([]); // Initialize as an empty array

  const handleEdit = (content) => {
    setShowEditForm(true);
    setSelectedContent(content);
  };

  const fetchContentData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/content/"
      );

      setContent(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchContentData();
  }, []);

  console.log(content);

  return (
    <>
      <div className="content-card-container">
        <table>
          <thead>
            <tr>
              <th>firstDescription</th>
              <th>featuredDescription</th>
              <th>storyDescription</th>
              <th>imageCat</th>
              <th>imageDog</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {content && content.map(({ id, ...content }) => (
              <AdminContentCard
                key={id}
                content={content}
                showEditForm={showEditForm}
                setShowEditForm={setShowEditForm}
                onEdit={() => handleEdit(content)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className={`edit-formContent-modal ${showEditForm ? "active" : ""}`}>
        {showEditForm && (
          <EditContent content={selectedContent} onClose={() => setShowEditForm(false)} />
        )}
      </div>
    </>
  );
};

export const AdminContentCard = ({ content, showEditForm, onEdit }) => {
  const handleEditClick = () => {
    onEdit();
  };

  return (
    <tr className={`content-card ${showEditForm ? "edit-formContent-open" : ""}`} key={content.id}>
      <td>{content.firstDescription}</td>
      <td>{content.featuredDescription}</td>
      <td>{content.storyDescription}</td>
      <td>{content.imageCat}</td>
      <td>{content.imageDog}</td>

      <td>
        <button onClick={handleEditClick} className="admin-edit--button">
          <p>Edit</p>
        </button>
      </td>
    </tr>
  );
};

export default AdminContent;
