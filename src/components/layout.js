import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Typewriter from "./typewriter"; // Ensure this path is correct

import "./layout.css";
export default function Layout({ children }) {
  const location = useLocation(); // Hook to detect route changes
  const [showContent, setShowContent] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0); // Key to force rerender

  useEffect(() => {
    // Reset content display on route change
    setShowContent(false);
    
    // Change key to reset Typewriter component
    setTypewriterKey((prevKey) => prevKey + 1);

    const timer = setTimeout(() => {
      setShowContent(true); // Show content after typing animation
    }, 2000); // Adjust the delay to match the typing duration

    return () => clearTimeout(timer);
  }, [location]); // Effect runs on location change

  return (
    <div>
      {/* Typewriter component will re-render with a new key on location change */}

      <Typewriter key={typewriterKey} text="ccat welcome.txt" delay={100} />
      
      <div id="navbar">
        
        <div id="bash">bash</div>
        <input id="menu-btn" type="checkbox" />
        <label id="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul id="navigation">
          <li>
            <Link to="/welcome" id="welcome">
              Welcome
            </Link>
          </li>
          <li>
            <Link to="/aboutus" id="aboutus">
              About_us
            </Link>
          </li>
          <li>
            <Link to="/events" id="events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/sponsors" id="sponsors">
              Sponsors
            </Link>
          </li>
        </ul>
        
      </div>

      {showContent && (
        <div id="terminal" data-terminal>
          {children}
        </div>
      )}

      <script src="terminal.js" data-terminal-container></script>
      
      <div id="footer">© 2024 ACM@CMU.</div>
    </div>
  );
}
