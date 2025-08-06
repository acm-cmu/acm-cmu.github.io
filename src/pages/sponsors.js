import React, { useState } from "react";
import "./sponsors.css";
import { Link } from 'react-router-dom';

// Reuse your existing ResponsiveImage component
function ResponsiveImage({ src, alt, className }) {
  const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
  const webpSrc = publicSrc.replace(/\.png$/, '.webp');

  const handleError = (e) => {
    if (e.target.src.endsWith('.webp')) {
      e.target.src = publicSrc;
    }
  };

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" onError={handleError} />
      <source srcSet={publicSrc} type="image/png" />
      <img src={publicSrc} alt={alt} className={className} loading="lazy" onError={handleError} />
    </picture>
  );
}

// Popup component for sponsor
function Popup({ sponsor, onClose }) {
  if (!sponsor) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <ResponsiveImage src={sponsor.imagePopup} alt={sponsor.name} className="popup-image" />
        <div className="popup-text">
          <h2>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    </div>
  );
}

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsors = [
    {
      name: "Citadel",
      imagePage: "images/sponsors/citadel.png",
      imagePopup: "images/sponsors/citadel.png",
      description: "A leading global financial institution.",
      link: "https://www.citadel.com"
    },
    {
      name: "The Trade Desk",
      imagePage: "images/sponsors/thetradedesk.png",
      imagePopup: "images/sponsors/thetradedesk.png",
      description: "World-class digital advertising platform.",
      link: "https://www.thetradedesk.com/us"
    },
    {
      name: "HRT",
      imagePage: "images/sponsors/hrt.png",
      imagePopup: "images/sponsors/hrt.png",
      description: "Hudson River Trading, quantitative trading firm.",
      link: "https://www.hudsonrivertrading.com/"
    },
    {
      name: "Stripe",
      imagePage: "images/sponsors/stripe.png",
      imagePopup: "images/sponsors/stripe.png",
      description: "Online payment processing for internet businesses.",
      link: "https://stripe.com"
    },
    {
      name: "D. E. Shaw",
      imagePage: "images/sponsors/deshaw.png",
      imagePopup: "images/sponsors/deshaw.png",
      description: "A global investment and technology development firm.",
      link: "https://www.deshaw.com"
    },
    {
      name: "Jane Street",
      imagePage: "images/sponsors/janestreet.png",
      imagePopup: "images/sponsors/janestreet.png",
      description: "Global trading firm.",
      link: "https://www.janestreet.com"
    },
    {
      name: "Lockheed Martin",
      imagePage: "images/sponsors/lockheed.png",
      imagePopup: "images/sponsors/lockheed.png",
      description: "Aerospace and defense company.",
      link: "https://www.lockheedmartin.com"
    },
    {
      name: "Anthropic",
      imagePage: "images/sponsors/anthropic.png",
      imagePopup: "images/sponsors/anthropic.png",
      description: "Anthropic",
      link: "https://www.anthropic.com"
    },
    {
      name: "Ethereum",
      imagePage: "images/sponsors/ethereum.png",
      imagePopup: "images/sponsors/ethereum.png",
      description: "Ethereum",
      link: "https://ethereum.org"
    },
    {
      name: "Sandia",
      imagePage: "images/sponsors/sandia.png",
      imagePopup: "images/sponsors/sandia.png",
      description: "Sandia National Laboratories.",
      link: "https://www.sandia.gov"
    },
    {
      name: "SCM",
      imagePage: "images/sponsors/scm.png",
      imagePopup: "images/sponsors/scm.png",
      description: "Steven's Capital Management.",
      link: "https://www.scm-lp.com/"
    },
    {
      name: "Jump Trading",
      imagePage: "images/sponsors/jump.png",
      imagePopup: "images/sponsors/jump.png",
      description: "Jump Trading",
      link: "https://www.jumptrading.com/"
    },
  ];

  const handleSponsorClick = (sponsor) => {
    setSelectedSponsor(sponsor);
  };

  const handleClosePopup = () => {
    setSelectedSponsor(null);
  };

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
          {sponsors.map((sponsor, index) => (
            <div className="event-item" key={index}>
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <ResponsiveImage src={sponsor.imagePage} alt={sponsor.name} className="" />
              </a>
            </div>
          ))}
        </div>
        {selectedSponsor && <Popup sponsor={selectedSponsor} onClose={handleClosePopup} />}
      </div>
    </div>
  );
}
