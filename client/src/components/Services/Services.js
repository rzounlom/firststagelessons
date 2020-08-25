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
        {ServiceList.map((service) => (
          <div className="card">
            <div className="card-icon">{service.icon}</div>
            <div className="card-title">{service.title}</div>
            <div className="card-description">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
