import React, { useState, useEffect } from "react";
import "./Message.css";

const Message = ({ text, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!text);

  useEffect(() => {
    // Update visibility when the text prop changes
    setIsVisible(!!text);

    // Set a timer to close the message after 3 seconds
    if (text) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 1000);

      // Clear the timer when the component unmounts or when text changes
      return () => clearTimeout(timer);
    }
  }, [text, onClose]);

  return (
    <>
      {isVisible && (
        <div className="message visible">
          <p id="text">{text}</p>
        </div>
      )}
    </>
  );
};

export default Message;
