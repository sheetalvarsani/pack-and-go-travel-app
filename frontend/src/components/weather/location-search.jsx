import "./location-search.css";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; /*wrapper for react select*/
import { location_api, locationApiOptions } from "./api";

// Component for location search input
const LocationSearch = ({ onSearchChange }) => {
  // State to manage the search input value
  const [search, setSearch] = useState(null);

  // Function to fetch location data based on user input
  const dropDown = (inputValue) => {
    return fetch(`${location_api}${inputValue}`, locationApiOptions)
      .then((response) => response.json())
      .then((response) => {
        // Transform fetched data into options format for react-select
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.region}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  // Handler for onChange event in the location search input
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // Render the location search component
  return (
    <div className="search-container">
      {/* Asynchronous paginated dropdown for location search */}
      <AsyncPaginate
        placeholder="Where do you want to travel to?"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={dropDown}
      />
    </div>
  );
};

export default LocationSearch;
