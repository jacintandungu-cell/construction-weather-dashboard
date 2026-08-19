import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherResults from "./components/WeatherResults";
import Forecast from "./components/Forecast";
import SafetyThresholds from "./components/SafetyThresholds";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <Navbar />
      <main>
        <SearchBar onSearch={setCity} />
        <WeatherResults city={city} />
        <Forecast city={city}/>
        <SafetyThresholds />
      </main>
      <Footer />
    </div>
  );
}

export default App;
