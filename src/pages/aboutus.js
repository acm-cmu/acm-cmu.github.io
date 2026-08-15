import React from "react";

const profiles_current = [
  {
    id: "katiew",
    name: "Katie Wang",
    title: "President",
    image: "headshots/katie.jpg",
    linkedin: "https://www.linkedin.com/in/kathleenzwang/",
  },
  {
    id: "vincentl",
    name: "Vincent Lo",
    title: "Vice President",
    image: "headshots/temp.png",
    linkedin: "",
  },
  {
    id: "alanap",
    name: "Alana Pereira",
    title: "Secretary",
    image: "headshots/temp.png",
    linkedin: "http://www.linkedin.com/in/alana-p-7b4289207",
  },
  {
    id: "veronicas",
    name: "Veronica Shao",
    title: "Treasurer",
    image: "headshots/temp.png",
    linkedin: "",
  },
  {
    id: "tylery",
    name: "Tyler Yang",
    title: "HackCMU Lead",
    image: "headshots/temp.png",
    linkedin: "",
  },
  {
    id: "jenniferz",
    name: "Jennifer Zhu",
    title: "Co-AWAP Lead",
    image: "headshots/jennifer.png",
    linkedin: "https://www.linkedin.com/in/jenny-cs/",
  },
  {
    id: "steveny",
    name: "Steven Yang",
    title: "Co-AWAP Lead",
    image: "headshots/steven.jpg",
    linkedin: "https://www.linkedin.com/in/steven-yang-50583a243",
  },
  {
    id: "matthewm",
    name: "Matthew Milunic",
    title: "Co-AWAP Lead",
    image: "headshots/temp.png",
    linkedin: "",
  },
  {
    id: "mikealm",
    name: "Mikeal Macera",
    title: "Hackberry Pi Lead",
    image: "headshots/temp.png",
    linkedin: "",
  },
  {
    id: "nirp",
    name: "Nir Pechuk",
    title: "Research Chair",
    image: "headshots/nir.JPEG",
    linkedin: "https://www.linkedin.com/in/nirpechuk/",
  },
  {
    id: "rachelt",
    name: "Rachel Tong",
    title: "Design Chair",
    image: "headshots/rachel.jpg",
    linkedin: "https://www.linkedin.com/in/racheltong29",
  },
];

const profiles_past = [
  {
    id: "zanzaoc",
    name: "Jackson Chen",
    image: "headshots/jackson.jpg",
    linkedin: "https://www.linkedin.com/in/jacksoncmu/",
  },
  {
    id: "tsaxena",
    name: "Tanisha Saxena",
    image: "headshots/tanisha.jpeg",
    linkedin: "https://www.linkedin.com/in/tanishasaxena/",
  },
  {
    id: "aidanz",
    name: "Aidan Zhang",
    image: "headshots/aidan.png",
    linkedin: "https://www.linkedin.com/in/aidanzhang06/",
  },
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
            {profiles_current.map((profile) => {
              const CardTag = profile.linkedin ? "a" : "div";
              const linkProps = profile.linkedin
                ? { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <CardTag
                  className="profile"
                  id={profile.id}
                  key={profile.id}
                  {...linkProps}
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
                </CardTag>
              );
            })}
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
