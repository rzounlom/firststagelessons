import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
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
  return (
    <nav className={!scroll ? "navbar" : "navbar-scroll"} id="navbar">
      <div className="logo">Logo</div>
      <ScrollspyNav
        scrollTargetIds={["landing", "services", "about", "team", "contact"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
        className="nav"
      >
        <ul>
          <li>
            <a href="#landing">Home</a>
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
        </ul>
      </ScrollspyNav>
    </nav>
  );
};

export default Navbar;
