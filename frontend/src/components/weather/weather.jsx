import React, { useState } from "react";
import "./weather.css";
import WeatherForecast from "./weather-forecast.jsx";
import CurrentWeather from "./current-weather.jsx";
import LocationSearch from "./location-search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

// Weather component to display current weather and forecast
const Weather = () => {
  // State to store current weather data
  const [currentWeather, setCurrentWeather] = useState(null);

  // State to store weather forecast data
  const [weatherForecast, setWeatherForecast] = useState(null);

  // Handler for location search change
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // Fetch current weather and forecast data using Promise.all
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        // Parse JSON responses
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Update state with current weather and forecast data
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setWeatherForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  // Log weather forecast data to the console for debugging
  console.log(weatherForecast);

  // Render the Weather component
  return (
    <div className="weather-container">
      {/* Location search component */}
      <LocationSearch onSearchChange={handleOnSearchChange} />

      {/* Display current weather and forecast */}
      <div>
        {currentWeather && (
          <CurrentWeather currentWeatherData={currentWeather} />
        )}
        {weatherForecast && (
          <WeatherForecast weatherForecastData={weatherForecast} />
        )}
      </div>
    </div>
  );
};

export default Weather;
