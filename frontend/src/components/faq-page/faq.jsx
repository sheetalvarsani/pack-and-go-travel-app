import React, { useEffect, useState } from "react";
import "./faq.css";

export const Faq = () => {
  // State to trigger animation
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Effect to handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("faq-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          setShouldAnimate(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`faq-container ${shouldAnimate ? "sweep-in" : ""}`}
      id="faq-section"
    >
      {/* FAQ title */}
      <div className="faq-title">
        <h1>FAQs 🤔</h1>
      </div>

      {/* Question 1 */}
      <div className="faq-cards">
          <h2>Do I have to pay to use the Pack & Go app, or is it free to use?</h2>
          <p>Pack & Go is absolutely free, and it always will be!</p>
      </div>

    
      {/* Question 2 */}
      <div className="faq-cards">
          <h2>Can I share my Pack & Go bucket list/packing list on social media?</h2>
          <p>Sure, just make sure you tag our social media handles in your posts!</p>
      </div>


  
      {/* Question 3 */}
      <div className="faq-cards">
          <h2>I have an idea for the app, how can I make a suggestion?</h2>
          <p>We're always looking to improve, get in touch with us using the 'Contact Us' page.</p>
      </div>






    
      </div>
  );
};