import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Typewriter from "./typewriter"; // Ensure this path is correct
import "./layout.css";

export default function Layout({ children }) {
  const location = useLocation(); // Hook to detect route changes
  const [showContent, setShowContent] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0); // Key to force rerender
  const [typewriterText, setTypewriterText] = useState("");

  // Add some spaces at the start, otherwise the typing effect "jumps" ahead
  const routeTexts = {
    "/welcome": "    cat welcome.txt",
    "/aboutus": "      cat about.txt",
    "/events": "     cat events.txt",
    "/sponsors": "   cat sponsors.txt",
  };

  useEffect(() => {
    // Reset content display on route change
    setShowContent(false);

    // Set the text for Typewriter based on the current route
    const currentText = routeTexts[location.pathname] || "    cat welcome.txt"; // default text
    setTypewriterText(currentText);

    // Change key to reset Typewriter component
    setTypewriterKey((prevKey) => prevKey + 1);

    const timer = setTimeout(() => {
      setShowContent(true); // Show content after typing animation
    }, 1500); // Adjust the delay to match the typing duration

    return () => clearTimeout(timer);
  }, [location]);

  // Check if the current path is '/hackcmu' to conditionally render the layout
  const isHackCMUPage = location.pathname === "/hackcmu";

  if (isHackCMUPage) {
    return <>{children}</>; // Render only children without the layout for the '/hackcmu' page
  }

  return (
    <div>
      {/* Typewriter component will re-render with a new key on location change */}
      <Typewriter key={typewriterKey} text={typewriterText} delay={75} />

      <div id="navbar">
        <div id="bash">bash acm@cmu.org:~ $</div>
        <input id="menu-btn" type="checkbox" />
        <label id="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul id="navigation">
          <li>
            <Link to="https://www.acmatcmu.com/hackcmu2025/">
              HackCMU_2025
            </Link>
          </li>
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

      <div id="footer">© 2025 ACM@CMU.</div>
    </div>
  );
}
