// about.jsx
import React, { useState, useEffect } from "react";
import "animate.css";
import "./about-banner.css";

const AboutBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set animate state after a delay for fadeIn animation
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <div className="about-containers">
      {/* Container 1: Map Image */}
      <div className="about-row-image">
        <div className="about-image-container">
          <img src="/images/hero-img.png" alt="Map" />
        </div>
      </div>

      {/* Container 2: About Pack & Go */}
      <div
        className={`row-about animate__animated ${
          animate ? "animate__fadeInUp" : ""
        }`}
      >
        <h1 className="about-heading">About Pack & Go</h1>
        <div className="about-content">
          <p
            className={`about-description animate__animated ${
              animate ? "animate__fadeInUp" : ""
            } animate__delay-1s`}
          >
            This web app helps you organize your travel dreams and adventures.
            <br />
            You can save a bucket list of potential destinations and based on
            your trip requirements, we will generate a recommended packing list
            just for you!
          </p>

          {/* Button to scroll down to the AboutUs section */}
          <a
            href="#about-us-section"
            className={`cta-btn animate__animated ${
              animate ? "animate__fadeInUp" : ""
            } animate__delay-2s`}
          >
            Meet the Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
