import React from "react";

import "./Footer.scss";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-social-container">
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg-container">
            <FaTwitter />
          </div>
        </a>{" "}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg-container">
            <FaFacebookF />
          </div>{" "}
        </a>{" "}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg-container">
            <FaInstagramSquare />
          </div>{" "}
        </a>{" "}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg-container">
            <FaLinkedinIn />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
