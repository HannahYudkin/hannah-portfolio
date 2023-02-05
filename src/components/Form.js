import "./FormStyles.css";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

import React, { useRef } from 'react'

const Form = () => {
  return (
    <div className="form">
      <a href="mailto:hannahyudkin@gmail.com?=Mail from our Website&body=Hey Hannah! I saw your website and wanted to get ahold of you.">Click Here to Send Me an Email</a>
      <a href="tel:+6039210450">Call me here at (603) 921-0450</a>
      <a href={'//www.linkedin.com/in/hannahyudkin/'} target="_blank" >Check Me Out on LinkedIn Here</a>
    </div >
  )
}
export default Form;