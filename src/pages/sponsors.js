import React from "react";
import "./sponsors.css";

export default function Sponsors() {
  const handleError = (e, fallbackSrc) => {
    if (e.target.src.endsWith('.webp')) {
      e.target.src = fallbackSrc;
    }
  };

  const Picture = ({ src, alt, className, style }) => {
    const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
    const webpSrc = publicSrc.replace(/\.png$/, '.webp');
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" onError={(e) => handleError(e, publicSrc)} />
        <source srcSet={publicSrc} type="image/png" />
        <img
          src={publicSrc}
          alt={alt}
          className={className}
          style={style}
          loading="lazy"
          onError={(e) => handleError(e, publicSrc)}
        />
      </picture>
    );
  };

  return (
    <div id="sponsors">
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

        <div className="grid" id="logo-grid">
          <a className="sponsor-link white-bg" href="https://www.citadel.com" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/citadel.png" alt="Citadel" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.thetradedesk.com/us" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/thetradedesk.png" alt="The Trade Desk" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/hrt.png" alt="HRT" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://stripe.com" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/stripe.png" alt="Stripe" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.deshaw.com" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/deshaw.png" alt="D. E. Shaw" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.janestreet.com" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/janestreet.png" alt="Jane Street" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.lockheedmartin.com" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/lockheed.png" alt="Lockheed Martin" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/anthropic.png" alt="Anthropic" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://ethereum.org" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/ethereum.png" alt="Ethereum" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://www.sandia.gov" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/sandia.svg" alt="Sandia" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://www.scm-lp.com/" target="_blank" rel="noopener noreferrer">
            <Picture src="images/sponsors/scm.png" alt="SCM" style={{ width: "200px", height: "auto" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
