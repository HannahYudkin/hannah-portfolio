import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About me." text="Information about the completely serious, most work-appropriate individual named Max." />
      <Footer />
    </div>
  )
}

export default About