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
              <a href="tel:+6039210450">
                <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                (603) 921-0450
              </a>
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
          <p>I am always looking to improve myself and jump into the next opportunity!</p>
          <div className="social">
            {/* <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} /> */}
            <a href={'//www.linkedin.com/in/hannahyudkin/'} target="_blank" >
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer