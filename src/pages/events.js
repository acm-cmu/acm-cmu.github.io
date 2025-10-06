import React, { useState, useEffect, useCallback } from 'react';
import './events.css'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; 

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="link-icon" >
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )}

// Helper component for responsive images
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


// Popup component
function Popup({ event, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close popup with "esc"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % event.imagePopups.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + event.imagePopups.length) % event.imagePopups.length);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="picture-wrapper">
          {event.imagePopups.length > 1 && 
            <div className="popup-arrows" >
              <button className="popup-arrow left" onClick={prevSlide} disabled={event.imagePopups.length <= 1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="popup-icon">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="popup-arrow right" onClick={nextSlide} disabled={event.imagePopups.length <= 1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="popup-icon">
                  <polyline points="9 18 15 12 9 6" />
                </svg >
              </button>
            </div>
          }
          <ResponsiveImage
            src={event.imagePopups[currentIndex]}
            alt={event.name}
            className="popup-image"
          />
        </div>
        <div className="popup-text">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          {event.website && (
            <p>
              <a
                className="event-link"
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit event website
                <ExternalLinkIcon />
              </a>
            </p>
          )}

        </div>
      </div>
    </div>
  );
}


export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { name: 'HackCMU 2024', imagePage: 'images/events/hackcmu2024.png', imagePopups: ["images/events/hackcmu-2024-popup1.jpg", "images/events/hackcmu-2024-popup2.jpg", "images/events/hackcmu-2024-popup3.jpg", "images/events/hackcmu-2024-popup4.jpg", "images/events/hackcmu-2024-popup5.jpg", "images/events/hackcmu-2024-popup6.jpg", "images/events/hackcmu-2024-popup7.jpg", "images/events/hackcmu-2024-popup8.jpg", "images/events/hackcmu-2024-popup9.jpg"], description: 'HackCMU 2024 took place on September 13-14 with the theme "Cyberpunk". Participants built innovative projects in one of three core tracks — Education, Sustainability, and Healthcare — tackling real-world challenges with creativity and technical skill. Alongside track winners, teams also competed for special awards including Most Creative Hack, People’s Choice Prize, Best Use of Data, and the Grand Prize, celebrating boundary-pushing ideas and futuristic design.', website: 'https://www.acmatcmu.com/#/hackcmu'},
    { name: 'AWAP 2024 - Debris Defense', imagePage: 'images/events/awap2024-debris.png',  imagePopups: ["images/events/awap2024-popup.jpg", "images/events/awap2024-popup2.webp", "images/events/awap2024-popup3.jpg", "images/events/awap2024-popup4.webp"], description: 'AWAP 2024 was held on January 27-28, 2024. In Debris Defense, teams design algorithms to manage limited energy and deploy powerful tools to keep orbital lanes safe. Players can build new ships — each with unique cooldowns, ranges, and strengths — construct solar panels to fuel long-term operations, or even redirect debris toward opponents to overload their defenses. The challenge is to balance energy production, fleet composition, and offensive pressure while anticipating the constant flow of hazardous debris.' },
    
    { name: 'HackCMU 2023', imagePage: 'images/events/hackcmu2023.png', imagePopups: ["images/events/hackcmu2023-popup.png", "images/events/hackcmu-2023-popup1.webp", "images/events/hackcmu-2023-popup2.jpg", "images/events/hackcmu-2023-popup3.jpg", "images/events/hackcmu-2023-popup4.jpg"], description: 'HackCMU 2023 was held on September 15-16, bringing together students, innovators, and tech enthusiasts for a weekend of collaborative coding and creativity. Participants engage in a fast-paced, 24-hour challenge to build innovative solutions, with access to workshops, mentorship, and a diverse array of tools and technologies.' },
    { name: 'AWAP 2023 - Mars Makeover', imagePage: 'images/events/awap2023.png',  imagePopups: ["images/events/awap2023-popup.png"], description: 'Mars Makeover was our largest event yet, where teams competed to use their fleet of explorer robots to explore the planet, collect resources from metal deposits using miner robots to then expand their fleet, and terraform land tiles to take over the planet. Algorithms had to control the varying metal resources, robot collisions, and costs to transform.' },

    { name: 'HackCMU 2022', imagePage: 'images/events/hackcmu2022.png', imagePopups: ["images/events/hackcmu2022-popup-1.JPG", "images/events/hackcmu2022-popup.png", "images/events/hackcmu2022-popup-2.jpg", "images/events/hackcmu2022-popup-3.jpg", "images/events/hackcmu2022-popup-4.JPG"], description: 'HackCMU 2022 took place September 16–17, 2022 at CMU’s Gates Hillman Centers, bringing together students of all skill levels for a 24-hour hackathon under the theme “Gamification.” Experienced hackers were invited to mentor teams, lead sessions, and connect with sponsors, enjoying special swag and networking gifts in return.' },
    { name: 'AWAP 2022 - WiFi Rumble', imagePage: 'images/events/awap2022.png',  imagePopups: ["images/events/awap2022-popup.png"], description: 'In Wifi Rumble, students acted as internet service providers to establish cell towers across the impoverished and desolate land of Ohhiyo. Players vied for power by building roads and cell towers near high populations as quickly as possible. Algorithms had to contend with terrain of varying building cost and clever opponents who might fence them in.' },
    { name: 'HackberryPi 2022', imagePage: 'images/events/hackberrypi2022.png', imagePopups: ["images/events/hackberrypi2022-popup.png"], description: 'In celebration of Pi Day, teams of up to four were given a Pi and accessories on kickoff day, then had one week to build and demo creative hardware or connectivity projects. With five non-cash prizes—ranging from Best Hardware Hack to Most Practical—participants of all experience levels came together to learn, experiment, and showcase their IoT creations.' },
    
    { name: 'HackCMU 2021', imagePage: 'images/events/hackcmu2021.png', imagePopups: ["images/events/hackcmu2021-popup-3.JPG", "images/events/hackcmu2021-popup-1.JPG", "images/events/hackcmu2021-popup-2.JPG", "images/events/hackcmu2021-popup-4.JPG"], description: 'HackCMU 2021 was a two-day, in-person hackathon held October 1–2 at CMU’s Rashid Auditorium, exclusively for CMU undergraduates. Over 130 participants teamed up to build open-ended projects, guided by tech talks and tutorials, and submitted 90-second demo videos. With $2,100 in total prizes, including special challenges sponsors, competitors showcased creativity, technical skill, and practical impact.' },
    { name: 'AWAP 2021 - Commute Chaos', imagePage: 'images/events/awap2021.png',  imagePopups:["images/events/awap2021-popup.png"], description: 'In 2021, AWAP was hosted virtually due to COVID, with a theme based on effective transportation management. Each team operated as a Transportation Manager whose role was to design a subway network. Given knowledge on the passenger load of different stations, teams tackled the optimization problem of constructing routes across stations with limited resources in order to minimize travel time for a simulated day of commuting.' },
    
    { name: 'HackCMU 2020', imagePage: 'images/events/hackcmu2020.png', imagePopups: ["images/events/hackcmu2020-popup.png"], description: 'HackCMU 2020 was held entirely online from September 25–26, bringing together CMU students for a fast-paced, 24-hour virtual hackathon. After a Friday evening kickoff, participants coded through the night, submitted 90-second demo videos by Saturday evening, and wrapped up with live demos and a closing ceremony on Sunday. ' },
    
    { name: 'AWAP 2019 - Career Fair Mayhem', imagePage: 'images/events/awap2019.png',  imagePopups: ["images/events/awap2019-popup.png"], description: 'Our 2019 challenge simulated a real-world problem relevant (and possibly traumatic) to many students—navigating the chaos of a career fair. In this problem, teams were tasked to navigate a map of career fair booths and distribute their resume to the companies who can provide the most value to their job search. Teams worked to create algorithms which would target booths that would maximize their profit without wasting too much of their limited time waiting in long lines.' },
    { name: 'HackberryPi 2019', imagePage: 'images/events/hackberrypi2019.png', imagePopups: ["images/events/hackberrypi2019-popup.png"], description: 'Hackberry Pi 2019 was a two-week Raspberry Pi hackathon held March 19–31, 2019 at CMU’s Rashid Auditorium and Gates hallways. Participants received free Pi kits (to keep upon completion), attended beginner-friendly workshops on day one, then spent the week building projects to showcase at the Pi Day Expo—with pies and “pi-zzas” for all. Judges awarded three non-cash prizes (1st, 2nd, 3rd) based on creativity, technical execution, and overall impact.' },
    { name: 'HackCMU 2019', imagePage: 'images/events/hackcmu2019.png', imagePopups: ["images/events/hackcmu2019-popup.png"], description: 'HackCMU 2019 was CMU’s official fall hackathon, held September 14, 2019 at Simmons Auditorium. Participants spent an evening ideating, coding, and showcasing projects through two rapid-fire expo rounds.' },
    
    { name: 'HackCMU 2018', imagePage: 'images/events/hackcmu2018.png', imagePopups: ["images/events/hackcmu2018-popup.png"], description: 'HackCMU 2018 was CMU’s official beginner-friendly hackathon, running September 21–30 in Rashid Auditorium. Over 150 participants teamed up to build and demo projects, submitting short video overviews for a chance at one of four surprise prizes. Judges evaluated hacks on originality, technical difficulty, demo clarity, and real-world usefulness, making it a fun, low-pressure introduction to hacking on campus.' },
    { name: 'AWAP 2018 - Fast Food Frenzy', imagePage: 'images/events/awap2018-popup.png',  imagePopups: ["images/events/awap2018-popup.png"], description: 'AWAP 2018 was held on February 24th with the theme "Fast Food Frenzy". Algorithms with a Purpose (AWAP) is an annual student-run event held at Carnegie Mellon University. AWAP aims to expose algorithms to programmers of all experiences in a fun game-like scenario. This year, strap on your aprons and get ready to build your fast food empire!' },
    
    { name: 'HackCMU 2017', imagePage: 'images/events/hackcmu2017.png', imagePopups: ["images/events/hackcmu2017-popup.png"], description: 'HackCMU 2017 was Carnegie Mellon’s flagship beginner-friendly hackathon, held September 8–9 in Rashid Auditorium with 171 participants. Teams had 24 hours to build anything from scratch, then pitched short demos to win prizes, such as Best Use of Machine Learning, Most Entrepreneurial, and Most Real-World Value. Judged on originality, technical difficulty, demo quality, and usefulness, the event spotlighted creativity and introduced newcomers to hands-on hacking.' },
    { name: 'HackCMU 2016', imagePage: 'images/events/hackcmu2016.png', imagePopups: ["images/events/hackcmu2016-popup.png"], description: 'HackCMU 2016 and brought 164 CMU students together on September 16–17 at Gates for a 24-hour in-person sprint. Teams submitted 90-second YouTube demos showcasing projects judged on originality, technical difficulty, polish, and real-world usefulness.' },
    { name: 'HackCMU 2015', imagePage: 'images/events/hackcmu2015.png', imagePopups: ["images/events/hackcmu2015-popup.png"], description: "HackCMU 2015 was a full-day hackathon held September 25–26 on campus. Teams had roughly 24 hours to ideate, code, and submit 90-second demo videos, then pitched their projects in an evening closing ceremony. With over $6,700 in prizes, sponsored challenges rewarded everything from Python power-users (AQR Python Award) to the Most Amusing Project (Heap Award), showcasing participants' creativity, technical prowess, and real-world impact."},
  ];

  const handleEventClick = (event) => { 
    setSelectedEvent(event);
  };

  const handleClosePopup = useCallback(() => {
    setSelectedEvent(null);
  }, [])

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
            <a href="https://www.acmatcmu.com/hackcmu2025/" target="_blank" rel="noopener noreferrer">
              <ResponsiveImage src="images/events/hackcmu2025.png" alt="HackCMU 2025" className="" />
              <p className="event-name">HackCMU 2025<ExternalLinkIcon /></p>
              <p className="event-name">September 12 - 13</p>
            </a>
          </div>

          <div className="event-item">
            <p className="event-name">AWAP 2026 - Coming Soon!</p>
          </div>
        </div>
        <div className="plat-tier-label" id="header">Past Events</div>

        <div className="grid" id="events-grid">
          <div className="event-item">
            <a href="https://awap.acmatcmu.com/" target="_blank" rel="noopener noreferrer">
              <ResponsiveImage src="images/events/awap2024.png" alt="AWAP 2025" className="" />
              <p className="event-name">AWAP 2025 - Raid CMU Legends<ExternalLinkIcon /></p>
            </a>
          </div>
          {/* <div className="event-item">
            <Link to="/hackcmu">
              <ResponsiveImage src="images/events/hackcmu2024.png" alt="HackCMU 2024" className="" />
              <p className="event-name">HackCMU 2024<ExternalLinkIcon /></p>
            </Link>
          </div> */}
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
