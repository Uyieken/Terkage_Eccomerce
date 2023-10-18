// ErrorModal.js
import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ errors, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
