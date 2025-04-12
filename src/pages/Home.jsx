import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Carousel from "../components/carousel/Carousel"
import Footer from "../components/layouts/Footer";
import Skills from "../components/layouts/Skills";
import CssLogo from "../components/layouts/assets/cssLogo.svg";
import HtmlIcon from "../components/layouts/assets/htmlIcon.svg";
import JsLogo from "../components/layouts/assets/jsLogo.svg";
import letsCodeIcon1 from "../components/layouts/assets/letcodeicon1.svg";
import letsCodeIcon2 from "../components/layouts/assets/letcodeicon2.svg";
import ReactJs from "../components/layouts/assets/reactjs.svg";
import BgText from "../components/shared/BgText";
import Button from "../components/shared/Button";
import Socials from "../components/shared/Socials";
import {
  AboutAniebo,
  ContactSection,
  MyHome,
  ProjectSection,
  ProjectStats,
} from "../styles/HomeStyle";

const Home = () => {
  // contact me using Emailjs
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

  // Navigate to google drive
  const navigate = useNavigate();
  const url =
    "https://docs.google.com/document/d/15RDpV_W0qUYCkKPd6ArA2nWMSkKBphRUO0LAM1G1hDU/edit?usp=sharing";

  // Route to my About page
  const handleClick = () => {
    navigate("/about");
  };

  // Open Resume in another tab
  const downloadResume = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <MyHome>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <div className="pattern4"></div>
        <div className="pattern5"></div>
        <div className="pattern6"></div>
        <div className="pattern7"></div>
        <div className="pattern8"></div>
        <div className="pattern9"></div>
        <section className="myNameContainer">
          <div className="aboutAniebo">
            <div className="fullName">
              <div className="xbox" data-char="Eke">
                Eke<div className="inside">Eke</div>
              </div>
              <div className="xbox xbox1" data-char=" Franklin">
                Franklin<div className="inside"> Franklin</div>
              </div>
            </div>
            <Skills classNames="skillSection" />
          </div>
          <p className="currentRole">Software Engineer</p>
          <div className="letsCodeBtn">
            <img src={letsCodeIcon1} alt="" className="img-circle" />
            <img
              src={letsCodeIcon2}
              alt=""
              className="img-circle2"
              sizes="60px"
            />
            <Button text={"Let’s code"} handleClick={handleClick} />
          </div>
        </section>
        <section className="homeAboutMe">
          <BgText text={"About"} classname="homeAboutBgText" />
          <section className="homeAboutSection">
            <AboutAniebo>
              <h1 className="aboutTitle">A bit about me</h1>
              <section className="aboutAniebo1">
                <div className="aboutText">
                  <p>
                    I am a Software Engineer with skills in MongoDB, ExpressJS,
                    ReactJS, and NodeJS (MERN Stack), passionate about
                    developing clean, intuitive interfaces and adding my bit to
                    the world of web development.
                  </p>
                  <p className="aboutText2">
                    When I am not knee-deep into programming, I can be found
                    reading playing games or going for a walk with my dogs.
                  </p>
                  <p>
                    I am open to freelance and full-time positions in an
                    environment which presents fun challenges with provision for
                    constant growth.
                  </p>
                  <Button
                    text={"Download Resume"}
                    classname="downloadResumeButton"
                    handleClick={downloadResume}
                  />
                </div>
                <div className="skillsCard">
                  <div className="skillSet">
                    <img className="cssLogo" src={CssLogo} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                  <div className="skillSet">
                    <img className="cssLogo" src={HtmlIcon} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                  <div className="skillSet">
                    <img className="cssLogo" src={ReactJs} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                  <div className="skillSet">
                    <img className="cssLogo" src={JsLogo} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                </div>
              </section>
            </AboutAniebo>
          </section>
          <ProjectStats></ProjectStats>
          <section className="projectSection">
            <BgText text={"Project"} classname="homeProjectBgText" />
            <ProjectSection>
              <div className="projectSectionContainer">
                <h1 className="aboutTitle">My Portfolio</h1>
                <div className="projectParagraph">
                  <p className="sectionDescription">
                    Here are some select projects I have been excited to work on
                    with amazing and talented people.
                  </p>
                  <p className="sectionDescription">
                    This is just a glimpse of my capabilities as a developer. I
                    would definitely like to add a touch of my magic to your
                    project.
                  </p>
                </div>
              </div>
            </ProjectSection>
          </section>

          <section className="contactSection">
            <BgText text={"Contact"} classname="contactBgText" />
            <ContactSection>
              <div className="contactContainer">
                <h1 className="aboutTitle">Contact Me</h1>
                <p className="contactText">
                  Let’s discuss your next project over a digital coffee. Got an
                  idea? Need suggestions? Feel free to reach out at anytime.
                </p>
                <section className="contactMe">
                  <section className="contactForm">
                    <form
                      className="contactInput"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <input
                        type="text"
                        id="NameInput"
                        placeholder="Your name"
                        value={name}
                        onChange={onChange}
                      />
                      <br />
                      <input
                        type="email"
                        id="emailInput"
                        placeholder="Email address"
                        value={email}
                        onChange={onChange}
                      />
                      <br />
                      <textarea
                        id="MessageInput"
                        placeholder="Message..."
                        value={message}
                        onChange={onChange}
                      ></textarea>
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
                <Button text={"send"} className="contactBtn" />
              </div>
            </ContactSection>
          </section>
        </section>
        <Footer classname="contact-footer" />
      </MyHome>
    </>
  );
};

export default Home;
