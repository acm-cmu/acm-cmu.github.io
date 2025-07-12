import React from "react";
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

export default function Sponsors() {
  const sponsors = [
    {
      name: "Citadel",
      imagePage: "images/sponsors/citadel.png",
      link: "https://www.citadel.com"
    },
    {
      name: "The Trade Desk",
      imagePage: "images/sponsors/thetradedesk.png",
      link: "https://www.thetradedesk.com/us"
    },
    {
      name: "HRT",
      imagePage: "images/sponsors/hrt.png",
      link: "https://www.hudsonrivertrading.com/"
    },
    {
      name: "Stripe",
      imagePage: "images/sponsors/stripe.png",
      link: "https://stripe.com"
    },
    {
      name: "D. E. Shaw",
      imagePage: "images/sponsors/deshaw.png",
      link: "https://www.deshaw.com"
    },
    {
      name: "Jane Street",
      imagePage: "images/sponsors/janestreet.png",
      link: "https://www.janestreet.com"
    },
    {
      name: "Lockheed Martin",
      imagePage: "images/sponsors/lockheed.png",
      link: "https://www.lockheedmartin.com"
    },
    {
      name: "Anthropic",
      imagePage: "images/sponsors/anthropic.png",
      link: "https://www.anthropic.com"
    },
    {
      name: "Ethereum",
      imagePage: "images/sponsors/ethereum.png",
      link: "https://ethereum.org"
    },
    {
      name: "Sandia",
      imagePage: "images/sponsors/sandia.png",
      link: "https://www.sandia.gov"
    },
    {
      name: "SCM",
      imagePage: "images/sponsors/scm.png",
      link: "https://www.scm-lp.com/"
    },
  ];

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
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-link"
            >
              <ResponsiveImage src={sponsor.imagePage} alt={sponsor.name} className="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
