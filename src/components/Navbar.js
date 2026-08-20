import React, { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("weather");

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-blue-200 flex justify-between items-center px-6 py-3 shadow-md">
        <h1 className="text-xl font-bold text-black">Construction Weather Dashboard</h1>
        <ul className="flex gap-6 font-bold text-black">
          <li>
            <a href="#weather" onClick={() => setActiveSection("weather")}>
              Weather
            </a>
          </li>
          <li>
            <a href="#forecast" onClick={() => setActiveSection("forecast")}>
              Forecast
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveSection("about")}>
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="p-6">
        {activeSection === "weather" && (
          <div id="weather">
            <h2 className="text-lg font-bold text-black mb-2">Weather</h2>
            <p className="text-black">
              This section shows the current weather conditions for your selected city,
              including temperature, wind speed, humidity, and sky conditions.
            </p>
          </div>
        )}

        {activeSection === "forecast" && (
          <div id="forecast">
            <h2 className="text-lg font-bold text-black mb-2">Forecast</h2>
            <p className="text-black">
              Here you’ll find a 5‑day forecast with daily highs, lows, and weather icons
              to help plan construction schedules more effectively.
            </p>
          </div>
        )}

        {activeSection === "about" && (
          <div id="about">
            <h2 className="text-lg font-bold text-black mb-2">About</h2>
            <p className="text-black">
              The Construction Weather Dashboard is designed to provide real‑time weather
              insights for construction projects, ensuring safety and efficiency on site.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
