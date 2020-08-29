import React from "react";
import "./Services.scss";
import { ServiceList } from "./ServiceData";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="service-heading">
        <h1>Lessons</h1>
        <p />
      </div>
      <div className="cards">
        {ServiceList.map(({ id, icon, title, description }) => (
          <div key={id} className="card">
            <div className="card-icon">{icon}</div>
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
