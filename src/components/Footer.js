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
              <p>Nashua, NH 03060</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              (603) 921-0450
            </h4>
          </div>
          <div className="email">
            <h4>
              <a href="mailto:hannahyudkin@gmail.com?=Mail from our Website&body=Hey Hannah! I saw your website and wanted to get ahold of you.">
                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                hannahyudkin@gmail.com
              </a>
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