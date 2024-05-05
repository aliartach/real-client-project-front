import React, { useState, useEffect } from "react";
import axios from 'axios';
import EditContent from "./EditContent";
import "./content.css"
const AdminContent = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [content, setContent] = useState([]);

  const handleEdit = (content) => {
    console.log('Content to be edited:', content);
    setSelectedContent(content);
    
    setShowEditForm(!showEditForm); // Toggle the state
  };
  const fetchContentData = async () => {
    try {
      const response = await axios.get(
        "https://real-client-project-back.onrender.com/api/content/"
      );

      setContent(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchContentData();
  }, [showEditForm]);

  // console.log(content);

  return (
    <>
      <div className="content-card-container">
      <h1 className="adminPanel-title">Content</h1>
        <table className="table-admin-content">
          <thead>
            <tr>
              <th>First Description</th>
              <th>Featured Description</th>
              <th>Story Description</th>
              <th>Image Cat</th>
              <th>Image Dog</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {content && content.map(({ id, ...content }, index) => (
              <AdminContentCard
                key={index}
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
      <EditContent content={selectedContent}  onClose={() => setShowEditForm(false)} />
        )}
      </div>
     
    </>
  );
  
};

export const AdminContentCard = ({ content, showEditForm, onEdit ,setShowEditForm}) => {
  const handleEditClick = () => {
    onEdit();
    setShowEditForm(true); // Open the edit form when clicking the "Edit" button
  };

  return (

    <tr className={`content-card ${showEditForm ? "edit-formContent-open" : ""}`} key={content.id}>
      <td>{content.firstDescription}</td>
      <td>{content.featuredDescription}</td>
      <td>{content.storyDescription}</td>
      <td><img src={`https://real-client-project-back.onrender.com/${content.imageCat}`} alt="Cat" className="images-admin-content"/></td>
      <td><img src={`https://real-client-project-back.onrender.com/${content.imageDog}`} alt="Dog" className="images-admin-content"/></td>

      <td>
   
        <button onClick={handleEditClick} className="admin-edit--button">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default AdminContent;
