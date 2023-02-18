import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { FaMapMarker, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  
  const form = useRef();
  const notify = () => toast("Message sent!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4xtshxd",
        "template_7h5kj0y",
        form.current,
        "ugdhmYPqA5yI95L-R"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <>
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              {" "}
              <FaMapMarker />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                VJTI college
                <br />
                Matunga, Mumbai-400019, Maharashtra, India.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {" "}
              <FaEnvelope />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>rangawardhan@vjti.ac.in</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {" "}
              <FaPhoneAlt />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91 9921303246</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Get in Touch</h2>
            <div className="inputBox">
              <input type="text" name="name" id="name" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="email" id="email" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="phone"
                id="phone"
                required
              />
              <span> Phone number</span>
            </div>
            <div className="inputBox">
              <textarea required id="message" name="message" ></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="submit" value="Send" onClick={notify}/>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
