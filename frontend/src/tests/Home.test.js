import React from 'react';
import { render, screen } from '@testing-library/react';
//MemoryRouter is a testing tool in react-router-dom to simulate routes without changing the  browser URL during tests..
// It's useful for testing components relying on React Router, like the Link component, in a simplified way.
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/home/home';

test('renders Home component', () => {
  // Return the Home component within a MemoryRouter to handle the Link component
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Check if the title is present          //The i makes the text matching case-insensitive, allowing it to match regardless of uppercase or lowercase letters.
  const titleElement = screen.getByText(/Welcome to Pack & Go/i);
  expect(titleElement).toBeInTheDocument();

  // Check if the subtitle is present
  const subtitleElement = screen.getByText(/Your Ultimate Hub for Effortless Travel Planning and Exploration/i);
  expect(subtitleElement).toBeInTheDocument();

  // Check if the "Start Your Journey" button is present
  // const exploreButton = screen.getByRole('link', { name: /Start Your Journey/i });
  // expect(exploreButton).toBeInTheDocument();

  // Check if the car image is present
  const carImage = screen.getByAltText(/Car/i);
  expect(carImage).toBeInTheDocument();

  // Check if the team heading is present
  const teamHeading = screen.getByText(/Explore, Plan, and Simplify Your Travels/i);
  expect(teamHeading).toBeInTheDocument();

  // Check if the team description is present
  const teamDescription = screen.getByText(/Pack & Go – the place where your travel dreams come to life./i);
  expect(teamDescription).toBeInTheDocument();

  // Check if the "Join the Adventure" button (call to action button)is present
  const ctaButton = screen.getByRole('link', { name: /Join the Adventure/i });
  expect(ctaButton).toBeInTheDocument();
});
