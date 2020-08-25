import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-picture" />
      <div className="about-content">
        <div className="about-heading">
          <h1>About Us</h1>
          <p className="about-heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </p>
        </div>{" "}
        {/* <div className="about-description">
          <p className="about-description-text">
            There are many vtions of passages of Lorem Ipsum available, but the
            majority have suffered.
          </p>
          <p className="about-description-text">
            There are many vtions of passages of Lorem Ipsum available, but the
            majority have suffered.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
