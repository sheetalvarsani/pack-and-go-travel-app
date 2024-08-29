import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// API function for user sign-up
const signUpApi = async (username, email, password) => {
  try {
    // Make a POST request to the sign-up endpoint
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      username,
      email,
      password,
    });

    // Return the data received from the API response
    return response.data; // Assuming the response contains a 'message' property
  } catch (error) {
    // If an error occurs, throw an error message or the response data
    throw error.response.data || 'Error during sign-up';
  }
};

// API function for user login
const loginApi = async (username, password) => {
  try {
    // Make a POST request to the login endpoint
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    // If an error occurs, throw an error message or the response data
    throw error.response.data || 'Login failed';
  }
};

export { signUpApi, loginApi };




