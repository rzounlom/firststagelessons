import React from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import "./FloatingSocial.scss";

const FloatingSocial = () => {
  return (
    <div className="floating-social">
      <div className="floating-social-container">
        <div className="svg-container">
          {" "}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocial;
