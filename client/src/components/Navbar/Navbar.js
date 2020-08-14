import React, { useState, useEffect } from "react";
import "./Navbar.scss";

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
    <div className={!scroll ? "navbar" : "navbar-scroll"} id="navbar">
      Navbar
    </div>
  );
};

export default Navbar;
