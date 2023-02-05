import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import TopImage from "../assets/graph.jpg";
import BottomImage from "../assets/computer.jpg";
// import PortfolioPic from "../assets/porfolio.jpg";
import PortfolioPic from "../assets/portfolio.jpg"



const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <div className="img-self">
          <img src={PortfolioPic} className="img" alt="true" />
        </div>
        <div className="p-div">
          <p>
            Hi there! I am a driven and detail-oriented individual with a passion for both marketing and technology. I hold a Bachelor's degree in Business with a concentration in Marketing as well as one in Computer Information Systems, which has provided me with a unique perspective on how these two fields intersect and complement each other. I am always looking to improve my skills and expand my knowledge, and I am dedicated to delivering exceptional results for my clients.
          </p>
          <p>
            When I'm not working, I love to express my creative side through baking and art. There's nothing quite like whipping up a batch of delicious treats or working on a new canvas to unwind after a busy day. I am also deeply committed to giving back to my community and regularly volunteer my time and resources to local organizations and causes, including Big Brothers Big Sisters.
          </p>
          <p>
            With my combination of technical expertise and marketing savvy, I am confident that I have the skills and drive to make a meaningful impact in my career. I am eager to bring my passion and dedication to a new opportunity and contribute to the success of your team.
          </p>
        </div>
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