import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About me."
        text="I am an innovative and tech-savvy marketer with a passion for blending creativity and technology to deliver impactful results. As a forward-thinking professional, I am currently seeking new opportunities to apply my unique skill set in a dynamic and challenging environment." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About