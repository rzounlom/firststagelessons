import React from "react";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing" id="landing">
      <div className="landing-heading">
        <div className="landing-text">
          <h1>First Stage Guitar Lessons</h1>
          <p>
            Master your instrument by learning from some of the best music
            teachers on the planet
          </p>
        </div>
        <div className="landing-btn">
          <a href="#contact">
            <button>Contact</button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
