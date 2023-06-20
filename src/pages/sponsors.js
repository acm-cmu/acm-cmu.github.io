import React from "react";

export default function Sponsors() {
  return (
    <div id="sponsors">
      <span class="text">
        <div class="container">
          <div class="title" id="header">
            Sponsors
          </div>
          <div class="infotext">
            Our work here at ACM@CMU would simply not be possible without the
            help of our amazing sponsors. We are immeasurably thankful for our
            sponsors below for helping us host amazing events for the general
            CMU community.
          </div>
          <div class="infotext">
            Interested in sponsoring us? Email us at acm-exec@cs.cmu.edu. We
            would love to work with you!
          </div>
          <div class="plat-tier-label">Plat Tier</div>
          <div class="grid" id="logo-grid">
            <img id="citadel" src="images/citadel.png" />
          </div>
          <div class="gold-tier-label">Gold Tier</div>
          <div class="grid" id="logo-grid">
            <img id="aptiv" src="images/aptiv.svg" />
            <img id="bloomberg" src="images/bloomberg.svg" />
            <img id="hrt" src="images/hrt.png" />
            <img id="js" src="images/js.png" />
            <img id="microsoft" src="images/microsoft.svg" />
            <img id="meta" src="images/meta.png" />
          </div>
          <div class="silver-tier-label">Silver Tier</div>
          <div class="grid" id="logo-grid">
            <img id="omc" src="images/omc.png" />
            <img id="sandia" src="images/sandia.svg" />
          </div>
          <div class="bronze-tier-label">Bronze Tier</div>
          <div class="grid" id="logo-grid">
            <img id="scm" src="images/scm.png" />
          </div>
        </div>
      </span>
    </div>
  );
}
