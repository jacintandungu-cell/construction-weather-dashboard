import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Construction Weather Dashboard</h1>
      <ul>
        <li><a href="#weather">Weather</a></li>
        <li><a href="#forecast">Forecast</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
