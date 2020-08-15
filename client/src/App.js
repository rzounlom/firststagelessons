import React, { useState } from "react";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { GrClose } from "react-icons/gr";
import ScrollspyNav from "react-scrollspy-nav";

const App = () => {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    navToggle ? setNavToggle(false) : setNavToggle(true);
  };
  return (
    <div className="App">
      <div
        className={!navToggle ? "navbar-mobile-opened" : "navbar-mobile-closed"}
      >
        <GrClose
          className="navbar-mobile-close"
          onClick={() => handleNavToggle()}
        />
        <div className="navbar-mobile-menu">
          {" "}
          <ScrollspyNav
            scrollTargetIds={[
              "landing",
              "services",
              "about",
              "team",
              "contact",
            ]}
            offset={100}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
            className="nav"
          >
            <ul>
              <li onClick={() => handleNavToggle()}>
                <a href="#landing">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li onClick={() => handleNavToggle()}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => handleNavToggle()}>
                <a href="#team">Team</a>
              </li>
              <li onClick={() => handleNavToggle()}>
                <a href="#contact">Contact</a>
              </li>
              <div className="navbar-toggle" />
            </ul>
          </ScrollspyNav>
        </div>
      </div>
      <Navbar handleNavToggle={handleNavToggle} />
      <Landing />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
