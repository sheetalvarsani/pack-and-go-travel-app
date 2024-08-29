import React, { useEffect, useState } from "react";
import "./meet-the-team.css";

export const MeetTheTeam = () => {
  // State to trigger animation
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Effect to handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-us-section");
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
      className={`about-us-container ${shouldAnimate ? "sweep-in" : ""}`}
      id="about-us-section"
    >
      {/* Introduction section */}
      <div className="about-us-intro">
        <h1>Meet the Team!</h1>
      </div>

      {/* Team profiles section */}
      <div className="about-us-profiles">
        {/* Profile Card - Lauren */}
        <div className="profile-card">
          <h2>Lauren</h2>
          <p>
            My favorite hobby is playing video games.
            <ul>
              <li>I like it because it helps me relax</li>
              <li>and I can do it alone</li>
            </ul>
          </p>
        </div>

        {/* Profile Card - Louisa */}
        <div className="profile-card">
          <h2>Louisa</h2>
          <p>
            I love reading because:
            <ul>
              <li>It allows me to have quiet time</li>
              <li>
                Sometimes I read things to learn, and other times just rubbish!
              </li>
            </ul>
          </p>
        </div>

        {/* Profile Card - Moira */}
        <div className="profile-card">
          <h2>Moira</h2>
          <p>
            I love painting because:
            <ul>
              <li>It allows me to express my creativity</li>
              <li>
                Blending colors and seeing a painting come to life excites me
              </li>
            </ul>
          </p>
        </div>

        {/* Profile Card - Sheetal */}
        <div className="profile-card">
          <h2>Sheetal</h2>
          <p>
            My favourite hobby is crafting.
            <ul>
              <li>I enjoy learning new skills</li>
              <li>Being creative relaxes me and calms my mind</li>
            </ul>
          </p>
        </div>

        {/* Profile Card - Shiromini */}
        <div className="profile-card">
          <h2>Shiromini</h2>
          <p>
            I love watching movies:
            <ul>
              <li>
                They allow me to go forget reality and go into another world
              </li>
              <li>I like action, comedy and a bit of romance</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
