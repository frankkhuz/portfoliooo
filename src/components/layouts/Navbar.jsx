import React, { useContext } from "react";
import { CgSortAz } from "react-icons/cg";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import PortfolioContext from "../../context/portfolio/PortfolioContext";
import { MyLink, Nav } from "../../styles/NavStyle";
// import Kkkkkk from "./assets/myLogo.svg";

const Navbar = () => {
  const { dispatch } = useContext(PortfolioContext);

  const headingStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    animation: "fadeInZoom 2s ease-in-out infinite alternate",
  };

  return (
    <Nav>
      <h1 className="myIntials">
        <NavLink to="/">
          <header
            className="myIntials"
            style={{
              textDecoration: "none",
              width: "60px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
            @keyframes fadeInZoom {
              0% {
                opacity: 0;
                transform: scale(0.8);
              }
              100% {
                opacity: 1;
                transform: scale(1.2);
              }
            }
          `,
              }}
            />
            <h1 style={headingStyle}>F</h1>
            {/* DA */}
          </header>
        </NavLink>
      </h1>
      <ul className="navLinkList">
        <li className="navLinkItem">
          <MyLink to="/about">About</MyLink>
        </li>
        <li className="navLinkItem">
          <MyLink to="/works">Works</MyLink>
        </li>
        <li className="navLinkItem">
          <MyLink to="/contact">Contact</MyLink>
        </li>
      </ul>
      {/* nabvar icons */}
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
      <CgSortAz
        className="sortIcon"
        onClick={() => dispatch({ type: "SET_MENU", payload: true })}
      />
    </Nav>
  );
};

export default Navbar;
