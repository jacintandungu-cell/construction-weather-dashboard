import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherResults from "./components/WeatherResults";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <Navbar />

      <main className="content">
        <SearchBar setCity={setCity} />

        {city ? (
          <>
            <WeatherResults city={city} />
            <Forecast city={city} />
          </>
        ) : (
          <section className="panel empty">
            <h2>Plan the shift before you lose it to the weather</h2>
            <p>
              Enter a site location to get a go / caution / stop call for each trade, the
              control measures to put in place, and the best working window over the next
              five days.
            </p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
