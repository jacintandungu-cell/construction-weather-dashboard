import React, { useState } from "react";
import Spinner from "./Spinner";
import ErrorCard from "./ErrorCard";

function WeatherResults({ city }) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY_HERE";

  React.useEffect(() => {
    if (!city) return; // Only fetch when a city is provided

    async function fetchWeather() {
      setLoading(true);
      setError("");
      setWeather(null);

      try {
        // Step 1: Get coordinates
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData || geoData.length === 0) {
          throw new Error("City not found");
        }

        const { lat, lon } = geoData[0];

        // Step 2: Get weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        setWeather(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (loading) return <Spinner />;
  if (error) return <ErrorCard message={error} />;
  if (!weather) return null;

  return (
    <div className="weather-results">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels Like: {weather.main.feels_like}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Wind: {weather.wind.speed} m/s</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}

export default WeatherResults;
