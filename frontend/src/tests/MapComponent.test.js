
import React from 'react';
//render and screen are functions that help interact with and query elements in the rendered component.
import { render, screen } from '@testing-library/react';
import MapComponent from '../components/map/MapComponent';

describe('MapComponent component', () => {
  it('renders without crashing', () => {
    // Return the MapComponent with a selected country name, in this case, "France"
    render(<MapComponent selectedCityName="France" />);
    
    // Use screen to access common queries
    // Check if the map container is present in the rendered output
    const mapContainer = screen.getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();
  });
});

// This test checks if the map on the MapComponent appears correctly 
// when we specify a country, in this case, "France".
