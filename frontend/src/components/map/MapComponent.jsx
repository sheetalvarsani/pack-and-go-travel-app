import React, { useState, useEffect } from 'react';
import './Map.css';
import './SaveBucketList.css';


/* Render the MapComponent from the parenrt app selectedCityName eg London or Japan  <MapComponent selectedCityName={"london"} /> */
export default function MapComponent({ selectedCityName }) {
  const [mapUrl, setMapUrl] = useState('');

  console.log(selectedCityName)

  useEffect(() => {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${selectedCityName}`;
    console.log(apiUrl)

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Destructure lat and lon from the first result
          const { lat, lon } = data[0];
          // Convert lat and lon to numbers
          const latitude = parseFloat(lat);
          const longitude = parseFloat(lon);

          // Update bounding box calculation
          const bbox = [
            longitude - 0.2,
            latitude - 0.1,
            longitude + 0.2,
            latitude + 0.1
          ];

          // Set the updated map URL
          setMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${bbox.join('%2C')}&amp;layer=mapnik`);
        } else {
          console.error('City not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching geocoding data:', error);
      });
  }, [selectedCityName]);


  return (                        // data-testid is used for testing to identify HTML elements.
    <div className="map-container" data-testid="map-container">
      {mapUrl && (
        <>
          <iframe
            title="Map of the selected city"
            width="300"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={mapUrl}
          ></iframe>

          <br />
          <small>
            <a href={`https://www.openstreetmap.org/#map=12/`}>
              View Larger Map
            </a>
          </small>

        </>
      )}
    </div>
  );
};
