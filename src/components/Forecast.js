import React, { useState, useEffect } from "react";

function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const API_KEY = "YOUR_API_KEY_HERE";

  useEffect(() => {
    async function fetchForecast() {
      if (!city) return;

      try {
        // Step 1: Get coordinates
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData || geoData.length === 0) {
          throw new Error("City not found");
        }

        const { lat, lon } = geoData[0];

        // Step 2: Fetch 7-day forecast using One Call API
        const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        setForecast(forecastData.daily.slice(0, 7)); // only 7 days
      } catch (err) {
        setError(err.message);
      }
    }

    fetchForecast();
  }, [city]);

  // Safety logic
  function getSafetyBadge(day) {
    const wind = day.wind_speed;
    const rain = day.rain || 0;
    const temp = day.temp.day;

    if (wind < 32 && rain === 0 && temp >= 2 && temp <= 35) {
      return <span className="card go">GO</span>;
    } else if ((wind >= 32 && wind <= 56) || rain > 0 || temp < 2 || temp > 35) {
      return <span className="card caution">CAUTION</span>;
    } else {
      return <span className="card stop">STOP</span>;
    }
  }

  if (error) return <p>{error}</p>;
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast">
      <h3>7-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });
          const icon = day.weather[0].icon;
          const description = day.weather[0].description;

          return (
            <div key={index} className="forecast-card">
              <p>{date}</p>
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
              />
              <p>{description}</p>
              <p>High: {day.temp.max}°C / Low: {day.temp.min}°C</p>
              <p>Wind: {day.wind_speed} km/h</p>
              <p>Rain: {day.rain || 0} mm</p>
              {getSafetyBadge(day)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
