import React from "react";

function ErrorCard({ message }) {
  return (
    <div className="error-card">
      <span className="error-icon">⚠️</span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorCard;
