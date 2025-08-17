import React from "react";

const profiles_current = [
  {
    id: "zanzaoc",
    name: "Jackson Chen",
    title: "President",
    image: "headshots/jackson.jpg",
    linkedin: "https://www.linkedin.com/in/jacksoncmu/",
  },
  {
    id: "tsaxena",
    name: "Tanisha Saxena",
    title: "Vice President",
    image: "headshots/tanisha.jpeg",
    linkedin: "https://www.linkedin.com/in/tanishasaxena/",
  },
  {
    id: "aidanz",
    name: "Aidan Zhang",
    title: "HackCMU Lead",
    image: "headshots/aidan.png",
    linkedin: "https://www.linkedin.com/in/aidanzhang06/",
  },
  {
    id: "jenniferz",
    name: "Jennifer Zhu",
    title: "AWAP Lead",
    image: "headshots/jennifer.png",
    linkedin: "https://www.linkedin.com/in/jenny-cs/",
  },
];

const profiles_past = [
  {
    id: "nkurelli",
    name: "Neeha Kurelli",
    image: "headshots/neeha.jpg",
    linkedin: "https://www.linkedin.com/in/nkurelli/",
  },
  {
    id: "jessedin",
    name: "Jesse Ding",
    image: "headshots/jesse.jpg",
    linkedin: "https://www.linkedin.com/in/jesse-ding/",
  },
  {
    id: "jjohn2",
    name: "Jeffery John",
    image: "headshots/jeffery.jpg",
    linkedin: "https://www.linkedin.com/in/jefferyjohn/",
  },
  {
    id: "aaravb",
    name: "Aarav Bajaj",
    image: "headshots/aarav.png",
    linkedin: "https://www.linkedin.com/in/aarav-bajaj-408ab01b1/",
  }
];

export default function About() {
  return (
    <div id="about">
      <span className="text">
        <div className="container">
          <div className="title" id="header">
            About Us
          </div>
          <div className="infotext">
            Here at ACM@CMU, we're proud of everything we do, and that is only
            possible with our amazing board members. Get to know our team.
          </div>

          <div id="profile-container">
            {profiles_current.map((profile) => (
              <a
                className="profile"
                id={profile.id}
                key={profile.id}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card">
                  <div className="card-front">
                    <div className="cropper">
                      <img src={profile.image} alt={profile.name} />
                    </div>
                    <div className="profile-name">{profile.name}</div>
                    <div className="profile-title">{profile.title}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="title" id="header">
            Past Board Members
          </div>
          <div id="profile-container">
            {profiles_past.map((profile) => (
              <a
                className="profile"
                id={profile.id}
                key={profile.id}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card">
                  <div className="card-front">
                    <div className="cropper">
                      <img src={profile.image} alt={profile.name} />
                    </div>
                    <div className="profile-name">{profile.name}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </span>
    </div>
  );
}
