import React from "react";

function SafetyThresholds() {
  return (
    <div className="thresholds">
      <div className="card go">
        <h3>✅ Clear to Work</h3>
        <p>Wind &lt; 32 km/h</p>
        <p>No precipitation</p>
        <p>Temp 2°C – 35°C</p>
      </div>

      <div className="card caution">
        <h3>⚠️ Proceed with Caution</h3>
        <p>Wind 32–56 km/h</p>
        <p>Light rain / drizzle</p>
        <p>Temp &lt; 2°C or &gt; 35°C</p>
      </div>

      <div className="card stop">
        <h3>⛔ Stop Work Order</h3>
        <p>Wind &gt; 56 km/h</p>
        <p>Thunderstorm / heavy rain</p>
        <p>Extreme conditions</p>
      </div>
    </div>
  );
}

export default SafetyThresholds;
