import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html{
  // height: 100
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
	width: 7px;
	color: #046d33;
	transition: all 0.4s ease;
}
::-webkit-scrollbar-thumb {
	background: ${({ theme }) => theme.colors.lightColor};
	border-radius: 7px;
	width: 7px;
	transition: all 0.4s ease;
}
::-webkit-scrollbar-track {
	background: ${({ theme }) => theme.colors.dark};
	border-radius: 7px;
	width: 7px;
}
body{
  color: ${({ theme }) => theme.colors.textColor};
  background: #0C1114;
  font-family: 'Work Sans';
}
.aboutTitle {
    position: relative;
    z-index: 30;
    font-family: "Chivo";
    font-style: black;
    font-weight: 900;
    font-size: clamp(2.1rem, 3vw, 2.8125rem);
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.neutral};
    white-space: nowrap;
  }
  .sectionDescription{
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.3125rem;
  }
`

export default GlobalStyle
