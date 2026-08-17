import React from "react";
import "./aboutus.css";

const GROUPS = [
  {
    id: "presidents",
    name: "Presidents",
    color: "#FF5C8A",
    glow: "rgba(255, 92, 138, 0.1)",
    members: [
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
        image: "headshots/vincent.jpeg",
        linkedin: "https://www.linkedin.com/in/vincentlo12/",
      },
    ],
  },
  {
    id: "secretary",
    name: "Secretary",
    color: "#FFB7C5",
    glow: "rgba(255, 183, 197, 0.08)",
    members: [
      {
        id: "alanap",
        name: "Alana Pereira",
        title: "Secretary",
        image: "headshots/alana.jpg",
        linkedin: "http://www.linkedin.com/in/alana-p-7b4289207",
      },
    ],
  },
  {
    id: "treasurer",
    name: "Treasurer",
    color: "#FF69B4",
    glow: "rgba(255, 105, 180, 0.08)",
    members: [
      {
        id: "veronicas",
        name: "Veronica Shao",
        title: "Treasurer",
        image: "headshots/temp.png",
        linkedin: "",
      },
    ],
  },
  {
    id: "hackathon-leads",
    name: "Hackathon Leads",
    color: "#FFD1DC",
    glow: "rgba(255, 209, 220, 0.1)",
    subsectionRows: [
      ["hackcmu-leads", "hackberrypi-leads"],
      ["awap-leads"],
    ],
    subsections: [
      {
        id: "hackcmu-leads",
        name: "HackCMU",
        members: [
          {
            id: "tylery",
            name: "Tyler Yang",
            title: "HackCMU Lead",
            image: "headshots/temp.png",
            linkedin: "",
          },
        ],
      },
      {
        id: "awap-leads",
        name: "AWAP",
        members: [
          {
            id: "steveny",
            name: "Steven Yang",
            title: "AWAP Lead",
            image: "headshots/steven.jpg",
            linkedin: "https://www.linkedin.com/in/steven-yang-50583a243",
          },
          {
            id: "jenniferz",
            name: "Jennifer Zhu",
            title: "AWAP Lead",
            image: "headshots/jennifer.png",
            linkedin: "https://www.linkedin.com/in/jenny-cs/",
          },
          {
            id: "matthewm",
            name: "Matthew Milunic",
            title: "AWAP Lead",
            image: "headshots/temp.png",
            linkedin: "",
          },
        ],
      },
      {
        id: "hackberrypi-leads",
        name: "Hackberry Pi",
        members: [
          {
            id: "mikealm",
            name: "Mikeal Macera",
            title: "Hackberry Pi Lead",
            image: "headshots/temp.png",
            linkedin: "",
          },
        ],
      },
    ],
  },
  {
    id: "chairs",
    name: "Chairs",
    color: "#FF8FAB",
    glow: "rgba(255, 143, 171, 0.1)",
    members: [
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
    ],
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

// Groups of ids to render side by side on the same line; a group id
// not listed here just renders on its own full-width line.
const ROWS = [
  ["presidents"],
  ["secretary", "treasurer"],
  ["hackathon-leads"],
  ["chairs"],
];

function RoleFrame({ group }) {
  return (
    <div
      className={`role-frame role-frame-${group.id}`}
      style={{
        "--role-color": group.color,
        "--role-glow": group.glow,
      }}
    >
      <div className="role-label">{group.name}</div>

      {group.subsectionRows ? (
        <div className="role-subsections">
          {group.subsectionRows.map((rowIds, i) => (
            <div className="role-subsection-row" key={i}>
              {rowIds.map((subId) => {
                const sub = group.subsections.find((s) => s.id === subId);
                if (!sub) return null;
                return (
                  <div key={sub.id} className="role-subsection">
                    <div className="role-sublabel">{sub.name}</div>
                    <div className="role-member-grid">
                      {sub.members.map((profile) => (
                        <MemberCard key={profile.id} profile={profile} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : group.subsections ? (
        <div className="role-subsections">
          <div className="role-subsection-row">
            {group.subsections.map((sub) => (
              <div key={sub.id} className="role-subsection">
                <div className="role-sublabel">{sub.name}</div>
                <div className="role-member-grid">
                  {sub.members.map((profile) => (
                    <MemberCard key={profile.id} profile={profile} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="role-member-grid">
          {group.members.map((profile) => (
            <MemberCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}

function MemberCard({ profile }) {
  const CardTag = profile.linkedin ? "a" : "div";
  const linkProps = profile.linkedin
    ? { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <CardTag className="profile" id={profile.id} {...linkProps}>
      <div className="card">
        <div className="card-front">
          <div className="cropper">
            <img src={profile.image} alt={profile.name} />
          </div>
          <div className="profile-name">{profile.name}</div>
          {profile.title && (
            <div className="profile-title">{profile.title}</div>
          )}
        </div>
      </div>
    </CardTag>
  );
}

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

          {ROWS.map((rowIds) => {
            const rowGroups = rowIds
              .map((id) => GROUPS.find((g) => g.id === id))
              .filter(Boolean);

            if (rowGroups.length > 1) {
              return (
                <div className="role-row" key={rowIds.join("-")}>
                  {rowGroups.map((group) => (
                    <RoleFrame key={group.id} group={group} />
                  ))}
                </div>
              );
            }

            return rowGroups.map((group) => (
              <RoleFrame key={group.id} group={group} />
            ));
          })}

          <div
            className="role-frame role-frame-past"
            style={{
              "--role-color": "#D6588A",
              "--role-glow": "rgba(214, 88, 138, 0.08)",
            }}
          >
            <div className="role-label">Past Board Members</div>
            <div className="role-member-grid">
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
        </div>
      </span>
    </div>
  );
}
