import "./current-weather.css";

// Component to display the current weather information
const CurrentWeather = ({ currentWeatherData }) => {
  // Destructure city, region, and countryCode from the provided data
  let [city, region, countryCode] = currentWeatherData.city.split(", ");

  // Function to build the date string
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // Return the JSX structure for displaying current weather
  return (
    <div
      className={
        typeof currentWeatherData.main != "undefined"
          ? currentWeatherData.main.temp > 20
            ? "weather warm"
            : "weather cold"
          : "weather"
      }
    >
      <label className="title"> Today </label>
      <div className="top">
        <div>
          {/* Display current date and location */}
          <p className="date">{dateBuilder(new Date())}</p>
          <p className="city">
            {city}
            <br />
            {region}, {countryCode}
          </p>
        </div>
      </div>
      <div className="bottom">
        {/* Display temperature, weather description, and additional details */}
        <p className="temperature">
          {Math.round(currentWeatherData.main.temp)}°C
        </p>
        <p className="weather-description">
          {currentWeatherData.weather[0].description}{" "}
        </p>
        <div className="details">
          {/* Display additional weather parameters */}
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(currentWeatherData.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {currentWeatherData.wind.speed} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {currentWeatherData.main.humidity} %
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {currentWeatherData.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
