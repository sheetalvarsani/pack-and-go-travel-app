import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "animate.css";
import "./home.css";

export const Home = () => {
  const [animate, setAnimate] = useState(false);

    // Trigger animation when the component is first rendered and added to the DOM.
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <div className="containers">
      {/* Container 1: Title */}
      <div
        className={`row-title animate__animated ${
          animate ? "animate__fadeInDown" : ""
        }`}
      >
        <h1 className="title-home-page">Welcome to Pack & Go</h1>

        <p
          className={`subtitle animate__animated ${
            animate ? "animate__fadeInDown" : ""
          } animate__delay-1s`}
        >
          Your Ultimate Hub for Effortless Travel Planning and Exploration
        </p>

        <Link
          to="/bucket-list"
          className={`explore-btn animate__animated ${
            animate ? "animate__fadeInDown" : ""
          } animate__delay-2s`}
        >
          Discover Destinations
        </Link>
      </div>

      {/* Container 2: Car Image */}
      <div className="row-image">
        <div className="image-container">
          <img src="/images/car.png" alt="Car" />
        </div>
      </div>

      {/* Container 3: Explore and Simplify */}
      <div
        className={`row-section animate__animated ${
          animate ? "animate__fadeInUp" : ""
        }`}
      >
        <h1 className="section-heading">
          Explore, Plan, and Simplify Your Travels
        </h1>
        <div className="section-content">
          <p
            className={`section-description animate__animated ${
              animate ? "animate__fadeInUp" : ""
            } animate__delay-1s`}
          >
            Pack & Go – the place where your travel dreams come to life.
            Discover amazing destinations, plan your trips effortlessly, and
            simplify your travel experience. Join us on a journey of exploration
            and adventure!
          </p>

          {/* Sign Up for Free Link */}
          <Link
            to="/signup"
            className={`cta-btn animate__animated ${
              animate ? "animate__fadeInUp" : ""
            } animate__delay-2s`}
          >
            Log In & Join the Adventure
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
