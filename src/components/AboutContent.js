import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import TopImage from "../assets/graph.jpg";
import BottomImage from "../assets/computer.jpg";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I help brands create meaningful experiences that result in customer loyalty & advocacy. I direct the front-end sales process for Sitecore in North America, overseeing both Inbound and Outbound sales development. </p>
        <Link to="/contact" className="btn">Contact</Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={TopImage} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={BottomImage} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent