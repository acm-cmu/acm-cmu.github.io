import React from "react";

const profiles = [
  {
    id: "	nkurelli",
    name: "Neeha Kurelli",
    title: "President",
    image: "headshots/neeha.jpg",
    bio: "Hey! I’m Neeha, a junior studying CS. I enjoy playing tennis, climbing, playing cards, sleeping and snoozing way too much, and checking out yummy food!",
    linkedin: "https://www.linkedin.com/in/nkurelli/",
  },
  {
    id: "jessedin",
    name: "Jesse Ding",
    title: "Vice President",
    image: "headshots/jesse.jpg",
    bio: "Hi! My name is Jesse and I’m a junior studying Computer Science. In my free time, I like to cook, obsess over other people’s dogs, and take care of my succulents!",
    linkedin: "https://www.linkedin.com/in/jesse-ding/",
  },
  {
    id: "jjohn2",
    name: "Jeffery John",
    title: "HackCMU Lead",
    image: "headshots/jeffery.jpg",
    bio: "Hi! My name is Jeffery and I’m a graduate student studying Human-Computer Interaction. I like the intersection of technology, policy, and space and enjoy 3D printing and lock picking!",
    linkedin: "https://www.linkedin.com/in/jefferyjohn/",
  },
  {
    id: "aaravb",
    name: "Aarav Bajaj",
    title: "AWAP Co-Lead",
    image: "headshots/aarav.png",
    bio: "Hi! My name is Aarav and I'm a sophomore studying computer science. In my free time, I love reading novels, trying new food places, and drinking too much tea!",
    linkedin: "https://www.linkedin.com/in/aarav-bajaj-408ab01b1/",
  },
  {
    id: "tsaxena",
    name: "Tanisha Saxena",
    title: "AWAP Co-Lead",
    image: "headshots/tanisha.jpeg",
    bio: "Hi! I'm Tanisha, an undergraduate studying CS with concentrations in Security and Algorithms. I'm also a lover of food science, every genre of music, and memoirs so if you have any recommendations for recipes, songs, or books, feel free to hmu",
    linkedin: "https://www.linkedin.com/in/tanishasaxena/",
  },
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
            {profiles.map((profile) => (
              <label className="profile" id={profile.id} key={profile.id}>
                <input className="card-button" type="checkbox" />
                <div className="card">
                  <div className="card-front">
                    <div className="cropper">
                      <img src={profile.image} alt={profile.name} />
                    </div>
                    <div className="profile-name">{profile.name}</div>
                    <div className="profile-title">{profile.title}</div>
                  </div>
                  <div className="card-back">
                    <div className="profile-name">{profile.name}</div>
                    <div className="profile-title">{profile.title}</div>
                    <div className="profile-bio">{profile.bio}</div>
                    <div className="profile-links">
                      {profile.linkedin && (
                        <a
                          className="linkedin"
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="logos/linkedin.png" alt="LinkedIn" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </span>
    </div>
  );
}
