import React from "react";
import "./sponsors.css"; // Make sure this import matches the path to your CSS file

export default function Sponsors() {
  return (
    <div id="sponsors">
      <span className="text">
        <div className="container">
          <div className="title" id="header">
            Sponsors
          </div>

          
          <div className="infotext">
            Our work here at ACM@CMU would simply not be possible without the
            help of our amazing sponsors. We are immeasurably thankful for our
            sponsors below for helping us host amazing events for the general
            CMU community.
          </div>
          <div className="infotext">
            Interested in sponsoring us? Email us at acm-exec@cs.cmu.edu. We
            would love to work with you!
          </div>
          <div className="plat-tier-label">Plat Tier</div>
          <div className="grid" id="logo-grid">
            <a
              className="sponsor-link"
              href="https://www.citadel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="citadel"
                src="images/citadel.png"
                style={{ width: "200px", height: "auto" }}
                alt="Citadel"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.thetradedesk.com/us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="tradedesk"
                src="images/tradedesk.png"
                style={{ width: "200px", height: "auto" }}
                alt="The Trade Desk"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.hudsonrivertrading.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="hrt"
                src="images/hrt.png"
                style={{ width: "200px", height: "auto" }}
                alt="HRT"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://stripe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="stripe"
                src="images/stripe.png"
                style={{ width: "200px", height: "auto" }}
                alt="Stripe"
              />
            </a>
          </div>
          <div className="gold-tier-label">Gold Tier</div>
          <div className="grid" id="logo-grid">
            <a
              className="sponsor-link"
              href="https://www.ford.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="ford"
                src="images/ford.png"
                style={{ width: "200px", height: "auto" }}
                alt="Ford"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.deshaw.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="deshaw"
                src="images/deshaw.png"
                style={{ width: "200px", height: "auto" }}
                alt="D. E. Shaw"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.bnymellon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="bnymellon"
                src="images/bnymellon.jpeg"
                style={{ width: "200px", height: "auto" }}
                alt="BNY Mellon"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.janestreet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="janestreet"
                src="images/janestreet.png"
                style={{ width: "200px", height: "auto" }}
                alt="Jane Street"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.sig.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="sig"
                src="images/sig.png"
                style={{ width: "200px", height: "auto" }}
                alt="SIG"
              />
            </a>
            <a
              className="sponsor-link"
              href="https://www.lockheedmartin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="lockheed"
                src="images/lockheed.png"
                style={{ width: "200px", height: "auto" }}
                alt="Lockheed Martin"
              />
            </a>
          </div>
          <div className="silver-tier-label">Silver Tier</div>
          <div className="grid" id="logo-grid">
            <a
              className="sponsor-link"
              href="https://www.sandia.gov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="sandia"
                src="images/sandia.svg"
                style={{ width: "200px", height: "auto" }}
                alt="Sandia"
              />
            </a>
          </div>
          <div className="bronze-tier-label">Bronze Tier</div>
          <div className="grid" id="logo-grid">
            <a
              className="sponsor-link"
              href="https://www.scm-lp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="scm"
                src="images/scm.png"
                style={{ width: "200px", height: "auto" }}
                alt="SCM"
              />
            </a>
          </div>
        </div>
      </span>
    </div>
  );
}
