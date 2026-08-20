# 🏗️ Construction Weather Dashboard

A smart dashboard built for **construction engineers, project managers, and clients** to plan projects more effectively.  
This app combines **real‑time weather data** with **Google Maps directions** so teams can decide the best time and route for construction activities.

---

## 👥 Target Users

- **Construction Engineers**  
  Need accurate weather forecasts and site directions to plan safe and efficient work schedules.

- **Project Managers**  
  Use the dashboard to coordinate teams, avoid delays, and choose optimal times for construction activities.

- **Clients / Developers**  
  Gain visibility into site conditions and logistics, ensuring projects stay on track and resources are used wisely.

---

## 🛠️ Problem Being Solved

Construction projects are highly sensitive to **weather conditions** and **site accessibility**:

- 🌧️ Rain, humidity, or strong winds can delay work, damage materials, or create unsafe environments.  
- 🚧 Teams often waste time figuring out routes to construction sites, especially in busy urban areas.  

This dashboard solves these challenges by:
- Providing **real‑time weather data** (temperature, humidity, wind speed, forecasts).  
- Integrating **Google Maps directions** so constructors can quickly locate sites and plan routes.  
- Combining both insights in one place, helping teams make **data‑driven decisions** about when and how to build.  

---

## ✨ Features

- 🚦 **Site Guidance Engine**
  Turns the readings into a **go / caution / stop** call for each trade — concrete pours,
  roofing, crane lifts, painting, earthworks, scaffolding, masonry and general labour —
  with the control measures to put in place. Thresholds live in `src/utils/advisory.js`.

- 📋 **Actions for the shift**
  A short, de-duplicated action list (covers on standby, hydration breaks, tie-downs,
  lift-plan checks) ready for the morning toolbox talk.

- 🗓️ **Workable-hours scoring**
  Each of the next five days is scored for usable working hours, with a recommendation
  on which day to book weather-critical works and which to keep for indoor tasks.

- 🌦️ **Weather API Integration**  
  Displays live conditions (temperature, humidity, wind speed, etc.) for any site location.

- 🗺️ **Google Maps Directions** _(planned)_  
  Provides routes and site locations so constructors can easily navigate to projects.

- 🔍 **Search Bar**  
  Enter a city or site name to instantly see weather conditions and directions.

- 📊 **Forecast View**  
  Shows upcoming weather predictions to help plan ahead.

- 📱 **Responsive Design**  
  Works seamlessly on desktop and mobile devices.

---

## 🚀 Getting Started

### Requirements
- Node.js 18+
- npm or yarn
- Google Maps API key
- Weather API key (e.g., OpenWeatherMap)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/yourusername/construction-weather-dashboard.git
cd construction-weather-dashboard
npm install
Configuration
Create a .env file in the root:

env
REACT_APP_WEATHER_API_KEY=your_weather_api_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
Ensure your image assets (like construction-bg.jpg) are inside the public/ folder.

🧑‍💻 Usage
Start the development server:

bash
npm start
Open http://localhost:3000 in your browser.

Use the Search Bar to enter a city or site name.

The dashboard will show:

Current weather conditions

Forecast cards

A Google Map with directions to the site

📂 Project Structure
Code
construction-weather-dashboard/
├── public/
│   ├── construction-bg.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── SearchBar.js
│   │   ├── WeatherResults.js
│   │   ├── Forecast.js
│   │   └── Footer.js
│   ├── utils/
│   │   ├── advisory.js   # site thresholds & guidance rules
│   │   └── api.js        # weather API calls
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
👩‍💻 Author
Jacinta Ndungu  
Web Development Student at Moringa School
Passionate about building practical tools with React and APIs for real‑world use cases.
