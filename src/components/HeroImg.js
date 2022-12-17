import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/meeting.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="meeting" />
      </div>
      <div className="content">
        <p> Hi, I'm Max Williams.</p>
        <h1>Director of Sales Development of the Americas at Sitecore</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg