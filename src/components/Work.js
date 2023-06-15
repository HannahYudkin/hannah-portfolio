import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Work Experience</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            < WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              link1={val.link1}
              link2={val.link2}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Work

