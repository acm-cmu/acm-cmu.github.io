import React from "react";
import "./sponsors.css";

function ResponsiveImage({ src, alt, className, style }) {
  const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
  const webpSrc = publicSrc.replace(/\.webp$/, '.webp').replace(/\.png$/, '.webp');

  const handleError = (e) => {
    if (e.target.src.endsWith('.webp')) {
      e.target.src = publicSrc;
    }
  };

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" onError={handleError} />
      <source srcSet={publicSrc} type="image/svg+xml" />
      <img src={publicSrc} alt={alt} className={className} style={style} loading="lazy" onError={handleError} />
    </picture>
  );
}

export default function Sponsors() {
  return (
    <div id="sponsors">
      <div className="container">
        <div className="title" id="header">Sponsors</div>
        <div className="infotext">
          Our work here at ACM@CMU would not be possible without the help of our amazing sponsors.
          We are immeasurably thankful for their support.
        </div>
        <div className="infotext">
          Interested in sponsoring us? Email us at <a href="mailto:acm-exec@cs.cmu.edu">acm-exec@cs.cmu.edu</a>.
        </div>

        <div className="grid" id="logo-grid">
          <a className="sponsor-link white-bg" href="https://www.citadel.com" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/citadel.webp" alt="Citadel" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.thetradedesk.com/us" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/thetradedesk.webp" alt="The Trade Desk" style={{ width: "180px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/hrt.webp" alt="HRT" style={{ width: "180px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://stripe.com" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/stripe.webp" alt="Stripe" style={{ width: "160px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.deshaw.com" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/deshaw.webp" alt="D.E. Shaw" style={{ width: "180px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.janestreet.com" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/janestreet.webp" alt="Jane Street" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.lockheedmartin.com" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/lockheed.webp" alt="Lockheed Martin" style={{ width: "190px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/anthropic.webp" alt="Anthropic" style={{ width: "200px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://ethereum.org" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/ethereum.webp" alt="Ethereum Foundation" style={{ width: "180px", height: "auto" }} />
          </a>
          <a className="sponsor-link white-bg" href="https://www.sandia.gov" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/sandia.webp" alt="Sandia" style={{ width: "160px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://www.sandia.gov" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/omc.webp" alt="Old Mission Capital" style={{ width: "220px", height: "auto" }} />
          </a>
          <a className="sponsor-link" href="https://www.scm-lp.com/" target="_blank" rel="noopener noreferrer">
            <ResponsiveImage src="images/sponsors/scm.webp" alt="Steven's Capital Management" style={{ width: "160px", height: "auto" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
