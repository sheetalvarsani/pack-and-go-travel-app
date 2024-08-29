// destination.js
import React from 'react';

const Destination = ({ handleDestinationSelect, handleHover, handleLeave }) => {
  // Common styles for icons
  const iconStyle = {
    width: '30%', // Adjust the percentage as needed
    height: 'auto', // Maintain aspect ratio
    margin: '5px',
    background: 'none',
    border: 'none',
    padding: 0,
    position: 'relative',
  };

  // Styles for tooltips
  const tooltipStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#333',
    color: '#fff',
    padding: '5px',
    borderRadius: '5px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  // Handle hover effect
  const handleHoverEffect = (event) => {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) {
      tooltip.style.opacity = 1;
    }
  };

  // Handle leave effect
  const handleLeaveEffect = (event) => {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) {
      tooltip.style.opacity = 0;
    }
  };

  // Responsive styles
  const responsiveStyles = {
    iconStyle: {
      width: '50%', // Adjust the percentage as needed for smaller screens
      height: 'auto', // Maintain aspect ratio
      margin: '5px',
      background: 'none',
      border: 'none',
      padding: 0,
      position: 'relative',
    },
    tooltipStyle: {
      // existing styles
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row', // Display buttons in a row by default
      alignItems: 'center', // Center-align buttons
      justifyContent: 'center', // Center the buttons horizontally
    },
    buttonText: {
      // Add styles for the text below the images
      marginTop: '5px',
      textAlign: 'center',
    },
  };

  return (
    <div className="destination-container">
      <h2 className="tell-us-text">Tell us about your trip:</h2>
      <div className="button-container" style={responsiveStyles.buttonContainer}>
        {/* Button for Sun */}
        <button
          onClick={() => handleDestinationSelect('Sun')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={{ ...responsiveStyles.iconStyle }}
        >
          <div className="image-container">
            <img src="/images/suntrim.png" alt="Sun" className="icon-style" />
          </div>
          <div className="tooltip" style={{ ...responsiveStyles.tooltipStyle }}>
        
          </div>
          <p className="button-text">Sun</p>
        </button>

        {/* Button for Snow */}
        <button
          onClick={() => handleDestinationSelect('Snow')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={{ ...responsiveStyles.iconStyle }}
        >
          <div className="image-container">
            <img src="/images/snowtrim.png" alt="Snow" className="icon-style" />
          </div>
          <p className="button-text">Snow</p>
        </button>

        {/* Button for City */}
        <button
          onClick={() => handleDestinationSelect('City')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={{ ...responsiveStyles.iconStyle }}
        >
          <div className="image-container">
            <img src="/images/citytrim.png" alt="City Break" className="icon-style" />
          </div>
          <p className="button-text">City</p>
        </button>

        {/* Button for Business */}
        <button
          onClick={() => handleDestinationSelect('Business')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={{ ...responsiveStyles.iconStyle }}
        >
          <div className="image-container">
            <img src="/images/officetrim.png" alt="Business" className="icon-style" />
          </div>
          <p className="button-text">Business</p>
        </button>
      </div>
    </div>
  );
};

export default Destination;
