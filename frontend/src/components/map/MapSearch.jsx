import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import CountryDetails from "./CountryDetails";
import SaveBucketList from "./SaveBucketList";
import Message from "./Message";
import "../map/MapSearch.css";
import "../map/Map.css";

// Main component for searching and displaying country information on the map
export const MapSearch = () => {
  // State variables
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryDetails, setCountryDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [bucketList, setBucketList] = useState([]);
  const [showBucketList, setShowBucketList] = useState(false);
  const [message, setMessage] = useState("");
  const [isBucketListOpen, setIsBucketListOpen] = useState(false);


  // Fetch countries data from the API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Fetch additional details about the selected country
  const fetchCountryDetails = async (countryCode) => {
    try {
      // Find the selected country in the countries array
      const selectedCountryData = countries.find(
        (country) => country.cca2 === countryCode
      );

      setCountryDetails(selectedCountryData);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  // Mapbox API access token
  const ACCESS_TOKEN =
    "pk.eyJ1IjoibW92aTgiLCJhIjoiY2xwNnF2NjBtMmRudDJ2cWs2Z3Fydmh0cCJ9.q7q8e9YPRQAiWqJ8k8WQ-Q";

  // Check if countryDetails is not null before accessing latlng
  const mapUrl =
    countryDetails && countryDetails.latlng
      ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${countryDetails.latlng[1]},${countryDetails.latlng[0]}/400x300?access_token=${ACCESS_TOKEN}`
      : "";

  // Handle input change for search term
  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Check if the input is clicked to reset the state
    if (term === "") {
      setSelectedCountry("");
      setCountryDetails(null);
      setSuggestedCountries([]);
      setSearchTerm("");
    } else {
      setSearchTerm(term);

      // Filter countries based on the input term
      const filteredCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().startsWith(term.toLowerCase());
      });

      // Display suggestions
      setSuggestedCountries(filteredCountries);
    }
  };

  // Handle country selection
  const handleCountrySelect = async (selectedCountryCode) => {
    setSelectedCountry(selectedCountryCode);

    // Fetch additional details about the selected country
    await fetchCountryDetails(selectedCountryCode);

    // Add newly selected country to state array
    setSelectedCountries((prevCountries) => [
      ...prevCountries,
      selectedCountryCode,
    ]);

    // Clear the suggestions and search term
    setSuggestedCountries([]);
    setSearchTerm("");
  };

  const popMessage = () => {
    setMessage("");
  };

  // Add selected country to the bucket list
  const addToBucketList = () => {
    if (selectedCountry) {
      const country = countries.find((c) => c.cca2 === selectedCountry);

      if (!bucketList.includes(selectedCountry)) {
        if (bucketList.length >= 5) {
          // Bucket list is full
          setMessage({
            text: "Your bucket list is full. You can only save up to 5 countries.",
            type: "warning",
          });
        } else {
          // Country is not in the bucket list, add it
          setBucketList((prevBucketList) => [
            ...prevBucketList,
            selectedCountry,
          ]);
          setMessage({
            text: `"${country?.name?.common}" added to your bucket list!`,
            type: "success",
          });
        }
      } else {
        // Country is already in the bucket list
        setMessage({
          text: `"${country?.name?.common}" is already in your bucket list.`,
          type: "info",
        });
      }
    }
    setShowBucketList(true);
  };

  // Close the bucket list component
  const handleBucketListClose = () => {
    // Close the SaveBucketList component by updating state
    setIsBucketListOpen(false);
  };

  // Render the main component
  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Where do you want to go?"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <div className="suggestions">
       {/* Display suggestions based on the search term */}
          {suggestedCountries.map((country) => (
            <div
              key={country.cca2}
              onClick={() => handleCountrySelect(country.cca2)}
            >
              {country.name.common}
            </div>
          ))}
        </div>
      </div>

 {/* Display selected country details, map, and additional information */}
      {selectedCountry && countryDetails && (
        <div className="country-details">
          <div className="country-info">
            <h2>{countryDetails?.name.common}</h2>

 {/* Display additional country details */}
            {countryDetails?.capital && countryDetails.capital.length > 0 ? (
              <p>Capital City: {countryDetails.capital[0]}</p>
            ) : (
              <p>Capital City: No Data</p>
            )}

            {countryDetails?.currencies &&
              Object.keys(countryDetails.currencies).length > 0 ? (
              <p>
                Currencies:{" "}
                {Object.values(countryDetails.currencies)
                  .map((c) => c.name)
                  .join(", ")}
              </p>
            ) : (
              <p>Currencies: No Data</p>
            )}

            {countryDetails?.languages &&
              Object.keys(countryDetails.languages).length > 0 ? (
              <p>
                Languages:{" "}
                {Object.values(countryDetails.languages)
                  .map((l) => l)
                  .join(", ")}
              </p>
            ) : (
              <p>Languages: No Data</p>
            )}

            {countryDetails?.timezones &&
              Object.keys(countryDetails.timezones).length > 0 ? (
              <p>Timezones: {countryDetails.timezones[0]}</p>
            ) : (
              <p>Timezones: No Data</p>
            )}
{/* Button to add the country to the bucket list */}
            <button onClick={addToBucketList}>Add to Bucket List</button>
          </div>
    

          {isBucketListOpen && (
            <SaveBucketList
              bucketList={bucketList}
              countries={countries}
              onClose={handleBucketListClose}
            />
          )}

{/* MapComponent for displaying the capital city on the map */}
          {countryDetails?.capital &&
            Object.keys(countryDetails.capital).length > 0 ? (
            <MapComponent selectedCityName={countryDetails?.capital[0]} />
          ) : (
            <p>Capital: No Data</p>
          )}
        </div>
      )}
      {/* Display additional details for previously selected countries */}
      {selectedCountries.map((country) => (
        <CountryDetails key={country} countryCode={country} />
      ))}
       {/* Display the SaveBucketList component when needed */}
      {showBucketList && (
        <SaveBucketList
          onClose={handleBucketListClose}
          bucketList={bucketList}
          countries={countries}
        />
      )}

     
      {isBucketListOpen && (
        <SaveBucketList
          bucketList={bucketList}
          countries={countries}
          onClose={handleBucketListClose}
        />
      )}

      {/* Display the Message component for notifications */}
      <Message text={message.text} onClose={popMessage} />
    </div>
  );
};

export default MapSearch;
