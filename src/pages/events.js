import React from "react";

export default function Events() {
  return (
    <div id="events">
      <span class="text">
        <div class="container">
          <div class="title" id="header">
            Events
          </div>
          <div class="infotext">
            ACM@CMU hosts multiple major events every year, giving fun
            opportunities for current students to hone their skills. Aside from
            our major events, we also host info sessions, tech talks, and ice
            cream socials for the general CMU community.
          </div>
          <div class="grid" id="events-grid">
            <a href="https://www.acmatcmu.com/hackcmu/">
              <img id="hackcmu" src="images/hackcmu2023.png" />
            </a>
            <a>Algorithms With a Purpose 2024 - Coming Soon!</a>
            <a>HackBerry Pi 2024 - Coming Soon!</a>
          </div>
        </div>
      </span>
    </div>
  );
}
