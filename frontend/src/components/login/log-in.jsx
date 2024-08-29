import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginApi } from "./api";
import { useAuth } from "./authContext";
import WelcomeMessage from "./welcome-message";
import "./login.css";

const Login = () => {
  // State variables to manage form input, error, and login status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Access the login function from the authentication context
  const { login } = useAuth();

  // Access the navigation function from React Router
  const navigate = useNavigate();

  // Function to handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the loginApi function to attempt user login
      const response = await loginApi(username, password);
      console.log('Test');

      if (response.success) {
        // Handle successful login
        setIsLoggedIn(true);
        login({ username });
        console.log("Login successful");
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password. Please try again.");
      e.preventDefault();
    }
  };

  // Function to handle user logout
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="login-container">
      {isLoggedIn ? (
        // If logged in, display the welcome message component
        <WelcomeMessage username={username} onLogout={handleLogout} />
      ) : (
        // If not logged in, display the login form
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          {/* Display error message if there's an error */}
          {error && <p className="error-message">{error}</p>}
          {/* Link to the signup page */}
          <p className="switch-login-signup">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
