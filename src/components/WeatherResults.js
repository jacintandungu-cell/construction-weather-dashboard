import React, { useState, useEffect } from "react";

function WeatherResults({ city }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3218121adef5ab8d8a1295284c166160&units=metric`
    )
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="weather-results">
      <h2>Current Weather in {data.name}</h2>
      <p>🌡 Temperature: {data.main.temp}°C</p>
      <p>☁ Condition: {data.weather[0].description}</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherResults;
