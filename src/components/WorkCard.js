import "./WorkCardStyles.css";

import React from 'react'
// import sitecore from "../assets/sitecore-logo.png";
import sitecore from "../assets/sitecore-featured-image.jpg";

import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={sitecore} alt="Sitecore" />
          <h2 className="project-title">Sitecore: Director of Sales Development(Americas)</h2>
          <div className="project-details">
            <p>Directing the front-end sales process for Sitecore in North America. Overseeing both Inbound and Outbound sales development. Helped brands create meaningful experiences that result in customer loyalty & advocacy.</p>
            <div className="project-btns">
              <NavLink to="https://www.sitecore.com/" className="btn">Website</NavLink>
              <NavLink to="/contact" className="btn">Questions?</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard