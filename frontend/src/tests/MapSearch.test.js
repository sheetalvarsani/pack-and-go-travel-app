// Import render and screen from React Testing Library 
// Allows us to render/interact with component
import { render, screen} from '@testing-library/react';
// Import the MapSearch component to test  
import MapSearch from '../components/map/MapSearch';

describe('MapSearch', () => {

      // Test that checks search input renders 
  test('renders search input box', () => {
       // Return MapSearch
    render(<MapSearch />);
    
      // Get search input element
    const searchInput = screen.getByPlaceholderText(/where do you want to go/i);
    
      // Check if input element is in the HTML  document
    expect(searchInput).toBeInTheDocument();
  });

  
});


//This test makes sure that the search input box in the MapSearch component is displayed when the component is rendered.