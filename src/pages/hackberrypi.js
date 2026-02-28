import './hackberrypi.css';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from './images/logo.png';

const SIGNUP_URL = 'https://forms.gle/epfCDC4zL99eDufG6';

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

function SponsorPopup({ sponsor, onClose }) {
  if (!sponsor) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="hbp-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="hbp-popup-logo">
          <ResponsiveImage src={sponsor.imagePage} alt={sponsor.name} className="hbp-popup-image" />
        </div>
        <div className="popup-text">
          <h2>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    </div>
  );
}

const HBPNavbar = () => {
  return (
    <nav className="hbp-navbar">
      <div className="hbp-navbar-content">
        <Link to="hbp-hero" smooth={true}>
          <div className="hbp-navbar-logo">Hackberry Pi</div>
        </Link>
        <a
          style={{
            display: 'block',
            maxWidth: '80px',
            minWidth: '50px',
            position: 'fixed',
            right: '30px',
            top: '0',
            width: '8%',
            zIndex: 10000,
          }}
          href="https://www.acmatcmu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="ACM@CMU" style={{ width: '100%' }} />
        </a>
      </div>
    </nav>
  );
};

const HBPHero = () => {
  return (
    <div
      className="hbp-hero"
      id="hbp-hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/events/HackberryPi2026.png), url(${process.env.PUBLIC_URL}/images/events/hackberryPi2026background.png)`,
      }}
    >
      <div className="hbp-hero-content">
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
          <div className="hbp-signup-button">Sign Up Now</div>
        </a>
      </div>
    </div>
  );
};

const HBPAbout = () => {
  return (
    <div className="hbp-section hbp-about" id="hbp-about">
      <div className="hbp-section-header">About</div>
      <div className="hbp-about-content">
        <div className="hbp-about-text">
          <p>
            Our annual hardware hackathon, <strong>Hackberry Pi</strong>, presented by ACM@CMU,
            is happening on <strong>Monday 3/9!</strong>!
          </p>
          <p>
            We'll be giving out <strong>free Raspberry Pis</strong> at kickoff on Monday 3/8,
            and you'll have a week to build anything you want. We'll wrap up with our expo
            (winners + pie) on <strong>Saturday 3/14</strong>.
          </p>
          <p>
            <strong>No prior hardware experience is required!</strong> 
          </p>
          <p>
            There will also be <strong>free food</strong>, <strong>free merch</strong>,
            and <strong>exciting prizes</strong>, along with the opportunity to impress
            company sponsors.
          </p>
        </div>

        <div className="hbp-timeline">
          <div className="hbp-timeline-item">
            <div className="hbp-timeline-dot" />
            <div className="hbp-timeline-body">
              <div className="hbp-timeline-date">Mon 3/9, 6pm</div>
              <div className="hbp-timeline-title">Kickoff</div>
              <div className="hbp-timeline-desc">Get your free Raspberry Pi and start hacking!</div>
            </div>
          </div>
          <div className="hbp-timeline-connector" />
          <div className="hbp-timeline-item">
            <div className="hbp-timeline-dot" />
            <div className="hbp-timeline-body">
              <div className="hbp-timeline-date">3/9 – 3/14</div>
              <div className="hbp-timeline-title">Build Week</div>
              <div className="hbp-timeline-desc">One week to build anything you want!</div>
            </div>
          </div>
          <div className="hbp-timeline-connector" />
          <div className="hbp-timeline-item">
            <div className="hbp-timeline-dot" />
            <div className="hbp-timeline-body">
              <div className="hbp-timeline-date">Sat 3/14, 1pm</div>
              <div className="hbp-timeline-title">Expo</div>
              <div className="hbp-timeline-desc">Demo your project, win prizes, and enjoy some pie 🥧</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const HBPSponsors = () => {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsors = [
    {
      name: "QNX",
      imagePage: "images/sponsors/qnx.png",
      imagePopup: "images/sponsors/qnx.png",
      description: "QNX Software Systems.",
      link: "https://qnx.software/en"
    },
     {
      name: "Ripple",
      imagePage: "images/sponsors/ripple.png",
      imagePopup: "images/sponsors/ripple.png",
      description: "Ripple's University Blockchain Research Initiative.",
      link: "https://ripple.com/impact/ubri/"
    },
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
      name: "Visa",
      imagePage: "images/sponsors/visa.png",
      imagePopup: "images/sponsors/visa.png",
      description: "Visa",
      link: "https://usa.visa.com/careers.html"
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
    {
      name: "Y Combinator",
      imagePage: "images/sponsors/YC.png",
      imagePopup: "images/sponsors/YC.png",
      description: "Y Combinator",
      link: "https://www.ycombinator.com/"
    },
    {
      name: "Bloomberg",
      imagePage: "images/sponsors/bloomberg.png",
      imagePopup: "images/sponsors/bloomberg.png",
      description: "Bloomberg",
      link: "https://www.bloomberg.com/"
    },
    {
      name: "Roblox",
      imagePage: "images/sponsors/roblox.png",
      imagePopup: "images/sponsors/roblox.png",
      description: "Roblox",
      link: "https://corp.roblox.com/"
    }
  ];

  return (
    <div className="hbp-section hbp-sponsors" id="hbp-sponsors">
      <div className="hbp-section-header">Sponsors</div>
      <p className="hbp-sponsors-infotext">
        Our work here at ACM@CMU would not be possible without the help of our amazing sponsors.
        We are immeasurably thankful for their support.
      </p>
      <div className="hbp-sponsors-grid">
        {sponsors.map((s, i) => (
          <div
            key={i}
            className="hbp-sponsor-item event-item"
            onClick={() => setSelectedSponsor(s)}
          >
            <ResponsiveImage src={s.imagePage} alt={s.name} />
          </div>
        ))}
      </div>
      <SponsorPopup sponsor={selectedSponsor} onClose={() => setSelectedSponsor(null)} />
      <div className="hbp-sponsors-footer" />
    </div>
  );
};

function HackberryPi() {
  return (
    <div className="hackberrypi">
      <HBPNavbar />
      <HBPHero />
      <HBPAbout />
      <HBPSponsors />
    </div>
  );
}

export default HackberryPi;
