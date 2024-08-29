import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./weather-cta.css";

// WeatherCTA component for displaying a call-to-action related to weather
const WeatherCTA = () => {
  return (
    <div className="weather-cta">
      {/* Informational message about getting the weather forecast */}
      <p className="forecast-message">
        Travelling soon? ☀️ Get the forecast for the next 7 days at your
        destination.
      </p>
      {/* Link to navigate to the Weather Forecast page */}
      <Link to="/weather-forecast">
        <Button>Go to Weather Forecast</Button>
      </Link>
    </div>
  );
};

export default WeatherCTA;
