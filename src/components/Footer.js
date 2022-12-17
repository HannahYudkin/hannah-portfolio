import "./FooterStyles.css";
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Imaginary Lane</p>
              <p>Texas</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              (214) 631-2896
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              maxwilliams@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>More About Me</h4>
          <p>This is example content that you can fill with whatever infromation you think should go in the footer.</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer