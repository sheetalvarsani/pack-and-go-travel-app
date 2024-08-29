import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

// Define social media icons
const facebook_icon = process.env.PUBLIC_URL + "images/facebook_icon.png";
const instagram_icon = process.env.PUBLIC_URL + "images/instagram_icon.png";
const email_icon = process.env.PUBLIC_URL + "images/email_icon.png";

// Define social media links
const facebookLink = "https://www.facebook.com/";
const instagramLink = "https://www.instagram.com/";

export const Footer = () => {
  return (
    <footer className="footer">

      {/* Social Media Icons */}
      <div className="footer-icons">

        {/* Facebook Icon */}
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src={facebook_icon}
            alt="Facebook Icon"
          />
        </a>

        {/* Instagram Icon */}
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src={instagram_icon}
            alt="Instagram Icon"
          />
        </a>
        
        {/* Email Icon with link to Contact Us page */}
        <Link to="/contact-us">
          <img className="social-icon" src={email_icon} alt="Email Icon" />
        </Link>
      </div>

      {/* Copyright information */}
      <div className="copyright">
        <p>Copyright © Pack & Go Inc 2023</p>
      </div>
    </footer>
  );
};
