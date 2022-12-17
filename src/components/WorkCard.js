import "./WorkCardStyles.css";

import React from 'react'

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-upper">
        <img src={props.imgsrc} alt={props.imgsrc} />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
          <p>{props.text}</p>
        </div>
      </div>

      <div className="project-lower">
        <div className="project-btns">
          <NavLink to={props.link1} className="btn">Website</NavLink>
          <NavLink to={props.link2} className="btn">Questions?</NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard