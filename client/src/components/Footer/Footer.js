import React from "react";

import "./Footer.scss";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-social-container">
        <div className="svg-container">
          <FaTwitter />
        </div>{" "}
        <div className="svg-container">
          <FaFacebookF />
        </div>{" "}
        <div className="svg-container">
          <FaLinkedinIn />
        </div>{" "}
        <div className="svg-container">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
