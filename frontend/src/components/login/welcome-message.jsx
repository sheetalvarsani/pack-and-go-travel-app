import React from 'react';
import './login.css';

//Welcome Message Component
const WelcomeMessage = ({ username, onLogout }) => {
  return (
    <div className='welcome-message'>
      {/* Display a welcome message with the logged-in username */}
      <p>Welcome {username}! You are logged in.</p>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default WelcomeMessage;