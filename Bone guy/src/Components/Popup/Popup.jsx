import React, { useState } from 'react';
import './Popup.css'; // You can create a separate CSS file for styling

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>

      {isPopupVisible && (
        <div className="overlay" onClick={closePopup}>
          <div className="popup">
            <p>Your Popup Content Goes Here</p>
            <button onClick={closePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
