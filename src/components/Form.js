import "./FormStyles.css";
import emailjs from '@emailjs/browser';

import React, { useRef } from 'react'

// const Form = () => {
//   return (
{/* <div className="form" id="contact-form">
  <form onSubmit={onSubmit}>
    <label>Your Name</label>
    <input type="text" name="from_name" value={toSend.from_name}
      onChange={handleChange}></input>
    <label>Email</label>
    <input type="email"></input>
    <label>Subject</label>
    <input type="text"></input>
    <label>Message</label>
    <textarea rows="6" placeholder="Type your message here" value={toSend.message}
      onChange={handleChange} />
    <button className="btn" type='submit'>Submit</button>
  </form> */}

// </div>
//   )
// }


export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qrgg6mi', 'template_5kdngf7', form.current, 'bT0f7FoFPfQ-hNaHo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="user_name"></input>
      <label>Email</label>
      <input type="email" name="user_email"></input>
      <label>Subject</label>
      <input type="text"></input>
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here" name="message" />
      <button className="btn" value='Send'>Submit</button>
    </form>
  );
};
export default Form;