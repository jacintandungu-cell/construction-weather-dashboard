import React, { useState, useEffect } from "react";

function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3218121adef5ab8d8a1295284c166160&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        setForecast(json.list.slice(0, 5)); // next 5 entries
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [city]);

  if (loading) return <p>Loading forecast...</p>;

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p>🌡 {item.main.temp}°C</p>
            <p>☁ {item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
