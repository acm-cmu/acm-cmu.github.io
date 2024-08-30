import React, { useState } from 'react';
import './events.css'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Popup component
function Popup({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={event.imagePopup} alt={event.name} className="popup-image" />
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
    { name: 'AWAP 2022 - WiFi Rumble', imagePage: 'images/events/awap2022.png',  imagePopup: "images/events/awap2022-popup.png", description: 'Returning from COVID, Wifi Rumble was a blast, with teams competing head-to-head in a seeding round and subsequent double elimination bracket for the top prize. Students acted as internet service providers to establish cell towers across the impoverished and technologically desolate land of Ohhiyo (a fictional place). Players vied for power by building roads and cell towers near high populations as quickly as possible. Algorithms had to contend with terrain of varying building cost and clever opponents who might fence them in.' },
    { name: 'AWAP 2021 - Commute Chaos', imagePage: 'images/events/awap2021.png',  imagePopup: "images/events/awap2021-popup.png", description: 'In 2021, AWAP was hosted virtually due to COVID, with a theme based on effective transportation management. Each team operated as a Transportation Manager whose role was to design a subway network. Given knowledge on the passenger load of different stations, teams tackled the optimization problem of constructing routes across stations with limited resources in order to minimize travel time for a simulated day of commuting.' },
    { name: 'AWAP 2019 - Career Fair Mayhem', imagePage: 'images/events/awap2019.png',  imagePopup: "images/events/awap2019-popup.png", description: 'Our 2019 challenge simulated a real-world problem relevant (and possibly traumatic) to many students—navigating the chaos of a career fair. In this problem, teams were tasked to navigate a map of career fair booths and distribute their resume to the companies who can provide the most value to their job search. Teams worked to create algorithms which would target booths that would maximize their profit without wasting too much of their limited time waiting in long lines.' },
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
          <a href="https://www.acmatcmu.com/hackcmu/" target="_blank" rel="noopener noreferrer">
            <img id="hackcmu" src="images/events/hackcmu2024.png" alt="HackCMU 2024" />
            <p className="event-name">HackCMU 2024</p>
          </a>
        </div>
          <div className="event-item">
          <a href="https://awap.acmatcmu.com/" target="_blank" rel="noopener noreferrer">
            <img id="awap" src="images/backdrop.png" alt="AWAP" />
            <p className="event-name">AWAP 2024</p>
          </a>
          </div>
          <div className="event-item">
            <p className="event-name">HackBerry Pi 2024 - Coming Soon!</p>
          </div>
        </div>
        <div className="plat-tier-label" id="header">Past Events</div>
        <div className="grid" id="events-grid">
          {events.map((event, index) => (
            <div className="event-item" key={index} onClick={() => handleEventClick(event)}>
              <img id="event-image" src={event.imagePage} alt={event.name} />
              <p className="event-name">{event.name}</p>
            </div>
          ))}
        </div>
        {selectedEvent && <Popup event={selectedEvent} onClose={handleClosePopup} />}
      </div>
    </div>
  );
}
