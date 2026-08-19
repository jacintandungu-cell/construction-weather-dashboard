import React from "react";

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading weather data...</p>
    </div>
  );
}

export default Spinner;
