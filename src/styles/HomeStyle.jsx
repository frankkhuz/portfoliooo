import styled from "styled-components"

export const MyHome = styled.div`
  background-color: transparent;
  padding-top: 5rem;
  position: relative;
  width: 100%;
  z-index: 20;

  .pattern1 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 12.4rem;
  }

  .pattern2 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }
  .pattern3 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }

  .pattern4 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 65rem;
  }
  .pattern5 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 82.5rem;
  }
  .pattern6 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 82.5rem;
  }
  .pattern7 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 115rem;
  }
  .pattern8 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 115rem;
  }
  .pattern9 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 134rem;
  }

  .myNameContainer {
    width: 89%;
    margin: auto;
    z-index: 99;
    padding-top: 3.4rem;
  }

  .aboutAniebo {
    display: flex;
    flex-direction: column-reverse;
  }

  .xbox {
    font-size: 3.5rem;
    position: relative;
    text-shadow: 0px 0px 3px ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.barColor};
    font-family: Chivo;
    font-style: normal;
    font-weight: 900;
    z-index: 99;
    top: 0;
  }

  .fullName {
    display: flex;
    grid-gap: 0.9rem;
    margin-top: 35.2px;
  }
  .xbox .inside {
    font-size: 3.5rem;
    background-image: linear-gradient(180deg, #f8f6ef 10%, #f8f6ef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-shadow: none;
    top: -5%;
    left: -1%;
    position: absolute;
    z-index: 99;
  }
  .xbox:before {
    content: attr(data-char);
    font-size: 3.5rem;
    position: absolute;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.purple};
    clip-path: polygon(
      0% 100%,
      0% 0%,
      100% 0%,
      100% 50%,
      50% 50%,
      100% 50%,
      100% 100%
    );
    animation-name: loading;
    animation-duration: 10s;
    animation-delay: -0.1s;
    animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);
    animation-direction: reverse;
    mix-blend-mode: color;
  }
  .xbox:after {
    content: attr(data-char);
    font-size: 3.5rem;
    position: absolute;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.purple};
    clip-path: polygon(
      0% 100%,
      0% 0%,
      100% 0%,
      100% 50%,
      50% 50%,
      100% 50%,
      100% 100%
    );
    animation-name: loading;
    animation-duration: 10s;
    animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);
    animation-direction: reverse;
    mix-blend-mode: color;
    left: 0;
    top: 0;
  }
  @keyframes loading {
    0% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 100%
      );
    }
    12.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 100%,
        100% 100%
      );
    }
    25% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 100%,
        50% 100%
      );
    }
    37.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 50%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 50%,
        0% 50%
      );
    }
    62.5% {
      clip-path: polygon(
        0% 0%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 0%,
        0% 0%
      );
    }
    75% {
      clip-path: polygon(
        50% 0%,
        50% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 0%,
        50% 0%
      );
    }
    87.5% {
      clip-path: polygon(
        100% 0%,
        100% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 0%,
        100% 0%
      );
    }
    100% {
      clip-path: polygon(
        100% 50%,
        100% 50%,
        100% 50%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 50%
      );
    }
  }
  @keyframes loading2 {
    0% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 100%
      );
    }
    12.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 100%,
        100% 100%
      );
    }
    25% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 100%,
        50% 100%
      );
    }
    37.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 50%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 50%,
        0% 50%
      );
    }
    62.5% {
      clip-path: polygon(
        0% 0%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 0%,
        0% 0%
      );
    }
    75% {
      clip-path: polygon(
        50% 0%,
        50% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 0%,
        50% 0%
      );
    }
    87.5% {
      clip-path: polygon(
        100% 0%,
        100% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 0%,
        100% 0%
      );
    }
    100% {
      clip-path: polygon(
        100% 50%,
        100% 50%,
        100% 50%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 50%
      );
    }
  }

  .homeFooter {
    position: absolute;
    bottom: 0;
  }
  .currentRole {
    position: relative;
    z-index: 99;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
  .letsCodeBtn {
    margin-top: 3rem;
    position: relative;
    z-index: 20;
    display: inline-block;
  }

  .img-circle {
    position: absolute;
    left: -40px;
    top: -40px;
  }
  .img-circle2 {
    position: absolute;
    top: -100px;
    right: -50px;
  }

  .homeAboutMe {
    position: relative;
    z-index: 20;
    width: 100%;
  }
  .homeAboutBgText {
    position: absolute;
    top: 25px;
  }

  .homeAboutMeText {
    margin-left: -13rem;
    margin-top: 19rem;
  }

  .projectSection,
  .contactSection {
    margin-top: 6rem;
    z-index: 20;
    position: relative;
    width: 100%;
  }

  .contact-footer {
    width: 89%;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 3.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    .contact-footer {
      width: 95%;
      margin: auto;
      margin-bottom: 2rem;
      position: absolute;
      padding-left: 30px;
      margin-top: 100px;
      padding-bottom: 2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.above768} {
    .homeAboutBgText {
      top: 40px;
    }
    .fullName {
      display: flex;
      flex-direction: column;
      grid-gap: unset;
      margin-top: unset;
    }

    .xbox,
    .xbox .inside,
    .xbox:before,
    .xbox:after {
      font-size: 5.8rem;
    }

    .aboutAniebo {
      display: unset;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    .pattern1 {
      top: 14.5rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern2 {
      top: 36.5rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern3 {
      top: 36.5rem;
      transform: skewY(15.5deg);
      height: 13rem;
    }
    .pattern4 {
      transform: skewY(15.5deg);
      height: 13rem;
      top: 87.7rem;
    }
    .pattern5 {
      transform: skewY(15.5deg);
      top: 108.8rem;
    }
    .pattern6 {
      transform: skewY(-15.5deg);
      top: 108.8rem;
    }
    .pattern7 {
      top: 150rem;
      transform: skewY(15.5deg);
      height: 13rem;
    }
    .pattern8 {
      top: 150rem;
      transform: skewY(-15.5deg);
    }
    .pattern9 {
      top: 164.5rem;
      transform: skewY(-15.5deg);
      display: none;
    }
    .xbox1 {
      margin-top: -1.9rem;
    }
    .fullName {
      display: flex;
      flex-direction: column;
      grid-gap: unset;
    }
    .xbox,
    .xbox .inside,
    .xbox:before,
    .xbox:after {
      font-size: 8.5rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    .pattern1 {
      top: 14.3rem;
      transform: skewY(-14deg);
    }
    .pattern2 {
      top: 36rem;
      transform: skewY(-14deg);
    }
    .pattern3 {
      top: 36.5rem;
      transform: skewY(14deg);
    }
    .pattern4 {
      transform: skewY(14deg);
      top: 89rem;
    }
    .pattern5 {
      transform: skewY(14deg);
      top: 110rem;
    }
    .pattern6 {
      transform: skewY(-14deg);
      top: 110rem;
    }
    .pattern7 {
      top: 150rem;
      transform: skewY(14deg);
    }
    .pattern8 {
      top: 150rem;
      transform: skewY(-14deg);
    }
    .pattern9 {
      display: none;
    }
  }
  @media (min-width: 481px) and (max-width: 1023px) {
    .pattern1 {
      height: 12rem;
      transform: skewY(-17deg);
    }
    .pattern2 {
      height: 12rem;
      transform: skewY(-17deg);
      top: 32rem;
    }
    .pattern3 {
      height: 12rem;
      transform: skewY(17deg);
      top: 32rem;
    }
    .pattern4 {
      transform: skewY(17deg);
      top: 67rem;
    }
    .pattern5 {
      transform: skewY(17deg);
      top: 84rem;
    }
    .pattern6 {
      transform: skewY(-17deg);
      top: 84rem;
    }
    .pattern7 {
      transform: skewY(17deg);
      top: 117rem;
    }
    .pattern8 {
      transform: skewY(-17deg);
      top: 117rem;
    }
    .pattern9 {
      transform: skewY(-17deg);
      top: 138rem;
    }

    .fullName {
      margin-top: 15px;
    }
  }

  @media (max-width: 280px) {
    .xbox,
    .xbox .inside,
    .xbox:before,
    .xbox:after {
      font-size: 2.5rem;
    }
  }

  .homeAboutSection {
    margin-top: 3rem;
  }
`
export const AboutAniebo = styled.section`
  width: 89%;
  margin: auto;
  padding-top: 5.8rem;

  .aboutText {
    padding-top: clamp(0.1rem, 0.5rem, 2rem);
  }
  .aboutText > * {
    padding-top: 1rem;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.3125rem;
  }
  .aboutText2 {
    padding-top: 0;
  }
  .aboutAniebo1 {
    position: relative;
    z-index: 20;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    margin-top: 1.5rem;
  }

  .downloadResumeButton {
    margin-top: 2rem;
  }
  .skillsCard {
    border-top: 3px solid ${({ theme }) => theme.colors.purple};
    background: #11171b;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    height: 270px;
    padding: 25px 40px 0 40px;
  }

  .skillSet {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    grid-gap: 1.5rem;
    margin-top: 0.4rem;
  }
  .cssLogo {
    width: 42.2px;
    height: 40px;
  }
  .skillSetRating {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 0.6rem;
  }
  .skillRatingBar {
    background: ${({ theme }) => theme.colors.progressBar};
    height: 6px;
  }

  // media queries for my about second paragraph text
  @media ${({ theme }) => theme.mediaQueries.above768} {
    .aboutText2 {
      padding-top: 0.7rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.below768} {
    .aboutAniebo1 {
      display: unset;
    }
    .skillsCard {
      margin-top: 2rem;
    }
    .fullName {
      margin-top: 2.2rem;
      border: 2px solid yellow;
    }
    .skillSection {
      margin-top: unset;
    }
  }
`

