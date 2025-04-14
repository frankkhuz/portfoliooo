import React from "react";
import styled from "styled-components";
import CssLogo from "../components/layouts/assets/cssLogo.svg";
import HtmlIcon from "../components/layouts/assets/htmlIcon.svg";
import JsLogo from "../components/layouts/assets/jsLogo.svg";
import ReactJs from "../components/layouts/assets/reactjs.svg";
import Footer from "../components/layouts/Footer";
import BgText from "../components/shared/BgText";
import Button from "../components/shared/Button";
import { AboutMe } from "../styles/AboutStyle";
import { AboutAniebo } from "../styles/HomeStyle";

const About = () => {
  // Link to resume on google docs
  const url =
    "https://docs.google.com/document/d/1ikL9Tt1gO2N30OzJ_MpIPJOHsiqZUztlPsYP6H71dko/edit?usp=sharing";

  const downloadResume = () => {
    window.open(url, "_blank");
  };

  const AboutDavid = styled(AboutAniebo)`
    margin-top: 40px;

    @media ${({ theme }) => theme.mediaQueries.below768} {
      margin-top: 0;
    }
  `;

  return (
    <>
      <AboutMe>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <section className="aboutContainer">
          <BgText text={"About"} classname="AboutBgText" />
          <AboutDavid>
            <h1 className="aboutTitle">A bit about me</h1>
            <section className="aboutAniebo1">
              <div className="aboutText">
                <p>
                  I am a Software Engineer skilled in Next.js, ReactJS, MongoDB,
                  ExpressJS, and NodeJS (MERN Stack). I am passionate about
                  creating clean, intuitive user interfaces and contributing to
                  the world of web development.
                </p>
                <p className="aboutText2">
                  When I’m not deep into coding, you’ll probably find me
                  reading, playing games, or taking my dogs for a walk.
                </p>
                <p>
                  I’m looking for freelance or full-time roles in a fun and
                  challenging environment where I can keep learning and growing.
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
          </AboutDavid>
        </section>
        <Footer classname="aboutFooter socialIcon" />
      </AboutMe>
    </>
  );
};

export default About;
