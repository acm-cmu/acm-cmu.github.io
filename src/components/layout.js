import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div>
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
      <div id="terminal" data-terminal>
        {children}
      </div>

      <script src="terminal.js" data-terminal-container></script>

      <div id="footer">© 2022 ACM@CMU.</div>
    </div>
  );
}