export const ProjectStats = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.lineColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineColor};
  margin-top: 5.5rem;

  .projectStatsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    padding: 2rem 0;
  }
  .myStats {
    color: black;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.dark};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #8afaec;
    font-family: Chivo;
    font-style: black;
    font-weight: 500;
    font-size: 60px;
    animation: effect 6s infinite alternate;
  }
  @media ${({ theme }) => theme.mediaQueries.below768} {
    display: none;
  }
`

export const ProjectSection = styled.section`
  border-top: 1px solid transparent;
  .projectSectionContainer {
    width: 89%;
    margin: auto;
    margin-top: 40px;
  }
  .projectParagraph {
    padding-top: 2rem;
  }
  .homeProjectBgText {
    position: absolute;
    top: 20px;
  }
  .myProject {
    display: flex;
    grid-gap: 0.8rem;
    justify-content: space-between;
    position: relative;
    z-index: 30;
    width: 89%;
    margin: auto;
    margin-top: 3.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
  }

  @media ${({ theme }) => theme.mediaQueries.above768} {
    .projectParagraph {
      width: 68%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    .projectParagraph {
      width: 48%;
    }
  }
`
export const ContactSection = styled.section`
  
  .contactContainer {
    width: 89%;
    margin: auto;
    margin-top: 40px;
  }
  .contactText {
    width: 45%;
    color: ${({ theme }) => theme.colors.textColor};
    margin-top: 32px;
    position: relative;
    z-index: 20;
  }

  .contactMe {
    position: relative;
    z-index: 20;
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  #NameInput,
  #emailInput {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.textColor};
    outline: none;
    border: none;
  }

  #MessageInput {
    width: 100%;
    background: ${({ theme }) => theme.colors.borderColor};
    padding: 10px 0px 150px 10px;
    color: ${({ theme }) => theme.colors.textColor};
    outline: none;
    border: none;
    resize: none;
  }

  .contactLocations {
    position: relative;
  }

  .myLinkedin {
    position: absolute;
    left: 0px;
  }

  .myTwitter {
    position: absolute;
    right: 0px;
    top: 30px;
  }

  .myGitHub {
    position: absolute;
    bottom: 65px;
  }

  .myCodewars {
    position: absolute;
    right: 0px;
    bottom: 50px;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    .contactMe {
      display: unset;
    }

    .contactText {
      width: 100%;
      padding-bottom: 2rem;
    }
    .contactForm {
      display: block;
      width: 100%;

      .contactInput {
        width: 100%;
      }

      #NameInput,
      #emailInput,
      
    }
    .contactLocations {
      display: none;
    }
    .contactBtn{
      float: right;
      margin-bottom: 2rem;
      margin-top:35px;  
    }
  }



  @media ${({ theme }) => theme.mediaQueries.above768} {
    #MessageInput {
         padding: 10px 0px 200px 10px;
         margin-bottom: 1rem;
      }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
     .myLinkedin {
    position: absolute;
    left: 10px;
    top: 40px;
  }

  .myTwitter {
    position: absolute;
    right: 55px;
    top: 35px;
    
  }

  .myGitHub {
    bottom: 65px;
    left: 30px;
  }

  .myCodewars {
    position: absolute;
    right: 55px;
    bottom: 45px;
  }
  .contactMe {
    grid-gap: 6rem;
  }
  }
`
