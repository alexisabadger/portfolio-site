import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  const form = useRef();

  //emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_77xkc8a', 'template_jvd2xfu', form.current, 'GCdOxeemBqwp4uKzq')
      .then((result) => {
          setMessage(true); //not emailjs
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  //end emailjs

  const [message, setMessage] = useState(false);

  //const handleSubmit = (e) => {
    //e.preventDefault();
    //setMessage(true);
  //};
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name"/>
          <input type="text" placeholder="Email" name="user_email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit" value="Send">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
