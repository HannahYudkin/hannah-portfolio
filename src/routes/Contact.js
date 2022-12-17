import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact." text="Feel free to reach me at any of the options below" />
      <Footer />
    </div>
  )
}

export default Contact