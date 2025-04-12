import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Footer from "../components/layouts/Footer";
import BgText from "../components/shared/BgText";
import Button from "../components/shared/Button";
import Socials from "../components/shared/Socials";
import { ContactMe } from "../styles/ContactStyle";
import { ContactSection } from "../styles/HomeStyle";

const Contact = () => {
  const form = useRef();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (response) => {
          console.log("Success", response.text);
        },
        (err) => {
          console.log("Failed", err.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactMe>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <section className="contactSection">
        <BgText text={"Contact"} classname="ContactBgText" />
        <ContactSection>
          <div className="contactContainer">
            <h1 className="aboutTitle">Contact Me</h1>
            <p className="contactText">
              Let’s discuss your next project over a digital coffee. Got an
              idea? Need suggestions? Feel free to reach out at anytime.
            </p>
            <section className="contactMe">
              <section className="contactForm">
                <form className="contactInput" ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    id="NameInput"
                    placeholder="Your name"
                    onChange={onChange}
                    name="name"
                    value={name}
                  />
                  <br />
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="Email address"
                    onChange={onChange}
                    name="email"
                    value={email}
                  />
                  <br />
                  <textarea
                    id="MessageInput"
                    placeholder="Message..."
                    name="message"
                    value={message}
                    onChange={onChange}
                  ></textarea>
                  {/* <input type="submit" value="send" /> */}
                </form>
              </section>
              <div className="contactLocations">
                <Socials
                  mediaLink="https://www.linkedin.com/in/franklin-eke/"
                  myHandle="Linkedin"
                  classname="myLinkedin"
                />

                <Socials
                  mediaLink="https://github.com/frankkhuz"
                  myHandle="GitHub"
                  classname="myGitHub"
                />
              </div>
            </section>
            <Button
              text={"send"}
              classname="contactBtn"
              handleClick={sendEmail}
            />
          </div>
        </ContactSection>
      </section>

      <Footer classname="contact-footer" />
    </ContactMe>
  );
};

export default Contact;
