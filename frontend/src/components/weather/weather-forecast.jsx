import "./weather-forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Define week days for use in the forecast
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// WeatherForecast component to display the forecast for the next 7 days
const WeatherForecast = ({ weatherForecastData }) => {
  // Get the current day of the week
  const dayInWeek = new Date().getDay();

  // Arrange days of the week based on the current day
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  // Render the WeatherForecast component
  return (
    <>
      {/* Title for the weather forecast section */}
      <label className="title">Forecast for next 7 days</label>

      {/* Accordion component for displaying daily forecast details */}
      <Accordion allowZeroExpanded>
        {weatherForecastData.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton >
                <div className="day-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`weather-icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="temp">{Math.round(item.main.temp)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            {/* Accordion item panel for additional daily details */}
            <AccordionItemPanel>
              <div className="day-expansion-grid">
                <div className="day-expansion">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className="day-expansion">
                  <label>Wind</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="day-expansion">
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="day-expansion">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default WeatherForecast;
