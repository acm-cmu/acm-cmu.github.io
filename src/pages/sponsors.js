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
            <img
              id="citadel"
              src="images/citadel.png"
              style={{ width: "150px", height: "auto" }} // Adjust the width as needed
            />
            <img
              id="tradedesk"
              src="images/tradedesk.png"
              style={{ width: "150px", height: "auto" }} // Adjust the width as needed
            />
            <img
              id="hrt"
              src="images/hrt.png"
              style={{ width: "150px", height: "auto" }} // Adjust the width as needed
            />
            <img
              id="stripe"
              src="images/stripe.png"
              style={{ width: "150px", height: "auto" }} // Adjust the width as needed
            />
          </div>
          <div class="gold-tier-label">Gold Tier</div>
          <div class="grid" id="logo-grid">
            <img
              id="ford"
              src="images/ford.png"
              style={{ width: "150px", height: "auto" }}
            />
            <img
              id="deshaw"
              src="images/deshaw.png"
              style={{ width: "150px", height: "auto" }}
            />
            <img
              id="bnymellon"
              src="images/bnymellon.jpeg"
              style={{ width: "150px", height: "auto" }}
            />
            <img
              id="janestreet"
              src="images/janestreet.png"
              style={{ width: "150px", height: "auto" }}
            />
            <img
              id="sig"
              src="images/sig.png"
              style={{ width: "150px", height: "auto" }}
            />
            <img
              id="lockheed"
              src="images/lockheed.png"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <div class="silver-tier-label">Silver Tier</div>
          <div class="grid" id="logo-grid">
            <img
              id="sandia"
              src="images/sandia.svg"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
          <div class="bronze-tier-label">Bronze Tier</div>
          <div class="grid" id="logo-grid">
            <img
              id="scm"
              src="images/scm.png"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        </div>
      </span>
    </div>
  );
}
