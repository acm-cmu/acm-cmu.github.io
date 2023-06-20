import React from "react";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <div id="navbar">
        <div id="bash">bash</div>
        <input id="menu-btn" type="checkbox" />
        <label id="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul id="navigation">
          <li>
            <a href="/welcome" id="welcome">
              Welcome
            </a>
          </li>
          <li>
            <a href="/aboutus" id="aboutus">
              About_us
            </a>
          </li>
          <li>
            <a href="/events" id="events">
              Events
            </a>
          </li>
          <li>
            <a href="sponsors" id="sponsors">
              Sponsors
            </a>
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
