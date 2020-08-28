import React from "react";

import "./Team.scss";

import { TeamData } from "./TeamData";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="team-heading">
        <h1>Our Team</h1>
        <p />
      </div>
      <div className="team-cards">
        <div className="team-card team-card-1">
          <div className="team-card-cover">
            <div className="team-card-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="team-card-content">
              <div className="team-card-name">Mia Johnson</div>
              <div className="team-card-description">Guitar Aficionada</div>
            </div>
          </div>
        </div>
        <div className="team-card team-card-2">
          <div className="team-card-cover">
            <div className="team-card-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="team-card-content">
              <div className="team-card-name">Desmond Fields</div>
              <div className="team-card-description">
                Drummer Extraordinaire
              </div>
            </div>
          </div>
        </div>
        <div className="team-card team-card-3">
          <div className="team-card-cover">
            <div className="team-card-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="team-card-content">
              <div className="team-card-content" />
              <div className="team-card-name">Michael Thomson</div>
              <div className="team-card-description">Next-Level Pianist</div>
            </div>
          </div>
        </div>
        <div className="team-card team-card-4">
          <div className="team-card-cover">
            <div className="team-card-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="team-card-content">
              <div className="team-card-name">Ben Wilson</div>
              <div className="team-card-description">Phat Bassist</div>
            </div>
          </div>
        </div>
        <div className="team-card team-card-5">
          <div className="team-card-cover">
            <div className="team-card-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="team-card-content">
              <div className="team-card-name">Grace Williams</div>
              <div className="team-card-description">Vocal Beast</div>
            </div>
          </div>
        </div>
        <div className="team-card team-card-6">
          <div className="team-card-cover">
            <div className="team-card-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="team-card-content">
              <div className="team-card-name">Sh'a Love</div>
              <div className="team-card-description">Nasty Guitarist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
