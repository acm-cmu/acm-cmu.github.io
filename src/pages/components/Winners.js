import React from "react";
import "../styles/Winner.css";

// Winners and runners-up for each category, along with team members
const winners = {
    "Education Track": {
        winner: {
            teamName: "rizzly bears",
            members: ["Owen Lalis", "Enzo Defranco", "Prasanna Pantha"]
        },
        runnerUp: {
            teamName: "rip nicole",
            members: ["Andrew Chung", "Hugo Martinez"]
        }
    },
    "Sustainability Track": {
        winner: {
            teamName: "The Stinger",
            members: ["Vedanth Ramanathan", "Ishaan Masilamony", "Pratham Madaram", "Unmesh Chakravarty"]
        },
        runnerUp: {
            teamName: "BBB",
            members: ["Madeleine Brutin", "Eshaan Joshi"]
        }
    },
    "Healthcare Track": {
        winner: {
            teamName: "TooCheesy",
            members: ["Preetham Manapuri", "Jack London", "Neil Raman", "Anthony Xu"]
        },
        runnerUp: {
            teamName: "Navs",
            members: ["Pranav Tayi", "Pranav Ram"]
        }
    }
};

// Special prizes, with team names and their members
const specialPrizes = {
    "Grand Prize": {
        teamName: "TrieHards",
        members: ["Sri Anumakonda", "Prakash Shekhar", "Harsh Akunuri"]
    },
    "Best Use of Data": {
        teamName: "Donner Hackers",
        members: ["Sponsored by Hudson River Trading", "Shiva Soundappan", "Krish Mody", "Aditya Dewan", "Julian Ng-Thow-Hing"]
    },
    "Most Creative Hack": {
        teamName: "One Pot Hot Shots",
        members: ["Sponsored by The Trade Desk", "Raven Hong", "Zen Jitsajjapong", "Annie Chong", "Alex Tan"]
    },
    "People's Choice Prize": {
        teamName: "DreamTeam",
        members: ["Jet Wu", "Mario Cruz", "Shivum Pandove", "Shomik Telang"]
    }
};

const Winner = () => {
    return (
        <div className="winner-container">
            <div className="winner-header"></div>
            <div className="winner-title">Winners</div>

            {/* Display special prizes */}
            <div className="special-prizes-container">
    {Object.entries(specialPrizes).map(([prize, { teamName, members }], index) => (
        <div
            key={index}
            className="special-prize-item grand-prize" // Always applies the grand-prize class
        >
            <div className="team-container">
                <strong>{prize}:</strong> {teamName}
            </div>
            <ul className="team-members grand-prize-members"> {/* Always applies grand-prize-members */}
                {members.map((member, i) => (
                    <li key={i}>{member}</li>
                ))}
            </ul>
        </div>
    ))}
</div>

            {/* Display each track with winners and runner-ups */}
            {Object.entries(winners).map(([track, { winner, runnerUp }], index) => (
                <div key={index} className="track-container">
                    <h2>{track}</h2>
                    <div className="team-container">
                        <div className="team">
                            <h3>Winner: {winner.teamName}</h3>
                            <ul className="team-members">
                                {winner.members.map((member, i) => (
                                    <li key={i}>{member}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="team">
                            <h3>Runner-Up: {runnerUp.teamName}</h3>
                            <ul className="team-members">
                                {runnerUp.members.map((member, i) => (
                                    <li key={i}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    );
};

export default Winner;
