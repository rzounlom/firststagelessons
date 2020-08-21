import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../img/logo/firststage_logo.jpg";

import ScrollspyNav from "react-scrollspy-nav";

import { FaBars } from "react-icons/fa";

const Navbar = ({ handleNavToggle }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 50;
      if (isTop) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  const handleNavOffset = () => {
    return window.innerWidth > 768 ? 10 : -50;
  };

  return (
    <nav className={!scroll ? "navbar" : "navbar-scroll"} id="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="first stage logo" />
        </a>
      </div>
      <ScrollspyNav
        scrollTargetIds={["landing", "services", "about", "team", "contact"]}
        offset={handleNavOffset()}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
        className="navbar"
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div className="navbar-toggle">
            <FaBars onClick={() => handleNavToggle()} />
          </div>
        </ul>
      </ScrollspyNav>
    </nav>
  );
};

export default Navbar;
