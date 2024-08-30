// Typewriter.js
import React, { useEffect, useState } from "react";
import "./typewriter.css";

const Typewriter = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset text on rerender
    let index = 0; 
    const interval = setInterval(() => {
      if (index + 1 < text.length) {
        setDisplayedText((prev) => prev + text[index]); // Typewriter effect
        index++;
      } else {
        clearInterval(interval); // Clear interval when typing is complete
      }
    }, delay);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text, delay]); // Re-run effect on text or delay change

  return (
    <div className="typewriter">
      <span className="dynamic-text">{displayedText}</span>
    </div>
  );
  
};

export default Typewriter;
