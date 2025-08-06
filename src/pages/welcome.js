import React from "react";
import DecryptedText from "./DecryptedText";

export default function Welcome() {
  return (
    <div class="welcome">
      <span class="text">
        <div class="container">
          {/* <div class="title" id="welcometext">
            ACM@CMU
          </div> */}
          <DecryptedText
            text="ACM@CMU"
            speed={60}
            maxIterations={15}
            sequential={true}
            revealDirection="start"
            animateOn="hover"
            className="title"
            id = "welcometext"
          />
          <div class="infotext">
            ACM@CMU is Carnegie Mellon's student chapter of the Association for
            Computing Machinery, the leading premier organization for computing
            professionals. As the largest student organization in the School of Computer Science (SCS),
            we are dedicated to promoting interdisciplinary
            computing and enabling professional development on campus.
          </div>
          <a href="https://www.acmatcmu.com/#/events" class="scroll-button" id="learn-more-button">
            Learn more.
          </a>
        </div>
      </span>
      <span class="text">
        <div class="container" id="learn-more">
          <div class="title" id="header">
            What We Do
          </div>
          <div id="what-we-do-container">
            <div class="row">
              <div class="we-do">
                <h2>
                  <div class="we-do-image">
                    <i class="fas fa-cogs fa-md" aria-hidden="true"></i>We Work
                  </div>
                </h2>
                We partner with employers to provide students networking and
                employment opportunities. We host both large and small scale
                events that provide intimate access to highly competitive and
                sought after employers.
              </div>
              <div class="we-do">
                <h2>
                  <div class="we-do-image">
                    <i class="fas fa-code fa-md" aria-hidden="true"></i>We Code
                  </div>
                </h2>
                We are passionate about technology and service. We develop
                applications that benefit the Carnegie Mellon community at
                large.
              </div>
            </div>
            <div class="row">
              <div class="we-do">
                <h2>
                  <div class="we-do-image">
                    <i class="fas fa-play fa-md" aria-hidden="true"></i>We Play
                  </div>
                </h2>
                While much of what ACM does it career or self development
                oriented, we understand the importance of friendship and
                relaxation. ACM often hosts get-togethers including networking
                dinners, ice cream socials and board game nights..
              </div>
              <div class="we-do">
                <h2>
                  <div class="we-do-image">
                    <i class="fas fa-star fa-md" aria-hidden="true"></i>We Share
                  </div>
                </h2>
                ACM regularly organizes a variety of talks ranging from social
                topics like “How to prepare for an interview” and technical
                topics from “An introduction to Rasberry Pi”, “Debugging
                Distributed Systems” to “Crossing Numbers, Humanity and Beauty
                of Math”.
              </div>
            </div>
            <div class="infotext" id="questions">
              Any questions? Email us at acm-exec@cs.cmu.edu.
            </div>
            <div class="infotext" id="emaillist">
              <a href="https://lists.andrew.cmu.edu/mailman/listinfo/acm-public?fbclid=IwAR1sbGBAbrgVAUHODFJHHLLl82wYLo-FKQeTERFhztoTXPkI8MFmEdcce3Y">
                If you'd like to be notified about events, sign up for our email
                list here.
              </a>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}
