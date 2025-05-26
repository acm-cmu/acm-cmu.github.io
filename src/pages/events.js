import React, { useState } from 'react';
import './events.css'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; 

// Helper component for responsive images
function ResponsiveImage({ src, alt, className }) {
  const webpSrc = src.replace(/\.png$/, '.webp');
  const handleError = (e) => {
    // Fallback to original PNG if WebP fails to load
    if (e.target.src.endsWith('.webp')) {
      e.target.src = src;
    }
  };

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" onError={handleError} />
      <source srcSet={src} type="image/png" />
      <img src={src} alt={alt} className={className} onError={handleError} />
    </picture>
  );
}

// Popup component
function Popup({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <ResponsiveImage src={event.imagePopup} alt={event.name} className="popup-image" />
        <div className="popup-text">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { name: 'HackCMU 2023', imagePage: 'images/events/hackcmu2023.png', imagePopup: "images/events/hackcmu2023-popup.png", description: 'HackCMU 2023 was held on September 15-16, bringing together students, innovators, and tech enthusiasts for a weekend of collaborative coding and creativity. Participants engage in a fast-paced, 24-hour challenge to build innovative solutions, with access to workshops, mentorship, and a diverse array of tools and technologies.' },
    { name: 'AWAP 2023 - Mars Makeover', imagePage: 'images/events/awap2023.png',  imagePopup: "images/events/awap2023-popup.png", description: 'Mars Makeover was our largest event yet, where teams competed to use their fleet of explorer robots to explore the planet, collect resources from metal deposits using miner robots to then expand their fleet, and terraform land tiles to take over the planet. Players could then transform robots to satisfy their needs as the game progressed to eventually terraform more tiles than their opponent by the end of the game. Algorithms had to control the varying metal resources, robot collisions, and costs to transform.' },
    { name: 'HackCMU 2022', imagePage: 'images/events/hackcmu2022.png', imagePopup: "images/events/hackcmu2022-popup.png", description: 'HackCMU 2022 was held on September 16-17 with the theme "Gamification".' },
    { name: 'AWAP 2022 - WiFi Rumble', imagePage: 'images/events/awap2022.png',  imagePopup: "images/events/awap2022-popup.png", description: 'Returning from COVID, Wifi Rumble was a blast, with teams competing head-to-head in a seeding round and subsequent double elimination bracket for the top prize. Students acted as internet service providers to establish cell towers across the impoverished and technologically desolate land of Ohhiyo (a fictional place). Players vied for power by building roads and cell towers near high populations as quickly as possible. Algorithms had to contend with terrain of varying building cost and clever opponents who might fence them in.' },
    { name: 'HackberryPi 2022', imagePage: 'images/events/hackberrypi2022.png', imagePopup: "images/events/hackberrypi2022-popup.png", description: 'HackberryPi 2022 ' },
    { name: 'HackCMU 2021', imagePage: 'images/events/hackcmu2021.png', imagePopup: "images/events/hackcmu2021-popup.png", description: 'HackCMU 2021 ' },
    { name: 'AWAP 2021 - Commute Chaos', imagePage: 'images/events/awap2021.png',  imagePopup: "images/events/awap2021-popup.png", description: 'In 2021, AWAP was hosted virtually due to COVID, with a theme based on effective transportation management. Each team operated as a Transportation Manager whose role was to design a subway network. Given knowledge on the passenger load of different stations, teams tackled the optimization problem of constructing routes across stations with limited resources in order to minimize travel time for a simulated day of commuting.' },
    { name: 'HackCMU 2020', imagePage: 'images/events/hackcmu2020.png', imagePopup: "images/events/hackcmu2020-popup.png", description: 'HackCMU 2020' },
    { name: 'AWAP 2019 - Career Fair Mayhem', imagePage: 'images/events/awap2019.png',  imagePopup: "images/events/awap2019-popup.png", description: 'Our 2019 challenge simulated a real-world problem relevant (and possibly traumatic) to many students—navigating the chaos of a career fair. In this problem, teams were tasked to navigate a map of career fair booths and distribute their resume to the companies who can provide the most value to their job search. Teams worked to create algorithms which would target booths that would maximize their profit without wasting too much of their limited time waiting in long lines.' },
    { name: 'HackberryPi 2019', imagePage: 'images/events/hackberrypi2019.png', imagePopup: "images/events/hackberrypi2019-popup.png", description: 'HackberryPi 2019 ' },
    { name: 'HackCMU 2019', imagePage: 'images/events/hackcmu2019.png', imagePopup: "images/events/hackcmu2019-popup.png", description: 'HackCMU 2019' },
    { name: 'HackCMU 2018', imagePage: 'images/events/hackcmu2018.png', imagePopup: "images/events/hackcmu2018-popup.png", description: 'HackCMU 2018' },
    { name: 'AWAP 2018 - Fast Food Frenzy', imagePage: 'images/events/awap2018-popup.png',  imagePopup: "images/events/awap2018-popup.png", description: 'AWAP 2018 was held on February 24th with the theme "Fast Food Frenzy". Algorithms with a Purpose (AWAP) is an annual student-run event held at Carnegie Mellon University. AWAP aims to expose algorithms to programmers of all experiences in a fun game-like scenario. This year, strap on your aprons and get ready to build your fast food empire!' },
    { name: 'HackCMU 2017', imagePage: 'images/events/hackcmu2017.png', imagePopup: "images/events/hackcmu2017-popup.png", description: 'HackCMU 2017' },
    { name: 'HackCMU 2016', imagePage: 'images/events/hackcmu2016.png', imagePopup: "images/events/hackcmu2016-popup.png", description: 'HackCMU 2016' },
    { name: 'HackCMU 2015', imagePage: 'images/events/hackcmu2015.png', imagePopup: "images/events/hackcmu2015-popup.png", description: 'HackCMU 2015' },
    
  ];

  const handleEventClick = (event) => { 
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div id="events">
      <div className="container">
        <div className="title" id="header">Events</div>
        <div className="infotext">
          ACM@CMU hosts multiple major events every year, giving fun opportunities for current students to hone their skills. Aside from our major events, we also host info sessions, tech talks, and ice cream socials for the general CMU community.
        </div>
        <div className="event-pink-title" id="header">Current Events</div>
        <div className="grid" id="events-grid">
          <div className="event-item">
            <p className="event-name">HackCMU 2025 - Coming Soon!</p>
          </div>

          <div className="event-item">
            <p className="event-name">AWAP 2026 - Coming Soon!</p>
          </div>
        </div>
        <div className="plat-tier-label" id="header">Past Events</div>

        <div className="grid" id="events-grid">
          <div className="event-item">
            <Link to="/hackcmu">
              <ResponsiveImage src="images/events/hackcmu2024.png" alt="HackCMU 2024" className="" />
              <p className="event-name">HackCMU 2024</p>
            </Link>
          </div>
          <div className="event-item">
            <a href="https://awap.acmatcmu.com/" target="_blank" rel="noopener noreferrer">
              <ResponsiveImage src="images/events/awap2024.png" alt="AWAP 2024" className="" />
              <p className="event-name">AWAP 2024 - Raid CMU Legends</p>
            </a>
          </div>
          {events.map((event, index) => (
            <div className="event-item" key={index} onClick={() => handleEventClick(event)}>
              <ResponsiveImage src={event.imagePage} alt={event.name} className="" />
              <p className="event-name">{event.name}</p>
            </div>
          ))}
        </div>
        {selectedEvent && <Popup event={selectedEvent} onClose={handleClosePopup} />}
      </div>
    </div>
  );
}
