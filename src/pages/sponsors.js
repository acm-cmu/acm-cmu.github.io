import React, { useState } from "react";
import "./sponsors.css";

// Responsive image with a safe fallback if a .webp sibling doesn't exist
function ResponsiveImage({ src, alt, className }) {
  const [webpFailed, setWebpFailed] = useState(false);
  const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
  const webpSrc = publicSrc.replace(/\.png$/, ".webp");

  if (webpFailed) {
    return (
      <img src={publicSrc} alt={alt} className={className} loading="lazy" />
    );
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={publicSrc}
        alt={alt}
        className={className}
        loading="lazy"
        onError={() => setWebpFailed(true)}
      />
    </picture>
  );
}

const TIERS = [
  {
    id: "gold",
    name: "Gold",
    color: "#FFD54A",
    glow: "rgba(255, 213, 74, 0.1)",
    sponsors: [
      {
        name: "HRT",
        image: "images/sponsors/current_sponsors/hrt_logo.png",
        link: "https://www.hudsonrivertrading.com/",
      },
    ],
  },
  {
    id: "silver",
    name: "Silver",
    color: "#C9D3DC",
    glow: "rgba(201, 211, 220, 0.1)",
    sponsors: [
      {
        name: "Cursor",
        image: "images/sponsors/current_sponsors/cursor_logo.png",
        link: "https://cursor.com",
      },
    ],
  },
  {
    id: "bronze",
    name: "Bronze",
    color: "#D48A54",
    glow: "rgba(212, 138, 84, 0.1)",
    sponsors: [
      {
        name: "Citadel",
        image: "images/sponsors/current_sponsors/citadel_logo.png",
        link: "https://www.citadel.com",
      },
      {
        name: "D. E. Shaw",
        image: "images/sponsors/current_sponsors/de_shaw_logo.png",
        link: "https://www.deshaw.com",
      },
      {
        name: "Jane Street",
        image: "images/sponsors/current_sponsors/jane_street_logo.png",
        link: "https://www.janestreet.com",
      },
      {
        name: "Microsoft",
        image: "images/sponsors/current_sponsors/microsoft_logo.png",
        link: "https://www.microsoft.com",
      },
      {
        name: "Quadrature",
        image: "images/sponsors/current_sponsors/quadrature_logo.png",
        link: "https://www.quadrature.ai",
      },
    ],
  },
  {
    id: "supporters",
    name: "Base",
    color: "#8FB4E3",
    glow: "rgba(143, 180, 227, 0.08)",
    sponsors: [
      {
        name: "Adobe",
        image: "images/sponsors/current_sponsors/adobe_logo.png",
        link: "https://www.adobe.com",
      },
      {
        name: "Garner Health",
        image: "images/sponsors/current_sponsors/garner_health_logo.png",
        link: "https://www.getgarner.com",
      },
      {
        name: "Lockheed Martin",
        image: "images/sponsors/current_sponsors/lockeed_martin_logo.png",
        link: "https://www.lockheedmartin.com",
      },
      {
        name: "SCM",
        image: "images/sponsors/current_sponsors/scm_logo.png",
        link: "https://www.scm-lp.com/",
      },
      {
        name: "Texas Instruments",
        image: "images/sponsors/current_sponsors/texas_instruments_logo.png",
        link: "https://www.ti.com",
      },
      {
        name: "Visa",
        image: "images/sponsors/current_sponsors/visa_logo.png",
        link: "https://usa.visa.com/careers.html",
      },
    ],
  },
];

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

        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`tier-frame tier-frame-${tier.id}`}
            style={{
              "--tier-color": tier.color,
              "--tier-glow": tier.glow,
            }}
          >
            <div className="tier-label">{tier.name}</div>
            <div className="tier-logo-grid">
              {tier.sponsors.map((sponsor) => (
                <a
                  className="event-item sponsor-tile"
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ResponsiveImage src={sponsor.image} alt={sponsor.name} className="" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
