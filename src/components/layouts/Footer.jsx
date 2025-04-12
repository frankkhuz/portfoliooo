import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FooterSection } from "../../styles/footerStyle";

const Footer = ({ classname }) => {
  const footerYear = new Date().getFullYear();

  return (
    <FooterSection className={classname}>
      <div className="horizontalLine"></div>
      <div className="contactAddresses">
        <section className="copyRight">
          <p className="myInfo">&copy; Eke Franklin {footerYear} </p>
          <p className="myInfo myRole">Software Engineer</p>
          <a className="myEmail" href="mailto:frankkhuzy@gmail.com">
            frankkhuzy@gmail.com
          </a>
        </section>

        {/* social icons */}
        <div className="socialIcons">
          <a
            className="socialLink"
            href="https://github.com/frankkhuz"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/franklin-eke/"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
